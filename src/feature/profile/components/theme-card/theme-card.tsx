import { Card, Radio, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { get } from 'lodash';
import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
// import { Template } from '../../../../generated/graphql';

interface Props {
    active?: boolean;
    theme: any // Template; // TODO: fix type
}

const useStyle = makeStyles((theme: Theme) => ({
    wrap: {
        textAlign: 'center',
    },
    link: {
        textDecoration: 'none',
    },
    title: {
        padding: 5,
        marginTop: 5,
        color: '#313131',
        textAlign: 'center',
        fontWeight: 500,
        textDecoration: 'none',
        textTransform: 'uppercase',
    },
    box: {
        backgroundColor: '#fff',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        paddingBottom: '120%',
        position: 'relative',
        cursor: 'pointer',
        borderRadius: 5,
    },
    checkIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        left: '50%',
        marginLeft: -10,
        background: '#fff',
        height: 20,
        width: 20,
        borderRadius: '100%',
    },
}));

const ThemeCard = ({ active, theme }: Props) => {
    const classes = useStyle();

    let style: CSSProperties = {};

    if (get(theme, 'background.url')) {
        style.backgroundImage = `url(${get(theme, 'background.url')})`;
    }

    if (theme.backgroundColor) {
        style.backgroundColor = theme.backgroundColor
    }

    return (
        <>
            <Card>
                <Link
                    to={`/theme/${theme._id}`}
                    className={classes.link}
                >
                    <div className={classes.wrap}>
                        <div className={classes.box} style={style}>
                            <Radio
                                checked={active}
                                className={classes.checkIcon}
                            />
                        </div>
                    </div>
                </Link>
            </Card>
            <Typography className={classes.title}>{theme.title}</Typography>
        </>
    );
};

export { ThemeCard };
