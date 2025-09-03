// Navbar.js
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";
import { FaGlobe } from "react-icons/fa"; // Globe icon
import logo from "../assets/images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  };

  return (
    <>
      <nav className="navbar">
        <a href="#hero" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Framenta Logo" style={{ height: "45px" }} />
        </a>

        <div className="desktop-links">
          <a href="#hero" onClick={closeMenu}>
            {t("nav.home")}
          </a>
          <a href="#about" onClick={closeMenu}>
            {t("nav.whoWeAre")}
          </a>
          <a href="#services" onClick={closeMenu}>
            {t("nav.whatWeDo")}
          </a>
          <a href="#projects" onClick={closeMenu}>
            {t("nav.ourWork")}
          </a>
          <a href="#contact" onClick={closeMenu}>
            {t("nav.contact")}
          </a>

          {/* Globe icon for language switch */}
          <button onClick={toggleLanguage} className="lang-toggle">
            <FaGlobe size={20} />
          </button>
        </div>

        <div className="hamburger-icon" onClick={toggleMenu}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
      </nav>

      {isOpen && (
        <>
          <div className="sidebar open">
            <a href="#hero" onClick={closeMenu}>
              {t("nav.home")}
            </a>
            <a href="#about" onClick={closeMenu}>
              {t("nav.whoWeAre")}
            </a>
            <a href="#services" onClick={closeMenu}>
              {t("nav.whatWeDo")}
            </a>
            <a href="#projects" onClick={closeMenu}>
              {t("nav.ourWork")}
            </a>
            <a href="#contact" onClick={closeMenu}>
              {t("nav.contact")}
            </a>

            {/* Globe icon inside sidebar */}
            <button
              onClick={toggleLanguage}
              className="lang-toggle"
              style={{ marginTop: "1rem" }}
            >
              <FaGlobe size={20} />
            </button>
          </div>
          <div className="backdrop" onClick={toggleMenu} />
        </>
      )}
    </>
  );
}

export default Navbar;
