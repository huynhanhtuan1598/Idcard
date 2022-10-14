import { SvgIcon } from '@mui/material';
import React from 'react';
import email from '../assets/mail.svg';

export const emailList: {
    [key: string]: {
        icon: any;
        logo?: any;
        value: string;
        color: string;
        colorLight: string;
        name: string;
        heading?: string;
    };
} = {
    email: {
        icon: email,
        value: 'email',
        logo: <SvgIcon>{email}</SvgIcon>,
        color: 'rgb(50, 163, 80)',
        colorLight: 'rgba(50, 163, 80, .2)',
        name: 'Email',
    },
};
