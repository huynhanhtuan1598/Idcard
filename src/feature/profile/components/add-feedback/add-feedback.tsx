import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
    AppBar,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    Divider,
    Grid,
    IconButton,
    TextField,
    Toolbar,
    Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState, ReactElement, cloneElement } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../../../components/context/auth';
import { useNotification } from '../../../../components/context/notification';
import { ENotificationType,
        AddFeedbackInput,
        useSendFeedbackMutation,
        namedOperations, } from '../../../../components/generated/graphql';
import { useMessage } from '../../../../components/message/notification';
import { Transition } from '../../../../components/transition/transtion';


const useStyle = makeStyles({
    content: {
        paddingTop: 30,
    },
    back: {
        color: '#fff',
    },
});

interface FormData {
    content?: string;
}

interface Props {
    children?: ReactElement;
    feedbackParentId?: string;
    feedbackOwnerId?: string;
    type?: 'admin' | 'customer';
}

function AddFeedback({
    children,
    feedbackOwnerId,
    feedbackParentId,
    type = 'customer',
}: Props) {
    const { user } = useAuth();
    const { t } = useTranslation(['profile', 'auth']);
    const { createNotification } = useNotification();
    const message = useMessage();
    const classes = useStyle();
    const {
        handleSubmit,
        control,
        setValue,
        formState: { errors },
    } = useForm<FormData>();
    const [open, setOpen] = useState<boolean>(false);
    const toggle = () => setOpen((o) => !o);

    const [sendFeedback, { loading }] = useSendFeedbackMutation({
        onCompleted(data) {
            if (data.sendFeedback) {
                message(t('feedback.success'), { variant: 'success' });
                setValue('content', undefined);
                toggle();
            }
        },
        onError() {
            message(t('feedback.error'), { variant: 'error' });
        },
        refetchQueries: [namedOperations.Query.FeedbackDetailUser],
    });

    const onSubmit: SubmitHandler<FormData> = async (values) => {
        let addFeedbackInput: AddFeedbackInput = {
            content: values.content as string,
            isParent: !feedbackParentId,
        };

        if (!!feedbackParentId) {
            addFeedbackInput.feedbackParentId = feedbackParentId;
        }

        const response = await sendFeedback({
            variables: {
                addFeedbackInput,
            },
        });

        if (response.data?.sendFeedback) {
            const isAdmin = type === 'admin';
            const typeNotification = isAdmin
                ? ENotificationType.Admin
                : ENotificationType.Support;

            const title = isAdmin ? 'Phản hồi khách hàng' : 'VipID';
            const action = feedbackParentId;

            createNotification({
                title,
                content: values.content,
                type: typeNotification,
                senderId: user?._id,
                recipientId: feedbackOwnerId,
                action,
            });
        } else {
        }
    };

    return (
        <>
            {children ? (
                cloneElement(children, { onClick: toggle })
            ) : (
                <>
                    <Divider style={{ margin: '30px 0' }} />
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Grid md={12} item>
                            <Typography
                                component="p"
                                style={{
                                    textAlign: 'center',
                                    marginBottom: 15,
                                }}
                                variant="body2"
                            >
                                {t('feedback.description')}
                            </Typography>
                        </Grid>
                        <Grid>
                            <Button
                                onClick={toggle}
                                variant="contained"
                                color="primary"
                                size="large"
                            >
                                {t('feedback')}
                            </Button>
                        </Grid>
                    </Grid>
                </>
            )}
            <Dialog
                fullScreen
                open={open}
                onClose={toggle}
                TransitionComponent={Transition}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <AppBar color="primary" position="static">
                        <Toolbar>
                            <IconButton edge="start" onClick={toggle}>
                                <ArrowBackIcon className={classes.back} />
                            </IconButton>

                            <Typography variant="h6">
                                {t('feedback')}
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    <DialogContent className={classes.content}>
                        <DialogContentText>
                            {t('feedback.description')}
                        </DialogContentText>

                        <Controller
                            name="content"
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: t('feedback.label'),
                                },
                            }}
                            render={({ field }) => (
                                <TextField
                                    error={!!errors.content?.message}
                                    helperText={errors.content?.message}
                                    margin="dense"
                                    variant="outlined"
                                    rows={5}
                                    multiline
                                    placeholder={t('feedback.placeholder')}
                                    autoFocus
                                    fullWidth
                                    {...field}
                                />
                            )}
                        />

                        <DialogActions>
                            <Button onClick={toggle} variant="outlined">
                                {t('cancel', { ns: 'auth' })}
                            </Button>
                            <Button
                                color="primary"
                                type="submit"
                                variant="contained"
                                disabled={loading}
                            >
                                {t('send', { ns: 'auth' })}
                            </Button>
                        </DialogActions>
                    </DialogContent>
                </form>
            </Dialog>
        </>
    );
}

export { AddFeedback };
