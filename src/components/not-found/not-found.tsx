import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from '../../../src/react-router-dom';

const useStyle = makeStyles({
    wrap: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 15,
        minHeight: '100vh',
    },
    title: {
        fontSize: 100,
        fontWeight: 700,
        color: '#ff0051',
    },
    text: {
        fontSize: 16,
        fontWeight: 500,
        marginBottom: 30,
    },
});

const NotFound = () => {
    const classes = useStyle();

    return (
        <div className={classes.wrap}>
            <div className={classes.title}>404</div>
            <div className={classes.text}>Trang này không tồn tại</div>
            <Button
                component={Link}
                to="/"
                variant="contained"
                size="large"
                color="secondary"
            >
                Trở lại trang chủ
            </Button>
        </div>
    );
};

export { NotFound };
