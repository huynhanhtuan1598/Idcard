import CloseIcon from '@mui/icons-material/Close';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {
    AppBar,
    Badge,
    Button,
    Container,
    Dialog,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/auth';
import { AllNotificationsInput,
    ENotificationType,
    useAllNotificationQuery, } from '../generated/graphql';
import { Transition } from '../transition/transtion';
// import { useAuth } from '../context';
// import {
    // AllNotificationsInput,
    // ENotificationType,
    // useAllNotificationQuery,
// } from '../../generated/graphql';
// import { Transition } from '../transition';
import { ListNotification } from './list-notification';

interface Props {
    children?: ReactNode;
    type?: ENotificationType;
}

const useStyle = makeStyles({
    root: {
        minWidth: 'auto',
        padding: 4,
        borderRadius: 10,
    },
});

const Notification = ({ type, children }: Props) => {
    const { t } = useTranslation();
    const [open, setOpen] = useState<boolean>(false);
    const classes = useStyle();
    const { user } = useAuth();
    const allNotificationsInput: AllNotificationsInput = {};

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    if (type === ENotificationType.Admin) {
        allNotificationsInput.type = type;
    } else {
        allNotificationsInput.recipientId = user?._id;
    }

    const { data } = useAllNotificationQuery({
        variables: {
            allNotificationsInput,
        },
    });

    const total = data?.allNotifications.total || 0;

    return (
        <>
            <Badge
                badgeContent={total}
                color={total === 0 ? 'default' : 'error'}
                overlap="circular"
            >
                {children || (
                    <Button
                        // variant="outlined"
                        className={classes.root}
                        size="small"
                        onClick={handleOpen}
                    >
                        <NotificationsIcon />
                    </Button>
                )}
            </Badge>

            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography
                            sx={{ ml: 2, flex: 1 }}
                            variant="h6"
                            component="div"
                        >
                            {t('notification')}
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            {t('exit')}
                        </Button>
                    </Toolbar>
                </AppBar>
                <Container maxWidth="sm">
                    <ListNotification data={data?.allNotifications.data} />
                </Container>
            </Dialog>
        </>
    );
};

export { Notification };
