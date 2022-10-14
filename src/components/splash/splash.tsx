import { makeStyles } from '@mui/styles';
import React from 'react';
import { Logo } from '../logo/logo';

const useStyle = makeStyles((theme) => ({
    wrap: {
        background: '#fff',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

const Splash = () => {
    const classes = useStyle();

    return (
        <div className={classes.wrap}>
            <Logo size={50} />
        </div>
    );
};

export { Splash };
