import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
    AppBar,
    Container,
    Grid,
    IconButton,
    Theme,
    Toolbar,
    Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';
import { Link } from '../../../react-router-dom';
import { ReportContext } from '../../../components/context/report';
import { DropdownUserAction} from '../components/dropdown-user-action/dropdown-user-action';
import { ReportDetail } from '../components/report-detail/report-detail';
import { ReportOverview } from '../components/report-overview/report-overview';
import { TypeDateReport } from '../components/type-date-report/type-date-report';

const useStyle = makeStyles((theme: Theme) => ({
    appBar: {
        boxShadow: 'none',
        marginBottom: 20,
    },

    leftContent: {
        flexGrow: 1,
        fontSize: 16,
    },
}));

const Report = () => {
    const { t } = useTranslation('report');
    const classes = useStyle();

    return (
        <ReportContext>
            <AppBar
                color="transparent"
                position="static"
                className={classes.appBar}
            >
                <Toolbar>
                    <IconButton edge="start" component={Link} to="/profile">
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.leftContent}>
                        {t('title')}
                    </Typography>

                    <DropdownUserAction />
                </Toolbar>
            </AppBar>

            <Container maxWidth="sm">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TypeDateReport />
                    </Grid>

                    <Grid item xs={12}>
                        <ReportOverview />
                    </Grid>
                    <Grid item xs={12}>
                        <ReportDetail />
                    </Grid>
                </Grid>
            </Container>
        </ReportContext>
    );
};

export default Report;
