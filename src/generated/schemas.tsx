// import { gql } from '@apollo/client';
// import * as Apollo from '@apollo/client';
// export type Maybe<T> = T | null;
// export type InputMaybe<T> = Maybe<T>;
// export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
// export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
// export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
// const defaultOptions = {} as const;
// /** All built-in and custom scalars, mapped to their actual values */
// export type Scalars = {
//   ID: string;
//   String: string;
//   Boolean: boolean;
//   Int: number;
//   Float: number;
//   DateTime: any;
// };

// export enum ContractStatus {
//   AdminCancel = 'AdminCancel',
//   Cancel = 'Cancel',
//   Completed = 'Completed',
//   DepositPaid = 'DepositPaid',
//   Draft = 'Draft',
//   InProgress = 'InProgress',
//   WaitingPaid = 'WaitingPaid'
// }

// export type ChangePasswordInput = {
//   newPassword: Scalars['String'];
//   password: Scalars['String'];
// };

// export type CheckoutStripeResponse = {
//   cancelUrl: Scalars['String'];
//   checkoutUrl: Scalars['String'];
//   successUrl: Scalars['String'];
// };

// export type CodeVerifyDto = {
//   code: Scalars['String'];
//   email: Scalars['String'];
// };

// export type ConfirmContractDeposit = {
//   contractId: Scalars['ID'];
//   isApproved?: Scalars['Boolean'];
// };

// export type ContractData = {
//   createdAt: Scalars['DateTime'];
//   customer?: Maybe<CustomerData>;
//   id: Scalars['String'];
//   name: Scalars['String'];
//   rental: RentalData;
//   singingDate?: Maybe<Scalars['DateTime']>;
//   status?: Maybe<ContractStatus>;
//   updatedAt: Scalars['DateTime'];
// };

// export type ContractsData = {
//   items: Array<ContractData>;
//   meta: MetaPaginationInterface;
// };

// export type CreateContractDetailsRequest = {
//   contractName: Scalars['String'];
//   customLocation?: InputMaybe<Scalars['String']>;
//   customerAddress: Scalars['String'];
//   customerName: Scalars['String'];
//   orgTime: OrgTimeRequest;
//   phoneNumber: Scalars['String'];
//   selectedLocation?: InputMaybe<Scalars['String']>;
//   useCompanyLocation: Scalars['Boolean'];
// };

// export type CreateDeviceRequest = {
//   description: Scalars['String'];
//   hourlyRentalFee: Scalars['Float'];
//   img: Scalars['String'];
//   name: Scalars['String'];
//   quantity: Scalars['Float'];
// };

// export type CreateEventRequest = {
//   description: Scalars['String'];
//   detail: Scalars['String'];
//   eventFormat?: InputMaybe<Scalars['Boolean']>;
//   eventTypeId: Scalars['ID'];
//   img?: InputMaybe<Scalars['String']>;
//   isTemplate?: InputMaybe<Scalars['Boolean']>;
//   name: Scalars['String'];
//   rentalId: Scalars['ID'];
// };

// export type CreateEventTemplateRequest = {
//   description: Scalars['String'];
//   detail: Scalars['String'];
//   devices?: InputMaybe<Array<CreateServiceRentalRequest>>;
//   eventFormat?: InputMaybe<Scalars['Boolean']>;
//   eventType?: InputMaybe<CreateEventTypeRequest>;
//   eventTypeId?: InputMaybe<Scalars['String']>;
//   humanResources?: InputMaybe<Array<CreateServiceRentalRequest>>;
//   img?: InputMaybe<Scalars['String']>;
//   name: Scalars['String'];
//   timeline?: InputMaybe<Array<UpsertTimelineRequest>>;
// };

// export type CreateEventTypeRequest = {
//   name: Scalars['String'];
// };

// export type CreateHumanResourcesRequest = {
//   description: Scalars['String'];
//   hourlySalary: Scalars['Float'];
//   img: Scalars['String'];
//   name: Scalars['String'];
//   quantity: Scalars['Float'];
// };

// export type CreateLocationRequest = {
//   address: Scalars['String'];
//   description: Scalars['String'];
//   hourlyRentalFee: Scalars['Float'];
//   img: Scalars['String'];
//   name: Scalars['String'];
// };

// export type CreateServiceRentalRequest = {
//   id: Scalars['ID'];
//   quantity: Scalars['Float'];
// };

// export type CustomerData = {
//   address: Scalars['String'];
//   id: Scalars['String'];
//   name: Scalars['String'];
//   phoneNumber: Scalars['String'];
// };

// export type DeleteFileDto = {
//   url: Scalars['String'];
// };

// export type DepositContractDto = {
//   cancelUrl: Scalars['String'];
//   contractId: Scalars['ID'];
//   successUrl: Scalars['String'];
// };

// export type DeviceData = {
//   availableQuantity?: Maybe<Scalars['Float']>;
//   createdAt: Scalars['DateTime'];
//   description: Scalars['String'];
//   hourlyRentalFee: Scalars['Float'];
//   id: Scalars['ID'];
//   img: Scalars['String'];
//   name: Scalars['String'];
//   quantity: Scalars['Float'];
// };

// export type DeviceRentalData = {
//   device: DeviceData;
//   id: Scalars['String'];
//   quantity: Scalars['Float'];
// };

// export type DevicesData = {
//   items: Array<DeviceData>;
//   meta: MetaPaginationInterface;
// };

// export type EmailSendLogData = {
//   contractId: Scalars['String'];
//   createdAt: Scalars['DateTime'];
//   fileName: Scalars['String'];
//   guests: Array<GuestData>;
//   id: Scalars['String'];
// };

// export type EmailSendLogsData = {
//   items: Array<EmailSendLogData>;
//   meta: MetaPaginationInterface;
// };

// export type EventData = {
//   createdAt: Scalars['DateTime'];
//   description: Scalars['String'];
//   detail: Scalars['String'];
//   eventFormat: Scalars['Boolean'];
//   eventType?: Maybe<EventTypeData>;
//   id: Scalars['String'];
//   img?: Maybe<Scalars['String']>;
//   isTemplate: Scalars['Boolean'];
//   name: Scalars['String'];
//   rental?: Maybe<RentalData>;
// };

// export type EventTypeData = {
//   id: Scalars['String'];
//   name: Scalars['String'];
// };

// export type EventTypesData = {
//   items: Array<EventTypeData>;
//   meta: MetaPaginationInterface;
// };

// export type EventsData = {
//   items: Array<EventData>;
//   meta: MetaPaginationInterface;
// };

// export type FilterDto = {
//   data?: InputMaybe<Scalars['String']>;
//   field: Scalars['String'];
//   operator: QueryOperator;
// };

// export type GetContractStatisticByMonth = {
//   contract: Scalars['Float'];
//   month: Scalars['Float'];
// };

// export type GetContractStatisticByYear = {
//   result: Array<GetContractStatisticByMonth>;
// };

// export type GetContractsRequest = {
//   endTime?: InputMaybe<Scalars['DateTime']>;
//   /**
//    *
//    * - Filter equal: filters:[{field: "User.name", operator: eq, data: "Cam"}]
//    * - Filter not equal: filters:[{field: "User.name", operator: neq, data: "Cam"}]
//    * - Filter less than: filters:[{field: "User.age", operator: lt, data: 40}]
//    * - Filter greater than: filters:[{field: "User.age", operator: gt, data: 40}]
//    * - Filter less than and equal: filters:[{field: "User.age", operator: lte, data: 40}]
//    * - Filter greater than and equal: filters:[{field: "User.age", operator: gte, data: 40}]
//    * - Filter field in many choice: filters:[{field: "User.name", operator: in, data: "Cam,Camm"}]
//    * - Filter field not in many choice: filters:[{field: "User.name", operator: nin, data: "Cam,camm"}]
//    * - Filter field by text: filters:[{field: "User.name", operator: like, data: "Cam"}]
//    */
//   filters?: InputMaybe<Array<FilterDto>>;
//   /**
//    *
//    * - Paginate with limit and offset. Ex: limit:10, page:1
//    *
//    */
//   limit?: InputMaybe<Scalars['Float']>;
//   name?: InputMaybe<Scalars['String']>;
//   /**
//    *
//    * - Order by fields and order reverse use prefix "ASC or DESC". Ex: orderBy: "User.createdAt:DESC"
//    * - Use NULLS_FIRST OR NULLS_LAST to determine where null value should be, Ex: orderBy: "User.createdAt:DESC:NULLS_FIRST"
//    *
//    */
//   orderBy?: InputMaybe<Scalars['String']>;
//   /**
//    *
//    * - Paginate with limit and offset. Ex: limit:10, page:1
//    *
//    */
//   page?: Scalars['Float'];
//   /**
//    *
//    * - Query by text. Ex: q:"abcxyz"
//    *
//    */
//   q?: InputMaybe<Scalars['String']>;
//   startTime?: InputMaybe<Scalars['DateTime']>;
//   status?: InputMaybe<ContractStatus>;
// };

// export type GetEmailSendLogRequest = {
//   contractId: Scalars['ID'];
//   /**
//    *
//    * - Filter equal: filters:[{field: "User.name", operator: eq, data: "Cam"}]
//    * - Filter not equal: filters:[{field: "User.name", operator: neq, data: "Cam"}]
//    * - Filter less than: filters:[{field: "User.age", operator: lt, data: 40}]
//    * - Filter greater than: filters:[{field: "User.age", operator: gt, data: 40}]
//    * - Filter less than and equal: filters:[{field: "User.age", operator: lte, data: 40}]
//    * - Filter greater than and equal: filters:[{field: "User.age", operator: gte, data: 40}]
//    * - Filter field in many choice: filters:[{field: "User.name", operator: in, data: "Cam,Camm"}]
//    * - Filter field not in many choice: filters:[{field: "User.name", operator: nin, data: "Cam,camm"}]
//    * - Filter field by text: filters:[{field: "User.name", operator: like, data: "Cam"}]
//    */
//   filters?: InputMaybe<Array<FilterDto>>;
//   /**
//    *
//    * - Paginate with limit and offset. Ex: limit:10, page:1
//    *
//    */
//   limit?: InputMaybe<Scalars['Float']>;
//   /**
//    *
//    * - Order by fields and order reverse use prefix "ASC or DESC". Ex: orderBy: "User.createdAt:DESC"
//    * - Use NULLS_FIRST OR NULLS_LAST to determine where null value should be, Ex: orderBy: "User.createdAt:DESC:NULLS_FIRST"
//    *
//    */
//   orderBy?: InputMaybe<Scalars['String']>;
//   /**
//    *
//    * - Paginate with limit and offset. Ex: limit:10, page:1
//    *
//    */
//   page?: Scalars['Float'];
//   /**
//    *
//    * - Query by text. Ex: q:"abcxyz"
//    *
//    */
//   q?: InputMaybe<Scalars['String']>;
// };

// export type GetEventsRequest = {
//   eventTypeId?: InputMaybe<Scalars['String']>;
//   /**
//    *
//    * - Filter equal: filters:[{field: "User.name", operator: eq, data: "Cam"}]
//    * - Filter not equal: filters:[{field: "User.name", operator: neq, data: "Cam"}]
//    * - Filter less than: filters:[{field: "User.age", operator: lt, data: 40}]
//    * - Filter greater than: filters:[{field: "User.age", operator: gt, data: 40}]
//    * - Filter less than and equal: filters:[{field: "User.age", operator: lte, data: 40}]
//    * - Filter greater than and equal: filters:[{field: "User.age", operator: gte, data: 40}]
//    * - Filter field in many choice: filters:[{field: "User.name", operator: in, data: "Cam,Camm"}]
//    * - Filter field not in many choice: filters:[{field: "User.name", operator: nin, data: "Cam,camm"}]
//    * - Filter field by text: filters:[{field: "User.name", operator: like, data: "Cam"}]
//    */
//   filters?: InputMaybe<Array<FilterDto>>;
//   /**
//    *
//    * - Paginate with limit and offset. Ex: limit:10, page:1
//    *
//    */
//   limit?: InputMaybe<Scalars['Float']>;
//   name?: InputMaybe<Scalars['String']>;
//   /**
//    *
//    * - Order by fields and order reverse use prefix "ASC or DESC". Ex: orderBy: "User.createdAt:DESC"
//    * - Use NULLS_FIRST OR NULLS_LAST to determine where null value should be, Ex: orderBy: "User.createdAt:DESC:NULLS_FIRST"
//    *
//    */
//   orderBy?: InputMaybe<Scalars['String']>;
//   /**
//    *
//    * - Paginate with limit and offset. Ex: limit:10, page:1
//    *
//    */
//   page?: Scalars['Float'];
//   /**
//    *
//    * - Query by text. Ex: q:"abcxyz"
//    *
//    */
//   q?: InputMaybe<Scalars['String']>;
// };

// export type GetGuestRequest = {
//   emailSendLogId: Scalars['ID'];
//   /**
//    *
//    * - Filter equal: filters:[{field: "User.name", operator: eq, data: "Cam"}]
//    * - Filter not equal: filters:[{field: "User.name", operator: neq, data: "Cam"}]
//    * - Filter less than: filters:[{field: "User.age", operator: lt, data: 40}]
//    * - Filter greater than: filters:[{field: "User.age", operator: gt, data: 40}]
//    * - Filter less than and equal: filters:[{field: "User.age", operator: lte, data: 40}]
//    * - Filter greater than and equal: filters:[{field: "User.age", operator: gte, data: 40}]
//    * - Filter field in many choice: filters:[{field: "User.name", operator: in, data: "Cam,Camm"}]
//    * - Filter field not in many choice: filters:[{field: "User.name", operator: nin, data: "Cam,camm"}]
//    * - Filter field by text: filters:[{field: "User.name", operator: like, data: "Cam"}]
//    */
//   filters?: InputMaybe<Array<FilterDto>>;
//   /**
//    *
//    * - Paginate with limit and offset. Ex: limit:10, page:1
//    *
//    */
//   limit?: InputMaybe<Scalars['Float']>;
//   /**
//    *
//    * - Order by fields and order reverse use prefix "ASC or DESC". Ex: orderBy: "User.createdAt:DESC"
//    * - Use NULLS_FIRST OR NULLS_LAST to determine where null value should be, Ex: orderBy: "User.createdAt:DESC:NULLS_FIRST"
//    *
//    */
//   orderBy?: InputMaybe<Scalars['String']>;
//   /**
//    *
//    * - Paginate with limit and offset. Ex: limit:10, page:1
//    *
//    */
//   page?: Scalars['Float'];
//   /**
//    *
//    * - Query by text. Ex: q:"abcxyz"
//    *
//    */
//   q?: InputMaybe<Scalars['String']>;
// };

