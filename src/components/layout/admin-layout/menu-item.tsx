import { makeStyles } from '@mui/styles';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link, useLocation } from '../../../../src/react-router-dom';
import { IMenu } from './navigation';

interface Props {
    menu: IMenu;
}

const useStyles = makeStyles({
    menu: {
        color: '#fff',

        '&:hover': {
            background: 'rgba(0, 0, 0, 0.08)',
        },

        icon: {
            minWidth: 40,
        },
    },

    active: {
        color: '#fff',
        background: 'rgba(0, 0, 0, 0.08)',
    },

    wrapIcon: {
        minWidth: 40,
        color: '#ddd',
    },

    icon: {
        color: '#ddd',
    },
});

const MenuItem = ({ menu }: Props) => {
    const location = useLocation();
    const classes = useStyles();

    const isActive = location.pathname === `/admin/${menu.to}`;

    const className = isActive
        ? `${classes.icon}, ${classes.active}`
        : classes.icon;

    return (
        <ListItem
            key={menu.id}
            component={Link}
            to={menu.to}
            className={className}
        >
            <ListItemIcon className={classes.wrapIcon}>
                {menu.icon}
            </ListItemIcon>
            <ListItemText primary={menu.title} />
        </ListItem>
    );
};

export { MenuItem };
