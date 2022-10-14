import phone from '../assets/phone.svg';

export const phoneList: {
    [key: string]: {
        value: string;
        icon: any;
        color: string;
        colorLight: string;
        name: { vi: string; en: string };
    };
} = {
    homePhone: {
        icon: phone,
        color: 'rgb(0,86, 145)',
        colorLight: 'rgba(0, 86, 145, .2)',
        name: {
            vi: 'Số cá nhân',
            en: 'Personal number',
        },
        value: 'homePhone',
    },

    workPhone: {
        icon: phone,
        color: 'rgb(28, 150, 252)',
        colorLight: 'rgba(28, 150,252, .2)',
        name: {
            vi: 'Số công ty',
            en: 'Company number',
        },
        value: 'workPhone',
    },
};