// export type GetRevenueStatisticByMonth = {
//   month: Scalars['Float'];
//   revenue: Scalars['Float'];
// };

// export type GetRevenueStatisticByYear = {
//   result: Array<GetRevenueStatisticByMonth>;
// };

// export type GetServicesRequest = {
//   endTime: Scalars['DateTime'];
//   /**
//    *
//    * - Filter equal: filters:[{field: "User.name", operator: eq, data: "Cam"}]
//    * - Filter not equal: filters:[{field: "User.name", operator: neq, data: "Cam"}]
//    * - Filter less than: filters:[{field: "User.age", operator: lt, data: 40}]
//    * - Filter greater than: filters:[{field: "User.age", operator: gt, data: 40}]
//    * - Filter less than and equal: filters:[{field: "User.age", operator: lte, data: 40}]
//    * - Filter greater than and equal: filters:[{field: "User.age", operator: gte, data: 40}]
//    * - Filter field in many choice: filters:[{field: "User.name", operator: in, data: "Cam,Camm"}]
//    * - Filter field not in many choice: filters:[{field: "User.name", operator: nin, data: "Cam,camm"}]
//    * - Filter field by text: filters:[{field: "User.name", operator: like, data: "Cam"}]
//    */
//   filters?: InputMaybe<Array<FilterDto>>;
//   /**
//    *
//    * - Paginate with limit and offset. Ex: limit:10, page:1
//    *
//    */
//   limit?: InputMaybe<Scalars['Float']>;
//   /**
//    *
//    * - Order by fields and order reverse use prefix "ASC or DESC". Ex: orderBy: "User.createdAt:DESC"
//    * - Use NULLS_FIRST OR NULLS_LAST to determine where null value should be, Ex: orderBy: "User.createdAt:DESC:NULLS_FIRST"
//    *
//    */
//   orderBy?: InputMaybe<Scalars['String']>;
//   /**
//    *
//    * - Paginate with limit and offset. Ex: limit:10, page:1
//    *
//    */
//   page?: Scalars['Float'];
//   /**
//    *
//    * - Query by text. Ex: q:"abcxyz"
//    *
//    */
//   q?: InputMaybe<Scalars['String']>;
//   startTime: Scalars['DateTime'];
// };

// export type GetUserStatisticByMonth = {
//   month: Scalars['Float'];
//   user: Scalars['Float'];
// };

// export type GetUserStatisticByYear = {
//   result: Array<GetUserStatisticByMonth>;
// };

// export type GetUsersRequest = {
//   /**
//    *
//    * - Filter equal: filters:[{field: "User.name", operator: eq, data: "Cam"}]
//    * - Filter not equal: filters:[{field: "User.name", operator: neq, data: "Cam"}]
//    * - Filter less than: filters:[{field: "User.age", operator: lt, data: 40}]
//    * - Filter greater than: filters:[{field: "User.age", operator: gt, data: 40}]
//    * - Filter less than and equal: filters:[{field: "User.age", operator: lte, data: 40}]
//    * - Filter greater than and equal: filters:[{field: "User.age", operator: gte, data: 40}]
//    * - Filter field in many choice: filters:[{field: "User.name", operator: in, data: "Cam,Camm"}]
//    * - Filter field not in many choice: filters:[{field: "User.name", operator: nin, data: "Cam,camm"}]
//    * - Filter field by text: filters:[{field: "User.name", operator: like, data: "Cam"}]
//    */
//   filters?: InputMaybe<Array<FilterDto>>;
//   /**
//    *
//    * - Paginate with limit and offset. Ex: limit:10, page:1
//    *
//    */
//   limit?: InputMaybe<Scalars['Float']>;
//   /**
//    *
//    * - Order by fields and order reverse use prefix "ASC or DESC". Ex: orderBy: "User.createdAt:DESC"
//    * - Use NULLS_FIRST OR NULLS_LAST to determine where null value should be, Ex: orderBy: "User.createdAt:DESC:NULLS_FIRST"
//    *
//    */
//   orderBy?: InputMaybe<Scalars['String']>;
//   /**
//    *
//    * - Paginate with limit and offset. Ex: limit:10, page:1
//    *
//    */
//   page?: Scalars['Float'];
//   /**
//    *
//    * - Query by text. Ex: q:"abcxyz"
//    *
//    */
//   q?: InputMaybe<Scalars['String']>;
//   role?: InputMaybe<Scalars['String']>;
//   search?: InputMaybe<Scalars['String']>;
//   status?: InputMaybe<UserStatus>;
// };

// export type GuestData = {
//   createdAt: Scalars['DateTime'];
//   email: Scalars['String'];
//   emailSendLogId: Scalars['String'];
//   id: Scalars['String'];
//   status: SentEmailStatus;
// };

// export type GuestsData = {
//   items: Array<GuestData>;
//   meta: MetaPaginationInterface;
// };

// export type HumanResourceData = {
//   availableQuantity?: Maybe<Scalars['Float']>;
//   createdAt: Scalars['DateTime'];
//   description: Scalars['String'];
//   hourlySalary: Scalars['Float'];
//   id: Scalars['ID'];
//   img?: Maybe<Scalars['String']>;
//   name: Scalars['String'];
//   quantity: Scalars['Float'];
// };

// export type HumanResourceRentalData = {
//   humanResource: HumanResourceData;
//   id: Scalars['String'];
//   quantity: Scalars['Float'];
// };

// export type HumanResourcesData = {
//   items: Array<HumanResourceData>;
//   meta: MetaPaginationInterface;
// };

// export type IPreSignUrl = {
//   fileType: Scalars['String'];
//   pathFile: Scalars['String'];
//   uploadUrl: Scalars['String'];
// };

// export type IRole = {
//   id: Scalars['ID'];
//   name: Scalars['String'];
// };

// export type IRoles = {
//   items: Array<IRole>;
//   meta: MetaPaginationInterface;
// };

// export type IUser = {
//   avatar?: Maybe<Scalars['String']>;
//   createdAt?: Maybe<Scalars['DateTime']>;
//   email: Scalars['String'];
//   firstName: Scalars['String'];
//   id: Scalars['ID'];
//   lastName: Scalars['String'];
//   phoneNumber?: Maybe<Scalars['String']>;
//   role?: Maybe<RoleData>;
//   roleId: Scalars['ID'];
//   updatedAt?: Maybe<Scalars['DateTime']>;
// };

// export type LocationData = {
//   address: Scalars['String'];
//   createdAt: Scalars['DateTime'];
//   description: Scalars['String'];
//   hourlyRentalFee: Scalars['Float'];
//   id: Scalars['ID'];
//   img: Scalars['String'];
//   name: Scalars['String'];
// };

// export type LocationRentalData = {
//   id: Scalars['String'];
//   location: LocationData;
// };

// export type LocationsData = {
//   items: Array<LocationData>;
//   meta: MetaPaginationInterface;
// };

// export type LoginResponse = {
//   email: Scalars['String'];
//   firstName: Scalars['String'];
//   id: Scalars['ID'];
//   lastName: Scalars['String'];
//   refreshToken: Scalars['String'];
//   role: RoleData;
//   token: Scalars['String'];
// };

// export type MetaPaginationInterface = {
//   currentPage: Scalars['Float'];
//   itemCount: Scalars['Float'];
//   itemsPerPage: Scalars['Float'];
//   totalItems: Scalars['Float'];
//   totalPages: Scalars['Float'];
// };

// export type Mutation = {
//   activateUser: ResponseMessageBase;
//   changePassword: ResponseMessageBase;
//   confirmContractDeposit: ContractData;
//   createDevice: ResponseMessageBase;
//   createEvent: ResponseMessageBase;
//   createEventTemplate: ResponseMessageBase;
//   createEventType: ResponseMessageBase;
//   createHumanResource: ResponseMessageBase;
//   createLocation: ResponseMessageBase;
//   deactivateUser: ResponseMessageBase;
//   deleteDevice: ResponseMessageBase;
//   deleteEventTemplate: ResponseMessageBase;
//   deleteFileS3: Scalars['String'];
//   deleteHumanResource: ResponseMessageBase;
//   deleteLocation: ResponseMessageBase;
//   presignedUrlS3: IPreSignUrl;
//   presignedUrlS3Public: IPreSignUrl;
//   refreshToken: RefreshResponse;
//   rentalServices: ResponseMessageBase;
//   sendEmail: Scalars['String'];
//   signIn: LoginResponse;
//   signOut: ResponseMessageBase;
//   signUp: ResponseMessageBase;
//   updateDevice: ResponseMessageBase;
//   updateEventTemplate: ResponseMessageBase;
//   updateHumanResource: ResponseMessageBase;
//   updateLocation: ResponseMessageBase;
//   updateMe: IUser;
//   updateStatusContract: ContractData;
//   uploadImage: Scalars['String'];
//   verifyCode: LoginResponse;
// };


// export type MutationActivateUserArgs = {
//   id: Scalars['String'];
// };


// export type MutationChangePasswordArgs = {
//   changePasswordInput: ChangePasswordInput;
// };


// export type MutationConfirmContractDepositArgs = {
//   input: ConfirmContractDeposit;
// };


// export type MutationCreateDeviceArgs = {
//   input: CreateDeviceRequest;
// };


// export type MutationCreateEventArgs = {
//   input: CreateEventRequest;
// };


// export type MutationCreateEventTemplateArgs = {
//   input: CreateEventTemplateRequest;
// };


// export type MutationCreateEventTypeArgs = {
//   input: CreateEventTypeRequest;
// };


// export type MutationCreateHumanResourceArgs = {
//   input: CreateHumanResourcesRequest;
// };


// export type MutationCreateLocationArgs = {
//   input: CreateLocationRequest;
// };


// export type MutationDeactivateUserArgs = {
//   id: Scalars['String'];
// };


// export type MutationDeleteDeviceArgs = {
//   id: Scalars['String'];
// };


// export type MutationDeleteEventTemplateArgs = {
//   id: Scalars['String'];
// };


// export type MutationDeleteFileS3Args = {
//   deleteFileDto: DeleteFileDto;
// };


// export type MutationDeleteHumanResourceArgs = {
//   id: Scalars['String'];
// };


// export type MutationDeleteLocationArgs = {
//   id: Scalars['String'];
// };


// export type MutationPresignedUrlS3Args = {
//   presignedUrlDto: PresignedUrlDto;
// };


// export type MutationPresignedUrlS3PublicArgs = {
//   presignedUrlDto: PresignedUrlDto;
// };


// export type MutationRefreshTokenArgs = {
//   input: RefreshTokenDto;
// };


// export type MutationRentalServicesArgs = {
//   input: RentalServicesRequest;
// };


// export type MutationSendEmailArgs = {
//   input: SendEmailRequest;
// };


// export type MutationSignInArgs = {
//   input: SignInDto;
// };


// export type MutationSignOutArgs = {
//   input: SignOutDto;
// };


// export type MutationSignUpArgs = {
//   input: SignUpDto;
// };


// export type MutationUpdateDeviceArgs = {
//   input: UpdateDeviceRequest;
// };


// export type MutationUpdateEventTemplateArgs = {
//   input: UpdateEventTemplateRequest;
// };


// export type MutationUpdateHumanResourceArgs = {
//   input: UpdateHumanResourcesRequest;
// };


// export type MutationUpdateLocationArgs = {
//   input: UpdateLocationRequest;
// };


// export type MutationUpdateMeArgs = {
//   input: UserUpdateInput;
// };


// export type MutationUpdateStatusContractArgs = {
//   input: UpdateContractStatusDto;
// };


// export type MutationUploadImageArgs = {
//   input: UploadRequest;
// };


// export type MutationVerifyCodeArgs = {
//   input: CodeVerifyDto;
// };

// export type PresignedUrlDto = {
//   fileName: Scalars['String'];
//   fileType: Scalars['String'];
//   pathType: S3UploadType;
// };

// export enum QueryOperator {
//   Eq = 'eq',
//   Gt = 'gt',
//   Gte = 'gte',
//   In = 'in',
//   IsNotNull = 'isNotNull',
//   IsNull = 'isNull',
//   Like = 'like',
//   Lt = 'lt',
//   Lte = 'lte',
//   Neq = 'neq',
//   Nin = 'nin',
//   UnaccentLike = 'unaccentLike'
// }

// export type Query = {
//   checkoutRemainBillingContract: CheckoutStripeResponse;
//   depositContract: CheckoutStripeResponse;
//   getContract: ContractData;
//   getContractStatisticByYear: GetContractStatisticByYear;
//   getContracts: ContractsData;
//   getDeviceById: DeviceData;
//   getDevices: DevicesData;
//   getDevicesAvailable: DevicesData;
//   getDevicesRental: Array<DeviceRentalData>;
//   getEmailSendLogsByContractId: EmailSendLogsData;
//   getEventById: EventData;
//   getEventTypes: EventTypesData;
//   getEvents: EventsData;
//   getEventsTemplate: EventsData;
//   getGuestsByEmailSendLogId: GuestsData;
//   getHumanResourceById: HumanResourceData;
//   getHumanResources: HumanResourcesData;
//   getHumanResourcesAvailable: HumanResourcesData;
//   getHumanResourcesRental: Array<HumanResourceRentalData>;
//   getLocationById: LocationData;
//   getLocations: LocationsData;
//   getLocationsAvailable: LocationsData;
//   getLocationsRental: Array<LocationRentalData>;
//   getMe: IUser;
//   getMyContracts: ContractsData;
//   getRevenueStatisticByYear: GetRevenueStatisticByYear;
//   getRole: IRole;
//   getRoles: IRoles;
//   getUserStatisticByYear: GetUserStatisticByYear;
//   getUsers: UsersData;
//   testQuery: Scalars['String'];
// };


