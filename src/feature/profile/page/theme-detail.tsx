import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
    Box,
    Container,
    IconButton,
    Paper,
    Toolbar,
    Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { get, pick } from 'lodash';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { AppBar } from '../../../components/appbar/appbar';
import { Back } from '../../../components/appbar/back';
import { Button } from '../../../components/button/button';
import { useAuth } from '../../../components/context/auth';
import { ProviderImagesUser } from '../../../components/context/images';
import { useTemplateDetailQuery } from '../../../components/generated/graphql';
import { Loading } from '../../../components/loading/loading';
import { TemplateRender } from '../../../components/template-render/template-render';
import { BtnApplyTheme } from '../components/btn-apply-theme/btn-apply-theme';
import { ListTheme } from '../components/list-theme/list-theme';
// import {
//     AppBar,
//     Back,
//     Button,
//     Loading,
//     TemplateRender,
// } from '../../../components';
// import { ProviderImagesUser, useAuth } from '../../../context';
// import { useTemplateDetailQuery } from '../../../generated/graphql';
// import { IThemeColorTemplate } from '../../admin/types';
// import { BtnApplyTheme, ListTheme } from '../components';

const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none',
    },

    title: {
        flexGrow: 1,
        fontSize: 16,
    },

    wrap: {
        background: '#f1f1f1',
        flexDirection: 'column',
    },
    wrapTheme: {
        maxWidth: 400,
        width: 'calc(100% - 30px)',
        margin: '4% auto 2%',
        maxHeight: '94%',
        overflowY: 'auto',
        borderRadius: 15,
    },
    selectBtn: {
        textTransform: 'inherit',
    },
});

function ThemeDetail() {
    const { t } = useTranslation();
    const classes = useStyles();
    const params = useParams();
    const { user } = useAuth();

    const { loading, data, error } = useTemplateDetailQuery({
        variables: {
            templateId: params.themeId || '',
        },
    });

    const renderTemplate = () => {
        if (loading) {
            return <Loading full />;
        }

        if (error) {
            return <div>No theme</div>;
        }

        const theme = data?.templateDetail.data;

        if (!theme) {
            return <div>No theme</div>;
        }

        let themeColor = pick(theme, [
            'color',
            'colorIcon',
        ]); 
        // as IThemeColorTemplate;

        let themeConfig: any = {};
        let background = get(theme, 'background.url');

        if (get(user, 'defaultTemplate') === params.themeId) {
            const {
                color,
                colorIcon,
                backgroundColor,
                backgroundImage,
                fontFamily,
            } = pick(user?.themeConfig, [
                'color',
                'colorIcon',
                'backgroundColor',
                'fontFamily',
                'backgroundImage',
            ]);
            if (color && color.length > 0) {
                themeConfig.color = color;
            }
            if (colorIcon && colorIcon.length > 0) {
                themeConfig.colorIcon = colorIcon;
            }
            if (backgroundColor && backgroundColor.length > 0) {
                themeConfig.backgroundColor = backgroundColor;
            }
            if (fontFamily && fontFamily.length > 0) {
                themeConfig.fontFamily = fontFamily;
            }
            themeColor = {
                ...themeColor,
                // ...themeConfig,
            };

            if (backgroundImage) {
                background = backgroundImage.url;
            }
        }

        return (
            <Paper className={classes.wrapTheme}>
                <TemplateRender
                    profile={user}
                    template={get(theme, 'template')}
                    theme={themeColor}
                    background={background}
                    isFixedContact={false}
                    showSave={false}
                />
            </Paper>
        );
    };

    return (
        <ProviderImagesUser>
            <>
                <AppBar
                    leftContent={<Back to="/themes" />}
                    position="static"
                    title={t('back')}
                    rightContent={
                        user?.defaultTemplate?._id === params.themeId ? (
                            <></>
                        ) : (
                            <BtnApplyTheme themeId={params.themeId}>
                                <Button sx={{ color: 'inherit' }}>
                                    {t('select')}
                                </Button>
                            </BtnApplyTheme>
                        )
                    }
                >
                    <Toolbar>
                        <IconButton edge="start" component={Link} to="/themes">
                            <ArrowBackIcon />
                        </IconButton>

                        <Typography variant="h6" className={classes.title}>
                            {t('back')}
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Container maxWidth="sm">
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Box
                            sx={{
                                height: 'calc(100vh - 200px)',
                            }}
                        >
                            {renderTemplate()}
                        </Box>
                        <Box>
                            <ListTheme />
                        </Box>
                    </Box>
                </Container>
            </>
        </ProviderImagesUser>
    );
}

export default ThemeDetail;
