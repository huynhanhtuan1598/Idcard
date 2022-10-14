import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
};

export type AddContactInput = {
  content: Scalars['String'];
  name: Scalars['String'];
  owner?: InputMaybe<Scalars['String']>;
  shortName?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

export type AddFeedbackInput = {
  content: Scalars['String'];
  feedbackParentId?: InputMaybe<Scalars['String']>;
  isParent?: InputMaybe<Scalars['Boolean']>;
};

export type AddTemplateInput = {
  background?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  colorIcon?: InputMaybe<Scalars['String']>;
  groupId?: InputMaybe<Scalars['String']>;
  template: Scalars['String'];
  title: Scalars['String'];
  type?: InputMaybe<Scalars['Float']>;
};

export type AddUserBuyCardGroupInput = {
  quantity: Scalars['Float'];
  title: Scalars['String'];
};

export type AddUserBuyCardInput = {
  address?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
};

export type AdminReportOverview = {
  __typename?: 'AdminReportOverview';
  key: ETypeAdminReportOverview;
  valueCurrent: Scalars['Float'];
  valuePrevious?: Maybe<Scalars['Float']>;
};

export type AdminReportOverviewResponse = {
  __typename?: 'AdminReportOverviewResponse';
  allCustomer: AdminReportOverview;
  buyCardNew: AdminReportOverview;
  customerNew: AdminReportOverview;
  groups: AdminReportOverview;
};

export type AllCustomerInput = {
  date?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Scalars['String']>;
  page: Scalars['Float'];
  perPage: Scalars['Float'];
  textSearch?: InputMaybe<Scalars['String']>;
};

export type AllFeedbackQueryResponse = IMutationResponse & {
  __typename?: 'AllFeedbackQueryResponse';
  code: Scalars['Float'];
  data?: Maybe<Array<Feedback>>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
  total?: Maybe<Scalars['Float']>;
};

export type AllFeedbackUserQueryResponse = IMutationResponse & {
  __typename?: 'AllFeedbackUserQueryResponse';
  code: Scalars['Float'];
  feedbackChildren?: Maybe<Array<Feedback>>;
  feedbackParent?: Maybe<Feedback>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
  total?: Maybe<Scalars['Float']>;
};

export type AllGroupAdminInput = {
  date?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Scalars['String']>;
  page: Scalars['Float'];
  perPage: Scalars['Float'];
  textSearch?: InputMaybe<Scalars['String']>;
};

export type AllGroupCustomerInput = {
  page: Scalars['Float'];
  perPage: Scalars['Float'];
};

export type AllGroupQueryResponse = IMutationResponse & {
  __typename?: 'AllGroupQueryResponse';
  code: Scalars['Float'];
  data?: Maybe<Array<Group>>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
  total?: Maybe<Scalars['Float']>;
};

export type AllInviteGroupQueryResponse = IMutationResponse & {
  __typename?: 'AllInviteGroupQueryResponse';
  code: Scalars['Float'];
  data?: Maybe<Array<InviteGroup>>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type AllNotificationsInput = {
  recipientId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<ENotificationType>;
};

export type AllNotificationsResponse = {
  __typename?: 'AllNotificationsResponse';
  data: Array<Notification>;
  total: Scalars['Float'];
};

export type AllTemplateAdminInput = {
  order?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Scalars['String']>;
  page: Scalars['Float'];
  perPage: Scalars['Float'];
};

export type AllTemplateUserQueryResponse = IMutationResponse & {
  __typename?: 'AllTemplateUserQueryResponse';
  code: Scalars['Float'];
  data?: Maybe<Array<Template>>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
  total?: Maybe<Scalars['Float']>;
};

export type AllUserBuyCardGroupInput = {
  order?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Scalars['String']>;
  page: Scalars['Float'];
  perPage: Scalars['Float'];
};

export type AllUserBuyCardGroupResponse = IMutationResponse & {
  __typename?: 'AllUserBuyCardGroupResponse';
  code: Scalars['Float'];
  data?: Maybe<Array<UserBuyCardGroup>>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
  total?: Maybe<Scalars['Float']>;
};

export type AllUserBuyCardInput = {
  date?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Scalars['String']>;
  page: Scalars['Float'];
  perPage: Scalars['Float'];
  status?: InputMaybe<Scalars['Boolean']>;
  textSearch?: InputMaybe<Scalars['String']>;
  userBuyCardGroupId?: InputMaybe<Scalars['String']>;
};

export type AvatarConfig = {
  __typename?: 'AvatarConfig';
  backgroundColor?: Maybe<Scalars['String']>;
  borderColor?: Maybe<Scalars['String']>;
  borderRadius?: Maybe<Scalars['Float']>;
  borderWidth?: Maybe<Scalars['Float']>;
  boxShadow?: Maybe<Scalars['Float']>;
};

export type AvatarConfigMutationResponse = IMutationResponse & {
  __typename?: 'AvatarConfigMutationResponse';
  avatarConfig?: Maybe<AvatarConfig>;
  code: Scalars['Float'];
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type ChangeConfigThemeInput = {
  backgroundColor?: InputMaybe<Scalars['String']>;
  backgroundImage?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  colorIcon?: InputMaybe<Scalars['String']>;
  fontFamily?: InputMaybe<Scalars['String']>;
  headingColor?: InputMaybe<Scalars['String']>;
  headingSubColor?: InputMaybe<Scalars['String']>;
};

export type ChangePasswordInput = {
  password: Scalars['String'];
  passwordNew: Scalars['String'];
};

export type ContactItem = {
  __typename?: 'ContactItem';
  _id: Scalars['ID'];
  content: Scalars['String'];
  isDefault?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  no: Scalars['Float'];
  owner?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  visible: Scalars['Boolean'];
};

export type CreateGroupInput = {
  members?: InputMaybe<Array<Scalars['String']>>;
  ownerId: Scalars['String'];
  templateId?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type CreateImageS3Input = {
  key: Scalars['String'];
  type?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};

export type CreateNotificationInput = {
  action?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  recipientId?: InputMaybe<Scalars['String']>;
  senderId?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  type: ENotificationType;
};

export type CreateReportUserInput = {
  itemId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  userId: Scalars['String'];
};

export type CustomersResponse = {
  __typename?: 'CustomersResponse';
  data: Array<User>;
  total: Scalars['Float'];
};

export enum ENotificationType {
  Admin = 'Admin',
  Global = 'Global',
  Notification = 'Notification',
  Support = 'Support'
}

export enum ETemplateType {
  Custom = 'CUSTOM',
  Default = 'DEFAULT'
}

export enum ETypeAdminReportOverview {
  AllCustomer = 'AllCustomer',
  BuyCardNew = 'BuyCardNew',
  CustomerNew = 'CustomerNew',
  Groups = 'Groups'
}

export enum ETypeUser {
  Admin = 'Admin',
  User = 'User'
}

export type EditContactInput = {
  content: Scalars['String'];
  id: Scalars['String'];
  owner?: InputMaybe<Scalars['String']>;
  shortName?: InputMaybe<Scalars['String']>;
};

export type Feedback = {
  __typename?: 'Feedback';
  _id: Scalars['ID'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  feedbackParentId?: Maybe<Scalars['String']>;
  isParent?: Maybe<Scalars['Boolean']>;
  seen?: Maybe<Scalars['Boolean']>;
  userId: User;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type ForgotPasswordMutationResponse = IMutationResponse & {
  __typename?: 'ForgotPasswordMutationResponse';
  code: Scalars['Float'];
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type GoogleFont = {
  __typename?: 'GoogleFont';
  category: Scalars['String'];
  family: Scalars['String'];
  files: Scalars['JSONObject'];
  kind: Scalars['String'];
  subsets: Array<Scalars['String']>;
  variants: Array<Scalars['String']>;
};

export type Group = {
  __typename?: 'Group';
  _id: Scalars['ID'];
  avatar?: Maybe<ImageS3>;
  avatarS3: Array<User>;
  createdAt: Scalars['DateTime'];
  isDelete?: Maybe<Scalars['Boolean']>;
  members: Array<User>;
  ownerId: User;
  templateId?: Maybe<Template>;
  title: Scalars['String'];
};

export type GroupQueryResponse = IMutationResponse & {
  __typename?: 'GroupQueryResponse';
  code: Scalars['Float'];
  data?: Maybe<Group>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type IMutationResponse = {
  code: Scalars['Float'];
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type ImageS3 = {
  __typename?: 'ImageS3';
  _id: Scalars['ID'];
  exp?: Maybe<Scalars['Float']>;
  key: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  userId: Scalars['String'];
};

export type ImagesS3CreateMutationResponse = IMutationResponse & {
  __typename?: 'ImagesS3CreateMutationResponse';
  code: Scalars['Float'];
  image?: Maybe<ImageS3>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type ImagesS3MutationResponse = IMutationResponse & {
  __typename?: 'ImagesS3MutationResponse';
  code: Scalars['Float'];
  images?: Maybe<Array<ImageS3>>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type InviteGroup = {
  __typename?: 'InviteGroup';
  _id: Scalars['ID'];
  groupId: Group;
  inviteUserId: User;
  userId: User;
};

export type LoginInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addContact?: Maybe<UserMutationResponse>;
  addTemplate: Scalars['Boolean'];
  addUserBuyCard: Scalars['Boolean'];
  addUserBuyCardGroup: Scalars['Boolean'];
  adminResetPassword: Scalars['Boolean'];
  changeConfigTheme?: Maybe<UserMutationResponse>;
  changeDefaultTheme?: Maybe<UserMutationResponse>;
  changePassword: Scalars['Boolean'];
  createGroup: Scalars['Boolean'];
  createImageS3: ImagesS3CreateMutationResponse;
  createNotification: Scalars['Boolean'];
  createReportUser: Scalars['Boolean'];
  deleteFeedback: Scalars['Boolean'];
  deleteGroup: Scalars['Boolean'];
  deleteNotification: Scalars['Boolean'];
  deleteUserBuyCard: Scalars['Boolean'];
  deleteUserBuyCardGroup: Scalars['Boolean'];
  editContact?: Maybe<UserMutationResponse>;
  forgotPassword: ForgotPasswordMutationResponse;
  generalUserBuyCard: Scalars['Boolean'];
  getAllUserBuyCardGroup: Array<UserRegister>;
  inviteMemberGroup: Scalars['Boolean'];
  login?: Maybe<UserMutationResponse>;
  removeContactItem?: Maybe<UserMutationResponse>;
  removeInviteGroup: Scalars['Boolean'];
  removeMemberGroup: Scalars['Boolean'];
  resetAccount: Scalars['Boolean'];
  resetPassword?: Maybe<ResetPasswordMutationResponse>;
  sendFeedback: Scalars['Boolean'];
  settingAvatar?: Maybe<AvatarConfigMutationResponse>;
  signup?: Maybe<UserMutationResponse>;
  sortAddress: Scalars['Boolean'];
  toggleDefaultWebsite: Scalars['Boolean'];
  updateGroup: Scalars['Boolean'];
  updateNotification: Scalars['Boolean'];
  updateTemplate: Scalars['Boolean'];
  updateUserBuyCard: Scalars['Boolean'];
  updateUserInfo?: Maybe<UserMutationResponse>;
};


export type MutationAddContactArgs = {
  addContactInput: AddContactInput;
};


export type MutationAddTemplateArgs = {
  addTemplateInput: AddTemplateInput;
};


export type MutationAddUserBuyCardArgs = {
  addUserBuyCardInput: AddUserBuyCardInput;
};


export type MutationAddUserBuyCardGroupArgs = {
  addUserBuyCardGroupInput: AddUserBuyCardGroupInput;
};


export type MutationAdminResetPasswordArgs = {
  customerId: Scalars['String'];
};


export type MutationChangeConfigThemeArgs = {
  changeConfigThemeInput: ChangeConfigThemeInput;
};


export type MutationChangeDefaultThemeArgs = {
  themeId: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  changePasswordInput: ChangePasswordInput;
};


export type MutationCreateGroupArgs = {
  createGroupInput: CreateGroupInput;
};


export type MutationCreateImageS3Args = {
  createImageS3Input: CreateImageS3Input;
};


export type MutationCreateNotificationArgs = {
  createNotificationInput: CreateNotificationInput;
};


export type MutationCreateReportUserArgs = {
  createReportUserInput: CreateReportUserInput;
};


export type MutationDeleteFeedbackArgs = {
  feedbackId: Scalars['String'];
};


export type MutationDeleteGroupArgs = {
  groupId: Scalars['String'];
};


export type MutationDeleteNotificationArgs = {
  notificationId: Scalars['String'];
};


export type MutationDeleteUserBuyCardArgs = {
  userBuyCardId: Scalars['String'];
};


export type MutationDeleteUserBuyCardGroupArgs = {
  groupId: Scalars['String'];
  passwordConfirm: Scalars['String'];
};


export type MutationEditContactArgs = {
  editContactInput: EditContactInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationGeneralUserBuyCardArgs = {
  userBuyCardGroupId: Scalars['String'];
};


export type MutationGetAllUserBuyCardGroupArgs = {
  status?: InputMaybe<Scalars['Boolean']>;
  userBuyCardGroupId: Scalars['String'];
};


export type MutationInviteMemberGroupArgs = {
  groupId: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRemoveContactItemArgs = {
  idContactItem: Scalars['String'];
};


export type MutationRemoveInviteGroupArgs = {
  removeInviteGroupInput: RemoveInviteGroupInput;
};


export type MutationRemoveMemberGroupArgs = {
  groupId: Scalars['String'];
  memberId: Scalars['String'];
};


export type MutationResetAccountArgs = {
  customerId: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  resetPasswordInput: ResetPasswordInput;
};


export type MutationSendFeedbackArgs = {
  addFeedbackInput: AddFeedbackInput;
};


export type MutationSettingAvatarArgs = {
  settingAvatarInput: SettingAvatarInput;
};


export type MutationSignupArgs = {
  signupInput: SignupInput;
};


export type MutationSortAddressArgs = {
  endIndex: Scalars['String'];
  startIndex: Scalars['String'];
};


export type MutationToggleDefaultWebsiteArgs = {
  id: Scalars['String'];
  isDefault: Scalars['Boolean'];
};


export type MutationUpdateGroupArgs = {
  updateGroupInput: UpdateGroupInput;
};


export type MutationUpdateNotificationArgs = {
  notificationId: Scalars['String'];
};


export type MutationUpdateTemplateArgs = {
  updateTemplateInput: UpdateTemplateInput;
};


export type MutationUpdateUserBuyCardArgs = {
  updateUserBuyCardInput: UpdateUserBuyCardInput;
};


export type MutationUpdateUserInfoArgs = {
  updateUserInfoInput: UpdateUserInfoInput;
};

export type Notification = {
  __typename?: 'Notification';
  _id: Scalars['ID'];
  action?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  recipientId: Scalars['String'];
  senderId?: Maybe<User>;
  status?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  type?: Maybe<ENotificationType>;
};

export type Query = {
  __typename?: 'Query';
  adminReportOverview: AdminReportOverviewResponse;
  allCustomer: CustomersResponse;
  allFeedback: AllFeedbackQueryResponse;
  allFeedbackUser: AllFeedbackQueryResponse;
  allGoogleFont: Array<GoogleFont>;
  allGroupAdmin: AllGroupQueryResponse;
  allGroupCustomer: AllGroupQueryResponse;
  allGroupUser: AllGroupQueryResponse;
  allInviteGroup: AllInviteGroupQueryResponse;
  allNotifications: AllNotificationsResponse;
  allTemplateAdmin: AllTemplateUserQueryResponse;
  allTemplateUser: AllTemplateUserQueryResponse;
  allUserBuyCard: UsersByCardResponse;
  allUserBuyCardGroup: AllUserBuyCardGroupResponse;
  backgroundsS3: ImagesS3MutationResponse;
  feedbackDetailUser: AllFeedbackUserQueryResponse;
  getImagesS3: ImagesS3MutationResponse;
  groupById: GroupQueryResponse;
  me?: Maybe<UserMutationResponse>;
  reportItemContact: ReportContactItemMutationResponse;
  reportOverview: ReportOverviewMutationResponse;
  templateDetail: TemplateDetailQueryResponse;
  user?: Maybe<UserMutationResponse>;
  userBuyCardGroupDetail: UserBuyCardGroup;
  userRegister: UserRegister;
};


export type QueryAllCustomerArgs = {
  allCustomerInput: AllCustomerInput;
};


export type QueryAllFeedbackArgs = {
  isParent?: InputMaybe<Scalars['Boolean']>;
  order?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Scalars['String']>;
  page: Scalars['Float'];
  perPage: Scalars['Float'];
};


export type QueryAllFeedbackUserArgs = {
  page: Scalars['Float'];
};


export type QueryAllGroupAdminArgs = {
  allGroupAdminInput: AllGroupAdminInput;
};


export type QueryAllGroupCustomerArgs = {
  allGroupCustomerInput: AllGroupCustomerInput;
};


export type QueryAllNotificationsArgs = {
  allNotificationsInput: AllNotificationsInput;
};


export type QueryAllTemplateAdminArgs = {
  allTemplateAdminInput: AllTemplateAdminInput;
};


export type QueryAllUserBuyCardArgs = {
  allUserBuyCardInput: AllUserBuyCardInput;
};


export type QueryAllUserBuyCardGroupArgs = {
  allUserBuyCardGroupInput: AllUserBuyCardGroupInput;
};


export type QueryFeedbackDetailUserArgs = {
  feedbackId: Scalars['String'];
  page: Scalars['Float'];
};


export type QueryGroupByIdArgs = {
  groupId?: InputMaybe<Scalars['String']>;
};


export type QueryReportItemContactArgs = {
  reportItemContactInput: ReportItemContactInput;
};


export type QueryReportOverviewArgs = {
  reportOverviewInput: ReportOverviewInput;
};


export type QueryTemplateDetailArgs = {
  templateId?: InputMaybe<Scalars['String']>;
};


export type QueryUserArgs = {
  idRegister: Scalars['String'];
};


export type QueryUserBuyCardGroupDetailArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryUserRegisterArgs = {
  idRegister?: InputMaybe<Scalars['String']>;
};

export type RemoveInviteGroupInput = {
  confirm?: InputMaybe<Scalars['Boolean']>;
  groupId: Scalars['String'];
  inviteGroupId: Scalars['String'];
  userId: Scalars['String'];
};

export type ReportContactItemDataResponse = {
  __typename?: 'ReportContactItemDataResponse';
  count: Scalars['Float'];
  label: Scalars['String'];
};

export type ReportContactItemMutationResponse = IMutationResponse & {
  __typename?: 'ReportContactItemMutationResponse';
  code: Scalars['Float'];
  data: Array<ReportContactItemDataResponse>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type ReportItemContactInput = {
  date: Scalars['Float'];
  itemId: Scalars['String'];
  type: Scalars['String'];
  userId: Scalars['String'];
};

export type ReportOverviewDataResponse = {
  __typename?: 'ReportOverviewDataResponse';
  label: Scalars['String'];
  save: Scalars['Float'];
  view: Scalars['Float'];
};

export type ReportOverviewInput = {
  date: Scalars['Float'];
  type: Scalars['String'];
  userId: Scalars['String'];
};

export type ReportOverviewMutationResponse = IMutationResponse & {
  __typename?: 'ReportOverviewMutationResponse';
  code: Scalars['Float'];
  data: Array<ReportOverviewDataResponse>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type ResetPasswordInput = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export type ResetPasswordMutationResponse = IMutationResponse & {
  __typename?: 'ResetPasswordMutationResponse';
  code: Scalars['Float'];
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type SettingAvatarInput = {
  backgroundColor?: InputMaybe<Scalars['String']>;
  borderColor?: InputMaybe<Scalars['String']>;
  borderRadius?: InputMaybe<Scalars['Float']>;
  borderWidth?: InputMaybe<Scalars['Float']>;
  boxShadow?: InputMaybe<Scalars['Float']>;
};

export type SignupInput = {
  code: Scalars['String'];
  email: Scalars['String'];
  fullname: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Template = {
  __typename?: 'Template';
  _id: Scalars['ID'];
  background?: Maybe<ImageS3>;
  backgroundColor?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  colorIcon?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  groupId?: Maybe<Group>;
  isDelete?: Maybe<Scalars['Boolean']>;
  template: Scalars['String'];
  title: Scalars['String'];
  type?: Maybe<ETemplateType>;
};

export type TemplateDetailQueryResponse = IMutationResponse & {
  __typename?: 'TemplateDetailQueryResponse';
  code: Scalars['Float'];
  data?: Maybe<Template>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type ThemeConfig = {
  __typename?: 'ThemeConfig';
  backgroundColor?: Maybe<Scalars['String']>;
  backgroundImage?: Maybe<ImageS3>;
  color?: Maybe<Scalars['String']>;
  colorIcon?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  headingColor?: Maybe<Scalars['String']>;
  headingSubColor?: Maybe<Scalars['String']>;
};

export type UpdateGroupInput = {
  _id: Scalars['String'];
  members?: InputMaybe<Array<Scalars['String']>>;
  ownerId: Scalars['String'];
  templateId?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type UpdateTemplateInput = {
  _id: Scalars['String'];
  background?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  colorIcon?: InputMaybe<Scalars['String']>;
  groupId?: InputMaybe<Scalars['String']>;
  template?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['Float']>;
};

export type UpdateUserBuyCardInput = {
  address?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Boolean']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInfoInput = {
  address?: InputMaybe<Scalars['String']>;
  avatarS3?: InputMaybe<Scalars['String']>;
  birthday?: InputMaybe<Scalars['DateTime']>;
  career_position?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  fullname?: InputMaybe<Scalars['String']>;
  hash_url?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  address: Scalars['String'];
  avatarConfig?: Maybe<AvatarConfig>;
  avatarS3?: Maybe<ImageS3>;
  birthday?: Maybe<Scalars['DateTime']>;
  cardName?: Maybe<Scalars['String']>;
  career_position?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  defaultTemplate?: Maybe<Template>;
  description?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  fullname: Scalars['String'];
  groupId?: Maybe<Scalars['String']>;
  hash_url?: Maybe<Scalars['String']>;
  idRegister: Scalars['ID'];
  isDeleted?: Maybe<Scalars['Boolean']>;
  list?: Maybe<Array<ContactItem>>;
  phoneNumber: Scalars['String'];
  services?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  themeConfig?: Maybe<ThemeConfig>;
  type?: Maybe<ETypeUser>;
  username: Scalars['String'];
};

export type UserBuyCardGroup = {
  __typename?: 'UserBuyCardGroup';
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  no?: Maybe<Scalars['String']>;
  quantity: Scalars['Float'];
  status?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  totalActive?: Maybe<Scalars['Float']>;
};

export type UserMutationResponse = IMutationResponse & {
  __typename?: 'UserMutationResponse';
  accessToken?: Maybe<Scalars['String']>;
  code: Scalars['Float'];
  errors?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type UserRegister = {
  __typename?: 'UserRegister';
  _id: Scalars['ID'];
  address?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  isUserDelete?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  userBuyCardGroupId?: Maybe<UserBuyCardGroup>;
};

export type UsersByCardResponse = {
  __typename?: 'UsersByCardResponse';
  data: Array<UserRegister>;
  total: Scalars['Float'];
};

export type AvatarConfigInfoFragment = { __typename?: 'AvatarConfig', backgroundColor?: string | null, borderColor?: string | null, borderWidth?: number | null, borderRadius?: number | null, boxShadow?: number | null };

export type FeedbackInfoFragment = { __typename?: 'Feedback', _id: string, content: string, seen?: boolean | null, createdAt: any, userId: { __typename?: 'User', _id: string, fullname: string, username: string, birthday?: any | null, phoneNumber: string, description?: string | null, email: string, address: string, idRegister: string, career_position?: string | null, company?: string | null, hash_url?: string | null, type?: ETypeUser | null, createdAt: any, isDeleted?: boolean | null, avatarConfig?: { __typename?: 'AvatarConfig', backgroundColor?: string | null, borderColor?: string | null, borderWidth?: number | null, borderRadius?: number | null, boxShadow?: number | null } | null, defaultTemplate?: { __typename?: 'Template', _id: string, template: string, colorIcon?: string | null, backgroundColor?: string | null, color?: string | null, background?: { __typename?: 'ImageS3', url: string } | null } | null, avatarS3?: { __typename?: 'ImageS3', _id: string, url: string, key: string, exp?: number | null } | null, list?: Array<{ __typename?: 'ContactItem', _id: string, name: string, type: string, no: number, content: string, owner?: string | null, shortName?: string | null, isDefault?: boolean | null }> | null, themeConfig?: { __typename?: 'ThemeConfig', backgroundColor?: string | null, color?: string | null, colorIcon?: string | null, fontFamily?: string | null, headingSubColor?: string | null, headingColor?: string | null, backgroundImage?: { __typename?: 'ImageS3', _id: string, url: string } | null } | null } };

export type FieldErrorFragment = { __typename?: 'FieldError', field: string, message: string };

export type GroupInfoFragment = { __typename?: 'Group', _id: string, title: string, createdAt: any, ownerId: { __typename?: 'User', _id: string, idRegister: string, fullname: string, avatarS3?: { __typename?: 'ImageS3', url: string } | null }, members: Array<{ __typename?: 'User', _id: string, fullname: string, career_position?: string | null, hash_url?: string | null, idRegister: string, avatarS3?: { __typename?: 'ImageS3', url: string } | null }> };

export type ImageInfoFragment = { __typename?: 'ImageS3', _id: string, url: string, key: string };

export type ListContactFragment = { __typename?: 'User', list?: Array<{ __typename?: 'ContactItem', _id: string, name: string, type: string, no: number, content: string, owner?: string | null, shortName?: string | null, isDefault?: boolean | null }> | null };

export type MemberInfoFragment = { __typename?: 'User', _id: string, fullname: string, career_position?: string | null, hash_url?: string | null, idRegister: string, avatarS3?: { __typename?: 'ImageS3', url: string } | null };

export type UserMutationStatusesFragment = { __typename?: 'UserMutationResponse', code: number, success: boolean, message?: string | null };

export type TemplateInfoFragment = { __typename?: 'Template', _id: string, title: string, template: string, type?: ETemplateType | null, color?: string | null, colorIcon?: string | null, backgroundColor?: string | null, createdAt: any, background?: { __typename?: 'ImageS3', _id: string, url: string, key: string } | null, groupId?: { __typename?: 'Group', _id: string, title: string } | null };

export type TemplateUserInfoFragment = { __typename?: 'Template', _id: string, template: string, colorIcon?: string | null, backgroundColor?: string | null, color?: string | null, background?: { __typename?: 'ImageS3', url: string } | null };

export type ThemeConfigFragment = { __typename?: 'User', themeConfig?: { __typename?: 'ThemeConfig', backgroundColor?: string | null, color?: string | null, colorIcon?: string | null, fontFamily?: string | null, headingSubColor?: string | null, headingColor?: string | null, backgroundImage?: { __typename?: 'ImageS3', _id: string, url: string } | null } | null };

export type UserBuyCardGroupInfoFragment = { __typename?: 'UserBuyCardGroup', _id: string, title: string, quantity: number, status?: boolean | null, totalActive?: number | null, createdAt: any, no?: string | null };

export type UserBuyCardInfoFragment = { __typename?: 'UserRegister', _id: string, name?: string | null, code: string, email?: string | null, phoneNumber?: string | null, address?: string | null, status?: boolean | null, isUserDelete?: boolean | null, createdAt: any, userBuyCardGroupId?: { __typename?: 'UserBuyCardGroup', _id: string } | null };

export type UserInfoFragment = { __typename?: 'User', _id: string, fullname: string, username: string, birthday?: any | null, phoneNumber: string, description?: string | null, email: string, address: string, idRegister: string, career_position?: string | null, company?: string | null, hash_url?: string | null, type?: ETypeUser | null, createdAt: any, isDeleted?: boolean | null, avatarConfig?: { __typename?: 'AvatarConfig', backgroundColor?: string | null, borderColor?: string | null, borderWidth?: number | null, borderRadius?: number | null, boxShadow?: number | null } | null, defaultTemplate?: { __typename?: 'Template', _id: string, template: string, colorIcon?: string | null, backgroundColor?: string | null, color?: string | null, background?: { __typename?: 'ImageS3', url: string } | null } | null, avatarS3?: { __typename?: 'ImageS3', _id: string, url: string, key: string, exp?: number | null } | null, list?: Array<{ __typename?: 'ContactItem', _id: string, name: string, type: string, no: number, content: string, owner?: string | null, shortName?: string | null, isDefault?: boolean | null }> | null, themeConfig?: { __typename?: 'ThemeConfig', backgroundColor?: string | null, color?: string | null, colorIcon?: string | null, fontFamily?: string | null, headingSubColor?: string | null, headingColor?: string | null, backgroundImage?: { __typename?: 'ImageS3', _id: string, url: string } | null } | null };

export type UserMutationResponseFragment = { __typename?: 'UserMutationResponse', accessToken?: string | null, code: number, success: boolean, message?: string | null, user?: { __typename?: 'User', _id: string, fullname: string, username: string, birthday?: any | null, phoneNumber: string, description?: string | null, email: string, address: string, idRegister: string, career_position?: string | null, company?: string | null, hash_url?: string | null, type?: ETypeUser | null, createdAt: any, isDeleted?: boolean | null, avatarConfig?: { __typename?: 'AvatarConfig', backgroundColor?: string | null, borderColor?: string | null, borderWidth?: number | null, borderRadius?: number | null, boxShadow?: number | null } | null, defaultTemplate?: { __typename?: 'Template', _id: string, template: string, colorIcon?: string | null, backgroundColor?: string | null, color?: string | null, background?: { __typename?: 'ImageS3', url: string } | null } | null, avatarS3?: { __typename?: 'ImageS3', _id: string, url: string, key: string, exp?: number | null } | null, list?: Array<{ __typename?: 'ContactItem', _id: string, name: string, type: string, no: number, content: string, owner?: string | null, shortName?: string | null, isDefault?: boolean | null }> | null, themeConfig?: { __typename?: 'ThemeConfig', backgroundColor?: string | null, color?: string | null, colorIcon?: string | null, fontFamily?: string | null, headingSubColor?: string | null, headingColor?: string | null, backgroundImage?: { __typename?: 'ImageS3', _id: string, url: string } | null } | null } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null };

export type UserRegisterInfoFragment = { __typename?: 'UserRegister', _id: string, code: string, email?: string | null, name?: string | null, userBuyCardGroupId?: { __typename?: 'UserBuyCardGroup', _id: string } | null };

export type AddContactMutationVariables = Exact<{
  addContactInput: AddContactInput;
}>;


export type AddContactMutation = { __typename?: 'Mutation', addContact?: { __typename?: 'UserMutationResponse', accessToken?: string | null, code: number, success: boolean, message?: string | null, user?: { __typename?: 'User', _id: string, fullname: string, username: string, birthday?: any | null, phoneNumber: string, description?: string | null, email: string, address: string, idRegister: string, career_position?: string | null, company?: string | null, hash_url?: string | null, type?: ETypeUser | null, createdAt: any, isDeleted?: boolean | null, avatarConfig?: { __typename?: 'AvatarConfig', backgroundColor?: string | null, borderColor?: string | null, borderWidth?: number | null, borderRadius?: number | null, boxShadow?: number | null } | null, defaultTemplate?: { __typename?: 'Template', _id: string, template: string, colorIcon?: string | null, backgroundColor?: string | null, color?: string | null, background?: { __typename?: 'ImageS3', url: string } | null } | null, avatarS3?: { __typename?: 'ImageS3', _id: string, url: string, key: string, exp?: number | null } | null, list?: Array<{ __typename?: 'ContactItem', _id: string, name: string, type: string, no: number, content: string, owner?: string | null, shortName?: string | null, isDefault?: boolean | null }> | null, themeConfig?: { __typename?: 'ThemeConfig', backgroundColor?: string | null, color?: string | null, colorIcon?: string | null, fontFamily?: string | null, headingSubColor?: string | null, headingColor?: string | null, backgroundImage?: { __typename?: 'ImageS3', _id: string, url: string } | null } | null } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } | null };

export type SendFeedbackMutationVariables = Exact<{
  addFeedbackInput: AddFeedbackInput;
}>;


export type SendFeedbackMutation = { __typename?: 'Mutation', sendFeedback: boolean };

export type AddTemplateMutationVariables = Exact<{
  addTemplateInput: AddTemplateInput;
}>;


export type AddTemplateMutation = { __typename?: 'Mutation', addTemplate: boolean };

export type AdminResetPasswordMutationVariables = Exact<{
  customerId: Scalars['String'];
}>;


export type AdminResetPasswordMutation = { __typename?: 'Mutation', adminResetPassword: boolean };

export type SettingAvatarMutationVariables = Exact<{
  settingAvatarInput: SettingAvatarInput;
}>;


export type SettingAvatarMutation = { __typename?: 'Mutation', settingAvatar?: { __typename?: 'AvatarConfigMutationResponse', code: number, message?: string | null, avatarConfig?: { __typename?: 'AvatarConfig', backgroundColor?: string | null, borderColor?: string | null, borderWidth?: number | null, borderRadius?: number | null, boxShadow?: number | null } | null } | null };

export type ChangeConfigThemeMutationVariables = Exact<{
  changeConfigThemeInput: ChangeConfigThemeInput;
}>;


export type ChangeConfigThemeMutation = { __typename?: 'Mutation', changeConfigTheme?: { __typename?: 'UserMutationResponse', accessToken?: string | null, code: number, success: boolean, message?: string | null, user?: { __typename?: 'User', _id: string, fullname: string, username: string, birthday?: any | null, phoneNumber: string, description?: string | null, email: string, address: string, idRegister: string, career_position?: string | null, company?: string | null, hash_url?: string | null, type?: ETypeUser | null, createdAt: any, isDeleted?: boolean | null, avatarConfig?: { __typename?: 'AvatarConfig', backgroundColor?: string | null, borderColor?: string | null, borderWidth?: number | null, borderRadius?: number | null, boxShadow?: number | null } | null, defaultTemplate?: { __typename?: 'Template', _id: string, template: string, colorIcon?: string | null, backgroundColor?: string | null, color?: string | null, background?: { __typename?: 'ImageS3', url: string } | null } | null, avatarS3?: { __typename?: 'ImageS3', _id: string, url: string, key: string, exp?: number | null } | null, list?: Array<{ __typename?: 'ContactItem', _id: string, name: string, type: string, no: number, content: string, owner?: string | null, shortName?: string | null, isDefault?: boolean | null }> | null, themeConfig?: { __typename?: 'ThemeConfig', backgroundColor?: string | null, color?: string | null, colorIcon?: string | null, fontFamily?: string | null, headingSubColor?: string | null, headingColor?: string | null, backgroundImage?: { __typename?: 'ImageS3', _id: string, url: string } | null } | null } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } | null };

export type ChangeDefaultThemeMutationVariables = Exact<{
  themeId: Scalars['String'];
}>;


export type ChangeDefaultThemeMutation = { __typename?: 'Mutation', changeDefaultTheme?: { __typename?: 'UserMutationResponse', accessToken?: string | null, code: number, success: boolean, message?: string | null, user?: { __typename?: 'User', _id: string, fullname: string, username: string, birthday?: any | null, phoneNumber: string, description?: string | null, email: string, address: string, idRegister: string, career_position?: string | null, company?: string | null, hash_url?: string | null, type?: ETypeUser | null, createdAt: any, isDeleted?: boolean | null, avatarConfig?: { __typename?: 'AvatarConfig', backgroundColor?: string | null, borderColor?: string | null, borderWidth?: number | null, borderRadius?: number | null, boxShadow?: number | null } | null, defaultTemplate?: { __typename?: 'Template', _id: string, template: string, colorIcon?: string | null, backgroundColor?: string | null, color?: string | null, background?: { __typename?: 'ImageS3', url: string } | null } | null, avatarS3?: { __typename?: 'ImageS3', _id: string, url: string, key: string, exp?: number | null } | null, list?: Array<{ __typename?: 'ContactItem', _id: string, name: string, type: string, no: number, content: string, owner?: string | null, shortName?: string | null, isDefault?: boolean | null }> | null, themeConfig?: { __typename?: 'ThemeConfig', backgroundColor?: string | null, color?: string | null, colorIcon?: string | null, fontFamily?: string | null, headingSubColor?: string | null, headingColor?: string | null, backgroundImage?: { __typename?: 'ImageS3', _id: string, url: string } | null } | null } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } | null };

export type ChangePaswordMutationVariables = Exact<{
  changePasswordInput: ChangePasswordInput;
}>;


export type ChangePaswordMutation = { __typename?: 'Mutation', changePassword: boolean };

export type CreateGroupMutationVariables = Exact<{
  createGroupInput: CreateGroupInput;
}>;


export type CreateGroupMutation = { __typename?: 'Mutation', createGroup: boolean };

export type CreateImageS3MutationVariables = Exact<{
  createImageS3Input: CreateImageS3Input;
}>;


export type CreateImageS3Mutation = { __typename?: 'Mutation', createImageS3: { __typename?: 'ImagesS3CreateMutationResponse', code: number, success: boolean, message?: string | null, image?: { __typename?: 'ImageS3', _id: string, url: string, key: string } | null } };

export type CreateNotificationMutationVariables = Exact<{
  createNotificationInput: CreateNotificationInput;
}>;


export type CreateNotificationMutation = { __typename?: 'Mutation', createNotification: boolean };

export type CreateReportUserMutationVariables = Exact<{
  createReportUserInput: CreateReportUserInput;
}>;


export type CreateReportUserMutation = { __typename?: 'Mutation', createReportUser: boolean };

export type AddUserBuyCardMutationVariables = Exact<{
  addUserBuyCardInput: AddUserBuyCardInput;
}>;


export type AddUserBuyCardMutation = { __typename?: 'Mutation', addUserBuyCard: boolean };

export type AddUserBuyCardGroupMutationVariables = Exact<{
  addUserBuyCardGroupInput: AddUserBuyCardGroupInput;
}>;


export type AddUserBuyCardGroupMutation = { __typename?: 'Mutation', addUserBuyCardGroup: boolean };

export type DeleteFeedbackMutationVariables = Exact<{
  feedbackId: Scalars['String'];
}>;


export type DeleteFeedbackMutation = { __typename?: 'Mutation', deleteFeedback: boolean };

export type DeleteNotificationMutationVariables = Exact<{
  notificationId: Scalars['String'];
}>;


export type DeleteNotificationMutation = { __typename?: 'Mutation', deleteNotification: boolean };

export type DeleteUserBuyCardMutationVariables = Exact<{
  userBuyCardId: Scalars['String'];
}>;


export type DeleteUserBuyCardMutation = { __typename?: 'Mutation', deleteUserBuyCard: boolean };

export type DeleteUserBuyCardGroupMutationVariables = Exact<{
  groupId: Scalars['String'];
  passwordConfirm: Scalars['String'];
}>;


export type DeleteUserBuyCardGroupMutation = { __typename?: 'Mutation', deleteUserBuyCardGroup: boolean };

export type DeleteGroupMutationVariables = Exact<{
  groupId: Scalars['String'];
}>;


export type DeleteGroupMutation = { __typename?: 'Mutation', deleteGroup: boolean };

export type EditContactMutationVariables = Exact<{
  editContactInput: EditContactInput;
}>;


export type EditContactMutation = { __typename?: 'Mutation', editContact?: { __typename?: 'UserMutationResponse', accessToken?: string | null, code: number, success: boolean, message?: string | null, user?: { __typename?: 'User', _id: string, fullname: string, username: string, birthday?: any | null, phoneNumber: string, description?: string | null, email: string, address: string, idRegister: string, career_position?: string | null, company?: string | null, hash_url?: string | null, type?: ETypeUser | null, createdAt: any, isDeleted?: boolean | null, avatarConfig?: { __typename?: 'AvatarConfig', backgroundColor?: string | null, borderColor?: string | null, borderWidth?: number | null, borderRadius?: number | null, boxShadow?: number | null } | null, defaultTemplate?: { __typename?: 'Template', _id: string, template: string, colorIcon?: string | null, backgroundColor?: string | null, color?: string | null, background?: { __typename?: 'ImageS3', url: string } | null } | null, avatarS3?: { __typename?: 'ImageS3', _id: string, url: string, key: string, exp?: number | null } | null, list?: Array<{ __typename?: 'ContactItem', _id: string, name: string, type: string, no: number, content: string, owner?: string | null, shortName?: string | null, isDefault?: boolean | null }> | null, themeConfig?: { __typename?: 'ThemeConfig', backgroundColor?: string | null, color?: string | null, colorIcon?: string | null, fontFamily?: string | null, headingSubColor?: string | null, headingColor?: string | null, backgroundImage?: { __typename?: 'ImageS3', _id: string, url: string } | null } | null } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } | null };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: { __typename?: 'ForgotPasswordMutationResponse', code: number, success: boolean, message?: string | null, token?: string | null } };

export type GeneralUserBuyCardMutationVariables = Exact<{
  userBuyCardGroupId: Scalars['String'];
}>;


export type GeneralUserBuyCardMutation = { __typename?: 'Mutation', generalUserBuyCard: boolean };

export type GetAllUserBuyCardGroupMutationVariables = Exact<{
  userBuyCardGroupId: Scalars['String'];
  status?: InputMaybe<Scalars['Boolean']>;
}>;


export type GetAllUserBuyCardGroupMutation = { __typename?: 'Mutation', getAllUserBuyCardGroup: Array<{ __typename?: 'UserRegister', _id: string, name?: string | null, code: string, email?: string | null, phoneNumber?: string | null, address?: string | null, status?: boolean | null, isUserDelete?: boolean | null, createdAt: any, userBuyCardGroupId?: { __typename?: 'UserBuyCardGroup', _id: string } | null }> };

export type InviteMemberGroupMutationVariables = Exact<{
  groupId: Scalars['String'];
  userId: Scalars['String'];
}>;


export type InviteMemberGroupMutation = { __typename?: 'Mutation', inviteMemberGroup: boolean };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'UserMutationResponse', accessToken?: string | null, code: number, success: boolean, message?: string | null, user?: { __typename?: 'User', _id: string, fullname: string, username: string, birthday?: any | null, phoneNumber: string, description?: string | null, email: string, address: string, idRegister: string, career_position?: string | null, company?: string | null, hash_url?: string | null, type?: ETypeUser | null, createdAt: any, isDeleted?: boolean | null, avatarConfig?: { __typename?: 'AvatarConfig', backgroundColor?: string | null, borderColor?: string | null, borderWidth?: number | null, borderRadius?: number | null, boxShadow?: number | null } | null, defaultTemplate?: { __typename?: 'Template', _id: string, template: string, colorIcon?: string | null, backgroundColor?: string | null, color?: string | null, background?: { __typename?: 'ImageS3', url: string } | null } | null, avatarS3?: { __typename?: 'ImageS3', _id: string, url: string, key: string, exp?: number | null } | null, list?: Array<{ __typename?: 'ContactItem', _id: string, name: string, type: string, no: number, content: string, owner?: string | null, shortName?: string | null, isDefault?: boolean | null }> | null, themeConfig?: { __typename?: 'ThemeConfig', backgroundColor?: string | null, color?: string | null, colorIcon?: string | null, fontFamily?: string | null, headingSubColor?: string | null, headingColor?: string | null, backgroundImage?: { __typename?: 'ImageS3', _id: string, url: string } | null } | null } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } | null };

export type RemoveContactItemMutationVariables = Exact<{
  idContactItem: Scalars['String'];
}>;


export type RemoveContactItemMutation = { __typename?: 'Mutation', removeContactItem?: { __typename?: 'UserMutationResponse', message?: string | null, code: number, success: boolean, user?: { __typename?: 'User', _id: string, fullname: string, username: string, birthday?: any | null, phoneNumber: string, description?: string | null, email: string, address: string, idRegister: string, career_position?: string | null, company?: string | null, hash_url?: string | null, type?: ETypeUser | null, createdAt: any, isDeleted?: boolean | null, avatarConfig?: { __typename?: 'AvatarConfig', backgroundColor?: string | null, borderColor?: string | null, borderWidth?: number | null, borderRadius?: number | null, boxShadow?: number | null } | null, defaultTemplate?: { __typename?: 'Template', _id: string, template: string, colorIcon?: string | null, backgroundColor?: string | null, color?: string | null, background?: { __typename?: 'ImageS3', url: string } | null } | null, avatarS3?: { __typename?: 'ImageS3', _id: string, url: string, key: string, exp?: number | null } | null, list?: Array<{ __typename?: 'ContactItem', _id: string, name: string, type: string, no: number, content: string, owner?: string | null, shortName?: string | null, isDefault?: boolean | null }> | null, themeConfig?: { __typename?: 'ThemeConfig', backgroundColor?: string | null, color?: string | null, colorIcon?: string | null, fontFamily?: string | null, headingSubColor?: string | null, headingColor?: string | null, backgroundImage?: { __typename?: 'ImageS3', _id: string, url: string } | null } | null } | null } | null };

export type RemoveInviteGroupMutationVariables = Exact<{
  removeInviteGroupInput: RemoveInviteGroupInput;
}>;


export type RemoveInviteGroupMutation = { __typename?: 'Mutation', removeInviteGroup: boolean };

export type RemoveMemberGroupMutationVariables = Exact<{
  groupId: Scalars['String'];
  memberId: Scalars['String'];
}>;


export type RemoveMemberGroupMutation = { __typename?: 'Mutation', removeMemberGroup: boolean };

export type ResetAccountMutationVariables = Exact<{
  customerId: Scalars['String'];
}>;


export type ResetAccountMutation = { __typename?: 'Mutation', resetAccount: boolean };

export type ResetPasswordMutationVariables = Exact<{
  resetPasswordInput: ResetPasswordInput;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword?: { __typename?: 'ResetPasswordMutationResponse', code: number, success: boolean, message?: string | null } | null };

export type SignupMutationVariables = Exact<{
  signupInput: SignupInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup?: { __typename?: 'UserMutationResponse', accessToken?: string | null, code: number, success: boolean, message?: string | null, user?: { __typename?: 'User', _id: string, fullname: string, username: string, birthday?: any | null, phoneNumber: string, description?: string | null, email: string, address: string, idRegister: string, career_position?: string | null, company?: string | null, hash_url?: string | null, type?: ETypeUser | null, createdAt: any, isDeleted?: boolean | null, avatarConfig?: { __typename?: 'AvatarConfig', backgroundColor?: string | null, borderColor?: string | null, borderWidth?: number | null, borderRadius?: number | null, boxShadow?: number | null } | null, defaultTemplate?: { __typename?: 'Template', _id: string, template: string, colorIcon?: string | null, backgroundColor?: string | null, color?: string | null, background?: { __typename?: 'ImageS3', url: string } | null } | null, avatarS3?: { __typename?: 'ImageS3', _id: string, url: string, key: string, exp?: number | null } | null, list?: Array<{ __typename?: 'ContactItem', _id: string, name: string, type: string, no: number, content: string, owner?: string | null, shortName?: string | null, isDefault?: boolean | null }> | null, themeConfig?: { __typename?: 'ThemeConfig', backgroundColor?: string | null, color?: string | null, colorIcon?: string | null, fontFamily?: string | null, headingSubColor?: string | null, headingColor?: string | null, backgroundImage?: { __typename?: 'ImageS3', _id: string, url: string } | null } | null } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } | null };

export type SortAddressMutationVariables = Exact<{
  startIndex: Scalars['String'];
  endIndex: Scalars['String'];
}>;


export type SortAddressMutation = { __typename?: 'Mutation', sortAddress: boolean };

export type ToggleDefaultWebsiteMutationVariables = Exact<{
  id: Scalars['String'];
  isDefault: Scalars['Boolean'];
}>;


export type ToggleDefaultWebsiteMutation = { __typename?: 'Mutation', toggleDefaultWebsite: boolean };

export type UpdateGroupMutationVariables = Exact<{
  updateGroupInput: UpdateGroupInput;
}>;


export type UpdateGroupMutation = { __typename?: 'Mutation', updateGroup: boolean };

export type UpdateTemplateMutationVariables = Exact<{
  updateTemplateInput: UpdateTemplateInput;
}>;


export type UpdateTemplateMutation = { __typename?: 'Mutation', updateTemplate: boolean };

export type UpdateUserBuyCardMutationVariables = Exact<{
  updateUserBuyCardInput: UpdateUserBuyCardInput;
}>;


export type UpdateUserBuyCardMutation = { __typename?: 'Mutation', updateUserBuyCard: boolean };

export type UpdateUserInfoMutationVariables = Exact<{
  updateUserInfoInput: UpdateUserInfoInput;
}>;


export type UpdateUserInfoMutation = { __typename?: 'Mutation', updateUserInfo?: { __typename?: 'UserMutationResponse', accessToken?: string | null, code: number, success: boolean, message?: string | null, user?: { __typename?: 'User', _id: string, fullname: string, username: string, birthday?: any | null, phoneNumber: string, description?: string | null, email: string, address: string, idRegister: string, career_position?: string | null, company?: string | null, hash_url?: string | null, type?: ETypeUser | null, createdAt: any, isDeleted?: boolean | null, avatarConfig?: { __typename?: 'AvatarConfig', backgroundColor?: string | null, borderColor?: string | null, borderWidth?: number | null, borderRadius?: number | null, boxShadow?: number | null } | null, defaultTemplate?: { __typename?: 'Template', _id: string, template: string, colorIcon?: string | null, backgroundColor?: string | null, color?: string | null, background?: { __typename?: 'ImageS3', url: string } | null } | null, avatarS3?: { __typename?: 'ImageS3', _id: string, url: string, key: string, exp?: number | null } | null, list?: Array<{ __typename?: 'ContactItem', _id: string, name: string, type: string, no: number, content: string, owner?: string | null, shortName?: string | null, isDefault?: boolean | null }> | null, themeConfig?: { __typename?: 'ThemeConfig', backgroundColor?: string | null, color?: string | null, colorIcon?: string | null, fontFamily?: string | null, headingSubColor?: string | null, headingColor?: string | null, backgroundImage?: { __typename?: 'ImageS3', _id: string, url: string } | null } | null } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } | null };

export type AdminReportOverviewQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminReportOverviewQuery = { __typename?: 'Query', adminReportOverview: { __typename?: 'AdminReportOverviewResponse', customerNew: { __typename?: 'AdminReportOverview', key: ETypeAdminReportOverview, valueCurrent: number, valuePrevious?: number | null }, buyCardNew: { __typename?: 'AdminReportOverview', key: ETypeAdminReportOverview, valueCurrent: number, valuePrevious?: number | null }, allCustomer: { __typename?: 'AdminReportOverview', key: ETypeAdminReportOverview, valueCurrent: number, valuePrevious?: number | null }, groups: { __typename?: 'AdminReportOverview', key: ETypeAdminReportOverview, valueCurrent: number, valuePrevious?: number | null } } };

export type AllCustomerQueryVariables = Exact<{
  allCustomerInput: AllCustomerInput;
}>;


export type AllCustomerQuery = { __typename?: 'Query', allCustomer: { __typename?: 'CustomersResponse', total: number, data: Array<{ __typename?: 'User', _id: string, fullname: string, username: string, birthday?: any | null, phoneNumber: string, description?: string | null, email: string, address: string, idRegister: string, career_position?: string | null, company?: string | null, hash_url?: string | null, type?: ETypeUser | null, createdAt: any, isDeleted?: boolean | null, avatarConfig?: { __typename?: 'AvatarConfig', backgroundColor?: string | null, borderColor?: string | null, borderWidth?: number | null, borderRadius?: number | null, boxShadow?: number | null } | null, defaultTemplate?: { __typename?: 'Template', _id: string, template: string, colorIcon?: string | null, backgroundColor?: string | null, color?: string | null, background?: { __typename?: 'ImageS3', url: string } | null } | null, avatarS3?: { __typename?: 'ImageS3', _id: string, url: string, key: string, exp?: number | null } | null, list?: Array<{ __typename?: 'ContactItem', _id: string, name: string, type: string, no: number, content: string, owner?: string | null, shortName?: string | null, isDefault?: boolean | null }> | null, themeConfig?: { __typename?: 'ThemeConfig', backgroundColor?: string | null, color?: string | null, colorIcon?: string | null, fontFamily?: string | null, headingSubColor?: string | null, headingColor?: string | null, backgroundImage?: { __typename?: 'ImageS3', _id: string, url: string } | null } | null }> } };

export type AllFeedbackQueryVariables = Exact<{
  page: Scalars['Float'];
  perPage: Scalars['Float'];
  isParent?: InputMaybe<Scalars['Boolean']>;
}>;


export type AllFeedbackQuery = { __typename?: 'Query', allFeedback: { __typename?: 'AllFeedbackQueryResponse', code: number, success: boolean, message?: string | null, total?: number | null, data?: Array<{ __typename?: 'Feedback', _id: string, content: string, seen?: boolean | null, createdAt: any, userId: { __typename?: 'User', _id: string, fullname: string, username: string, birthday?: any | null, phoneNumber: string, description?: string | null, email: string, address: string, idRegister: string, career_position?: string | null, company?: string | null, hash_url?: string | null, type?: ETypeUser | null, createdAt: any, isDeleted?: boolean | null, avatarConfig?: { __typename?: 'AvatarConfig', backgroundColor?: string | null, borderColor?: string | null, borderWidth?: number | null, borderRadius?: number | null, boxShadow?: number | null } | null, defaultTemplate?: { __typename?: 'Template', _id: string, template: string, colorIcon?: string | null, backgroundColor?: string | null, color?: string | null, background?: { __typename?: 'ImageS3', url: string } | null } | null, avatarS3?: { __typename?: 'ImageS3', _id: string, url: string, key: string, exp?: number | null } | null, list?: Array<{ __typename?: 'ContactItem', _id: string, name: string, type: string, no: number, content: string, owner?: string | null, shortName?: string | null, isDefault?: boolean | null }> | null, themeConfig?: { __typename?: 'ThemeConfig', backgroundColor?: string | null, color?: string | null, colorIcon?: string | null, fontFamily?: string | null, headingSubColor?: string | null, headingColor?: string | null, backgroundImage?: { __typename?: 'ImageS3', _id: string, url: string } | null } | null } }> | null } };

export type AllFeedbackUserQueryVariables = Exact<{
  page: Scalars['Float'];
}>;


export type AllFeedbackUserQuery = { __typename?: 'Query', allFeedbackUser: { __typename?: 'AllFeedbackQueryResponse', code: number, message?: string | null, total?: number | null, data?: Array<{ __typename?: 'Feedback', _id: string, content: string, seen?: boolean | null, createdAt: any, userId: { __typename?: 'User', _id: string, fullname: string, username: string, birthday?: any | null, phoneNumber: string, description?: string | null, email: string, address: string, idRegister: string, career_position?: string | null, company?: string | null, hash_url?: string | null, type?: ETypeUser | null, createdAt: any, isDeleted?: boolean | null, avatarConfig?: { __typename?: 'AvatarConfig', backgroundColor?: string | null, borderColor?: string | null, borderWidth?: number | null, borderRadius?: number | null, boxShadow?: number | null } | null, defaultTemplate?: { __typename?: 'Template', _id: string, template: string, colorIcon?: string | null, backgroundColor?: string | null, color?: string | null, background?: { __typename?: 'ImageS3', url: string } | null } | null, avatarS3?: { __typename?: 'ImageS3', _id: string, url: string, key: string, exp?: number | null } | null, list?: Array<{ __typename?: 'ContactItem', _id: string, name: string, type: string, no: number, content: string, owner?: string | null, shortName?: string | null, isDefault?: boolean | null }> | null, themeConfig?: { __typename?: 'ThemeConfig', backgroundColor?: string | null, color?: string | null, colorIcon?: string | null, fontFamily?: string | null, headingSubColor?: string | null, headingColor?: string | null, backgroundImage?: { __typename?: 'ImageS3', _id: string, url: string } | null } | null } }> | null } };

export type AllGoogleFontQueryVariables = Exact<{ [key: string]: never; }>;


export type AllGoogleFontQuery = { __typename?: 'Query', allGoogleFont: Array<{ __typename?: 'GoogleFont', category: string, subsets: Array<string>, family: string, kind: string, variants: Array<string>, files: any }> };

export type AllGroupAdminQueryVariables = Exact<{
  allGroupAdminInput: AllGroupAdminInput;
}>;


export type AllGroupAdminQuery = { __typename?: 'Query', allGroupAdmin: { __typename?: 'AllGroupQueryResponse', code: number, success: boolean, message?: string | null, total?: number | null, data?: Array<{ __typename?: 'Group', _id: string, title: string, createdAt: any, ownerId: { __typename?: 'User', _id: string, idRegister: string, fullname: string, avatarS3?: { __typename?: 'ImageS3', url: string } | null }, members: Array<{ __typename?: 'User', _id: string, fullname: string, career_position?: string | null, hash_url?: string | null, idRegister: string, avatarS3?: { __typename?: 'ImageS3', url: string } | null }> }> | null } };

export type AllGroupCustomerQueryVariables = Exact<{
  allGroupCustomerInput: AllGroupCustomerInput;
}>;


export type AllGroupCustomerQuery = { __typename?: 'Query', allGroupCustomer: { __typename?: 'AllGroupQueryResponse', code: number, success: boolean, message?: string | null, total?: number | null, data?: Array<{ __typename?: 'Group', _id: string, title: string, createdAt: any, ownerId: { __typename?: 'User', _id: string, idRegister: string, fullname: string, avatarS3?: { __typename?: 'ImageS3', url: string } | null }, members: Array<{ __typename?: 'User', _id: string, fullname: string, career_position?: string | null, hash_url?: string | null, idRegister: string, avatarS3?: { __typename?: 'ImageS3', url: string } | null }> }> | null } };

export type AllGroupUserQueryVariables = Exact<{ [key: string]: never; }>;


export type AllGroupUserQuery = { __typename?: 'Query', allGroupUser: { __typename?: 'AllGroupQueryResponse', code: number, success: boolean, message?: string | null, data?: Array<{ __typename?: 'Group', _id: string, title: string, createdAt: any, ownerId: { __typename?: 'User', _id: string, idRegister: string, fullname: string, avatarS3?: { __typename?: 'ImageS3', url: string } | null }, members: Array<{ __typename?: 'User', _id: string, fullname: string, career_position?: string | null, hash_url?: string | null, idRegister: string, avatarS3?: { __typename?: 'ImageS3', url: string } | null }> }> | null } };

export type AllInviteGroupQueryVariables = Exact<{ [key: string]: never; }>;


export type AllInviteGroupQuery = { __typename?: 'Query', allInviteGroup: { __typename?: 'AllInviteGroupQueryResponse', code: number, success: boolean, message?: string | null, data?: Array<{ __typename?: 'InviteGroup', _id: string, groupId: { __typename?: 'Group', _id: string, title: string }, userId: { __typename?: 'User', _id: string, fullname: string, hash_url?: string | null }, inviteUserId: { __typename?: 'User', _id: string, fullname: string, hash_url?: string | null } }> | null } };

export type AllNotificationQueryVariables = Exact<{
  allNotificationsInput: AllNotificationsInput;
}>;


export type AllNotificationQuery = { __typename?: 'Query', allNotifications: { __typename?: 'AllNotificationsResponse', total: number, data: Array<{ __typename?: 'Notification', _id: string, title: string, content?: string | null, action?: string | null, type?: ENotificationType | null, createdAt: any, senderId?: { __typename?: 'User', _id: string, fullname: string, username: string, birthday?: any | null, phoneNumber: string, description?: string | null, email: string, address: string, idRegister: string, career_position?: string | null, company?: string | null, hash_url?: string | null, type?: ETypeUser | null, createdAt: any, isDeleted?: boolean | null, avatarConfig?: { __typename?: 'AvatarConfig', backgroundColor?: string | null, borderColor?: string | null, borderWidth?: number | null, borderRadius?: number | null, boxShadow?: number | null } | null, defaultTemplate?: { __typename?: 'Template', _id: string, template: string, colorIcon?: string | null, backgroundColor?: string | null, color?: string | null, background?: { __typename?: 'ImageS3', url: string } | null } | null, avatarS3?: { __typename?: 'ImageS3', _id: string, url: string, key: string, exp?: number | null } | null, list?: Array<{ __typename?: 'ContactItem', _id: string, name: string, type: string, no: number, content: string, owner?: string | null, shortName?: string | null, isDefault?: boolean | null }> | null, themeConfig?: { __typename?: 'ThemeConfig', backgroundColor?: string | null, color?: string | null, colorIcon?: string | null, fontFamily?: string | null, headingSubColor?: string | null, headingColor?: string | null, backgroundImage?: { __typename?: 'ImageS3', _id: string, url: string } | null } | null } | null }> } };

export type AllTemplateAdminQueryVariables = Exact<{
  allTemplateAdminInput: AllTemplateAdminInput;
}>;


export type AllTemplateAdminQuery = { __typename?: 'Query', allTemplateAdmin: { __typename?: 'AllTemplateUserQueryResponse', code: number, message?: string | null, success: boolean, total?: number | null, data?: Array<{ __typename?: 'Template', _id: string, title: string, template: string, type?: ETemplateType | null, color?: string | null, colorIcon?: string | null, backgroundColor?: string | null, createdAt: any, background?: { __typename?: 'ImageS3', _id: string, url: string, key: string } | null, groupId?: { __typename?: 'Group', _id: string, title: string } | null }> | null } };

export type AllTemplateUserQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTemplateUserQuery = { __typename?: 'Query', allTemplateUser: { __typename?: 'AllTemplateUserQueryResponse', code: number, message?: string | null, success: boolean, total?: number | null, data?: Array<{ __typename?: 'Template', _id: string, title: string, template: string, type?: ETemplateType | null, color?: string | null, colorIcon?: string | null, backgroundColor?: string | null, createdAt: any, background?: { __typename?: 'ImageS3', _id: string, url: string, key: string } | null, groupId?: { __typename?: 'Group', _id: string, title: string } | null }> | null } };

export type AllUserBuyCardQueryVariables = Exact<{
  allUserBuyCardInput: AllUserBuyCardInput;
}>;


export type AllUserBuyCardQuery = { __typename?: 'Query', allUserBuyCard: { __typename?: 'UsersByCardResponse', total: number, data: Array<{ __typename?: 'UserRegister', _id: string, name?: string | null, code: string, email?: string | null, phoneNumber?: string | null, address?: string | null, status?: boolean | null, isUserDelete?: boolean | null, createdAt: any, userBuyCardGroupId?: { __typename?: 'UserBuyCardGroup', _id: string } | null }> } };

export type AllUserBuyCardGroupQueryVariables = Exact<{
  allUserBuyCardGroupInput: AllUserBuyCardGroupInput;
}>;


export type AllUserBuyCardGroupQuery = { __typename?: 'Query', allUserBuyCardGroup: { __typename?: 'AllUserBuyCardGroupResponse', code: number, success: boolean, message?: string | null, total?: number | null, data?: Array<{ __typename?: 'UserBuyCardGroup', _id: string, title: string, quantity: number, status?: boolean | null, totalActive?: number | null, createdAt: any, no?: string | null }> | null } };

export type BackgroundsS3QueryVariables = Exact<{ [key: string]: never; }>;


export type BackgroundsS3Query = { __typename?: 'Query', backgroundsS3: { __typename?: 'ImagesS3MutationResponse', images?: Array<{ __typename?: 'ImageS3', _id: string, url: string, key: string, exp?: number | null }> | null } };

export type FeedbackDetailUserQueryVariables = Exact<{
  page: Scalars['Float'];
  feedbackId: Scalars['String'];
}>;


export type FeedbackDetailUserQuery = { __typename?: 'Query', feedbackDetailUser: { __typename?: 'AllFeedbackUserQueryResponse', code: number, success: boolean, message?: string | null, total?: number | null, feedbackParent?: { __typename?: 'Feedback', _id: string, content: string, seen?: boolean | null, createdAt: any, userId: { __typename?: 'User', _id: string, fullname: string, username: string, birthday?: any | null, phoneNumber: string, description?: string | null, email: string, address: string, idRegister: string, career_position?: string | null, company?: string | null, hash_url?: string | null, type?: ETypeUser | null, createdAt: any, isDeleted?: boolean | null, avatarConfig?: { __typename?: 'AvatarConfig', backgroundColor?: string | null, borderColor?: string | null, borderWidth?: number | null, borderRadius?: number | null, boxShadow?: number | null } | null, defaultTemplate?: { __typename?: 'Template', _id: string, template: string, colorIcon?: string | null, backgroundColor?: string | null, color?: string | null, background?: { __typename?: 'ImageS3', url: string } | null } | null, avatarS3?: { __typename?: 'ImageS3', _id: string, url: string, key: string, exp?: number | null } | null, list?: Array<{ __typename?: 'ContactItem', _id: string, name: string, type: string, no: number, content: string, owner?: string | null, shortName?: string | null, isDefault?: boolean | null }> | null, themeConfig?: { __typename?: 'ThemeConfig', backgroundColor?: string | null, color?: string | null, colorIcon?: string | null, fontFamily?: string | null, headingSubColor?: string | null, headingColor?: string | null, backgroundImage?: { __typename?: 'ImageS3', _id: string, url: string } | null } | null } } | null, feedbackChildren?: Array<{ __typename?: 'Feedback', _id: string, content: string, seen?: boolean | null, createdAt: any, userId: { __typename?: 'User', _id: string, fullname: string, username: string, birthday?: any | null, phoneNumber: string, description?: string | null, email: string, address: string, idRegister: string, career_position?: string | null, company?: string | null, hash_url?: string | null, type?: ETypeUser | null, createdAt: any, isDeleted?: boolean | null, avatarConfig?: { __typename?: 'AvatarConfig', backgroundColor?: string | null, borderColor?: string | null, borderWidth?: number | null, borderRadius?: number | null, boxShadow?: number | null } | null, defaultTemplate?: { __typename?: 'Template', _id: string, template: string, colorIcon?: string | null, backgroundColor?: string | null, color?: string | null, background?: { __typename?: 'ImageS3', url: string } | null } | null, avatarS3?: { __typename?: 'ImageS3', _id: string, url: string, key: string, exp?: number | null } | null, list?: Array<{ __typename?: 'ContactItem', _id: string, name: string, type: string, no: number, content: string, owner?: string | null, shortName?: string | null, isDefault?: boolean | null }> | null, themeConfig?: { __typename?: 'ThemeConfig', backgroundColor?: string | null, color?: string | null, colorIcon?: string | null, fontFamily?: string | null, headingSubColor?: string | null, headingColor?: string | null, backgroundImage?: { __typename?: 'ImageS3', _id: string, url: string } | null } | null } }> | null } };

export type GroupByIdQueryVariables = Exact<{
  groupId?: InputMaybe<Scalars['String']>;
}>;


export type GroupByIdQuery = { __typename?: 'Query', groupById: { __typename?: 'GroupQueryResponse', code: number, success: boolean, message?: string | null, data?: { __typename?: 'Group', _id: string, title: string, createdAt: any, ownerId: { __typename?: 'User', _id: string, idRegister: string, fullname: string, avatarS3?: { __typename?: 'ImageS3', url: string } | null }, members: Array<{ __typename?: 'User', _id: string, fullname: string, career_position?: string | null, hash_url?: string | null, idRegister: string, avatarS3?: { __typename?: 'ImageS3', url: string } | null }> } | null } };

export type GetImagesS3QueryVariables = Exact<{ [key: string]: never; }>;


export type GetImagesS3Query = { __typename?: 'Query', getImagesS3: { __typename?: 'ImagesS3MutationResponse', code: number, success: boolean, message?: string | null, images?: Array<{ __typename?: 'ImageS3', _id: string, url: string, key: string }> | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'UserMutationResponse', accessToken?: string | null, code: number, success: boolean, message?: string | null, user?: { __typename?: 'User', _id: string, fullname: string, username: string, birthday?: any | null, phoneNumber: string, description?: string | null, email: string, address: string, idRegister: string, career_position?: string | null, company?: string | null, hash_url?: string | null, type?: ETypeUser | null, createdAt: any, isDeleted?: boolean | null, avatarConfig?: { __typename?: 'AvatarConfig', backgroundColor?: string | null, borderColor?: string | null, borderWidth?: number | null, borderRadius?: number | null, boxShadow?: number | null } | null, defaultTemplate?: { __typename?: 'Template', _id: string, template: string, colorIcon?: string | null, backgroundColor?: string | null, color?: string | null, background?: { __typename?: 'ImageS3', url: string } | null } | null, avatarS3?: { __typename?: 'ImageS3', _id: string, url: string, key: string, exp?: number | null } | null, list?: Array<{ __typename?: 'ContactItem', _id: string, name: string, type: string, no: number, content: string, owner?: string | null, shortName?: string | null, isDefault?: boolean | null }> | null, themeConfig?: { __typename?: 'ThemeConfig', backgroundColor?: string | null, color?: string | null, colorIcon?: string | null, fontFamily?: string | null, headingSubColor?: string | null, headingColor?: string | null, backgroundImage?: { __typename?: 'ImageS3', _id: string, url: string } | null } | null } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } | null };

export type ReportItemContactQueryVariables = Exact<{
  reportItemContactInput: ReportItemContactInput;
}>;


export type ReportItemContactQuery = { __typename?: 'Query', reportItemContact: { __typename?: 'ReportContactItemMutationResponse', code: number, success: boolean, message?: string | null, data: Array<{ __typename?: 'ReportContactItemDataResponse', label: string, count: number }> } };

export type ReportOverviewQueryVariables = Exact<{
  reportOverviewInput: ReportOverviewInput;
}>;


export type ReportOverviewQuery = { __typename?: 'Query', reportOverview: { __typename?: 'ReportOverviewMutationResponse', code: number, success: boolean, message?: string | null, data: Array<{ __typename?: 'ReportOverviewDataResponse', label: string, view: number, save: number }> } };

export type TemplateDetailQueryVariables = Exact<{
  templateId?: InputMaybe<Scalars['String']>;
}>;


export type TemplateDetailQuery = { __typename?: 'Query', templateDetail: { __typename?: 'TemplateDetailQueryResponse', code: number, message?: string | null, success: boolean, data?: { __typename?: 'Template', _id: string, title: string, template: string, type?: ETemplateType | null, color?: string | null, colorIcon?: string | null, backgroundColor?: string | null, createdAt: any, background?: { __typename?: 'ImageS3', _id: string, url: string, key: string } | null, groupId?: { __typename?: 'Group', _id: string, title: string } | null } | null } };

export type UserBuyCardGroupDetailQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type UserBuyCardGroupDetailQuery = { __typename?: 'Query', userBuyCardGroupDetail: { __typename?: 'UserBuyCardGroup', _id: string, title: string, quantity: number, totalActive?: number | null, status?: boolean | null, createdAt: any } };

export type UserQueryVariables = Exact<{
  idRegister: Scalars['String'];
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'UserMutationResponse', accessToken?: string | null, code: number, success: boolean, message?: string | null, user?: { __typename?: 'User', _id: string, fullname: string, username: string, birthday?: any | null, phoneNumber: string, description?: string | null, email: string, address: string, idRegister: string, career_position?: string | null, company?: string | null, hash_url?: string | null, type?: ETypeUser | null, createdAt: any, isDeleted?: boolean | null, avatarConfig?: { __typename?: 'AvatarConfig', backgroundColor?: string | null, borderColor?: string | null, borderWidth?: number | null, borderRadius?: number | null, boxShadow?: number | null } | null, defaultTemplate?: { __typename?: 'Template', _id: string, template: string, colorIcon?: string | null, backgroundColor?: string | null, color?: string | null, background?: { __typename?: 'ImageS3', url: string } | null } | null, avatarS3?: { __typename?: 'ImageS3', _id: string, url: string, key: string, exp?: number | null } | null, list?: Array<{ __typename?: 'ContactItem', _id: string, name: string, type: string, no: number, content: string, owner?: string | null, shortName?: string | null, isDefault?: boolean | null }> | null, themeConfig?: { __typename?: 'ThemeConfig', backgroundColor?: string | null, color?: string | null, colorIcon?: string | null, fontFamily?: string | null, headingSubColor?: string | null, headingColor?: string | null, backgroundImage?: { __typename?: 'ImageS3', _id: string, url: string } | null } | null } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } | null };

export type UserRegisterQueryVariables = Exact<{
  idRegister?: InputMaybe<Scalars['String']>;
}>;


export type UserRegisterQuery = { __typename?: 'Query', userRegister: { __typename?: 'UserRegister', _id: string, code: string, email?: string | null, name?: string | null, userBuyCardGroupId?: { __typename?: 'UserBuyCardGroup', _id: string } | null } };

export const AvatarConfigInfoFragmentDoc = gql`
    fragment avatarConfigInfo on AvatarConfig {
  backgroundColor
  borderColor
  borderWidth
  borderRadius
  boxShadow
}
    `;
export const TemplateUserInfoFragmentDoc = gql`
    fragment templateUserInfo on Template {
  _id
  template
  colorIcon
  backgroundColor
  color
  background {
    url
  }
}
    `;
export const ListContactFragmentDoc = gql`
    fragment listContact on User {
  list {
    _id
    name
    type
    no
    content
    owner
    shortName
    isDefault
  }
}
    `;
export const ThemeConfigFragmentDoc = gql`
    fragment themeConfig on User {
  themeConfig {
    backgroundImage {
      _id
      url
    }
    backgroundColor
    color
    colorIcon
    fontFamily
    headingSubColor
    headingColor
  }
}
    `;
export const UserInfoFragmentDoc = gql`
    fragment userInfo on User {
  _id
  fullname
  username
  birthday
  phoneNumber
  description
  email
  address
  idRegister
  career_position
  company
  hash_url
  type
  avatarConfig {
    ...avatarConfigInfo
  }
  defaultTemplate {
    ...templateUserInfo
  }
  ...listContact
  ...themeConfig
  avatarS3 {
    _id
    url
    key
    exp
  }
  createdAt
  isDeleted
}
    ${AvatarConfigInfoFragmentDoc}
${TemplateUserInfoFragmentDoc}
${ListContactFragmentDoc}
${ThemeConfigFragmentDoc}`;
export const FeedbackInfoFragmentDoc = gql`
    fragment feedbackInfo on Feedback {
  _id
  content
  userId {
    ...userInfo
  }
  seen
  createdAt
}
    ${UserInfoFragmentDoc}`;
export const MemberInfoFragmentDoc = gql`
    fragment memberInfo on User {
  _id
  fullname
  career_position
  hash_url
  idRegister
  avatarS3 {
    url
  }
}
    `;
export const GroupInfoFragmentDoc = gql`
    fragment groupInfo on Group {
  _id
  title
  ownerId {
    _id
    idRegister
    fullname
    avatarS3 {
      url
    }
  }
  members {
    ...memberInfo
  }
  createdAt
}
    ${MemberInfoFragmentDoc}`;
export const ImageInfoFragmentDoc = gql`
    fragment imageInfo on ImageS3 {
  _id
  url
  key
}
    `;
export const TemplateInfoFragmentDoc = gql`
    fragment templateInfo on Template {
  _id
  title
  template
  type
  background {
    ...imageInfo
  }
  color
  colorIcon
  groupId {
    _id
    title
  }
  backgroundColor
  createdAt
}
    ${ImageInfoFragmentDoc}`;
export const UserBuyCardGroupInfoFragmentDoc = gql`
    fragment userBuyCardGroupInfo on UserBuyCardGroup {
  _id
  title
  quantity
  status
  totalActive
  createdAt
  no
}
    `;
export const UserBuyCardInfoFragmentDoc = gql`
    fragment userBuyCardInfo on UserRegister {
  _id
  name
  code
  email
  phoneNumber
  address
  status
  isUserDelete
  userBuyCardGroupId {
    _id
  }
  createdAt
}
    `;
export const UserMutationStatusesFragmentDoc = gql`
    fragment userMutationStatuses on UserMutationResponse {
  code
  success
  message
}
    `;
export const FieldErrorFragmentDoc = gql`
    fragment fieldError on FieldError {
  field
  message
}
    `;
export const UserMutationResponseFragmentDoc = gql`
    fragment userMutationResponse on UserMutationResponse {
  ...userMutationStatuses
  user {
    ...userInfo
  }
  errors {
    ...fieldError
  }
  accessToken
}
    ${UserMutationStatusesFragmentDoc}
${UserInfoFragmentDoc}
${FieldErrorFragmentDoc}`;
export const UserRegisterInfoFragmentDoc = gql`
    fragment userRegisterInfo on UserRegister {
  _id
  code
  email
  name
  userBuyCardGroupId {
    _id
  }
}
    `;
export const AddContactDocument = gql`
    mutation AddContact($addContactInput: AddContactInput!) {
  addContact(addContactInput: $addContactInput) {
    ...userMutationResponse
  }
}
    ${UserMutationResponseFragmentDoc}`;
export type AddContactMutationFn = Apollo.MutationFunction<AddContactMutation, AddContactMutationVariables>;

/**
 * __useAddContactMutation__
 *
 * To run a mutation, you first call `useAddContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addContactMutation, { data, loading, error }] = useAddContactMutation({
 *   variables: {
 *      addContactInput: // value for 'addContactInput'
 *   },
 * });
 */
export function useAddContactMutation(baseOptions?: Apollo.MutationHookOptions<AddContactMutation, AddContactMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddContactMutation, AddContactMutationVariables>(AddContactDocument, options);
      }
export type AddContactMutationHookResult = ReturnType<typeof useAddContactMutation>;
export type AddContactMutationResult = Apollo.MutationResult<AddContactMutation>;
export type AddContactMutationOptions = Apollo.BaseMutationOptions<AddContactMutation, AddContactMutationVariables>;
export const SendFeedbackDocument = gql`
    mutation SendFeedback($addFeedbackInput: AddFeedbackInput!) {
  sendFeedback(addFeedbackInput: $addFeedbackInput)
}
    `;
export type SendFeedbackMutationFn = Apollo.MutationFunction<SendFeedbackMutation, SendFeedbackMutationVariables>;

/**
 * __useSendFeedbackMutation__
 *
 * To run a mutation, you first call `useSendFeedbackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendFeedbackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendFeedbackMutation, { data, loading, error }] = useSendFeedbackMutation({
 *   variables: {
 *      addFeedbackInput: // value for 'addFeedbackInput'
 *   },
 * });
 */
export function useSendFeedbackMutation(baseOptions?: Apollo.MutationHookOptions<SendFeedbackMutation, SendFeedbackMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendFeedbackMutation, SendFeedbackMutationVariables>(SendFeedbackDocument, options);
      }
export type SendFeedbackMutationHookResult = ReturnType<typeof useSendFeedbackMutation>;
export type SendFeedbackMutationResult = Apollo.MutationResult<SendFeedbackMutation>;
export type SendFeedbackMutationOptions = Apollo.BaseMutationOptions<SendFeedbackMutation, SendFeedbackMutationVariables>;
export const AddTemplateDocument = gql`
    mutation AddTemplate($addTemplateInput: AddTemplateInput!) {
  addTemplate(addTemplateInput: $addTemplateInput)
}
    `;
export type AddTemplateMutationFn = Apollo.MutationFunction<AddTemplateMutation, AddTemplateMutationVariables>;

/**
 * __useAddTemplateMutation__
 *
 * To run a mutation, you first call `useAddTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTemplateMutation, { data, loading, error }] = useAddTemplateMutation({
 *   variables: {
 *      addTemplateInput: // value for 'addTemplateInput'
 *   },
 * });
 */
export function useAddTemplateMutation(baseOptions?: Apollo.MutationHookOptions<AddTemplateMutation, AddTemplateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTemplateMutation, AddTemplateMutationVariables>(AddTemplateDocument, options);
      }
export type AddTemplateMutationHookResult = ReturnType<typeof useAddTemplateMutation>;
export type AddTemplateMutationResult = Apollo.MutationResult<AddTemplateMutation>;
export type AddTemplateMutationOptions = Apollo.BaseMutationOptions<AddTemplateMutation, AddTemplateMutationVariables>;
export const AdminResetPasswordDocument = gql`
    mutation AdminResetPassword($customerId: String!) {
  adminResetPassword(customerId: $customerId)
}
    `;
export type AdminResetPasswordMutationFn = Apollo.MutationFunction<AdminResetPasswordMutation, AdminResetPasswordMutationVariables>;

/**
 * __useAdminResetPasswordMutation__
 *
 * To run a mutation, you first call `useAdminResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminResetPasswordMutation, { data, loading, error }] = useAdminResetPasswordMutation({
 *   variables: {
 *      customerId: // value for 'customerId'
 *   },
 * });
 */
export function useAdminResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<AdminResetPasswordMutation, AdminResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AdminResetPasswordMutation, AdminResetPasswordMutationVariables>(AdminResetPasswordDocument, options);
      }
export type AdminResetPasswordMutationHookResult = ReturnType<typeof useAdminResetPasswordMutation>;
export type AdminResetPasswordMutationResult = Apollo.MutationResult<AdminResetPasswordMutation>;
export type AdminResetPasswordMutationOptions = Apollo.BaseMutationOptions<AdminResetPasswordMutation, AdminResetPasswordMutationVariables>;
export const SettingAvatarDocument = gql`
    mutation SettingAvatar($settingAvatarInput: SettingAvatarInput!) {
  settingAvatar(settingAvatarInput: $settingAvatarInput) {
    code
    message
    avatarConfig {
      ...avatarConfigInfo
    }
  }
}
    ${AvatarConfigInfoFragmentDoc}`;
export type SettingAvatarMutationFn = Apollo.MutationFunction<SettingAvatarMutation, SettingAvatarMutationVariables>;

/**
 * __useSettingAvatarMutation__
 *
 * To run a mutation, you first call `useSettingAvatarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSettingAvatarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [settingAvatarMutation, { data, loading, error }] = useSettingAvatarMutation({
 *   variables: {
 *      settingAvatarInput: // value for 'settingAvatarInput'
 *   },
 * });
 */
export function useSettingAvatarMutation(baseOptions?: Apollo.MutationHookOptions<SettingAvatarMutation, SettingAvatarMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SettingAvatarMutation, SettingAvatarMutationVariables>(SettingAvatarDocument, options);
      }
export type SettingAvatarMutationHookResult = ReturnType<typeof useSettingAvatarMutation>;
export type SettingAvatarMutationResult = Apollo.MutationResult<SettingAvatarMutation>;
export type SettingAvatarMutationOptions = Apollo.BaseMutationOptions<SettingAvatarMutation, SettingAvatarMutationVariables>;
export const ChangeConfigThemeDocument = gql`
    mutation ChangeConfigTheme($changeConfigThemeInput: ChangeConfigThemeInput!) {
  changeConfigTheme(changeConfigThemeInput: $changeConfigThemeInput) {
    ...userMutationResponse
  }
}
    ${UserMutationResponseFragmentDoc}`;
export type ChangeConfigThemeMutationFn = Apollo.MutationFunction<ChangeConfigThemeMutation, ChangeConfigThemeMutationVariables>;

/**
 * __useChangeConfigThemeMutation__
 *
 * To run a mutation, you first call `useChangeConfigThemeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeConfigThemeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeConfigThemeMutation, { data, loading, error }] = useChangeConfigThemeMutation({
 *   variables: {
 *      changeConfigThemeInput: // value for 'changeConfigThemeInput'
 *   },
 * });
 */
export function useChangeConfigThemeMutation(baseOptions?: Apollo.MutationHookOptions<ChangeConfigThemeMutation, ChangeConfigThemeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeConfigThemeMutation, ChangeConfigThemeMutationVariables>(ChangeConfigThemeDocument, options);
      }
export type ChangeConfigThemeMutationHookResult = ReturnType<typeof useChangeConfigThemeMutation>;
export type ChangeConfigThemeMutationResult = Apollo.MutationResult<ChangeConfigThemeMutation>;
export type ChangeConfigThemeMutationOptions = Apollo.BaseMutationOptions<ChangeConfigThemeMutation, ChangeConfigThemeMutationVariables>;
export const ChangeDefaultThemeDocument = gql`
    mutation ChangeDefaultTheme($themeId: String!) {
  changeDefaultTheme(themeId: $themeId) {
    ...userMutationResponse
  }
}
    ${UserMutationResponseFragmentDoc}`;
export type ChangeDefaultThemeMutationFn = Apollo.MutationFunction<ChangeDefaultThemeMutation, ChangeDefaultThemeMutationVariables>;

/**
 * __useChangeDefaultThemeMutation__
 *
 * To run a mutation, you first call `useChangeDefaultThemeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeDefaultThemeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeDefaultThemeMutation, { data, loading, error }] = useChangeDefaultThemeMutation({
 *   variables: {
 *      themeId: // value for 'themeId'
 *   },
 * });
 */
export function useChangeDefaultThemeMutation(baseOptions?: Apollo.MutationHookOptions<ChangeDefaultThemeMutation, ChangeDefaultThemeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeDefaultThemeMutation, ChangeDefaultThemeMutationVariables>(ChangeDefaultThemeDocument, options);
      }
export type ChangeDefaultThemeMutationHookResult = ReturnType<typeof useChangeDefaultThemeMutation>;
export type ChangeDefaultThemeMutationResult = Apollo.MutationResult<ChangeDefaultThemeMutation>;
export type ChangeDefaultThemeMutationOptions = Apollo.BaseMutationOptions<ChangeDefaultThemeMutation, ChangeDefaultThemeMutationVariables>;
export const ChangePaswordDocument = gql`
    mutation ChangePasword($changePasswordInput: ChangePasswordInput!) {
  changePassword(changePasswordInput: $changePasswordInput)
}
    `;
export type ChangePaswordMutationFn = Apollo.MutationFunction<ChangePaswordMutation, ChangePaswordMutationVariables>;

/**
 * __useChangePaswordMutation__
 *
 * To run a mutation, you first call `useChangePaswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePaswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePaswordMutation, { data, loading, error }] = useChangePaswordMutation({
 *   variables: {
 *      changePasswordInput: // value for 'changePasswordInput'
 *   },
 * });
 */
export function useChangePaswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePaswordMutation, ChangePaswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePaswordMutation, ChangePaswordMutationVariables>(ChangePaswordDocument, options);
      }
export type ChangePaswordMutationHookResult = ReturnType<typeof useChangePaswordMutation>;
export type ChangePaswordMutationResult = Apollo.MutationResult<ChangePaswordMutation>;
export type ChangePaswordMutationOptions = Apollo.BaseMutationOptions<ChangePaswordMutation, ChangePaswordMutationVariables>;
export const CreateGroupDocument = gql`
    mutation CreateGroup($createGroupInput: CreateGroupInput!) {
  createGroup(createGroupInput: $createGroupInput)
}
    `;
export type CreateGroupMutationFn = Apollo.MutationFunction<CreateGroupMutation, CreateGroupMutationVariables>;

/**
 * __useCreateGroupMutation__
 *
 * To run a mutation, you first call `useCreateGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGroupMutation, { data, loading, error }] = useCreateGroupMutation({
 *   variables: {
 *      createGroupInput: // value for 'createGroupInput'
 *   },
 * });
 */
export function useCreateGroupMutation(baseOptions?: Apollo.MutationHookOptions<CreateGroupMutation, CreateGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGroupMutation, CreateGroupMutationVariables>(CreateGroupDocument, options);
      }
export type CreateGroupMutationHookResult = ReturnType<typeof useCreateGroupMutation>;
export type CreateGroupMutationResult = Apollo.MutationResult<CreateGroupMutation>;
export type CreateGroupMutationOptions = Apollo.BaseMutationOptions<CreateGroupMutation, CreateGroupMutationVariables>;
export const CreateImageS3Document = gql`
    mutation CreateImageS3($createImageS3Input: CreateImageS3Input!) {
  createImageS3(createImageS3Input: $createImageS3Input) {
    code
    success
    message
    image {
      ...imageInfo
    }
  }
}
    ${ImageInfoFragmentDoc}`;
export type CreateImageS3MutationFn = Apollo.MutationFunction<CreateImageS3Mutation, CreateImageS3MutationVariables>;

/**
 * __useCreateImageS3Mutation__
 *
 * To run a mutation, you first call `useCreateImageS3Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateImageS3Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createImageS3Mutation, { data, loading, error }] = useCreateImageS3Mutation({
 *   variables: {
 *      createImageS3Input: // value for 'createImageS3Input'
 *   },
 * });
 */
export function useCreateImageS3Mutation(baseOptions?: Apollo.MutationHookOptions<CreateImageS3Mutation, CreateImageS3MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateImageS3Mutation, CreateImageS3MutationVariables>(CreateImageS3Document, options);
      }
export type CreateImageS3MutationHookResult = ReturnType<typeof useCreateImageS3Mutation>;
export type CreateImageS3MutationResult = Apollo.MutationResult<CreateImageS3Mutation>;
export type CreateImageS3MutationOptions = Apollo.BaseMutationOptions<CreateImageS3Mutation, CreateImageS3MutationVariables>;
export const CreateNotificationDocument = gql`
    mutation CreateNotification($createNotificationInput: CreateNotificationInput!) {
  createNotification(createNotificationInput: $createNotificationInput)
}
    `;
export type CreateNotificationMutationFn = Apollo.MutationFunction<CreateNotificationMutation, CreateNotificationMutationVariables>;

/**
 * __useCreateNotificationMutation__
 *
 * To run a mutation, you first call `useCreateNotificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNotificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNotificationMutation, { data, loading, error }] = useCreateNotificationMutation({
 *   variables: {
 *      createNotificationInput: // value for 'createNotificationInput'
 *   },
 * });
 */
export function useCreateNotificationMutation(baseOptions?: Apollo.MutationHookOptions<CreateNotificationMutation, CreateNotificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNotificationMutation, CreateNotificationMutationVariables>(CreateNotificationDocument, options);
      }
export type CreateNotificationMutationHookResult = ReturnType<typeof useCreateNotificationMutation>;
export type CreateNotificationMutationResult = Apollo.MutationResult<CreateNotificationMutation>;
export type CreateNotificationMutationOptions = Apollo.BaseMutationOptions<CreateNotificationMutation, CreateNotificationMutationVariables>;
export const CreateReportUserDocument = gql`
    mutation CreateReportUser($createReportUserInput: CreateReportUserInput!) {
  createReportUser(createReportUserInput: $createReportUserInput)
}
    `;
export type CreateReportUserMutationFn = Apollo.MutationFunction<CreateReportUserMutation, CreateReportUserMutationVariables>;

/**
 * __useCreateReportUserMutation__
 *
 * To run a mutation, you first call `useCreateReportUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReportUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReportUserMutation, { data, loading, error }] = useCreateReportUserMutation({
 *   variables: {
 *      createReportUserInput: // value for 'createReportUserInput'
 *   },
 * });
 */
export function useCreateReportUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateReportUserMutation, CreateReportUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateReportUserMutation, CreateReportUserMutationVariables>(CreateReportUserDocument, options);
      }
export type CreateReportUserMutationHookResult = ReturnType<typeof useCreateReportUserMutation>;
export type CreateReportUserMutationResult = Apollo.MutationResult<CreateReportUserMutation>;
export type CreateReportUserMutationOptions = Apollo.BaseMutationOptions<CreateReportUserMutation, CreateReportUserMutationVariables>;
export const AddUserBuyCardDocument = gql`
    mutation AddUserBuyCard($addUserBuyCardInput: AddUserBuyCardInput!) {
  addUserBuyCard(addUserBuyCardInput: $addUserBuyCardInput)
}
    `;
export type AddUserBuyCardMutationFn = Apollo.MutationFunction<AddUserBuyCardMutation, AddUserBuyCardMutationVariables>;

/**
 * __useAddUserBuyCardMutation__
 *
 * To run a mutation, you first call `useAddUserBuyCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserBuyCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserBuyCardMutation, { data, loading, error }] = useAddUserBuyCardMutation({
 *   variables: {
 *      addUserBuyCardInput: // value for 'addUserBuyCardInput'
 *   },
 * });
 */
export function useAddUserBuyCardMutation(baseOptions?: Apollo.MutationHookOptions<AddUserBuyCardMutation, AddUserBuyCardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddUserBuyCardMutation, AddUserBuyCardMutationVariables>(AddUserBuyCardDocument, options);
      }
export type AddUserBuyCardMutationHookResult = ReturnType<typeof useAddUserBuyCardMutation>;
export type AddUserBuyCardMutationResult = Apollo.MutationResult<AddUserBuyCardMutation>;
export type AddUserBuyCardMutationOptions = Apollo.BaseMutationOptions<AddUserBuyCardMutation, AddUserBuyCardMutationVariables>;
export const AddUserBuyCardGroupDocument = gql`
    mutation AddUserBuyCardGroup($addUserBuyCardGroupInput: AddUserBuyCardGroupInput!) {
  addUserBuyCardGroup(addUserBuyCardGroupInput: $addUserBuyCardGroupInput)
}
    `;
export type AddUserBuyCardGroupMutationFn = Apollo.MutationFunction<AddUserBuyCardGroupMutation, AddUserBuyCardGroupMutationVariables>;

/**
 * __useAddUserBuyCardGroupMutation__
 *
 * To run a mutation, you first call `useAddUserBuyCardGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserBuyCardGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserBuyCardGroupMutation, { data, loading, error }] = useAddUserBuyCardGroupMutation({
 *   variables: {
 *      addUserBuyCardGroupInput: // value for 'addUserBuyCardGroupInput'
 *   },
 * });
 */
export function useAddUserBuyCardGroupMutation(baseOptions?: Apollo.MutationHookOptions<AddUserBuyCardGroupMutation, AddUserBuyCardGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddUserBuyCardGroupMutation, AddUserBuyCardGroupMutationVariables>(AddUserBuyCardGroupDocument, options);
      }
export type AddUserBuyCardGroupMutationHookResult = ReturnType<typeof useAddUserBuyCardGroupMutation>;
export type AddUserBuyCardGroupMutationResult = Apollo.MutationResult<AddUserBuyCardGroupMutation>;
export type AddUserBuyCardGroupMutationOptions = Apollo.BaseMutationOptions<AddUserBuyCardGroupMutation, AddUserBuyCardGroupMutationVariables>;
export const DeleteFeedbackDocument = gql`
    mutation DeleteFeedback($feedbackId: String!) {
  deleteFeedback(feedbackId: $feedbackId)
}
    `;
export type DeleteFeedbackMutationFn = Apollo.MutationFunction<DeleteFeedbackMutation, DeleteFeedbackMutationVariables>;

/**
 * __useDeleteFeedbackMutation__
 *
 * To run a mutation, you first call `useDeleteFeedbackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFeedbackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFeedbackMutation, { data, loading, error }] = useDeleteFeedbackMutation({
 *   variables: {
 *      feedbackId: // value for 'feedbackId'
 *   },
 * });
 */
export function useDeleteFeedbackMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFeedbackMutation, DeleteFeedbackMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFeedbackMutation, DeleteFeedbackMutationVariables>(DeleteFeedbackDocument, options);
      }
export type DeleteFeedbackMutationHookResult = ReturnType<typeof useDeleteFeedbackMutation>;
export type DeleteFeedbackMutationResult = Apollo.MutationResult<DeleteFeedbackMutation>;
export type DeleteFeedbackMutationOptions = Apollo.BaseMutationOptions<DeleteFeedbackMutation, DeleteFeedbackMutationVariables>;
export const DeleteNotificationDocument = gql`
    mutation DeleteNotification($notificationId: String!) {
  deleteNotification(notificationId: $notificationId)
}
    `;
export type DeleteNotificationMutationFn = Apollo.MutationFunction<DeleteNotificationMutation, DeleteNotificationMutationVariables>;

/**
 * __useDeleteNotificationMutation__
 *
 * To run a mutation, you first call `useDeleteNotificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteNotificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteNotificationMutation, { data, loading, error }] = useDeleteNotificationMutation({
 *   variables: {
 *      notificationId: // value for 'notificationId'
 *   },
 * });
 */
export function useDeleteNotificationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteNotificationMutation, DeleteNotificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteNotificationMutation, DeleteNotificationMutationVariables>(DeleteNotificationDocument, options);
      }
export type DeleteNotificationMutationHookResult = ReturnType<typeof useDeleteNotificationMutation>;
export type DeleteNotificationMutationResult = Apollo.MutationResult<DeleteNotificationMutation>;
export type DeleteNotificationMutationOptions = Apollo.BaseMutationOptions<DeleteNotificationMutation, DeleteNotificationMutationVariables>;
export const DeleteUserBuyCardDocument = gql`
    mutation DeleteUserBuyCard($userBuyCardId: String!) {
  deleteUserBuyCard(userBuyCardId: $userBuyCardId)
}
    `;
export type DeleteUserBuyCardMutationFn = Apollo.MutationFunction<DeleteUserBuyCardMutation, DeleteUserBuyCardMutationVariables>;

/**
 * __useDeleteUserBuyCardMutation__
 *
 * To run a mutation, you first call `useDeleteUserBuyCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserBuyCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserBuyCardMutation, { data, loading, error }] = useDeleteUserBuyCardMutation({
 *   variables: {
 *      userBuyCardId: // value for 'userBuyCardId'
 *   },
 * });
 */
export function useDeleteUserBuyCardMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserBuyCardMutation, DeleteUserBuyCardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserBuyCardMutation, DeleteUserBuyCardMutationVariables>(DeleteUserBuyCardDocument, options);
      }
export type DeleteUserBuyCardMutationHookResult = ReturnType<typeof useDeleteUserBuyCardMutation>;
export type DeleteUserBuyCardMutationResult = Apollo.MutationResult<DeleteUserBuyCardMutation>;
export type DeleteUserBuyCardMutationOptions = Apollo.BaseMutationOptions<DeleteUserBuyCardMutation, DeleteUserBuyCardMutationVariables>;
export const DeleteUserBuyCardGroupDocument = gql`
    mutation deleteUserBuyCardGroup($groupId: String!, $passwordConfirm: String!) {
  deleteUserBuyCardGroup(groupId: $groupId, passwordConfirm: $passwordConfirm)
}
    `;
export type DeleteUserBuyCardGroupMutationFn = Apollo.MutationFunction<DeleteUserBuyCardGroupMutation, DeleteUserBuyCardGroupMutationVariables>;

/**
 * __useDeleteUserBuyCardGroupMutation__
 *
 * To run a mutation, you first call `useDeleteUserBuyCardGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserBuyCardGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserBuyCardGroupMutation, { data, loading, error }] = useDeleteUserBuyCardGroupMutation({
 *   variables: {
 *      groupId: // value for 'groupId'
 *      passwordConfirm: // value for 'passwordConfirm'
 *   },
 * });
 */
export function useDeleteUserBuyCardGroupMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserBuyCardGroupMutation, DeleteUserBuyCardGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserBuyCardGroupMutation, DeleteUserBuyCardGroupMutationVariables>(DeleteUserBuyCardGroupDocument, options);
      }
export type DeleteUserBuyCardGroupMutationHookResult = ReturnType<typeof useDeleteUserBuyCardGroupMutation>;
export type DeleteUserBuyCardGroupMutationResult = Apollo.MutationResult<DeleteUserBuyCardGroupMutation>;
export type DeleteUserBuyCardGroupMutationOptions = Apollo.BaseMutationOptions<DeleteUserBuyCardGroupMutation, DeleteUserBuyCardGroupMutationVariables>;
export const DeleteGroupDocument = gql`
    mutation DeleteGroup($groupId: String!) {
  deleteGroup(groupId: $groupId)
}
    `;
export type DeleteGroupMutationFn = Apollo.MutationFunction<DeleteGroupMutation, DeleteGroupMutationVariables>;

/**
 * __useDeleteGroupMutation__
 *
 * To run a mutation, you first call `useDeleteGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGroupMutation, { data, loading, error }] = useDeleteGroupMutation({
 *   variables: {
 *      groupId: // value for 'groupId'
 *   },
 * });
 */
export function useDeleteGroupMutation(baseOptions?: Apollo.MutationHookOptions<DeleteGroupMutation, DeleteGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteGroupMutation, DeleteGroupMutationVariables>(DeleteGroupDocument, options);
      }
export type DeleteGroupMutationHookResult = ReturnType<typeof useDeleteGroupMutation>;
export type DeleteGroupMutationResult = Apollo.MutationResult<DeleteGroupMutation>;
export type DeleteGroupMutationOptions = Apollo.BaseMutationOptions<DeleteGroupMutation, DeleteGroupMutationVariables>;
export const EditContactDocument = gql`
    mutation EditContact($editContactInput: EditContactInput!) {
  editContact(editContactInput: $editContactInput) {
    ...userMutationResponse
  }
}
    ${UserMutationResponseFragmentDoc}`;
export type EditContactMutationFn = Apollo.MutationFunction<EditContactMutation, EditContactMutationVariables>;

/**
 * __useEditContactMutation__
 *
 * To run a mutation, you first call `useEditContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editContactMutation, { data, loading, error }] = useEditContactMutation({
 *   variables: {
 *      editContactInput: // value for 'editContactInput'
 *   },
 * });
 */
export function useEditContactMutation(baseOptions?: Apollo.MutationHookOptions<EditContactMutation, EditContactMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditContactMutation, EditContactMutationVariables>(EditContactDocument, options);
      }
export type EditContactMutationHookResult = ReturnType<typeof useEditContactMutation>;
export type EditContactMutationResult = Apollo.MutationResult<EditContactMutation>;
export type EditContactMutationOptions = Apollo.BaseMutationOptions<EditContactMutation, EditContactMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email) {
    code
    success
    message
    token
  }
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const GeneralUserBuyCardDocument = gql`
    mutation GeneralUserBuyCard($userBuyCardGroupId: String!) {
  generalUserBuyCard(userBuyCardGroupId: $userBuyCardGroupId)
}
    `;
export type GeneralUserBuyCardMutationFn = Apollo.MutationFunction<GeneralUserBuyCardMutation, GeneralUserBuyCardMutationVariables>;

/**
 * __useGeneralUserBuyCardMutation__
 *
 * To run a mutation, you first call `useGeneralUserBuyCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGeneralUserBuyCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generalUserBuyCardMutation, { data, loading, error }] = useGeneralUserBuyCardMutation({
 *   variables: {
 *      userBuyCardGroupId: // value for 'userBuyCardGroupId'
 *   },
 * });
 */
export function useGeneralUserBuyCardMutation(baseOptions?: Apollo.MutationHookOptions<GeneralUserBuyCardMutation, GeneralUserBuyCardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GeneralUserBuyCardMutation, GeneralUserBuyCardMutationVariables>(GeneralUserBuyCardDocument, options);
      }
export type GeneralUserBuyCardMutationHookResult = ReturnType<typeof useGeneralUserBuyCardMutation>;
export type GeneralUserBuyCardMutationResult = Apollo.MutationResult<GeneralUserBuyCardMutation>;
export type GeneralUserBuyCardMutationOptions = Apollo.BaseMutationOptions<GeneralUserBuyCardMutation, GeneralUserBuyCardMutationVariables>;
export const GetAllUserBuyCardGroupDocument = gql`
    mutation GetAllUserBuyCardGroup($userBuyCardGroupId: String!, $status: Boolean) {
  getAllUserBuyCardGroup(userBuyCardGroupId: $userBuyCardGroupId, status: $status) {
    ...userBuyCardInfo
  }
}
    ${UserBuyCardInfoFragmentDoc}`;
export type GetAllUserBuyCardGroupMutationFn = Apollo.MutationFunction<GetAllUserBuyCardGroupMutation, GetAllUserBuyCardGroupMutationVariables>;

/**
 * __useGetAllUserBuyCardGroupMutation__
 *
 * To run a mutation, you first call `useGetAllUserBuyCardGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetAllUserBuyCardGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getAllUserBuyCardGroupMutation, { data, loading, error }] = useGetAllUserBuyCardGroupMutation({
 *   variables: {
 *      userBuyCardGroupId: // value for 'userBuyCardGroupId'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useGetAllUserBuyCardGroupMutation(baseOptions?: Apollo.MutationHookOptions<GetAllUserBuyCardGroupMutation, GetAllUserBuyCardGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetAllUserBuyCardGroupMutation, GetAllUserBuyCardGroupMutationVariables>(GetAllUserBuyCardGroupDocument, options);
      }
export type GetAllUserBuyCardGroupMutationHookResult = ReturnType<typeof useGetAllUserBuyCardGroupMutation>;
export type GetAllUserBuyCardGroupMutationResult = Apollo.MutationResult<GetAllUserBuyCardGroupMutation>;
export type GetAllUserBuyCardGroupMutationOptions = Apollo.BaseMutationOptions<GetAllUserBuyCardGroupMutation, GetAllUserBuyCardGroupMutationVariables>;
export const InviteMemberGroupDocument = gql`
    mutation InviteMemberGroup($groupId: String!, $userId: String!) {
  inviteMemberGroup(groupId: $groupId, userId: $userId)
}
    `;
export type InviteMemberGroupMutationFn = Apollo.MutationFunction<InviteMemberGroupMutation, InviteMemberGroupMutationVariables>;

/**
 * __useInviteMemberGroupMutation__
 *
 * To run a mutation, you first call `useInviteMemberGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInviteMemberGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [inviteMemberGroupMutation, { data, loading, error }] = useInviteMemberGroupMutation({
 *   variables: {
 *      groupId: // value for 'groupId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useInviteMemberGroupMutation(baseOptions?: Apollo.MutationHookOptions<InviteMemberGroupMutation, InviteMemberGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InviteMemberGroupMutation, InviteMemberGroupMutationVariables>(InviteMemberGroupDocument, options);
      }
export type InviteMemberGroupMutationHookResult = ReturnType<typeof useInviteMemberGroupMutation>;
export type InviteMemberGroupMutationResult = Apollo.MutationResult<InviteMemberGroupMutation>;
export type InviteMemberGroupMutationOptions = Apollo.BaseMutationOptions<InviteMemberGroupMutation, InviteMemberGroupMutationVariables>;
export const LoginDocument = gql`
    mutation Login($loginInput: LoginInput!) {
  login(loginInput: $loginInput) {
    ...userMutationResponse
  }
}
    ${UserMutationResponseFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginInput: // value for 'loginInput'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RemoveContactItemDocument = gql`
    mutation RemoveContactItem($idContactItem: String!) {
  removeContactItem(idContactItem: $idContactItem) {
    message
    code
    success
    user {
      ...userInfo
    }
  }
}
    ${UserInfoFragmentDoc}`;
export type RemoveContactItemMutationFn = Apollo.MutationFunction<RemoveContactItemMutation, RemoveContactItemMutationVariables>;

/**
 * __useRemoveContactItemMutation__
 *
 * To run a mutation, you first call `useRemoveContactItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveContactItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeContactItemMutation, { data, loading, error }] = useRemoveContactItemMutation({
 *   variables: {
 *      idContactItem: // value for 'idContactItem'
 *   },
 * });
 */
export function useRemoveContactItemMutation(baseOptions?: Apollo.MutationHookOptions<RemoveContactItemMutation, RemoveContactItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveContactItemMutation, RemoveContactItemMutationVariables>(RemoveContactItemDocument, options);
      }
export type RemoveContactItemMutationHookResult = ReturnType<typeof useRemoveContactItemMutation>;
export type RemoveContactItemMutationResult = Apollo.MutationResult<RemoveContactItemMutation>;
export type RemoveContactItemMutationOptions = Apollo.BaseMutationOptions<RemoveContactItemMutation, RemoveContactItemMutationVariables>;
export const RemoveInviteGroupDocument = gql`
    mutation RemoveInviteGroup($removeInviteGroupInput: RemoveInviteGroupInput!) {
  removeInviteGroup(removeInviteGroupInput: $removeInviteGroupInput)
}
    `;
export type RemoveInviteGroupMutationFn = Apollo.MutationFunction<RemoveInviteGroupMutation, RemoveInviteGroupMutationVariables>;

/**
 * __useRemoveInviteGroupMutation__
 *
 * To run a mutation, you first call `useRemoveInviteGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveInviteGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeInviteGroupMutation, { data, loading, error }] = useRemoveInviteGroupMutation({
 *   variables: {
 *      removeInviteGroupInput: // value for 'removeInviteGroupInput'
 *   },
 * });
 */
export function useRemoveInviteGroupMutation(baseOptions?: Apollo.MutationHookOptions<RemoveInviteGroupMutation, RemoveInviteGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveInviteGroupMutation, RemoveInviteGroupMutationVariables>(RemoveInviteGroupDocument, options);
      }
export type RemoveInviteGroupMutationHookResult = ReturnType<typeof useRemoveInviteGroupMutation>;
export type RemoveInviteGroupMutationResult = Apollo.MutationResult<RemoveInviteGroupMutation>;
export type RemoveInviteGroupMutationOptions = Apollo.BaseMutationOptions<RemoveInviteGroupMutation, RemoveInviteGroupMutationVariables>;
export const RemoveMemberGroupDocument = gql`
    mutation RemoveMemberGroup($groupId: String!, $memberId: String!) {
  removeMemberGroup(groupId: $groupId, memberId: $memberId)
}
    `;
export type RemoveMemberGroupMutationFn = Apollo.MutationFunction<RemoveMemberGroupMutation, RemoveMemberGroupMutationVariables>;

/**
 * __useRemoveMemberGroupMutation__
 *
 * To run a mutation, you first call `useRemoveMemberGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveMemberGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeMemberGroupMutation, { data, loading, error }] = useRemoveMemberGroupMutation({
 *   variables: {
 *      groupId: // value for 'groupId'
 *      memberId: // value for 'memberId'
 *   },
 * });
 */
export function useRemoveMemberGroupMutation(baseOptions?: Apollo.MutationHookOptions<RemoveMemberGroupMutation, RemoveMemberGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveMemberGroupMutation, RemoveMemberGroupMutationVariables>(RemoveMemberGroupDocument, options);
      }
export type RemoveMemberGroupMutationHookResult = ReturnType<typeof useRemoveMemberGroupMutation>;
export type RemoveMemberGroupMutationResult = Apollo.MutationResult<RemoveMemberGroupMutation>;
export type RemoveMemberGroupMutationOptions = Apollo.BaseMutationOptions<RemoveMemberGroupMutation, RemoveMemberGroupMutationVariables>;
export const ResetAccountDocument = gql`
    mutation ResetAccount($customerId: String!) {
  resetAccount(customerId: $customerId)
}
    `;
export type ResetAccountMutationFn = Apollo.MutationFunction<ResetAccountMutation, ResetAccountMutationVariables>;

/**
 * __useResetAccountMutation__
 *
 * To run a mutation, you first call `useResetAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetAccountMutation, { data, loading, error }] = useResetAccountMutation({
 *   variables: {
 *      customerId: // value for 'customerId'
 *   },
 * });
 */
export function useResetAccountMutation(baseOptions?: Apollo.MutationHookOptions<ResetAccountMutation, ResetAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetAccountMutation, ResetAccountMutationVariables>(ResetAccountDocument, options);
      }
export type ResetAccountMutationHookResult = ReturnType<typeof useResetAccountMutation>;
export type ResetAccountMutationResult = Apollo.MutationResult<ResetAccountMutation>;
export type ResetAccountMutationOptions = Apollo.BaseMutationOptions<ResetAccountMutation, ResetAccountMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($resetPasswordInput: ResetPasswordInput!) {
  resetPassword(resetPasswordInput: $resetPasswordInput) {
    code
    success
    message
  }
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      resetPasswordInput: // value for 'resetPasswordInput'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const SignupDocument = gql`
    mutation Signup($signupInput: SignupInput!) {
  signup(signupInput: $signupInput) {
    ...userMutationResponse
  }
}
    ${UserMutationResponseFragmentDoc}`;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      signupInput: // value for 'signupInput'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const SortAddressDocument = gql`
    mutation SortAddress($startIndex: String!, $endIndex: String!) {
  sortAddress(startIndex: $startIndex, endIndex: $endIndex)
}
    `;
export type SortAddressMutationFn = Apollo.MutationFunction<SortAddressMutation, SortAddressMutationVariables>;

/**
 * __useSortAddressMutation__
 *
 * To run a mutation, you first call `useSortAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSortAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sortAddressMutation, { data, loading, error }] = useSortAddressMutation({
 *   variables: {
 *      startIndex: // value for 'startIndex'
 *      endIndex: // value for 'endIndex'
 *   },
 * });
 */
export function useSortAddressMutation(baseOptions?: Apollo.MutationHookOptions<SortAddressMutation, SortAddressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SortAddressMutation, SortAddressMutationVariables>(SortAddressDocument, options);
      }
export type SortAddressMutationHookResult = ReturnType<typeof useSortAddressMutation>;
export type SortAddressMutationResult = Apollo.MutationResult<SortAddressMutation>;
export type SortAddressMutationOptions = Apollo.BaseMutationOptions<SortAddressMutation, SortAddressMutationVariables>;
export const ToggleDefaultWebsiteDocument = gql`
    mutation ToggleDefaultWebsite($id: String!, $isDefault: Boolean!) {
  toggleDefaultWebsite(id: $id, isDefault: $isDefault)
}
    `;
export type ToggleDefaultWebsiteMutationFn = Apollo.MutationFunction<ToggleDefaultWebsiteMutation, ToggleDefaultWebsiteMutationVariables>;

/**
 * __useToggleDefaultWebsiteMutation__
 *
 * To run a mutation, you first call `useToggleDefaultWebsiteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleDefaultWebsiteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleDefaultWebsiteMutation, { data, loading, error }] = useToggleDefaultWebsiteMutation({
 *   variables: {
 *      id: // value for 'id'
 *      isDefault: // value for 'isDefault'
 *   },
 * });
 */
export function useToggleDefaultWebsiteMutation(baseOptions?: Apollo.MutationHookOptions<ToggleDefaultWebsiteMutation, ToggleDefaultWebsiteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleDefaultWebsiteMutation, ToggleDefaultWebsiteMutationVariables>(ToggleDefaultWebsiteDocument, options);
      }
export type ToggleDefaultWebsiteMutationHookResult = ReturnType<typeof useToggleDefaultWebsiteMutation>;
export type ToggleDefaultWebsiteMutationResult = Apollo.MutationResult<ToggleDefaultWebsiteMutation>;
export type ToggleDefaultWebsiteMutationOptions = Apollo.BaseMutationOptions<ToggleDefaultWebsiteMutation, ToggleDefaultWebsiteMutationVariables>;
export const UpdateGroupDocument = gql`
    mutation UpdateGroup($updateGroupInput: UpdateGroupInput!) {
  updateGroup(updateGroupInput: $updateGroupInput)
}
    `;
export type UpdateGroupMutationFn = Apollo.MutationFunction<UpdateGroupMutation, UpdateGroupMutationVariables>;

/**
 * __useUpdateGroupMutation__
 *
 * To run a mutation, you first call `useUpdateGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGroupMutation, { data, loading, error }] = useUpdateGroupMutation({
 *   variables: {
 *      updateGroupInput: // value for 'updateGroupInput'
 *   },
 * });
 */
export function useUpdateGroupMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGroupMutation, UpdateGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateGroupMutation, UpdateGroupMutationVariables>(UpdateGroupDocument, options);
      }
export type UpdateGroupMutationHookResult = ReturnType<typeof useUpdateGroupMutation>;
export type UpdateGroupMutationResult = Apollo.MutationResult<UpdateGroupMutation>;
export type UpdateGroupMutationOptions = Apollo.BaseMutationOptions<UpdateGroupMutation, UpdateGroupMutationVariables>;
export const UpdateTemplateDocument = gql`
    mutation UpdateTemplate($updateTemplateInput: UpdateTemplateInput!) {
  updateTemplate(updateTemplateInput: $updateTemplateInput)
}
    `;
export type UpdateTemplateMutationFn = Apollo.MutationFunction<UpdateTemplateMutation, UpdateTemplateMutationVariables>;

/**
 * __useUpdateTemplateMutation__
 *
 * To run a mutation, you first call `useUpdateTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTemplateMutation, { data, loading, error }] = useUpdateTemplateMutation({
 *   variables: {
 *      updateTemplateInput: // value for 'updateTemplateInput'
 *   },
 * });
 */
export function useUpdateTemplateMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTemplateMutation, UpdateTemplateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTemplateMutation, UpdateTemplateMutationVariables>(UpdateTemplateDocument, options);
      }
export type UpdateTemplateMutationHookResult = ReturnType<typeof useUpdateTemplateMutation>;
export type UpdateTemplateMutationResult = Apollo.MutationResult<UpdateTemplateMutation>;
export type UpdateTemplateMutationOptions = Apollo.BaseMutationOptions<UpdateTemplateMutation, UpdateTemplateMutationVariables>;
export const UpdateUserBuyCardDocument = gql`
    mutation UpdateUserBuyCard($updateUserBuyCardInput: UpdateUserBuyCardInput!) {
  updateUserBuyCard(updateUserBuyCardInput: $updateUserBuyCardInput)
}
    `;
export type UpdateUserBuyCardMutationFn = Apollo.MutationFunction<UpdateUserBuyCardMutation, UpdateUserBuyCardMutationVariables>;

/**
 * __useUpdateUserBuyCardMutation__
 *
 * To run a mutation, you first call `useUpdateUserBuyCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserBuyCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserBuyCardMutation, { data, loading, error }] = useUpdateUserBuyCardMutation({
 *   variables: {
 *      updateUserBuyCardInput: // value for 'updateUserBuyCardInput'
 *   },
 * });
 */
export function useUpdateUserBuyCardMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserBuyCardMutation, UpdateUserBuyCardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserBuyCardMutation, UpdateUserBuyCardMutationVariables>(UpdateUserBuyCardDocument, options);
      }
export type UpdateUserBuyCardMutationHookResult = ReturnType<typeof useUpdateUserBuyCardMutation>;
export type UpdateUserBuyCardMutationResult = Apollo.MutationResult<UpdateUserBuyCardMutation>;
export type UpdateUserBuyCardMutationOptions = Apollo.BaseMutationOptions<UpdateUserBuyCardMutation, UpdateUserBuyCardMutationVariables>;
export const UpdateUserInfoDocument = gql`
    mutation UpdateUserInfo($updateUserInfoInput: UpdateUserInfoInput!) {
  updateUserInfo(updateUserInfoInput: $updateUserInfoInput) {
    ...userMutationResponse
  }
}
    ${UserMutationResponseFragmentDoc}`;
export type UpdateUserInfoMutationFn = Apollo.MutationFunction<UpdateUserInfoMutation, UpdateUserInfoMutationVariables>;

/**
 * __useUpdateUserInfoMutation__
 *
 * To run a mutation, you first call `useUpdateUserInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserInfoMutation, { data, loading, error }] = useUpdateUserInfoMutation({
 *   variables: {
 *      updateUserInfoInput: // value for 'updateUserInfoInput'
 *   },
 * });
 */
export function useUpdateUserInfoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserInfoMutation, UpdateUserInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserInfoMutation, UpdateUserInfoMutationVariables>(UpdateUserInfoDocument, options);
      }
export type UpdateUserInfoMutationHookResult = ReturnType<typeof useUpdateUserInfoMutation>;
export type UpdateUserInfoMutationResult = Apollo.MutationResult<UpdateUserInfoMutation>;
export type UpdateUserInfoMutationOptions = Apollo.BaseMutationOptions<UpdateUserInfoMutation, UpdateUserInfoMutationVariables>;
export const AdminReportOverviewDocument = gql`
    query AdminReportOverview {
  adminReportOverview {
    customerNew {
      key
      valueCurrent
      valuePrevious
    }
    buyCardNew {
      key
      valueCurrent
      valuePrevious
    }
    allCustomer {
      key
      valueCurrent
      valuePrevious
    }
    groups {
      key
      valueCurrent
      valuePrevious
    }
  }
}
    `;

/**
 * __useAdminReportOverviewQuery__
 *
 * To run a query within a React component, call `useAdminReportOverviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminReportOverviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminReportOverviewQuery({
 *   variables: {
 *   },
 * });
 */
export function useAdminReportOverviewQuery(baseOptions?: Apollo.QueryHookOptions<AdminReportOverviewQuery, AdminReportOverviewQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdminReportOverviewQuery, AdminReportOverviewQueryVariables>(AdminReportOverviewDocument, options);
      }
export function useAdminReportOverviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminReportOverviewQuery, AdminReportOverviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdminReportOverviewQuery, AdminReportOverviewQueryVariables>(AdminReportOverviewDocument, options);
        }
export type AdminReportOverviewQueryHookResult = ReturnType<typeof useAdminReportOverviewQuery>;
export type AdminReportOverviewLazyQueryHookResult = ReturnType<typeof useAdminReportOverviewLazyQuery>;
export type AdminReportOverviewQueryResult = Apollo.QueryResult<AdminReportOverviewQuery, AdminReportOverviewQueryVariables>;
export const AllCustomerDocument = gql`
    query AllCustomer($allCustomerInput: AllCustomerInput!) {
  allCustomer(allCustomerInput: $allCustomerInput) {
    total
    data {
      ...userInfo
    }
  }
}
    ${UserInfoFragmentDoc}`;

/**
 * __useAllCustomerQuery__
 *
 * To run a query within a React component, call `useAllCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCustomerQuery({
 *   variables: {
 *      allCustomerInput: // value for 'allCustomerInput'
 *   },
 * });
 */
export function useAllCustomerQuery(baseOptions: Apollo.QueryHookOptions<AllCustomerQuery, AllCustomerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllCustomerQuery, AllCustomerQueryVariables>(AllCustomerDocument, options);
      }
export function useAllCustomerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllCustomerQuery, AllCustomerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllCustomerQuery, AllCustomerQueryVariables>(AllCustomerDocument, options);
        }
export type AllCustomerQueryHookResult = ReturnType<typeof useAllCustomerQuery>;
export type AllCustomerLazyQueryHookResult = ReturnType<typeof useAllCustomerLazyQuery>;
export type AllCustomerQueryResult = Apollo.QueryResult<AllCustomerQuery, AllCustomerQueryVariables>;
export const AllFeedbackDocument = gql`
    query AllFeedback($page: Float!, $perPage: Float!, $isParent: Boolean) {
  allFeedback(page: $page, perPage: $perPage, isParent: $isParent) {
    code
    success
    message
    total
    data {
      ...feedbackInfo
    }
  }
}
    ${FeedbackInfoFragmentDoc}`;

/**
 * __useAllFeedbackQuery__
 *
 * To run a query within a React component, call `useAllFeedbackQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllFeedbackQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllFeedbackQuery({
 *   variables: {
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *      isParent: // value for 'isParent'
 *   },
 * });
 */
export function useAllFeedbackQuery(baseOptions: Apollo.QueryHookOptions<AllFeedbackQuery, AllFeedbackQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllFeedbackQuery, AllFeedbackQueryVariables>(AllFeedbackDocument, options);
      }
export function useAllFeedbackLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllFeedbackQuery, AllFeedbackQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllFeedbackQuery, AllFeedbackQueryVariables>(AllFeedbackDocument, options);
        }
