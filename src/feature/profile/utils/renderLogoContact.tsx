import {
    AccountBalance,
    MailOutline,
    Map,
    Phone,
    Public,
    ReceiptOutlined,
} from '@mui/icons-material';
import { SvgIcon } from '@mui/material';
// import {
//     default as AccountBalanceIcon,
//     default as SvgIcon,
// } from '@material-ui/icons/AccountBalance';
// import MailOutlineIcon from '@material-ui/icons/MailOutline';
// import MapIcon from '@material-ui/icons/Map';
// import PhoneIcon from '@material-ui/icons/Phone';
// import PublicIcon from '@material-ui/icons/Public';import React from 'react';
import { iconsSocial } from '../assets/icon';
import { ETypeContact } from './getListContact';

export function renderLogoContact(type: ETypeContact, contactItem: any) {
    if (type === ETypeContact.Bank) {
        return <AccountBalance />;
    }

    if (type === ETypeContact.Email) {
        return <MailOutline />;
    }

    if (type === ETypeContact.Phone) {
        return <Phone />;
    }

    if (type === ETypeContact.Website) {
        return <Public />;
    }

    if (type === ETypeContact.Address) {
        return <Map />;
    }

    if (type === ETypeContact.Services) {
        return <SvgIcon>{iconsSocial.service}</SvgIcon>;
    }

    if (type === ETypeContact.Taxcode) {
        return <ReceiptOutlined />;
    }

    return contactItem.logo;
}
