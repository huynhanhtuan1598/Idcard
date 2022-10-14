import { Link } from '../../../src/react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton, IconButtonProps } from '@mui/material';

interface Props extends IconButtonProps {
    to?: string;
}

const Back = ({ to, ...props }: Props) => {
    if (!!to) {
        return (
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="back"
                component={Link}
                to={to}
            >
                <ArrowBackIosIcon />
            </IconButton>
        );
    }

    return (
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="back"
            {...props}
        >
            <ArrowBackIosIcon />
        </IconButton>
    );
};

export { Back };