export type AllFeedbackQueryHookResult = ReturnType<typeof useAllFeedbackQuery>;
export type AllFeedbackLazyQueryHookResult = ReturnType<typeof useAllFeedbackLazyQuery>;
export type AllFeedbackQueryResult = Apollo.QueryResult<AllFeedbackQuery, AllFeedbackQueryVariables>;
export const AllFeedbackUserDocument = gql`
    query AllFeedbackUser($page: Float!) {
  allFeedbackUser(page: $page) {
    code
    message
    data {
      ...feedbackInfo
    }
    total
  }
}
    ${FeedbackInfoFragmentDoc}`;

/**
 * __useAllFeedbackUserQuery__
 *
 * To run a query within a React component, call `useAllFeedbackUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllFeedbackUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllFeedbackUserQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useAllFeedbackUserQuery(baseOptions: Apollo.QueryHookOptions<AllFeedbackUserQuery, AllFeedbackUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllFeedbackUserQuery, AllFeedbackUserQueryVariables>(AllFeedbackUserDocument, options);
      }
export function useAllFeedbackUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllFeedbackUserQuery, AllFeedbackUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllFeedbackUserQuery, AllFeedbackUserQueryVariables>(AllFeedbackUserDocument, options);
        }
export type AllFeedbackUserQueryHookResult = ReturnType<typeof useAllFeedbackUserQuery>;
export type AllFeedbackUserLazyQueryHookResult = ReturnType<typeof useAllFeedbackUserLazyQuery>;
export type AllFeedbackUserQueryResult = Apollo.QueryResult<AllFeedbackUserQuery, AllFeedbackUserQueryVariables>;
export const AllGoogleFontDocument = gql`
    query AllGoogleFont {
  allGoogleFont {
    category
    subsets
    family
    kind
    variants
    files
  }
}
    `;

/**
 * __useAllGoogleFontQuery__
 *
 * To run a query within a React component, call `useAllGoogleFontQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllGoogleFontQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllGoogleFontQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllGoogleFontQuery(baseOptions?: Apollo.QueryHookOptions<AllGoogleFontQuery, AllGoogleFontQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllGoogleFontQuery, AllGoogleFontQueryVariables>(AllGoogleFontDocument, options);
      }
export function useAllGoogleFontLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllGoogleFontQuery, AllGoogleFontQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllGoogleFontQuery, AllGoogleFontQueryVariables>(AllGoogleFontDocument, options);
        }
export type AllGoogleFontQueryHookResult = ReturnType<typeof useAllGoogleFontQuery>;
export type AllGoogleFontLazyQueryHookResult = ReturnType<typeof useAllGoogleFontLazyQuery>;
export type AllGoogleFontQueryResult = Apollo.QueryResult<AllGoogleFontQuery, AllGoogleFontQueryVariables>;
export const AllGroupAdminDocument = gql`
    query AllGroupAdmin($allGroupAdminInput: AllGroupAdminInput!) {
  allGroupAdmin(allGroupAdminInput: $allGroupAdminInput) {
    code
    success
    message
    total
    data {
      ...groupInfo
    }
  }
}
    ${GroupInfoFragmentDoc}`;

/**
 * __useAllGroupAdminQuery__
 *
 * To run a query within a React component, call `useAllGroupAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllGroupAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllGroupAdminQuery({
 *   variables: {
 *      allGroupAdminInput: // value for 'allGroupAdminInput'
 *   },
 * });
 */
