import { TimelineData } from '#/generated/schemas';
import { TextEditor } from '#/shared/components/common/TextEditor';
import { DeepPartial } from '#/shared/utils/type';
import {
  MinusCircleOutlined,
  PlusCircleOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import styled from '@emotion/styled';
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  Switch,
  Tag,
  Typography,
} from 'antd';
import { FormInstance } from 'antd/es/form/Form';
import { RangePickerProps } from 'antd/lib/date-picker';
import dayjs from 'dayjs';
import moment from 'moment';
import { useState } from 'react';

interface Props {
  startDate?: Date | null;
  endDate?: Date | null;
  form: FormInstance<any>;
}

export function DynamicTimeLine({ form, endDate, startDate }: Props) {
  const [isInvalidTimeline, setIsInvalidTimeline] = useState<boolean>(false);
  const start = dayjs(startDate).startOf('day').toDate();
  const end = dayjs(endDate).endOf('day').toDate();
  const disabledDate: RangePickerProps['disabledDate'] = current => {
    const currentDate = current.toDate();

    return (
      (currentDate && dayjs(currentDate).isBefore(start)) ||
      dayjs(currentDate).isAfter(end)
    );
  };

  return (
    <>
      <Row
        gutter={[16, 16]}
        className="flex w-full rounded-md border-[1px] border-solid border-[#ccc] p-4"
      >
        <Col span={1} className="">
          <Typography.Text className="font-bold text-black"> </Typography.Text>
        </Col>
        <Col span={9} className="">
          <Typography.Text className="font-bold text-black">
            Thời gian bắt đầu
          </Typography.Text>
        </Col>
        <Col span={14} className=" text-center">
          <Typography.Text className="font-bold text-black">
            Mô tả
          </Typography.Text>
        </Col>
      </Row>
      <Form.List name='timelines'>
        {(fields, { add, remove }) => {
          return (
            <>
            <Row>
              <Col span={24}>
                {fields.map((field, index, ...restField) => {
                  return (
                    <Row
                    gutter={[16, 16]}
                    className=" flex w-full items-center justify-between"
                    key={field.key}
                  >
                    <Col
                      span={24}
                      className="my-4  flex w-full items-center justify-between rounded-md border-[1px] border-solid border-[#ccc] py-3"
                    >
                      <Col span={1} className="flex w-full ">
                        <MinusCircleOutlined
                          className="text-black"
                          onClick={() => {
                            remove(index);
                          }}
                        />
                      </Col>
                      <Col span={9}>
                        <Form.Item
                          className="mb-0"
                          {...restField}
                          name={[index, 'startDate']}
                          rules={[
                            {
                              required: true,
                              message: 'Vui lòng chọn thời gian bắt đầu',
                            },
                          ]}
                        >
                          <DatePicker
                            showTime
                            className="border-0"
                            disabledDate={disabledDate}
                            onChange={value => {
                              console.log('value', value);
                            }}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={14}>
                        <Form.Item
                          className="mb-0"
                          {...restField}
                          name={[index, 'description']}
                          rules={[
                            {
                              required: true,
                              message: 'Vui lòng nhập mô tả',
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                    </Col>
                  </Row>
                  )
                })}
              </Col>

              <Col span={24} className="center flex justify-end">
                <Button
                  disabled={!startDate || !endDate || isInvalidTimeline}
                  className="mb-10 mt-2 text-gray-500"
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                ></Button>
              </Col>
            </Row>
          </>
          )
        }}
      </Form.List>
    </>
  );
}