// export type QueryCheckoutRemainBillingContractArgs = {
//   input: DepositContractDto;
// };


// export type QueryDepositContractArgs = {
//   input: DepositContractDto;
// };


// export type QueryGetContractArgs = {
//   id: Scalars['String'];
// };


// export type QueryGetContractStatisticByYearArgs = {
//   year: Scalars['Float'];
// };


// export type QueryGetContractsArgs = {
//   queryParams: GetContractsRequest;
// };


// export type QueryGetDeviceByIdArgs = {
//   id: Scalars['String'];
// };


// export type QueryGetDevicesArgs = {
//   input: QueryFilterDto;
// };


// export type QueryGetDevicesAvailableArgs = {
//   input: GetServicesRequest;
// };


// export type QueryGetDevicesRentalArgs = {
//   rentalId: Scalars['String'];
// };


// export type QueryGetEmailSendLogsByContractIdArgs = {
//   input: GetEmailSendLogRequest;
// };


// export type QueryGetEventByIdArgs = {
//   id: Scalars['String'];
// };


// export type QueryGetEventTypesArgs = {
//   input: QueryFilterDto;
// };


// export type QueryGetEventsArgs = {
//   input: GetEventsRequest;
// };


// export type QueryGetEventsTemplateArgs = {
//   input: QueryFilterDto;
// };


// export type QueryGetGuestsByEmailSendLogIdArgs = {
//   input: GetGuestRequest;
// };


// export type QueryGetHumanResourceByIdArgs = {
//   id: Scalars['String'];
// };


// export type QueryGetHumanResourcesArgs = {
//   input: QueryFilterDto;
// };


// export type QueryGetHumanResourcesAvailableArgs = {
//   input: GetServicesRequest;
// };


// export type QueryGetHumanResourcesRentalArgs = {
//   rentalId: Scalars['String'];
// };


// export type QueryGetLocationByIdArgs = {
//   id: Scalars['String'];
// };


// export type QueryGetLocationsArgs = {
//   input: QueryFilterDto;
// };


// export type QueryGetLocationsAvailableArgs = {
//   input: GetServicesRequest;
// };


// export type QueryGetLocationsRentalArgs = {
//   rentalId: Scalars['String'];
// };


// export type QueryGetMyContractsArgs = {
//   queryParams: GetContractsRequest;
// };


// export type QueryGetRevenueStatisticByYearArgs = {
//   year: Scalars['Float'];
// };


// export type QueryGetRoleArgs = {
//   id: Scalars['ID'];
// };


// export type QueryGetRolesArgs = {
//   queryParams: QueryFilterDto;
// };


// export type QueryGetUserStatisticByYearArgs = {
//   year: Scalars['Float'];
// };


// export type QueryGetUsersArgs = {
//   queryParams: GetUsersRequest;
// };

// export type QueryFilterDto = {
//   /**
//    *
//    * - Filter equal: filters:[{field: "User.name", operator: eq, data: "Cam"}]
//    * - Filter not equal: filters:[{field: "User.name", operator: neq, data: "Cam"}]
//    * - Filter less than: filters:[{field: "User.age", operator: lt, data: 40}]
//    * - Filter greater than: filters:[{field: "User.age", operator: gt, data: 40}]
//    * - Filter less than and equal: filters:[{field: "User.age", operator: lte, data: 40}]
//    * - Filter greater than and equal: filters:[{field: "User.age", operator: gte, data: 40}]
//    * - Filter field in many choice: filters:[{field: "User.name", operator: in, data: "Cam,Camm"}]
//    * - Filter field not in many choice: filters:[{field: "User.name", operator: nin, data: "Cam,camm"}]
//    * - Filter field by text: filters:[{field: "User.name", operator: like, data: "Cam"}]
//    */
//   filters?: InputMaybe<Array<FilterDto>>;
//   /**
//    *
//    * - Paginate with limit and offset. Ex: limit:10, page:1
//    *
//    */
//   limit?: InputMaybe<Scalars['Float']>;
//   /**
//    *
//    * - Order by fields and order reverse use prefix "ASC or DESC". Ex: orderBy: "User.createdAt:DESC"
//    * - Use NULLS_FIRST OR NULLS_LAST to determine where null value should be, Ex: orderBy: "User.createdAt:DESC:NULLS_FIRST"
//    *
//    */
//   orderBy?: InputMaybe<Scalars['String']>;
//   /**
//    *
//    * - Paginate with limit and offset. Ex: limit:10, page:1
//    *
//    */
//   page?: Scalars['Float'];
//   /**
//    *
//    * - Query by text. Ex: q:"abcxyz"
//    *
//    */
//   q?: InputMaybe<Scalars['String']>;
// };

// export type RefreshResponse = {
//   accessToken: Scalars['String'];
// };

// export type RefreshTokenDto = {
//   refreshToken: Scalars['String'];
// };

// export type RentalData = {
//   customLocation?: Maybe<Scalars['String']>;
//   devices?: Maybe<Array<DeviceData>>;
//   event?: Maybe<EventData>;
//   humanResources?: Maybe<Array<HumanResourceData>>;
//   id: Scalars['String'];
//   locations?: Maybe<Array<LocationData>>;
//   rentalEndTime?: Maybe<Scalars['DateTime']>;
//   rentalStartTime?: Maybe<Scalars['DateTime']>;
//   timelines?: Maybe<Array<TimelineData>>;
//   totalPrice: Scalars['Float'];
//   user: UserData;
// };

// export type RentalServicesRequest = {
//   contractDetails: CreateContractDetailsRequest;
//   devices?: InputMaybe<Array<CreateServiceRentalRequest>>;
//   employees?: InputMaybe<Array<CreateServiceRentalRequest>>;
//   eventId?: InputMaybe<Scalars['ID']>;
//   timeline?: InputMaybe<Array<UpsertTimelineRequest>>;
// };

// export type ResponseMessageBase = {
//   message: Scalars['String'];
//   success: Scalars['Boolean'];
// };

// export type RoleData = {
//   id: Scalars['ID'];
//   name: Scalars['String'];
// };

// export enum S3UploadType {
//   Profile = 'Profile',
//   Public = 'Public'
// }

// export enum SentEmailStatus {
//   Failed = 'FAILED',
//   Queued = 'QUEUED',
//   Sending = 'SENDING',
//   Sent = 'SENT',
//   Unsent = 'UNSENT'
// }

// export type SendEmailRequest = {
//   contractId: Scalars['ID'];
//   key: Scalars['String'];
// };

// export type SignInDto = {
//   email: Scalars['String'];
//   password: Scalars['String'];
// };

// export type SignOutDto = {
//   refreshToken: Scalars['String'];
// };

// export type SignUpDto = {
//   email: Scalars['String'];
//   firstName: Scalars['String'];
//   lastName: Scalars['String'];
//   password: Scalars['String'];
//   phoneNumber: Scalars['String'];
// };

// export type TimelineData = {
//   description: Scalars['String'];
//   id: Scalars['String'];
//   startTime: Scalars['DateTime'];
// };

// export type UpdateContractStatusDto = {
//   contractId: Scalars['ID'];
//   status: ContractStatus;
// };

// export type UpdateDeviceRequest = {
//   description?: InputMaybe<Scalars['String']>;
//   hourlyRentalFee?: InputMaybe<Scalars['Float']>;
//   id: Scalars['ID'];
//   img?: InputMaybe<Scalars['String']>;
//   name?: InputMaybe<Scalars['String']>;
//   quantity?: InputMaybe<Scalars['Float']>;
// };

// export type UpdateEventTemplateRequest = {
//   description?: InputMaybe<Scalars['String']>;
//   detail?: InputMaybe<Scalars['String']>;
//   devices?: InputMaybe<Array<CreateServiceRentalRequest>>;
//   eventFormat?: InputMaybe<Scalars['Boolean']>;
//   eventType?: InputMaybe<CreateEventTypeRequest>;
//   eventTypeId?: InputMaybe<Scalars['String']>;
//   humanResources?: InputMaybe<Array<CreateServiceRentalRequest>>;
//   id: Scalars['ID'];
//   img?: InputMaybe<Scalars['String']>;
//   name?: InputMaybe<Scalars['String']>;
//   timeline?: InputMaybe<Array<UpsertTimelineRequest>>;
// };

// export type UpdateHumanResourcesRequest = {
//   description?: InputMaybe<Scalars['String']>;
//   hourlySalary?: InputMaybe<Scalars['Float']>;
//   id: Scalars['ID'];
//   img?: InputMaybe<Scalars['String']>;
//   name?: InputMaybe<Scalars['String']>;
//   quantity?: InputMaybe<Scalars['Float']>;
// };

// export type UpdateLocationRequest = {
//   address?: InputMaybe<Scalars['String']>;
//   description?: InputMaybe<Scalars['String']>;
//   hourlyRentalFee?: InputMaybe<Scalars['Float']>;
//   id: Scalars['ID'];
//   img?: InputMaybe<Scalars['String']>;
//   name?: InputMaybe<Scalars['String']>;
// };

// export type UploadRequest = {
//   file: Scalars['String'];
//   folder: Scalars['String'];
// };

// export type UpsertTimelineRequest = {
//   description: Scalars['String'];
//   id?: InputMaybe<Scalars['String']>;
//   timeStart: Scalars['DateTime'];
// };

// export type UserData = {
//   avatar?: Maybe<Scalars['String']>;
//   createdAt?: Maybe<Scalars['DateTime']>;
//   dob?: Maybe<Scalars['DateTime']>;
//   email: Scalars['String'];
//   firstName: Scalars['String'];
//   gender?: Maybe<Scalars['Boolean']>;
//   id: Scalars['ID'];
//   lastName: Scalars['String'];
//   phoneNumber?: Maybe<Scalars['String']>;
//   role?: Maybe<RoleData>;
//   roleId: Scalars['ID'];
//   status?: Maybe<UserStatus>;
//   updatedAt?: Maybe<Scalars['DateTime']>;
// };

// export enum UserStatus {
//   Active = 'ACTIVE',
//   Inactive = 'INACTIVE'
// }

// export type UserUpdateInput = {
//   avatar?: InputMaybe<Scalars['String']>;
//   firstName?: InputMaybe<Scalars['String']>;
//   lastName?: InputMaybe<Scalars['String']>;
//   phoneNumber?: InputMaybe<Scalars['String']>;
// };

// export type UsersData = {
//   items: Array<UserData>;
//   meta: MetaPaginationInterface;
// };

// export type OrgTimeRequest = {
//   endTime: Scalars['DateTime'];
//   startTime: Scalars['DateTime'];
// };

// export const MetaFragmentFragmentDoc = gql`
//     fragment MetaFragment on MetaPaginationInterface {
//   totalItems
//   itemCount
//   itemsPerPage
//   totalPages
//   currentPage
// }
//     `;
// export const ChangePasswordDocument = gql`
//     mutation changePassword($changePasswordInput: ChangePasswordInput!) {
//   changePassword(changePasswordInput: $changePasswordInput) {
//     message
//     success
//   }
// }
//     `;
// export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

// /**
//  * __useChangePasswordMutation__
//  *
//  * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
//  * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
//  * - A mutate function that you can call at any time to execute the mutation
//  * - An object with fields that represent the current status of the mutation's execution
//  *
//  * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
//  *
//  * @example
//  * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
//  *   variables: {
//  *      changePasswordInput: // value for 'changePasswordInput'
//  *   },
//  * });
//  */
// export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
// }
// export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
// export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
// export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
// export const ConfirmContractDepositDocument = gql`
//     mutation ConfirmContractDeposit($input: ConfirmContractDeposit!) {
//   confirmContractDeposit(input: $input) {
//     createdAt
//     customer {
//       address
//       id
//       name
//       phoneNumber
//     }
//     id
//     name
//     rental {
//       devices {
//         availableQuantity
//         description
//         hourlyRentalFee
//         id
//         img
//         name
//         quantity
//       }
//       humanResources {
//         availableQuantity
//         description
//         hourlySalary
//         id
//         img
//         name
//         quantity
//       }
//       id
//       locations {
//         address
//         description
//         hourlyRentalFee
//         id
//         img
//         name
//       }
//       rentalEndTime
//       rentalStartTime
//       totalPrice
//       user {
//         avatar
//         createdAt
//         dob
//         email
//         firstName
//         gender
//         id
//         lastName
//         phoneNumber
//         role {
//           id
//           name
//         }
//         roleId
//         updatedAt
//       }
//     }
//     singingDate
//     status
//   }
// }
//     `;
// export type ConfirmContractDepositMutationFn = Apollo.MutationFunction<ConfirmContractDepositMutation, ConfirmContractDepositMutationVariables>;

// /**
//  * __useConfirmContractDepositMutation__
//  *
//  * To run a mutation, you first call `useConfirmContractDepositMutation` within a React component and pass it any options that fit your needs.
//  * When your component renders, `useConfirmContractDepositMutation` returns a tuple that includes:
//  * - A mutate function that you can call at any time to execute the mutation
//  * - An object with fields that represent the current status of the mutation's execution
//  *
//  * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
//  *
//  * @example
//  * const [confirmContractDepositMutation, { data, loading, error }] = useConfirmContractDepositMutation({
//  *   variables: {
//  *      input: // value for 'input'
//  *   },
//  * });
//  */
// export function useConfirmContractDepositMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmContractDepositMutation, ConfirmContractDepositMutationVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useMutation<ConfirmContractDepositMutation, ConfirmContractDepositMutationVariables>(ConfirmContractDepositDocument, options);
// }
// export type ConfirmContractDepositMutationHookResult = ReturnType<typeof useConfirmContractDepositMutation>;
// export type ConfirmContractDepositMutationResult = Apollo.MutationResult<ConfirmContractDepositMutation>;
// export type ConfirmContractDepositMutationOptions = Apollo.BaseMutationOptions<ConfirmContractDepositMutation, ConfirmContractDepositMutationVariables>;
// export const CreateDeviceDocument = gql`
//     mutation CreateDevice($input: CreateDeviceRequest!) {
//   createDevice(input: $input) {
//     message
//     success
//   }
// }
//     `;
// export type CreateDeviceMutationFn = Apollo.MutationFunction<CreateDeviceMutation, CreateDeviceMutationVariables>;

