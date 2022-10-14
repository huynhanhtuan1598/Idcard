import { Container, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';
import { Link } from '../../../react-router-dom';
import { Layout } from '../../../components/layout/layout';
import { AuthHeader } from '../../../feature/auth/components/auth-header/auth-header';
import { LayoutForm } from '../../../feature/auth/components/layout-form/layout-form';
import { LoginForm } from '../../../feature/auth/components/login-form/login-form';

const useStyle = makeStyles({
    wrap: {
        minHeight: 'calc(100vh - 56px)',
    },
    link: {
        color: '#165FE6',
        textDecoration: 'none',
        marginRight: 15,
        fontWeight: 500,
    },
});

function Login() {
    const classes = useStyle();
    const { t } = useTranslation('auth');

    return (
        <Layout title="Login">
            <AuthHeader extra={<Link to="/signup">{t('signup')}</Link>} />

            <Container maxWidth="sm">
                <Grid className={classes.wrap} direction="column" container>
                    <Grid item>
                        <Grid container direction="column">
                            <Grid item>
                                <LayoutForm
                                    title={t('login')}
                                    content={<LoginForm />}
                                    description={t('description')}
                                />
                            </Grid>

                            <Grid item style={{ textAlign: 'center' }}>
                                <Link className={classes.link} to="/forgot">
                                    {t('forgot_password')}
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
}

export default Login;
