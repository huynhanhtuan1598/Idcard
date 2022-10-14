import { get } from 'lodash';
import { makeStyles } from '@mui/styles';
import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
// import { Template } from '../../../../generated/graphql';

interface Props {
    template: any; // TODO: Fix type Template;
    active: boolean;
}

const useStyles = makeStyles({
    wrap: {
        height: 100,
        width: 90,
        borderRadius: 5,
        cursor: 'pointer',
        border: '3px solid #f1f1f1',
    },
});

function ThumbTemplate({ template, active }: Props) {
    const classes = useStyles();
    let style: CSSProperties = {};

    if (template.background) {
        style.backgroundImage = `url(${get(template, 'background.url')})`;
    }

    if (template.backgroundColor) {
        style.backgroundColor = template.backgroundColor;
        style.backgroundSize = 'cover';
    }

    if (active) {
        style.borderColor = '#f93853';
    }

    return (
        <Link to={`/theme/${template._id}`}>
            <div className={classes.wrap} style={style}></div>
        </Link>
    );
}

export { ThumbTemplate };
