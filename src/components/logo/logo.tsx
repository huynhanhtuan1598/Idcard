import { makeStyles } from '@mui/styles'; 
import React from 'react';
import logo from './vipid-logo.svg';

const DEFAULT_SIZE_LOGO = 25;

const useStyles = makeStyles({
    logo: {},
});

interface Props {
    size?: number;
}

const Logo = ({ size = DEFAULT_SIZE_LOGO }: Props) => {
    const classes = useStyles();
    return (
        <div>
            <img
                src={logo}
                alt="vipid"
                style={{ height: size }}
                className={classes.logo}
            />
        </div>
    );
};

export { Logo };
