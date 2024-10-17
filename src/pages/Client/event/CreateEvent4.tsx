import React, { useEffect, useState } from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import {
  Modal,
  Form,
  Select,
  InputNumber,
  Button,
  Input,
  Radio,
  Menu,
  Typography,
  Row,
  Col,
  Avatar,
  Image,
  FormListFieldData,
} from 'antd';
import {
  PlusOutlined,
  MinusCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import moment, { Moment } from 'moment';
import AddressForm from '#/shared/components/common/Address';
import { userVar } from '#/graphql/cache';
import { RangeValue } from 'rc-picker/lib/interface';
import PrimaryButton from '#/shared/components/buttons/PrimaryButton';
import {
  EventData,
  useGetDevicesAvailableQuery,
  useGetHumanResourcesAvailableQuery,
  useGetLocationsAvailableQuery,
  useRentalServicesMutation,
} from '#/generated/schemas';
import { formatCurrency, showError, showSuccess } from '#/shared/utils/tools';
import usePagination from '#/shared/hooks/usePagination';
import { DatePicker } from '#/shared/components/common/DatePicker';
import { NO_IMAGE } from '#/shared/utils/constant';
import { DynamicTimeLine } from './TimeLineComponent';
import dayjs from 'dayjs';

const { Option } = Select;

interface Service {
  id: string;
  name: string;
  price: number;
  img: string;
}

interface Location {
  id: string;
  name: string;
  address: string;
  hirePrice: number;
}

interface ServiceField {
  id: string;
  quantity: number;
  unitPrice: number;
  intoMoney: number;
  name?: string;
  img?: string;
}

interface FormData {
  devices: ServiceField[];
  employees: ServiceField[];
  contractDetails: {
    contractName: string;
    orgTime: RangeValue<Moment>;
    customerName: string;
    phoneNumber: string;
    customerAddress: string;
    creationDate: string;
    useCompanyLocation: boolean;
    selectedLocation: string;
    customLocation: string;
  };
  timelines: {
    startDate: Moment;
    description: string;
  }[];
}

interface Props {
  event: EventData | null;
}

const ContractModal: React.FC<Props> = ({ event }: Props) => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [serviceType, setServiceType] = useState<'1' | '2'>('1');
  const user = userVar();
  const [selectedDevices, setSelectedDevices] = useState<Service[]>([]);
  const [selectedEmployees, setSelectedEmployees] = useState<Service[]>([]);
  const [selectedLocationPrice, setSelectedLocationPrice] = useState<number>(0);
  const [showDeviceSelect, setShowDeviceSelect] = useState(false);
  const [showEmployeeSelect, setShowEmployeeSelect] = useState(false);

  const initialDevices =
    event?.rental?.devices?.map(device => ({
      id: device.id,
      quantity: device.quantity,
      unitPrice: device.hourlyRentalFee,
      intoMoney: device.quantity * device.hourlyRentalFee,
      name: device.name,
      img: device.img,
    })) || [];

  const initialEmployees =
    event?.rental?.humanResources?.map(employee => ({
      id: employee.id,
      quantity: employee.quantity,
      unitPrice: employee.hourlySalary,
      intoMoney: employee.quantity * employee.hourlySalary,
      name: employee.name,
      img: employee?.img ?? '',
    })) || [];

  const initialTimelines = event?.rental?.timelines?.map(item => ({
    startDate: moment()
      .startOf('day')
      .add(14, 'days')
      .hour(moment(item.startTime).hour())
      .minute(moment(item.startTime).minute()),
    description: item.description,
  }));

  const {
    control,
    handleSubmit,
    watch,
    reset,
    setValue,
    getValues,
    getFieldState,
  } = useForm<FormData>({
    defaultValues: {
      devices: [],
      employees: [],
      contractDetails: {
        contractName: 'HỢP ĐỒNG TỔ CHỨC SỰ KIỆN',
        orgTime: [moment().add(14, 'days'), moment().add(15, 'days')],
        customerName: `${user?.firstName ?? ''} ${user?.lastName ?? ''}`,
        phoneNumber: user?.phoneNumber || '',
        customerAddress: '',
        creationDate: moment().format('YYYY-MM-DD'),
        useCompanyLocation: true,
        selectedLocation: '',
        customLocation: '',
      },
      timelines: initialTimelines || [],
    },
  });

  // console.log('initialDevices', initialDevices);

  useEffect(
    () => {
      if (event) {
        reset({
          devices: initialDevices,
          employees: initialEmployees,
          contractDetails: {
            contractName: 'HỢP ĐỒNG TỔ CHỨC SỰ KIỆN',
            orgTime: [moment().add(14, 'days'), moment().add(15, 'days')],
            customerName: `${user?.firstName ?? ''} ${user?.lastName ?? ''}`,
            phoneNumber: user?.phoneNumber || '',
            customerAddress: '',
            creationDate: moment().format('YYYY-MM-DD'),
            useCompanyLocation: true,
            selectedLocation: '',
            customLocation: '',
          },
          timelines: initialTimelines || [],
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [event],
  );

  const {
    fields: deviceFields,
    append: deviceAppend,
    remove: deviceRemove,
  } = useFieldArray({
    control,
    name: 'devices',
  });

  const {
    fields: employeeFields,
    append: employeeAppend,
    remove: employeeRemove,
  } = useFieldArray({
    control,
    name: 'employees',
  });

  const watchDevices = watch('devices');
  const watchEmployees = watch('employees');
  const watchDate = watch('contractDetails.orgTime');
  const datedDiff = watchDate?.[1]?.diff(watchDate?.[0], 'days') || 1;

  const calculateServiceTotal = (): number => {
    const devices = getValues('devices');
    const employees = getValues('employees');

    const deviceTotal =
      devices?.reduce(
        (total, { intoMoney }): number => total + Number(intoMoney) ?? 0,
        0,
      ) ?? 0;

    const employeeTotal =
      employees?.reduce(
        (total, { intoMoney }): number => total + Number(intoMoney) ?? 0,
        0,
      ) ?? 0;
    return (deviceTotal + employeeTotal) * datedDiff;
  };

  const handleQuantityChange = (
    index: number,
    value: number | null,
    type: 'devices' | 'employees',
  ) => {
    if (type === 'devices') {
      setValue(`devices.${index}.quantity`, value || 0);
      setValue(
        `devices.${index}.intoMoney`,
        (watchDevices[index].unitPrice || 0) * (value || 0),
      );
    } else {
      setValue(`employees.${index}.quantity`, value || 0);
      setValue(
        `employees.${index}.intoMoney`,
        (watchEmployees[index].unitPrice || 0) * (value || 0),
      );
    }
  };

  const [RentalServices, { loading: createEventLoading }] =
    useRentalServicesMutation({
      onCompleted: data => {
        // navigate(`/contract-management/${data.createEventRequest.id}`);
        showSuccess('Tạo hợp đồng thành công');
        setIsModalVisible(false);

        reset({
          devices: [],
          employees: [],
          contractDetails: {
            contractName: 'HỢP ĐỒNG TỔ CHỨC SỰ KIỆN',
            orgTime: [moment(), moment().add(1, 'day')],
            customerName: `${user?.firstName ?? ''} ${user?.lastName ?? ''}`,
            phoneNumber: user?.phoneNumber || '',
            customerAddress: '',
            creationDate: moment().format('YYYY-MM-DD'),
            useCompanyLocation: true,
            selectedLocation: '',
            customLocation: '',
          },
          timelines: [],
        });
        setSelectedDevices([]);
        setSelectedEmployees([]);
      },
      onError: error => showError(error),
    });

  const onSubmit = (data: FormData) => {
    const timeline: {
      startDate: Date;
      description: string;
    }[] = form.getFieldValue('timelines');
    console.log('🚀 ~ onSubmit ~ timeline:', timeline);
    if (!data.devices.length && !data.employees.length) {
      showError('Vui lòng chọn ít nhất một dịch vụ');
      return;
    }

    const pattern = new RegExp(/(84|0[3|5|7|8|9])+([0-9]{8})\b/);
    if (
      !data.contractDetails.phoneNumber ||
      !pattern.test(data.contractDetails.phoneNumber)
    ) {
      showError('Vui lòng nhập số điện thoại hợp lệ');
      return;
    }

    RentalServices({
      variables: {
        input: {
          timeline: timeline?.map(item => ({
            timeStart: dayjs(item.startDate).toISOString(),
            description: item.description,
          })),
          contractDetails: {
            contractName: data.contractDetails.contractName,
            customerAddress: data.contractDetails.customerAddress,
            customLocation: data.contractDetails.customLocation,
            customerName: data.contractDetails.customerName,
            orgTime: {
              startTime:
                !data.contractDetails.orgTime ||
                  data.contractDetails.orgTime[0] === null
                  ? moment().toISOString()
                  : data.contractDetails.orgTime[0].toISOString(),
              endTime:
                !data.contractDetails.orgTime ||
                  data.contractDetails.orgTime[1] === null
                  ? moment().add(1, 'day').toISOString()
                  : data.contractDetails.orgTime[1].toISOString(),
            },
            phoneNumber: data.contractDetails.phoneNumber,
            selectedLocation: data.contractDetails.selectedLocation,
            useCompanyLocation: data.contractDetails.useCompanyLocation,
          },
          devices: data.devices.map(device => ({
            id: device.id,
            quantity: device.quantity,
          })),
          employees: data.employees.map(employee => ({
            id: employee.id,
            quantity: employee.quantity,
          })),
          eventId: event?.id,
        },
      },
    });
    console.log('Contract data submitted:', data);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    reset({
      devices: [],
      employees: [],
      contractDetails: {
        contractName: 'HỢP ĐỒNG TỔ CHỨC SỰ KIỆN',
        orgTime: [moment(), moment().add(1, 'day')],
        customerName: `${user?.firstName ?? ''} ${user?.lastName ?? ''}`,
        phoneNumber: user?.phoneNumber || '',
        customerAddress: '',
        creationDate: moment().format('YYYY-MM-DD'),
        useCompanyLocation: true,
        selectedLocation: '',
        customLocation: '',
      },
      timelines: [],
    });
    form.resetFields();
    setSelectedDevices([]);
    setSelectedEmployees([]);
  };

  const disabledDate = (current: Moment) => {
    return current < moment().add(13, 'days');
  };

  // device data
  const {
    currentPage: currentDevicePage,
    pageSize: devicePageSize,
    setCurrentPage: setCurrentDevicePage,
  } = usePagination({
    defaultPageSize: 100,
  });

  const { data: devicesData, loading: deviceLoading } =
    useGetDevicesAvailableQuery({
      variables: {
        input: {
          page: currentDevicePage,
          limit: devicePageSize,
          endTime: watch('contractDetails.orgTime')?.[1]?.toISOString(),
          startTime: watch('contractDetails.orgTime')?.[0]?.toISOString(),
        },
      },
      onCompleted: data => {
        console.log(data);
      },
      onError(error) {
        showError(error);
      },
    });

  const deviceServicesList: Service[] =
    devicesData?.getDevicesAvailable?.items?.map(device => ({
      id: device.id,
      name: device.name,
      price: device.hourlyRentalFee,
      img: device.img,
    })) || [];

  // employee data
  const { data: employeesData, loading: employeeLoading } =
    useGetHumanResourcesAvailableQuery({
      variables: {
        input: {
          page: 1,
          limit: 100,
          endTime: watch('contractDetails.orgTime')?.[1]?.toISOString(),
          startTime: watch('contractDetails.orgTime')?.[0]?.toISOString(),
        },
      },
      fetchPolicy: 'no-cache',
      onCompleted: data => {
        console.log(data);
      },
      onError(error) {
        showError(error);
      },
    });
  const employeeServicesList: Service[] =
    employeesData?.getHumanResourcesAvailable?.items?.map(employee => ({
      id: employee.id,
      name: employee.name,
      price: employee.hourlySalary,
      img: employee?.img ?? '',
    })) || [];

  // location data
  const { data: locationsData, loading: locationLoading } =
    useGetLocationsAvailableQuery({
      variables: {
        input: {
          page: 1,
          limit: 10,
          endTime: watch('contractDetails.orgTime')?.[1]?.toISOString(),
          startTime: watch('contractDetails.orgTime')?.[0]?.toISOString(),
        },
      },
      onCompleted: data => {
        console.log(data);
      },
      onError(error) {
        showError(error);
      },
    });

  const locations: Location[] =
    locationsData?.getLocationsAvailable?.items?.map(location => ({
      id: location.id,
      name: location.name,
      address: location.address,
      hirePrice: location.hourlyRentalFee,
    })) || [];

  useEffect(() => {
    if (!watch('contractDetails.useCompanyLocation')) {
      setSelectedLocationPrice(0);
    }
    form.setFieldValue('timelines', initialTimelines);
  }, [watch('contractDetails.useCompanyLocation')]);

  return (
    <>
      <PrimaryButton
        className="h-full rounded-md py-3  text-xl"
        onClick={showModal}
      >
        Đăng kí tổ chức sự kiện
      </PrimaryButton>
      <Modal
        open={isModalVisible}
        onCancel={handleCancel}
        width={1500}
        title={
          <Typography.Title level={3} className={'text-[#fcc45c]'}>
            <ExclamationCircleOutlined className={'mr-4'} />
            Tạo hợp đồng tổ chức sự kiện
          </Typography.Title>
        }
        onOk={form.submit}
        footer={[
          <Button key="back" onClick={handleCancel} className="text-[#0f172a]">
            Hủy
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={createEventLoading}
            onClick={form.submit}
            className="bg-[#0f172a]"
          >
            Tạo hợp đồng
          </Button>,
        ]}
      >
        <Form
          form={form}
          onFinish={handleSubmit(onSubmit)}
          className={'rounded-lg p-4 '}
          initialValues={{
            devices: initialDevices,
            employees: initialEmployees,
            contractDetails: {
              contractName: 'HỢP ĐỒNG TỔ CHỨC SỰ KIỆN',
              orgTime: [moment(), moment().add(1, 'day')],
              customerName: `${user?.firstName ?? ''} ${user?.lastName ?? ''}`,
              phoneNumber: user?.phoneNumber || '',
              customerAddress: '',
              creationDate: moment().format('YYYY-MM-DD'),
              useCompanyLocation: true,
              selectedLocation: '',
              customLocation: '',
            },
          }}
        >
          <Row gutter={[16, 16]} className={'flex w-full'}>
            
            

            <Col
              lg={24}
              md={24}
              className={
                'my-4 rounded-md border-[1px] border-solid border-[#ccc] p-4 shadow-lg'
              }
            >
              <div className="border-l pl-4">
                <Row>
                  <Typography.Title level={4}>
                    Thông tin hợp đồng
                  </Typography.Title>
                </Row>
                <Row>
                  <Form.Item label="Tên hợp đồng" required>
                    <Controller
                      control={control}
                      rules={{ required: 'Vui lòng nhập tên hợp đồng' }}
                      name="contractDetails.contractName"
                      render={({ field }) => <Input {...field} />}
                    />
                  </Form.Item>
                  <Form.Item label="Địa chỉ tổ chức" required>
                    <Controller
                      control={control}
                      name="contractDetails.useCompanyLocation"
                      render={({ field }) => (
                        <Radio.Group {...field}>
                          <Radio value={true}>
                            Sử dụng địa điểm tổ chức do công ty chúng tôi cung
                            cấp
                          </Radio>
                          <Radio value={false}>
                            Sử dụng địa điểm tổ chức của bạn
                          </Radio>
                        </Radio.Group>
                      )}
                    />
                  </Form.Item>
                  {watch('contractDetails.useCompanyLocation') ? (
                    <Form.Item>
                      <Controller
                        control={control}
                        name="contractDetails.selectedLocation"
                        render={({ field }) => (
                          <Select
                            {...field}
                            style={{ width: '100%' }}
                            onSelect={(value: string) => {
                              setSelectedLocationPrice(
                                locations.find(
                                  location => location.id === value,
                                )?.hirePrice || 0,
                              );
                              return value;
                            }}
                          >
                            {locations.map(location => (
                              <Option key={location.id} value={location.id}>
                                <div className="flex justify-between">
                                  <div className="my-2 align-middle text-base">
                                    {location.name} <i>({location.address})</i>
                                  </div>
                                  <div className="my-2 align-middle text-base">
                                    {formatCurrency(location.hirePrice)} / ngày
                                  </div>
                                </div>
                              </Option>
                            ))}
                          </Select>
                        )}
                      />
                    </Form.Item>
                  ) : (
                    <Form.Item>
                      <Controller
                        control={control}
                        name="contractDetails.customLocation"
                        render={({ field }) => <AddressForm {...field} />}
                      />
                    </Form.Item>
                  )}
                  <Form.Item label="Thời gian tổ chức" required>
                    <Controller
                      control={control}
                      name="contractDetails.orgTime"
                      rules={{ required: 'Vui lòng chọn thời gian tổ chức' }}
                      render={({ field }) => (
                        <DatePicker.RangePicker
                          {...field}
                          picker="date"
                          format="YYYY-MM-DD"
                          style={{ width: '100%' }}
                          defaultValue={[moment(), moment().add(1, 'day')]}
                          disabledDate={disabledDate}
                          onChange={value => {
                            if (value) {
                              const [startTime, endTime] = value;
                              if (startTime && endTime) {
                                setValue('contractDetails.orgTime', value);
                              }
                            }
                          }}
                        />
                      )}
                    />
                  </Form.Item>
                  <Form.Item label="Tên khách hàng" required>
                    <Controller
                      control={control}
                      rules={{ required: 'Vui lòng nhập họ tên' }}
                      name="contractDetails.customerName"
                      render={({ field }) => <Input {...field} />}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Số điện thoại"
                    required
                    rules={[
                      {
                        required: true,
                        type: 'string',
                        pattern: new RegExp(/(84|0[3|5|7|8|9])+([0-9]{8})\b/),
                        message: 'Vui lòng nhập số điện thoại hợp lệ',
                      },
                    ]}
                  >
                    <Controller
                      control={control}
                      rules={{ required: 'Vui lòng nhập số điện thoại' }}
                      name="contractDetails.phoneNumber"
                      render={({ field }) => <Input {...field} />}
                    />
                  </Form.Item>
                  <Form.Item label="Địa chỉ khách hàng" required>
                    <Controller
                      control={control}
                      name="contractDetails.customerAddress"
                      rules={{ required: 'Vui lòng nhập địa chỉ khách hàng' }}
                      render={({ field }) => <AddressForm {...field} />}
                    />
                  </Form.Item>
                  <Form.Item label="Ngày tạo hợp đồng">
                    <Controller
                      control={control}
                      name="contractDetails.creationDate"
                      render={({ field }) => <Input {...field} disabled />}
                    />
                  </Form.Item>
                </Row>
              </div>
            </Col>
            <Col
              span={24}
              className={
                'my-4 rounded-md border-[1px] border-solid border-[#ccc] p-4 shadow-lg'
              }
            >
              <Form.Item name={'timeline'}>
                <DynamicTimeLine
                  form={form}
                  startDate={watchDate?.[0]?.toDate()}
                  endDate={watchDate?.[1]?.toDate()}
                />
              </Form.Item>
            </Col>
            <Col
              lg={24}
              md={24}
              className={
                'my-4 rounded-md border-[1px] border-solid border-[#ccc] p-4 shadow-lg'
              }
            >
              <div className="pr-4">
                <Row
                  gutter={[16, 16]}
                  className="my-3 flex rounded border border-solid border-slate-200 p-3"
                >
                  <Col span={1} className="flex items-center">
                    <Typography.Text className="font-bold text-black">
                      {' '}
                    </Typography.Text>
                  </Col>
                  <Col span={11} className="flex items-center">
                    <Typography.Text className="font-bold text-black">
                      {' '}
                      Thiết bị
                    </Typography.Text>
                  </Col>
                  <Col span={4} className="flex items-center text-center">
                    <Typography.Text className="font-bold text-black">
                      {' '}
                      Đơn giá / ngày
                    </Typography.Text>
                  </Col>
                  <Col span={4} className="flex items-center text-center">
                    <Typography.Text className="font-bold text-black">
                      {' '}
                      Số lượng
                    </Typography.Text>
                  </Col>
                  <Col span={4} className="flex items-center text-center">
                    <Typography.Text className="font-bold text-black">
                      {' '}
                      Thành tiền
                    </Typography.Text>
                  </Col>
                </Row>

                <Form.List name="devices">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(({ key, name, ...restField }) => {
                        return (
                          <Row
                            key={key}
                            className="my-3 flex rounded border border-solid border-slate-200 p-3 "
                          >
                            <Col span={1} className="flex w-full items-center">
                              <MinusCircleOutlined
                                className="text-black"
                                onClick={() => {
                                  deviceRemove(key);
                                  remove(name);
                                }}
                              />
                            </Col>

                            <Col span={11} className="flex w-full items-center">
                              <Form.Item
                                className="mb-0 w-10/12"
                                {...restField}
                                name={[name, 'id']}
                              // rules={[{ required: true, message: 'Missing first name' }]}
                              >
                                <Row className=" flex w-full items-center justify-center">
                                  <Col
                                    span={10}
                                    className={'flex items-center'}
                                  >
                                    <Image
                                      src={watchDevices[key]?.img || NO_IMAGE}
                                      width={100}
                                      height={100}
                                    />
                                  </Col>
                                  <Col span={14}>
                                    <Row className="my-2">
                                      <Typography.Text
                                        className="font-bold uppercase text-black hover:text-[#fcc45c]"
                                      // onClick={() => {
                                      //   if (
                                      //     item.serviceItem.service.type ===
                                      //     ServiceType.Device
                                      //   ) {
                                      //     navigate(
                                      //       `/device/${item.serviceItem.service.id}`,
                                      //     );
                                      //   } else {
                                      //     navigate(
                                      //       `/human-event/${item.serviceItem.service.id}`,
                                      //     );
                                      //   }
                                      // }}
                                      >
                                        {watchDevices[key]?.name}
                                      </Typography.Text>
                                    </Row>
                                  </Col>
                                </Row>
                              </Form.Item>
                            </Col>

                            <Col
                              span={4}
                              className="flex w-full items-center justify-center"
                            >
                              <Form.Item
                                {...restField}
                                className="mb-0 w-full"
                                name={[name, 'unitPrice']}
                              // rules={[{ required: true, message: 'Missing last name' }]}
                              >
                                <InputNumber
                                  className="border-none"
                                  min={0}
                                  disabled
                                  value={watchDevices[key]?.unitPrice || 0}
                                />
                              </Form.Item>
                            </Col>

                            <Col
                              span={4}
                              className="flex w-full items-center justify-center"
                            >
                              <Form.Item
                                {...restField}
                                className="mb-0 w-full"
                                name={[name, 'quantity']}
                              // rules={[{ required: true, message: 'Missing last name' }]}
                              >
                                <InputNumber
                                  className="border-none"
                                  min={1}
                                  onChange={value =>
                                    handleQuantityChange(key, value, 'devices')
                                  }
                                  value={watchDevices[key]?.quantity || 1}
                                />
                              </Form.Item>
                            </Col>

                            <Col
                              span={4}
                              className="flex w-full items-center justify-center"
                            >
                              <Form.Item
                                dependencies={['devices', name, 'quantity']}
                                className="mb-0 w-full"
                              >
                                {({ getFieldValue }) => {
                                  const quantity = getFieldValue([
                                    'devices',
                                    name,
                                    'quantity',
                                  ]);
                                  form.setFieldValue(
                                    ['devices', name, 'intoMoney'],
                                    quantity *
                                    (getFieldValue([
                                      'devices',
                                      name,
                                      'unitPrice',
                                    ]) || 0),
                                  );
                                  return (
                                    <Form.Item
                                      {...restField}
                                      className="mb-0 w-full"
                                      name={[name, 'intoMoney']}
                                      rules={[
                                        {
                                          required: true,
                                          message: 'Missing last name',
                                        },
                                      ]}
                                    >
                                      <InputNumber
                                        min={0}
                                        disabled
                                        className="border-none text-black"
                                        value={
                                          watchDevices[key]?.intoMoney || 0
                                        }
                                      />
                                    </Form.Item>
                                  );
                                }}
                              </Form.Item>
                            </Col>
                          </Row>
                        );
                      })}
                      {showDeviceSelect && (
                        <Row className="my-3 flex rounded border border-solid border-slate-200 p-3">
                          <Col span={24} className="flex w-full items-center">
                            <Select
                              labelInValue
                              onChange={function (value) {
                                const selectedService = deviceServicesList.find(
                                  service => service.id === value.value,
                                );

                                if (selectedService) {
                                  const newDevice = {
                                    id: selectedService.id,
                                    quantity: 1,
                                    unitPrice: selectedService.price,
                                    intoMoney: selectedService.price,
                                    name: selectedService.name,
                                    img: selectedService.img,
                                  };

                                  deviceAppend(newDevice);
                                  add(newDevice);
                                  setShowDeviceSelect(false);
                                }
                              }}
                              style={{ width: '100%' }}
                              placeholder="Chọn thiết bị"
                            >
                              {deviceServicesList.map(service => (
                                <Option key={service.id} value={service.id}>
                                  <div>
                                    <Avatar shape="square" src={service.img} />
                                    <span className="ml-2">{service.name}</span>
                                  </div>
                                </Option>
                              ))}
                            </Select>
                          </Col>
                        </Row>
                      )}
                      <Form.Item>
                        <Button
                          className="mb-10 text-gray-500"
                          type="dashed"
                          onClick={() => setShowDeviceSelect(true)}
                          block
                          icon={<PlusOutlined />}
                        ></Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>

                <Row
                  gutter={[16, 16]}
                  className="my-3 flex rounded border border-solid border-slate-200 p-3"
                >
                  <Col span={1} className="flex items-center">
                    <Typography.Text className="font-bold text-black">
                      {' '}
                    </Typography.Text>
                  </Col>
                  <Col span={11} className="flex items-center">
                    <Typography.Text className="font-bold text-black">
                      {' '}
                      Nhân sự
                    </Typography.Text>
                  </Col>
                  <Col span={4} className="flex items-center text-center">
                    <Typography.Text className="font-bold text-black">
                      {' '}
                      Tiền công / ngày
                    </Typography.Text>
                  </Col>
                  <Col span={4} className="flex items-center text-center">
                    <Typography.Text className="font-bold text-black">
                      {' '}
                      Số lượng
                    </Typography.Text>
                  </Col>
                  <Col span={4} className="flex items-center text-center">
                    <Typography.Text className="font-bold text-black">
                      {' '}
                      Thành tiền
                    </Typography.Text>
                  </Col>
                </Row>

                <Form.List name="employees">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(({ key, name, ...restField }) => {
                        return (
                          <Row
                            key={key}
                            className="my-3 flex rounded border border-solid border-slate-200 p-3 "
                          >
                            <Col span={1} className="flex w-full items-center">
                              <MinusCircleOutlined
                                className="text-black"
                                onClick={() => {
                                  employeeRemove(key);
                                  remove(name);
                                }}
                              />
                            </Col>

                            <Col span={11} className="flex w-full items-center">
                              <Form.Item
                                className="mb-0 w-10/12"
                                {...restField}
                                name={[name, 'id']}
                              // rules={[{ required: true, message: 'Missing first name' }]}
                              >
                                <Row className=" flex w-full items-center justify-center">
                                  <Col
                                    span={10}
                                    className={'flex items-center'}
                                  >
                                    <Image
                                      src={watchEmployees[key]?.img || NO_IMAGE}
                                      width={100}
                                      height={100}
                                    />
                                  </Col>
                                  <Col span={14}>
                                    <Row className="my-2">
                                      <Typography.Text
                                        className="font-bold uppercase text-black hover:text-[#fcc45c]"
                                      // onClick={() => {
                                      //   if (
                                      //     item.serviceItem.service.type ===
                                      //     ServiceType.Device
                                      //   ) {
                                      //     navigate(
                                      //       `/device/${item.serviceItem.service.id}`,
                                      //     );
                                      //   } else {
                                      //     navigate(
                                      //       `/human-event/${item.serviceItem.service.id}`,
                                      //     );
                                      //   }
                                      // }}
                                      >
                                        {watchEmployees[key]?.name}
                                      </Typography.Text>
                                    </Row>
                                  </Col>
                                </Row>
                              </Form.Item>
                            </Col>

                            <Col
                              span={4}
                              className="flex w-full items-center justify-center"
                            >
                              <Form.Item
                                {...restField}
                                className="mb-0 w-full"
                                name={[name, 'unitPrice']}
                              // rules={[{ required: true, message: 'Missing last name' }]}
                              >
                                <InputNumber
                                  className="border-none"
                                  min={0}
                                  disabled
                                  value={watchEmployees[key]?.unitPrice || 0}
                                />
                              </Form.Item>
                            </Col>

                            <Col
                              span={4}
                              className="flex w-full items-center justify-center"
                            >
                              <Form.Item
                                {...restField}
                                className="mb-0 w-full"
                                name={[name, 'quantity']}
                              // rules={[{ required: true, message: 'Missing last name' }]}
                              >
                                <InputNumber
                                  className="border-none"
                                  min={1}
                                  onChange={value =>
                                    handleQuantityChange(
                                      key,
                                      value,
                                      'employees',
                                    )
                                  }
                                  value={watchEmployees[key]?.quantity || 1}
                                />
                              </Form.Item>
                            </Col>

                            <Col
                              span={4}
                              className="flex w-full items-center justify-center"
                            >
                              <Form.Item
                                dependencies={['employees', name, 'quantity']}
                                className="mb-0 w-full"
                              >
                                {({ getFieldValue }) => {
                                  const quantity = getFieldValue([
                                    'employees',
                                    name,
                                    'quantity',
                                  ]);
                                  form.setFieldValue(
                                    ['employees', name, 'intoMoney'],
                                    quantity *
                                    (getFieldValue([
                                      'employees',
                                      name,
                                      'unitPrice',
                                    ]) || 0),
                                  );
                                  return (
                                    <Form.Item
                                      {...restField}
                                      className="mb-0 w-full"
                                      name={[name, 'intoMoney']}
                                      rules={[
                                        {
                                          required: true,
                                          message: 'Missing last name',
                                        },
                                      ]}
                                    >
                                      <InputNumber
                                        min={0}
                                        disabled
                                        className="border-none text-black"
                                        value={
                                          watchEmployees[key]?.intoMoney || 0
                                        }
                                      />
                                    </Form.Item>
                                  );
                                }}
                              </Form.Item>
                            </Col>
                          </Row>
                        );
                      })}
                      {showEmployeeSelect && (
                        <Row className="my-3 flex rounded border border-solid border-slate-200 p-3">
                          <Col span={24} className="flex w-full items-center">
                            <Select
                              labelInValue
                              onChange={function (value) {
                                const selectedService =
                                  employeeServicesList.find(
                                    service => service.id === value.value,
                                  );

                                if (selectedService) {
                                  const newDevice = {
                                    id: selectedService.id,
                                    quantity: 1,
                                    unitPrice: selectedService.price,
                                    intoMoney: selectedService.price,
                                    name: selectedService.name,
                                    img: selectedService.img,
                                  };
                                  employeeAppend(newDevice);
                                  add(newDevice);
                                  setShowEmployeeSelect(false);
                                }
                              }}
                              style={{ width: '100%' }}
                              placeholder="Chọn nhân sự"
                            >
                              {employeeServicesList.map(service => {
                                return (
                                  <Option key={service.id} value={service.id}>
                                    <div>
                                      <Avatar shape="square" src={service.img} />
                                      <span className="ml-2">{service.name}</span>
                                    </div>
                                  </Option>
                                )
                              })}
                            </Select>
                          </Col>
                        </Row>
                      )}
                      <Form.Item>
                        <Button
                          className="text-gray-500"
                          type="dashed"
                          onClick={() => setShowEmployeeSelect(true)}
                          block
                          icon={<PlusOutlined />}
                        ></Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>

                <Row>
                  <Col>
                    <div className="mt-4 flex justify-between text-black">
                      <span className="font-bold">Tổng giá trị dịch vụ: </span>
                      <span>{formatCurrency(calculateServiceTotal())}</span>
                    </div>
                  </Col>
                  <Col>
                    <div className="mt-4 flex justify-between text-black">
                      <span className="font-bold">
                        Tiền thuê địa điểm tổ chức:{' '}
                      </span>
                      <span>
                        {formatCurrency(selectedLocationPrice * datedDiff)}
                      </span>
                    </div>
                  </Col>
                  <Col>
                    <div className="mt-4 flex justify-between text-black">
                      <span className="font-bold">Tổng tiền: </span>
                      <span>
                        {formatCurrency(
                          calculateServiceTotal() +
                          selectedLocationPrice * datedDiff,
                        )}
                      </span>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default ContractModal;
