import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from '../en/translations.json';
import vi from '../vi/translations.json';
export const resources = {
    vi,
    en,
} as const;

export const availableLanguages = Object.keys(resources);

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        detection: { order: ['navigator'] },
        fallbackLng: 'vi',
        // debug: true,
        defaultNS: 'common',
        resources,
    });

export { i18n };