// /**
//  * __useCreateDeviceMutation__
//  *
//  * To run a mutation, you first call `useCreateDeviceMutation` within a React component and pass it any options that fit your needs.
//  * When your component renders, `useCreateDeviceMutation` returns a tuple that includes:
//  * - A mutate function that you can call at any time to execute the mutation
//  * - An object with fields that represent the current status of the mutation's execution
//  *
//  * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
//  *
//  * @example
//  * const [createDeviceMutation, { data, loading, error }] = useCreateDeviceMutation({
//  *   variables: {
//  *      input: // value for 'input'
//  *   },
//  * });
//  */
// export function useCreateDeviceMutation(baseOptions?: Apollo.MutationHookOptions<CreateDeviceMutation, CreateDeviceMutationVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useMutation<CreateDeviceMutation, CreateDeviceMutationVariables>(CreateDeviceDocument, options);
// }
// export type CreateDeviceMutationHookResult = ReturnType<typeof useCreateDeviceMutation>;
// export type CreateDeviceMutationResult = Apollo.MutationResult<CreateDeviceMutation>;
// export type CreateDeviceMutationOptions = Apollo.BaseMutationOptions<CreateDeviceMutation, CreateDeviceMutationVariables>;
// export const CreateEventTypeDocument = gql`
//     mutation CreateEventType($input: CreateEventTypeRequest!) {
//   createEventType(input: $input) {
//     message
//     success
//   }
// }
//     `;
// export type CreateEventTypeMutationFn = Apollo.MutationFunction<CreateEventTypeMutation, CreateEventTypeMutationVariables>;

// /**
//  * __useCreateEventTypeMutation__
//  *
//  * To run a mutation, you first call `useCreateEventTypeMutation` within a React component and pass it any options that fit your needs.
//  * When your component renders, `useCreateEventTypeMutation` returns a tuple that includes:
//  * - A mutate function that you can call at any time to execute the mutation
//  * - An object with fields that represent the current status of the mutation's execution
//  *
//  * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
//  *
//  * @example
//  * const [createEventTypeMutation, { data, loading, error }] = useCreateEventTypeMutation({
//  *   variables: {
//  *      input: // value for 'input'
//  *   },
//  * });
//  */
// export function useCreateEventTypeMutation(baseOptions?: Apollo.MutationHookOptions<CreateEventTypeMutation, CreateEventTypeMutationVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useMutation<CreateEventTypeMutation, CreateEventTypeMutationVariables>(CreateEventTypeDocument, options);
// }
// export type CreateEventTypeMutationHookResult = ReturnType<typeof useCreateEventTypeMutation>;
// export type CreateEventTypeMutationResult = Apollo.MutationResult<CreateEventTypeMutation>;
// export type CreateEventTypeMutationOptions = Apollo.BaseMutationOptions<CreateEventTypeMutation, CreateEventTypeMutationVariables>;
// export const CreateHumanResourceDocument = gql`
//     mutation CreateHumanResource($input: CreateHumanResourcesRequest!) {
//   createHumanResource(input: $input) {
//     message
//     success
//   }
// }
//     `;
// export type CreateHumanResourceMutationFn = Apollo.MutationFunction<CreateHumanResourceMutation, CreateHumanResourceMutationVariables>;

// /**
//  * __useCreateHumanResourceMutation__
//  *
//  * To run a mutation, you first call `useCreateHumanResourceMutation` within a React component and pass it any options that fit your needs.
//  * When your component renders, `useCreateHumanResourceMutation` returns a tuple that includes:
//  * - A mutate function that you can call at any time to execute the mutation
//  * - An object with fields that represent the current status of the mutation's execution
//  *
//  * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
//  *
//  * @example
//  * const [createHumanResourceMutation, { data, loading, error }] = useCreateHumanResourceMutation({
//  *   variables: {
//  *      input: // value for 'input'
//  *   },
//  * });
//  */
// export function useCreateHumanResourceMutation(baseOptions?: Apollo.MutationHookOptions<CreateHumanResourceMutation, CreateHumanResourceMutationVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useMutation<CreateHumanResourceMutation, CreateHumanResourceMutationVariables>(CreateHumanResourceDocument, options);
// }
// export type CreateHumanResourceMutationHookResult = ReturnType<typeof useCreateHumanResourceMutation>;
// export type CreateHumanResourceMutationResult = Apollo.MutationResult<CreateHumanResourceMutation>;
// export type CreateHumanResourceMutationOptions = Apollo.BaseMutationOptions<CreateHumanResourceMutation, CreateHumanResourceMutationVariables>;
// export const CreateLocationDocument = gql`
//     mutation CreateLocation($input: CreateLocationRequest!) {
//   createLocation(input: $input) {
//     message
//     success
//   }
// }
//     `;
// export type CreateLocationMutationFn = Apollo.MutationFunction<CreateLocationMutation, CreateLocationMutationVariables>;

// /**
//  * __useCreateLocationMutation__
//  *
//  * To run a mutation, you first call `useCreateLocationMutation` within a React component and pass it any options that fit your needs.
//  * When your component renders, `useCreateLocationMutation` returns a tuple that includes:
//  * - A mutate function that you can call at any time to execute the mutation
//  * - An object with fields that represent the current status of the mutation's execution
//  *
//  * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
//  *
//  * @example
//  * const [createLocationMutation, { data, loading, error }] = useCreateLocationMutation({
//  *   variables: {
//  *      input: // value for 'input'
//  *   },
//  * });
//  */
// export function useCreateLocationMutation(baseOptions?: Apollo.MutationHookOptions<CreateLocationMutation, CreateLocationMutationVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useMutation<CreateLocationMutation, CreateLocationMutationVariables>(CreateLocationDocument, options);
// }
// export type CreateLocationMutationHookResult = ReturnType<typeof useCreateLocationMutation>;
// export type CreateLocationMutationResult = Apollo.MutationResult<CreateLocationMutation>;
// export type CreateLocationMutationOptions = Apollo.BaseMutationOptions<CreateLocationMutation, CreateLocationMutationVariables>;
// export const PresignedUrlS3Document = gql`
//     mutation PresignedUrlS3($presignedUrlDto: PresignedUrlDto!) {
//   presignedUrlS3(presignedUrlDto: $presignedUrlDto) {
//     fileType
//     pathFile
//     uploadUrl
//   }
// }
//     `;
// export type PresignedUrlS3MutationFn = Apollo.MutationFunction<PresignedUrlS3Mutation, PresignedUrlS3MutationVariables>;

// /**
//  * __usePresignedUrlS3Mutation__
//  *
//  * To run a mutation, you first call `usePresignedUrlS3Mutation` within a React component and pass it any options that fit your needs.
//  * When your component renders, `usePresignedUrlS3Mutation` returns a tuple that includes:
//  * - A mutate function that you can call at any time to execute the mutation
//  * - An object with fields that represent the current status of the mutation's execution
//  *
//  * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
//  *
//  * @example
//  * const [presignedUrlS3Mutation, { data, loading, error }] = usePresignedUrlS3Mutation({
//  *   variables: {
//  *      presignedUrlDto: // value for 'presignedUrlDto'
//  *   },
//  * });
//  */
// export function usePresignedUrlS3Mutation(baseOptions?: Apollo.MutationHookOptions<PresignedUrlS3Mutation, PresignedUrlS3MutationVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useMutation<PresignedUrlS3Mutation, PresignedUrlS3MutationVariables>(PresignedUrlS3Document, options);
// }
// export type PresignedUrlS3MutationHookResult = ReturnType<typeof usePresignedUrlS3Mutation>;
// export type PresignedUrlS3MutationResult = Apollo.MutationResult<PresignedUrlS3Mutation>;
// export type PresignedUrlS3MutationOptions = Apollo.BaseMutationOptions<PresignedUrlS3Mutation, PresignedUrlS3MutationVariables>;
// export const RefreshTokenDocument = gql`
//     mutation refreshToken($input: RefreshTokenDto!) {
//   refreshToken(input: $input) {
//     accessToken
//   }
// }
//     `;
// export type RefreshTokenMutationFn = Apollo.MutationFunction<RefreshTokenMutation, RefreshTokenMutationVariables>;

// /**
//  * __useRefreshTokenMutation__
//  *
//  * To run a mutation, you first call `useRefreshTokenMutation` within a React component and pass it any options that fit your needs.
//  * When your component renders, `useRefreshTokenMutation` returns a tuple that includes:
//  * - A mutate function that you can call at any time to execute the mutation
//  * - An object with fields that represent the current status of the mutation's execution
//  *
//  * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
//  *
//  * @example
//  * const [refreshTokenMutation, { data, loading, error }] = useRefreshTokenMutation({
//  *   variables: {
//  *      input: // value for 'input'
//  *   },
//  * });
//  */
// export function useRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<RefreshTokenMutation, RefreshTokenMutationVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument, options);
// }
// export type RefreshTokenMutationHookResult = ReturnType<typeof useRefreshTokenMutation>;
// export type RefreshTokenMutationResult = Apollo.MutationResult<RefreshTokenMutation>;
// export type RefreshTokenMutationOptions = Apollo.BaseMutationOptions<RefreshTokenMutation, RefreshTokenMutationVariables>;
// export const RentalServicesDocument = gql`
//     mutation RentalServices($input: RentalServicesRequest!) {
//   rentalServices(input: $input) {
//     message
//     success
//   }
// }
//     `;
// export type RentalServicesMutationFn = Apollo.MutationFunction<RentalServicesMutation, RentalServicesMutationVariables>;

// /**
//  * __useRentalServicesMutation__
//  *
//  * To run a mutation, you first call `useRentalServicesMutation` within a React component and pass it any options that fit your needs.
//  * When your component renders, `useRentalServicesMutation` returns a tuple that includes:
//  * - A mutate function that you can call at any time to execute the mutation
//  * - An object with fields that represent the current status of the mutation's execution
//  *
//  * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
//  *
//  * @example
//  * const [rentalServicesMutation, { data, loading, error }] = useRentalServicesMutation({
//  *   variables: {
//  *      input: // value for 'input'
//  *   },
//  * });
//  */
// export function useRentalServicesMutation(baseOptions?: Apollo.MutationHookOptions<RentalServicesMutation, RentalServicesMutationVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useMutation<RentalServicesMutation, RentalServicesMutationVariables>(RentalServicesDocument, options);
// }
// export type RentalServicesMutationHookResult = ReturnType<typeof useRentalServicesMutation>;
// export type RentalServicesMutationResult = Apollo.MutationResult<RentalServicesMutation>;
// export type RentalServicesMutationOptions = Apollo.BaseMutationOptions<RentalServicesMutation, RentalServicesMutationVariables>;
// export const SendEmailDocument = gql`
//     mutation SendEmail($input: SendEmailRequest!) {
//   sendEmail(input: $input)
// }
//     `;
// export type SendEmailMutationFn = Apollo.MutationFunction<SendEmailMutation, SendEmailMutationVariables>;

// /**
//  * __useSendEmailMutation__
//  *
//  * To run a mutation, you first call `useSendEmailMutation` within a React component and pass it any options that fit your needs.
//  * When your component renders, `useSendEmailMutation` returns a tuple that includes:
//  * - A mutate function that you can call at any time to execute the mutation
//  * - An object with fields that represent the current status of the mutation's execution
//  *
//  * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
//  *
//  * @example
//  * const [sendEmailMutation, { data, loading, error }] = useSendEmailMutation({
//  *   variables: {
//  *      input: // value for 'input'
//  *   },
//  * });
//  */
// export function useSendEmailMutation(baseOptions?: Apollo.MutationHookOptions<SendEmailMutation, SendEmailMutationVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useMutation<SendEmailMutation, SendEmailMutationVariables>(SendEmailDocument, options);
// }
// export type SendEmailMutationHookResult = ReturnType<typeof useSendEmailMutation>;
// export type SendEmailMutationResult = Apollo.MutationResult<SendEmailMutation>;
// export type SendEmailMutationOptions = Apollo.BaseMutationOptions<SendEmailMutation, SendEmailMutationVariables>;
// export const SignInDocument = gql`
//     mutation signIn($input: SignInDto!) {
//   signIn(input: $input) {
//     token
//     refreshToken
//     id
//     email
//     role {
//       id
//       name
//     }
//   }
// }
//     `;
// export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

// /**
//  * __useSignInMutation__
//  *
//  * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
//  * When your component renders, `useSignInMutation` returns a tuple that includes:
//  * - A mutate function that you can call at any time to execute the mutation
//  * - An object with fields that represent the current status of the mutation's execution
//  *
//  * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
//  *
//  * @example
//  * const [signInMutation, { data, loading, error }] = useSignInMutation({
//  *   variables: {
//  *      input: // value for 'input'
//  *   },
//  * });
//  */
// export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
// }
// export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
// export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
// export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
// export const SignUpDocument = gql`
//     mutation signUp($input: SignUpDto!) {
//   signUp(input: $input) {
//     message
//     success
//   }
// }
//     `;
// export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

// /**
//  * __useSignUpMutation__
//  *
//  * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
//  * When your component renders, `useSignUpMutation` returns a tuple that includes:
//  * - A mutate function that you can call at any time to execute the mutation
//  * - An object with fields that represent the current status of the mutation's execution
//  *
//  * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
//  *
//  * @example
//  * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
//  *   variables: {
//  *      input: // value for 'input'
//  *   },
//  * });
//  */
// export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
// }
// export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
// export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
// export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
// export const UpdateStatusContractDocument = gql`
//     mutation UpdateStatusContract($input: UpdateContractStatusDto!) {
//   updateStatusContract(input: $input) {
//     createdAt
//     customer {
//       address
//       id
//       name
//       phoneNumber
//     }
//     id
//     name
//     rental {
//       devices {
//         availableQuantity
//         description
//         hourlyRentalFee
//         id
//         img
//         name
//         quantity
//       }
//       humanResources {
//         availableQuantity
//         description
//         hourlySalary
//         id
//         img
//         name
//         quantity
//       }
//       id
//       locations {
//         address
//         description
//         hourlyRentalFee
//         id
//         img
//         name
//       }
//       rentalEndTime
//       rentalStartTime
//       totalPrice
//       user {
//         avatar
//         createdAt
//         dob
//         email
//         firstName
//         gender
//         id
//         lastName
//         phoneNumber
//         role {
//           id
//           name
//         }
//         roleId
//         updatedAt
//       }
//     }
//     singingDate
//     status
//   }
// }
//     `;
// export type UpdateStatusContractMutationFn = Apollo.MutationFunction<UpdateStatusContractMutation, UpdateStatusContractMutationVariables>;

