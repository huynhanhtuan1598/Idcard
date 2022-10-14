import { ErrorMessage } from '@hookform/error-message';
import { FormControl } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../components/context/auth';
import { useAddContactMutation } from '../../../../components/generated/graphql';
import { useMessage } from '../../../../components/message/notification';
import { Button } from '../../../auth/components/button/button';
import { ErrorText } from '../../../auth/components/error-text/error-text';
import { Textarea } from '../list-contact/textarea';

function FormServices() {
    const { t } = useTranslation(['add_contact', 'auth', 'common']);
    const navigate = useNavigate();
    const { user, updateInfo } = useAuth();
    const message = useMessage();
    const [addContact, { loading }] = useAddContactMutation({
        onError(_error) {
            message(t('save.error'), {
                variant: 'error',
            });
        },
        onCompleted(data) {
            message(t('save.success'), {
                variant: 'success',
            });
            updateInfo(data.addContact?.user);
            navigate('/profile');
        },
    });

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = (values: any) => {
        addContact({
            variables: {
                addContactInput: {
                    ...values,
                    type: 'services',
                    name: 'services',
                },
            },
        });
    };

    if (!user) {
        return <div>No content</div>;
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <FormControl fullWidth style={{ marginBottom: 20 }}>
                <Textarea
                    label={t('service')}
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

export { FormServices };
