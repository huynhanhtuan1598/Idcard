import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers/yup';
import { Grid } from '@mui/material';
import { get, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { useAuth } from '../../../../components/context/auth';
import { useChangeLanguage } from '../../../../components/context/language';
import { LoginInput, useLoginMutation } from '../../../../components/generated/graphql';
import { useMessage } from '../../../../components/message/notification';
import { checkSpacingInString } from '../../../../components/utils/checkSpacingInString';
// import { getErrorMessage } from '../../../../components/utils/getMessageError';
import { Button } from '../button/button';
import { ErrorText } from '../error-text/error-text';
import { InputPassword } from '../input-password/input-password';
import { Input } from '../input/input';
// import { useMessage } from '../../../../components';
// import { useAuth, useChangeLanguage } from '../../../../context';
// import { LoginInput, useLoginMutation } from '../../../../generated/graphql';
// import { checkSpacingInString, getErrorMessage } from '../../../../utils';
// import { Button } from '../button';
// import { ErrorText } from '../error-text';
// import { Input } from '../input';
// import { InputPassword } from '../input-password';

const LoginForm = () => {
    const { loadUserSuccess } = useAuth();
    const message = useMessage();
    const { t } = useTranslation('auth');
    const { i18n } = useChangeLanguage();

    const schema = yup.object().shape({
        username: yup.string().trim().required(t('form.not_empty')),
        password: yup.string().trim().required(t('form.not_empty')),
    });

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<LoginInput>({ resolver: yupResolver(schema) });

    const [login, { loading }] = useLoginMutation({
        onError() {
            const errorText = get(undefined, t('form.error_login'));
            message(errorText, { variant: 'error' });
        },
        onCompleted(data) {
            if (!data.login?.success) {
                const errorText = get(
                    data?.login?.message,
                    t('form.error_login')
                );

                message(errorText[i18n.language], { variant: 'error' });
            } else {
                const user = data?.login?.user;
                const token = data?.login?.accessToken;

                if (user) {
                    loadUserSuccess(user);

                    if (token) localStorage.setItem('token', token);
                }
            }
        },
    });

    const onSubmit = handleSubmit((values) => {
        if (checkSpacingInString(values.username)) {
            message(t('form.username.required'), {
                variant: 'error',
            });

            return;
        }

        login({
            variables: {
                loginInput: values,
            },
        });
    });

    return (
        <form autoComplete="off" onSubmit={onSubmit}>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <Input
                        placeholder={t('form.username.login')}
                        {...register('username', {
                            required: {
                                value: true,
                                message: t('form.not_empty'),
                            },
                        })}
                    />

                    <ErrorMessage
                        name="username"
                        errors={errors}
                        render={({ message }) => {
                            return <ErrorText message={message} />;
                        }}
                    />
                </Grid>

                <Grid item>
                    <InputPassword
                        placeholder={t('form.password')}
                        {...register('password', {
                            required: {
                                value: true,
                                message: t('form.not_empty'),
                            },
                            minLength: {
                                value: 8,
                                message: t('form.password.length'),
                            },
                        })}
                    />
                    <ErrorMessage
                        name="password"
                        errors={errors}
                        render={({ message }) => {
                            return <ErrorText message={message} />;
                        }}
                    />
                </Grid>

                <Grid item />

                <Grid item>
                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        fullWidth
                        loading={loading}
                    >
                        {t('login')}
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export { LoginForm };
