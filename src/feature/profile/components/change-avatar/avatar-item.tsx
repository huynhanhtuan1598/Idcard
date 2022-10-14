import { Avatar, CircularProgress, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useAuth } from '../../../../components/context/auth';
import { ImageS3, useUpdateUserInfoMutation } from '../../../../components/generated/graphql';

const SIZE_AVATAR = 60;

const useStyles = makeStyles({
    wrap: {
        cursor: 'pointer',
        display: 'inline-block',
        border: '3px solid',
        borderRadius: '100%',
        position: 'relative',
        margin: 'auto',

        '&:hover': {
            borderColor: '#eee',
        },
    },

    avatar: {
        height: SIZE_AVATAR,
        width: SIZE_AVATAR,
        margin: 1,
    },

    close: {
        height: 20,
        width: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        background: 'red',
        position: 'absolute',
        zIndex: 10,
        top: -5,
        right: -5,
    },
    icon: {
        color: '#fff',
        fontSize: 16,
    },

    loading: {
        background: 'rgba(255, 255, 255,.5)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        borderRadius: '100%',
    },
});

interface Props {
    avatar: ImageS3;
    active?: boolean;
    onClick: () => void;
}
const AvatarItem = ({ avatar, active, onClick }: Props) => {
    const { updateInfo } = useAuth();

    const [updateUserInfo, { loading }] = useUpdateUserInfoMutation({
        onCompleted(data) {
            // updateAvatar(res.data.updateUserInfo.avatarS3);
            updateInfo(data.updateUserInfo?.user);
            onClick();
        },
    });

    const classes = useStyles();

    const handleClick = () => {
        if (active) {
            return;
        }

        updateUserInfo({
            variables: {
                updateUserInfoInput: {
                    avatarS3: avatar._id,
                },
            },
        });
    };

    const style = active ? { borderColor: '#4b5fd0' } : { borderColor: '#eee' };

    return (
        <Box style={{ ...style }} className={classes.wrap}>
            {loading && (
                <div className={classes.loading}>
                    <CircularProgress size={20} />
                </div>
            )}

            <Avatar
                className={classes.avatar}
                src={avatar?.url}
                onClick={handleClick}
            />
        </Box>
    );
};

export { AvatarItem };
