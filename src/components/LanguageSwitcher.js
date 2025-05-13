import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "90px", // Just above the WhatsApp icon
        right: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        fontSize: "28px",
        zIndex: 1000,
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <span
        onClick={() => changeLanguage("en")}
        style={{
          border: i18n.language === "en" ? "2px solid #fff" : "none",
          borderRadius: "6px",
          padding: "2px",
        }}
        title="English"
      >
        🇬🇧
      </span>
      <span
        onClick={() => changeLanguage("ar")}
        style={{
          border: i18n.language === "ar" ? "2px solid #fff" : "none",
          borderRadius: "6px",
          padding: "2px",
        }}
        title="العربية"
      >
        🇸🇦
      </span>
    </div>
  );
};

export default LanguageSwitcher;
