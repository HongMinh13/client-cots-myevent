import { EVENT_DEFAULT } from '#/shared/utils/constant';
import styled from '@emotion/styled';
import {
    Alert,
    Col,
    Descriptions,
    Image,
    Row,
    Skeleton,
    Table,
    Timeline,
    Typography,
} from 'antd';
import { useParams } from 'react-router-dom';
import { formatCurrency } from '#/shared/utils/tools';
import { userVar } from '#/graphql/cache';
import { ROLE } from '#/shared/utils/type';
import {
    DeviceData,
    HumanResourceData,
    LocationData,
    useGetEventByIdQuery,
} from '#/generated/schemas';
import { useState } from 'react';
import CreateEvent3 from './CreateEvent3';
import CreateEvent2 from './CreateEvent2';
import CreateEvent4 from './CreateEvent4';
import dayjs from 'dayjs';

const EventDetailPageStyles = styled.div`
  .ant-input-affix-wrapper {
    background-color: white !important;
    padding: 10px 20px !important;
    border-radius: 0.25rem !important;

    input[value] {
      color: black !important;
    }

    .anticon {
      margin-right: 10px !important;

      svg {
        color: black !important;
        font-size: 20px !important;
      }
    }
  }

  .ant-card-meta-detail {
    width: 100%;

    .ant-card-meta-title {
      font-size: 16px;
      font-weight: bold;
    }

    .ant-card-meta-description .day {
      color: orange;
    }
  }
`;

export interface ServiceColumn {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    img?: string | null;
}

