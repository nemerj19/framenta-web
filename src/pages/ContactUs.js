import React from "react";
import { useTranslation } from "react-i18next";

function ContactUs() {
  const { t } = useTranslation();

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "3.5rem",
          color: "#ffffff",
          marginBottom: "2rem",
          marginTop: "2rem",
        }}
      >
        {t("home.contactUsTitle")}
      </h2>

      {/* Contact Details */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "2.5rem",
          lineHeight: "1.8",
          color: "#ffffff",
        }}
      >
        <p>📞 +966 57 640 4358</p>
        <p>📧 contact@framenta.com</p>
        <p>📍 Riyadh, Kingdom of Saudi Arabia</p>
      </div>

      {/* Contact Form */}
      <form
        action="https://formspree.io/f/xblgelrb"
        method="POST"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder={t("form.name")}
          required
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder={t("form.email")}
          required
          style={inputStyle}
        />
        <textarea
          name="message"
          placeholder={t("form.message")}
          rows="5"
          required
          style={inputStyle}
        ></textarea>
        <button type="submit" style={buttonStyle}>
          {t("form.send")}
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  padding: "0.75rem",
  borderRadius: "6px",
  border: "1px solid #555",
  fontSize: "1rem",
  backgroundColor: "#1e1e1e",
  color: "#fff",
};

const buttonStyle = {
  padding: "0.75rem",
  backgroundColor: "#00dfc4",
  color: "#000",
  border: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "1rem",
};

export default ContactUs;
