import { Container, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';
import { Link } from '../../../react-router-dom';
import { Layout } from '../../../components/layout/layout';
import { AuthHeader } from '../../../feature/auth/components/auth-header/auth-header';
import { ChangePasswordForm } from '../../../feature/auth/components/change-password-form/change-password-form';
import { LayoutForm } from '../../../feature/auth/components/layout-form/layout-form';


const useStyle = makeStyles({
    wrap: {
        minHeight: '100vh',
    },
});

function ChangePassword() {
    const { t } = useTranslation('auth');
    const classes = useStyle();

    return (
        <Layout>
            <AuthHeader extra={<Link to="/profile">{t('cancel')}</Link>} />

            <Container maxWidth="sm">
                <Grid container className={classes.wrap} direction="column">
                    <LayoutForm
                        title={t('change_password')}
                        content={<ChangePasswordForm />}
                    />
                </Grid>
            </Container>
        </Layout>
    );
}

export default ChangePassword;
