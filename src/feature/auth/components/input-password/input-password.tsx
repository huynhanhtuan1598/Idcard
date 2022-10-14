import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { Input } from '../../../../feature/auth/components/input/input';

const eye = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
    </svg>
);

const useStyle = makeStyles({
    wrap: {
        position: 'relative',
    },
    btnToggle: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        width: 50,
        cursor: 'pointer',
    },

    icon: {
        display: 'block',
        width: 25,
        color: '#555',
    },
});

const eyeOff = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
        />
    </svg>
);

const InputPassword = React.forwardRef((props: any, ref: any) => {
    const classes = useStyle();
    const [isPassword, setIsPassword] = useState<boolean>(true);
    const toggle = () => setIsPassword(!isPassword);

    return (
        <div className={classes.wrap}>
            <Input
                type={isPassword ? 'password' : 'text'}
                {...props}
                ref={ref}
            />
            <div onClick={toggle} className={classes.btnToggle}>
                <span className={classes.icon}>
                    {isPassword ? eye : eyeOff}
                </span>
            </div>
        </div>
    );
});

export { InputPassword };