// /**
//  * __useUpdateStatusContractMutation__
//  *
//  * To run a mutation, you first call `useUpdateStatusContractMutation` within a React component and pass it any options that fit your needs.
//  * When your component renders, `useUpdateStatusContractMutation` returns a tuple that includes:
//  * - A mutate function that you can call at any time to execute the mutation
//  * - An object with fields that represent the current status of the mutation's execution
//  *
//  * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
//  *
//  * @example
//  * const [updateStatusContractMutation, { data, loading, error }] = useUpdateStatusContractMutation({
//  *   variables: {
//  *      input: // value for 'input'
//  *   },
//  * });
//  */
// export function useUpdateStatusContractMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStatusContractMutation, UpdateStatusContractMutationVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useMutation<UpdateStatusContractMutation, UpdateStatusContractMutationVariables>(UpdateStatusContractDocument, options);
// }
// export type UpdateStatusContractMutationHookResult = ReturnType<typeof useUpdateStatusContractMutation>;
// export type UpdateStatusContractMutationResult = Apollo.MutationResult<UpdateStatusContractMutation>;
// export type UpdateStatusContractMutationOptions = Apollo.BaseMutationOptions<UpdateStatusContractMutation, UpdateStatusContractMutationVariables>;
// export const UpdateMeDocument = gql`
//     mutation updateMe($input: UserUpdateInput!) {
//   updateMe(input: $input) {
//     avatar
//     email
//     firstName
//     lastName
//     id
//     phoneNumber
//     role {
//       name
//     }
//   }
// }
//     `;
// export type UpdateMeMutationFn = Apollo.MutationFunction<UpdateMeMutation, UpdateMeMutationVariables>;

// /**
//  * __useUpdateMeMutation__
//  *
//  * To run a mutation, you first call `useUpdateMeMutation` within a React component and pass it any options that fit your needs.
//  * When your component renders, `useUpdateMeMutation` returns a tuple that includes:
//  * - A mutate function that you can call at any time to execute the mutation
//  * - An object with fields that represent the current status of the mutation's execution
//  *
//  * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
//  *
//  * @example
//  * const [updateMeMutation, { data, loading, error }] = useUpdateMeMutation({
//  *   variables: {
//  *      input: // value for 'input'
//  *   },
//  * });
//  */
// export function useUpdateMeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMeMutation, UpdateMeMutationVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useMutation<UpdateMeMutation, UpdateMeMutationVariables>(UpdateMeDocument, options);
// }
// export type UpdateMeMutationHookResult = ReturnType<typeof useUpdateMeMutation>;
// export type UpdateMeMutationResult = Apollo.MutationResult<UpdateMeMutation>;
// export type UpdateMeMutationOptions = Apollo.BaseMutationOptions<UpdateMeMutation, UpdateMeMutationVariables>;
// export const UploadImageDocument = gql`
//     mutation UploadImage($input: UploadRequest!) {
//   uploadImage(input: $input)
// }
//     `;
// export type UploadImageMutationFn = Apollo.MutationFunction<UploadImageMutation, UploadImageMutationVariables>;

// /**
//  * __useUploadImageMutation__
//  *
//  * To run a mutation, you first call `useUploadImageMutation` within a React component and pass it any options that fit your needs.
//  * When your component renders, `useUploadImageMutation` returns a tuple that includes:
//  * - A mutate function that you can call at any time to execute the mutation
//  * - An object with fields that represent the current status of the mutation's execution
//  *
//  * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
//  *
//  * @example
//  * const [uploadImageMutation, { data, loading, error }] = useUploadImageMutation({
//  *   variables: {
//  *      input: // value for 'input'
//  *   },
//  * });
//  */
// export function useUploadImageMutation(baseOptions?: Apollo.MutationHookOptions<UploadImageMutation, UploadImageMutationVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useMutation<UploadImageMutation, UploadImageMutationVariables>(UploadImageDocument, options);
// }
// export type UploadImageMutationHookResult = ReturnType<typeof useUploadImageMutation>;
// export type UploadImageMutationResult = Apollo.MutationResult<UploadImageMutation>;
// export type UploadImageMutationOptions = Apollo.BaseMutationOptions<UploadImageMutation, UploadImageMutationVariables>;
// export const VerifyCodeDocument = gql`
//     mutation verifyCode($input: CodeVerifyDto!) {
//   verifyCode(input: $input) {
//     token
//     refreshToken
//     id
//   }
// }
//     `;
// export type VerifyCodeMutationFn = Apollo.MutationFunction<VerifyCodeMutation, VerifyCodeMutationVariables>;

// /**
//  * __useVerifyCodeMutation__
//  *
//  * To run a mutation, you first call `useVerifyCodeMutation` within a React component and pass it any options that fit your needs.
//  * When your component renders, `useVerifyCodeMutation` returns a tuple that includes:
//  * - A mutate function that you can call at any time to execute the mutation
//  * - An object with fields that represent the current status of the mutation's execution
//  *
//  * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
//  *
//  * @example
//  * const [verifyCodeMutation, { data, loading, error }] = useVerifyCodeMutation({
//  *   variables: {
//  *      input: // value for 'input'
//  *   },
//  * });
//  */
// export function useVerifyCodeMutation(baseOptions?: Apollo.MutationHookOptions<VerifyCodeMutation, VerifyCodeMutationVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useMutation<VerifyCodeMutation, VerifyCodeMutationVariables>(VerifyCodeDocument, options);
// }
// export type VerifyCodeMutationHookResult = ReturnType<typeof useVerifyCodeMutation>;
// export type VerifyCodeMutationResult = Apollo.MutationResult<VerifyCodeMutation>;
// export type VerifyCodeMutationOptions = Apollo.BaseMutationOptions<VerifyCodeMutation, VerifyCodeMutationVariables>;
// export const CheckoutRemainBillingContractDocument = gql`
//     query CheckoutRemainBillingContract($input: DepositContractDto!) {
//   checkoutRemainBillingContract(input: $input) {
//     cancelUrl
//     checkoutUrl
//     successUrl
//   }
// }
//     `;

// /**
//  * __useCheckoutRemainBillingContractQuery__
//  *
//  * To run a query within a React component, call `useCheckoutRemainBillingContractQuery` and pass it any options that fit your needs.
//  * When your component renders, `useCheckoutRemainBillingContractQuery` returns an object from Apollo Client that contains loading, error, and data properties
//  * you can use to render your UI.
//  *
//  * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
//  *
//  * @example
//  * const { data, loading, error } = useCheckoutRemainBillingContractQuery({
//  *   variables: {
//  *      input: // value for 'input'
//  *   },
//  * });
//  */
// export function useCheckoutRemainBillingContractQuery(baseOptions: Apollo.QueryHookOptions<CheckoutRemainBillingContractQuery, CheckoutRemainBillingContractQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useQuery<CheckoutRemainBillingContractQuery, CheckoutRemainBillingContractQueryVariables>(CheckoutRemainBillingContractDocument, options);
// }
// export function useCheckoutRemainBillingContractLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckoutRemainBillingContractQuery, CheckoutRemainBillingContractQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useLazyQuery<CheckoutRemainBillingContractQuery, CheckoutRemainBillingContractQueryVariables>(CheckoutRemainBillingContractDocument, options);
// }
// export type CheckoutRemainBillingContractQueryHookResult = ReturnType<typeof useCheckoutRemainBillingContractQuery>;
// export type CheckoutRemainBillingContractLazyQueryHookResult = ReturnType<typeof useCheckoutRemainBillingContractLazyQuery>;
// export type CheckoutRemainBillingContractQueryResult = Apollo.QueryResult<CheckoutRemainBillingContractQuery, CheckoutRemainBillingContractQueryVariables>;
// export function refetchCheckoutRemainBillingContractQuery(variables: CheckoutRemainBillingContractQueryVariables) {
//   return { query: CheckoutRemainBillingContractDocument, variables: variables }
// }
// export const DepositContractDocument = gql`
//     query DepositContract($input: DepositContractDto!) {
//   depositContract(input: $input) {
//     cancelUrl
//     checkoutUrl
//     successUrl
//   }
// }
//     `;

// /**
//  * __useDepositContractQuery__
//  *
//  * To run a query within a React component, call `useDepositContractQuery` and pass it any options that fit your needs.
//  * When your component renders, `useDepositContractQuery` returns an object from Apollo Client that contains loading, error, and data properties
//  * you can use to render your UI.
//  *
//  * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
//  *
//  * @example
//  * const { data, loading, error } = useDepositContractQuery({
//  *   variables: {
//  *      input: // value for 'input'
//  *   },
//  * });
//  */
// export function useDepositContractQuery(baseOptions: Apollo.QueryHookOptions<DepositContractQuery, DepositContractQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useQuery<DepositContractQuery, DepositContractQueryVariables>(DepositContractDocument, options);
// }
// export function useDepositContractLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DepositContractQuery, DepositContractQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useLazyQuery<DepositContractQuery, DepositContractQueryVariables>(DepositContractDocument, options);
// }
// export type DepositContractQueryHookResult = ReturnType<typeof useDepositContractQuery>;
// export type DepositContractLazyQueryHookResult = ReturnType<typeof useDepositContractLazyQuery>;
// export type DepositContractQueryResult = Apollo.QueryResult<DepositContractQuery, DepositContractQueryVariables>;
// export function refetchDepositContractQuery(variables: DepositContractQueryVariables) {
//   return { query: DepositContractDocument, variables: variables }
// }
// export const GetContractDocument = gql`
//     query GetContract($getContractId: String!) {
//   getContract(id: $getContractId) {
//     createdAt
//     customer {
//       address
//       id
//       name
//       phoneNumber
//     }
//     id
//     name
//     rental {
//       customLocation
//       devices {
//         availableQuantity
//         createdAt
//         description
//         hourlyRentalFee
//         id
//         img
//         name
//         quantity
//       }
//       event {
//         createdAt
//         description
//         detail
//         eventFormat
//         eventType {
//           id
//           name
//         }
//         id
//         img
//         isTemplate
//         name
//       }
//       humanResources {
//         availableQuantity
//         createdAt
//         description
//         hourlySalary
//         id
//         img
//         name
//         quantity
//       }
//       id
//       locations {
//         address
//         createdAt
//         description
//         hourlyRentalFee
//         id
//         img
//         name
//       }
//       rentalEndTime
//       rentalStartTime
//       timelines {
//         description
//         id
//         startTime
//       }
//       totalPrice
//       user {
//         avatar
//         createdAt
//         dob
//         email
//         firstName
//         gender
//         id
//         lastName
//         phoneNumber
//         role {
//           id
//           name
//         }
//         roleId
//         updatedAt
//       }
//     }
//     singingDate
//     status
//     updatedAt
//   }
// }
//     `;

// /**
//  * __useGetContractQuery__
//  *
//  * To run a query within a React component, call `useGetContractQuery` and pass it any options that fit your needs.
//  * When your component renders, `useGetContractQuery` returns an object from Apollo Client that contains loading, error, and data properties
//  * you can use to render your UI.
//  *
//  * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
//  *
//  * @example
//  * const { data, loading, error } = useGetContractQuery({
//  *   variables: {
//  *      getContractId: // value for 'getContractId'
//  *   },
//  * });
//  */
// export function useGetContractQuery(baseOptions: Apollo.QueryHookOptions<GetContractQuery, GetContractQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useQuery<GetContractQuery, GetContractQueryVariables>(GetContractDocument, options);
// }
// export function useGetContractLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContractQuery, GetContractQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useLazyQuery<GetContractQuery, GetContractQueryVariables>(GetContractDocument, options);
// }
// export type GetContractQueryHookResult = ReturnType<typeof useGetContractQuery>;
// export type GetContractLazyQueryHookResult = ReturnType<typeof useGetContractLazyQuery>;
// export type GetContractQueryResult = Apollo.QueryResult<GetContractQuery, GetContractQueryVariables>;
// export function refetchGetContractQuery(variables: GetContractQueryVariables) {
//   return { query: GetContractDocument, variables: variables }
// }
// export const GetDevicesAvailableDocument = gql`
//     query GetDevicesAvailable($input: GetServicesRequest!) {
//   getDevicesAvailable(input: $input) {
//     items {
//       availableQuantity
//       hourlyRentalFee
//       id
//       img
//       name
//       quantity
//     }
//     meta {
//       currentPage
//       itemCount
//       itemsPerPage
//       totalItems
//       totalPages
//     }
//   }
// }
//     `;

// /**
//  * __useGetDevicesAvailableQuery__
//  *
//  * To run a query within a React component, call `useGetDevicesAvailableQuery` and pass it any options that fit your needs.
//  * When your component renders, `useGetDevicesAvailableQuery` returns an object from Apollo Client that contains loading, error, and data properties
//  * you can use to render your UI.
//  *
//  * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
//  *
//  * @example
//  * const { data, loading, error } = useGetDevicesAvailableQuery({
//  *   variables: {
//  *      input: // value for 'input'
//  *   },
//  * });
//  */
// export function useGetDevicesAvailableQuery(baseOptions: Apollo.QueryHookOptions<GetDevicesAvailableQuery, GetDevicesAvailableQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useQuery<GetDevicesAvailableQuery, GetDevicesAvailableQueryVariables>(GetDevicesAvailableDocument, options);
// }
// export function useGetDevicesAvailableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDevicesAvailableQuery, GetDevicesAvailableQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useLazyQuery<GetDevicesAvailableQuery, GetDevicesAvailableQueryVariables>(GetDevicesAvailableDocument, options);
// }
// export type GetDevicesAvailableQueryHookResult = ReturnType<typeof useGetDevicesAvailableQuery>;
// export type GetDevicesAvailableLazyQueryHookResult = ReturnType<typeof useGetDevicesAvailableLazyQuery>;
// export type GetDevicesAvailableQueryResult = Apollo.QueryResult<GetDevicesAvailableQuery, GetDevicesAvailableQueryVariables>;
// export function refetchGetDevicesAvailableQuery(variables: GetDevicesAvailableQueryVariables) {
//   return { query: GetDevicesAvailableDocument, variables: variables }
// }
// export const GetDevicesRentalDocument = gql`
//     query GetDevicesRental($rentalId: String!) {
//   getDevicesRental(rentalId: $rentalId) {
//     device {
//       availableQuantity
//       hourlyRentalFee
//       id
//       img
//       name
//       quantity
//     }
//     id
//     quantity
//   }
// }
//     `;

