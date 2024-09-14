// import styled from '@emotion/styled';
// import {
//   Button,
//   Card,
//   Col,
//   Modal,
//   Row,
//   Skeleton,
//   Space,
//   Typography,
// } from 'antd';
// import {
//   Contract,
//   ContractStatus,
//   ContractType,
//   useCheckoutRemainBillingContractLazyQuery,
//   useConfirmContractDepositMutation,
//   useDepositContractLazyQuery,
//   useGetContractQuery,
//   User,
//   useUpdateContractStatusMutation,
// } from '#/generated/schemas';
// import { useLocation, useParams } from 'react-router-dom';
// import dayjs from 'dayjs';
// import { formatDate } from '#/shared/utils/date';
// import { userVar } from '#/graphql/cache';
// import { ContractStatusTag } from '#/pages/Client/Contract/ContractStatus';
// import PrimaryButton from '#/shared/components/buttons/PrimaryButton';
// import { showError, showSuccess } from '#/shared/utils/tools';
// import { useEffect } from 'react';
// import { DeleteOutlined } from '@ant-design/icons';
// import { ContractInfo } from '#/pages/Client/Contract/ContractInfo';
// import { ROLE } from '#/shared/utils/type';

// const MyContractDetailStyle = styled.div`
//   .ribbon {
//     .ribbon-wrap {
//       position: absolute;
//       inset: 0px;
//       overflow: hidden;
//       background-color: transparent;
//       pointer-events: none;

//       .ribbon-text {
//         position: absolute;
//         padding: 0.1em 2em;
//         z-index: 99;
//         text-align: center;
//         letter-spacing: 2px;
//         font-size: 14px;
//         pointer-events: auto;
//         box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 3px;
//         background-color: red;
//         color: rgb(240, 240, 240);
//         top: 0px;
//         right: 0px;
//         transform: translateY(-100%) rotate(90deg) translateX(70.7107%)
//           rotate(-45deg);
//         transform-origin: right bottom;
//       }
//     }

//     & > div > div {
//       padding: 0.5rem 4rem !important;
//       font-size: 25px !important;
//       color: #fff !important;
//       font-weight: bold;

//       @media (max-width: 768px) {
//         padding: 0.5rem 2rem !important;
//         font-size: 16px !important;
//       }

//       @media (max-width: 576px) {
//         padding: 0.5rem 1rem !important;
//         font-size: 10px !important;
//       }
//     }
//   }
// `;

// export const createServiceContractHtml = (contract?: Contract, user?: User) => {
//   return `<!DOCTYPE html>
// <html >
// <head>
//     <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
//     <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
//     <style type="text/css">
//          div, p, b, i, u, li, th, td {
//             font-family: "Times New Roman";
//             font-size: 12pt;
//             margin: 0;
//             color: #000 !important;
//         }
//         .service-table {
//             margin-top: 20px;
//         }

//         .service-table table {
//             width: 100%;
//             border: solid 1px #ccc;
//             padding: 10px;
//         }

//         .service-table table tr td {
//             border: solid 1px #ccc;
//             padding: 10px;
//             text-align: center;
//         }
        
//     </style>
// </head>
// <body class="pb-20 contract-detail-body">
// <div class="mx-auto  max-w-container px-4 pt-8 container ">
//     <div class="text-center">
//         <div class="my-2">
//             <b> CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</b>
//         </div>
//         <div class="my-2">
//             <b><u>Độc lập - Tự do - Hanh phúc</u></b>
//         </div>
//         <div class="mt-10 mb-20 font-bold">
//             HỢP ĐỒNG CHO THUÊ DỊCH VỤ SỰ KIỆN
//             <i class="font-normal block">Mã hợp đồng: ${contract?.code}</i>
//         </div>
//     </div>
//     <div class="px-10 ">
//         <div>
//             <ul class="my-4">
//                 <li ><i>- Căn cứ Bộ luật dân sự 2015;</i></li>
//                 <li ><i>- Căn cứ sự thỏa thuận của 2 bên</i></li>
//             </ul>
//             <div>
//                 Hôm nay, ngày ${dayjs(
//                   contract?.details?.contractCreatedDate,
//                 ).format('DD/MM/YYYY')} chúng tôi gồm: 
               
//             </div>
//         </div>
//         <div class="my-4">
//             <div><b>BÊN THUÊ DỊCH VỤ</b> (say đây gọi là Bên A)</div>
//             <table>
//                 <tr>
//                     <td>TÊN</td>
//                     <td>:   Ông/Bà ${contract?.details?.customerInfo?.name}</td>
//                 </tr>
//                 <tr>
//                     <td>ĐỊA CHỈ</td>
//                     <td>:   ${contract?.details?.customerInfo?.address}</td>
//                 </tr>
//                 <tr>
//                     <td>SỐ ĐIỆN THOẠI</td>
//                     <td>:   ${contract?.details?.customerInfo?.phoneNumber}</td>
//                 </tr>
//                 <tr>
//                     <td>EMAIL</td>
//                     <td>:   ${user?.email}</td>
//                 </tr>

//             </table>
//         </div>
//         <div class="my-4">
//             <div><b>BÊN CHO THUÊ DỊCH VỤ</b> (say đây gọi là Bên B)</div>
//             <table>
//                 <tr>
//                     <td>TÊN CÔNG TY</td>
//                     <td>:   CÔNG TY TRÁCH NHIỆM HỮU HẠN DỊCH VỤ POLARIS</td>
//                 </tr>
//                 <tr>
//                     <td>ĐẠI DIỆN</td>
//                     <td class="flex">
//                         <li  class="flex">:  Ông/Bà LÊ THỊ THỦY</li>
//                         <li  class="ml-16 flex">Chức danh:   GIÁM ĐỐC</li>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>ĐỊA CHỈ</td>
//                     <td>:   Số 80, Nguyễn Lương Bằng, phường Hòa Khánh Bắc, quận Liên Chiểu, thành phố Đà Nẵng</td>
//                 </tr>
//                 <tr>
//                     <td>SỐ ĐIỆN THOẠI</td>
//                     <td>:   +84369314703</td>
//                 </tr>
//                 <tr>
//                     <td>EMAIL</td>
//                     <td>:  polarisvn.event@gmail.com</td>
//                 </tr>

//             </table>
//         </div>

//         <div class="my-4">
//             <div>
//                 Hai bên thỏa thuận ký kết hợp đồng này với các điều khoản sau:
//             </div>
//             <div class="m-4">
//                 <div>
//                     <b class="uppercase">Điều 1: Nội dung dịch vụ thực hiện</b>
//                     <p>
//                         Bên B cam kết cung cấp các dịch vụ cho bên A theo bảng danh mục bên dưới.
//                     </p>
//                     <p>
//                         Thời gian thực hiện: Từ ngày ${dayjs(
//                           contract?.hireDate,
//                         ).format('DD/MM/YYYY')} đến ngày ${dayjs(
//     contract?.hireEndDate,
//   ).format('DD/MM/YYYY')}
//                     </p>
//                     <p>
//                         Địa điểm: ${contract?.address}
//                     </p>
//                     <div class="service-table">
//                         <b class="block w-full text-center my-2">Bảng danh mục các dịch vụ trong hợp đồng</b>
//                         <table>
//                             <tr>
//                                 <td>STT</td>
//                                 <td>Tên dịch vụ</td>
//                                 <td>Mô tả</td>
//                                 <td>Thời gian thuê</td>
//                                 <td>Số lượng</td>
//                                 <td>Đơn giá</td>
//                                 <td>Thành tiền</td>
//                                 <td>Đơn vị tiền</td>
//                             </tr>
//                             ${contract?.contractServiceItems?.map(
//                               (item, index) => {
//                                 return `<tr>
//                                 <td>${index + 1}</td>
//                                 <td>${item?.serviceItem?.name}</td>
//                                 <td>${item.serviceItem.description}</td>
//                                 <td>
//                                     <p>Bắt đầu: ${formatDate(
//                                       item?.hireDate,
//                                     )}</p>
//                                     <p>Kết thúc: ${formatDate(
//                                       item?.hireEndDate,
//                                     )}</p>
//                                 </td>
//                                 <td>${item?.amount}</td>
//                                 <td>${item?.serviceItem?.price}</td>
//                                 <td>${
//                                   item?.amount *
//                                   Number(item?.serviceItem?.price) *
//                                   Number(
//                                     dayjs(contract?.hireEndDate).diff(
//                                       dayjs(contract?.hireDate),
//                                       'day',
//                                     ) + 1,
//                                   )
//                                 }</td>
//                                 <td>VNĐ</td>
//                             </tr>`;
//                               },
//                             )}
                            
