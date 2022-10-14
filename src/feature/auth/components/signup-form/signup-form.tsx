import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers/yup';
import { Grid, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
import { pick } from 'lodash';
import * as queryString from 'query-string';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useChangeLanguage } from '../../../../components/context/language';
import { SignupInput, useSignupMutation } from '../../../../components/generated/graphql';
import { useMessage } from '../../../../components/message/notification';
import { getErrorMessage } from '../../../../components/utils/getMessageError';
import { Button } from '../button/button';
import { ErrorText } from '../error-text/error-text';
import { InputPassword } from '../input-password/input-password';
import { Input } from '../input/input';
// import { useMessage } from '../../../../components';
// import {  useChangeLanguage } from '../../../../context';
// import { getErrorMessage } from '../../../../error-code/util';
// import { SignupInput, useSignupMutation } from '../../../../generated/graphql';
// import { Button } from '../button';
// import { ErrorText } from '../error-text';
// import { Input } from '../input';
// import { InputPassword } from '../input-password';

interface FormData extends SignupInput {
    passwordConfirm: string;
}

const useStyle = makeStyles({
    boxError: {
        border: `1px solid ${red[500]}`,
        background: red[50],
        padding: '10px 15px',
        borderRadius: 10,
    },
});

interface Props {
    profile?: any;
}

function SignupForm({ profile }: Props) {
    const { t } = useTranslation('auth');
    const { i18n } = useChangeLanguage();
    const classes = useStyle();
    const navigate = useNavigate();
    // const { loadUserSuccess } = useAuth();
    const message = useMessage();
    const location = useLocation();
    const [fieldError, setFieldError] = useState<string>();

    const search = queryString.parse(location.search);

    const schema = yup.object().shape({
        email: yup
            .string()
            .trim()
            .required(t('form.not_empty'))
            .email(t('form.email_not_valid')),

        username: yup
            .string()
            .trim()
            .required(t('form.not_empty'))
            .test('is-not-space', t('form.username.not_space'), (value) => {
                return value?.trim().split(' ').length === 1;
            })
            .test('is-not-uppercase', t('form.username.uppercase'), (value) => {
                const regExp = new RegExp(/([A-Z])/g);
                return !regExp.test((value as string) || '');
            })
            .test('is-not-alias', t('form.username.alias'), (value) => {
                const regExp =
                    /^[ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/;
                const arrWord = value?.split('');
                const isExist = arrWord?.find((text) => regExp.test(text));

                return !isExist;
            })
            .min(5, t('form.username.min'))
            .max(25, t('form.username.max')),

        fullname: yup
            .string()
            .required(t('form.not_empty'))
            .min(5, t('form.fullname.min'))
            .max(50, t('form.fullname.max')),

        code: yup.string().required(t('form.not_empty')),

        password: yup
            .string()
            .trim()
            .required(t('form.not_empty'))
            .test('is-not-space', t('form.password_not_valid'), (value) => {
                return value?.trim().split(' ').length === 1;
            })
            .min(8, t('form.password.length')),

        passwordConfirm: yup
            .string()
            .required(t('form.not_empty'))
            .test('is-not-space', t('form.password_not_valid'), (value) => {
                return value?.trim().split(' ').length === 1;
            })
            .min(8, t('form.password.length'))
            .oneOf([yup.ref('password')], t('form.password_not_sample')),
    });

    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
    } = useForm<FormData>({
        resolver: yupResolver(schema),
        // defaultValues: {
        //   email: get(search, 'email') as string,
        //   fullname: get(search, 'name') as string,
        //   code: get(search, 'code') as string,
        // },
    });
    const password = useRef({});
    password.current = watch('password', '');

    const [signup, { loading }] = useSignupMutation({
        onCompleted(data) {
            const user = data?.signup?.user;
            const accessToken = data?.signup?.accessToken;

            if (user) {
                navigate('/login')               
                // loadUserSuccess(user);
                // localStorage.setItem('token', accessToken as string);
                message('Đăng ký tài khoản thành công', {
                    variant: 'success',
                });
            } else {
                const messageText = data.signup?.message;
                // const text = getErrorMessage({
                //     code: messageText as string,
                //     language: i18n.language,
                // });

                // message(text, { variant: 'error' });
            }
        },
        onError() {},
    });

    const onSubmit = handleSubmit(async (values) => {
        const signupInput = pick(values, [
            'email',
            'fullname',
            'username',
            'code',
            'password',
        ]);

        await signup({
            variables: {
                signupInput,
            },
        });
    });

    return (
        <form autoComplete="off" onSubmit={onSubmit}>
            <Grid container direction="column" spacing={2}>
                {!!search.code && !search.new && (
                    <Grid item>
                        <div className={classes.boxError}>
                            <Typography variant="body2">
                                {t('account.warning')}
                            </Typography>
                        </div>
                    </Grid>
                )}

                <Grid item>
                    <Input
                        placeholder="Email"
                        autoFocus
                        {...register('email')}
                        defaultValue={search.email}
                        error={fieldError === 'email'}
                    />
                    <ErrorMessage
                        name="email"
                        errors={errors}
                        render={({ message }) => {
                            return <ErrorText message={message} />;
                        }}
                    />
                </Grid>
                <Grid item>
                    <Input
                        placeholder={t('form.username')}
                        {...register('username')}
                        error={fieldError === 'username'}
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
                    <Input
                        placeholder={t('form.fullname')}
                        {...register('fullname')}
                        defaultValue={search.name}
                        error={fieldError === 'fullname'}
                    />
                    <ErrorMessage
                        name="fullname"
                        errors={errors}
                        render={({ message }) => {
                            return <ErrorText message={message} />;
                        }}
                    />
                </Grid>
                <Grid item>
                    <Input
                        placeholder={t('form.code_confirm')}
                        {...register('code')}
                        defaultValue={search.code}
                        error={fieldError === 'code'}
                    />
                    <ErrorMessage
                        name="code"
                        errors={errors}
                        render={({ message }) => {
                            return <ErrorText message={message} />;
                        }}
                    />
                </Grid>
                <Grid item>
                    <InputPassword
                        placeholder={t('form.password')}
                        {...register('password')}
                        error={fieldError === 'password'}
                    />
                    <ErrorMessage
                        name="password"
                        errors={errors}
                        render={({ message }) => {
                            return <ErrorText message={message} />;
                        }}
                    />
                </Grid>
                <Grid item>
                    <InputPassword
                        placeholder={t('form.password_confirm')}
                        {...register('passwordConfirm')}
                        error={fieldError === 'passwordConfirm'}
                    />
                    <ErrorMessage
                        name="passwordConfirm"
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
                        {t('signup')}
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

export { SignupForm };
