import phone from '../assets/phone.svg';

export const servicesList: {
    [key: string]: {
        icon: string;
        color: string;
        colorLight: string;
        name: {
            en: string;
            vi: string;
        };
    };
} = {
    services: {
        icon: phone,
        color: 'rgb(0,86, 145)',
        colorLight: 'rgba(0, 86, 145, .2)',
        name: {
            vi: 'Dịch vụ',
            en: 'Service',
        },
    },
};