export function useAllGroupAdminQuery(baseOptions: Apollo.QueryHookOptions<AllGroupAdminQuery, AllGroupAdminQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllGroupAdminQuery, AllGroupAdminQueryVariables>(AllGroupAdminDocument, options);
      }
export function useAllGroupAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllGroupAdminQuery, AllGroupAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllGroupAdminQuery, AllGroupAdminQueryVariables>(AllGroupAdminDocument, options);
        }
export type AllGroupAdminQueryHookResult = ReturnType<typeof useAllGroupAdminQuery>;
export type AllGroupAdminLazyQueryHookResult = ReturnType<typeof useAllGroupAdminLazyQuery>;
export type AllGroupAdminQueryResult = Apollo.QueryResult<AllGroupAdminQuery, AllGroupAdminQueryVariables>;
export const AllGroupCustomerDocument = gql`
    query AllGroupCustomer($allGroupCustomerInput: AllGroupCustomerInput!) {
  allGroupCustomer(allGroupCustomerInput: $allGroupCustomerInput) {
    code
    success
    message
    total
    data {
      ...groupInfo
    }
  }
}
    ${GroupInfoFragmentDoc}`;

/**
 * __useAllGroupCustomerQuery__
 *
 * To run a query within a React component, call `useAllGroupCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllGroupCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllGroupCustomerQuery({
 *   variables: {
 *      allGroupCustomerInput: // value for 'allGroupCustomerInput'
 *   },
 * });
 */
