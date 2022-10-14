import { SvgIcon } from '@mui/material';
import baelive from '../assets/baelive.svg';
import behance from '../assets/behance.svg';
import facebook from '../assets/facebook.svg';
import { iconsSocial } from '../assets/icon';
import linkedin from '../assets/in.svg';
import instagram from '../assets/instagram.svg';
import skype from '../assets/skype.svg';
import slack from '../assets/slack.svg';
import tiktok from '../assets/tiktok.svg';
import twitter from '../assets/twitter.svg';
import viber from '../assets/viber.svg';
import youtube from '../assets/youtube.svg';
import zalo from '../assets/zalo.svg';

interface ISocialItem {
    icon: any;
    logo?: any;
    value: string;
    color: string;
    colorLight?: string;
    name: string;
    heading?: string;
    note?: string;
}

export interface ISocialLists {
    [key: string]: ISocialItem;
}

export const socialLists: ISocialLists = {
    skype: {
        icon: skype,
        logo: <SvgIcon>{iconsSocial.skype}</SvgIcon>,
        value: 'skype',
        color: '#0168FF',
        colorLight: 'rgba(1, 104, 255, .2)',
        name: 'Skype',
        note: 'skype:<skype-name>?chat',
    },
    slack: {
        icon: slack,
        logo: <SvgIcon>{iconsSocial.slack}</SvgIcon>,
        value: 'slack',
        color: '#0168FF',
        colorLight: 'rgba(1, 104, 255, .2)',
        name: 'Slack',
    },
    zalo: {
        icon: zalo,
        logo: iconsSocial.zalo,
        value: 'zalo',
        color: '#0168FF',
        colorLight: 'rgba(1, 104, 255, .2)',
        name: 'Zalo',
        note: 'https://zalo.me/<phone-number>',
    },
    facebook: {
        icon: facebook,
        logo: <SvgIcon>{iconsSocial.facebook}</SvgIcon>,
        value: 'facebook',
        color: 'rgb(0, 132, 255)',
        colorLight: 'rgba(1, 104, 255, .2)',
        name: 'Facebook',
        heading: 'Thay đổi địa chỉ facebook',
        note: 'https://www.facebook.com/<facebook-name>',
    },
    instagram: {
        value: 'instagram',
        logo: <SvgIcon>{iconsSocial.instagram}</SvgIcon>,
        icon: instagram,
        color: 'rgb(237, 73, 86)',
        colorLight: 'rgba(237, 73, 86, .2)',
        name: 'Instagram',
        note: 'https://www.instagram.com/<username>',
    },
    tiktok: {
        icon: tiktok,
        logo: <SvgIcon>{iconsSocial.tiktok}</SvgIcon>,
        value: 'tiktok',
        color: 'rgb(0, 0, 0)',
        colorLight: 'rgba(0, 0, 0, .2)',
        name: 'Tiktok',
        note: 'https://www.tiktok.com/<username>',
    },
    twitter: {
        icon: twitter,
        logo: <SvgIcon>{iconsSocial.twitter}</SvgIcon>,
        value: 'twitter',
        color: 'rgb(29, 161, 242)',
        colorLight: 'rgba(0, 132, 255, .2)',
        name: 'Twitter',
        note: 'https://twitter.com/<username>',
    },
    linkedin: {
        icon: linkedin,
        logo: <SvgIcon>{iconsSocial.linkedIn}</SvgIcon>,
        value: 'linkedin',
        color: 'rgb(0, 115, 177)',
        colorLight: 'rgba(0, 155, 177, .2)',
        name: 'Linkedin',
        note: 'https://www.linkedin.com/in/<username>',
    },
    youtube: {
        icon: youtube,
        logo: <SvgIcon>{iconsSocial.youtube}</SvgIcon>,
        value: 'youtube',
        color: 'rgb(255, 1, 0)',
        colorLight: 'rgba(255, 1, 0, .2)',
        name: 'Youtube',
        note: 'https://www.youtube.com/c/<username>',
    },

    pinterest: {
        icon: youtube,
        logo: <SvgIcon>{iconsSocial.pinterest}</SvgIcon>,
        value: 'pinterest',
        color: '#BD081C',
        // colorLight: hexToRGBA('#BD081C', 0.2),
        name: 'Pinterest',
        note: 'https://www.pinterest.com/<username>',
    },
    weChat: {
        icon: youtube,
        logo: <SvgIcon>{iconsSocial.weChat}</SvgIcon>,
        value: 'weChat',
        color: '#07C160',
        // colorLight: hexToRGBA('#07C160', 0.2),
        name: 'WeChat',
        // note:
    },
    whatsApp: {
        icon: youtube,
        logo: <SvgIcon>{iconsSocial.whatsApp}</SvgIcon>,
        value: 'whatsApp',
        color: '#25D366',
        // colorLight: hexToRGBA('#25D366', 0.2),
        name: 'WhatsApp',
        note: 'https://wa.me/<phone-number>',
    },
    tumblr: {
        icon: youtube,
        logo: <SvgIcon>{iconsSocial.tumblr}</SvgIcon>,
        value: 'tumblr',
        color: '#36465D',
        // colorLight: hexToRGBA('#36465D', 0.2),
        name: 'Tumblr',
        note: 'https://<name>.tumblr.com/',
    },
    snapchat: {
        icon: youtube,
        logo: <SvgIcon>{iconsSocial.snapchat}</SvgIcon>,
        value: 'snapchat',
        color: '#36465D',
        // colorLight: hexToRGBA('#36465D', 0.2),
        name: 'Snapchat',
    },
    tinder: {
        icon: youtube,
        logo: <SvgIcon>{iconsSocial.tinder}</SvgIcon>,
        value: 'tinder',
        color: '#FF6B6B',
        // colorLight: hexToRGBA('#FF6B6B', 0.2),
        name: 'Tinder',
    },
    telegram: {
        icon: youtube,
        logo: <SvgIcon>{iconsSocial.telegram}</SvgIcon>,
        value: 'telegram',
        color: '#26A5E4',
        // colorLight: hexToRGBA('#26A5E4', 0.2),
        name: 'Telegram',
        note: ' https://t.me/<username>',
    },
    gitHub: {
        icon: youtube,
        logo: <SvgIcon>{iconsSocial.gitHub}</SvgIcon>,
        value: 'gitHub',
        color: '#181717',
        // colorLight: hexToRGBA('#181717', 0.2),
        name: 'GitHub',
        note: 'https://github.com/<username>',
    },
    twoo: {
        icon: youtube,
        logo: <SvgIcon>{iconsSocial.twoo}</SvgIcon>,
        value: 'twoo',
        color: '#FF7102',
        // colorLight: hexToRGBA('#FF7102', 0.2),
        name: 'Twoo',
    },

    badoo: {
        icon: youtube,
        logo: <SvgIcon>{iconsSocial.badoo}</SvgIcon>,
        value: 'badoo',
        color: '#FF7102',
        // colorLight: hexToRGBA('#FF7102', 0.2),
        name: 'Badoo',
    },

    weibo: {
        icon: youtube,
        logo: <SvgIcon>{iconsSocial.weibo}</SvgIcon>,
        value: 'weibo',
        color: '#E6162D',
        // colorLight: hexToRGBA('#E6162D', 0.2),
        name: 'Weibo',
    },

    flickr: {
        icon: youtube,
        logo: <SvgIcon>{iconsSocial.flickr}</SvgIcon>,
        value: 'flickr',
        color: '#0063DC',
        // colorLight: hexToRGBA('#0063DC', 0.2),
        name: 'Flickr',
        note: 'https://www.flickr.com/photos/<username>',
    },
    steemit: {
        icon: youtube,
        logo: <SvgIcon>{iconsSocial.steemit}</SvgIcon>,
        value: 'steemit',
        color: '#06D6A9',
        // colorLight: hexToRGBA('#06D6A9', 0.2),
        name: 'Steemit',
    },

    evernote: {
        icon: youtube,
        logo: <SvgIcon>{iconsSocial.evernote}</SvgIcon>,
        value: 'evernote',
        color: '#00A82D',
        // colorLight: hexToRGBA('#00A82D', 0.2),
        name: 'Evernote',
    },

    behance: {
        icon: behance,
        logo: <SvgIcon>{iconsSocial.behance}</SvgIcon>,
        value: 'behance',
        color: '#00A82D',
        // colorLight: hexToRGBA('#00A82D', 0.2),
        name: 'Behance',
        note: 'https://www.behance.net/<username>',
    },
    baelive: {
        icon: baelive,
        logo: (
            <img
                src={baelive}
                alt=""
                style={{ display: 'inline-block', width: 32 }}
            />
        ),
        value: 'baelive',
        color: '#00A82D',
        // colorLight: hexToRGBA('#00A82D', 0.2),
        name: 'Baelive',
    },
    viber: {
        icon: viber,
        logo: <SvgIcon>{iconsSocial.viber}</SvgIcon>,
        value: 'viber',
        color: '#00A82D',
        name: 'Viber',
        note: 'viber://chat?number=<phone-number>',
    },
    line: {
        icon: '',
        logo: <SvgIcon>{iconsSocial.line}</SvgIcon>,
        value: 'line',
        color: '#00A82D',
        name: 'Line',
        note: 'https://line.me/R/ti/p/<line-id>',
    },
};
