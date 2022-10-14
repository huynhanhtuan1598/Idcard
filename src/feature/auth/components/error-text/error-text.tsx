import { FormHelperText } from '@mui/material';

interface Props {
    message: string;
}

const ErrorText = ({ message }: Props) => {
    return <FormHelperText error>{message}</FormHelperText>;
};

export { ErrorText };