export function useAllGroupCustomerQuery(baseOptions: Apollo.QueryHookOptions<AllGroupCustomerQuery, AllGroupCustomerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllGroupCustomerQuery, AllGroupCustomerQueryVariables>(AllGroupCustomerDocument, options);
      }
export function useAllGroupCustomerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllGroupCustomerQuery, AllGroupCustomerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllGroupCustomerQuery, AllGroupCustomerQueryVariables>(AllGroupCustomerDocument, options);
        }
export type AllGroupCustomerQueryHookResult = ReturnType<typeof useAllGroupCustomerQuery>;
export type AllGroupCustomerLazyQueryHookResult = ReturnType<typeof useAllGroupCustomerLazyQuery>;
export type AllGroupCustomerQueryResult = Apollo.QueryResult<AllGroupCustomerQuery, AllGroupCustomerQueryVariables>;
export const AllGroupUserDocument = gql`
    query AllGroupUser {
  allGroupUser {
    code
    success
    message
    data {
      ...groupInfo
    }
  }
}
    ${GroupInfoFragmentDoc}`;

/**
 * __useAllGroupUserQuery__
 *
 * To run a query within a React component, call `useAllGroupUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllGroupUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllGroupUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllGroupUserQuery(baseOptions?: Apollo.QueryHookOptions<AllGroupUserQuery, AllGroupUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllGroupUserQuery, AllGroupUserQueryVariables>(AllGroupUserDocument, options);
      }
export function useAllGroupUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllGroupUserQuery, AllGroupUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllGroupUserQuery, AllGroupUserQueryVariables>(AllGroupUserDocument, options);
        }
export type AllGroupUserQueryHookResult = ReturnType<typeof useAllGroupUserQuery>;
export type AllGroupUserLazyQueryHookResult = ReturnType<typeof useAllGroupUserLazyQuery>;
export type AllGroupUserQueryResult = Apollo.QueryResult<AllGroupUserQuery, AllGroupUserQueryVariables>;
export const AllInviteGroupDocument = gql`
    query AllInviteGroup {
  allInviteGroup {
    code
    success
    message
    data {
      _id
      groupId {
        _id
        title
      }
      userId {
        _id
        fullname
        hash_url
      }
      inviteUserId {
        _id
        fullname
        hash_url
      }
    }
  }
}
    `;

/**
 * __useAllInviteGroupQuery__
 *
 * To run a query within a React component, call `useAllInviteGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllInviteGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllInviteGroupQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllInviteGroupQuery(baseOptions?: Apollo.QueryHookOptions<AllInviteGroupQuery, AllInviteGroupQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllInviteGroupQuery, AllInviteGroupQueryVariables>(AllInviteGroupDocument, options);
      }
export function useAllInviteGroupLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllInviteGroupQuery, AllInviteGroupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllInviteGroupQuery, AllInviteGroupQueryVariables>(AllInviteGroupDocument, options);
        }
export type AllInviteGroupQueryHookResult = ReturnType<typeof useAllInviteGroupQuery>;
export type AllInviteGroupLazyQueryHookResult = ReturnType<typeof useAllInviteGroupLazyQuery>;
export type AllInviteGroupQueryResult = Apollo.QueryResult<AllInviteGroupQuery, AllInviteGroupQueryVariables>;
export const AllNotificationDocument = gql`
    query AllNotification($allNotificationsInput: AllNotificationsInput!) {
  allNotifications(allNotificationsInput: $allNotificationsInput) {
    total
    data {
      _id
      title
      content
      senderId {
        ...userInfo
      }
      action
      type
      createdAt
    }
  }
}
    ${UserInfoFragmentDoc}`;

/**
 * __useAllNotificationQuery__
 *
 * To run a query within a React component, call `useAllNotificationQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllNotificationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllNotificationQuery({
 *   variables: {
 *      allNotificationsInput: // value for 'allNotificationsInput'
 *   },
 * });
 */
