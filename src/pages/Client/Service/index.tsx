import {
    QueryOperator,
    // ServiceType,
    //   useGetServicesQuery,
} from '#/generated/schemas';
import Pagination from '#/shared/components/Styled/Pagination';
import usePagination from '#/shared/hooks/usePagination';
import { DEVICE_ITEM_DEFAULT } from '#/shared/utils/constant';
import { scrollToTop, showError } from '#/shared/utils/tools';
import { SearchOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import {
    Card,
    Col,
    Empty,
    Image,
    Input,
    Row,
    Skeleton,
    Typography,
} from 'antd';
import dayjs from 'dayjs';
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from 'react';
import { ReactI18NextChild } from 'react-i18next';

const { Meta } = Card;

export const DevicePageStyles = styled.div`
  .ant-input-affix-wrapper {
    background-color: white !important;
    padding: 10px 20px !important;
    border-radius: 50px !important;

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

  .description {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
`;

export interface Props {
    type: string;
}

export function Service({ type }: Props) {
    const [search, setSearch] = useState<string>('');
    const [inputValue, setInputValue] = useState<string>('');
    const { currentPage, pageSize, setCurrentPage } = usePagination({
        defaultPageSize: 12,
    });

    const { data: devices, loading } = useGetServicesQuery({
        variables: {
            query: {
                filters: [
                    {
                        field: 'Service.type',
                        data: type,
                        operator: QueryOperator.Eq,
                    },
                    {
                        field: 'Service.name',
                        data: search,
                        operator: QueryOperator.Like,
                    },
                    {
                        field: 'Service.is_published',
                        data: 'true',
                        operator: QueryOperator.Eq,
                    },
                ],
                limit: pageSize,
                page: currentPage,
                orderBy: 'Service.createdAt:DESC',
            },
        },
        onError(error: unknown) {
            showError(error);
        },
    });

    return (
        <DevicePageStyles className="content ">
            <div
                className={`thumbnail  bg-[url('../../assets/images/device_service_default.jpeg')]`}
            >
                <Input
                    value={inputValue}
                    className="w-1/2 text-center "
                    prefix={<SearchOutlined />}
                    placeholder="Nhập tên dịch vụ cần tìm....."
                    onChange={(value: any) => {
                        setInputValue(value.target.value);
                    }}
                    onPressEnter={() => {
                        setSearch(inputValue);
                        setInputValue('');
                        scrollTo({ top: 950, behavior: 'smooth' });
                    }}
                />
            </div>
            <Row className="mx-auto min-h-[1000px]  w-full max-w-container p-8 ">
                <Typography.Title level={1} className="w-full text-center text-red-500">
                    {/* {type === ServiceType.Device ? 'Thiết bị sự kiện' : 'Nhân sự sự kiện'} */}
                </Typography.Title>
                <Col span={24} className="py-8">
                    <Skeleton >
                        <Row gutter={[16, 16]}>
                            {devices?.getServices?.items?.length ? (
                                devices?.getServices?.items?.map((device: { id: Key; images: string | any[]; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Iterable<ReactI18NextChild> | null | undefined; createdAt: string | number | Date | dayjs.Dayjs | null | undefined; }) => (
                                    <Col
                                        xs={24}
                                        sm={24}
                                        md={12}
                                        lg={8}
                                        xl={6}
                                        xxl={6}
                                        key={device.id}
                                    >
                                        <Card
                                            onClick={() => {
                                                window.location.href = 'device'
                                            }}
                                            hoverable
                                            cover={
                                                <Image
                                                    height={300}
                                                    preview={false}
                                                    src={`${device?.images?.length
                                                        ? device.images[0]
                                                        : DEVICE_ITEM_DEFAULT
                                                        }`}
                                                />
                                            }
                                        >
                                            <Meta
                                                className="w-full text-center"
                                                title={device.name}
                                                description={
                                                    <p className={'min-h-[120px] overflow-hidden'}>
                                                        <p className="description">{device.description}</p>
                                                        <span className="day my-2 block">
                                                            {dayjs(device.createdAt).format('YYYY-MM-DD')}
                                                        </span>
                                                    </p>
                                                }
                                            />
                                        </Card>
                                    </Col>
                                ))
                            ) : (
                                <Col className="flex w-full items-center justify-center">
                                    <Empty />
                                </Col>
                            )}
                        </Row>
                    </Skeleton>
                </Col>
                <Col span={24}>
                    {devices?.getServices?.items.length ? (
                        <div className="mt-6 flex justify-center">
                            <Pagination
                                current={currentPage}
                                defaultPageSize={pageSize}
                                onChange={page => {
                                    scrollToTop();
                                    setCurrentPage(page);
                                }}
                                defaultCurrent={1}
                                total={devices?.getServices?.meta.totalItems}
                            />
                        </div>
                    ) : (
                        <></>
                    )}
                </Col>
            </Row>
        </DevicePageStyles>
    );
}

function useGetServicesQuery(arg0: { variables: { query: { filters: { field: string; data: string; operator: QueryOperator; }[]; limit: number; page: number; orderBy: string; }; }; onError(error: unknown): void; }): { data: any; loading: any; } {
    throw new Error('Function not implemented.');
}
