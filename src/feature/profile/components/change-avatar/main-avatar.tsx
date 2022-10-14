import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import EditIcon from '@mui/icons-material/Edit';
import { Avatar, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CSSProperties, useMemo } from 'react';

interface Props {
    src?: string;
    // TODO: fix
    avatarConfig?: any;
    onClick?: () => void;
    isEdit?: boolean;
}

const AVATAR_SIZE = 150;

const useStyle = makeStyles({
    avatar: {
        objectFit: 'cover',
        width: AVATAR_SIZE,
        height: AVATAR_SIZE,
    },

    avatarIcon: {
        fontSize: 30,
        color: '#b4b4b4',
    },
});

const MainAvatar = ({ src, onClick, avatarConfig, isEdit = false }: Props) => {
    const classes = useStyle();

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    const borderWidth = useMemo(
        () => avatarConfig?.borderWidth || 0,
        [avatarConfig]
    );
    const borderRadius = useMemo(
        () => avatarConfig?.borderRadius || 50,
        [avatarConfig]
    );
    const borderColor = useMemo(
        () => avatarConfig?.borderColor || 'transparent',
        [avatarConfig]
    );
    const boxShadow = useMemo(
        () => avatarConfig?.boxShadow || 0,
        [avatarConfig]
    );
    const backgroundColor = useMemo(
        () => avatarConfig?.backgroundColor || '#f1f1f1',
        [avatarConfig]
    );

    const style: CSSProperties = {
        backgroundColor,
        border: `${borderWidth}px solid ${borderColor}`,
        borderRadius: `${borderRadius}%`,
        boxShadow: `0 0 ${boxShadow}px rgba(11,37,75,.5)`,
    };

    return (
        <Box
            onClick={handleClick}
            sx={{ position: 'relative', cursor: 'pointer' }}
        >
            <Avatar className={classes.avatar} style={style} src={src}>
                <CameraAltOutlinedIcon className={classes.avatarIcon} />
            </Avatar>
            {isEdit && (
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        bottom: '-16px',
                        left: '50%',
                        marginLeft: '-16px',
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                        color: '#fff',
                    }}
                >
                    <EditIcon sx={{ fontSize: 18 }} />
                </Box>
            )}
        </Box>
    );
};

export { MainAvatar };
