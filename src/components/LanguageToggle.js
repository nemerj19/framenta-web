// src/components/LanguageToggle.js
import React from "react";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <button onClick={toggleLanguage}>
      {i18n.language === "en" ? "عربى" : "English"}
    </button>
  );
};

export default LanguageToggle;
