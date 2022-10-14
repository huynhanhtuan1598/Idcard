import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MapIcon from '@mui/icons-material/Map';
import PhoneIcon from '@mui/icons-material/Phone';
import PublicIcon from '@mui/icons-material/Public';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import {
    AppBar,
    Container,
    IconButton,
    SvgIcon,
    Toolbar,
    Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from '../../../react-router-dom';
import { iconsSocial } from '../assets/icon';
import { DropdownUserAction } from '../components/dropdown-user-action/dropdown-user-action';
import { ProfileBox } from '../components/profile-box/profile-box';

const useStyle = makeStyles({
    appBar: {
        boxShadow: 'none',
    },
    leftContent: {
        fontSize: 16,
        flexGrow: 1,
    },
});

interface Item {
    type: string;
    label: string;
    placeholder: string;
    icon: ReactNode;
}

function AddContact() {
    const { t } = useTranslation('add_contact');
    const classes = useStyle();
    const navigate = useNavigate();

    const items: Item[] = [
        {
            type: 'phoneNumber',
            label: t('phoneNumber'),
            placeholder: t('phoneNumber.placeholder'),
            icon: <PhoneIcon />,
        },
        {
            type: 'email',
            label: t('email'),
            placeholder: t('email.placeholder'),
            icon: <MailOutlineIcon />,
        },
        {
            type: 'website',
            label: t('website'),
            placeholder: t('website.placeholder'),
            icon: <PublicIcon />,
        },
        {
            type: 'address',
            label: t('address'),
            placeholder: t('address.placeholder'),
            icon: <MapIcon />,
        },
        {
            type: 'service',
            label: t('service'),
            placeholder: t('service.placeholder'),
            icon: <SvgIcon>{iconsSocial.service}</SvgIcon>,
        },
        {
            type: 'social',
            label: t('social'),
            placeholder: t('social.placeholder'),
            icon: <SvgIcon>{iconsSocial.social}</SvgIcon>,
        },

        {
            type: 'bank',
            label: t('bank'),
            placeholder: t('bank.placeholder'),
            icon: <AccountBalanceIcon />,
        },

        {
            type: 'taxcode',
            label: t('taxcode'),
            placeholder: t('taxcode.placeholder'),
            icon: <ReceiptOutlinedIcon />,
        },
        {
            type: 'ecommerce',
            label: t('ecommerce'),
            placeholder: t('ecommerce.placeholder'),
            icon: <ShoppingBagOutlinedIcon />,
        },
    ];

    return (
        <>
            <AppBar
                color="transparent"
                position="static"
                className={classes.appBar}
            >
                <Toolbar>
                    <IconButton edge="start" component={Link} to="/profile">
                        <ArrowBackIcon />
                    </IconButton>

                    <Typography variant="h6" className={classes.leftContent}>
                        {t('title')}
                    </Typography>
                    <DropdownUserAction />
                </Toolbar>
            </AppBar>
            <Container maxWidth="sm">
                <div>
                    {items.map((item) => (
                        <div key={item.type} style={{ margin: '15px 0' }}>
                            <ProfileBox
                                label={item.label}
                                placeholder={item.placeholder}
                                icon={item.icon}
                                onClick={() =>
                                    navigate(`/add-contact/${item.type}`)
                                }
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </>
    );
}

export default AddContact;