//                             <tr>
//                                 <th colspan="6">TỔNG CHI PHÍ</th>
//                                 <td>
//                                     ${contract?.totalPrice}
//                                 </td>
//                                 <td>VNĐ</td>
//                             </tr>

//                         </table>
//                     </div>
//                 </div>
//                 <div class="my-4">
//                     <b class="uppercase">ĐIỀU 2: GIÁ TRỊ DỊCH VỤ – PHƯƠNG THỨC THANH TOÁN</b>
//                     <div class="my-2">
//                         2.1 Giá trị dịch vụ: ${contract?.totalPrice} VNĐ
//                     </div>
//                     <div class="my-2">
//                         2.2 Ngay khi bên B thực hiện cung cấp dịch vụ theo quy định của Điều 1, hai bên sẽ thống
//                         nhất và ký kết biên bản thanh lý hợp đồng trong đó có ghi rõ những hạng mục còn thiếu hoặc
//                         phát sinh (nếu có). Việc bỏ bớt hoặc bổ sung hạng mục (nếu có) phải được Bên A chấp thuận
//                         trước bằng văn bản, giá trị dịch vụ ghi trong biên bản thanh lý hợp đồng sẽ là giá trị thanh
//                         toán cuối cùng
//                     </div>
//                     <div class="my-2">
//                         2.3 Phương thức thanh toán: (Thanh toán bằng tiền mặt hoặc chuyển khoản)
//                         <ul class="mx-4">
//                             <li >- Bên A thực hiện đặt cọc 30% giá trị hợp đồng cho bên B.</li>
//                             <li >- Bên A sẽ thanh toán bằng tiền mặt hoặc chuyển khoản cho bên B 100% phần giá trị
//                                 dịch
//                                 vụ kể trên và phát sinh (nếu có) căn cứ trên Biên bản thanh lý hợp đồng trong thời
//                                 gian
//                                 5 ngày làm việc kể từ khi kết thúc thời gian thực hiện chương trình và bên A nhận
//                                 được
//                                 biên bản thanh lý hợp đồng và hóa đơn tài chính hợp pháp của bên B.
//                             </li>

//                         </ul>
//                     </div>
//                 </div>
//                 <div class="my-4">
//                     <b class="uppercase">ĐIỀU 3: THỜI HẠN THỎA THUẬN</b>
//                     <div class="my-2">
//                         3.1 Thời gian hiệu lực hợp đồng: Bắt đầu từ khi bản hợp đồng này được ký kết đến khi thanh
//                         toán hợp đồng kèm theo biên bản thanh lý hợp đồng này.
//                     </div>
//                     <div class="my-2">
//                         3.2 Trong trường hợp hết thời gian hiệu lực ghi trong hợp đồng mà bên A chưa thanh toán dứt
//                         điểm các khoản tiền liên quan đến hợp đồng này thì thời gian hiệu lực của hợp đồng sẽ mặc
//                         nhiên được gia hạn cho đến khi các khoản tiền được thanh toán dứt điểm cho bên B và hợp đồng
//                         này mặc nhiên đựơc cả hai bên A và B coi như đã được thanh lý.
//                     </div>
//                     <div class="my-2">
//                         3.3 Trường hợp một trong hai bên vi phạm bất kỳ điều khoản nào trong bản hợp đồng này hoặc
//                         các phụ lục hoặc văn bản bổ sung đính kèm có liên quan đến hợp đồng này thì bên bị vi phạm
//                         được quyền chấm dứt trước thời hạn. Bên vi phạm phải bồi thường cho bên bị vi phạm những
//                         thiệt hại do việc vi phạm này của mình gây ra.
//                     </div>
//                 </div>
//                 <div class="my-4">
//                     <b class="uppercase">ĐIỀU 4: QUYỀN LỢI VÀ NGHĨA VỤ CỦA BÊN A</b>
//                     <div class="my-2">
//                         4.1 Quyền lợi của bên A:
//                         <ul class="mx-4">
//                             <li >- Nhận được dịch vụ tốt nhất và đầy đủ nhất do bên B cung cấp.</li>
//                             <li >- Quản lý và giám sát các hoạt động do bên B cung cấp và thực hiện.</li>
//                         </ul>
//                     </div>
//                     <div class="my-2">
//                     <div>4.2 Nghĩa vụ của bên A:</div>                        
//                         <ul class="mx-4">
//                             <li >- Thanh toán cho bên B theo như thoả thuận tai điều 2.</li>
//                             <li >- Phối hợp với bên B giải quyết các vấn đề phát sinh xảy ra trong chương trình thuộc
//                                 về trách nhiệm của bên A.
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div class="my-4">
//                     <b class="uppercase">ĐIỀU 5: QUYỀN LỢI VÀ NGHĨA VỤ CỦA BÊN B </b>
//                     <div class="my-2">
//                     <div>  5.1 Quyền lợi của bên B:</div>                      
//                         <ul class="mx-4">
//                             <li >- Nhận được đầy đủ thanh toán của bên A như điều 2.</li>
//                         </ul>
//                     </div>
//                     <div class="my-2">
//                       <div> 5.2 Nghĩa vụ của bên B:</div>
//                         <ul class="mx-4">
//                             <li >- Bảo đảm tuyển dụng, cung cấp cho bên A các hạng hạng mục đã nêu với số lượng ,
//                                 chất lượng như yêu cầu.
//                             </li>
//                             <li >- Trong quá trình diễn ra chương trình, Bên B cam kết sẽ trực tiếp theo dõi, giám
//                                 sát, ghi chép và chụp hình lại trong biên bản nghiệm thu bàn giao cho Bên A.
//                             </li>
//                             <li >- Cung cấp hóa đơn tài chính hợp pháp đối với dịch vụ cung cấp theo hợp đồng này và
//                                 các hạng mục phát sinh được bên A chấp thuận (nếu có).
//                             </li>
//                             <li >- Phối hợp với bên A giải quyết các vấn đề phát sinh xảy ra trong chương trình thuộc
//                                 về trách nhiệm của bên B.
//                             </li>
//                             <li >- Bên B sẽ không chịu trách nhiệm về những dịch vụ nào khác ngoài nội dung và Bảng
//                                 danh mục dịch vụ.
//                             </li>
//                             <li >- Bên B cam kết không cung cấp và tiết lộ bất kỳ thông tin nào liên quan trực tiếp
//                                 hay gián tiếp đến sản phẩm của Bên A cũng như các nội dung khác cho bất kỳ bên thứ
//                                 ba nào mà không có sự đồng ý trước của Bên A bằng văn bản.
//                             </li>

//                         </ul>
//                     </div>
//                 </div>
//                 <div class="my-4">
//                     <b class="uppercase">ĐIỀU 6: GIẢI QUYẾT TRANH CHẤP </b>
//                     <div class="my-2">
//                         Mọi tranh chấp liên quan đến Hợp đồng này trước hết sẽ được giải quyết thông qua thương
//                         lượng và hoà giải giữa các bên. Nếu tranh chấp không giải quyết được thông qua hoà giải thì
//                         các bên nhất trí rằng một trong các bên có quyền đưa ra giải quyết tại Tòa án có thẩm quyền.
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div class="my-10 flex justify-between px-20 pb-20">
//             <div>
//                 <div class="text-center uppercase font-bold">ĐẠI DIỆN BÊN A</div>
//                 <div><i>(Kí tên, đóng dấu)</i></div>
//             </div>
//             <div>
//                 <div class="text-center uppercase font-bold ">ĐẠI DIỆN BÊN B</div>
//                 <div><i>(Kí tên, đóng dấu)</i></div>
//             </div>
//         </div>

//     </div>

// </div>

// </body>

// </html>`;
// };

// export const createEventContract = (contract?: Contract, user?: User) => {
//   return `<!DOCTYPE html>
// <html >
// <head>
//     <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
//     <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
//     <style type="text/css">
//          div, p, b, i, u, li, th, td {
//             font-family: "Times New Roman";
//             font-size: 12pt;
//             margin: 0;
//             color: #000 !important;
//         }
//         .service-table {
//             margin-top: 20px;
//         }

//         .service-table table {
//             width: 100%;
//             border: solid 1px #ccc;
//             padding: 10px;
//         }

//         .service-table table tr td {
//             border: solid 1px #ccc;
//             padding: 10px;
//             text-align: center;
//         }
        
