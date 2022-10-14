import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers/yup';
import { Chip, FormControl, Typography } from '@mui/material';
import { debounce } from 'lodash';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useAuth } from '../../../../components/context/auth';
import { useAddContactMutation } from '../../../../components/generated/graphql';
import { urlRegExp } from '../../../../components/utils/regex';
import { Button } from '../../../auth/components/button/button';
import { ErrorText } from '../../../auth/components/error-text/error-text';
import { Input } from '../list-contact/input';

interface FormData {
    shortName?: string;
    content: string;
}

const FormWebsite = () => {
    const { t } = useTranslation(['add_contact', 'auth', 'common', 'profile']);
    const { updateInfo } = useAuth();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const schema = yup.object().shape({
        content: yup
            .string()
            .required(t('form.not_empty', { ns: 'auth' }))
            .matches(urlRegExp, t('form.url_not_valid', { ns: 'auth' })),
        shortname: yup.string(),
    });

    const {
        register,
        handleSubmit,
        setValue,
        setError,
        clearErrors,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const [addContact, { loading }] = useAddContactMutation({
        onError() {
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

    const changeValue = debounce((text: string) => {
        const url = text.toLocaleLowerCase();

        if (!urlRegExp.test(url)) {
            setError('content', {
                message: t('form.url_not_valid', { ns: 'auth' }),
            });
            return;
        }

        clearErrors('content');
        setValue('content', url);
    }, 300);

    const onSubmit = handleSubmit((values) => {
        addContact({
            variables: {
                addContactInput: {
                    ...values,
                    type: 'website',
                    name: 'website',
                },
            },
        });
    });

    return (
        <form onSubmit={onSubmit} autoComplete="off">
            <FormControl fullWidth style={{ marginBottom: 20 }}>
                <Input label={t('name_show', { ns: 'profile' })} {...register('shortName')} autoFocus />
            </FormControl>
            <FormControl fullWidth style={{ marginBottom: 20 }}>
                <Input
                    label="Website"
                    {...register('content')}
                    onChange={(e) => {
                        changeValue(e.target.value);
                    }}
                />

                <ErrorMessage
                    name="content"
                    errors={errors}
                    render={({ message }) => {
                        return <ErrorText message={message} />;
                    }}
                />
            </FormControl>

            <Typography variant="body2">
                (*) {t('website.text')} <Chip label="https://" />{' '}
                {t('or', { ns: 'common' })} <Chip label="http://" />
            </Typography>

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

export { FormWebsite };
