import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';
import translationAR from './locales/ar/translation.json';

i18n
    .use(LanguageDetector) // Add language detection
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: translationEN },
            fr: { translation: translationFR },
            ar: { translation: translationAR },
        },
        fallbackLng: 'en', // If detection fails, default to English
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
