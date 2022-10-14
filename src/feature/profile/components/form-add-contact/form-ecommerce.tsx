import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormControl } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { Input } from '../list-contact/input';
import { Note } from './note';
import { useAuth } from '../../../../components/context/auth';
import { useAddContactMutation } from '../../../../components/generated/graphql';
import { Button } from '../../../auth/components/button/button';
import { ErrorText } from '../../../auth/components/error-text/error-text';
import { SelectEcommerce } from '../select-ecommerce/select-ecommerce';


interface FormData {
    content: string;
    shortName: string;
    name: string;
}

const FormEcommerce = () => {
    const { t } = useTranslation(['add_contact', 'auth', 'common']);
    const { updateInfo } = useAuth();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const schema = yup.object().shape({
        content: yup.string().required(t('form.not_empty', { ns: 'auth' })),
        shortName: yup.string().required(t('form.not_empty', { ns: 'auth' })),
        name: yup.string().required(t('form.not_empty', { ns: 'auth' })),
    });

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        watch,
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

    const onSubmit = handleSubmit((values: any) => {
        addContact({
            variables: {
                addContactInput: {
                    ...values,
                    type: 'ecommerce',
                },
            },
        });
    });

    const watchSocial = watch('name');

    return (
        <form onSubmit={onSubmit} autoComplete="off">
            <FormControl fullWidth style={{ marginBottom: 20 }}>
                <SelectEcommerce
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
                <Input label={t('ecommerce.name')} {...register('shortName')} />

                <ErrorMessage
                    name="shortName"
                    errors={errors}
                    render={({ message }) => {
                        return <ErrorText message={message} />;
                    }}
                />
            </FormControl>

            <FormControl fullWidth style={{ marginBottom: 20 }}>
                <Input
                    label={t('ecommerce.address')}
                    {...register('content')}
                />

                <ErrorMessage
                    name="content"
                    errors={errors}
                    render={({ message }) => {
                        return <ErrorText message={message} />;
                    }}
                />

                {watchSocial && <Note socialType={watchSocial} />}
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
};

export { FormEcommerce };