export function EventDetailPage() {
    const { id } = useParams();
    const [serviceData, setServiceData] = useState<ServiceColumn[]>([]);
    const { data: event, loading } = useGetEventByIdQuery({
        variables: {
            getEventByIdId: String(id),
        },
        fetchPolicy: 'no-cache',
        onCompleted: data => {
            const devices =
                data.getEventById.rental?.devices?.map((device, index) => ({
                    id: device.id,
                    name: device.name,
                    description: device.description,
                    price: device.hourlyRentalFee,
                    quantity: device.quantity,
                    img: device.img,
                })) ?? [];

            const humanResources =
                data?.getEventById?.rental?.humanResources?.map(
                    (humanResource, index) => ({
                        id: humanResource.id,
                        name: humanResource.name,
                        description: humanResource.description,
                        price: humanResource.hourlySalary,
                        quantity: humanResource.quantity,
                        img: '',
                    }),
                ) ?? [];

            setServiceData([...devices, ...humanResources]);
            // console.log('data', data);
        },
    });
    console.log('event', event);

    const deviceColumn = [
        {
            title: <span style={{ color: 'black' }}>Tên thiết bị</span>,
            dataIndex: 'name',
            key: 'name',
            render: (text: any, record: any) => (
                <Typography.Text className="font-bold text-black">
                    {record.name}
                </Typography.Text>
            ),
        },
        {
            title: <span style={{ color: 'black' }}>Hình ảnh</span>,
            dataIndex: 'img',
            key: 'image',
            render: (img: string) => (
                <Image src={img} alt="image" width={50} height={50} />
            ),
        },
        {
            title: <span style={{ color: 'black' }}>Mô tả</span>,
            dataIndex: 'description',
            key: 'description',
            render: (text: string) => (
                <div dangerouslySetInnerHTML={{ __html: text || '' }} />
            ),
        },
        {
            title: <span style={{ color: 'black' }}>Số lượng</span>,
            dataIndex: 'quantity',
            key: 'quantity',
            render: (quantity: number) => (
                <Typography.Text className="text-black">{quantity}</Typography.Text>
            ),
        },
        {
            title: <span style={{ color: 'black' }}>Đơn giá / ngày</span>,
            dataIndex: 'hourlyRentalFee',
            key: 'hourlyRentalFee',
            render: (hourlyRentalFee: number) => (
                <Typography.Text className="text-black">
                    {formatCurrency(hourlyRentalFee)}
                </Typography.Text>
            ),
        },
    ];

    const humanResourceColumn = [
        {
            title: <span style={{ color: 'black' }}>Tên loại hình</span>,
            dataIndex: 'name',
            key: 'name',
            render: (text: any, record: any) => (
                <Typography.Text className="font-bold text-black">
                    {record.name}
                </Typography.Text>
            ),
        },
        {
            title: <span style={{ color: 'black' }}>Hình ảnh</span>,
            dataIndex: 'img',
            key: 'image',
            render: (img: string) => (
                <Image src={img} alt="image" width={50} height={50} />
            ),
        },
        {
            title: <span style={{ color: 'black' }}>Mô tả</span>,
            dataIndex: 'description',
            key: 'description',
            render: (text: string) => (
                <div dangerouslySetInnerHTML={{ __html: text || '' }} />
            ),
        },
        {
            title: <span style={{ color: 'black' }}>Số lượng</span>,
            dataIndex: 'quantity',
            key: 'quantity',
            render: (quantity: number) => (
                <Typography.Text className="text-black">{quantity}</Typography.Text>
            ),
        },
        {
            title: <span style={{ color: 'black' }}>Đơn giá / ngày</span>,
            dataIndex: 'hourlySalary',
            key: 'hourlySalary',
            render: (hourlyRentalFee: number) => (
                <Typography.Text className="text-black">
                    {formatCurrency(hourlyRentalFee)}
                </Typography.Text>
            ),
        },
    ];

    const locationColumn = [
        {
            title: <span style={{ color: 'black' }}>Tên địa điểm</span>,
            dataIndex: 'name',
            key: 'name',
            render: (text: any, record: any) => (
                <Typography.Text className="font-bold text-black">
                    {record.name}
                </Typography.Text>
            ),
        },
        {
            title: <span style={{ color: 'black' }}>Địa chỉ</span>,
            dataIndex: 'address',
            key: 'address',
            render: (text: any, record: any) => (
                <Typography.Text className="text-black">
                    {record.address}
                </Typography.Text>
            ),
        },
        {
            title: <span style={{ color: 'black' }}>Hình ảnh</span>,
            dataIndex: 'img',
            key: 'image',
            render: (img: string) => (
                <Image src={img} alt="image" width={50} height={50} />
            ),
        },
        {
            title: <span style={{ color: 'black' }}>Mô tả</span>,
            dataIndex: 'description',
            key: 'description',
            render: (text: string) => (
                <div dangerouslySetInnerHTML={{ __html: text || '' }} />
            ),
        },

        {
            title: <span style={{ color: 'black' }}>Đơn giá / ngày</span>,
            dataIndex: 'hourlyRentalFee',
            key: 'hourlyRentalFee',
            render: (hourlyRentalFee: number) => (
                <Typography.Text className="text-black">
                    {formatCurrency(hourlyRentalFee)}
                </Typography.Text>
            ),
        },
    ];
    return (
        <Skeleton loading={loading} active>
            <EventDetailPageStyles className="content ">
                <Row className="mx-auto min-h-[1000px]  w-full max-w-container py-8 ">
                    <Typography.Title
                        level={1}
                        className="text-[#0f172a]-500 w-full text-center"
                    >
                        {event?.getEventById.name}
                    </Typography.Title>
                    <text className="pb-8 text-xl text-black">
                        {event?.getEventById?.description || ''}
                    </text>
                    <Image src={`${event?.getEventById.img}`} preview={false} />
                    {/* <div
            dangerouslySetInnerHTML={{
              __html: event?.getEventById?.description || '',
            }}
            className="py-8 text-black"
          /> */}
                    <div
                        dangerouslySetInnerHTML={{
                            __html: event?.getEventById?.detail || '',
                        }}
                        className="py-8 text-black"
                    />

                    {event?.getEventById.rental?.timelines?.length && (
                        <Row
                            className="my-4 w-full rounded-lg bg-white p-2"
                            gutter={[16, 16]}
                        >
                            <Col span={24} className="mt-16">
                                <Typography.Title level={3} className="text-black">
                                    Lịch trình dự kiến của sự kiện:
                                </Typography.Title>
                            </Col>

                            <Col span={24}>
                                <Descriptions layout="vertical" bordered>
                                    {event?.getEventById?.rental?.devices?.length && (
                                        <Descriptions.Item span={3} label="Lịch trình">
                                            <Timeline mode={'left'} className='text-black'>
                                                {event?.getEventById.rental?.timelines?.map(
                                                    (item, index) => {
                                                        return (
                                                            <Timeline.Item
                                                                label={dayjs(item.startTime).format(
                                                                    'HH:mm',
                                                                )}
                                                            >
                                                                {item?.description}
                                                            </Timeline.Item>
                                                        );
                                                    },
                                                )}
                                            </Timeline>
                                        </Descriptions.Item>
                                    )}
                                </Descriptions>
                            </Col>
                        </Row>
                    )}

                    {serviceData.length && (
                        <Row
                            className="my-4 w-full rounded-lg bg-white p-2"
                            gutter={[16, 16]}
                        >
                            <Col span={24} className="mt-16">
                                <Typography.Title level={3} className="text-black">
                                    Các dịch vụ cung cấp:
                                </Typography.Title>
                            </Col>

                            <Col span={24}>
                                <Descriptions layout="vertical" bordered>
                                    {event?.getEventById?.rental?.devices?.length && (
                                        <Descriptions.Item span={3} label="Thiết bị">
                                            <Table
                                                columns={deviceColumn}
                                                dataSource={event?.getEventById?.rental?.devices}
                                                pagination={false}
                                            />
                                        </Descriptions.Item>
                                    )}

                                    {event?.getEventById?.rental?.humanResources?.length && (
                                        <Descriptions.Item span={3} label="Nhân lực">
                                            <Table
                                                columns={humanResourceColumn}
                                                dataSource={event?.getEventById?.rental?.humanResources}
                                                pagination={false}
                                            />
                                        </Descriptions.Item>
                                    )}

                                    {event?.getEventById?.rental?.locations?.length && (
                                        <Descriptions.Item span={3} label="Địa điểm">
                                            <Table
                                                columns={locationColumn}
                                                dataSource={event?.getEventById?.rental?.locations}
                                                pagination={false}
                                            />
                                        </Descriptions.Item>
                                    )}
                                </Descriptions>
                            </Col>
                        </Row>
                    )}
                    {localStorage.getItem('role') === ROLE.USER && (
                        <Col span={24} className={'mt-4'}>
                            <Alert
                                className={'rounded-md py-4 shadow-lg'}
                                message={
                                    <Row className={'flex items-center justify-between'}>
                                        <Typography.Text className={'text-lg text-black'}>
                                            Bạn có nhu cầu tổ chức sự kiện này. Nhấn vào nút bên cạnh
                                            để đăng kí ngay nhé!
                                        </Typography.Text>
                                        <Col>
                                            {!loading && (
                                                <CreateEvent4 event={event?.getEventById as any} />
                                            )}
                                        </Col>
                                    </Row>
                                }
                                type="info"
                                showIcon
                            />
                        </Col>
                    )}
                </Row>
            </EventDetailPageStyles>
        </Skeleton>
    );
}
