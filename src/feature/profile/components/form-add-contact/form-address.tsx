import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormControl } from '@mui/material';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useAuth } from '../../../../components/context/auth';
import { useAddContactMutation } from '../../../../components/generated/graphql';
import { Button } from '../../../auth/components/button/button';
import { ErrorText } from '../../../auth/components/error-text/error-text';
import { Input } from '../list-contact/input';
import { SelectAddressType } from '../select-address-type/select-address-type';



interface FormData {
    name: string;
    content: string;
}

function FormAddress() {
    const { t } = useTranslation(['add_contact', 'auth', 'common']);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const { updateInfo } = useAuth();

    const schema = yup.object().shape({
        content: yup.string().required(t('form.not_empty', { ns: 'auth' })),
        name: yup.string().required(t('form.not_empty', { ns: 'auth' })),
    });

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

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

    const onSubmit = handleSubmit((values) => {
        addContact({
            variables: {
                addContactInput: {
                    ...values,
                    type: 'address',
                },
            },
        });
    });

    return (
        <form onSubmit={onSubmit} autoComplete="off">
            <FormControl fullWidth style={{ marginBottom: 20 }}>
                <SelectAddressType
                    {...register('name')}
                    setValue={(value: string) => setValue('name', value)}
                />
                <ErrorMessage
                    name="name"
                    errors={errors}
                    render={({ message }) => {
                        return <ErrorText message={message} />;
                    }}
                />
            </FormControl>

            <FormControl fullWidth style={{ marginBottom: 20 }}>
                <Input
                    label={t('address')}
                    {...register('content', {
                        required: {
                            value: true,
                            message: t('form.not_empty', { ns: 'auth' }),
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

export { FormAddress };
