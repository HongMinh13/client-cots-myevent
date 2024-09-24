import {
  ContractData,
  ContractStatus,
  EmailSendLogData,
  GetMyContractsDocument,
  GetMyContractsQuery,
  GetMyContractsQueryVariables,
  GuestData,
  SentEmailStatus,
  useGetContractLazyQuery,
  useGetEmailSendLogsByContractIdLazyQuery,
  useGetEmailSendLogsByContractIdQuery,
  useSendEmailMutation,
} from '#/generated/schemas';
import PrimaryButton from '#/shared/components/buttons/PrimaryButton';
import InfinitySelect, {
  InfinitySelectProps,
} from '#/shared/components/common/InfinitySelect';
import UploadFile from '#/shared/components/common/UploadFile';
import { showError, showSuccess, useTable } from '#/shared/utils/tools';
import {
  Alert,
  Button,
  Col,
  Descriptions,
  Row,
  Table,
  TableColumnsType,
  Tag,
  Typography,
} from 'antd';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

export function ContractSelector({
  ...rest
}: InfinitySelectProps<ContractData, GetMyContractsQueryVariables>) {
  return (
    <InfinitySelect<
      GetMyContractsQuery,
      GetMyContractsQueryVariables,
      ContractData
    >
      showSearch={false}
      formatData={data => data?.getMyContracts}
      query={GetMyContractsDocument}
      className="w-full bg-color-white-blur"
      fetchPolicy="network-only"
      placeholder={'Hợp đồng'}
      modelName="Contract"
      allowClear={false}
      {...rest}
    />
  );
}
export function MyGuestInvitation() {
  const location = useLocation();
  const { contractId: defaultContractID } = queryString.parse(
    location.search,
  ) as any;
  const [contractId, setContractId] = useState<string | undefined>(
    defaultContractID,
  );
  const [fileUrl, setFileUrl] = useState<string | undefined>(undefined);
  const [pathFile, setPathFile] = useState<string | undefined>(undefined);
  const { pageSize, currentPage, onChange, setCurrentPage } = useTable();
  const [validToUpload, setValidToUpload] = useState<boolean>(false);
  const [logQuery, { data, loading, refetch }] =
    useGetEmailSendLogsByContractIdLazyQuery();

  const [sendMail, { loading: sendMailLoading }] = useSendEmailMutation({
    onCompleted: () => {
      setCurrentPage(1);
      setFileUrl(undefined);
      setPathFile(undefined);
      showSuccess(
        'Gửi yêu cầu thành công. Hệ thống sẽ mất ít phút để xử lý tác vụ này.',
      );
      refetch();
    },
    onError: error => {
      showError('Gửi yêu cầu thất bại. Vui lòng thử lại sau!');
    },
  });

  const [getContractQuery, { data: contractData }] = useGetContractLazyQuery({
    onCompleted: data => {
      if (
        [ContractStatus.DepositPaid, ContractStatus.InProgress].includes(
          data.getContract.status as ContractStatus,
        )
      ) {
        setValidToUpload(true);
      } else {
        setValidToUpload(false);
      }
    },
  });

  useEffect(() => {
    if (contractId) {
      logQuery({
        variables: {
          input: {
            contractId: contractId,
            limit: pageSize,
            page: currentPage,
          },
        },
      });
      getContractQuery({
        variables: {
          getContractId: contractId,
        },
      });
    }
  }, [contractId, currentPage, pageSize]);

  const logColumns = [
    {
      title:  <span style={{ color: 'black' }}>STT</span>,
      key: 'index',
      render: (value: any, record: any, index: number) => (
        <Row>
          <Typography.Text className=" text-black">
            {(Number(data?.getEmailSendLogsByContractId.meta.currentPage) - 1) *
              Number(data?.getEmailSendLogsByContractId.meta.itemsPerPage) +
              (index + 1)}
          </Typography.Text>
        </Row>
      ),
      width: 80,
    },
    {
      title:  <span style={{ color: 'black' }}>Tên file</span>,
      dataIndex: 'fileName',
      key: 'fileName',
      render: (value: string) => (
        <Row>
          <Typography.Text className=" text-black">{value}</Typography.Text>
        </Row>
      ),
    },
    {
      title:  <span style={{ color: 'black' }}>Số lượng khách mời</span>,
      dataIndex: 'guests',
      key: 'totalEmail',
      render: (guests: GuestData[] | null) => (
        <Row>
          <Typography.Text className=" text-black">
            {guests?.filter(guest => guest.status === 'SENT')?.length ?? 0}
          </Typography.Text>
        </Row>
      ),
    },
    {
      title:  <span style={{ color: 'black' }}>Thời gian gửi</span>,
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (value: Date) => (
        <Row>
          <Typography.Text className=" text-black">{`${dayjs(value).format(
            'DD / MM / YYYY',
          )}`}</Typography.Text>
        </Row>
      ),
      width: 200,
    },
  ];

  const guestColumns: TableColumnsType<GuestData> = [
    {
      title:  <span style={{ color: 'black' }}>STT</span>,
      key: 'index',
      render: (value: any, record: any, index: number) => (
        <Row>
          <Typography.Text className=" text-black">{index + 1}</Typography.Text>
        </Row>
      ),
    },
    {
      title: <span style={{ color: 'Email' }}>STT</span>,
      dataIndex: 'email',
      key: 'email',
      render: (value: string) => (
        <Row>
          <Typography.Text className=" text-black">{value}</Typography.Text>
        </Row>
      ),
    },
    {
      title:  <span style={{ color: 'Trạng thái' }}>STT</span>,
      dataIndex: 'status',
      key: 'status',
      render: (value: string) => {
        switch (value) {
          case 'QUEUED':
            return <Tag color="orange">Đang chờ</Tag>;
            break;
          case 'SENT':
            return <Tag color="green">Đã gửi</Tag>;
            break;
          case 'FAILED':
            return <Tag color="red">Gửi thất bại</Tag>;
            break;
          default:
            return <></>;
        }
      },
    },
    {
      title:  <span style={{ color: 'Thời gian gửi' }}>STT</span>,
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (value: Date) => (
        <Row>
          <Typography.Text className=" text-black">{`${dayjs(value).format(
            'DD / MM / YYYY',
          )}`}</Typography.Text>
        </Row>
      ),
      width: 200,
    },
  ];

  return (
    <>
      <Row
        className="mx-auto  w-full max-w-container px-4 pt-8"
        gutter={[16, 16]}
      >
        <Typography.Title className="text-[#0f172a]">
          QUẢN LÝ DANH SÁCH THƯ MỜI
        </Typography.Title>

        <Col span={24}>
          <Typography.Title level={4} className="pt-8 text-black">
            Chọn hợp đồng để xem danh sách thư mời
          </Typography.Title>

          <Row gutter={[16, 16]}>
            <Col span={16}>
              <ContractSelector
                style={{
                  width: '100% !important',
                  borderRadius: '0.25rem !important',
                  border: '1px solid #d9d9d9',
                }}
                value={contractId}
                onChange={value => setContractId(value as string)}
                defaultValue={defaultContractID}
              />

              <Descriptions bordered layout="vertical" className="py-6">
                <Descriptions.Item label="Danh sách lần gửi thư mời của sự kiện">
                  <Table
                    loading={loading}
                    columns={logColumns}
                    dataSource={
                      data?.getEmailSendLogsByContractId.items?.map(item => ({
                        ...item,
                        key: item.id,
                      })) ?? []
                    }
                    expandable={{
                      expandedRowRender: record => (
                        <Table
                          columns={guestColumns}
                          dataSource={record.guests}
                          pagination={false}
                        />
                      ),
                      rowExpandable: record => record?.guests?.length > 0,
                    }}
                    pagination={{
                      total:
                        data?.getEmailSendLogsByContractId?.meta.totalItems ??
                        0,
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
                </Descriptions.Item>
              </Descriptions>
            </Col>

            <Col span={8}>
              <Descriptions bordered layout="vertical" className="">
                <Descriptions.Item label="Tải lên danh sách khách mời của sự kiện">
                  {contractData && !validToUpload && (
                    <Alert
                      className="mt-4"
                      showIcon
                      type={'error'}
                      message={
                        'Bạn không thể thực hiện thao tác này với hợp đồng này. Vui lòng chọn hợp đồng khác!'
                      }
                    ></Alert>
                  )}
                  {validToUpload && (
                    <>
                      <Alert
                        type="info"
                        showIcon
                        description={
                          <span className="text-black">
                            <a
                              href="https://camille-event.s3.ap-southeast-1.amazonaws.com/statics/GuestMailsTemplate.xlsx"
                              className="text-blue-800  underline"
                            >
                              Nhấp vào đây
                            </a>{' '}
                            để tải xuống template file danh sách khách mời
                          </span>
                        }
                      ></Alert>
                      <Row className="my-4 my-4 rounded border p-4">
                        <Col span={24}>
                          <Row gutter={[16, 16]}>
                            <Col span={12}>
                              <Typography.Text className="text-black">
                                Nhấp vào ô bên cạnh để tải file lên:
                              </Typography.Text>
                            </Col>
                            <Col span={12}>
                              <UploadFile
                                isEdit={true}
                                disabled={!validToUpload}
                                accept=".xlsx"
                                className="w-full"
                                onChange1={(url, pathFile) => {
                                  setFileUrl(url as string);
                                  setPathFile(pathFile as string);
                                }}
                              />
                              {fileUrl && (
                                <a href={fileUrl}>
                                  Nhấp vào đây để xem file đã tải lên
                                </a>
                              )}
                            </Col>
                          </Row>
                        </Col>

                        <Col span={24}>
                          <Button
                            className="mt-4 w-full bg-[#04b4bc] text-white disabled:bg-[#ccc] disabled:text-white"
                            disabled={!fileUrl}
                            loading={sendMailLoading}
                            onClick={() => {
                              sendMail({
                                variables: {
                                  input: {
                                    contractId: contractId as string,
                                    key: pathFile as string,
                                  },
                                },
                              });
                            }}
                          >
                            Gửi thư mời
                          </Button>
                        </Col>
                      </Row>
                    </>
                  )}
                </Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
