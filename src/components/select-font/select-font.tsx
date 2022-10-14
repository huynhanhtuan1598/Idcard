import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
    AppBar,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    IconButton,
    Toolbar,
    Typography
} from '@mui/material';
import { green, grey } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
import React, { forwardRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
// import { DemoFont } from './demo-font';
import { ListFont } from './list-font';

const useStyle = makeStyles({
    appBar: {
        boxShadow: 'none',
    },

    dialogTitle: {
        borderBottom: `1px solid ${grey[300]}`,
    },
    dialogActions: {
        borderTop: `1px solid ${grey[300]}`,
    },
    wrapInput: {
        position: 'relative',
    },
    dialogContent: {},
    input: {
        display: 'block',
        border: `1px solid ${grey[300]}`,
        padding: '15px 10px',
        borderRadius: 5,
        width: '100%',
        fontSize: 18,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: '0',
    },
    card: {
        margin: '10px 20px',
        background: green[400],
        color: '#fff',
    },
    titleCard: {
        padding: '7px 10px',
        borderBottom: `1px solid ${grey[200]}`,
        fontSize: 14,
    },
});

interface Props {
    font?: string;
    selectFont: (font?: string) => void;
}

const SelectFont = forwardRef(
    ({ font, selectFont, ...props }: Props, ref: any) => {
        const { t } = useTranslation('theme');
        const classes = useStyle();
        const [fontLocal, setFontLocal] = useState<string | undefined>(font);
        const [open, setOpen] = useState<boolean>(false);

        const toggle = () => {
            setOpen((o) => !o);
        };

        const onCancel = () => {
            setFontLocal(font);
            selectFont(font);
            toggle();
        };

        const handleSelect = (value?: string) => {
            setFontLocal(value);
            selectFont(value);
        };

        return (
            <>
                <div onClick={toggle} className={classes.wrapInput}>
                    <input
                        className={classes.input}
                        {...props}
                        ref={ref}
                        value={fontLocal}
                        autoComplete="none"
                    />
                </div>

                <Dialog
                    onClose={toggle}
                    aria-labelledby="simple-dialog-title"
                    open={open}
                    fullScreen
                    maxWidth="lg"
                >
                    <AppBar position="static" className={classes.appBar}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                edge="start"
                                onClick={onCancel}
                                aria-label="close"
                            >
                                <ArrowBackIcon />
                            </IconButton>

                            <Typography variant="h6">
                                {t('select_font')}
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    <DialogContent className={classes.dialogContent}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                            }}
                        >
                            <div
                                style={{
                                    overflow: 'auto',
                                    height: 'calc(100%)',
                                }}
                            >
                                <ListFont
                                    selectFont={handleSelect}
                                    font={fontLocal}
                                />
                            </div>

                            {/* <DemoFont fonts={[fontLocal]} /> */}
                        </div>
                    </DialogContent>

                    <DialogActions className={classes.dialogActions}>
                        <Button onClick={onCancel}>{t('cancel')}</Button>

                        <Button
                            onClick={toggle}
                            color="primary"
                            variant="contained"
                        >
                            {t('finish')}
                        </Button>
                    </DialogActions>
                </Dialog>
            </>
        );
    }
);

export { SelectFont };
