import i18n from "i18next";
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationTR from './locales/tr/translation.json';
import translationCN from './locales/cn/translation.json';


i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: translationEN
            },
            tr: {
                translation: translationTR
            },
            cn: {
                translation: translationCN
            }
        },
        lng: "tr",

        // keySeparator: false,
        initImmediate : false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;