// /**
//  * __useGetDevicesRentalQuery__
//  *
//  * To run a query within a React component, call `useGetDevicesRentalQuery` and pass it any options that fit your needs.
//  * When your component renders, `useGetDevicesRentalQuery` returns an object from Apollo Client that contains loading, error, and data properties
//  * you can use to render your UI.
//  *
//  * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
//  *
//  * @example
//  * const { data, loading, error } = useGetDevicesRentalQuery({
//  *   variables: {
//  *      rentalId: // value for 'rentalId'
//  *   },
//  * });
//  */
// export function useGetDevicesRentalQuery(baseOptions: Apollo.QueryHookOptions<GetDevicesRentalQuery, GetDevicesRentalQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useQuery<GetDevicesRentalQuery, GetDevicesRentalQueryVariables>(GetDevicesRentalDocument, options);
// }
// export function useGetDevicesRentalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDevicesRentalQuery, GetDevicesRentalQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useLazyQuery<GetDevicesRentalQuery, GetDevicesRentalQueryVariables>(GetDevicesRentalDocument, options);
// }
// export type GetDevicesRentalQueryHookResult = ReturnType<typeof useGetDevicesRentalQuery>;
// export type GetDevicesRentalLazyQueryHookResult = ReturnType<typeof useGetDevicesRentalLazyQuery>;
// export type GetDevicesRentalQueryResult = Apollo.QueryResult<GetDevicesRentalQuery, GetDevicesRentalQueryVariables>;
// export function refetchGetDevicesRentalQuery(variables: GetDevicesRentalQueryVariables) {
//   return { query: GetDevicesRentalDocument, variables: variables }
// }
// export const GetEmailSendLogsByContractIdDocument = gql`
//     query GetEmailSendLogsByContractId($input: GetEmailSendLogRequest!) {
//   getEmailSendLogsByContractId(input: $input) {
//     items {
//       contractId
//       createdAt
//       fileName
//       guests {
//         createdAt
//         email
//         emailSendLogId
//         id
//         status
//       }
//       id
//     }
//     meta {
//       currentPage
//       itemCount
//       itemsPerPage
//       totalItems
//       totalPages
//     }
//   }
// }
//     `;

// /**
//  * __useGetEmailSendLogsByContractIdQuery__
//  *
//  * To run a query within a React component, call `useGetEmailSendLogsByContractIdQuery` and pass it any options that fit your needs.
//  * When your component renders, `useGetEmailSendLogsByContractIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
//  * you can use to render your UI.
//  *
//  * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
//  *
//  * @example
//  * const { data, loading, error } = useGetEmailSendLogsByContractIdQuery({
//  *   variables: {
//  *      input: // value for 'input'
//  *   },
//  * });
//  */
// export function useGetEmailSendLogsByContractIdQuery(baseOptions: Apollo.QueryHookOptions<GetEmailSendLogsByContractIdQuery, GetEmailSendLogsByContractIdQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useQuery<GetEmailSendLogsByContractIdQuery, GetEmailSendLogsByContractIdQueryVariables>(GetEmailSendLogsByContractIdDocument, options);
// }
// export function useGetEmailSendLogsByContractIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEmailSendLogsByContractIdQuery, GetEmailSendLogsByContractIdQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useLazyQuery<GetEmailSendLogsByContractIdQuery, GetEmailSendLogsByContractIdQueryVariables>(GetEmailSendLogsByContractIdDocument, options);
// }
// export type GetEmailSendLogsByContractIdQueryHookResult = ReturnType<typeof useGetEmailSendLogsByContractIdQuery>;
// export type GetEmailSendLogsByContractIdLazyQueryHookResult = ReturnType<typeof useGetEmailSendLogsByContractIdLazyQuery>;
// export type GetEmailSendLogsByContractIdQueryResult = Apollo.QueryResult<GetEmailSendLogsByContractIdQuery, GetEmailSendLogsByContractIdQueryVariables>;
// export function refetchGetEmailSendLogsByContractIdQuery(variables: GetEmailSendLogsByContractIdQueryVariables) {
//   return { query: GetEmailSendLogsByContractIdDocument, variables: variables }
// }
// export const GetEventByIdDocument = gql`
//     query GetEventById($getEventByIdId: String!) {
//   getEventById(id: $getEventByIdId) {
//     createdAt
//     description
//     detail
//     eventFormat
//     eventType {
//       id
//       name
//     }
//     id
//     img
//     isTemplate
//     name
//     rental {
//       customLocation
//       devices {
//         availableQuantity
//         createdAt
//         description
//         hourlyRentalFee
//         id
//         img
//         name
//         quantity
//       }
//       event {
//         createdAt
//         description
//         detail
//         eventFormat
//         id
//         img
//         isTemplate
//         name
//       }
//       humanResources {
//         availableQuantity
//         createdAt
//         description
//         hourlySalary
//         id
//         img
//         name
//         quantity
//       }
//       id
//       locations {
//         address
//         createdAt
//         description
//         hourlyRentalFee
//         id
//         img
//         name
//       }
//       rentalEndTime
//       rentalStartTime
//       timelines {
//         description
//         id
//         startTime
//       }
//       totalPrice
//       user {
//         avatar
//         createdAt
//         dob
//         email
//         firstName
//         gender
//         id
//         lastName
//         phoneNumber
//         role {
//           id
//           name
//         }
//         roleId
//         status
//         updatedAt
//       }
//     }
//   }
// }
//     `;

// /**
//  * __useGetEventByIdQuery__
//  *
//  * To run a query within a React component, call `useGetEventByIdQuery` and pass it any options that fit your needs.
//  * When your component renders, `useGetEventByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
//  * you can use to render your UI.
//  *
//  * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
//  *
//  * @example
//  * const { data, loading, error } = useGetEventByIdQuery({
//  *   variables: {
//  *      getEventByIdId: // value for 'getEventByIdId'
//  *   },
//  * });
//  */
// export function useGetEventByIdQuery(baseOptions: Apollo.QueryHookOptions<GetEventByIdQuery, GetEventByIdQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useQuery<GetEventByIdQuery, GetEventByIdQueryVariables>(GetEventByIdDocument, options);
// }
// export function useGetEventByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventByIdQuery, GetEventByIdQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useLazyQuery<GetEventByIdQuery, GetEventByIdQueryVariables>(GetEventByIdDocument, options);
// }
// export type GetEventByIdQueryHookResult = ReturnType<typeof useGetEventByIdQuery>;
// export type GetEventByIdLazyQueryHookResult = ReturnType<typeof useGetEventByIdLazyQuery>;
// export type GetEventByIdQueryResult = Apollo.QueryResult<GetEventByIdQuery, GetEventByIdQueryVariables>;
// export function refetchGetEventByIdQuery(variables: GetEventByIdQueryVariables) {
//   return { query: GetEventByIdDocument, variables: variables }
// }
// export const GetEventTypesDocument = gql`
//     query GetEventTypes($input: QueryFilterDto!) {
//   getEventTypes(input: $input) {
//     items {
//       id
//       name
//     }
//     meta {
//       currentPage
//       itemCount
//       itemsPerPage
//       totalItems
//       totalPages
//     }
//   }
// }
//     `;

// /**
//  * __useGetEventTypesQuery__
//  *
//  * To run a query within a React component, call `useGetEventTypesQuery` and pass it any options that fit your needs.
//  * When your component renders, `useGetEventTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
//  * you can use to render your UI.
//  *
//  * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
//  *
//  * @example
//  * const { data, loading, error } = useGetEventTypesQuery({
//  *   variables: {
//  *      input: // value for 'input'
//  *   },
//  * });
//  */
// export function useGetEventTypesQuery(baseOptions: Apollo.QueryHookOptions<GetEventTypesQuery, GetEventTypesQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useQuery<GetEventTypesQuery, GetEventTypesQueryVariables>(GetEventTypesDocument, options);
// }
// export function useGetEventTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventTypesQuery, GetEventTypesQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useLazyQuery<GetEventTypesQuery, GetEventTypesQueryVariables>(GetEventTypesDocument, options);
// }
// export type GetEventTypesQueryHookResult = ReturnType<typeof useGetEventTypesQuery>;
// export type GetEventTypesLazyQueryHookResult = ReturnType<typeof useGetEventTypesLazyQuery>;
// export type GetEventTypesQueryResult = Apollo.QueryResult<GetEventTypesQuery, GetEventTypesQueryVariables>;
// export function refetchGetEventTypesQuery(variables: GetEventTypesQueryVariables) {
//   return { query: GetEventTypesDocument, variables: variables }
// }
// export const GetEventsDocument = gql`
//     query GetEvents($input: GetEventsRequest!) {
//   getEvents(input: $input) {
//     items {
//       createdAt
//       description
//       detail
//       eventFormat
//       eventType {
//         id
//         name
//       }
//       id
//       img
//       isTemplate
//       name
//       rental {
//         customLocation
//         devices {
//           availableQuantity
//           createdAt
//           description
//           hourlyRentalFee
//           id
//           img
//           name
//           quantity
//         }
//         event {
//           createdAt
//           description
//           detail
//           eventFormat
//           id
//           img
//           isTemplate
//           name
//         }
//         humanResources {
//           availableQuantity
//           createdAt
//           description
//           hourlySalary
//           id
//           img
//           name
//           quantity
//         }
//         id
//         locations {
//           address
//           createdAt
//           description
//           hourlyRentalFee
//           id
//           img
//           name
//         }
//         rentalEndTime
//         rentalStartTime
//         timelines {
//           description
//           id
//           startTime
//         }
//         totalPrice
//         user {
//           avatar
//           createdAt
//           dob
//           email
//           firstName
//           gender
//           id
//           lastName
//           phoneNumber
//           role {
//             id
//             name
//           }
//           roleId
//           status
//           updatedAt
//         }
//       }
//     }
//     meta {
//       currentPage
//       itemCount
//       itemsPerPage
//       totalItems
//       totalPages
//     }
//   }
// }
//     `;

// /**
//  * __useGetEventsQuery__
//  *
//  * To run a query within a React component, call `useGetEventsQuery` and pass it any options that fit your needs.
//  * When your component renders, `useGetEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
//  * you can use to render your UI.
//  *
//  * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
//  *
//  * @example
//  * const { data, loading, error } = useGetEventsQuery({
//  *   variables: {
//  *      input: // value for 'input'
//  *   },
//  * });
//  */
// export function useGetEventsQuery(baseOptions: Apollo.QueryHookOptions<GetEventsQuery, GetEventsQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useQuery<GetEventsQuery, GetEventsQueryVariables>(GetEventsDocument, options);
// }
// export function useGetEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventsQuery, GetEventsQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useLazyQuery<GetEventsQuery, GetEventsQueryVariables>(GetEventsDocument, options);
// }
// export type GetEventsQueryHookResult = ReturnType<typeof useGetEventsQuery>;
// export type GetEventsLazyQueryHookResult = ReturnType<typeof useGetEventsLazyQuery>;
// export type GetEventsQueryResult = Apollo.QueryResult<GetEventsQuery, GetEventsQueryVariables>;
// export function refetchGetEventsQuery(variables: GetEventsQueryVariables) {
//   return { query: GetEventsDocument, variables: variables }
// }
// export const GetHumanResourcesAvailableDocument = gql`
//     query GetHumanResourcesAvailable($input: GetServicesRequest!) {
//   getHumanResourcesAvailable(input: $input) {
//     items {
//       availableQuantity
//       hourlySalary
//       id
//       name
//       quantity
//       img
//     }
//     meta {
//       currentPage
//       itemCount
//       itemsPerPage
//       totalItems
//       totalPages
//     }
//   }
// }
//     `;

// /**
//  * __useGetHumanResourcesAvailableQuery__
//  *
//  * To run a query within a React component, call `useGetHumanResourcesAvailableQuery` and pass it any options that fit your needs.
//  * When your component renders, `useGetHumanResourcesAvailableQuery` returns an object from Apollo Client that contains loading, error, and data properties
//  * you can use to render your UI.
//  *
//  * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
//  *
//  * @example
//  * const { data, loading, error } = useGetHumanResourcesAvailableQuery({
//  *   variables: {
//  *      input: // value for 'input'
//  *   },
//  * });
//  */
// export function useGetHumanResourcesAvailableQuery(baseOptions: Apollo.QueryHookOptions<GetHumanResourcesAvailableQuery, GetHumanResourcesAvailableQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useQuery<GetHumanResourcesAvailableQuery, GetHumanResourcesAvailableQueryVariables>(GetHumanResourcesAvailableDocument, options);
// }
// export function useGetHumanResourcesAvailableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHumanResourcesAvailableQuery, GetHumanResourcesAvailableQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useLazyQuery<GetHumanResourcesAvailableQuery, GetHumanResourcesAvailableQueryVariables>(GetHumanResourcesAvailableDocument, options);
// }
// export type GetHumanResourcesAvailableQueryHookResult = ReturnType<typeof useGetHumanResourcesAvailableQuery>;
// export type GetHumanResourcesAvailableLazyQueryHookResult = ReturnType<typeof useGetHumanResourcesAvailableLazyQuery>;
// export type GetHumanResourcesAvailableQueryResult = Apollo.QueryResult<GetHumanResourcesAvailableQuery, GetHumanResourcesAvailableQueryVariables>;
// export function refetchGetHumanResourcesAvailableQuery(variables: GetHumanResourcesAvailableQueryVariables) {
//   return { query: GetHumanResourcesAvailableDocument, variables: variables }
// }
// export const GetHumanResourcesRentalDocument = gql`
//     query GetHumanResourcesRental($rentalId: String!) {
//   getHumanResourcesRental(rentalId: $rentalId) {
//     humanResource {
//       availableQuantity
//       hourlySalary
//       id
//       name
//       quantity
//     }
//     id
//     quantity
//   }
// }
//     `;

