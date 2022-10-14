import { Button as MuiButton, ButtonProps } from '@mui/material';
import { ReactNode } from 'react';

export type ButtonAppProps = ButtonProps & {
    children: ReactNode;
    loading?: boolean;
    disabled?: boolean;
};

const Button = ({
    children,
    disabled,
    loading = false,
    ...props
}: ButtonAppProps) => (
    <MuiButton {...props} disabled={loading || disabled}>
        {loading ? 'Loading' : children}
    </MuiButton>
);

export { Button };
