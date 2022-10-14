import { Slide } from '@mui/material';
import { get, pick } from 'lodash';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { ReportHandleContext, useReportHandle } from '../../../components/context/report-handle';
import { ThemeConfig, useUserQuery } from '../../../components/generated/graphql';
import { Layout } from '../../../components/layout/layout';
import { useMessage } from '../../../components/message/notification';
import { Splash } from '../../../components/splash/splash';
import { TemplateRender } from '../../../components/template-render/template-render';
import { NotProfile } from '../components/no-profile/no-profile';
import { UserTopbar } from '../components/user-top-bar/user-top-bar';
// import {
//     Layout,
//     Splash,
//     TemplateRender,
//     useMessage,
// } from '../../../components';
// import { ReportHandleContext, useReportHandle } from '../../../context';
// import { ThemeConfig, useUserQuery } from '../../../generated/graphql';
// import ResetAccount from '../../auth/page/reset-account';

// import { NotProfile, UserTopbar } from '../components';

const TIME_OUT = 300;

const UserContent = () => {
    const { t } = useTranslation();
    const [progress, setProgress] = useState<boolean>(true);
    const message = useMessage();
    const navigate = useNavigate();
    const params = useParams();
    const { createReportUser, setUser } = useReportHandle();

    const { data, loading, error, refetch } = useUserQuery({
        variables: {
            idRegister: params.idRegister || '',
        },
        // pollInterval: 500,
        onError(_error) {
            console.log({ useUserQuery: error });
            message(t('account_not_found'), { variant: 'error' });
        },
        onCompleted(res) {
            setUser(res.user?.user);
        },
    });

    useEffect(() => {
        async function handleRedirect({
            hash_url,
            _id,
            list,
        }: {
            list: any[];
            hash_url: string;
            _id: string;
        }) {
            const existWebsiteDefault = (list || []).find(
                (item: any) => item.isDefault
            );

            if (existWebsiteDefault) {
                window.location.href = existWebsiteDefault.content;
            } else if (get(data, 'profile.hash_url')) {
                setProgress(false);
                navigate(`/${hash_url}`);

                createReportUser({
                    variables: {
                        createReportUserInput: {
                            userId: _id,
                            type: 'view',
                        },
                    },
                });
            } else {
                createReportUser({
                    variables: {
                        createReportUserInput: {
                            userId: _id,
                            type: 'view',
                        },
                    },
                });
                setProgress(false);
            }
        }

        const user = data?.user?.user;

        if (user && !user.isDeleted) {
            const values = pick(user, ['hash_url', '_id', 'list']);
            handleRedirect(values as any); // TODO: check type
        } else {
            setProgress(false);
        }
    }, [data]);

    if (loading || progress) {
        return <Splash />;
    }

    if (error) {
        console.log({ error });
        return <NotProfile id={params.idRegister} />;
    }

    const user = data?.user?.user;

    console.log({ user });

    if (!user) {
        // TODO: check again
        return <NotProfile id={params.idRegister} />;
    }

    // user is deleted
    if (user.isDeleted) {
        return (
            // <ResetAccount
            <>
                userId={get(data, 'profile._id')}
                idRegister={get(data, 'profile.idRegister')}
                callback={refetch}
            </>
                
            // />
        );
    }

    let theme = pick(user.defaultTemplate, ['color', 'colorIcon']);

    let themeConfig: any = {};

    const { color, colorIcon, backgroundColor, fontFamily } = pick(
        user.themeConfig,
        ['color', 'colorIcon', 'backgroundColor', 'fontFamily']
    );

    if (color && color.length > 0) {
        themeConfig.color = color;
    }
    if (colorIcon && colorIcon.length > 0) {
        themeConfig.colorIcon = colorIcon;
    }
    if (backgroundColor && backgroundColor.length > 0) {
        themeConfig.backgroundColor = backgroundColor;
    }
    if (fontFamily && fontFamily.length > 0) {
        themeConfig.fontFamily = fontFamily;
    }

    theme = {
        ...theme,
        ...themeConfig,
    };

    const background =
        get(data?.user?.user, 'themeConfig.backgroundImage.url') ||
        get(data?.user?.user?.defaultTemplate, 'background.url');

    return (
        <>
            <UserTopbar />
            <Layout title={user.fullname}>
                <Slide direction="up" in {...{ timeout: TIME_OUT }}>
                    <div>
                        <TemplateRender
                            profile={user}
                            template={user.defaultTemplate?.template as string}
                            theme={theme as ThemeConfig}
                            background={background}
                            noClick={false}
                        />
                    </div>
                </Slide>
            </Layout>
        </>
    );
};

const ShortUrl = () => {
    return (
        <ReportHandleContext>
            <UserContent />
        </ReportHandleContext>
    );
};

export default ShortUrl;
