import React from "react";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher"; // Adjust path if needed

function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      style={{
        backgroundColor: "#000000",
        color: "#fff",
        padding: "1.4rem 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "200px",
      }}
    >
      <div
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ maxWidth: "50%", marginLeft: "2rem" }}>
          {/* Language Switcher (Flags) */}
          <LanguageSwitcher />

          {/* Address */}
          <h3 style={{ marginBottom: "0.5rem" }}>{t("footer.address")}</h3>
          <p style={{ margin: 0 }}>{t("footer.city")}</p>
          <p style={{ marginBottom: "1.5rem" }}>{t("footer.country")}</p>

          {/* Email */}
          <h3 style={{ marginBottom: "0.5rem" }}>{t("footer.email")}</h3>
          <p style={{ marginBottom: "1.5rem" }}>
            <a
              href="mailto:framenta.sa@gmail.com"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              framenta.sa@gmail.com
            </a>
          </p>

          {/* Social Media */}
          <h3 style={{ marginBottom: "1rem" }}>{t("footer.social")}</h3>
          <div style={{ marginBottom: "1.5rem" }}>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", margin: "0 1rem" }}
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://www.instagram.com/framenta_"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", margin: "0 1rem" }}
            >
              <FaInstagram size={30} />
            </a>

            <a
              href="https://api.whatsapp.com/send/?phone=966576404358&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", margin: "0 1rem" }}
            >
              <FaWhatsapp size={30} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer text */}
      <div
        style={{
          textAlign: "center",
          marginTop: "2rem",
          marginBottom: "1rem",
        }}
      >
        <p>{t("home.footerText")}</p>
      </div>
    </footer>
  );
}

export default Footer;
