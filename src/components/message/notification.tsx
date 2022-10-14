import { SnackbarProvider } from 'notistack';
import { useSnackbar } from 'notistack';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const useMessage = () => {
    const { enqueueSnackbar } = useSnackbar();

    return enqueueSnackbar;
};

const Message = ({ children }: Props) => {
    return (
        <SnackbarProvider
            autoHideDuration={1000}
            maxSnack={3}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
        >
            {children}
        </SnackbarProvider>
    );
};

export { Message, useMessage };
