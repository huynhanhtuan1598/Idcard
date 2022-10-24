import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormControl } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useAuth } from '../../../../components/context/auth';
import { useAddContactMutation } from '../../../../components/generated/graphql';
import { Button } from '../../../auth/components/button/button';
import { ErrorText } from '../../../auth/components/error-text/error-text';
// import { useAuth } from '../../../../components/context';
// import { useAddContactMutation } from '../../../../generated/graphql';
// import { Button, ErrorText } from '../../../auth/components';
// import { socialLists } from '../../constants';
import { Input } from '../list-contact/input';
import { ETypeSelect, SelectBankOrSocial } from '../select-bank-or-social/select-bank-or-social';
// import { ETypeSelect, SelectBankOrSocial } from '../select-bank-or-social';
import { Note } from './note';

interface FormData {
    content: string;
    shortName: string;
    name: string;
}

const FormSocial = () => {
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
                    type: 'social',
                },
            },
        });
    });

    const watchSocial = watch('name');

    return (
        <form onSubmit={onSubmit} autoComplete="off">
            <FormControl fullWidth style={{ marginBottom: 20 }}>
                <SelectBankOrSocial
                    {...register('name')}
                    setValue={(value: string) => setValue('name', value)}
                    type={ETypeSelect.SOCIAL}
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
                <Input label={t('social.name')} {...register('shortName')} />

                <ErrorMessage
                    name="shortName"
                    errors={errors}
                    render={({ message }) => {
                        return <ErrorText message={message} />;
                    }}
                />
            </FormControl>

            <FormControl fullWidth style={{ marginBottom: 20 }}>
                <Input label={t('social.address')} {...register('content')} />

                <ErrorMessage
                    name="content"
                    errors={errors}
                    render={({ message }) => {
                        return <ErrorText message={message} />;
                    }}
                />

                {/* {watchSocial && <Note socialType={watchSocial} />} */}
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

export { FormSocial };
