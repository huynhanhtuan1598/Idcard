import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PersonIcon from '@mui/icons-material/Person';
import { Avatar, Button, Menu, MenuItem, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { get } from 'lodash';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../../components/context/auth';
import { Notification } from '../../../../components/notification/notification';
import { ETypeUser } from '../../../../components/generated/graphql';
// import { Notification } from '../../../../components';
// import { useAuth } from '../../../../components/context';
// import { ETypeUser } from '../../../../generated/graphql';

const useStyle = makeStyles((theme: Theme) => ({
    button: {
        textTransform: 'initial',
        background: 'transparent',
        padding: 0,
        marginLeft: 5,
        '&:hover': {
            background: 'transparent',
        },
    },

    avatar: {
        borderRadius: 10,
        width: theme.spacing(4),
        height: theme.spacing(4),
    },

    icon: {
        marginRight: theme.spacing(1),
    },
}));

function DropdownUserAction() {
    const { t } = useTranslation();
    const { logout, user } = useAuth();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const classes = useStyle();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const linkProfile = get(user, 'hash_url') || get(user, 'idRegister');
    const avatar = user?.avatarS3?.url;

    return (
        <>
            <Notification />
            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className={classes.button}
            >
                {avatar ? (
                    <Avatar
                        variant="rounded"
                        src={avatar}
                        className={classes.avatar}
                    />
                ) : (
                    <Avatar className={classes.avatar} variant="rounded">
                        <PersonIcon />
                    </Avatar>
                )}

                <ExpandMoreOutlinedIcon
                    style={{ fontSize: 18, marginLeft: 3 }}
                />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {user?.type === ETypeUser.Admin && (
                    <MenuItem component={Link} to="/admin">
                        <GridViewOutlinedIcon className={classes.icon} />{' '}
                        {t('dashboard')}
                    </MenuItem>
                )}

                <MenuItem component={Link} to={`/user/${linkProfile}`}>
                    <PersonOutlineIcon className={classes.icon} />{' '}
                    {t('profile')}
                </MenuItem>
                <MenuItem component={Link} to="/feedbacks">
                    <HeadsetMicOutlinedIcon className={classes.icon} />{' '}
                    {t('feedback')}
                </MenuItem>
                <MenuItem component={Link} to="/change-password">
                    <LockOutlinedIcon className={classes.icon} />{' '}
                    {t('change_password')}
                </MenuItem>
                <MenuItem onClick={logout}>
                    <LogoutOutlinedIcon className={classes.icon} />
                    {t('logout')}
                </MenuItem>
            </Menu>
        </>
    );
}

export { DropdownUserAction };