// /**
//  * __useGetHumanResourcesRentalQuery__
//  *
//  * To run a query within a React component, call `useGetHumanResourcesRentalQuery` and pass it any options that fit your needs.
//  * When your component renders, `useGetHumanResourcesRentalQuery` returns an object from Apollo Client that contains loading, error, and data properties
//  * you can use to render your UI.
//  *
//  * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
//  *
//  * @example
//  * const { data, loading, error } = useGetHumanResourcesRentalQuery({
//  *   variables: {
//  *      rentalId: // value for 'rentalId'
//  *   },
//  * });
//  */
// export function useGetHumanResourcesRentalQuery(baseOptions: Apollo.QueryHookOptions<GetHumanResourcesRentalQuery, GetHumanResourcesRentalQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useQuery<GetHumanResourcesRentalQuery, GetHumanResourcesRentalQueryVariables>(GetHumanResourcesRentalDocument, options);
// }
// export function useGetHumanResourcesRentalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHumanResourcesRentalQuery, GetHumanResourcesRentalQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useLazyQuery<GetHumanResourcesRentalQuery, GetHumanResourcesRentalQueryVariables>(GetHumanResourcesRentalDocument, options);
// }
// export type GetHumanResourcesRentalQueryHookResult = ReturnType<typeof useGetHumanResourcesRentalQuery>;
// export type GetHumanResourcesRentalLazyQueryHookResult = ReturnType<typeof useGetHumanResourcesRentalLazyQuery>;
// export type GetHumanResourcesRentalQueryResult = Apollo.QueryResult<GetHumanResourcesRentalQuery, GetHumanResourcesRentalQueryVariables>;
// export function refetchGetHumanResourcesRentalQuery(variables: GetHumanResourcesRentalQueryVariables) {
//   return { query: GetHumanResourcesRentalDocument, variables: variables }
// }
// export const GetLocationsAvailableDocument = gql`
//     query GetLocationsAvailable($input: GetServicesRequest!) {
//   getLocationsAvailable(input: $input) {
//     items {
//       address
//       id
//       img
//       name
//       hourlyRentalFee
//     }
//     meta {
//       currentPage
//       itemCount
//       itemsPerPage
//       totalItems
//       totalPages
//     }
//   }
// }
//     `;

// /**
//  * __useGetLocationsAvailableQuery__
//  *
//  * To run a query within a React component, call `useGetLocationsAvailableQuery` and pass it any options that fit your needs.
//  * When your component renders, `useGetLocationsAvailableQuery` returns an object from Apollo Client that contains loading, error, and data properties
//  * you can use to render your UI.
//  *
//  * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
//  *
//  * @example
//  * const { data, loading, error } = useGetLocationsAvailableQuery({
//  *   variables: {
//  *      input: // value for 'input'
//  *   },
//  * });
//  */
// export function useGetLocationsAvailableQuery(baseOptions: Apollo.QueryHookOptions<GetLocationsAvailableQuery, GetLocationsAvailableQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useQuery<GetLocationsAvailableQuery, GetLocationsAvailableQueryVariables>(GetLocationsAvailableDocument, options);
// }
// export function useGetLocationsAvailableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLocationsAvailableQuery, GetLocationsAvailableQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useLazyQuery<GetLocationsAvailableQuery, GetLocationsAvailableQueryVariables>(GetLocationsAvailableDocument, options);
// }
// export type GetLocationsAvailableQueryHookResult = ReturnType<typeof useGetLocationsAvailableQuery>;
// export type GetLocationsAvailableLazyQueryHookResult = ReturnType<typeof useGetLocationsAvailableLazyQuery>;
// export type GetLocationsAvailableQueryResult = Apollo.QueryResult<GetLocationsAvailableQuery, GetLocationsAvailableQueryVariables>;
// export function refetchGetLocationsAvailableQuery(variables: GetLocationsAvailableQueryVariables) {
//   return { query: GetLocationsAvailableDocument, variables: variables }
// }
// export const GetLocationsRentalDocument = gql`
//     query GetLocationsRental($rentalId: String!) {
//   getLocationsRental(rentalId: $rentalId) {
//     id
//     location {
//       address
//       id
//       img
//       name
//     }
//   }
// }
//     `;

// /**
//  * __useGetLocationsRentalQuery__
//  *
//  * To run a query within a React component, call `useGetLocationsRentalQuery` and pass it any options that fit your needs.
//  * When your component renders, `useGetLocationsRentalQuery` returns an object from Apollo Client that contains loading, error, and data properties
//  * you can use to render your UI.
//  *
//  * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
//  *
//  * @example
//  * const { data, loading, error } = useGetLocationsRentalQuery({
//  *   variables: {
//  *      rentalId: // value for 'rentalId'
//  *   },
//  * });
//  */
// export function useGetLocationsRentalQuery(baseOptions: Apollo.QueryHookOptions<GetLocationsRentalQuery, GetLocationsRentalQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useQuery<GetLocationsRentalQuery, GetLocationsRentalQueryVariables>(GetLocationsRentalDocument, options);
// }
// export function useGetLocationsRentalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLocationsRentalQuery, GetLocationsRentalQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useLazyQuery<GetLocationsRentalQuery, GetLocationsRentalQueryVariables>(GetLocationsRentalDocument, options);
// }
// export type GetLocationsRentalQueryHookResult = ReturnType<typeof useGetLocationsRentalQuery>;
// export type GetLocationsRentalLazyQueryHookResult = ReturnType<typeof useGetLocationsRentalLazyQuery>;
// export type GetLocationsRentalQueryResult = Apollo.QueryResult<GetLocationsRentalQuery, GetLocationsRentalQueryVariables>;
// export function refetchGetLocationsRentalQuery(variables: GetLocationsRentalQueryVariables) {
//   return { query: GetLocationsRentalDocument, variables: variables }
// }
// export const GetMeDocument = gql`
//     query GetMe {
//   getMe {
//     avatar
//     createdAt
//     email
//     firstName
//     id
//     lastName
//     phoneNumber
//     role {
//       id
//       name
//     }
//     roleId
//     updatedAt
//   }
// }
//     `;

// /**
//  * __useGetMeQuery__
//  *
//  * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
//  * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
//  * you can use to render your UI.
//  *
//  * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
//  *
//  * @example
//  * const { data, loading, error } = useGetMeQuery({
//  *   variables: {
//  *   },
//  * });
//  */
// export function useGetMeQuery(baseOptions?: Apollo.QueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
// }
// export function useGetMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useLazyQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
// }
// export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
// export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
// export type GetMeQueryResult = Apollo.QueryResult<GetMeQuery, GetMeQueryVariables>;
// export function refetchGetMeQuery(variables?: GetMeQueryVariables) {
//   return { query: GetMeDocument, variables: variables }
// }
// export const GetMyContractsDocument = gql`
//     query GetMyContracts($queryParams: GetContractsRequest!) {
//   getMyContracts(queryParams: $queryParams) {
//     items {
//       createdAt
//       customer {
//         address
//         id
//         name
//         phoneNumber
//       }
//       id
//       name
//       rental {
//         devices {
//           availableQuantity
//           description
//           hourlyRentalFee
//           id
//           img
//           name
//           quantity
//         }
//         humanResources {
//           availableQuantity
//           description
//           hourlySalary
//           id
//           img
//           name
//           quantity
//         }
//         id
//         locations {
//           address
//           description
//           hourlyRentalFee
//           id
//           img
//           name
//         }
//         rentalEndTime
//         rentalStartTime
//         totalPrice
//         user {
//           avatar
//           createdAt
//           dob
//           email
//           firstName
//           gender
//           id
//           lastName
//           phoneNumber
//           role {
//             id
//             name
//           }
//           roleId
//           updatedAt
//         }
//       }
//       singingDate
//       status
//     }
//     meta {
//       currentPage
//       itemCount
//       itemsPerPage
//       totalItems
//       totalPages
//     }
//   }
// }
//     `;

// /**
//  * __useGetMyContractsQuery__
//  *
//  * To run a query within a React component, call `useGetMyContractsQuery` and pass it any options that fit your needs.
//  * When your component renders, `useGetMyContractsQuery` returns an object from Apollo Client that contains loading, error, and data properties
//  * you can use to render your UI.
//  *
//  * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
//  *
//  * @example
//  * const { data, loading, error } = useGetMyContractsQuery({
//  *   variables: {
//  *      queryParams: // value for 'queryParams'
//  *   },
//  * });
//  */
// export function useGetMyContractsQuery(baseOptions: Apollo.QueryHookOptions<GetMyContractsQuery, GetMyContractsQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useQuery<GetMyContractsQuery, GetMyContractsQueryVariables>(GetMyContractsDocument, options);
// }
// export function useGetMyContractsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyContractsQuery, GetMyContractsQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useLazyQuery<GetMyContractsQuery, GetMyContractsQueryVariables>(GetMyContractsDocument, options);
// }
// export type GetMyContractsQueryHookResult = ReturnType<typeof useGetMyContractsQuery>;
// export type GetMyContractsLazyQueryHookResult = ReturnType<typeof useGetMyContractsLazyQuery>;
// export type GetMyContractsQueryResult = Apollo.QueryResult<GetMyContractsQuery, GetMyContractsQueryVariables>;
// export function refetchGetMyContractsQuery(variables: GetMyContractsQueryVariables) {
//   return { query: GetMyContractsDocument, variables: variables }
// }
// export const GetRoleDocument = gql`
//     query GetRole($getRoleId: ID!) {
//   getRole(id: $getRoleId) {
//     id
//     name
//   }
// }
//     `;

// /**
//  * __useGetRoleQuery__
//  *
//  * To run a query within a React component, call `useGetRoleQuery` and pass it any options that fit your needs.
//  * When your component renders, `useGetRoleQuery` returns an object from Apollo Client that contains loading, error, and data properties
//  * you can use to render your UI.
//  *
//  * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
//  *
//  * @example
//  * const { data, loading, error } = useGetRoleQuery({
//  *   variables: {
//  *      getRoleId: // value for 'getRoleId'
//  *   },
//  * });
//  */
// export function useGetRoleQuery(baseOptions: Apollo.QueryHookOptions<GetRoleQuery, GetRoleQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useQuery<GetRoleQuery, GetRoleQueryVariables>(GetRoleDocument, options);
// }
// export function useGetRoleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRoleQuery, GetRoleQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useLazyQuery<GetRoleQuery, GetRoleQueryVariables>(GetRoleDocument, options);
// }
// export type GetRoleQueryHookResult = ReturnType<typeof useGetRoleQuery>;
// export type GetRoleLazyQueryHookResult = ReturnType<typeof useGetRoleLazyQuery>;
// export type GetRoleQueryResult = Apollo.QueryResult<GetRoleQuery, GetRoleQueryVariables>;
// export function refetchGetRoleQuery(variables: GetRoleQueryVariables) {
//   return { query: GetRoleDocument, variables: variables }
// }
// export const GetRolesDocument = gql`
//     query GetRoles($queryParams: QueryFilterDto!) {
//   getRoles(queryParams: $queryParams) {
//     items {
//       id
//       name
//     }
//     meta {
//       currentPage
//       itemCount
//       itemsPerPage
//       totalItems
//       totalPages
//     }
//   }
// }
//     `;

// /**
//  * __useGetRolesQuery__
//  *
//  * To run a query within a React component, call `useGetRolesQuery` and pass it any options that fit your needs.
//  * When your component renders, `useGetRolesQuery` returns an object from Apollo Client that contains loading, error, and data properties
//  * you can use to render your UI.
//  *
//  * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
//  *
//  * @example
//  * const { data, loading, error } = useGetRolesQuery({
//  *   variables: {
//  *      queryParams: // value for 'queryParams'
//  *   },
//  * });
//  */
// export function useGetRolesQuery(baseOptions: Apollo.QueryHookOptions<GetRolesQuery, GetRolesQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useQuery<GetRolesQuery, GetRolesQueryVariables>(GetRolesDocument, options);
// }
// export function useGetRolesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRolesQuery, GetRolesQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useLazyQuery<GetRolesQuery, GetRolesQueryVariables>(GetRolesDocument, options);
// }
// export type GetRolesQueryHookResult = ReturnType<typeof useGetRolesQuery>;
// export type GetRolesLazyQueryHookResult = ReturnType<typeof useGetRolesLazyQuery>;
// export type GetRolesQueryResult = Apollo.QueryResult<GetRolesQuery, GetRolesQueryVariables>;
// export function refetchGetRolesQuery(variables: GetRolesQueryVariables) {
//   return { query: GetRolesDocument, variables: variables }
// }
// export type MetaFragmentFragment = { totalItems: number, itemCount: number, itemsPerPage: number, totalPages: number, currentPage: number };

// export type ChangePasswordMutationVariables = Exact<{
//   changePasswordInput: ChangePasswordInput;
// }>;


// export type ChangePasswordMutation = { changePassword: { message: string, success: boolean } };

// export type ConfirmContractDepositMutationVariables = Exact<{
//   input: ConfirmContractDeposit;
// }>;


