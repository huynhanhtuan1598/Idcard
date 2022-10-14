import { ErrorMessage } from '@hookform/error-message';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
    AppBar,
    Container,
    Dialog,
    Divider,
    FormControl,
    Grid,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { get } from 'lodash';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
// import { Transition } from '../../../../components';
// import { useAuth } from '../../../../components/context';
// import { useEditContactMutation } from '../../../../generated/graphql';
// import { urlRegExp } from '../../../../components/utils';
// import { Button, ErrorText } from '../../../auth/components';
// import { ETypeContact, getListContact, renderLogoContact } from '../../utils';
// import { ProfileBox } from '../profile-box';
// import { RemoveBtn } from '../remove-btn';
import { ChangeDefaultWebsite } from './change-default-website';
import { Input } from './input';
import { Textarea } from './textarea';
import { Transition } from '../../../../components/transition/transtion';
import { useAuth } from '../../../../components/context/auth';
import { useEditContactMutation } from '../../../../components/generated/graphql';
import { urlRegExp } from '../../../../components/utils/regex';
import {  ErrorText } from '../../../auth/components/error-text/error-text';
import { Button } from '../../../auth/components/button/button';
import { ETypeContact, getListContact} from '../../utils/getListContact';
import { ProfileBox } from '../profile-box/profile-box';
import { RemoveBtn } from '../remove-btn/remove-btn';
import { renderLogoContact } from '../../utils/renderLogoContact';

interface Props {
    profile: any;
}

const useStyle = makeStyles({
    appBar: {
        boxShadow: 'none',
    },

    leftContent: {
        flexGrow: 1,
        fontSize: 16,
    },
});

