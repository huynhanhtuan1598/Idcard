import { Grid, Typography } from '@mui/material';
import NavigateNext from '@mui/icons-material/NavigateNext';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    icon: {
        color: '#165FE6',
    },

    profileBox: {
        background: '#f8f8f8',
        padding: '10px 15px',
        borderRadius: 15,
        cursor: 'pointer',
        overflow: 'hidden',
    },

    label: {
        fontWeight: 300,
    },

    placeholder: {
        fontWeight: 400,
        color: '#B4B4B4',
    },

    content: {
        fontWeight: 500,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'pre-line',
    },
});

interface Props {
    label: string;
    placeholder?: string;
    content?: string;
    icon: any;
    onClick?: () => void;
}

const ProfileBox = ({ label, content, placeholder, icon, onClick }: Props) => {
    const classes = useStyle();

    return (
        <div
            className={classes.profileBox}
            onClick={onClick ? onClick : () => {}}
        >
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={2} className={classes.icon}>
                    <Grid container justifyContent="center">
                        <Grid item>{icon} </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={10}>
                    <Grid container alignItems="center">
                        <Grid item xs={11}>
                            <Typography
                                variant="body2"
                                className={classes.label}
                            >
                                {label}
                            </Typography>

                            <div>
                                {content ? (
                                    <Typography
                                        variant="subtitle1"
                                        className={classes.content}
                                    >
                                        {content}
                                    </Typography>
                                ) : (
                                    <Typography
                                        variant="subtitle2"
                                        className={classes.placeholder}
                                    >
                                        {placeholder}
                                    </Typography>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={1}>
                            <Grid
                                container
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Grid item>
                                    <NavigateNext className={classes.icon} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export { ProfileBox };