export function useAllNotificationQuery(baseOptions: Apollo.QueryHookOptions<AllNotificationQuery, AllNotificationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllNotificationQuery, AllNotificationQueryVariables>(AllNotificationDocument, options);
      }
export function useAllNotificationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllNotificationQuery, AllNotificationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllNotificationQuery, AllNotificationQueryVariables>(AllNotificationDocument, options);
        }
export type AllNotificationQueryHookResult = ReturnType<typeof useAllNotificationQuery>;
export type AllNotificationLazyQueryHookResult = ReturnType<typeof useAllNotificationLazyQuery>;
export type AllNotificationQueryResult = Apollo.QueryResult<AllNotificationQuery, AllNotificationQueryVariables>;
export const AllTemplateAdminDocument = gql`
    query AllTemplateAdmin($allTemplateAdminInput: AllTemplateAdminInput!) {
  allTemplateAdmin(allTemplateAdminInput: $allTemplateAdminInput) {
    code
    message
    success
    total
    data {
      ...templateInfo
    }
  }
}
    ${TemplateInfoFragmentDoc}`;

/**
 * __useAllTemplateAdminQuery__
 *
 * To run a query within a React component, call `useAllTemplateAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTemplateAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTemplateAdminQuery({
 *   variables: {
 *      allTemplateAdminInput: // value for 'allTemplateAdminInput'
 *   },
 * });
 */
