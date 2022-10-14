import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ReactNode } from 'react';

interface Props {
    loading?: boolean;
    title?: string;
    children: ReactNode;
}

const useStyle = makeStyles({
    title: {
        fontSize: 16,
    },
});

const ReportWrap = ({ title, loading = true, children }: Props) => {
    const classes = useStyle();

    return (
        <Grid container spacing={2}>
            {title && (
                <Grid item xs={12}>
                    <Typography variant="h6" className={classes.title}>
                        {title}
                    </Typography>
                </Grid>
            )}
            <Grid item xs={12}>
                {children}
            </Grid>
        </Grid>
    );
};

export { ReportWrap };
