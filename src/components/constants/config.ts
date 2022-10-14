export const IS_UPGRADE = false;
export const DOMAIN =
    process.env.NODE_ENV === 'production'
        ? 'https://vipid.app'
        : 'http://localhost:3000';
