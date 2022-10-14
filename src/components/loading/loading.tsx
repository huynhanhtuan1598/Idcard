import { makeStyles } from '@mui/styles';

interface Props {
    full?: boolean;
}

const useStyles = makeStyles({
    wrap: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },

    full: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
    },
});

const Loading = ({ full = true }: Props) => {
    const classes = useStyles();

    const className = full ? `${classes.wrap} ${classes.full}` : classes.wrap;

    return (
        <div className={className}>
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export { Loading };