export function useAllTemplateAdminQuery(baseOptions: Apollo.QueryHookOptions<AllTemplateAdminQuery, AllTemplateAdminQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllTemplateAdminQuery, AllTemplateAdminQueryVariables>(AllTemplateAdminDocument, options);
      }
export function useAllTemplateAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTemplateAdminQuery, AllTemplateAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllTemplateAdminQuery, AllTemplateAdminQueryVariables>(AllTemplateAdminDocument, options);
        }
export type AllTemplateAdminQueryHookResult = ReturnType<typeof useAllTemplateAdminQuery>;
export type AllTemplateAdminLazyQueryHookResult = ReturnType<typeof useAllTemplateAdminLazyQuery>;
export type AllTemplateAdminQueryResult = Apollo.QueryResult<AllTemplateAdminQuery, AllTemplateAdminQueryVariables>;
export const AllTemplateUserDocument = gql`
    query AllTemplateUser {
  allTemplateUser {
    code
    message
    success
    total
    data {
      ...templateInfo
    }
  }
}
    ${TemplateInfoFragmentDoc}`;

/**
 * __useAllTemplateUserQuery__
 *
 * To run a query within a React component, call `useAllTemplateUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTemplateUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTemplateUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTemplateUserQuery(baseOptions?: Apollo.QueryHookOptions<AllTemplateUserQuery, AllTemplateUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllTemplateUserQuery, AllTemplateUserQueryVariables>(AllTemplateUserDocument, options);
      }
export function useAllTemplateUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTemplateUserQuery, AllTemplateUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllTemplateUserQuery, AllTemplateUserQueryVariables>(AllTemplateUserDocument, options);
        }
export type AllTemplateUserQueryHookResult = ReturnType<typeof useAllTemplateUserQuery>;
export type AllTemplateUserLazyQueryHookResult = ReturnType<typeof useAllTemplateUserLazyQuery>;
export type AllTemplateUserQueryResult = Apollo.QueryResult<AllTemplateUserQuery, AllTemplateUserQueryVariables>;
export const AllUserBuyCardDocument = gql`
    query AllUserBuyCard($allUserBuyCardInput: AllUserBuyCardInput!) {
  allUserBuyCard(allUserBuyCardInput: $allUserBuyCardInput) {
    total
    data {
      ...userBuyCardInfo
    }
  }
}
    ${UserBuyCardInfoFragmentDoc}`;

/**
 * __useAllUserBuyCardQuery__
 *
 * To run a query within a React component, call `useAllUserBuyCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUserBuyCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUserBuyCardQuery({
 *   variables: {
 *      allUserBuyCardInput: // value for 'allUserBuyCardInput'
 *   },
 * });
 */
