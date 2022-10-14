import { useMutation } from '@apollo/client';
import { ErrorMessage } from '@hookform/error-message';
import { Grid } from '@mui/material';
import { pick } from 'lodash';
import { useSnackbar } from 'notistack';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
// import { MUTATION_RESET_PASSWORD } from '../../../../query';
// import { Button } from '../button';
// import { ErrorText } from '../error-text';
// import { InputPassword } from '../input-password';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useResetPasswordMutation } from '../../../../components/generated/graphql';
import { InputPassword } from '../input-password/input-password';
import { ErrorText } from '../error-text/error-text';
import { Button } from '../button/button';
// import { useResetPasswordMutation } from '../../../../generated/graphql';

interface Props {
    token?: string;
}

interface FormData {
    password: string;
    passwordConfirm: string;
}

function ResetPasswordForm({ token }: Props) {
    const { t } = useTranslation('auth');
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const [fieldError, setFieldError] = useState<string>();

    const schema = yup.object().shape({
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

    const passwordNew = useRef({});
    passwordNew.current = watch('password', '');

 const [resetPassword, {loading}]  = useResetPasswordMutation({
     onError() {
            enqueueSnackbar(t('change_password.error'), { variant: 'error' });
     }, onCompleted(data) {

                if (data.resetPassword) {
                    navigate('/login');

                    enqueueSnackbar(t('change_password.success'), {
                        variant: 'success',
                    });
                }
     }
     })

    const onSubmit = handleSubmit((values) => {
        resetPassword({
            variables:  {
              resetPasswordInput: {
                ...pick(values, ['password']),
                token: token as string,
              }
            },
        })
    });

    return (
        <form autoComplete="off" onSubmit={onSubmit}>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <InputPassword
                        placeholder={t('form.new_password')}
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
                <Grid item>
                    <InputPassword
                        placeholder={t('form.new_password_confirm')}
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
                        {t('reset_password.save')}
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

export { ResetPasswordForm };
