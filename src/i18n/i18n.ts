import i18n from "i18next";
import {reactI18nextModule} from "react-i18next";

import translationEN from './i18n/locales/en/translation.json';
import translationTR from './i18n/locales/tr/translation.json';
import translationCN from './i18n/locales/cn/translation.json';


i18n // @ts-ignore
    .use(reactI18nextModule)
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

        keySeparator: false,

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;