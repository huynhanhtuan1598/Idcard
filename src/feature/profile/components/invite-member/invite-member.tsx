import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
    AppBar,
    Container,
    Dialog,
    DialogContent,
    Fab,
    IconButton,
    Theme,
    Toolbar,
    Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Transition } from '../../../../components/transition/transtion';
// import { Transition } from '../../../../components';
import { InviteMemberForm } from './invite-member-form';

const useStyle = makeStyles((theme: Theme) => ({
    button: {
        minWidth: 40,
    },
    leftContent: {
        fontSize: 16,
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

interface Props {
    memberIds: string[];
}

function InviteMember({ memberIds }: Props) {
    const { t } = useTranslation('group');
    const classes = useStyle();
    const [open, setOpen] = useState<boolean>(false);
    const toggle = () => {
        setOpen((o) => !o);
    };

    return (
        <>
            <Fab
                className={classes.fab}
                color="primary"
                aria-label="add"
                size="medium"
                onClick={toggle}
            >
                <AddIcon />
            </Fab>

            <Dialog
                onClose={toggle}
                aria-labelledby="customized-dialog-title"
                open={open}
                fullScreen
                TransitionComponent={Transition}
            >
                <AppBar color="transparent" position="static" elevation={0}>
                    <Toolbar>
                        <IconButton edge="start" onClick={toggle}>
                            <ArrowBackIcon />
                        </IconButton>

                        <Typography
                            className={classes.leftContent}
                            variant="h6"
                        >
                            {t('exit')}
                        </Typography>
                    </Toolbar>
                </AppBar>

                <DialogContent dividers style={{ padding: 0 }}>
                    <Container maxWidth="sm">
                        <InviteMemberForm memberIds={memberIds} />
                    </Container>
                </DialogContent>
            </Dialog>
        </>
    );
}

export { InviteMember };
