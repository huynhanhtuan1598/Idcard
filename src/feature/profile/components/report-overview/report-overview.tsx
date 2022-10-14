import PersonAddIcon from '@mui/icons-material/PersonAdd';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
    Avatar,
    CircularProgress,
    Grid,
    Paper,
    Skeleton,
    Theme,
    Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../../../components/context/auth';
import { useReport } from '../../../../components/context/report';
import { ReportOverviewInput, User, useReportOverviewQuery } from '../../../../components/generated/graphql';
import { ReportWrap } from '../report-wrap/report-wrap';
// import { useAuth, useReport } from '../../../../components/context';
// import {
//     ReportOverviewInput,
//     User,
//     useReportOverviewQuery,
// } from '../../../../generated/graphql';
// import { ReportWrap } from '../report-wrap';

const useStyle = makeStyles((theme: Theme) => ({
    card: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        textAlign: 'center',
    },
    title: {
        fontSize: 14,
        fontWeight: 500,
    },
    number: {
        marginTop: theme.spacing(1),
        fontWeight: 700,
        fontSize: 30,
    },
    loading: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f1f1f1',
        height: 200,
    },
    icon: {
        width: 40,
        height: 40,
        borderRadius: 15,
    },
    view: {
        background: theme.palette.success.light,
    },
    viewIcon: {
        background: theme.palette.success.dark,
        margin: 'auto',
    },
    save: {
        background: theme.palette.info.light,
    },
    saveIcon: {
        background: theme.palette.info.dark,
        margin: 'auto',
    },
}));

function ReportOverview() {
    const { t } = useTranslation('report');
    const { typeDate } = useReport();
    const { user } = useAuth();
    const ref = useRef(Date.now());
    const classes = useStyle();

    const reportOverviewInput: ReportOverviewInput = {
        userId: (user as User)._id.toString(),
        type: typeDate,
        date: ref.current,
    };

    const { loading, data, error } = useReportOverviewQuery({
        variables: {
            reportOverviewInput,
        },
    });

    if (loading || error) {
        return (
            <Grid spacing={2} container>
                <Grid xs={6} item>
                    <Skeleton height={200} />
                </Grid>
                <Grid xs={6} item>
                    <Skeleton height={200} />
                </Grid>
            </Grid>
        );
    }

    const view = data?.reportOverview.data.reduce(
        (value: number, item: any) => value + item.view,
        0
    );

    const save = data?.reportOverview.data.reduce(
        (value: number, item: any) => value + item.save,
        0
    );

    return (
        <ReportWrap>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Paper className={`${classes.card} ${classes.view}`}>
                        <Avatar variant="circular" className={classes.viewIcon}>
                            <VisibilityIcon className={classes.viewIcon} />
                        </Avatar>

                        <Typography className={classes.number}>
                            {view}
                        </Typography>
                        <Typography className={classes.title}>
                            {t('view')}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={`${classes.card} ${classes.save}`}>
                        <Avatar variant="circular" className={classes.saveIcon}>
                            <PersonAddIcon className={classes.saveIcon} />
                        </Avatar>

                        <Typography className={classes.number}>
                            {save}
                        </Typography>
                        <Typography className={classes.title}>
                            {t('save_contact')}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </ReportWrap>
    );
}

export { ReportOverview };
