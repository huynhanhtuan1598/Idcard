import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers/yup';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
    AppBar,
    Container,
    FormControl,
    Grid,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material';
import { blue } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
import { get, pick } from 'lodash';
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { TFunction, useTranslation } from 'react-i18next';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import * as yup from 'yup';
import { ChangeLanguage } from '../../../components/change-language/change-language';
import { useAuth } from '../../../components/context/auth';
import { UpdateUserInfoInput, useUpdateUserInfoMutation } from '../../../components/generated/graphql';
import { Button } from '../../auth/components/button/button';
import { ErrorText } from '../../auth/components/error-text/error-text';
// import { ChangeLanguage } from '../../../components';
// import { useAuth } from '../../../context';
// import {
//     UpdateUserInfoInput,
//     useUpdateUserInfoMutation,
// } from '../../../generated/graphql';
// import { Button, ErrorText } from '../../auth/components';

interface IContent {
    type: string;
    title: string;
    heading: string;
    text: string;
}

const SIZE_DOT = 8;

const useStyle = makeStyles({
    dot: {
        width: SIZE_DOT,
        height: SIZE_DOT,
        background: blue[500],
    },

    colorPathUrl: {
        color: blue[500],
    },

    heading: {
        boxShadow: 'none',
        marginBottom: 20,
    },

    leftContent: {
        flexGrow: 1,
        fontSize: 16,
    },
});

const constentArray = (t: TFunction): IContent[] => [
    {
        type: 'fullname',
        title: t('fullname'),
        heading: t('fullname_label'),
        text: t('fullname_description'),
    },
    {
        type: 'company',
        title: t('company'),
        heading: t('company_label'),
        text: t('company_description'),
    },
    {
        type: 'career_position',
        title: t('career_position'),
        heading: t('career_position_label'),
        text: t('career_position_description'),
    },
    {
        type: 'hash_url',
        title: t('hash_url'),
        heading: t('hash_url_label'),
        text: t('hash_url_description'),
    },
    {
        type: 'language',
        title: t('language'),
        heading: t('language_label'),
        text: t('language_description'),
    },
];

function getContent(type: string, t: TFunction): IContent | undefined {
    const existContent = constentArray(t).find((item) => item.type === type);

    return existContent;
}

const schema = (t: TFunction) =>
    yup.object().shape({
        value: yup.string(),
        // .required(t('form.not_empty', { ns: 'auth' })),
    });

interface FormData {
    value: any;
}

