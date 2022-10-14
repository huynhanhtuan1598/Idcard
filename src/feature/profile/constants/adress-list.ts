import vietinbank from '../assets/vietin.svg';
import vietcombank from '../assets/vietcombank.svg';

export const addressList: {
    [key: string]: {
        icon: string;
        color: string;
        colorLight: string;

        name: { vi: string; en: string };
        value: string;
    };
} = {
    homeAddress: {
        icon: vietinbank,
        color: 'rgb(0,86, 145)',
        colorLight: 'rgba(0, 86, 145, .2)',
        name: {
            vi: 'Địa chỉ nhà',
            en: 'Address',
        },
        value: 'homeAddress',
    },
    workAddress: {
        icon: vietcombank,
        color: 'rgb(0, 80, 48)',
        colorLight: 'rgba(0, 80, 48, .2)',
        name: {
            vi: 'Địa chỉ làm việc',
            en: 'Work address',
        },
        value: 'workAddress',
    },
};
