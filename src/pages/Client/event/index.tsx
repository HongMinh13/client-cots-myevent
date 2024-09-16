import { QueryOperator, useGetEventsQuery } from '#/generated/schemas';
import PrimaryButton from '#/shared/components/buttons/PrimaryButton';
import Pagination from '#/shared/components/Styled/Pagination';
import usePagination from '#/shared/hooks/usePagination';
import { EVENT_DEFAULT } from '#/shared/utils/constant';
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
import { useState } from 'react';
// import CreateEvent3 from './CreateEvent3';
import { getToken } from '#/shared/utils/token';

const { Meta } = Card;

const EventPageStyles = styled.div`
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

export function EventPage() {
  const isLogin = !!getToken();
  const [search, setSearch] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  const { currentPage, pageSize, setCurrentPage } = usePagination({
    defaultPageSize: 12,
  });
  const { data: eventsData, loading } = useGetEventsQuery({
    variables: {
      input: {
        limit: pageSize,
        page: currentPage,
      },
    },
    onError(error) {
      showError(error);
    },
  });
  console.log(eventsData);

  return (
    <EventPageStyles className="content ">
      <div
        className={`thumbnail flex items-center justify-between px-2`} //bg-[url('../../assets/images/event_default.jpg')]
      >
        {/* <CreateEvent3 /> */}

        {!isLogin && (
          <PrimaryButton
            className="h-full rounded-md py-3  text-xl"
            onClick={() => (window.location.href = '/sign-in')}
          >
            Đăng kí tổ chức sự kiện
          </PrimaryButton>
        )}

        <Input
          value={inputValue}
          className="w-1/3 text-center border-solid border-1 border-[#fcc45c]"
          prefix={<SearchOutlined />}
          placeholder="Tìm kiếm"
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
      <Row className="mx-auto min-h-[1000px]  w-full max-w-container">
        {/* <Typography.Title level={1} className="w-full text-center text-red-500">
          Sự kiện
        </Typography.Title> */}
        <Col span={24} className="py-8">
          <Skeleton loading={loading}>
            <Row gutter={[16, 16]}>
              {eventsData?.getEvents?.items?.length ? (
                eventsData?.getEvents?.items?.map(event => (
                  <Col
                    xs={24}
                    sm={12}
                    md={8}
                    lg={6}
                    xl={6}
                    xxl={6}
                    key={event.id}
                  >
                    <Card
                      onClick={() => {
                        window.location.href = `/event/${event.id}`;
                      }}
                      hoverable
                      cover={
                        <Image
                          height={300}
                          preview={false}
                          src={`${event?.img ?? EVENT_DEFAULT}`}
                        />
                      }
                    >
                      <Meta
                        className="w-full text-center"
                        title={event.name}
                        description={
                          <p className={'min-h-[120px] overflow-hidden'}>
                            <p className={'description'}>{event.description}</p>
                            <p className="day">
                              {dayjs(event.createdAt).format('YYYY-MM-DD')}
                            </p>
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
          {eventsData?.getEvents?.items.length ? (
            <div className="mt-6 flex justify-center">
              <Pagination
                current={currentPage}
                defaultPageSize={pageSize}
                onChange={page => {
                  scrollToTop();
                  setCurrentPage(page);
                }}
                defaultCurrent={1}
                total={eventsData?.getEvents?.meta.totalItems}
              />
            </div>
          ) : (
            <></>
          )}
        </Col>
      </Row>
    </EventPageStyles>
  );
}
