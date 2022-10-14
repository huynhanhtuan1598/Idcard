import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BusinessIcon from '@mui/icons-material/Business';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LinkIcon from '@mui/icons-material/Link';
import TrackChangesSharpIcon from '@mui/icons-material/TrackChangesSharp';
import TranslateIcon from '@mui/icons-material/Translate';
import {
    AppBar,
    Box,
    Container,
    Grid,
    Toolbar,
    Typography,
    Stack,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../components/context/auth';
import { DatePicker } from '../../../components/date-picker/date-picker';
import { useUpdateUserInfoMutation } from '../../../components/generated/graphql';
import { Layout } from '../../../components/layout/layout';
import { Loading } from '../../../components/loading/loading';
import { Logo } from '../../../components/logo/logo';
import { AddFeedback } from '../components/add-feedback/add-feedback';
import { BottomNavigation } from '../components/bottom-navigation/bottom-navigation';
import { ChangeAvatar } from '../components/change-avatar/change-avatar';
import { DropdownUserAction } from '../components/dropdown-user-action/dropdown-user-action';
import { ListContact } from '../components/list-contact/list-contact';
import { ProfileBox } from '../components/profile-box/profile-box';
// import { DatePicker, Layout, Loading, Logo } from '../../../components';
// import { useAuth } from '../../../context';
// import { useUpdateUserInfoMutation } from '../../../generated/graphql';
// import {
//     AddFeedback,
//     BottomNavigation,
//     ChangeAvatar,
//     DropdownUserAction,
//     ListContact,
//     ProfileBox,
// } from '../components';

const useStyle = makeStyles({
    wrap: {
        marginTop: 30,
    },

    fullWidth: {
        width: '100%',
    },

    container: {
        marginBottom: 80,
        padding: '0 5px',
    },

    profileTitle: {},

    addBtn: {
        position: 'fixed',
        zIndex: 100,
        bottom: 30,
        right: 15,
    },
    heading: {
        boxShadow: 'none',
    },
    leftContent: {
        flexGrow: 1,
    },

    feedback: {
        marginTop: 15,
        marginBottom: 50,
    },
});

function Profile() {
    const { t } = useTranslation('profile');
    const navigate = useNavigate();
    const { user, loading } = useAuth();
    const classes = useStyle();

    const [updateUserInfo] = useUpdateUserInfoMutation();

    if (loading) {
        return <Loading full />;
    }

    const getLanguage = () => {
        if (localStorage.getItem('vipid-language') === 'en') {
            return 'English';
        }
        return 'Việt Nam';
    };

    const handleChangeBirthday = (value?: Date) => {
        updateUserInfo({
            variables: {
                updateUserInfoInput: {
                    birthday: value || null,
                },
            },
        });
    };

    return (
        <Layout>
            <AppBar
                color="transparent"
                position="static"
                className={classes.heading}
            >
                <Toolbar>
                    <Box className={classes.leftContent}>
                        <Logo />
                    </Box>

                    <DropdownUserAction />
                </Toolbar>
            </AppBar>
            <div className={classes.container}>
                <Container maxWidth="sm">
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={5}
                        className={classes.wrap}
                    >
                        <Grid item>
                            <ChangeAvatar />
                        </Grid>

                        <Grid item className={classes.fullWidth}>
                            <Stack spacing={2}>
                                <Typography variant="subtitle2">
                                    {t('title.intro')}
                                </Typography>
                                <ProfileBox
                                    label={t('fullname')}
                                    content={user?.fullname as string}
                                    placeholder={t('fullname_placeholder')}
                                    icon={<AccountCircleIcon />}
                                    onClick={() =>
                                        navigate('/edit-profile/fullname')
                                    }
                                />
                                <DatePicker
                                    onChange={handleChangeBirthday}
                                    defaultValue={user?.birthday}
                                >
                                    <ProfileBox
                                        label={t('birthday')}
                                        content={
                                            user?.birthday &&
                                            moment(user?.birthday).format(
                                                'DD-MM-YYYY'
                                            )
                                        }
                                        placeholder={t('birthday_placeholder')}
                                        icon={<CalendarMonthOutlinedIcon />}
                                    />
                                </DatePicker>
                                <ProfileBox
                                    label={t('company')}
                                    content={user?.company as string}
                                    placeholder={t('company_placeholder')}
                                    icon={<BusinessIcon />}
                                    onClick={() =>
                                        navigate('/edit-profile/company')
                                    }
                                />
                                <ProfileBox
                                    label={t('career_position')}
                                    content={user?.career_position || ''}
                                    placeholder={t(
                                        'career_position_placeholder'
                                    )}
                                    icon={<TrackChangesSharpIcon />}
                                    onClick={() =>
                                        navigate(
                                            '/edit-profile/career_position'
                                        )
                                    }
                                />
                            </Stack>
                        </Grid>

                        <Grid item className={classes.fullWidth}>
                            <Stack spacing={2}>
                                <Typography variant="subtitle2">
                                    {t('title.setting')}
                                </Typography>

                                <ProfileBox
                                    label={t('hash_url')}
                                    content={user?.hash_url as string}
                                    placeholder={t('hash_url_placeholder')}
                                    icon={<LinkIcon />}
                                    onClick={() =>
                                        navigate('/edit-profile/hash_url')
                                    }
                                />

                                <ProfileBox
                                    label={t('language')}
                                    content={getLanguage()}
                                    placeholder={t('language_placeholder')}
                                    icon={<TranslateIcon />}
                                    onClick={() =>
                                        navigate('/edit-profile/language')
                                    }
                                />
                            </Stack>
                        </Grid>

                        <Grid item className={classes.fullWidth}>
                            <ListContact />

                            <div className={classes.feedback}>
                                <AddFeedback />
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <BottomNavigation />
        </Layout>
    );
}

export default Profile;
