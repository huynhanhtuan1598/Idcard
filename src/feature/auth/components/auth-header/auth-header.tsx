import { AppBar, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { ReactElement } from 'react';
import { ChangeLanguage } from '../../../../components/change-language/change-language';
import { Logo } from '../../../../components/logo/logo';

const useStyle = makeStyles({
    wrap: {
        minHeight: '100vh',
    },
    extra: {
        color: '#165FE6',
        textDecoration: 'none',
        marginRight: 15,
        fontWeight: 500,
    },
    heading: {
        boxShadow: 'none',
    },
    leftContent: {
        flexGrow: 1,
    },
});

interface Props {
    extra?: ReactElement;
}

function AuthHeader({ extra }: Props) {
    const classes = useStyle();
    return (
        <AppBar
            color="transparent"
            position="static"
            className={classes.heading}
        >
            <Toolbar>
                <div className={classes.leftContent}>
                    <Logo />
                </div>

                {extra &&
                    React.cloneElement(extra, { className: classes.extra })}

                <ChangeLanguage />
            </Toolbar>
        </AppBar>
    );
}

export { AuthHeader };