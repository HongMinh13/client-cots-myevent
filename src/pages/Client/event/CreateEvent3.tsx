import React, { useEffect, useState } from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import {
  Modal,
  Form,
  Select,
  InputNumber,
  Button,
  Table,
  Input,
  Radio,
  Menu,
  Dropdown,
  Typography,
  Row,
  Col,
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

const { Option } = Select;

interface Service {
  id: string;
  name: string;
  price: number;
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

  const initialDevices =
    event?.rental?.devices?.map(device => ({
      id: device.id,
      quantity: device.quantity,
      unitPrice: device.hourlyRentalFee,
      intoMoney: device.quantity * device.hourlyRentalFee,
    })) || [];

  const initialEmployees =
    event?.rental?.humanResources?.map(employee => ({
      id: employee.id,
      quantity: employee.quantity,
      unitPrice: employee.hourlySalary,
      intoMoney: employee.quantity * employee.hourlySalary,
    })) || [];

  const { control, handleSubmit, watch, reset, setValue } = useForm<FormData>({
    defaultValues: {
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
    },
  });

  // console.log('Initial devices:', initialDevices);
  // console.log('Initial employees:', initialEmployees);

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

  useEffect(() => {
    initialDevices.forEach(device => {
      deviceAppend(device);
    });
    initialEmployees.forEach(employee => {
      employeeAppend(employee);
    });
  }, []);

  const watchDevices = watch('devices');
  const watchEmployees = watch('employees');
  const watchDate = watch('contractDetails.orgTime');
  const datedDiff = watchDate?.[1]?.diff(watchDate?.[0], 'days') || 1;

  const handleServiceAdd = (serviceType: '1' | '2') => {
    if (serviceType === '1') {
      deviceAppend({ id: '', quantity: 1, unitPrice: 0, intoMoney: 0 });
    } else {
      employeeAppend({ id: '', quantity: 1, unitPrice: 0, intoMoney: 0 });
    }
    setServiceType(serviceType);
  };

  const calculateServiceTotal = () => {
    const deviceTotal = watchDevices.reduce(
      (total, item) => total + item.intoMoney,
      0,
    );
    const employeeTotal = watchEmployees.reduce(
      (total, item) => total + item.intoMoney,
      0,
    );

    return (deviceTotal + employeeTotal) * datedDiff;
  };

  const handleDeviceChange = (index: number, value: string) => {
    const selectedService = deviceServicesList.find(
      service =>
        service.id === value &&
        !selectedDevices.map(item => item.id).includes(value),
    );

    if (selectedService) {
      setValue(`devices.${index}.id`, selectedService.id);
      setValue(`devices.${index}.unitPrice`, selectedService.price);
      setValue(
        `devices.${index}.intoMoney`,
        selectedService.price * watchDevices[index].quantity,
      );
      setSelectedDevices([...selectedDevices, selectedService]);
    }
  };

  const handleEmployeeChange = (index: number, value: string) => {
    const selectedService = employeeServicesList.find(
      service =>
        service.id === value &&
        !selectedEmployees.map(item => item.id).includes(value),
    );
    if (selectedService) {
      setValue(`employees.${index}.id`, selectedService.id);
      setValue(`employees.${index}.unitPrice`, selectedService.price);
      setValue(
        `employees.${index}.intoMoney`,
        selectedService.price * watchEmployees[index].quantity,
      );
      setSelectedEmployees([...selectedEmployees, selectedService]);
    }
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
        });
        setSelectedDevices([]);
        setSelectedEmployees([]);
      },
      onError: error => showError(error),
    });

  const onSubmit = (data: FormData) => {
    if (!data.devices.length && !data.employees.length) {
      showError('Vui lòng chọn ít nhất một dịch vụ');
      return;
    }

    RentalServices({
      variables: {
        input: {
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
    });

    setSelectedDevices([]);
    setSelectedEmployees([]);
  };

  const serviceTypes = [
    { id: '1', name: 'Thiết bị' },
    { id: '2', name: 'Nhân sự' },
  ];

  const menu = (
    <Menu className="bg-[#242424] ">
      {serviceTypes.map(service => (
        <Menu.Item
          key={service.id}
          onClick={() => handleServiceAdd(service.id as '1' | '2')}
        >
          {service.name}
        </Menu.Item>
      ))}
    </Menu>
  );

  const disabledDate = (current: Moment) => {
    return current < moment();
  };

  // device data
  const {
    currentPage: currentDevicePage,
    pageSize: devicePageSize,
    setCurrentPage: setCurrentDevicePage,
  } = usePagination({
    defaultPageSize: 4,
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
    })) || [];

  // employee data
  const { data: employeesData, loading: employeeLoading } =
    useGetHumanResourcesAvailableQuery({
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
  const employeeServicesList: Service[] =
    employeesData?.getHumanResourcesAvailable?.items?.map(employee => ({
      id: employee.id,
      name: employee.name,
      price: employee.hourlySalary,
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
  }, [watch('contractDetails.useCompanyLocation')]);

  return (
    <>
      <PrimaryButton
        className="h-full rounded-md py-3  text-xl"
        onClick={showModal}
      >
        Tạo mới
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
          <Button key="back" onClick={handleCancel}>
            Hủy
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={createEventLoading}
            onClick={form.submit}
          >
            Tạo hợp đồng
          </Button>,
        ]}
      >
        <Form
          form={form}
          onFinish={handleSubmit(onSubmit)}
          className={'rounded-lg p-4 '}
        >
          <Row gutter={[16, 16]} className={'flex w-full'}>
            <Col
              lg={24}
              md={24}
              className={
                'my-4 rounded-md border-[1px] border-solid border-[#ccc] p-4 shadow-lg'
              }
            >
              <div className="pr-4">
                <div className="mb-4 flex justify-end">
                  <Dropdown
                    overlay={menu}
                    placement="bottomLeft"
                    trigger={['click']}
                  >
                    <Button icon={<PlusOutlined />}></Button>
                  </Dropdown>
                </div>
                <Table
                  dataSource={[...deviceFields, ...employeeFields]}
                  pagination={false}
                  rowKey="id"
                >
                  <Table.Column<ServiceField>
                    className="w-1/12"
                    title=""
                    dataIndex="operation"
                    render={(_, __, index) =>
                      index < watchDevices.length ? (
                        <MinusCircleOutlined
                          onClick={() => deviceRemove(index)}
                        />
                      ) : (
                        <MinusCircleOutlined
                          onClick={() =>
                            employeeRemove(index - watchDevices.length)
                          }
                        />
                      )
                    }
                  />
                  <Table.Column<ServiceField>
                    className="w-1/3 text-sm"
                    title="Tên dịch vụ"
                    dataIndex="id"
                    render={(_, __, index) =>
                      index < watchDevices.length ? (
                        <Controller
                          control={control}
                          rules={{
                            required: true,
                          }}
                          name={`devices.${index}.id` as const}
                          render={({ field }) => (
                            <Select
                              {...field}
                              onChange={value =>
                                handleDeviceChange(index, value)
                              }
                              style={{ width: '100%' }}
                              className="border-solid"
                            >
                              {deviceServicesList.map(service => (
                                <Option key={service.id} value={service.id}>
                                  {service.name}
                                </Option>
                              ))}
                            </Select>
                          )}
                        />
                      ) : (
                        <Controller
                          control={control}
                          rules={{ required: true }}
                          name={
                            `employees.${
                              index - watchDevices.length
                            }.id` as const
                          }
                          render={({ field }) => (
                            <Select
                              {...field}
                              onChange={value =>
                                handleEmployeeChange(
                                  index - watchDevices.length,
                                  value,
                                )
                              }
                              style={{ width: '100%' }}
                            >
                              {employeeServicesList.map(service => (
                                <Option key={service.id} value={service.id}>
                                  {service.name}
                                </Option>
                              ))}
                            </Select>
                          )}
                        />
                      )
                    }
                  />

                  <Table.Column<ServiceField>
                    className="w-1/4 text-sm"
                    title="Đơn giá / ngày"
                    dataIndex="unitPrice"
                    render={(_, __, index) =>
                      index < watchDevices.length ? (
                        <Controller
                          control={control}
                          name={`devices.${index}.unitPrice` as const}
                          render={({ field }) => (
                            <InputNumber
                              {...field}
                              min={0}
                              disabled
                              style={{ width: '100%' }}
                            />
                          )}
                        />
                      ) : (
                        <Controller
                          control={control}
                          name={
                            `employees.${
                              index - watchDevices.length
                            }.unitPrice` as const
                          }
                          render={({ field }) => (
                            <InputNumber
                              {...field}
                              min={0}
                              disabled
                              style={{ width: '100%' }}
                            />
                          )}
                        />
                      )
                    }
                  />
                  <Table.Column<ServiceField>
                    className="w-1/12 text-sm"
                    title="Số lượng"
                    dataIndex="quantity"
                    render={(_, __, index) =>
                      index < watchDevices.length ? (
                        <Controller
                          control={control}
                          name={`devices.${index}.quantity` as const}
                          render={({ field }) => (
                            <InputNumber
                              {...field}
                              min={1}
                              onChange={value =>
                                handleQuantityChange(index, value, 'devices')
                              }
                              style={{ width: '100%', color: 'black' }}
                            />
                          )}
                        />
                      ) : (
                        <Controller
                          control={control}
                          name={
                            `employees.${
                              index - watchDevices.length
                            }.quantity` as const
                          }
                          render={({ field }) => (
                            <InputNumber
                              {...field}
                              min={1}
                              onChange={value =>
                                handleQuantityChange(
                                  index - watchDevices.length,
                                  value,
                                  'employees',
                                )
                              }
                              style={{ width: '100%', color: 'black' }}
                            />
                          )}
                        />
                      )
                    }
                  />
                  <Table.Column<ServiceField>
                    className="w-1/4 text-sm"
                    title="Thành tiền"
                    dataIndex="intoMoney"
                    render={(value, record, index) => {
                      console.log('value:', value, record);

                      return index < watchDevices.length ? (
                        <Controller
                          control={control}
                          name={`devices.${index}.intoMoney` as const}
                          render={({ field }) => (
                            <InputNumber
                              {...field}
                              min={0}
                              disabled
                              style={{ width: '100%' }}
                            />
                          )}
                        />
                      ) : (
                        <Controller
                          control={control}
                          name={
                            `employees.${
                              index - watchDevices.length
                            }.intoMoney` as const
                          }
                          render={({ field }) => (
                            <InputNumber
                              {...field}
                              min={0}
                              disabled
                              style={{ width: '100%' }}
                            />
                          )}
                        />
                      );
                    }}
                  />
                </Table>
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
                  <Form.Item label="Số điện thoại" required>
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
                      render={({ field }) => <Input {...field} />}
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
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default ContractModal;