export function useAllUserBuyCardQuery(baseOptions: Apollo.QueryHookOptions<AllUserBuyCardQuery, AllUserBuyCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllUserBuyCardQuery, AllUserBuyCardQueryVariables>(AllUserBuyCardDocument, options);
      }
export function useAllUserBuyCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUserBuyCardQuery, AllUserBuyCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllUserBuyCardQuery, AllUserBuyCardQueryVariables>(AllUserBuyCardDocument, options);
        }
export type AllUserBuyCardQueryHookResult = ReturnType<typeof useAllUserBuyCardQuery>;
export type AllUserBuyCardLazyQueryHookResult = ReturnType<typeof useAllUserBuyCardLazyQuery>;
export type AllUserBuyCardQueryResult = Apollo.QueryResult<AllUserBuyCardQuery, AllUserBuyCardQueryVariables>;
export const AllUserBuyCardGroupDocument = gql`
    query AllUserBuyCardGroup($allUserBuyCardGroupInput: AllUserBuyCardGroupInput!) {
  allUserBuyCardGroup(allUserBuyCardGroupInput: $allUserBuyCardGroupInput) {
    code
    success
    message
    data {
      ...userBuyCardGroupInfo
    }
    total
  }
}
    ${UserBuyCardGroupInfoFragmentDoc}`;

