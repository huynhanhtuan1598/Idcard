import { CircularProgress, CircularProgressProps, Grid } from '@mui/material';

interface Props extends CircularProgressProps {}

const Spinner = (props: Props) => (
    <Grid container justifyContent="center">
        <Grid item>
            <CircularProgress {...props} />
        </Grid>
    </Grid>
);

export { Spinner };
