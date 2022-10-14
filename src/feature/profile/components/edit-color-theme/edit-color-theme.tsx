import { Box, Container, Grid, IconButton, Paper, Typography } from '@mui/material';
import { get, pick, pickBy } from 'lodash';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
// import {
//     AppBar,
//     Back,
//     Button,
//     ColorPicker,
//     TemplateRender,
//     useMessage,
// } from '../../../../components';
// import { useAuth } from '../../../../components/context';
// import { useChangeConfigThemeMutation } from '../../../../generated/graphql';
// import { SelectSettingColor } from '../select-setting-color';
import ClearIcon from '@mui/icons-material/Clear';
import { AppBar } from '../../../../components/appbar/appbar';
import { Back } from '../../../../components/appbar/back';
import { useAuth } from '../../../../components/context/auth';
import { useMessage } from '../../../../components/message/notification';
import { useChangeConfigThemeMutation } from '../../../../components/generated/graphql';
import { SelectSettingColor } from '../select-setting-color/select-setting-color';
import { ColorPicker } from '../../../../components/color-picker/color-picker';
import { Button } from '../../../../components/button/button';
import { TemplateRender } from '../../../../components/template-render/template-render';

export type TSettingColorType =
    | 'color'
    | 'iconColor'
    | 'backgroundColor'
    | 'headingColor'
    | 'headingSubColor';

interface Props {
    title: string;
    type: TSettingColorType
}

const EditColorTheme = ({ title, type }: Props) => {
    const [typeSetting, setTypeSetting] = useState<TSettingColorType>(type);
    const navigate = useNavigate();
    const { user } = useAuth();
    const { t } = useTranslation(['theme', 'common']);
    const message = useMessage();
    const [color, setColor] = useState<string | undefined>();

    const selectSettingColor = useCallback((value: TSettingColorType) => {
        setTypeSetting(value);
    }, []);

    useEffect(() => {
        const colorDefault = get(user, ['themeConfig', typeSetting]);

        if (colorDefault) {
            setColor(colorDefault);
        }
    }, [user, typeSetting]); // type

    const [handleChangeConfigTheme, { loading }] = useChangeConfigThemeMutation(
        {
            onError(error) {
                console.log(error);
                message(t('change_config.error'), { variant: 'error' });
            },
            onCompleted(data) {
                if (data.changeConfigTheme?.success) {
                    message(t('change_config.success'), {
                        variant: 'success',
                    });

                    navigate('/appearance');
                } else {
                    message(t('change_config.error'), { variant: 'error' });
                }
            },
        }
    );

    const handleChangeColor = (value?: string) => {
        setColor(value);
    };

    const resetColor = () => {
        handleChangeColor();
    };

    const getThemeConfig = () => {
        let theme: any = {
            ...pick(user?.themeConfig, [
                'color',
                'colorIcon',
                'backgroundColor',
                'fontFamily',
                'headingSubColor',
                'headingColor',
            ]),
        };

        if (typeSetting === 'iconColor') {
            theme.colorIcon = color;
        }
        if (typeSetting === 'color') {
            theme.color = color;
        }
        if (typeSetting === 'backgroundColor') {
            theme.backgroundColor = color;
        }
        if (typeSetting === 'headingColor') {
            theme.headingColor = color;
        }
        if (typeSetting === 'headingSubColor') {
            theme.headingSubColor = color;
        }

        return theme;
    };

    const handleSave = () => {
        handleChangeConfigTheme({
            variables: {
                changeConfigThemeInput: {
                    ...getThemeConfig(),
                },
            },
        });
    };

    let theme: any = {
        ...pick(user?.defaultTemplate, [
            'color',
            'backgroundColor',
            'colorIcon',
            'headingColor',
        ]),
        ...pickBy(getThemeConfig(), (i) => !!i),
    };

    const background =
        get(user, 'themeConfig.backgroundImage.url') ||
        get(user, 'defaultTemplate.background.url');

    return (
        <>
            <AppBar
                position="static"
                leftContent={<Back to="/appearance" />}
                title={title}
            />
            <Container maxWidth="sm">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: 'calc(100vh - 130px)',
                    }}
                >
                    <Box
                        sx={{
                            flex: 1,
                        }}
                    >
                        <Paper
                            sx={{ marginTop: '30px', height: 'calc(100vh - 250px)', borderRadius: 5, overflow: 'hidden' }}
                        >
                            <Box
                                sx={{
                                    overflowY: 'auto',
                                    height: `calc(100vh - 200px)`,
                                }}
                            >
                                <TemplateRender
                                    profile={user}
                                    noClick
                                    showSave={false}
                                    template={
                                        user?.defaultTemplate
                                            ?.template as string
                                    }
                                    background={background}
                                    theme={theme}
                                    isFixedContact={false}
                            
                                />
                            </Box>
                        </Paper>
                    </Box>

                    <Box
                        sx={{
                            py: 2,
                        }}
                    >
                        <Grid
                            container
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Grid item sx={{ flex: 1 }}>
                                <Grid spacing={1} alignItems="center" container>
                                    <Grid item>
                                        {type === 'backgroundColor' ? <Typography>{t('selectColor', { ns: 'common' })}</Typography> : <SelectSettingColor
                                            defaultValue={typeSetting}
                                            // onChange={SelectSettingColor}
                                        />}
                                        
                                    </Grid>
                                    <Grid item>
                                        <ColorPicker
                                            size={50}
                                            defaultValue={color}
                                            onChange={handleChangeColor}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <IconButton
                                            size="small"
                                            onClick={resetColor}
                                        >
                                            <ClearIcon />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    onClick={handleSave}
                                    loading={loading}
                                >
                                    Save
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export { EditColorTheme };
