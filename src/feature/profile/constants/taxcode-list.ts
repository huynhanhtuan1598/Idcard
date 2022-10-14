import { Receipt } from '@mui/icons-material';

export const taxcodeList: {
    [key: string]: {
        value: string;
        icon: any;
        color: string;
        colorLight: string;
        name: { vi: string; en: string };
    };
} = {
    personal_taxcode: {
        icon: Receipt,
        color: 'rgb(0,86, 145)',
        colorLight: 'rgba(0, 86, 145, .2)',
        name: {
            vi: 'Mã số thuế cá nhân',
            en: 'Personal tax code',
        },
        value: 'personal_taxcode',
    },

    company_taxcode: {
        icon: Receipt,
        color: 'rgb(28, 150, 252)',
        colorLight: 'rgba(28, 150,252, .2)',
        name: {
            vi: 'Mã số thuế công ty',
            en: 'Company tax code',
        },
        value: 'company_taxcode',
    },
};
