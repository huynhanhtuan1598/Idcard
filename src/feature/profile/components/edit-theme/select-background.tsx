import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import {
    AppBar,
    Button,
    Container,
    Dialog,
    DialogContent,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { forwardRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
// import { ImageS3 } from '../../../../collection';
import { ListImages } from './list-images';
import { ImageS3 } from '../../../../components/generated/graphql';

const useStyles = makeStyles({
    wrap: {
        position: 'relative',
    },
    thumb: {
        border: '1px solid #f1f1f1',
        borderRadius: 5,
        padding: 20,
        width: 150,
        height: 250,
        backgroundSize: 'cover',
        cursor: 'pointer',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    description: {
        textAlign: 'center',
    },
    input: {
        opacity: 0,
        cursor: 'pointer',
        width: 1,
    },
    appBar: {
        boxShadow: 'none',
    },

    title: {
        flexGrow: 1,
        fontSize: 16,
    },

    content: {
        padding: '70px 0 30px 0',
    },

    remove: {
        background: '#fff',
        boxShadow: '0 0 5px rgba(0, 0, 0, .3)',
        position: 'absolute',
        top: -15,
        right: -15,
        zIndex: 10,

        '&.MuiIconButton-root': {
            bakground: '#fff !important',
        },
    },
});

interface Props {
    selectBg: (image?: ImageS3) => void;
    background?: string;
    removeBg: () => void;
}

const SelectBackground = forwardRef(
    ({ selectBg, removeBg, background, ...props }: Props, ref: any) => {
        const { t } = useTranslation(['theme', 'common']);
        const classes = useStyles();
        const [open, setOpen] = useState<boolean>(false);
        const toggle = () => setOpen((o) => !o);
        const [bgImage, setBgImage] = useState<string | undefined>(background);

        const handleSelectBg = (image?: ImageS3) => {
            selectBg(image);
            // setBgImage(image.url);
            toggle();
        };

        return (
            <div className={classes.wrap}>
                <div
                    className={classes.thumb}
                    style={{ backgroundImage: `url(${background})` }}
                    onClick={toggle}
                >
                    {!background && (
                        <div className={classes.description}>
                            <AddIcon />
                            <Typography variant="body2">
                                {t('select_background_image')}
                            </Typography>
                        </div>
                    )}
                    <input
                        value={bgImage}
                        {...props}
                        ref={ref}
                        className={classes.input}
                    />
                </div>
                {!!background && (
                    <IconButton
                        onClick={removeBg}
                        className={classes.remove}
                        size="small"
                    >
                        <CloseIcon />
                    </IconButton>
                )}

                <Dialog open={open} fullScreen onClose={toggle}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={toggle}
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                {t('select_background_image')}
                            </Typography>
                            <Button color="inherit">
                                {t('save', { ns: 'common' })}
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <DialogContent className={classes.content}>
                        <Container maxWidth="sm">
                            <ListImages selectBg={handleSelectBg} />
                        </Container>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
);

export { SelectBackground };
