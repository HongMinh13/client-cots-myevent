import {
    ContractData,
    ContractStatus,
    FilterDto,
    GetContractsRequest,
    QueryOperator,
    useCheckoutRemainBillingContractLazyQuery,
    useConfirmContractDepositMutation,
    useDepositContractLazyQuery,
    useGetMyContractsQuery,
  } from '#/generated/schemas';
  import { DatePicker } from '#/shared/components/common/DatePicker';
  import {
    formatCurrency,
    showError,
    showSuccess,
    useTable,
  } from '#/shared/utils/tools';
  import styled from '@emotion/styled';
  import {
    Button,
    Col,
    Form,
    Input,
    Modal,
    Row,
    Select,
    Skeleton,
    Table,
    Tooltip,
    Typography,
  } from 'antd';
  import dayjs from 'dayjs';
  import { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import { ContractStatusTag } from './ContractStatus';
  import { DeleteOutlined, DollarOutlined, EyeOutlined } from '@ant-design/icons';
  import { FilterWrapper } from '#/shared/components/common';
  
  const MyContractStyles = styled.div`
    .anticon.anticon-eye,
    .anticon-edit {
      padding: 0 10px;
  
      svg {
        font-size: 25px;
        cursor: pointer;
  
        &:hover {
          color: #ff9a3c;
        }
      }
    }
  
    .anticon-dollar {
      padding: 0 10px;
  
      svg {
        font-size: 25px;
        cursor: pointer;
  
        &:hover {
          color: #3ce5ff;
        }
      }
    }
  
    .anticon-delete {
      padding: 0 10px;
  
      svg {
        font-size: 25px;
        cursor: pointer;
  
        &:hover {
          color: red;
        }
      }
    }
  
    .ant-table-content {
      .ant-table-cell-fix {
        &-left {
          background-color: #ffffff !important;
          @media only screen and (max-width: 948px) {
            left: unset !important;
            z-index: unset !important;
  
            &-last:after {
              bottom: unset !important;
            }
          }
        }
  
        &-right {
          background-color: #ffffff !important;
          @media only screen and (max-width: 948px) {
            right: unset !important;
            z-index: unset !important;
  
            &-first:after {
              bottom: unset !important;
            }
          }
        }
      }
  
      .ant-table-thead .ant-table-cell {
        background-color: #fefeff !important;
      }
    }
  `;
  
  interface MyContractFilter {
    name?: string;
    status?: number;
    dates?: string[];
  }
  
  const { RangePicker } = DatePicker;
  
  export function MyContract() {
    const navigate = useNavigate();
    const { pageSize, currentPage, onChange, setCurrentPage } = useTable();
    const [filters, setFilters] = useState<{
      name?: string;
      status?: string;
      startTime?: string;
      endTime?: string;
    }>({});
    const { data, loading, refetch } = useGetMyContractsQuery({
      variables: {
        queryParams: {
          ...filters,
          page: currentPage,
          limit: pageSize,
        } as GetContractsRequest,
      },
    });
  
    const columns = [
      {
        title: <span style={{ color: 'black' }}>STT</span>,
        key: 'id',
        render: (value: any, record: any, index: number) => (
          <Typography.Text className={'text-black'}>
            {(Number(data?.getMyContracts.meta.currentPage) - 1) *
              Number(data?.getMyContracts.meta.itemsPerPage) +
              (index + 1)}
          </Typography.Text>
        ),
        width: 80,
      },
      {
        title: <span style={{ color: 'black' }}>Tên hợp đồng</span>,
        dataIndex: 'name',
        key: 'name',
        ellipsis: true,
        width: 300,
      },
      {
        title: <span style={{ color: 'black' }}>Giá trị hợp đồng</span>,
        dataIndex: ['rental', 'totalPrice'],
        key: 'totalPrice',
        render: (totalPrice: number) => (
          <Typography.Text className={'text-black'}>
            {formatCurrency(totalPrice)}
          </Typography.Text>
        ),
        width: 200,
      },
      {
        title: <span style={{ color: 'black' }}>Hiệu lực hợp đồng</span>,
        width: 300,
        render: (data: ContractData) => {
          return (
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <div>
                  <span className="text-[#0f172a]-400">
                    {`${dayjs(data.rental.rentalStartTime).format(
                      'DD / MM / YYYY',
                    )}`}
                  </span>
                  {'  -   '}
                  <span className="text-[#0f172a]-400">
                    {`${dayjs(data.rental.rentalEndTime).format(
                      'DD / MM / YYYY',
                    )}`}
                  </span>
                </div>
              </Col>
            </Row>
          );
        },
      },
      {
        title: <span style={{ color: 'black' }}>Trạng thái</span>,
        dataIndex: 'status',
        key: 'status',
        render: (status: string) => {
          return <ContractStatusTag status={status} />;
        },
        width: 200,
        align: 'center',
      },
      {
        title: <span style={{ color: 'black' }}>Hành động</span>,
        key: 'action',
        width: 300,
        fixed: 'right',
        render: (data: ContractData) => {
          return (
            <Row>
              <Button
                onClick={() => {
                  navigate(`/contract-management/${data.id}`);
                }}
                className={
                  ' mr-2 mt-2 text-black hover:bg-[#0f172a] hover:text-white'
                }
              >
                Chi tiết
              </Button>
  
              {data.status === ContractStatus.Draft && (
                <Button
                  onClick={() => {
                    onDeposit(data.id);
                  }}
                  className={
                    ' mr-2 mt-2 text-black hover:bg-[#0f172a] hover:text-white'
                  }
                >
                  Đặt cọc
                </Button>
              )}
              {[ContractStatus.InProgress, ContractStatus.DepositPaid].includes(
                data.status as ContractStatus,
              ) && (
                <Button
                  onClick={() => cancelContractHandler(data.id)}
                  className=" mr-2 mt-2 text-black hover:bg-[#cb4340] hover:text-white"
                >
                  Hủy
                </Button>
              )}
              {data.status === ContractStatus.WaitingPaid && (
                <Button
                  onClick={() => checkoutRemainBillingHandler(data.id)}
                  className={
                    ' mt-2 mr-2 text-black hover:bg-[#0f172a] hover:text-white'
                  }
                >
                  Thanh toán
                </Button>
              )}
              <Button
                className={
                  ' mr-2 mt-2 text-black hover:bg-[#0f172a] hover:text-white'
                }
                onClick={() => {
                  window.location.href = `/guest-invitation?contractId=${data.id}`;
                }}
              >
                Xem thư mời
              </Button>
            </Row>
          );
        },
      },
    ];
  
    const onFilter = ({ name, status, dates }: MyContractFilter) => {
      const newFilters: {
        name?: string;
        status?: string;
        startTime?: string;
        endTime?: string;
      } = {};
      if (name) {
        newFilters.name = name;
      }
      if (typeof status !== 'undefined') {
        switch (status) {
          case 0:
            newFilters.status = ContractStatus.Draft;
            break;
          case 1:
            newFilters.status = ContractStatus.DepositPaid;
            break;
          case 2:
            newFilters.status = ContractStatus.InProgress;
            break;
          case 3:
            newFilters.status = ContractStatus.WaitingPaid;
            break;
          case 4:
            newFilters.status = ContractStatus.Completed;
            break;
          case 5:
            newFilters.status = ContractStatus.Cancel;
            break;
          case 6:
            newFilters.status = ContractStatus.AdminCancel;
            break;
          case -1:
            newFilters.status = undefined;
          default:
        }
      }
  
      if (dates) {
        newFilters.startTime = dayjs(dates[0]).format('YYYY-MM-DD');
        newFilters.endTime = dayjs(dates[1]).format('YYYY-MM-DD');
      }
  
      setFilters(newFilters);
      setCurrentPage(1);
    };
  
    const [depositContract, { loading: depositLoading }] =
      useDepositContractLazyQuery({
        onCompleted: data => {
          window.open(data.depositContract.checkoutUrl, '_blank');
        },
        onError: error => {
          showError(error);
        },
      });
  
    const onDeposit = (id: string) => {
      Modal.confirm({
        title: <span style={{ color: 'black' }}>Xác nhận đặt cọc</span>,
        content: (
          <Typography.Text className={'text-black'}>
            Bạn có chắc chắn muốn đặt cọc cho hợp đồng này?
          </Typography.Text>
        ),
        onOk: () => {
          depositContract({
            variables: {
              input: {
                contractId: id,
                cancelUrl: `${window.location.origin}/contract-management/${id}?status=fail`,
                successUrl: `${window.location.origin}/contract-management/${id}?status=success`,
              },
            },
          });
        },
      });
    };
  
    const cancelContractHandler = (id: string) => {
      Modal.confirm({
        title: <span style={{ color: 'black' }}>Xác nhận huỷ hợp đồng</span>,
        content: (
          <Typography.Text className={'text-black'}>
            Bạn có chắc chắn muốn hủy hợp đồng này?
          </Typography.Text>
        ),
        onOk: () => {
          cancelContract({
            variables: {
              input: {
                contractId: id,
                isApproved: false,
              },
            },
          });
        },
      });
    };
  
    const [cancelContract, { loading: cancelLoading }] =
      useConfirmContractDepositMutation({
        onCompleted: () => {
          showSuccess('Đã hủy hợp đồng');
          refetch();
        },
        onError: error => {
          showError(error);
        },
      });
  
    const [checkoutRemainBilling] = useCheckoutRemainBillingContractLazyQuery({
      onCompleted: data => {
        window.open(data.checkoutRemainBillingContract.checkoutUrl, '_blank');
      },
      onError: error => {
        showError(error);
      },
    });
  
    const checkoutRemainBillingHandler = (contractId: string) => {
      Modal.confirm({
        title: 'Xác nhận thanh toán',
        content: 'Bạn có chắc chắn muốn thanh toán hóa đơn còn lại?',
        onOk: () => {
          checkoutRemainBilling({
            variables: {
              input: {
                contractId,
                successUrl: `${window.location.origin}/contract-management/${contractId}?status=success`,
                cancelUrl: `${window.location.origin}/contract-management/${contractId}?status=fail`,
              },
            },
          });
        },
      });
    };
  
    return (
      <MyContractStyles>
        <Row
          className="mx-auto  w-full max-w-container px-4 pt-8"
          gutter={[16, 16]}
        >
          <Typography.Title className="text-[#0f172a]">
            DANH SÁCH HỢP ĐỒNG
          </Typography.Title>
  
          <div className="manage-filter w-full">
            <FilterWrapper<MyContractFilter> onFilter={onFilter}>
              <Row gutter={[16, 16]} className={'my-2 w-full'}>
                <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
                  <Form.Item name="name">
                    <Input
                      placeholder={'Nhập tên hợp đồng'}
                      className="text-black"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
                  <Form.Item name={'status'}>
                    <Select defaultValue={-1}>
                      <Select.Option value={-1}>Tất cả</Select.Option>
                      <Select.Option value={0}>Bản nháp</Select.Option>
                      <Select.Option value={1}>Đã đặt cọc</Select.Option>
                      <Select.Option value={2}>Đang thực hiện</Select.Option>
                      <Select.Option value={3}>Chờ thanh toán</Select.Option>
                      <Select.Option value={4}>Hoàn thành</Select.Option>
                      <Select.Option value={5}>Đã hủy</Select.Option>
                      <Select.Option value={6}>Bị hủy bởi admin</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
  
                <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
                  <Form.Item name={'dates'} className={'date'}>
                    <RangePicker className={'w-full'} />
                  </Form.Item>
                </Col>
              </Row>
            </FilterWrapper>
          </div>
          <Skeleton loading={loading}>
            <Table
              dataSource={data?.getMyContracts.items ?? []}
              columns={columns as any}
              scroll={{ x: 1000 }}
              pagination={{
                total: data?.getMyContracts.meta.totalItems ?? 0,
                current: currentPage,
                showTotal: (total, range) => {
                  return (
                    <div className="border-gray mr-2 flex items-center rounded-3xl border bg-[white] px-3 text-[#fcc45c]">{`${range?.[0]}-${range?.[1]}/ ${total}`}</div>
                  );
                },
              }}
              onChange={onChange}
              className={'w-full'}
            />
          </Skeleton>
        </Row>
      </MyContractStyles>
    );
  }
  