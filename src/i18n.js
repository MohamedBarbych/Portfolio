import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';
import translationAR from './locales/ar/translation.json';

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: translationEN },
        fr: { translation: translationFR },
        ar: { translation: translationAR },
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
