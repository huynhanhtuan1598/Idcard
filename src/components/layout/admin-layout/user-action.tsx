import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from '../../../../src/react-router-dom';
import { useAuth } from '../../../components/context/auth';
import { ENotificationType } from '../../generated/graphql';
import { Notification } from '../../notification/notification';

const UserAction = () => {
    const { logout, user } = useAuth();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Notification type={ENotificationType.Admin} />

            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                sx={{ marginLeft: '10px' }}
            >
                <Avatar
                    src={user?.avatarS3?.url}
                    sx={{ width: 32, height: 32 }}
                />
                <ArrowDropDown />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => navigate('/profile')}>
                    Profile
                </MenuItem>
                <MenuItem onClick={() => logout()}>Logout</MenuItem>
            </Menu>
        </>
    );
};

export { UserAction };
