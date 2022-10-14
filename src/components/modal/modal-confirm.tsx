import { Box, Grid, Modal, Typography } from '@mui/material';
import { cloneElement, ReactNode, useState } from 'react';
import { Button } from '../button/button';
// import { Button } from '../button';

interface OkeProps {
    loading?: boolean;
}

interface Props {
    children: JSX.Element;
    title: string;
    content: ReactNode;
    onOk: () => void;
    okText?: string;
    callback?: () => void;
    okProps?: OkeProps;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    px: 3,
    py: 2,
};

const ModalConfirm = ({
    onOk,
    okText = 'Ok',
    children,
    title,
    content,
    callback,
    okProps,
}: Props) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleCallback = () => callback && callback();

    const handleOpen = () => {
        setOpen(true);
        handleCallback();
    };
    const handleClose = () => {
        setOpen(false);
        handleCallback();
    };

    const handleOk = () => {
        Promise.reject(onOk()).then(() => {
            handleClose();
        });
    };

    return (
        <>
            {cloneElement(children, { onClick: handleOpen })}

            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="keep-mounted-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        {title}
                    </Typography>
                    <Typography
                        id="keep-mounted-modal-description"
                        sx={{ mt: 2 }}
                    >
                        {content}
                    </Typography>

                    <Grid
                        container
                        columnSpacing={1}
                        justifyContent="end"
                        sx={{ marginTop: 1 }}
                    >
                        <Grid item>
                            <Button onClick={handleClose}>Huỷ</Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleOk}
                                {...okProps}
                            >
                                {okText}
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </>
    );
};

export { ModalConfirm };
