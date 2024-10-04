import { ContractStatus } from '#/generated/schemas';
import { ROLE } from '#/shared/utils/type';
import { Alert, Typography } from 'antd';

interface Props {
  status: string;
}

export function ContractInfo({ status }: Props) {
  return status === ContractStatus.Draft ? (
    <Alert
      showIcon
      type={'warning'}
      message={
        'Hơp đồng của bạn chưa được đặt cọc. Vui lòng đặt cọc. Xin cảm ơn!'
      }
    />
  ) : status === ContractStatus.DepositPaid ? (
    <Alert
      showIcon
      type={'info'}
      message={
        'Hợp đồng đã được đặt cọc thành công. Hợp đồng sẽ được hệ thống xem xét và tiến hành thực hiện. Xin cảm ơn!'
      }
    ></Alert>
  ) : status === ContractStatus.InProgress ? (
    <Alert
      showIcon
      type={'success'}
      message={'Hợp đồng đang được tiến hành thực hiện.'}
    ></Alert>
  ) : status === ContractStatus.WaitingPaid ? (
    <Alert
      showIcon
      type={'warning'}
      message={
        'Hợp đồng đã được thực hiện xong. Vui lòng thanh toán số tiền còn lại theo đúng hợp đồng đã tạo.'
      }
    ></Alert>
  ) : status === ContractStatus.Cancel ? (
    <Alert showIcon type={'error'} message={'Hợp đồng đã bị hủy.'}></Alert>
  ) : status === ContractStatus.AdminCancel ? (
    <Alert
      showIcon
      type={'error'}
      message={
        'Hợp đồng đã bị hủy bởi hệ thống. Trong trường hợp bạn đã đặt cọc, vui lòng kiểm tra lại trong tài khoản hoặc nhấn vào chi tiết hóa đơn để xem chi tiết. Nếu có thắc mắc, xin vui lòng liên hệ hệ thống của chúng tôi. Xin cảm ơn!'
      }
    ></Alert>
  ) : status === ContractStatus.Completed ? (
    <Alert
      showIcon
      type={'success'}
      message={
        'Hợp đồng đã hoàn thành. Cảm ơn bạn đã tin tưởng và lựa chọn hệ thống như một người bạn tin cậy.'
      }
    ></Alert>
  ) : (
    <></>
  );
}