//     </style>
// </head>
// <body class="pb-20 contract-detail-body">
// <div class="mx-auto  max-w-container px-4 pt-8 container ">
//     <div class="text-center">
//         <div class="my-2">
//             <b> CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</b>
//         </div>
//         <div class="my-2">
//             <b><u>Độc lập - Tự do - Hanh phúc</u></b>
//         </div>
//         <div class="mt-10 mb-20 font-bold">
//             HỢP ĐỒNG TỔ CHỨC SỰ KIỆN
//             <i class="font-normal block">Mã hợp đồng: ${contract?.code}</i>
//         </div>
//     </div>
//     <div class="px-10 ">
//         <div>
//             <ul class="my-4">
//                 <li ><i>- Căn cứ Bộ luật dân sự 2015;</i></li>
//                 <li ><i>- Căn cứ sự thỏa thuận của 2 bên</i></li>
//             </ul>
//             <div>
//                 Hôm nay, ngày ${dayjs(
//                   contract?.details?.contractCreatedDate,
//                 ).format('DD/MM/YYYY')} chúng tôi gồm: 
               
//             </div>
//         </div>
//         <div class="my-4">
//             <div><b>BÊN THUÊ DỊCH VỤ</b> (say đây gọi là Bên A)</div>
//             <table>
//                 <tr>
//                     <td>TÊN</td>
//                     <td>:   Ông/Bà ${contract?.details?.customerInfo?.name}</td>
//                 </tr>
//                 <tr>
//                     <td>ĐỊA CHỈ</td>
//                     <td>:   ${contract?.details?.customerInfo?.address}</td>
//                 </tr>
//                 <tr>
//                     <td>SỐ ĐIỆN THOẠI</td>
//                     <td>:   ${contract?.details?.customerInfo?.phoneNumber}</td>
//                 </tr>
//                 <tr>
//                     <td>EMAIL</td>
//                     <td>:   ${user?.email}</td>
//                 </tr>

//             </table>
//         </div>
//         <div class="my-4">
//             <div><b>BÊN CHO THUÊ DỊCH VỤ</b> (say đây gọi là Bên B)</div>
//             <table>
//                 <tr>
//                     <td>TÊN CÔNG TY</td>
//                     <td>:   CÔNG TY TRÁCH NHIỆM HỮU HẠN DỊCH VỤ POLARIS</td>
//                 </tr>
//                 <tr>
//                     <td>ĐẠI DIỆN</td>
//                     <td class="flex">
//                         <li  class="flex">:  Ông/Bà LÊ THỊ THỦY</li>
//                         <li  class="ml-16 flex">Chức danh:   GIÁM ĐỐC</li>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>ĐỊA CHỈ</td>
//                     <td>:   Số 80, Nguyễn Lương Bằng, phường Hòa Khánh Bắc, quận Liên Chiểu, thành phố Đà Nẵng</td>
//                 </tr>
//                 <tr>
//                     <td>SỐ ĐIỆN THOẠI</td>
//                     <td>:   +84369314703</td>
//                 </tr>
//                 <tr>
//                     <td>EMAIL</td>
//                     <td>:  polarisvn.event@gmail.com</td>
//                 </tr>

//             </table>
//         </div>

//         <div class="my-4">
//             <div>
//                 Hai bên thỏa thuận ký kết hợp đồng này với các điều khoản sau:
//             </div>
//             <div class="m-4">
//                 <div>
//                     <b class="uppercase">Điều 1: Nội dung dịch vụ thực hiện</b>
//                     <p>
//                         Bên B cam kết lên kế hoạch và tổ chức sự kiện cho bên A theo bảng danh mục bên dưới.
//                     </p>
//                     <p>Tên sự kiện: ${contract?.contractEvent?.event?.name}</p>
//                     <p>
//                         Thời gian thực hiện: Từ ngày ${dayjs(
//                           contract?.hireDate,
//                         ).format('DD/MM/YYYY')} đến ngày ${dayjs(
//     contract?.hireEndDate,
//   ).format('DD/MM/YYYY')}
//                     </p>
//                     <p>
//                         Địa điểm: ${contract?.address}
//                     </p>
//                     <div class="service-table">
//                         <b class="block w-full text-center my-2">Bảng danh mục các dịch vụ kèm theo của sự kiện</b>
//                         <table>
//                             <tr>
//                                 <td>STT</td>
//                                 <td>Tên dịch vụ</td>
//                                 <td>Mô tả</td>                            
//                                 <td>Số lượng</td>
//                                 <td>Đơn giá</td>
//                                 <td>Thành tiền</td>
//                                 <td>Đơn vị tiền</td>
//                             </tr>
//                             ${contract?.contractEvent?.contractEventServiceItems?.map(
//                               (item, index) => {
//                                 return `<tr>
//                                 <td>${index + 1}</td>
//                                 <td>${item?.serviceItem?.name}</td>
//                                 <td>${
//                                   item.serviceItem.description
//                                 }</td>                                
//                                 <td>${item?.amount}</td>
//                                 <td>${item?.serviceItem?.price}</td>
//                                 <td>${
//                                   item?.amount *
//                                   Number(item?.serviceItem?.price) *
//                                   Number(
//                                     dayjs(contract?.hireEndDate).diff(
//                                       dayjs(contract?.hireDate),
//                                       'day',
//                                     ) + 1,
//                                   )
//                                 }</td>
//                                 <td>VNĐ</td>
//                             </tr>`;
//                               },
//                             )}
                            
//                             <tr>
//                                 <th colspan="5">TỔNG CHI PHÍ</th>
//                                 <td>
//                                     ${contract?.totalPrice}
//                                 </td>
//                                 <td>VNĐ</td>
//                             </tr>

//                         </table>
//                     </div>
//                 </div>
//                 <div class="my-4">
//                     <b class="uppercase">ĐIỀU 2: GIÁ TRỊ DỊCH VỤ – PHƯƠNG THỨC THANH TOÁN</b>
//                     <div class="my-2">
//                         2.1 Giá trị dịch vụ: ${contract?.totalPrice} VNĐ
//                     </div>
//                     <div class="my-2">
//                         2.2 Ngay khi bên B thực hiện cung cấp dịch vụ theo quy định của Điều 1, hai bên sẽ thống
//                         nhất và ký kết biên bản thanh lý hợp đồng trong đó có ghi rõ những hạng mục còn thiếu hoặc
//                         phát sinh (nếu có). Việc bỏ bớt hoặc bổ sung hạng mục (nếu có) phải được Bên A chấp thuận
//                         trước bằng văn bản, giá trị dịch vụ ghi trong biên bản thanh lý hợp đồng sẽ là giá trị thanh
//                         toán cuối cùng
//                     </div>
//                     <div class="my-2">
//                         2.3 Phương thức thanh toán: (Thanh toán bằng tiền mặt hoặc chuyển khoản)
//                         <ul class="mx-4">
//                             <li >- Bên A thực hiện đặt cọc 30% giá trị hợp đồng cho bên B.</li>
//                             <li >- Bên A sẽ thanh toán bằng tiền mặt hoặc chuyển khoản cho bên B 100% phần giá trị
//                                 dịch
//                                 vụ kể trên và phát sinh (nếu có) căn cứ trên Biên bản thanh lý hợp đồng trong thời
//                                 gian
//                                 5 ngày làm việc kể từ khi kết thúc thời gian thực hiện chương trình và bên A nhận
//                                 được
//                                 biên bản thanh lý hợp đồng và hóa đơn tài chính hợp pháp của bên B.
//                             </li>

