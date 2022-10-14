import CloseIcon from '@mui/icons-material/Close';
import {
    AppBar,
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    Grid,
    IconButton,
    Slide,
    Toolbar,
    Typography,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { makeStyles } from '@mui/styles';
import { get } from 'lodash';
import { useSnackbar } from 'notistack';
import React, { forwardRef } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../../../components/context/auth';
import { ImageS3, useChangeConfigThemeMutation } from '../../../../components/generated/graphql';
import { InputColor } from '../../../../components/input-color/input-color';
import { SelectFont } from '../../../../components/select-font/select-font';
// import { ImageS3 } from '../../../../collection';
// import { InputColor, SelectFont } from '../../../../components';
// import { useAuth } from '../../../../components/context';
// import { useChangeConfigThemeMutation } from '../../../../generated/graphql';
import { CardForm } from './card-form';
import { SelectBackground } from './select-background';

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const useStyle = makeStyles({
    appBar: {
        boxShadow: 'none',
    },

    title: {
        flexGrow: 1,
        fontSize: 16,
    },

    wrap: {
        height: 'calc(100vh - 112px)',
        overflowY: 'auto',
    },
    actionBottom: {
        borderTop: '1px solid #f1f1f1',
    },
    button: {
        textTransform: 'inherit',
    },
});

interface FormData {
    color?: string;
    colorIcon?: string;
    backgroundColor?: string;
    backgroundImage?: ImageS3;
    fontFamily?: string;
    fontUrl?: string;
}

interface Props {
    toggle: () => void;
    open: boolean;
}

function EditThemeForm({ toggle, open }: Props) {
    const { t } = useTranslation(['theme', 'common']);
    const { enqueueSnackbar } = useSnackbar();
    const { user, updateInfo, refetch } = useAuth();
    const classes = useStyle();

    const [handleChangeConfigTheme] = useChangeConfigThemeMutation({
        onError(error) {
            console.log(error);
            enqueueSnackbar(t('change_config.error'), { variant: 'error' });
        },
        onCompleted(data) {
            enqueueSnackbar(t('change_config.success'), {
                variant: 'success',
            });
            refetch();

            updateInfo(data.changeConfigTheme?.user);

            // changeConfigTheme(data.changeConfigTheme?);

            toggle();
        },
    });

    const { register, handleSubmit, setValue, watch } = useForm<FormData>({
        defaultValues: {
            backgroundColor: get(user, 'themeConfig.backgroundColor'),
            color: get(user, 'themeConfig.color'),
            colorIcon: get(user, 'themeConfig.colorIcon'),
            backgroundImage: get(user, 'themeConfig.backgroundImage'),
            fontFamily: get(user, 'themeConfig.fontFamily'),
        },
    });

    const setValueForm = (value: any, type: any) => {
        setValue(type, value);
    };

    const onSubmit = (values: FormData) => {
        handleChangeConfigTheme({
            variables: {
                changeConfigThemeInput: {
                    ...values,
                    backgroundImage: get(values, 'backgroundImage._id'),
                },
            },
        });
    };

    const { backgroundColor, color, colorIcon, fontFamily, backgroundImage } =
        watch();

    return (
        <Dialog
            fullScreen
            open={open}
            onClose={toggle}
            TransitionComponent={Transition}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <AppBar className={classes.appBar} position="static">
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
                            {t('edit', { ns: 'common' })}
                        </Typography>
                        <Button
                            color="inherit"
                            type="submit"
                            className={classes.button}
                        >
                            {t('save', { ns: 'common' })}
                        </Button>
                    </Toolbar>
                </AppBar>
                <DialogContent className={classes.wrap}>
                    <Container maxWidth="sm">
                        <Grid container direction="column" spacing={1}>
                            <Grid item>
                                <Grid container spacing={2}>
                                    <Grid item xs={4}>
                                        <CardForm label={t('background_color')}>
                                            <InputColor
                                                {...register('backgroundColor')}
                                                color={backgroundColor}
                                                selectColor={(value) => {
                                                    setValueForm(
                                                        value,
                                                        'backgroundColor'
                                                    );
                                                }}
                                            />
                                        </CardForm>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <CardForm label={t('color')}>
                                            <InputColor
                                                {...register('color')}
                                                color={color}
                                                selectColor={(value) => {
                                                    setValueForm(
                                                        value,
                                                        'color'
                                                    );
                                                }}
                                            />
                                        </CardForm>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <CardForm label={t('color_icon')}>
                                            <InputColor
                                                {...register('colorIcon')}
                                                color={colorIcon}
                                                selectColor={(value) =>
                                                    setValueForm(
                                                        value,
                                                        'colorIcon'
                                                    )
                                                }
                                            />
                                        </CardForm>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <CardForm label={t('background_image')}>
                                            <SelectBackground
                                                {...register('backgroundImage')}
                                                background={get(
                                                    backgroundImage,
                                                    'url'
                                                )}
                                                removeBg={() => {
                                                    setValueForm(
                                                        undefined,
                                                        'backgroundImage'
                                                    );
                                                }}
                                                selectBg={(backgroundImage) => {
                                                    setValueForm(
                                                        backgroundImage,
                                                        'backgroundImage'
                                                    );
                                                }}
                                            />
                                        </CardForm>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <CardForm label={t('font_family')}>
                                            <SelectFont
                                                {...register('fontFamily')}
                                                font={fontFamily}
                                                selectFont={(font?: string) => {
                                                    setValueForm(
                                                        font,
                                                        'fontFamily'
                                                    );
                                                }}
                                            />
                                        </CardForm>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </DialogContent>

                <DialogActions className={classes.actionBottom}>
                    <Button onClick={toggle}>
                        {t('cancel', { ns: 'common' })}
                    </Button>
                    <Button
                        size="large"
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        {t('save', { ns: 'common' })}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}

export { EditThemeForm };
