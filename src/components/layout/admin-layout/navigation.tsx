import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ContactsIcon from '@mui/icons-material/Contacts';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FeedbackIcon from '@mui/icons-material/Feedback';
import PeopleIcon from '@mui/icons-material/People';
import AmpStoriesIcon from '@mui/icons-material/Store';
import { List } from '@mui/material';
import { MenuItem } from './menu-item';

export interface IMenu {
    id: number | string;
    title: string;
    to: string;
    icon: any;
}

const MENUS: IMenu[] = [
    {
        id: 1,
        title: 'Tổng quan',
        to: '/admin',
        icon: <DashboardIcon />,
    },
    {
        id: 2,
        title: 'Khách hàng',
        to: 'customers',
        icon: <ContactsIcon />,
    },
    {
        id: 3,
        title: 'Đăng ký mua thẻ',
        to: 'buy-card',
        icon: <AssignmentIndIcon />,
    },
    {
        id: 4,
        title: 'Nhóm mua thẻ',
        to: 'buy-card-group',
        icon: <AssignmentIndIcon />,
    },
    {
        id: 5,
        title: 'Danh sách nhóm',
        to: 'groups',
        icon: <PeopleIcon />,
    },
    {
        id: 7,
        title: 'Giao diện',
        to: 'templates',
        icon: <AmpStoriesIcon />,
    },
    {
        id: 8,
        title: 'Góp ý',
        to: 'feedback',
        icon: <FeedbackIcon />,
    },
];

const Navigation = () => {
    return (
        <List component="nav">
            {MENUS.map((item) => {
                return <MenuItem key={item.id} menu={item} />;
            })}
        </List>
    );
};

export { Navigation };
