import { lazy } from 'react';
import { Suspense } from 'react';
import { BrowserRouter } from '../../../src/react-router-dom';
import { Route } from '../../../src/react-router-dom';
import { Routes } from '../../../src/react-router-dom';
import { LayoutAdmin} from '../../components/layout/admin-layout/admin-layout';
import { Loading } from '../../components/loading/loading';
import { NotFound } from '../../components/not-found/not-found';
import { AdminRouter } from './admin-router';
import { GuestRouter } from './guest-router';
import { UserRouter } from './user-router';

const Home = lazy(() => import('../../feature/home/page/home'));
const Login = lazy(() => import('../../feature/profile/page/login'));
const Signup = lazy(() => import('../../feature/profile/page/signup'));
const ForgotPassword = lazy(
    () => import('../../feature/profile/page/forgot-password')
);
//const ResetPassword = lazy(() => import('../../feature/profile/page/'));
const ChangePassword = lazy(
    () => import('../../feature/profile/page/change-password')
);

const User = lazy(() => import('../../feature/profile/page/user'));
const ShortUrl = lazy(() => import('../../feature/profile/page/shorturl'));

const Profile = lazy(() => import('../../feature/profile/page/profile'));
const EditAvatar = lazy(() => import('../../feature/profile/page/edit-avartar'));
const EditProfile = lazy(() => import('../../feature/profile/page/edit-profile'));
const Report = lazy(() => import('../../feature/profile/page/report'));
const Group = lazy(() => import('../../feature/profile/page/group'));
//const GroupDetail = lazy(() => import('../../feature/profile/page/grou'));
// setting theme
const Appearance = lazy(() => import('../../feature/profile/page/appearance'));
const SelectFont = lazy(() => import('../../feature/profile/page/setting-font'));
const Color = lazy(() => import('../../feature/profile/page/color'));
const BgColor = lazy(() => import('../../feature/profile/page/bg-color'));
const BgImage = lazy(() => import('../../feature/profile/page/bg-image'));

const Theme = lazy(() => import('../../feature/profile/page/theme'));
const ThemeDetail = lazy(() => import('../../feature/profile/page/theme-detail'));
const AddContact = lazy(() => import('../../feature/profile/page/add-contact'));
const AddContactItem = lazy(
    () => import('../../feature/profile/page/add-contact-item')
);

//const Overview = lazy(() => import('../feature/admin/page/overview'));
//const Customers = lazy(() => import('../feature/admin/page/customers'));
//const Feedback = lazy(() => import('../feature/admin/page/feedback'));
//const UserByCard = lazy(() => import('../feature/admin/page/user-buy-card'));
// const UserBuyCardGroup = lazy(
//     () => import('../feature/admin/page/user-buy-card-group')
// );
// const UserBuyCardGroupDetail = lazy(
//     () => import('../feature/admin/page/user-buy-card-group-detail')
// );
// const Groups = lazy(() => import('../feature/admin/page/groups'));
// const Templates = lazy(() => import('../feature/admin/page/templates'));
// const TemplateDetail = lazy(
//     () => import('../feature/admin/page/template-detail')
// );
// const CreateTemplate = lazy(
//     () => import('../feature/admin/page/create-template')
// );
// const FeedbackList = lazy(
//     () => import('../feature/profile/page/feedback-list')
// );
// const FeedbackDetail = lazy(
//     () => import('../feature/profile/page/feedback-detail')
// );

const Routers = () => (
    <Suspense fallback={<Loading />}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="login"
                    element={
                        <GuestRouter>
                            <Login />
                        </GuestRouter>
                    }
                />
                <Route
                    path="signup"
                    element={
                        <GuestRouter>
                            <Signup />
                        </GuestRouter>
                    }
                />
                <Route
                    path="forgot"
                    element={
                        <GuestRouter>
                            <ForgotPassword />
                        </GuestRouter>
                    }
                />
                <Route
                    path="reset-password"
                    // element={
                    //     <GuestRouter>
                    //         <ResetPassword />
                    //     </GuestRouter>
                    // }
                />

                <Route path="user/:idRegister" element={<User />} />
                <Route path=":idRegister" element={<ShortUrl />} />

                <Route
                    path="profile"
                    element={
                        <UserRouter>
                            <Profile />
                        </UserRouter>
                    }
                />
                <Route
                    path="edit-avatar"
                    element={
                        <UserRouter>
                            <EditAvatar />
                        </UserRouter>
                    }
                />
                <Route
                    path="edit-profile/:type"
                    element={
                        <UserRouter>
                            <EditProfile />
                        </UserRouter>
                    }
                />
                <Route
                    path="report"
                    element={
                        <UserRouter>
                            <Report />
                        </UserRouter>
                    }
                />

                <Route
                    path="change-password"
                    element={
                        <UserRouter>
                            <ChangePassword />
                        </UserRouter>
                    }
                />
                <Route
                    path="group"
                    element={
                        <UserRouter>
                            <Group />
                        </UserRouter>
                    }
                />
                <Route
                    path="group/:groupId"
                    // element={
                    //     <UserRouter>
                    //         <GroupDetail />
                    //     </UserRouter>
                    // }
                />
                <Route
                    path="appearance"
                    element={
                        <UserRouter>
                            <Appearance />
                        </UserRouter>
                    }
                />
                <Route
                    path="font"
                    element={
                        <UserRouter>
                            <SelectFont />
                        </UserRouter>
                    }
                />
                <Route
                    path="color"
                    element={
                        <UserRouter>
                            <Color />
                        </UserRouter>
                    }
                />

                <Route
                    path="bg-color"
                    element={
                        <UserRouter>
                            <BgColor />
                        </UserRouter>
                    }
                />

                <Route
                    path="bg-image"
                    element={
                        <UserRouter>
                            <BgImage />
                        </UserRouter>
                    }
                />
                <Route
                    path="themes"
                    element={
                        <UserRouter>
                            <Theme />
                        </UserRouter>
                    }
                />
                <Route
                    path="theme/:themeId"
                    element={
                        <UserRouter>
                            <ThemeDetail />
                        </UserRouter>
                    }
                />
                <Route
                    path="add-contact"
                    element={
                        <UserRouter>
                            <AddContact />
                        </UserRouter>
                    }
                />
                <Route
                    path="add-contact/:type"
                    element={
                        <UserRouter>
                            <AddContactItem />
                        </UserRouter>
                    }
                />

                <Route
                    path="feedbacks"
                    // element={
                    //     <UserRouter>
                    //         <FeedbackList />
                    //     </UserRouter>
                    // }
                />

                <Route
                    path="feedbacks/:feedbackId"
                    // element={
                    //     <UserRouter>
                    //         <FeedbackDetail />
                    //     </UserRouter>
                    // }
                />

                <Route
                    path="admin"
                    element={
                        <AdminRouter>
                            <LayoutAdmin />
                        </AdminRouter>
                    }
                >
                    {/* <Route element={<Overview />} index />
                    <Route path="customers" element={<Customers />} />
                    <Route path="buy-card" element={<UserByCard />} />
                    <Route
                        path="buy-card-group"
                        element={<UserBuyCardGroup />}
                    />
                    <Route
                        path="buy-card-group/:id"
                        element={<UserBuyCardGroupDetail />}
                    />
                    <Route path="templates" element={<Templates />} />
                    <Route
                        path="create-template"
                        element={<CreateTemplate />}
                    />
                    <Route
                        path="template/:templateId"
                        element={<TemplateDetail />}
                    />
                    <Route path="feedback" element={<Feedback />} />
                    <Route path="groups" element={<Groups />} /> */}
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </Suspense>
);

export { Routers };