//                         </ul>
//                     </div>
//                 </div>
//                 <div class="my-4">
//                     <b class="uppercase">ĐIỀU 3: THỜI HẠN THỎA THUẬN</b>
//                     <div class="my-2">
//                         3.1 Thời gian hiệu lực hợp đồng: Bắt đầu từ khi bản hợp đồng này được ký kết đến khi thanh
//                         toán hợp đồng kèm theo biên bản thanh lý hợp đồng này.
//                     </div>
//                     <div class="my-2">
//                         3.2 Trong trường hợp hết thời gian hiệu lực ghi trong hợp đồng mà bên A chưa thanh toán dứt
//                         điểm các khoản tiền liên quan đến hợp đồng này thì thời gian hiệu lực của hợp đồng sẽ mặc
//                         nhiên được gia hạn cho đến khi các khoản tiền được thanh toán dứt điểm cho bên B và hợp đồng
//                         này mặc nhiên đựơc cả hai bên A và B coi như đã được thanh lý.
//                     </div>
//                     <div class="my-2">
//                         3.3 Trường hợp một trong hai bên vi phạm bất kỳ điều khoản nào trong bản hợp đồng này hoặc
//                         các phụ lục hoặc văn bản bổ sung đính kèm có liên quan đến hợp đồng này thì bên bị vi phạm
//                         được quyền chấm dứt trước thời hạn. Bên vi phạm phải bồi thường cho bên bị vi phạm những
//                         thiệt hại do việc vi phạm này của mình gây ra.
//                     </div>
//                 </div>
//                 <div class="my-4">
//                     <b class="uppercase">ĐIỀU 4: QUYỀN LỢI VÀ NGHĨA VỤ CỦA BÊN A</b>
//                     <div class="my-2">
//                         4.1 Quyền lợi của bên A:
//                         <ul class="mx-4">
//                             <li >- Nhận được dịch vụ tốt nhất và đầy đủ nhất do bên B cung cấp.</li>
//                             <li >- Quản lý và giám sát các hoạt động do bên B cung cấp và thực hiện.</li>
//                         </ul>
//                     </div>
//                     <div class="my-2">
//                     <div>4.2 Nghĩa vụ của bên A:</div>                        
//                         <ul class="mx-4">
//                             <li >- Thanh toán cho bên B theo như thoả thuận tai điều 2.</li>
//                             <li >- Phối hợp với bên B giải quyết các vấn đề phát sinh xảy ra trong chương trình thuộc
//                                 về trách nhiệm của bên A.
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div class="my-4">
//                     <b class="uppercase">ĐIỀU 5: QUYỀN LỢI VÀ NGHĨA VỤ CỦA BÊN B </b>
//                     <div class="my-2">
//                     <div>  5.1 Quyền lợi của bên B:</div>                      
//                         <ul class="mx-4">
//                             <li >- Nhận được đầy đủ thanh toán của bên A như điều 2.</li>
//                         </ul>
//                     </div>
//                     <div class="my-2">
//                       <div> 5.2 Nghĩa vụ của bên B:</div>
//                         <ul class="mx-4">
//                             <li >- Bảo đảm tuyển dụng, cung cấp cho bên A các hạng hạng mục đã nêu với số lượng ,
//                                 chất lượng như yêu cầu.
//                             </li>
//                             <li >- Trong quá trình diễn ra chương trình, Bên B cam kết sẽ trực tiếp theo dõi, giám
//                                 sát, ghi chép và chụp hình lại trong biên bản nghiệm thu bàn giao cho Bên A.
//                             </li>
//                             <li >- Cung cấp hóa đơn tài chính hợp pháp đối với dịch vụ cung cấp theo hợp đồng này và
//                                 các hạng mục phát sinh được bên A chấp thuận (nếu có).
//                             </li>
//                             <li >- Phối hợp với bên A giải quyết các vấn đề phát sinh xảy ra trong chương trình thuộc
//                                 về trách nhiệm của bên B.
//                             </li>
//                             <li >- Bên B sẽ không chịu trách nhiệm về những dịch vụ nào khác ngoài nội dung và Bảng
//                                 danh mục dịch vụ.
//                             </li>
//                             <li >- Bên B cam kết không cung cấp và tiết lộ bất kỳ thông tin nào liên quan trực tiếp
//                                 hay gián tiếp đến sản phẩm của Bên A cũng như các nội dung khác cho bất kỳ bên thứ
//                                 ba nào mà không có sự đồng ý trước của Bên A bằng văn bản.
//                             </li>

//                         </ul>
//                     </div>
//                 </div>
//                 <div class="my-4">
//                     <b class="uppercase">ĐIỀU 6: GIẢI QUYẾT TRANH CHẤP </b>
//                     <div class="my-2">
//                         Mọi tranh chấp liên quan đến Hợp đồng này trước hết sẽ được giải quyết thông qua thương
//                         lượng và hoà giải giữa các bên. Nếu tranh chấp không giải quyết được thông qua hoà giải thì
//                         các bên nhất trí rằng một trong các bên có quyền đưa ra giải quyết tại Tòa án có thẩm quyền.
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div class="my-10 flex justify-between px-20 pb-20">
//             <div>
//                 <div class="text-center uppercase font-bold">ĐẠI DIỆN BÊN A</div>
//                 <div><i>(Kí tên, đóng dấu)</i></div>
//             </div>
//             <div>
//                 <div class="text-center uppercase font-bold ">ĐẠI DIỆN BÊN B</div>
//                 <div><i>(Kí tên, đóng dấu)</i></div>
//             </div>
//         </div>

//     </div>

// </div>

// </body>

// </html>`;
// };

// function MyContractDetail() {
//   const { id } = useParams<{ id: string }>();
//   const search = useLocation().search;
//   const searchParams = new URLSearchParams(search);
//   const user = userVar();
//   const { data, loading, refetch } = useGetContractQuery({
//     variables: {
//       id: String(id),
//     },
//   });

//   useEffect(() => {
//     const status = searchParams.get('status');
//     if (status === 'fail') {
//       showError('Thanh toán thất bại');
//     }
//     if (status === 'success') {
//       showSuccess('Thanh toán thành công');
//     }
//   }, []);
//   const [depositContract, { loading: depositLoading }] =
//     useDepositContractLazyQuery({
//       variables: {
//         input: {
//           contractId: String(id),
//           cancelUrl: `${window.location.origin}/contract-management/${id}?status=fail`,
//           successUrl: `${window.location.origin}/contract-management/${id}?status=success`,
//         },
//       },
//       onCompleted: data => {
//         window.open(data?.depositContract.checkoutUrl, '_blank');
//       },
//       onError: error => {
//         showError(error);
//       },
//     });

//   const [cancelContract, { loading: cancelLoading }] =
//     useConfirmContractDepositMutation({
//       variables: {
//         input: {
//           contractId: String(id),
//           isApproved: false,
//         },
//       },

//       onCompleted: () => {
//         showSuccess('Đã hủy hợp đồng');
//         refetch();
//       },
//       onError: error => {
//         showError(error);
//       },
//     });

//   const [updateStatus, { loading: updateStatusLoading }] =
//     useUpdateContractStatusMutation({
//       onCompleted: () => {
//         showSuccess('Đã cập nhật trạng thái hợp đồng');
//         refetch();
//       },
//       onError: error => {
//         showError(error);
//       },
//     });
//   const onDeposit = () => {
//     Modal.confirm({
//       title: 'Xác nhận đặt cọc',
//       content: (
//         <Typography.Text className={'text-black'}>
//           Bạn có chắc chắn muốn đặt cọc cho hợp đồng này?
//         </Typography.Text>
//       ),
//       onOk: () => {
//         depositContract();
//       },
//     });
//   };

//   const cancelContractHandler = () => {
//     Modal.confirm({
//       title: 'Xác nhận hủy hợp đồng',
//       content: (
//         <Typography.Text className={'text-black'}>
//           Bạn có chắc chắn muốn hủy hợp đồng này?
//         </Typography.Text>
//       ),
//       onOk: () => {
//         cancelContract();
//       },
//     });
//   };

//   const [checkoutRemainBilling] = useCheckoutRemainBillingContractLazyQuery({
//     onCompleted: data => {
//       window.open(data.checkoutRemainBillingContract.checkoutUrl, '_blank');
//     },
//     onError: error => {
//       showError(error);
//     },
//   });

//   const checkoutRemainBillingHandler = () => {
//     Modal.confirm({
//       title: 'Xác nhận thanh toán',
//       content: 'Bạn có chắc chắn muốn thanh toán hóa đơn còn lại?',
//       onOk: () => {
//         checkoutRemainBilling({
//           variables: {
//             input: {
//               contractId: String(id),
//               successUrl: `${window.location.origin}/contract-management/${id}?status=success`,
//               cancelUrl: `${window.location.origin}/contract-management/${id}?status=fail`,
//             },
//           },
//         });
//       },
//     });
//   };

//   return (
//     <MyContractDetailStyle>
//       <Row className="mx-auto  max-w-container px-4 py-8" gutter={[16, 16]}>
//         <Col span={24} className="drop-shadow-xl">
//           <Card
//             title={
//               <Typography.Title level={3} className="text-[#fcc45c]">
//                 CHI TIẾT HỢP ĐỒNG
//               </Typography.Title>
//             }
//             bordered={true}
//           >
//             <Skeleton loading={loading}>
//               <Row className={'rounded-md p-4 '}>
//                 <Col span={24} className={'my-4 flex justify-between'}>
//                   <Typography.Title level={5}>
//                     Trạng thái:
//                     {
//                       <span className={'ml-4'}>
//                         <ContractStatusTag
//                           status={data?.getContract?.status || ''}
//                         />
//                       </span>
//                     }
//                   </Typography.Title>
//                   {data?.getContract.status === ContractStatus.Draft && (
//                     <PrimaryButton onClick={onDeposit}>Đặt cọc</PrimaryButton>
//                   )}
//                   {data?.getContract.status === ContractStatus.WaitingPaid && (
//                     <PrimaryButton onClick={checkoutRemainBillingHandler}>
//                       Thanh toán
//                     </PrimaryButton>
//                   )}
//                   {[
//                     ContractStatus.DepositPaid,
//                     ContractStatus.InProgress,
//                     ContractStatus.InProgress,
//                   ].includes(data?.getContract.status as any) && (
//                     <Button
//                       block
//                       icon={<DeleteOutlined />}
//                       onClick={cancelContractHandler}
//                       className=" mx-2 w-32 font-bold text-red-500 hover:bg-red-600 hover:text-white"
//                     >
//                       Hủy
//                     </Button>
//                   )}

