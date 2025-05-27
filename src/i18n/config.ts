import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // ✅ NEW
import enTranslation from './en/translation.json';
import frTranslation from './fr/translation.json';

i18next
  .use(LanguageDetector) // ✅ detect language from localStorage/cookies/etc
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en', // default if no match
    resources: {
      en: { translation: enTranslation },
      fr: { translation: frTranslation },
    },
    interpolation: {
      escapeValue: false, // react already protects from XSS
    },
  });
