import { grey } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyle = makeStyles({
    wrap: {
        background: '#eee',
        borderRadius: 10,
    },
    label: {
        position: 'absolute',
        top: 0,
        padding: '10px 15px',
        fontSize: 15,
        color: grey[800],
    },
    input: {
        padding: '40px 15px 15px 15px',
        width: '100%',
        border: 'none',
        background: 'transparent',
        fontSize: 19,
        position: 'relative',
        zIndex: 10,

        '&:focus': {
            outline: 'none',
        },
    },
});

interface Props
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    label: string;
    disabled?: boolean;
    autoFocus?: boolean;
    isTextarea?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, Props>(
    ({ label, disabled, autoFocus, isTextarea, ...props }, ref) => {
        const classes = useStyle();

        return (
            <div
                className={classes.wrap}
                style={{ opacity: disabled ? 0.5 : 1 }}
            >
                <div className={classes.label}>{label}</div>
                    <input
                        ref={ref}
                        {...props}
                        className={classes.input}
                        disabled={disabled}
                        autoFocus={autoFocus}
                    />
            </div>
        );
    }
);

export { Input };
