import FormatSizeIcon from '@mui/icons-material/FormatSize';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import OpacityIcon from '@mui/icons-material/Opacity';
import PaletteIcon from '@mui/icons-material/Palette';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import {
    Avatar,
    Box,
    Button,
    Container,
    Grid,
    Paper,
    Typography,
} from '@mui/material';
import { blue, green, orange, pink, purple } from '@mui/material/colors';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../components/context/auth';
import { AppBar } from '../../../components/appbar/appbar';
import { Back } from '../../../components/appbar/back';
// import { AppBar, Back } from '../../../components';
// import { useAuth } from '../../../context';

const Appearance = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const { t } = useTranslation(['theme', 'auth']);

    const menus: Array<{
        icon: any;
        title: string;
        path: string;
        color: any;
    }> = [
            {
                icon: <PaletteIcon />,
                title: t('appearance.theme'), //Mẫu giao diện')},
                path: '/themes',
                color: pink,
            },
            {
                icon: <OpacityIcon />,
                title: t('appearance.color'),
                path: '/color',
                color: green,
            },
            {
                icon: <FormatColorFillIcon />,
                title: t('appearance.bgColor'),
                path: '/bg-color',
                color: purple,
            },
            {
                icon: <InsertPhotoIcon />,
                title: t('appearance.bgImage'),
                path: '/bg-image',
                color: blue,
            },
            {
                icon: <FormatSizeIcon />,
                title: t('appearance.fontFamily'),
                path: '/font',
                color: orange,
            },
        ];

    return (
        <>
            <AppBar
                leftContent={<Back to="/profile" />}
                sx={{ mb: 5 }}
                title={t('appearance')}
                position="static"
            />

            <Container maxWidth="sm">
                <Box sx={{ mb: 3, textAlign: 'center' }}>
                    <Avatar
                        sx={{
                            width: 120,
                            height: 120,
                            mx: 'auto',
                            mb: 1,
                        }}
                        src={user?.avatarS3?.url}
                    />
                    <Typography variant="h5">{user?.fullname}</Typography>
                </Box>

                <Grid container spacing={2} sx={{ mb: 5 }}>
                    {menus.map((item) => {
                        const handleClick = () => {
                            navigate(item.path);
                        };
                        return (
                            <Grid key={item.path} item sm={6} xs={6}>
                                <Paper
                                    component={Button}
                                    fullWidth
                                    sx={{
                                        display: 'grid',
                                        height: '100%',
                                        p: 2,
                                        gap: 2,
                                        textAlign: 'center',
                                        textTransform: 'none',
                                    }}
                                    onClick={handleClick}
                                >
                                    <Avatar
                                        sx={{
                                            mx: 'auto',
                                            bgcolor: item.color[100],
                                            color: item.color[500],
                                        }}
                                    >
                                        {item.icon}
                                    </Avatar>
                                    <Typography component="div" variant="body1">
                                        {item.title}
                                    </Typography>
                                </Paper>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </>
    );
};

export default Appearance;
