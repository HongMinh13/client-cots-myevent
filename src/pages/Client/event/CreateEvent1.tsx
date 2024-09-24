import React, { useState } from 'react';
import { Avatar, Button, Form, Input, InputNumber, InputNumberProps, List, Modal, Radio, Select, SelectProps, Skeleton, Space } from 'antd';
import PrimaryButton from '#/shared/components/buttons/PrimaryButton';
// import { IconCirclePlus } from '@tabler/icons-react'  
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { useGetDevicesAvailableQuery, useGetHumanResourcesAvailableQuery, useGetLocationsAvailableQuery } from '#/generated/schemas';
import { showError } from '#/shared/utils/tools';
import usePagination from '#/shared/hooks/usePagination';
import Search from 'antd/lib/input/Search';
import moment, { Moment } from 'moment';
import { RangeValue } from 'rc-picker/lib/interface';
import { DatePicker } from '#/shared/components/common/DatePicker';
//import { IconCirclePlusFilled, IconSquareRoundedMinusFilled } from '@tabler/icons-react';


type LayoutType = Parameters<typeof Form>[0]['layout'];

interface RangeInfo {
  range: string;
}

type DeviceSelected = {
  id: string;
  value: string;
  quantity: number;
  name: string;
};

const CreateEvent1: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [startTime, setStartTime] = useState<Moment | null>(moment());
  const [endTime, setEndTime] = useState<Moment | null>(moment().add(1, 'day'));
  const [devicesSelected, setDevicesSelected] = useState<DeviceSelected[]>([]);
  const [employeesSelected, setEmployeesSelected] = useState<string[]>([]);
  const [locationsSelected, setLocationsSelected] = useState<string[]>([]);


  // device data
  const { currentPage: currentDevicePage, pageSize: devicePageSize, setCurrentPage: setCurrentDevicePage } = usePagination({
    defaultPageSize: 4,
  });
  
  const {data: devicesData, loading: deviceLoading} = useGetDevicesAvailableQuery({
    variables: {
      input: {
        page: currentDevicePage,
        limit: devicePageSize,
        endTime: endTime?.toISOString(),
        startTime: startTime?.toISOString(),
      },
    },
    onCompleted: (data) => {
      console.log(data);
    },
    onError(error) {
      showError(error);
    },
  });

  const onChange: InputNumberProps['onChange'] = (value) => {
    console.log('changed', value);
  };

  const deviceOptions: SelectProps['options'] = [];
  devicesData?.getDevicesAvailable?.items?.forEach((device) => {
    deviceOptions.push({
      label: <div>
        <Avatar shape="square" src={device.img} />
        <span className="ml-2">{device.name}</span>
      </div>,
      value: device.id,
    });
  });

  // employee data
  const {data: employeesData, loading: employeeLoading} = useGetHumanResourcesAvailableQuery({
    variables: {
      input: {
        page: 1,
        limit: 10,
        endTime: endTime?.toISOString(),
        startTime: startTime?.toISOString(),
      },
    },
    onCompleted: (data) => {
      console.log(data);
    },
    onError(error) {
      showError(error);
    },
  });

  const employeeOptions: SelectProps['options'] = [];
  employeesData?.getHumanResourcesAvailable?.items?.forEach((employee) => {
    employeeOptions.push({
      label: <div>
        {/* <Avatar shape="square" src={employee.avatar} /> */}
        <span className="ml-2">{employee.name}</span>
      </div>,
      value: employee.id,
    });
  });

  // location data
  const {data: locationsData, loading: locationLoading} = useGetLocationsAvailableQuery({
    variables: {
      input: {
        page: 1,
        limit: 10,
        endTime: endTime?.toISOString(),
        startTime: startTime?.toISOString(),
      },
    },
    onCompleted: (data) => {
      console.log(data);
    },
    onError(error) {
      showError(error);
    },
  });

  const locationOptions: SelectProps['options'] = [];
  locationsData?.getLocationsAvailable?.items?.forEach((location) => {
    locationOptions.push({
      label: <div>
        <Avatar shape="square" src={location.img} />
        <span className="ml-2">{location.name}</span>
      </div>,
      value: location.id,
    });
  });

  //
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setOpen(false);
  };

  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setOpen(false);
  };

  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === 'horizontal' ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } } : null;

  const buttonItemLayout =
    formLayout === 'horizontal' ? { wrapperCol: { span: 14, offset: 4 } } : null;

  // Add Device
  const handleChangeAddDevice = (value: string[]) => {
    console.log(`selected ${value}`);
  };

  // Add Employee
  const handleChangeAddEmployee = (value: string[]) => {
    console.log(`selected ${value}`);
  };

  // Add Location
  const handleChangeAddLocation = (value: string[]) => {
   setLocationsSelected(value);
   console.log(locationsSelected)
  };

  //

  const onRangeChange = (values: RangeValue<Moment>, formatString: [string, string], info: RangeInfo) => {
    if (values) {
      if (values[0])
        setStartTime(values[0]);
      if (values[1])
      setEndTime(values[1]);
    } else {
      // setStartTime(null);
      // setEndTime(null);
    }
  };

  const onSearch = (value: string) => console.log(value);

  return (
    <>
      <PrimaryButton
        className="h-full py-3 px-5 text-xl rounded-md"
        onClick={showModal}
        >
        {/* <IconCirclePlus className='inline-block W-1/2 h-1/2' /> */}
        Tạo mới
      </PrimaryButton>
      <Modal
        title="Dịch vụ cho thuê"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ disabled: true }}
        cancelButtonProps={{ disabled: true }}
      >
        <Form
          {...formItemLayout}
          layout={formLayout}
          form={form}
          initialValues={{ layout: formLayout }}
          onValuesChange={onFormLayoutChange}
          style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
        >
          <Form.Item label="Thời gian thuê">
            <DatePicker.RangePicker 
              showTime 
              defaultValue={[moment(), moment().add(1, 'day')]}
              onCalendarChange={onRangeChange}
            />
          </Form.Item>
          <Form.Item label="Nhân sự">
            <Space style={{ width: '100%' }} direction="vertical">
              <Skeleton loading={employeeLoading}>
                <Select
                  mode="multiple"
                  allowClear
                  style={{ width: '100%' }}
                  placeholder="Please select"
                  onChange={handleChangeAddEmployee}
                  options={employeeOptions}
                />
              </Skeleton>
            </Space>
          </Form.Item>
          <Form.Item label="Địa điểm">
            <Space style={{ width: '100%' }} direction="vertical">
              <Skeleton loading={locationLoading}>
                <Select
                  mode="multiple"
                  allowClear
                  style={{ width: '100%' }}
                  placeholder="Please select"
                  onChange={handleChangeAddLocation}
                  options={locationOptions}
                  optionLabelProp="children"
                />
              </Skeleton>
            </Space>
          </Form.Item>
          <Form.Item label="Thiết bị">
            <Space style={{ width: '100%' }} direction="vertical">
              <Skeleton loading={deviceLoading}>                
                <Select
                  mode="multiple"
                  allowClear
                  style={{ width: '100%' }}
                  placeholder="Please select"
                  onChange={handleChangeAddDevice}
                  options={deviceOptions}
                />
                <List
                  dataSource={devicesData?.getDevicesAvailable?.items ?? []}
                  renderItem={item => (
                    <List.Item key={item.id} className='flex gap-2'>
                      <List.Item.Meta
                        avatar={<Avatar src={item.img} />}
                        title={<a href="" className='!text-black'>{item.name}</a>}
                        description={item.availableQuantity}
                      />
                      <InputNumber 
                        className='border-0' 
                        min={1} 
                        max={item.availableQuantity ?? 1} 
                        defaultValue={1} 
                        onChange={onChange} 
                      />
                      <IconSquareRoundedMinusFilled 
                        color='black' 
                        onClick={() => console.log('remove device')}
                      />
                    </List.Item>
                  )}
                />
              </Skeleton>
            </Space>
          </Form.Item>
          {/* <Form.Item {...buttonItemLayout}>
            <Button type="primary">Submit</Button>
          </Form.Item> */}
        </Form>
      </Modal>
    </>
  );
};

export default CreateEvent1;