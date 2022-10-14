import { ReactNode } from 'react';
import {
    AppBar as AppBarMui,
    AppBarProps,
    Toolbar,
    Typography,
} from '@mui/material';

interface Props extends AppBarProps {
    title?: string;
    leftContent?: ReactNode;
    rightContent?: ReactNode;
}

const AppBar = ({ title, rightContent, leftContent, ...props }: Props) => {
    return (
        <AppBarMui {...props}>
            <Toolbar>
                {leftContent && leftContent}
                {title && (
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        {title}
                    </Typography>
                )}

                {rightContent && rightContent}
            </Toolbar>
        </AppBarMui>
    );
};

export { AppBar };
