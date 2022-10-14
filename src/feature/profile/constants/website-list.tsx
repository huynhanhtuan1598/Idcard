import PublicIcon from '@mui/icons-material/Public';
import React from 'react';
import email from '../assets/mail.svg';

export const websiteList: {
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
    website: {
        icon: email,
        value: 'website',
        logo: <PublicIcon />,
        color: 'rgb(50, 163, 80)',
        colorLight: 'rgba(50, 163, 80, .2)',
        name: 'Website',
    },
};
