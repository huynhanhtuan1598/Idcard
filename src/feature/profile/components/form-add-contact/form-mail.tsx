import { ErrorMessage } from '@hookform/error-message';
import { FormControl } from '@mui/material';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../components/context/auth';
import { useAddContactMutation } from '../../../../components/generated/graphql';
import { Button } from '../../../auth/components/button/button';
import { ErrorText } from '../../../auth/components/error-text/error-text';
import { Input } from '../list-contact/input';

function FormEmail() {
    const { t } = useTranslation(['add_contact', 'auth']);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const { updateInfo } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [addContact, { loading }] = useAddContactMutation({
        onError(_error) {
            enqueueSnackbar(t('save.error'), {
                variant: 'error',
            });
        },
        onCompleted(data) {
            enqueueSnackbar(t('save.success'), {
                variant: 'success',
            });
            updateInfo(data.addContact?.user);
            navigate('/profile');
        },
    });

    const onSubmit = (values: any) => {
        addContact({
            variables: {
                addContactInput: {
                    ...values,
                    type: 'email',
                    name: 'email',
                },
            },
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <FormControl fullWidth style={{ marginBottom: 20 }}>
                <Input
                    label="Email"
                    {...register('content', {
                        required: {
                            value: true,
                            message: t('form.not_empty', { ns: 'auth' }),
                        },
                        pattern: {
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                            message: t('form.email_not_valid', { ns: 'auth' }),
                        },
                    })}
                />

                <ErrorMessage
                    name="content"
                    errors={errors}
                    render={({ message }) => {
                        return <ErrorText message={message} />;
                    }}
                />
            </FormControl>

            <FormControl margin="normal" fullWidth>
                <Button
                    fullWidth
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={loading}
                >
                    {t('save', { ns: 'common' })}
                </Button>
            </FormControl>
        </form>
    );
}

export { FormEmail };
