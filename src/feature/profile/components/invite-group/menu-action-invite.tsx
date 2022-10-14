import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../../../components/context/auth';
import { useRemoveInviteGroupMutation } from '../../../../components/generated/graphql';

interface Props {
    inviteGroupId: string;
    groupId: string;
    callback?: () => void;
}

function MenuActionInvite({ inviteGroupId, groupId, callback }: Props) {
    const { t } = useTranslation('group');
    const { enqueueSnackbar } = useSnackbar();
    const { user } = useAuth();

    const [removeInviteGroup, { loading }] = useRemoveInviteGroupMutation({
        onError() {
            handleClose();
            enqueueSnackbar('Đã xảy ra lỗi', { variant: 'error' });
        },
        onCompleted() {
            handleClose();
            callback && callback();
        },
    });

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const confirmInvite = async () => {
        await removeInviteGroup({
            variables: {
                removeInviteGroupInput: {
                    inviteGroupId,
                    groupId,
                    userId: user?._id as string,
                    confirm: true,
                },
            },
        });

        enqueueSnackbar('Đã nhận lời mời', { variant: 'success' });
    };

    const removeInvite = async () => {
        await removeInviteGroup({
            variables: {
                removeInviteGroupInput: {
                    inviteGroupId,
                    groupId,
                    userId: user?._id as string,
                },
            },
        });
        enqueueSnackbar('Đã xóa lời mời', { variant: 'success' });
    };

    return (
        <div>
            <IconButton
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                edge="end"
                disabled={loading}
            >
                <MoreVertIcon />
            </IconButton>

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={confirmInvite}>
                    {t('confirm_invite')}
                </MenuItem>
                <MenuItem onClick={removeInvite}>{t('remove_invite')}</MenuItem>
            </Menu>
        </div>
    );
}

export { MenuActionInvite };