export function ContactItem({ profile }: Props) {
    const { i18n, t } = useTranslation(['profile', 'auth']);
    const classes = useStyle();
    const [open, setOpen] = useState(false);
    const { updateInfo } = useAuth();
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const [editContact, { loading }] = useEditContactMutation({
        onCompleted(data) {
            updateInfo(data.editContact?.user);
            setOpen(false);
        },
        onError(error) {
            console.log(error);
        },
    });

    const onSubmit = (values: any) => {
        editContact({
            variables: {
                editContactInput: {
                    ...values,
                    id: profile._id,
                },
            },
        });
    };

    const handleClose = () => {
        setOpen(false);
    };

    const contactItem: any = get(getListContact(profile.type), profile.name);

    if (!contactItem) {
        return null;
    }

    const getLabel = (type: ETypeContact) => {
        if (type === 'bank') {
            return contactItem.shortname;
        }

        return `${
            typeof contactItem.name === 'string'
                ? contactItem.name
                : get(contactItem.name, i18n.language)
        } ${
            profile.type === 'website' && profile.isDefault
                ? `(${t('hash_url_default')})`
                : ''
        }`;
    };

    const label = getLabel(profile.type);

    const getContent = () => {
        if (profile.owner) {
            return `${profile.owner} - ${profile.content}`;
        }

        if (profile.type === ETypeContact.Website && profile.shortName) {
            return (
                <>
                    <Typography>{profile.shortName}</Typography>
                    <Typography variant="subtitle2">
                        {profile.content}
                    </Typography>
                </>
            );
        }

        return profile.content;
    };

    const content = getContent();

    const getPattern = () => {
        if (profile.type === 'website') {
            return {
                value: urlRegExp,
                message: t('hash_url_validate'),
            };
        }

        return undefined;
    };

    return (
        <div>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar
                    color="transparent"
                    position="static"
                    className={classes.appBar}
                >
                    <Toolbar>
                        <IconButton edge="start" onClick={handleClose}>
                            <ArrowBackIcon />
                        </IconButton>

                        <Typography
                            variant="h6"
                            className={classes.leftContent}
                        >
                            {label}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Container maxWidth="xs">
                    <Grid direction="column" spacing={3} container>
                        <Grid item>
                            <div>
                                <Typography>{contactItem.heading}</Typography>
                            </div>
                        </Grid>
                        <Grid item>
                            <Grid container direction="column" spacing={3}>
                                <Grid item>
                                    <form
                                        onSubmit={handleSubmit(onSubmit)}
                                        autoComplete="off"
                                    >
                                        {profile.type === 'bank' && (
                                            <FormControl
                                                fullWidth
                                                style={{ marginBottom: 20 }}
                                            >
                                                <Input
                                                    label={t('name_account')}
                                                    defaultValue={profile.owner}
                                                    {...register('owner', {
                                                        required: {
                                                            value: true,
                                                            message: t(
                                                                'form.not_empty',
                                                                { ns: 'auth' }
                                                            ),
                                                        },
                                                    })}
                                                />

                                                <ErrorMessage
                                                    name="owner"
                                                    errors={errors}
                                                    render={({ message }) => {
                                                        return (
                                                            <ErrorText
                                                                message={
                                                                    message
                                                                }
                                                            />
                                                        );
                                                    }}
                                                />
                                            </FormControl>
                                        )}

                                        {profile.type === 'website' && (
                                            <FormControl
                                                fullWidth
                                                style={{ marginBottom: 20 }}
                                            >
                                                <Input
                                                    label={t('name_show')}
                                                    defaultValue={
                                                        profile.shortName
                                                    }
                                                    {...register('shortName')}
                                                />

                                                <ErrorMessage
                                                    name="shortName"
                                                    errors={errors}
                                                    render={({ message }) => {
                                                        return (
                                                            <ErrorText
                                                                message={
                                                                    message
                                                                }
                                                            />
                                                        );
                                                    }}
                                                />
                                            </FormControl>
                                        )}

                                        {profile.type === 'social' && (
                                            <FormControl
                                                fullWidth
                                                style={{ marginBottom: 20 }}
                                            >
                                                <Input
                                                    label={t('name_show')}
                                                    defaultValue={
                                                        profile.shortName
                                                    }
                                                    {...register('shortName', {
                                                        required: {
                                                            value: true,
                                                            message: t(
                                                                'form.not_empty',
                                                                { ns: 'auth' }
                                                            ),
                                                        },
                                                    })}
                                                />

                                                <ErrorMessage
                                                    name="shortName"
                                                    errors={errors}
                                                    render={({ message }) => {
                                                        return (
                                                            <ErrorText
                                                                message={
                                                                    message
                                                                }
                                                            />
                                                        );
                                                    }}
                                                />
                                            </FormControl>
                                        )}
                                        <FormControl
                                            fullWidth
                                            style={{ marginBottom: 20 }}
                                        >
                                            {profile.type === 'services' ? (
                                                <Textarea
                                                    label={label || ''}
                                                    defaultValue={
                                                        profile.content
                                                    }
                                                    {...register('content', {
                                                        required: {
                                                            value: true,
                                                            message: t(
                                                                'form.not_empty',
                                                                { ns: 'auth' }
                                                            ),
                                                        },
                                                        pattern: getPattern(),
                                                    })}
                                                />
                                            ) : (
                                                <Input
                                                    label={label || ''}
                                                    defaultValue={
                                                        profile.content
                                                    }
                                                    {...register('content', {
                                                        required: {
                                                            value: true,
                                                            message: t(
                                                                'form.not_empty',
                                                                { ns: 'auth' }
                                                            ),
                                                        },
                                                        pattern: getPattern(),
                                                    })}
                                                />
                                            )}

                                            <ErrorMessage
                                                name="content"
                                                errors={errors}
                                                render={({ message }) => {
                                                    return (
                                                        <ErrorText
                                                            message={message}
                                                        />
                                                    );
                                                }}
                                            />
                                        </FormControl>

                                        <Button
                                            fullWidth
                                            color="primary"
                                            variant="contained"
                                            type="submit"
                                            loading={loading}
                                        >
                                            {t('save_change')}
                                        </Button>
                                    </form>
                                </Grid>

                                {profile.type === 'website' && (
                                    <Grid item>
                                        <ChangeDefaultWebsite
                                            website={profile}
                                            handleClose={handleClose}
                                        />
                                    </Grid>
                                )}

                                <Grid item>
                                    <Divider style={{ marginBottom: 20 }} />
                                    <RemoveBtn
                                        item={profile}
                                        toggle={handleClose}
                                    />

                                    {/* <Divider style={{ marginBottom: 20, marginTop: 20 }} />
                  <Typography variant="h6" style={{ marginBottom: 15 }}>
                    Ẩn tài khoản
                  </Typography>

                  <ToggleHideBtn item={profile} toggle={handleClose} /> */}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Dialog>

            <ProfileBox
                onClick={() => {
                    setOpen(true);
                }}
                icon={renderLogoContact(profile.type, contactItem)}
                content={content}
                // content={
                //     profile.owner
                //         ? `${profile.owner} - ${profile.content}`
                //         : profile.shortName
                //         ? profile.shortName
                //         : profile.content
                // }
                label={label}
            />
        </div>
    );
}
