import {
    Dialog,
    DialogContent,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Typography,
    DialogTitle as MuiDialogTitle,
    Theme,
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import { withStyles, makeStyles, createStyles, WithStyles } from '@mui/styles';
import { map, get } from 'lodash';
import React, { forwardRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { phoneList } from '../../constants/phone-list';
// import { phoneList } from '../../constants';

const styles = (theme: Theme) =>
    createStyles({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    });

interface DialogTitleProps extends WithStyles<typeof styles> {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const useStyles = makeStyles((theme: Theme) => ({
    wrap: { background: '#eee', borderRadius: 10, cursor: 'pointer' },
    label: {
        position: 'absolute',
        top: 0,
        padding: '10px 15px',
        fontSize: 15,
        color: theme.palette.grey[800],
    },
    input: {
        display: 'block',
        padding: '40px 15px 15px',
        minHeight: 60,
        width: '100%',
        border: 'none',
        background: 'transparent',
        fontSize: 19,
        position: 'relative',
        zIndex: 10,
        '&:focus': {
            outline: 'none',
        },
    },
}));

interface Props {
    setValue?: (value: any) => void;
}

const SelectPhoneType = forwardRef<HTMLInputElement, Props>(
    ({ setValue, ...props }, ref) => {
        const { i18n, t } = useTranslation(['add_contact']);
        const [open, setOpen] = useState<boolean>(false);
        const [name, setName] = useState<string>();

        const classes = useStyles();

        const toggle = () => {
            setOpen((o) => !o);
        };

        const lists = Object.values(phoneList);

        const phoneExist = name ? phoneList[name] : undefined;

        return (
            <>
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    className={classes.wrap}
                    onClick={() => setOpen(true)}
                >
                    <Grid item xs>
                        <div className={classes.label}>
                            {t('phoneNumber.dialog')}
                        </div>
                        <input
                            value={
                                phoneExist
                                    ? get(phoneExist.name, i18n.language)
                                    : undefined
                            }
                            className={classes.input}
                            {...props}
                            autoFocus
                            readOnly
                        />
                    </Grid>
                    <Grid item style={{ marginRight: 10 }}>
                        <ChevronRightIcon />
                    </Grid>
                </Grid>

                <Dialog
                    onClose={toggle}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                    maxWidth="xl"
                >
                    <DialogTitle id="customized-dialog-title" onClose={toggle}>
                        {t('phoneNumber.dialog')}
                    </DialogTitle>
                    <DialogContent dividers style={{ padding: 0 }}>
                        <List
                            component="nav"
                            style={{ maxHeight: 300, minWidth: 300 }}
                        >
                            {map(lists, (item) => {
                                const handleSelect = () => {
                                    setName(item.value);
                                    setValue && setValue(item.value);
                                    toggle();
                                };

                                return (
                                    <ListItem
                                        button
                                        key={item.value}
                                        onClick={handleSelect}
                                    >
                                        <ListItemText
                                            primary={get(
                                                item.name,
                                                i18n.language
                                            )}
                                        />
                                    </ListItem>
                                );
                            })}
                        </List>
                    </DialogContent>
                </Dialog>
            </>
        );
    }
);

export { SelectPhoneType };
