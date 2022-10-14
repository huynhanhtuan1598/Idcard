import PersonIcon from '@mui/icons-material/Person';
import { Avatar, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../../components/context/auth';
// import { useAuth } from '../../../../components/context';

const useStyle = makeStyles({
    wrap: {
        position: 'absolute',
        top: 15,
        right: 15,
        zIndex: 1000,
        height: 30,
        width: 30,
        borderRadius: '100%',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 30,
        height: 30,
    },
});

const UserTopbar = () => {
    const { user } = useAuth();
    const classes = useStyle();

    const href = !!user ? '/profile' : '/';

    const avatar = get(user, 'avatarS3.url');

    return (
        <div className={classes.wrap}>
            <IconButton component={Link} to={href}>
                {avatar ? (
                    <Avatar src={avatar} className={classes.avatar} />
                ) : (
                    <Avatar className={classes.avatar}>
                        <PersonIcon />
                    </Avatar>
                )}
            </IconButton>
        </div>
    );
};

export { UserTopbar };
