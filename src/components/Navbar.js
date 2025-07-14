// Navbar.js
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <a href="#hero" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Framenta Logo" style={{ height: "30px" }} />
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
          <LanguageSwitcher />
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
            <div style={{ marginTop: "1rem" }}>
              <LanguageSwitcher />
            </div>
          </div>
          <div className="backdrop" onClick={toggleMenu} />
        </>
      )}
    </>
  );
}

export default Navbar;
