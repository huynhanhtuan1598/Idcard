import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers/yup';
import { Grid } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { useForgotPasswordMutation } from '../../../../components/generated/graphql';
import { Button } from '../button/button';
import { ErrorText } from '../error-text/error-text';
import { Input } from '../input/input';
// import { useForgotPasswordMutation } from '../../../../generated/graphql';
// import { Button } from '../button';
// import { ErrorText } from '../error-text';
// import { Input } from '../input';

interface FormData {
    email: string;
}

function ForgotPasswordForm() {
    const { t } = useTranslation('auth');
    const { enqueueSnackbar } = useSnackbar();

    const schema = yup.object().shape({
        email: yup
            .string()
            .trim()
            .required(t('form.not_empty'))
            .email(t('form.email_not_valid')),
    });

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<FormData>({ resolver: yupResolver(schema) });


    const [forgotPassword, { loading }] = useForgotPasswordMutation();


    const onSubmit = handleSubmit(async (values) => {
        try {
            const response = await forgotPassword({
                variables: {
                    ...values
                },
            });

            if (response.data?.forgotPassword.success) {
                enqueueSnackbar(t('reset_password.success'), {
                    variant: 'success',
                });
            } else {
                enqueueSnackbar(t('reset_password.error'), {
                    variant: 'error',
                });
            }


        } catch (error) {
            enqueueSnackbar(t('reset_password.error'), {
                variant: 'error',
            });
        }

    });

    return (
        <form autoComplete="off" onSubmit={onSubmit}>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <Input placeholder="Email" {...register('email')} />
                    <ErrorMessage
                        name="email"
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
                        {t('send')}
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

export { ForgotPasswordForm };