// export type ConfirmContractDepositMutation = { confirmContractDeposit: { createdAt: any, id: string, name: string, singingDate?: any | null, status?: ContractStatus | null, customer?: { address: string, id: string, name: string, phoneNumber: string } | null, rental: { id: string, rentalEndTime?: any | null, rentalStartTime?: any | null, totalPrice: number, devices?: Array<{ availableQuantity?: number | null, description: string, hourlyRentalFee: number, id: string, img: string, name: string, quantity: number }> | null, humanResources?: Array<{ availableQuantity?: number | null, description: string, hourlySalary: number, id: string, img?: string | null, name: string, quantity: number }> | null, locations?: Array<{ address: string, description: string, hourlyRentalFee: number, id: string, img: string, name: string }> | null, user: { avatar?: string | null, createdAt?: any | null, dob?: any | null, email: string, firstName: string, gender?: boolean | null, id: string, lastName: string, phoneNumber?: string | null, roleId: string, updatedAt?: any | null, role?: { id: string, name: string } | null } } } };

// export type CreateDeviceMutationVariables = Exact<{
//   input: CreateDeviceRequest;
// }>;


// export type CreateDeviceMutation = { createDevice: { message: string, success: boolean } };

// export type CreateEventTypeMutationVariables = Exact<{
//   input: CreateEventTypeRequest;
// }>;


// export type CreateEventTypeMutation = { createEventType: { message: string, success: boolean } };

// export type CreateHumanResourceMutationVariables = Exact<{
//   input: CreateHumanResourcesRequest;
// }>;


// export type CreateHumanResourceMutation = { createHumanResource: { message: string, success: boolean } };

// export type CreateLocationMutationVariables = Exact<{
//   input: CreateLocationRequest;
// }>;


// export type CreateLocationMutation = { createLocation: { message: string, success: boolean } };

// export type PresignedUrlS3MutationVariables = Exact<{
//   presignedUrlDto: PresignedUrlDto;
// }>;


// export type PresignedUrlS3Mutation = { presignedUrlS3: { fileType: string, pathFile: string, uploadUrl: string } };

// export type RefreshTokenMutationVariables = Exact<{
//   input: RefreshTokenDto;
// }>;


// export type RefreshTokenMutation = { refreshToken: { accessToken: string } };

// export type RentalServicesMutationVariables = Exact<{
//   input: RentalServicesRequest;
// }>;


// export type RentalServicesMutation = { rentalServices: { message: string, success: boolean } };

// export type SendEmailMutationVariables = Exact<{
//   input: SendEmailRequest;
// }>;


// export type SendEmailMutation = { sendEmail: string };

// export type SignInMutationVariables = Exact<{
//   input: SignInDto;
// }>;


// export type SignInMutation = { signIn: { token: string, refreshToken: string, id: string, email: string, role: { id: string, name: string } } };

// export type SignUpMutationVariables = Exact<{
//   input: SignUpDto;
// }>;


// export type SignUpMutation = { signUp: { message: string, success: boolean } };

// export type UpdateStatusContractMutationVariables = Exact<{
//   input: UpdateContractStatusDto;
// }>;


// export type UpdateStatusContractMutation = { updateStatusContract: { createdAt: any, id: string, name: string, singingDate?: any | null, status?: ContractStatus | null, customer?: { address: string, id: string, name: string, phoneNumber: string } | null, rental: { id: string, rentalEndTime?: any | null, rentalStartTime?: any | null, totalPrice: number, devices?: Array<{ availableQuantity?: number | null, description: string, hourlyRentalFee: number, id: string, img: string, name: string, quantity: number }> | null, humanResources?: Array<{ availableQuantity?: number | null, description: string, hourlySalary: number, id: string, img?: string | null, name: string, quantity: number }> | null, locations?: Array<{ address: string, description: string, hourlyRentalFee: number, id: string, img: string, name: string }> | null, user: { avatar?: string | null, createdAt?: any | null, dob?: any | null, email: string, firstName: string, gender?: boolean | null, id: string, lastName: string, phoneNumber?: string | null, roleId: string, updatedAt?: any | null, role?: { id: string, name: string } | null } } } };

// export type UpdateMeMutationVariables = Exact<{
//   input: UserUpdateInput;
// }>;


// export type UpdateMeMutation = { updateMe: { avatar?: string | null, email: string, firstName: string, lastName: string, id: string, phoneNumber?: string | null, role?: { name: string } | null } };

// export type UploadImageMutationVariables = Exact<{
//   input: UploadRequest;
// }>;


// export type UploadImageMutation = { uploadImage: string };

// export type VerifyCodeMutationVariables = Exact<{
//   input: CodeVerifyDto;
// }>;


// export type VerifyCodeMutation = { verifyCode: { token: string, refreshToken: string, id: string } };

// export type CheckoutRemainBillingContractQueryVariables = Exact<{
//   input: DepositContractDto;
// }>;


// export type CheckoutRemainBillingContractQuery = { checkoutRemainBillingContract: { cancelUrl: string, checkoutUrl: string, successUrl: string } };

// export type DepositContractQueryVariables = Exact<{
//   input: DepositContractDto;
// }>;


// export type DepositContractQuery = { depositContract: { cancelUrl: string, checkoutUrl: string, successUrl: string } };

// export type GetContractQueryVariables = Exact<{
//   getContractId: Scalars['String'];
// }>;


// export type GetContractQuery = { getContract: { createdAt: any, id: string, name: string, singingDate?: any | null, status?: ContractStatus | null, updatedAt: any, customer?: { address: string, id: string, name: string, phoneNumber: string } | null, rental: { customLocation?: string | null, id: string, rentalEndTime?: any | null, rentalStartTime?: any | null, totalPrice: number, devices?: Array<{ availableQuantity?: number | null, createdAt: any, description: string, hourlyRentalFee: number, id: string, img: string, name: string, quantity: number }> | null, event?: { createdAt: any, description: string, detail: string, eventFormat: boolean, id: string, img?: string | null, isTemplate: boolean, name: string, eventType?: { id: string, name: string } | null } | null, humanResources?: Array<{ availableQuantity?: number | null, createdAt: any, description: string, hourlySalary: number, id: string, img?: string | null, name: string, quantity: number }> | null, locations?: Array<{ address: string, createdAt: any, description: string, hourlyRentalFee: number, id: string, img: string, name: string }> | null, timelines?: Array<{ description: string, id: string, startTime: any }> | null, user: { avatar?: string | null, createdAt?: any | null, dob?: any | null, email: string, firstName: string, gender?: boolean | null, id: string, lastName: string, phoneNumber?: string | null, roleId: string, updatedAt?: any | null, role?: { id: string, name: string } | null } } } };

// export type GetDevicesAvailableQueryVariables = Exact<{
//   input: GetServicesRequest;
// }>;


// export type GetDevicesAvailableQuery = { getDevicesAvailable: { items: Array<{ availableQuantity?: number | null, hourlyRentalFee: number, id: string, img: string, name: string, quantity: number }>, meta: { currentPage: number, itemCount: number, itemsPerPage: number, totalItems: number, totalPages: number } } };

// export type GetDevicesRentalQueryVariables = Exact<{
//   rentalId: Scalars['String'];
// }>;


// export type GetDevicesRentalQuery = { getDevicesRental: Array<{ id: string, quantity: number, device: { availableQuantity?: number | null, hourlyRentalFee: number, id: string, img: string, name: string, quantity: number } }> };

// export type GetEmailSendLogsByContractIdQueryVariables = Exact<{
//   input: GetEmailSendLogRequest;
// }>;


// export type GetEmailSendLogsByContractIdQuery = { getEmailSendLogsByContractId: { items: Array<{ contractId: string, createdAt: any, fileName: string, id: string, guests: Array<{ createdAt: any, email: string, emailSendLogId: string, id: string, status: SentEmailStatus }> }>, meta: { currentPage: number, itemCount: number, itemsPerPage: number, totalItems: number, totalPages: number } } };

// export type GetEventByIdQueryVariables = Exact<{
//   getEventByIdId: Scalars['String'];
// }>;


// export type GetEventByIdQuery = { getEventById: { createdAt: any, description: string, detail: string, eventFormat: boolean, id: string, img?: string | null, isTemplate: boolean, name: string, eventType?: { id: string, name: string } | null, rental?: { customLocation?: string | null, id: string, rentalEndTime?: any | null, rentalStartTime?: any | null, totalPrice: number, devices?: Array<{ availableQuantity?: number | null, createdAt: any, description: string, hourlyRentalFee: number, id: string, img: string, name: string, quantity: number }> | null, event?: { createdAt: any, description: string, detail: string, eventFormat: boolean, id: string, img?: string | null, isTemplate: boolean, name: string } | null, humanResources?: Array<{ availableQuantity?: number | null, createdAt: any, description: string, hourlySalary: number, id: string, img?: string | null, name: string, quantity: number }> | null, locations?: Array<{ address: string, createdAt: any, description: string, hourlyRentalFee: number, id: string, img: string, name: string }> | null, timelines?: Array<{ description: string, id: string, startTime: any }> | null, user: { avatar?: string | null, createdAt?: any | null, dob?: any | null, email: string, firstName: string, gender?: boolean | null, id: string, lastName: string, phoneNumber?: string | null, roleId: string, status?: UserStatus | null, updatedAt?: any | null, role?: { id: string, name: string } | null } } | null } };

// export type GetEventTypesQueryVariables = Exact<{
//   input: QueryFilterDto;
// }>;


// export type GetEventTypesQuery = { getEventTypes: { items: Array<{ id: string, name: string }>, meta: { currentPage: number, itemCount: number, itemsPerPage: number, totalItems: number, totalPages: number } } };

// export type GetEventsQueryVariables = Exact<{
//   input: GetEventsRequest;
// }>;


// export type GetEventsQuery = { getEvents: { items: Array<{ createdAt: any, description: string, detail: string, eventFormat: boolean, id: string, img?: string | null, isTemplate: boolean, name: string, eventType?: { id: string, name: string } | null, rental?: { customLocation?: string | null, id: string, rentalEndTime?: any | null, rentalStartTime?: any | null, totalPrice: number, devices?: Array<{ availableQuantity?: number | null, createdAt: any, description: string, hourlyRentalFee: number, id: string, img: string, name: string, quantity: number }> | null, event?: { createdAt: any, description: string, detail: string, eventFormat: boolean, id: string, img?: string | null, isTemplate: boolean, name: string } | null, humanResources?: Array<{ availableQuantity?: number | null, createdAt: any, description: string, hourlySalary: number, id: string, img?: string | null, name: string, quantity: number }> | null, locations?: Array<{ address: string, createdAt: any, description: string, hourlyRentalFee: number, id: string, img: string, name: string }> | null, timelines?: Array<{ description: string, id: string, startTime: any }> | null, user: { avatar?: string | null, createdAt?: any | null, dob?: any | null, email: string, firstName: string, gender?: boolean | null, id: string, lastName: string, phoneNumber?: string | null, roleId: string, status?: UserStatus | null, updatedAt?: any | null, role?: { id: string, name: string } | null } } | null }>, meta: { currentPage: number, itemCount: number, itemsPerPage: number, totalItems: number, totalPages: number } } };

// export type GetHumanResourcesAvailableQueryVariables = Exact<{
//   input: GetServicesRequest;
// }>;


// export type GetHumanResourcesAvailableQuery = { getHumanResourcesAvailable: { items: Array<{ availableQuantity?: number | null, hourlySalary: number, id: string, name: string, quantity: number, img?: string | null }>, meta: { currentPage: number, itemCount: number, itemsPerPage: number, totalItems: number, totalPages: number } } };

// export type GetHumanResourcesRentalQueryVariables = Exact<{
//   rentalId: Scalars['String'];
// }>;


// export type GetHumanResourcesRentalQuery = { getHumanResourcesRental: Array<{ id: string, quantity: number, humanResource: { availableQuantity?: number | null, hourlySalary: number, id: string, name: string, quantity: number } }> };

// export type GetLocationsAvailableQueryVariables = Exact<{
//   input: GetServicesRequest;
// }>;


// export type GetLocationsAvailableQuery = { getLocationsAvailable: { items: Array<{ address: string, id: string, img: string, name: string, hourlyRentalFee: number }>, meta: { currentPage: number, itemCount: number, itemsPerPage: number, totalItems: number, totalPages: number } } };

// export type GetLocationsRentalQueryVariables = Exact<{
//   rentalId: Scalars['String'];
// }>;


// export type GetLocationsRentalQuery = { getLocationsRental: Array<{ id: string, location: { address: string, id: string, img: string, name: string } }> };

// export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


// export type GetMeQuery = { getMe: { avatar?: string | null, createdAt?: any | null, email: string, firstName: string, id: string, lastName: string, phoneNumber?: string | null, roleId: string, updatedAt?: any | null, role?: { id: string, name: string } | null } };

// export type GetMyContractsQueryVariables = Exact<{
//   queryParams: GetContractsRequest;
// }>;


// export type GetMyContractsQuery = { getMyContracts: { items: Array<{ createdAt: any, id: string, name: string, singingDate?: any | null, status?: ContractStatus | null, customer?: { address: string, id: string, name: string, phoneNumber: string } | null, rental: { id: string, rentalEndTime?: any | null, rentalStartTime?: any | null, totalPrice: number, devices?: Array<{ availableQuantity?: number | null, description: string, hourlyRentalFee: number, id: string, img: string, name: string, quantity: number }> | null, humanResources?: Array<{ availableQuantity?: number | null, description: string, hourlySalary: number, id: string, img?: string | null, name: string, quantity: number }> | null, locations?: Array<{ address: string, description: string, hourlyRentalFee: number, id: string, img: string, name: string }> | null, user: { avatar?: string | null, createdAt?: any | null, dob?: any | null, email: string, firstName: string, gender?: boolean | null, id: string, lastName: string, phoneNumber?: string | null, roleId: string, updatedAt?: any | null, role?: { id: string, name: string } | null } } }>, meta: { currentPage: number, itemCount: number, itemsPerPage: number, totalItems: number, totalPages: number } } };

// export type GetRoleQueryVariables = Exact<{
//   getRoleId: Scalars['ID'];
// }>;


// export type GetRoleQuery = { getRole: { id: string, name: string } };

// export type GetRolesQueryVariables = Exact<{
//   queryParams: QueryFilterDto;
// }>;


// export type GetRolesQuery = { getRoles: { items: Array<{ id: string, name: string }>, meta: { currentPage: number, itemCount: number, itemsPerPage: number, totalItems: number, totalPages: number } } };
