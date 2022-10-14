import {
    Button as BtnComp,
    ButtonProps,
    CircularProgress,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { ReactNode } from 'react';
import { COLORS } from '../../../../components/constants/theme';
// import { COLORS } from '../../../../constants';

const useStyle = makeStyles({
    button: {
        height: 60,
        textTransform: 'none',
        borderRadius: 10,
        boxShadow: 'none',
        background: COLORS.blue,
        fontSize: 16,
    },
});

interface Props extends ButtonProps {
    loading?: boolean;
    children: ReactNode;
}

const Button = ({ loading = false, children, ...props }: Props) => {
    const classes = useStyle();

    return (
        <BtnComp {...props} className={classes.button}>
            {loading ? (
                <CircularProgress size={20} color="inherit" />
            ) : (
                children
            )}
        </BtnComp>
    );
};

export { Button };