//                   {data?.getContract.status === ContractStatus.AdminCancel &&
//                     data?.getContract?.refundReceiptUrl && (
//                       <PrimaryButton
//                         block
//                         onClick={() => {
//                           data?.getContract?.refundReceiptUrl &&
//                             window.open(
//                               data?.getContract?.refundReceiptUrl,
//                               '_blank',
//                             );
//                         }}
//                         className=" mx-2 w-44 hover:bg-red-600 hover:text-white"
//                       >
//                         Hóa đơn hoàn tiền
//                       </PrimaryButton>
//                     )}
//                 </Col>
//                 <Col span={24}>
//                   <ContractInfo
//                     status={data?.getContract.status as any}
//                     userType={ROLE.USER}
//                   />
//                 </Col>
//               </Row>

//               <Space className={'relative my-4 rounded-md'}>
//                 <div className={'ribbon'}>
//                   {data?.getContract?.status === ContractStatus.Draft && (
//                     <div className={'ribbon-wrap'}>
//                       <div className={'ribbon-text bg-black'}>Bản nháp</div>
//                     </div>
//                   )}
//                   {[ContractStatus.Cancel, ContractStatus.AdminCancel].includes(
//                     data?.getContract?.status as any,
//                   ) && (
//                     <div className={'ribbon-wrap'}>
//                       <div className={'ribbon-text bg-[red]'}>Đã hủy</div>
//                     </div>
//                   )}
//                   {![
//                     ContractStatus.Cancel,
//                     ContractStatus.AdminCancel,
//                     ContractStatus.Draft,
//                   ].includes(data?.getContract?.status as any) && (
//                     <div className={'ribbon-wrap'}>
//                       <div className={'ribbon-text bg-green-600'}>
//                         Chính thức
//                       </div>
//                     </div>
//                   )}
//                 </div>
//                 {data?.getContract?.type === ContractType.Service ? (
//                   <div
//                     className={'border-[1px] border-solid border-[#000]'}
//                     dangerouslySetInnerHTML={{
//                       __html: createServiceContractHtml(
//                         data?.getContract as any,
//                         user as any,
//                       ),
//                     }}
//                   />
//                 ) : (
//                   <div
//                     className={'border-[1px] border-solid border-[#000]'}
//                     dangerouslySetInnerHTML={{
//                       __html: createEventContract(
//                         data?.getContract as any,
//                         user as any,
//                       ),
//                     }}
//                   />
//                 )}
//               </Space>
//             </Skeleton>
//           </Card>
//         </Col>
//       </Row>
//     </MyContractDetailStyle>
//   );
// }

