import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend) // Load translations using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "pt",
    lng: "pt", // default language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    backend: {
      loadPath: "/locales/{{lng}}.json", // Path to load translations from public folder
    },
  });

export default i18n;
