import MenuIcon from '@mui/icons-material/Menu';
import {
    AppBar,
    Divider,
    Drawer,
    Hidden,
    IconButton,
    List,
    Theme,
    Toolbar,
} from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { createStyles, makeStyles } from '@mui/styles';
import React from 'react';
import { Outlet } from '../../../../src/react-router-dom';
import { COLORS } from '../../../components/constants/theme';
import { Navigation } from './navigation';
import { UserAction } from './user-action';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            background: blueGrey[50],
            minHeight: '100vh',
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
            borderBottom: '1px solid #ddd',
            background: '#fff',
            boxShadow: 'none',
            color: '#000',
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        // necessary for content to be below app bar
        toolbar: {
            ...theme.mixins.toolbar,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        drawerPaper: {
            width: drawerWidth,
            background: COLORS.admin.base,
            color: '#fff',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            overflow: 'hidden',
            background: COLORS.admin.background,
        },
    })
);

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const LayoutAdmin = ({ window }: Props) => {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <>
            <div className={classes.toolbar}>Vip card</div>
            <Divider />
            <List>
                <Navigation />
            </List>
        </>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>

                    <div style={{ flexGrow: 1 }} />

                    <UserAction />
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor="right"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <div style={{ width: '100%' }}>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export { LayoutAdmin };
