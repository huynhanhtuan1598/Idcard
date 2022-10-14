import { SvgIcon } from '@mui/material';
import { iconEcommerce } from '../assets/icon';

export const ecommerceList: {
    [key: string]: {
        value: string;
        icon: any;
        logo: any;
        color: string;
        colorLight: string;
        name: string;
        note: string;
    };
} = {
    shopee: {
        icon: <SvgIcon>{iconEcommerce.shopee}</SvgIcon>,
        logo: <SvgIcon>{iconEcommerce.shopee}</SvgIcon>,
        value: 'shopee',
        color: '',
        colorLight: '',
        name: 'Shopee',
        note: 'https://shopee.vn/<shop-name>',
    },
    tiki: {
        icon: <SvgIcon > {iconEcommerce.tiki}</SvgIcon>,
        logo: <SvgIcon>{iconEcommerce.tiki}</SvgIcon>,
        value: 'tiki',
        color: '',
        colorLight: '',
        name: 'Tiki',
        note: 'https://tiki.vn/cua-hang/<shop-name>',
    },
    lazada: {
        icon: <SvgIcon>{iconEcommerce.lazada}</SvgIcon >,
        logo: <SvgIcon>{iconEcommerce.lazada}</SvgIcon>,
        value: 'lazada',
        color: '',
        colorLight: '',
        name: 'Lazada',
        note: 'https://www.lazada.vn/shop/<shop-name>',
    },
};
