import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers/yup';
import { Grid } from '@mui/material';
import { pick } from 'lodash';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from '../../../../../src/react-router-dom';
import * as yup from 'yup';
import { useMessage } from '../../../../components/message/notification';
import { useChangePaswordMutation } from '../../../../components/generated/graphql';
import { Button } from '../../../../components/button/button';
import { ErrorText } from '../../../../feature/auth/components/error-text/error-text';
import { InputPassword } from '../../../../feature/auth/components/input-password/input-password';

interface FormData {
    password: string;
    passwordNew: string;
    passwordNewConfirm: string;
}

function ChangePasswordForm() {
    const { t } = useTranslation('auth');
    const navigate = useNavigate();
    const message = useMessage();

    const schema = yup.object().shape({
        password: yup
            .string()
            .required(t('form.not_empty'))
            .min(8, t('form.password.length')),
        passwordNew: yup
            .string()
            .required(t('form.not_empty'))
            .min(8, t('form.password.length')),
        passwordNewConfirm: yup
            .string()
            .required(t('form.not_empty'))
            .min(8, t('form.password.length'))
            .oneOf([yup.ref('passwordNew')], t('form.password_not_sample')),
    });

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const passwordNew = useRef({});
    passwordNew.current = watch('passwordNew', '');

    const [changePassword, { loading }] = useChangePaswordMutation({
        onError: (error) => {
            message(t('change_password.error'), {
                variant: 'error',
            });
        },
        onCompleted(data) {
            if (data.changePassword) {
                navigate('/profile');
                message(t('change_password.success'), {
                    variant: 'success',
                });
            } else {
                message(t('change_password.error'), {
                    variant: 'error',
                });
            }
        },
    });

    const onSubmit = (values: FormData) => {
        changePassword({
            variables: {
                changePasswordInput: pick(values, ['passwordNew', 'password']),
            },
        });
    };

    return (
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <InputPassword
                        {...register('password')}
                        placeholder={t('form.password')}
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
                        {...register('passwordNew')}
                        placeholder={t('form.new_password')}
                    />
                    <ErrorMessage
                        name="passwordNew"
                        errors={errors}
                        render={({ message }) => {
                            return <ErrorText message={message} />;
                        }}
                    />
                </Grid>
                <Grid item>
                    <InputPassword
                        {...register('passwordNewConfirm')}
                        placeholder={t('form.new_password_confirm')}
                    />

                    <ErrorMessage
                        name="passwordNewConfirm"
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
                        {t('change_password.save')}
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

export { ChangePasswordForm };
