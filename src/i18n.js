import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
i18n
  .use(Backend) // Loads translations from public/locales directory
  .use(LanguageDetector) // Detects the user's language
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    fallbackLng: "en", // Default language
    detection: {
      order: ["querystring", "localStorage", "cookie", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"], // For persistent language selection
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Path to load translations from
    },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