/**
 * __useAllUserBuyCardGroupQuery__
 *
 * To run a query within a React component, call `useAllUserBuyCardGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUserBuyCardGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUserBuyCardGroupQuery({
 *   variables: {
 *      allUserBuyCardGroupInput: // value for 'allUserBuyCardGroupInput'
 *   },
 * });
 */
export function useAllUserBuyCardGroupQuery(baseOptions: Apollo.QueryHookOptions<AllUserBuyCardGroupQuery, AllUserBuyCardGroupQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllUserBuyCardGroupQuery, AllUserBuyCardGroupQueryVariables>(AllUserBuyCardGroupDocument, options);
      }
export function useAllUserBuyCardGroupLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUserBuyCardGroupQuery, AllUserBuyCardGroupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllUserBuyCardGroupQuery, AllUserBuyCardGroupQueryVariables>(AllUserBuyCardGroupDocument, options);
        }
export type AllUserBuyCardGroupQueryHookResult = ReturnType<typeof useAllUserBuyCardGroupQuery>;
export type AllUserBuyCardGroupLazyQueryHookResult = ReturnType<typeof useAllUserBuyCardGroupLazyQuery>;
export type AllUserBuyCardGroupQueryResult = Apollo.QueryResult<AllUserBuyCardGroupQuery, AllUserBuyCardGroupQueryVariables>;
export const BackgroundsS3Document = gql`
    query BackgroundsS3 {
  backgroundsS3 {
    images {
      _id
      url
      key
      exp
    }
  }
}
    `;

/**
 * __useBackgroundsS3Query__
 *
 * To run a query within a React component, call `useBackgroundsS3Query` and pass it any options that fit your needs.
 * When your component renders, `useBackgroundsS3Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBackgroundsS3Query({
 *   variables: {
 *   },
 * });
 */
export function useBackgroundsS3Query(baseOptions?: Apollo.QueryHookOptions<BackgroundsS3Query, BackgroundsS3QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BackgroundsS3Query, BackgroundsS3QueryVariables>(BackgroundsS3Document, options);
      }
export function useBackgroundsS3LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BackgroundsS3Query, BackgroundsS3QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BackgroundsS3Query, BackgroundsS3QueryVariables>(BackgroundsS3Document, options);
        }
export type BackgroundsS3QueryHookResult = ReturnType<typeof useBackgroundsS3Query>;
export type BackgroundsS3LazyQueryHookResult = ReturnType<typeof useBackgroundsS3LazyQuery>;
export type BackgroundsS3QueryResult = Apollo.QueryResult<BackgroundsS3Query, BackgroundsS3QueryVariables>;
export const FeedbackDetailUserDocument = gql`
    query FeedbackDetailUser($page: Float!, $feedbackId: String!) {
  feedbackDetailUser(page: $page, feedbackId: $feedbackId) {
    code
    success
    message
    total
    feedbackParent {
      ...feedbackInfo
    }
    feedbackChildren {
      ...feedbackInfo
    }
  }
}
    ${FeedbackInfoFragmentDoc}`;

/**
 * __useFeedbackDetailUserQuery__
 *
 * To run a query within a React component, call `useFeedbackDetailUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeedbackDetailUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeedbackDetailUserQuery({
 *   variables: {
 *      page: // value for 'page'
 *      feedbackId: // value for 'feedbackId'
 *   },
 * });
 */
export function useFeedbackDetailUserQuery(baseOptions: Apollo.QueryHookOptions<FeedbackDetailUserQuery, FeedbackDetailUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FeedbackDetailUserQuery, FeedbackDetailUserQueryVariables>(FeedbackDetailUserDocument, options);
      }
export function useFeedbackDetailUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FeedbackDetailUserQuery, FeedbackDetailUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FeedbackDetailUserQuery, FeedbackDetailUserQueryVariables>(FeedbackDetailUserDocument, options);
        }
export type FeedbackDetailUserQueryHookResult = ReturnType<typeof useFeedbackDetailUserQuery>;
export type FeedbackDetailUserLazyQueryHookResult = ReturnType<typeof useFeedbackDetailUserLazyQuery>;
export type FeedbackDetailUserQueryResult = Apollo.QueryResult<FeedbackDetailUserQuery, FeedbackDetailUserQueryVariables>;
export const GroupByIdDocument = gql`
    query GroupById($groupId: String) {
  groupById(groupId: $groupId) {
    code
    success
    message
    data {
      ...groupInfo
    }
  }
}
    ${GroupInfoFragmentDoc}`;

/**
 * __useGroupByIdQuery__
 *
 * To run a query within a React component, call `useGroupByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupByIdQuery({
 *   variables: {
 *      groupId: // value for 'groupId'
 *   },
 * });
 */
export function useGroupByIdQuery(baseOptions?: Apollo.QueryHookOptions<GroupByIdQuery, GroupByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GroupByIdQuery, GroupByIdQueryVariables>(GroupByIdDocument, options);
      }
export function useGroupByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GroupByIdQuery, GroupByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GroupByIdQuery, GroupByIdQueryVariables>(GroupByIdDocument, options);
        }
export type GroupByIdQueryHookResult = ReturnType<typeof useGroupByIdQuery>;
export type GroupByIdLazyQueryHookResult = ReturnType<typeof useGroupByIdLazyQuery>;
export type GroupByIdQueryResult = Apollo.QueryResult<GroupByIdQuery, GroupByIdQueryVariables>;
export const GetImagesS3Document = gql`
    query GetImagesS3 {
  getImagesS3 {
    code
    success
    message
    images {
      ...imageInfo
    }
  }
}
    ${ImageInfoFragmentDoc}`;

/**
 * __useGetImagesS3Query__
 *
 * To run a query within a React component, call `useGetImagesS3Query` and pass it any options that fit your needs.
 * When your component renders, `useGetImagesS3Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetImagesS3Query({
 *   variables: {
 *   },
 * });
 */
export function useGetImagesS3Query(baseOptions?: Apollo.QueryHookOptions<GetImagesS3Query, GetImagesS3QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetImagesS3Query, GetImagesS3QueryVariables>(GetImagesS3Document, options);
      }
export function useGetImagesS3LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetImagesS3Query, GetImagesS3QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetImagesS3Query, GetImagesS3QueryVariables>(GetImagesS3Document, options);
        }
export type GetImagesS3QueryHookResult = ReturnType<typeof useGetImagesS3Query>;
export type GetImagesS3LazyQueryHookResult = ReturnType<typeof useGetImagesS3LazyQuery>;
export type GetImagesS3QueryResult = Apollo.QueryResult<GetImagesS3Query, GetImagesS3QueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...userMutationResponse
  }
}
    ${UserMutationResponseFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const ReportItemContactDocument = gql`
    query ReportItemContact($reportItemContactInput: ReportItemContactInput!) {
  reportItemContact(reportItemContactInput: $reportItemContactInput) {
    code
    success
    message
    data {
      label
      count
    }
  }
}
    `;

/**
 * __useReportItemContactQuery__
 *
 * To run a query within a React component, call `useReportItemContactQuery` and pass it any options that fit your needs.
 * When your component renders, `useReportItemContactQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReportItemContactQuery({
 *   variables: {
 *      reportItemContactInput: // value for 'reportItemContactInput'
 *   },
 * });
 */
export function useReportItemContactQuery(baseOptions: Apollo.QueryHookOptions<ReportItemContactQuery, ReportItemContactQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReportItemContactQuery, ReportItemContactQueryVariables>(ReportItemContactDocument, options);
      }
export function useReportItemContactLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReportItemContactQuery, ReportItemContactQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReportItemContactQuery, ReportItemContactQueryVariables>(ReportItemContactDocument, options);
        }
export type ReportItemContactQueryHookResult = ReturnType<typeof useReportItemContactQuery>;
export type ReportItemContactLazyQueryHookResult = ReturnType<typeof useReportItemContactLazyQuery>;
export type ReportItemContactQueryResult = Apollo.QueryResult<ReportItemContactQuery, ReportItemContactQueryVariables>;
export const ReportOverviewDocument = gql`
    query ReportOverview($reportOverviewInput: ReportOverviewInput!) {
  reportOverview(reportOverviewInput: $reportOverviewInput) {
    code
    success
    message
    data {
      label
      view
      save
    }
  }
}
    `;

/**
 * __useReportOverviewQuery__
 *
 * To run a query within a React component, call `useReportOverviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useReportOverviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReportOverviewQuery({
 *   variables: {
 *      reportOverviewInput: // value for 'reportOverviewInput'
 *   },
 * });
 */
export function useReportOverviewQuery(baseOptions: Apollo.QueryHookOptions<ReportOverviewQuery, ReportOverviewQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReportOverviewQuery, ReportOverviewQueryVariables>(ReportOverviewDocument, options);
      }
export function useReportOverviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReportOverviewQuery, ReportOverviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReportOverviewQuery, ReportOverviewQueryVariables>(ReportOverviewDocument, options);
        }
export type ReportOverviewQueryHookResult = ReturnType<typeof useReportOverviewQuery>;
export type ReportOverviewLazyQueryHookResult = ReturnType<typeof useReportOverviewLazyQuery>;
export type ReportOverviewQueryResult = Apollo.QueryResult<ReportOverviewQuery, ReportOverviewQueryVariables>;
export const TemplateDetailDocument = gql`
    query TemplateDetail($templateId: String) {
  templateDetail(templateId: $templateId) {
    code
    message
    success
    data {
      ...templateInfo
    }
  }
}
    ${TemplateInfoFragmentDoc}`;

/**
 * __useTemplateDetailQuery__
 *
 * To run a query within a React component, call `useTemplateDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useTemplateDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTemplateDetailQuery({
 *   variables: {
 *      templateId: // value for 'templateId'
 *   },
 * });
 */
export function useTemplateDetailQuery(baseOptions?: Apollo.QueryHookOptions<TemplateDetailQuery, TemplateDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TemplateDetailQuery, TemplateDetailQueryVariables>(TemplateDetailDocument, options);
      }
export function useTemplateDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TemplateDetailQuery, TemplateDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TemplateDetailQuery, TemplateDetailQueryVariables>(TemplateDetailDocument, options);
        }
export type TemplateDetailQueryHookResult = ReturnType<typeof useTemplateDetailQuery>;
export type TemplateDetailLazyQueryHookResult = ReturnType<typeof useTemplateDetailLazyQuery>;
export type TemplateDetailQueryResult = Apollo.QueryResult<TemplateDetailQuery, TemplateDetailQueryVariables>;
export const UserBuyCardGroupDetailDocument = gql`
    query UserBuyCardGroupDetail($id: String) {
  userBuyCardGroupDetail(id: $id) {
    _id
    title
    quantity
    totalActive
    status
    createdAt
  }
}
    `;

/**
 * __useUserBuyCardGroupDetailQuery__
 *
 * To run a query within a React component, call `useUserBuyCardGroupDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserBuyCardGroupDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserBuyCardGroupDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserBuyCardGroupDetailQuery(baseOptions?: Apollo.QueryHookOptions<UserBuyCardGroupDetailQuery, UserBuyCardGroupDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserBuyCardGroupDetailQuery, UserBuyCardGroupDetailQueryVariables>(UserBuyCardGroupDetailDocument, options);
      }
export function useUserBuyCardGroupDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserBuyCardGroupDetailQuery, UserBuyCardGroupDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserBuyCardGroupDetailQuery, UserBuyCardGroupDetailQueryVariables>(UserBuyCardGroupDetailDocument, options);
        }
export type UserBuyCardGroupDetailQueryHookResult = ReturnType<typeof useUserBuyCardGroupDetailQuery>;
export type UserBuyCardGroupDetailLazyQueryHookResult = ReturnType<typeof useUserBuyCardGroupDetailLazyQuery>;
export type UserBuyCardGroupDetailQueryResult = Apollo.QueryResult<UserBuyCardGroupDetailQuery, UserBuyCardGroupDetailQueryVariables>;
export const UserDocument = gql`
    query User($idRegister: String!) {
  user(idRegister: $idRegister) {
    ...userMutationResponse
  }
}
    ${UserMutationResponseFragmentDoc}`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      idRegister: // value for 'idRegister'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const UserRegisterDocument = gql`
    query UserRegister($idRegister: String) {
  userRegister(idRegister: $idRegister) {
    ...userRegisterInfo
  }
}
    ${UserRegisterInfoFragmentDoc}`;

/**
 * __useUserRegisterQuery__
 *
 * To run a query within a React component, call `useUserRegisterQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserRegisterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserRegisterQuery({
 *   variables: {
 *      idRegister: // value for 'idRegister'
 *   },
 * });
 */
export function useUserRegisterQuery(baseOptions?: Apollo.QueryHookOptions<UserRegisterQuery, UserRegisterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserRegisterQuery, UserRegisterQueryVariables>(UserRegisterDocument, options);
      }
export function useUserRegisterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserRegisterQuery, UserRegisterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserRegisterQuery, UserRegisterQueryVariables>(UserRegisterDocument, options);
        }
export type UserRegisterQueryHookResult = ReturnType<typeof useUserRegisterQuery>;
export type UserRegisterLazyQueryHookResult = ReturnType<typeof useUserRegisterLazyQuery>;
export type UserRegisterQueryResult = Apollo.QueryResult<UserRegisterQuery, UserRegisterQueryVariables>;
export const namedOperations = {
  Query: {
    AdminReportOverview: 'AdminReportOverview',
    AllCustomer: 'AllCustomer',
    AllFeedback: 'AllFeedback',
    AllFeedbackUser: 'AllFeedbackUser',
    AllGoogleFont: 'AllGoogleFont',
    AllGroupAdmin: 'AllGroupAdmin',
    AllGroupCustomer: 'AllGroupCustomer',
    AllGroupUser: 'AllGroupUser',
    AllInviteGroup: 'AllInviteGroup',
    AllNotification: 'AllNotification',
    AllTemplateAdmin: 'AllTemplateAdmin',
    AllTemplateUser: 'AllTemplateUser',
    AllUserBuyCard: 'AllUserBuyCard',
    AllUserBuyCardGroup: 'AllUserBuyCardGroup',
    BackgroundsS3: 'BackgroundsS3',
    FeedbackDetailUser: 'FeedbackDetailUser',
    GroupById: 'GroupById',
    GetImagesS3: 'GetImagesS3',
    Me: 'Me',
    ReportItemContact: 'ReportItemContact',
    ReportOverview: 'ReportOverview',
    TemplateDetail: 'TemplateDetail',
    UserBuyCardGroupDetail: 'UserBuyCardGroupDetail',
    User: 'User',
    UserRegister: 'UserRegister'
  },
  Mutation: {
    AddContact: 'AddContact',
    SendFeedback: 'SendFeedback',
    AddTemplate: 'AddTemplate',
    AdminResetPassword: 'AdminResetPassword',
    SettingAvatar: 'SettingAvatar',
    ChangeConfigTheme: 'ChangeConfigTheme',
    ChangeDefaultTheme: 'ChangeDefaultTheme',
    ChangePasword: 'ChangePasword',
    CreateGroup: 'CreateGroup',
    CreateImageS3: 'CreateImageS3',
    CreateNotification: 'CreateNotification',
    CreateReportUser: 'CreateReportUser',
    AddUserBuyCard: 'AddUserBuyCard',
    AddUserBuyCardGroup: 'AddUserBuyCardGroup',
    DeleteFeedback: 'DeleteFeedback',
    DeleteNotification: 'DeleteNotification',
    DeleteUserBuyCard: 'DeleteUserBuyCard',
    deleteUserBuyCardGroup: 'deleteUserBuyCardGroup',
    DeleteGroup: 'DeleteGroup',
    EditContact: 'EditContact',
    ForgotPassword: 'ForgotPassword',
    GeneralUserBuyCard: 'GeneralUserBuyCard',
    GetAllUserBuyCardGroup: 'GetAllUserBuyCardGroup',
    InviteMemberGroup: 'InviteMemberGroup',
    Login: 'Login',
    RemoveContactItem: 'RemoveContactItem',
    RemoveInviteGroup: 'RemoveInviteGroup',
    RemoveMemberGroup: 'RemoveMemberGroup',
    ResetAccount: 'ResetAccount',
    ResetPassword: 'ResetPassword',
    Signup: 'Signup',
    SortAddress: 'SortAddress',
    ToggleDefaultWebsite: 'ToggleDefaultWebsite',
    UpdateGroup: 'UpdateGroup',
    UpdateTemplate: 'UpdateTemplate',
    UpdateUserBuyCard: 'UpdateUserBuyCard',
    UpdateUserInfo: 'UpdateUserInfo'
  },
  Fragment: {
    avatarConfigInfo: 'avatarConfigInfo',
    feedbackInfo: 'feedbackInfo',
    fieldError: 'fieldError',
    groupInfo: 'groupInfo',
    imageInfo: 'imageInfo',
    listContact: 'listContact',
    memberInfo: 'memberInfo',
    userMutationStatuses: 'userMutationStatuses',
    templateInfo: 'templateInfo',
    templateUserInfo: 'templateUserInfo',
    themeConfig: 'themeConfig',
    userBuyCardGroupInfo: 'userBuyCardGroupInfo',
    userBuyCardInfo: 'userBuyCardInfo',
    userInfo: 'userInfo',
    userMutationResponse: 'userMutationResponse',
    userRegisterInfo: 'userRegisterInfo'
  }
}