// export default MyContractDetail;
import {
    ContractData,
    ContractStatus,
    DeviceData,
    HumanResourceData,
    LocationData,
    UserData,
    useCheckoutRemainBillingContractLazyQuery,
    useConfirmContractDepositMutation,
    useDepositContractLazyQuery,
    useGetContractQuery,
  } from '#/generated/schemas';
  import { userVar } from '#/graphql/cache';
  import { formatCurrency, showError, showSuccess } from '#/shared/utils/tools';
  import {
    Button,
    Col,
    Collapse,
    Descriptions,
    Image,
    List,
    Modal,
    Row,
    Skeleton,
    Table,
    Timeline,
    Typography,
  } from 'antd';
  import dayjs from 'dayjs';
  import { t } from 'i18next';
  import { useEffect, useState } from 'react';
  import { useLocation, useParams } from 'react-router-dom';
  import { ContractStatusTag } from './ContractStatus';
  import PrimaryButton from '#/shared/components/buttons/PrimaryButton';
  import { DeleteOutlined } from '@ant-design/icons';
  import { ContractInfo } from './ContractInfo';
  import { ServiceColumn } from '../event/EventDetail';
  
  export const createEventContract = (contract?: ContractData) => {
    const serviceDataCollection: ServiceColumn[] = [];
    const dayDiff = dayjs(contract?.rental?.rentalEndTime).diff(
      contract?.rental?.rentalStartTime,
      'day',
    );
  
    contract?.rental?.devices?.forEach(device => {
      serviceDataCollection.push({
        id: device.id,
        name: device.name,
        description: device.description,
        price: device.hourlyRentalFee,
        quantity: device.quantity,
        img: device.img,
      });
    });
  
    contract?.rental?.humanResources?.forEach(humanResource => {
      serviceDataCollection.push({
        id: humanResource.id,
        name: humanResource.name,
        description: humanResource.description,
        price: humanResource.hourlySalary,
        quantity: humanResource.quantity,
        img: humanResource.img,
      });
    });
  
    contract?.rental?.locations?.forEach(location => {
      serviceDataCollection.push({
        id: location.id,
        name: `Địa điểm tổ chức sự kiện `,
        description: `${location.name} - ${location.address}: ${location.description}`,
        price: location.hourlyRentalFee,
        quantity: 1,
      });
    });
    return `<!DOCTYPE html>
  <html >
  <head>
      <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
      <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
      <style type="text/css">
           div, p, b, i, u, li, th, td {
              font-family: "Times New Roman";
              font-size: 12pt;
              margin: 0;
              color: #000 !important;
          }
          .service-table {
              margin-top: 20px;
          }
  
          .service-table table {
              width: 100%;
              border: solid 1px #ccc;
              padding: 10px;
          }
  
          .service-table table tr td {
              border: solid 1px #ccc;
              padding: 10px;
              text-align: center;
          }
  
      </style>
  </head>
  <body class="pb-20 contract-detail-body">
  <div class="mx-auto  max-w-container px-4 pt-8 container ">
      <div class="text-center">
          <div class="my-2">
              <b> CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</b>
          </div>
          <div class="my-2">
              <b><u>Độc lập - Tự do - Hanh phúc</u></b>
          </div>
          <div class="mt-10 mb-20 font-bold">
              HỢP ĐỒNG DỊCH VỤ
          </div>
      </div>
      <div class="px-10 ">
          <div>
              <ul class="my-4">
                  <li ><i>- Căn cứ Bộ luật dân sự 2015;</i></li>
                  <li ><i>- Căn cứ sự thỏa thuận của 2 bên</i></li>
              </ul>
              <div>
                  Hôm nay, ngày ${dayjs(contract?.createdAt).format(
                    'DD/MM/YYYY',
                  )} chúng tôi gồm:
  
              </div>
          </div>
          <div class="my-4">
              <div><b>BÊN THUÊ DỊCH VỤ</b> (say đây gọi là Bên A)</div>
              <table>
                  <tr>
                      <td>TÊN</td>
                      <td>:   Ông/Bà ${contract?.rental?.user?.firstName} ${
      contract?.rental?.user?.lastName
    }</td>
                  </tr>
                  <tr>
                      <td>ĐỊA CHỈ</td>
                      <td>:   ${contract?.customer?.address}</td>
                  </tr>
                  <tr>
                      <td>SỐ ĐIỆN THOẠI</td>
                      <td>:   ${contract?.customer?.phoneNumber}</td>
                  </tr>
                  <tr>
                      <td>EMAIL</td>
                      <td>:   ${contract?.rental?.user?.email}</td>
                  </tr>
  
              </table>
          </div>
          <div class="my-4">
              <div><b>BÊN CHO THUÊ DỊCH VỤ</b> (say đây gọi là Bên B)</div>
              <table>
                  <tr>
                      <td>TÊN CÔNG TY</td>
                      <td>:   CÔNG TY TRÁCH NHIỆM HỮU HẠN DỊCH VỤ CAMILLE</td>
                  </tr>
                  <tr>
                      <td>ĐẠI DIỆN</td>
                      <td class="flex">
                          <li  class="flex">:  Ông/Bà NGUYỄN VĂN A</li>
                          <li  class="ml-16 flex">Chức danh:   GIÁM ĐỐC</li>
                      </td>
                  </tr>
                  <tr>
                      <td>ĐỊA CHỈ</td>
                      <td>: 385 Hải Phòng, Phường Tân Chính, Quận Thanh Khê, Thành phố Đà Nẵng </td>
                  </tr>
                  <tr>
                      <td>SỐ ĐIỆN THOẠI</td>
                      <td>:   +8432454783</td>
                  </tr>
                  <tr>
                      <td>EMAIL</td>
                      <td>:  camille.event@gmail.com</td>
                  </tr>
  
              </table>
          </div>
  
          <div class="my-4">
              <div>
                  Hai bên thỏa thuận ký kết hợp đồng này với các điều khoản sau:
              </div>
              <div class="m-4">
                  <div>
                      <b class="uppercase">Điều 1: Nội dung dịch vụ thực hiện</b>
                      <p>
                          Bên B cam kết lên kế hoạch và tổ chức sự kiện cho bên A theo bảng danh mục bên dưới.
                      </p>
                      <p>Tên sự kiện: ${contract?.name}</p>
                      <p>
                          Thời gian thực hiện: Từ ngày ${dayjs(
                            contract?.rental?.rentalStartTime,
                          ).format('DD/MM/YYYY')} đến ngày ${dayjs(
      contract?.rental?.rentalEndTime,
    ).format('DD/MM/YYYY')}
                      </p>
                      <p>
                          Địa điểm: ${
                            contract?.rental?.locations?.length
                              ? `${contract?.rental?.locations?.[0]?.name} - ${contract?.rental?.locations?.[0]?.address}`
                              : contract?.customer?.address
                          }
                      </p>
                      <div class="service-table">
                          <b class="block w-full text-center my-2">Bảng danh mục các dịch vụ kèm theo của sự kiện</b>
                          <table>
                              <tr>
                                  <td>STT</td>
                                  <td>Tên dịch vụ</td>
                                  <td>Mô tả</td>
                                  <td>Số lượng</td>
                                  <td>Đơn giá / ngày</td>
                                  <td>Thành tiền</td>
                                  <td>Đơn vị tiền</td>
                              </tr>
                              ${serviceDataCollection?.map((item, index) => {
                                return `<tr>
                                  <td>${index + 1}</td>
                                  <td>${item?.name}</td>
                                  <td>${item?.description}</td>
                                  <td>${item?.quantity}</td>
                                  <td>${item?.price}</td>
                                  <td>${
                                    item?.price * item?.quantity * dayDiff
                                  }</td>
                                  <td>VNĐ</td>
                              </tr>`;
                              })}
  
                              <tr>
                                  <th colspan="5">TỔNG CHI PHÍ</th>
                                  <td>
                                      ${contract?.rental?.totalPrice}
                                  </td>
                                  <td>VNĐ</td>
                              </tr>
  
                          </table>
                      </div>
                      ${
                        contract?.rental?.timelines?.length
                          ? `
                      <div class="service-table my-4">
                      <b class="block w-full text-center my-2">Bảng lịch trình dự kiến sự kiện</b>
                          <table>
                              <tr>
                                  <td>STT</td>
                                  <td>Thời gian</td>
                                  <td>Mô tả</td>
                              </tr>
                              ${contract?.rental?.timelines?.map(
                                (item, index) => {
                                  return `<tr>
                                  <td>${index + 1}</td>
                                  <td>${dayjs(item.startTime).format(
                                    'YYYY-MM-DD HH:mm',
                                  )}</td>
                                  <td>${item?.description}</td>
                                  
                              </tr>`;
                                },
                              )}
                          </table>
  
                      </div>
                      `
                          : ``
                      }
  
                  </div>
                  <div class="my-4">
                      <b class="uppercase">ĐIỀU 2: GIÁ TRỊ DỊCH VỤ – PHƯƠNG THỨC THANH TOÁN</b>
                      <div class="my-2">
                          2.1 Giá trị dịch vụ: ${contract?.rental?.totalPrice} VNĐ
                      </div>
                      <div class="my-2">
                          2.2 Ngay khi bên B thực hiện cung cấp dịch vụ theo quy định của Điều 1, hai bên sẽ thống
                          nhất và ký kết biên bản thanh lý hợp đồng trong đó có ghi rõ những hạng mục còn thiếu hoặc
                          phát sinh (nếu có). Việc bỏ bớt hoặc bổ sung hạng mục (nếu có) phải được Bên A chấp thuận
                          trước bằng văn bản, giá trị dịch vụ ghi trong biên bản thanh lý hợp đồng sẽ là giá trị thanh
                          toán cuối cùng
                      </div>
                      <div class="my-2">
                          2.3 Phương thức thanh toán: (Thanh toán bằng tiền mặt hoặc chuyển khoản)
                          <ul class="mx-4">
                              <li >- Bên A thực hiện đặt cọc 30% giá trị hợp đồng cho bên B.</li>
                              <li >- Bên A sẽ thanh toán bằng tiền mặt hoặc chuyển khoản cho bên B 100% phần giá trị
                                  dịch
                                  vụ kể trên và phát sinh (nếu có) căn cứ trên Biên bản thanh lý hợp đồng trong thời
                                  gian
                                  5 ngày làm việc kể từ khi kết thúc thời gian thực hiện chương trình và bên A nhận
                                  được
                                  biên bản thanh lý hợp đồng và hóa đơn tài chính hợp pháp của bên B.
                              </li>
  
                          </ul>
                      </div>
                  </div>
                  <div class="my-4">
                      <b class="uppercase">ĐIỀU 3: THỜI HẠN THỎA THUẬN</b>
                      <div class="my-2">
                          3.1 Thời gian hiệu lực hợp đồng: Bắt đầu từ khi bản hợp đồng này được ký kết đến khi thanh
                          toán hợp đồng kèm theo biên bản thanh lý hợp đồng này.
                      </div>
                      <div class="my-2">
                          3.2 Trong trường hợp hết thời gian hiệu lực ghi trong hợp đồng mà bên A chưa thanh toán dứt
                          điểm các khoản tiền liên quan đến hợp đồng này thì thời gian hiệu lực của hợp đồng sẽ mặc
                          nhiên được gia hạn cho đến khi các khoản tiền được thanh toán dứt điểm cho bên B và hợp đồng
                          này mặc nhiên đựơc cả hai bên A và B coi như đã được thanh lý.
                      </div>
                      <div class="my-2">
                          3.3 Trường hợp một trong hai bên vi phạm bất kỳ điều khoản nào trong bản hợp đồng này hoặc
                          các phụ lục hoặc văn bản bổ sung đính kèm có liên quan đến hợp đồng này thì bên bị vi phạm
                          được quyền chấm dứt trước thời hạn. Bên vi phạm phải bồi thường cho bên bị vi phạm những
                          thiệt hại do việc vi phạm này của mình gây ra.
                      </div>
                  </div>
                  <div class="my-4">
                      <b class="uppercase">ĐIỀU 4: QUYỀN LỢI VÀ NGHĨA VỤ CỦA BÊN A</b>
                      <div class="my-2">
                          4.1 Quyền lợi của bên A:
                          <ul class="mx-4">
                              <li >- Nhận được dịch vụ tốt nhất và đầy đủ nhất do bên B cung cấp.</li>
                              <li >- Quản lý và giám sát các hoạt động do bên B cung cấp và thực hiện.</li>
                          </ul>
                      </div>
                      <div class="my-2">
                      <div>4.2 Nghĩa vụ của bên A:</div>
                          <ul class="mx-4">
                              <li >- Thanh toán cho bên B theo như thoả thuận tai điều 2.</li>
                              <li >- Phối hợp với bên B giải quyết các vấn đề phát sinh xảy ra trong chương trình thuộc
                                  về trách nhiệm của bên A.
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div class="my-4">
                      <b class="uppercase">ĐIỀU 5: QUYỀN LỢI VÀ NGHĨA VỤ CỦA BÊN B </b>
                      <div class="my-2">
                      <div>  5.1 Quyền lợi của bên B:</div>
                          <ul class="mx-4">
                              <li >- Nhận được đầy đủ thanh toán của bên A như điều 2.</li>
                          </ul>
                      </div>
                      <div class="my-2">
                        <div> 5.2 Nghĩa vụ của bên B:</div>
                          <ul class="mx-4">
                              <li >- Bảo đảm tuyển dụng, cung cấp cho bên A các hạng hạng mục đã nêu với số lượng ,
                                  chất lượng như yêu cầu.
                              </li>
                              <li >- Trong quá trình diễn ra chương trình, Bên B cam kết sẽ trực tiếp theo dõi, giám
                                  sát, ghi chép và chụp hình lại trong biên bản nghiệm thu bàn giao cho Bên A.
                              </li>
                              <li >- Cung cấp hóa đơn tài chính hợp pháp đối với dịch vụ cung cấp theo hợp đồng này và
                                  các hạng mục phát sinh được bên A chấp thuận (nếu có).
                              </li>
                              <li >- Phối hợp với bên A giải quyết các vấn đề phát sinh xảy ra trong chương trình thuộc
                                  về trách nhiệm của bên B.
                              </li>
                              <li >- Bên B sẽ không chịu trách nhiệm về những dịch vụ nào khác ngoài nội dung và Bảng
                                  danh mục dịch vụ.
                              </li>
                              <li >- Bên B cam kết không cung cấp và tiết lộ bất kỳ thông tin nào liên quan trực tiếp
                                  hay gián tiếp đến sản phẩm của Bên A cũng như các nội dung khác cho bất kỳ bên thứ
                                  ba nào mà không có sự đồng ý trước của Bên A bằng văn bản.
                              </li>
  
                          </ul>
                      </div>
                  </div>
                  <div class="my-4">
                      <b class="uppercase">ĐIỀU 6: GIẢI QUYẾT TRANH CHẤP </b>
                      <div class="my-2">
                          Mọi tranh chấp liên quan đến Hợp đồng này trước hết sẽ được giải quyết thông qua thương
                          lượng và hoà giải giữa các bên. Nếu tranh chấp không giải quyết được thông qua hoà giải thì
                          các bên nhất trí rằng một trong các bên có quyền đưa ra giải quyết tại Tòa án có thẩm quyền.
                      </div>
                  </div>
              </div>
          </div>
          <div class="my-10 flex justify-between px-20 pb-20">
              <div>
                  <div class="text-center uppercase font-bold">ĐẠI DIỆN BÊN A</div>
                  <div><i>(Kí tên, đóng dấu)</i></div>
              </div>
              <div>
                  <div class="text-center uppercase font-bold ">ĐẠI DIỆN BÊN B</div>
                  <div><i>(Kí tên, đóng dấu)</i></div>
              </div>
          </div>
  
      </div>
  
  </div>
  
  </body>
  
  </html>`;
  };
  
  function MyContractDetail() {
    const { id } = useParams<{ id: string }>();
    const search = useLocation().search;
    const searchParams = new URLSearchParams(search);
    const [contractDiffDate, setContractDiffDate] = useState<number>(0);
    const { data, loading, refetch } = useGetContractQuery({
      variables: {
        getContractId: String(id),
      },
      onCompleted: data => {
        const diffDate = dayjs(data.getContract?.rental?.rentalEndTime).diff(
          dayjs(data.getContract?.rental?.rentalStartTime),
          'day',
        );
        setContractDiffDate(diffDate + 1);
      },
    });
  
    useEffect(() => {
      const status = searchParams.get('status');
      if (status === 'fail') {
        showError('Thanh toán thất bại');
      }
      if (status === 'success') {
        showSuccess('Thanh toán thành công');
      }
    }, []);
    const [depositContract, { loading: depositLoading }] =
      useDepositContractLazyQuery({
        variables: {
          input: {
            contractId: String(id),
            cancelUrl: `${window.location.origin}/contract-management/${id}?status=fail`,
            successUrl: `${window.location.origin}/contract-management/${id}?status=success`,
          },
        },
        onCompleted: data => {
          window.open(data?.depositContract.checkoutUrl, '_blank');
        },
        onError: error => {
          showError(error);
        },
      });
  
    const [cancelContract, { loading: cancelLoading }] =
      useConfirmContractDepositMutation({
        variables: {
          input: {
            contractId: String(id),
            isApproved: false,
          },
        },
  
        onCompleted: () => {
          showSuccess('Đã hủy hợp đồng');
          refetch();
        },
        onError: error => {
          showError(error);
        },
      });
  
    const onDeposit = () => {
      Modal.confirm({
        title: 'Xác nhận đặt cọc',
        content: (
          <Typography.Text className={'text-black'}>
            Bạn có chắc chắn muốn đặt cọc cho hợp đồng này?
          </Typography.Text>
        ),
        onOk: () => {
          depositContract();
        },
      });
    };
  
    const cancelContractHandler = () => {
      Modal.confirm({
        title: 'Xác nhận hủy hợp đồng',
        content: (
          <Typography.Text className={'text-black'}>
            Bạn có chắc chắn muốn hủy hợp đồng này?
          </Typography.Text>
        ),
        onOk: () => {
          cancelContract();
        },
      });
    };
  
    const [checkoutRemainBilling] = useCheckoutRemainBillingContractLazyQuery({
      onCompleted: data => {
        window.open(data.checkoutRemainBillingContract.checkoutUrl, '_blank');
      },
      onError: error => {
        showError(error);
      },
    });
  
    const checkoutRemainBillingHandler = () => {
      Modal.confirm({
        title: 'Xác nhận thanh toán',
        content: 'Bạn có chắc chắn muốn thanh toán hóa đơn còn lại?',
        onOk: () => {
          checkoutRemainBilling({
            variables: {
              input: {
                contractId: String(id),
                successUrl: `${window.location.origin}/contract-management/${id}?status=success`,
                cancelUrl: `${window.location.origin}/contract-management/${id}?status=fail`,
              },
            },
          });
        },
      });
    };
  
    const deviceColumn = [
      {
        title: 'Tên thiết bị',
        dataIndex: 'name',
        key: 'name',
        render: (text: any, record: any) => (
          <Typography.Text className="font-bold text-black">
            {record.name}
          </Typography.Text>
        ),
      },
      {
        title: 'Hình ảnh',
        dataIndex: 'img',
        key: 'image',
        render: (img: string) => (
          <Image src={img} alt="image" width={50} height={50} />
        ),
      },
      {
        title: 'Mô tả',
        dataIndex: 'description',
        key: 'description',
        render: (text: any, record: any) => (
          <Typography.Text className="text-black">
            {record.description}
          </Typography.Text>
        ),
      },
      {
        title: 'Số lượng',
        dataIndex: 'quantity',
        key: 'quanity',
        render: (quantity: number) => (
          <Typography.Text className="text-black">{quantity}</Typography.Text>
        ),
      },
      {
        title: 'Đơn giá / ngày',
        dataIndex: 'hourlyRentalFee',
        key: 'hourlyRentalFee',
        render: (hourlyRentalFee: number) => (
          <Typography.Text className="text-black">
            {formatCurrency(hourlyRentalFee)}
          </Typography.Text>
        ),
      },
      {
        title: 'Thành tiền',
  
        key: 'totalPrice',
        render: (row: DeviceData) => (
          <Typography.Text className="text-black">
            {formatCurrency(
              row.hourlyRentalFee * row.quantity * contractDiffDate,
            )}
          </Typography.Text>
        ),
      },
    ];
  
    const humanResourceColumn = [
      {
        title: 'Tên loại hình',
        dataIndex: 'name',
        key: 'name',
        render: (text: any, record: any) => (
          <Typography.Text className="font-bold text-black">
            {record.name}
          </Typography.Text>
        ),
      },
      {
        title: 'Hình ảnh',
        dataIndex: 'img',
        key: 'image',
        render: (img: string) => (
          <Image src={img} alt="image" width={50} height={50} />
        ),
      },
      {
        title: 'Mô tả',
        dataIndex: 'description',
        key: 'description',
        render: (text: any, record: any) => (
          <Typography.Text className="text-black">
            {record.description}
          </Typography.Text>
        ),
      },
      {
        title: 'Số lượng',
        dataIndex: 'quantity',
        key: 'quanity',
        render: (quantity: number) => (
          <Typography.Text className="text-black">{quantity}</Typography.Text>
        ),
      },
      {
        title: 'Đơn giá / ngày',
        dataIndex: 'hourlySalary',
        key: 'hourlySalary',
        render: (hourlyRentalFee: number) => (
          <Typography.Text className="text-black">
            {formatCurrency(hourlyRentalFee)}
          </Typography.Text>
        ),
      },
      {
        title: 'Thành tiền',
  
        key: 'totalPrice',
        render: (row: HumanResourceData) => (
          <Typography.Text className="text-black">
            {formatCurrency(row.hourlySalary * row.quantity * contractDiffDate)}
          </Typography.Text>
        ),
      },
    ];
  
    const locationColumn = [
      {
        title: 'Tên địa điểm',
        dataIndex: 'name',
        key: 'name',
        render: (text: any, record: any) => (
          <Typography.Text className="font-bold text-black">
            {record.name}
          </Typography.Text>
        ),
      },
      {
        title: 'Địa chỉ',
        dataIndex: 'address',
        key: 'address',
        render: (text: any, record: any) => (
          <Typography.Text className="text-black">
            {record.address}
          </Typography.Text>
        ),
      },
      {
        title: 'Hình ảnh',
        dataIndex: 'img',
        key: 'image',
        render: (img: string) => (
          <Image src={img} alt="image" width={50} height={50} />
        ),
      },
      {
        title: 'Mô tả',
        dataIndex: 'description',
        key: 'description',
        render: (text: any, record: any) => (
          <Typography.Text className="text-black">
            {record.description}
          </Typography.Text>
        ),
      },
  
      {
        title: 'Đơn giá / ngày',
        dataIndex: 'hourlyRentalFee',
        key: 'hourlyRentalFee',
        render: (hourlyRentalFee: number) => (
          <Typography.Text className="text-black">
            {formatCurrency(hourlyRentalFee)}
          </Typography.Text>
        ),
      },
      {
        title: 'Thành tiền',
  
        key: 'totalPrice',
        render: (row: LocationData) => (
          <Typography.Text className="text-black">
            {formatCurrency(row.hourlyRentalFee * contractDiffDate)}
          </Typography.Text>
        ),
      },
    ];
    return (
      <Row className="mx-auto  max-w-container px-4 py-8" gutter={[16, 16]}>
        <Col span={24}>
          <Typography.Title
            level={2}
            className="text-center text-[#0f172a] underline underline-offset-4"
          >
            CHI TIẾT HỢP ĐỒNG
          </Typography.Title>
          <Skeleton loading={loading}>
            <Row>
              <Descriptions
                title="Trạng thái/thao tác"
                layout="vertical"
                bordered
              >
                <Descriptions.Item label="Trạng thái" span={3} className="center">
                  <ContractStatusTag status={data?.getContract?.status || ''} />
                </Descriptions.Item>
                <Descriptions.Item label="Thao tác" span={3}>
                  {data?.getContract.status === ContractStatus.Draft && (
                    <PrimaryButton onClick={onDeposit}>Đặt cọc</PrimaryButton>
                  )}
                  {data?.getContract.status === ContractStatus.WaitingPaid && (
                    <PrimaryButton onClick={checkoutRemainBillingHandler}>
                      Thanh toán
                    </PrimaryButton>
                  )}
                  {[
                    ContractStatus.DepositPaid,
                    ContractStatus.InProgress,
                    ContractStatus.InProgress,
                  ].includes(data?.getContract.status as any) && (
                    <Button
                      block
                      icon={<DeleteOutlined />}
                      onClick={cancelContractHandler}
                      className=" mx-2 w-32 font-bold text-red-500 hover:bg-red-600 hover:text-white"
                    >
                      Hủy
                    </Button>
                  )}
  
                  <Col span={24} className="my-4">
                    <ContractInfo status={data?.getContract.status as any} />
                  </Col>
                </Descriptions.Item>
              </Descriptions>
            </Row>
            <Row className="py-10">
              {/* <Col span={18} className="my-4"> */}
                <Descriptions
                  title="Thông tin hợp đồng"
                  layout="vertical"
                  bordered
                >
                  <Descriptions.Item label="Tên hợp đồng">
                    <Typography.Text className="text-black">
                      {data?.getContract?.name?.toUpperCase()}
                    </Typography.Text>
                  </Descriptions.Item>
                  <Descriptions.Item label="Thời hạn hợp đồng">
                    <List>
                      <List.Item>
                        <Typography.Text className="text-black">
                          <b>Ngày bắt đầu: </b>
                          {dayjs(
                            data?.getContract?.rental.rentalStartTime,
                          ).format('DD/MM/YYYY')}
                        </Typography.Text>
                      </List.Item>
                      <List.Item>
                        <Typography.Text className="text-black">
                          <b>Ngày kết thúc: </b>
                          {dayjs(data?.getContract?.rental.rentalEndTime).format(
                            'DD/MM/YYYY',
                          )}
                        </Typography.Text>
                      </List.Item>
                    </List>
                  </Descriptions.Item>
                  <Descriptions.Item label="Giá trị hợp đồng">
                    <Typography.Text className="text-2xl font-bold text-black">
                      {formatCurrency(data?.getContract?.rental?.totalPrice ?? 0)}
                    </Typography.Text>
                  </Descriptions.Item>
  
                  <Descriptions.Item label="Thông tin khách hàng" span={3}>
                    <List>
                      <List.Item>
                        <Typography.Text className="text-black">
                          <b>Tên khách hàng: </b>
                          {data?.getContract?.customer?.name}
                        </Typography.Text>
                      </List.Item>
                      <List.Item>
                        <Typography.Text className="text-black">
                          <b>Số điện thoại: </b>
                          {data?.getContract?.customer?.phoneNumber}
                        </Typography.Text>
                      </List.Item>
                      <List.Item>
                        <Typography.Text className="text-black">
                          <b>Địa chỉ: </b>
                          {data?.getContract?.customer?.address}
                        </Typography.Text>
                      </List.Item>
                    </List>
                  </Descriptions.Item>
                  <Descriptions.Item label="Các dịch vụ trong hợp đồng" span={3}>
                    <Descriptions layout="vertical">
                      {data?.getContract?.rental?.devices?.length && (
                        <Descriptions.Item span={3} label="Thiết bị">
                          <Table
                            columns={deviceColumn}
                            dataSource={data?.getContract?.rental?.devices}
                            pagination={false}
                          />
                        </Descriptions.Item>
                      )}
  
                      {data?.getContract?.rental?.humanResources?.length && (
                        <Descriptions.Item span={3} label="Nhân lực">
                          <Table
                            columns={humanResourceColumn}
                            dataSource={data?.getContract?.rental?.humanResources}
                            pagination={false}
                          />
                        </Descriptions.Item>
                      )}
  
                      {data?.getContract?.rental?.locations?.length && (
                        <Descriptions.Item span={3} label="Địa điểm">
                          <Table
                            columns={locationColumn}
                            dataSource={data?.getContract?.rental?.locations}
                            pagination={false}
                          />
                        </Descriptions.Item>
                      )}
                    </Descriptions>
                  </Descriptions.Item>
                  {data?.getContract?.rental?.timelines?.length && (
                    <Descriptions.Item label="Lịch trình dự kiến của sự kiện">
                      <Timeline mode="left">
                        {data?.getContract?.rental?.timelines?.map(
                          (timeline, index) => (
                            <Timeline.Item
                              key={index}
                              label={dayjs(timeline?.startTime).format(
                                'YYYY-MM-DD HH:mm',
                              )}
                              className="text-black"
                            >
                              {timeline?.description}
                            </Timeline.Item>
                          ),
                        )}
                      </Timeline>
                    </Descriptions.Item>
                  )}
                </Descriptions>
              {/* </Col> */}
              {/* <Col span={6} className="my-4">
                <Descriptions
                  title="Trạng thái/thao tác"
                  layout="vertical"
                  bordered
                >
                  <Descriptions.Item
                    label="Trạng thái"
                    span={3}
                    className="center"
                  >
                    <ContractStatusTag status={data?.getContract?.status || ''} />
                  </Descriptions.Item>
                  <Descriptions.Item label="Thao tác" span={3}>
                    {data?.getContract.status === ContractStatus.Draft && (
                      <PrimaryButton onClick={onDeposit}>Đặt cọc</PrimaryButton>
                    )}
                    {data?.getContract.status === ContractStatus.WaitingPaid && (
                      <PrimaryButton onClick={checkoutRemainBillingHandler}>
                        Thanh toán
                      </PrimaryButton>
                    )}
                    {[
                      ContractStatus.DepositPaid,
                      ContractStatus.InProgress,
                      ContractStatus.InProgress,
                    ].includes(data?.getContract.status as any) && (
                      <Button
                        block
                        icon={<DeleteOutlined />}
                        onClick={cancelContractHandler}
                        className=" mx-2 w-32 font-bold text-red-500 hover:bg-red-600 hover:text-white"
                      >
                        Hủy
                      </Button>
                    )}
  
                    <Col span={24} className="my-4">
                      <ContractInfo status={data?.getContract.status as any} />
                    </Col>
                  </Descriptions.Item>
                </Descriptions>
              </Col> */}
            </Row>
            <Row>
              <Collapse className="w-full">
                <Collapse.Panel header="Bản thảo văn bản hợp đồng" key="1">
                  <div
                    className={'border-[1px] border-solid border-[#000]'}
                    dangerouslySetInnerHTML={{
                      __html: createEventContract(data?.getContract as any),
                    }}
                  />
                </Collapse.Panel>
              </Collapse>
            </Row>
          </Skeleton>
        </Col>
      </Row>
    );
  }
  
  export default MyContractDetail;
  