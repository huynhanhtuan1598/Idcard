import { Container, Grid, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { AppBar } from '../../../components/appbar/appbar';
import { Back } from '../../../components/appbar/back';
import { useAuth } from '../../../components/context/auth';
import { useAllTemplateUserQuery } from '../../../components/generated/graphql';
import { Loading } from '../../../components/loading/loading';
import { ThemeCard } from '../components/theme-card/theme-card';
// import { AppBar, Back, Loading } from '../../../components';
// import { useAuth } from '../../../context';
// import { useAllTemplateUserQuery } from '../../../generated/graphql';
// import { ThemeCard } from '../components';

const Theme = () => {
    const { t } = useTranslation('theme');
    const { user } = useAuth();

    const { loading, data } = useAllTemplateUserQuery();

    if (loading) {
        return <Loading full />;
    }

    const templates = data?.allTemplateUser.data;

    if (!templates || templates.length === 0) {
        return (
            <Paper>
                <div>No template</div>
            </Paper>
        );
    }

    return (
        <>
            <AppBar
                position="static"
                title={t('title')}
                leftContent={<Back to="/appearance" />}
            />
            <Container maxWidth="sm" sx={{ my: 2 }}>
                <Grid container spacing={2}>
                    {templates.map((item) => {
                        const active = item._id === user?.defaultTemplate?._id;

                        return (
                            <Grid item xs={6} md={3} key={item._id}>
                                <ThemeCard active={active} theme={item} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </>
    );
};

export default Theme;