function ProfileEdit() {
    const { t } = useTranslation(['profile', 'auth']);
    const classes = useStyle();
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const { user, refetch } = useAuth();
    const params = useParams();

    const [updateUserInfo, { loading }] = useUpdateUserInfoMutation({
        onError(error) {
            console.log({ error });
            enqueueSnackbar(t('save_profile.error'), {
                variant: 'error',
            });
        },
        onCompleted(data) {
            enqueueSnackbar(t('save_profile.success'), {
                variant: 'success',
            });
            refetch();
            navigate('/profile');
        },
    });

    const {
        register,
        setError,
        formState: { errors },
        handleSubmit,
        watch,
    } = useForm<FormData>({
        resolver: yupResolver(schema(t)),
    });
    const content = getContent(params.type || '', t);

    const defaultValue = {
        ...pick(user, [
            'fullname',
            'career_position',
            'company',
            'avatar',
            'address',
            'hash_url',
        ]),
        description: '',
    };

    const { onChange, ...rest } = register('value');

    const handleOnChange = (e: any) => {
        if (params.type === 'hash_url') {
            let types: any = {};
            const value = e.target.value;

            if (value.length === 0) {
                types['is-not-empty'] = t('form.not_empty', {
                    ns: 'auth',
                });
            }

            if (value?.trim().split(' ').length > 1) {
                types['is-not-space'] = t('form.username.not_space', {
                    ns: 'auth',
                });
            }

            const arrWord = value?.split('');

            const regExp =
                /^[ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ/{}[\]\\;':",./?!@#$%&*()_+=-]+$/;
            const regExpNotValid = /^['{}[\]\\;':",./?!@#$%&*()_+=-]+$/;
            const isExist = arrWord?.find(
                (text: string) => regExp.test(text) || regExpNotValid.test(text)
            );

            if (isExist) {
                types['is-not-alias'] = t('form.username.alias', {
                    ns: 'auth',
                });
            }

            setError('value', types);
        }

        onChange(e);
    };

    const onSubmit = async (values: any) => {
        const stringCovert = get(values, 'value', '').trim();
        let value = stringCovert;

        if (!params.type) {
            return;
        }

        if (params.type === 'hash_url') {
            value = encodeURIComponent(value.split(' ').join('-'));
        }

        const data = {
            ...defaultValue,
            [`${params.type}`]: value,
        } as UpdateUserInfoInput;

        await updateUserInfo({
            variables: {
                updateUserInfoInput: data,
            },
        });
    };

    if (!content || !user) {
        return <Navigate to="/edit-profile" />;
    }

    const getDefaultValue = () => {
        if (params.type === 'fullname') {
            return user.fullname;
        }
        if (params.type === 'career_position') {
            return user.career_position;
        }
        if (params.type === 'hash_url') {
            return user.hash_url;
        }
        if (params.type === 'company') {
            return user.company;
        }

        return undefined;
    };

    const watchValue = watch('value', getDefaultValue());

    const renderError = () => {
        return (
            <>
                {params.type === 'hash_url' && (
                    <>
                        {!!get(errors.value, 'is-not-space') && (
                            <ErrorText
                                message={get(errors.value, 'is-not-space')}
                            />
                        )}
                        {!!get(errors.value, 'is-not-alias') && (
                            <ErrorText
                                message={get(errors.value, 'is-not-alias')}
                            />
                        )}
                    </>
                )}

                <ErrorMessage
                    name="value"
                    errors={errors}
                    render={({ message }) => {
                        return <ErrorText message={message} />;
                    }}
                />
            </>
        );
    };

    const isDisabled =
        !!get(errors.value, 'is-not-space') ||
        !!get(errors.value, 'is-not-alias');

    return (
        <>
            <AppBar
                color="transparent"
                position="static"
                className={classes.heading}
            >
                <Toolbar>
                    <IconButton edge="start" component={Link} to="/profile">
                        <ArrowBackIcon />
                    </IconButton>

                    <Typography variant="h6" className={classes.leftContent}>
                        {content?.title || ''}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth="sm">
                <Grid container direction="column" spacing={3}>
                    <Grid item>
                        <Typography variant="h6">{content.heading}</Typography>
                        <Typography style={{ color: '#787878', marginTop: 10 }}>
                            {content.text}
                        </Typography>
                    </Grid>
                    {params.type === 'hash_url' && (
                        <Grid item>
                            <Grid container spacing={1} alignItems="center">
                                <Grid item>
                                    <div className={classes.dot} />
                                </Grid>
                                <Grid item>
                                    <Typography>
                                        {`${window.location.origin}/user/`}
                                        <b className={classes.colorPathUrl}>{`${
                                            watchValue || ''
                                        }`}</b>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    )}

                    <Grid item>
                        {content.type === 'language' ? (
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                spacing={3}
                            >
                                <Grid item>
                                    <Typography>Tiếng Việt</Typography>
                                </Grid>
                                <Grid item>
                                    <ChangeLanguage />
                                </Grid>
                                <Grid item>
                                    <Typography>English</Typography>
                                </Grid>
                            </Grid>
                        ) : (
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                autoComplete="off"
                            >
                                <FormControl
                                    fullWidth
                                    style={{ marginBottom: 20 }}
                                >
                                    <div
                                        style={{
                                            background: '#eee',
                                            borderRadius: 10,
                                        }}
                                    >
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                padding: '10px 15px',
                                                fontSize: 15,
                                                color: '#515151',
                                            }}
                                        >
                                            {content?.title}
                                        </div>
                                        <input
                                            {...rest}
                                            onChange={handleOnChange}
                                            defaultValue={
                                                getDefaultValue() as
                                                    | string
                                                    | undefined
                                            }
                                            style={{
                                                padding: '40px 15px 15px 15px',
                                                width: '100%',
                                                border: 'none',
                                                background: 'transparent',
                                                fontSize: 19,
                                                position: 'relative',
                                                zIndex: 10,
                                            }}
                                        />
                                    </div>

                                    {renderError()}
                                </FormControl>
                                <Button
                                    type="submit"
                                    color="primary"
                                    variant="contained"
                                    fullWidth
                                    loading={loading}
                                    disabled={isDisabled}
                                >
                                    {t('save_profile')}
                                </Button>
                            </form>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default ProfileEdit;
