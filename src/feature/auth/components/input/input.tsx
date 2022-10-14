import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyle = makeStyles({
    input: {
        border: 'none',
        display: 'block',
        width: '100%',
        background: '#F8F8F8',
        borderRadius: 20,
        height: 60,
        padding: '0 15px',
        fontSize: 16,

        '&:focus': {
            outline: 'none',
        },
    },
    error: {
        border: '1px solid red',
    },
});

// TODO defined type
const Input = React.forwardRef(({ error, ...props }: any, ref: any) => {
    const classes = useStyle();

    const errorStyle = {
        border: '1px solid red',
        background: '#fbebeb',
    };

    return (
        <input
            {...props}
            className={classes.input}
            style={error ? errorStyle : {}}
            ref={ref}
        />
    );
});

export { Input };
