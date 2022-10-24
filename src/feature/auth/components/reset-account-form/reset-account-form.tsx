import { useMutation } from '@apollo/client';
import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers/yup';
import { Grid } from '@mui/material';
import { get, pick } from 'lodash';
import { useSnackbar } from 'notistack';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { useAuth } from '../../../../components/context/auth';
// import { AUTH_CODE_EXIST, AUTH_CODE_NOT_EXIST, AUTH_EMAIL_EXIST, AUTH_USERNAME_EXIST } from '../../../../components/error-code/auth';
import { MUTATION_RESET_ACCOUNT } from '../../../../components/query/auth';
// import { getErrorMessage } from '../../../../components/utils/getMessageError';
import { Button } from '../button/button';
import { ErrorText } from '../error-text/error-text';
import { InputPassword } from '../input-password/input-password';
import { Input } from '../input/input';
// import { useAuth } from '../../../../context';
// import {
//     AUTH_CODE_EXIST,
//     AUTH_CODE_NOT_EXIST,
//     AUTH_EMAIL_EXIST,
//     AUTH_USERNAME_EXIST,
// } from '../../../../error-code';
// import { MUTATION_RESET_ACCOUNT } from '../../../../query';
// import { getErrorMessage } from '../../../../utils';
// import { Button } from '../button';
// import { ErrorText } from '../error-text';
// import { Input } from '../input';
// import { InputPassword } from '../input-password';

interface FormData {
    password: string;
    passwordConfirm: string;
    username: string;
    fullname: string;
    code: string;
    email: string;
}

interface Props {
    id: string;
    profile?: any;
    callback: any;
}

const ResetAccountForm = ({ callback, profile, id }: Props) => {
    const { t } = useTranslation('auth');
    const { loadUserSuccess } = useAuth();
    const { enqueueSnackbar } = useSnackbar();
    const [fieldError, setFieldError] = useState<string>();

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
    });
    const password = useRef({});
    password.current = watch('password', '');

    // const [resetAccount, { loading }] = useMutation(MUTATION_RESET_ACCOUNT, {
    //     onError: (err) => {
    //         const getFieldError = () => {
    //             if ([AUTH_EMAIL_EXIST.code].includes(err.message)) {
    //                 setFieldError('email');
    //             }

    //             if (
    //                 [AUTH_CODE_EXIST.code, AUTH_CODE_NOT_EXIST.code].includes(
    //                     err.message
    //                 )
    //             ) {
    //                 setFieldError('code');
    //             }

    //             if ([AUTH_USERNAME_EXIST.code].includes(err.message)) {
    //                 setFieldError('username');
    //             }
    //         };

    //         getFieldError();

    //         // enqueueSnackbar(getErrorMessage(err.message), { variant: 'error' });
    //     },
    // });

    // const onSubmit = handleSubmit((values) => {
    //     resetAccount({
    //         variables: {
    //             ...pick(values, [
    //                 'email',
    //                 'fullname',
    //                 'username',
    //                 'code',
    //                 'password',
    //             ]),
    //             id,
    //         },
    //     })
    //         .then((data) => {
    //             loadUserSuccess(data.data.resetAccount);
    //             localStorage.setItem('token', data.data.resetAccount.token);
    //             enqueueSnackbar('Đăng ký tài khoản thành công', {
    //                 variant: 'success',
    //             });
    //             setTimeout(() => {
    //                 callback();
    //             }, 500);
    //         })
    //         .catch(() => {});
    // });

    // return (
    //     <form autoComplete="off" onSubmit={onSubmit}>
    //         <Grid container direction="column" spacing={2}>
    //             <Grid item>
    //                 <Input
    //                     placeholder="Email"
    //                     {...register('email')}
    //                     defaultValue={get(profile, 'email')}
    //                     error={fieldError === 'email'}
    //                 />
    //                 <ErrorMessage
    //                     name="email"
    //                     errors={errors}
    //                     render={({ message }) => {
    //                         return <ErrorText message={message} />;
    //                     }}
    //                 />
    //             </Grid>
    //             <Grid item>
    //                 <Input
    //                     placeholder={t('form.username')}
    //                     {...register('username')}
    //                     error={fieldError === 'username'}
    //                 />
    //                 <ErrorMessage
    //                     name="username"
    //                     errors={errors}
    //                     render={({ message }) => {
    //                         return <ErrorText message={message} />;
    //                     }}
    //                 />
    //             </Grid>
    //             <Grid item>
    //                 <Input
    //                     placeholder={t('form.fullname')}
    //                     {...register('fullname')}
    //                     defaultValue={get(profile, 'name')}
    //                     error={fieldError === 'fullname'}
    //                 />
    //                 <ErrorMessage
    //                     name="fullname"
    //                     errors={errors}
    //                     render={({ message }) => {
    //                         return <ErrorText message={message} />;
    //                     }}
    //                 />
    //             </Grid>
    //             <Grid item>
    //                 <Input
    //                     placeholder={t('form.code_confirm')}
    //                     {...register('code')}
    //                     defaultValue={get(profile, 'code')}
    //                     error={fieldError === 'code'}
    //                 />
    //                 <ErrorMessage
    //                     name="code"
    //                     errors={errors}
    //                     render={({ message }) => {
    //                         return <ErrorText message={message} />;
    //                     }}
    //                 />
    //             </Grid>
    //             <Grid item>
    //                 <InputPassword
    //                     placeholder={t('form.password')}
    //                     {...register('password')}
    //                     error={fieldError === 'password'}
    //                 />
    //                 <ErrorMessage
    //                     name="password"
    //                     errors={errors}
    //                     render={({ message }) => {
    //                         return <ErrorText message={message} />;
    //                     }}
    //                 />
    //             </Grid>
    //             <Grid item>
    //                 <InputPassword
    //                     placeholder={t('form.password_confirm')}
    //                     {...register('passwordConfirm')}
    //                     error={fieldError === 'passwordConfirm'}
    //                 />
    //                 <ErrorMessage
    //                     name="passwordConfirm"
    //                     errors={errors}
    //                     render={({ message }) => {
    //                         return <ErrorText message={message} />;
    //                     }}
    //                 />
    //             </Grid>
    //             <Grid item />
    //             <Grid item>
    //                 <Button
    //                     type="submit"
    //                     color="primary"
    //                     variant="contained"
    //                     fullWidth
    //                     loading={loading}
    //                 >
    //                     {t('signup')}
    //                 </Button>
    //             </Grid>
    //         </Grid>
    //     </form>
    // );
};

export { ResetAccountForm };
