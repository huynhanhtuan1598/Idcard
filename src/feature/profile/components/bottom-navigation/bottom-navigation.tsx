import AssessmentIcon from '@mui/icons-material/Assessment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import StyleIcon from '@mui/icons-material/Style';
import {
    BottomNavigation as BottomNavigationUI,
    BottomNavigationAction,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { AddContactBtn } from './add-contact-btn';

const useStyles = makeStyles({
    root: {
        background: '#fff',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        borderTop: '1px solid #ddd',
    },
    item: {
        paddingLeft: 2,
        paddingRight: 2,
    },
});

interface IMenuItem {
    id: number;
    label: string;
    icon: ReactNode;
    path: string;
}

function BottomNavigation() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const menus: IMenuItem[] = [
        {
            id: 1,
            label: t('nav.home'),
            icon: <DashboardIcon />,
            path: '/profile',
        },
        {
            id: 2,
            label: t('nav.report'),
            icon: <AssessmentIcon />,
            path: '/report',
        },
        {
            id: 3,
            label: t('nav.group'),
            icon: <PeopleAltIcon />,
            path: '/group',
        },
        {
            id: 4,
            label: t('nav.theme'),
            icon: <StyleIcon />,
            path: '/appearance',
        },
    ];

    return (
        <BottomNavigationUI
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);

                const menu = menus.find((m) => m.id === newValue);
                if (menu) {
                    navigate(menu.path);
                }
            }}
            showLabels
            className={classes.root}
        >
            <AddContactBtn />
            {menus.map((menu, index) => {
                const style = {
                    marginRight: index === 1 ? 7 : 0,
                    marginLeft: index === 2 ? 7 : 0,
                };
                return (
                    <BottomNavigationAction
                        key={menu.id}
                        className={classes.item}
                        label={menu.label}
                        icon={menu.icon}
                        style={style}
                    />
                );
            })}
        </BottomNavigationUI>
    );
}

export { BottomNavigation };
