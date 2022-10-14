import { Container, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';
import { Link } from '../../../react-router-dom';
import { Layout } from '../../../components/layout/layout';
import { AuthHeader } from '../../../feature/auth/components/auth-header/auth-header';
import { ForgotPasswordForm } from '../../../feature/auth/components/forgot-password-form/forgot-password-form';
import { LayoutForm } from '../../../feature/auth/components/layout-form/layout-form';


const useStyle = makeStyles({
    wrap: {
        minHeight: '100vh',
    },
});

function ForgotPassword() {
    const { t } = useTranslation('auth');
    const classes = useStyle();

    return (
        <Layout>
            <AuthHeader extra={<Link to="/signup">{t('cancel')}</Link>} />

            <Container maxWidth="sm">
                <Grid className={classes.wrap} direction="column" container>
                    <Grid item>
                        <LayoutForm
                            title={t('forgot_password')}
                            content={<ForgotPasswordForm />}
                            description={t('forgot_password.description')}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
}

export default ForgotPassword;
