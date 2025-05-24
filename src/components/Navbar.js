import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navbar.css";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "../assets/images/logo.png"; // Your logo image

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
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Framenta Logo" style={{ height: "30px" }} />
        </Link>

        <div className="desktop-links">
          <Link to="/" onClick={closeMenu}>
            {t("nav.home")}
          </Link>
          <Link to="/who-we-are" onClick={closeMenu}>
            {t("nav.whoWeAre")}
          </Link>
          <Link to="/what-we-do" onClick={closeMenu}>
            {t("nav.whatWeDo")}
          </Link>
          <Link to="/our-work" onClick={closeMenu}>
            {t("nav.ourWork")}
          </Link>
          <Link to="/contact-us" onClick={closeMenu}>
            {t("nav.contact")}
          </Link>

          {/* 🌐 Language switcher on desktop */}
          <LanguageSwitcher />
        </div>

        {/* 🍔 Mobile Hamburger Icon */}
        <div className="hamburger-icon" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      {/* 📱 Mobile Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          {t("nav.home")}
        </Link>
        <Link to="/who-we-are" onClick={closeMenu}>
          {t("nav.whoWeAre")}
        </Link>
        <Link to="/what-we-do" onClick={closeMenu}>
          {t("nav.whatWeDo")}
        </Link>
        <Link to="/our-work" onClick={closeMenu}>
          {t("nav.ourWork")}
        </Link>
        <Link to="/contact-us" onClick={closeMenu}>
          {t("nav.contact")}
        </Link>

        {/* 🌐 Language switcher on mobile */}
        <div style={{ marginTop: "1rem" }}>
          <LanguageSwitcher />
        </div>
      </div>

      {isOpen && <div className="backdrop" onClick={toggleMenu} />}
    </>
  );
}

export default Navbar;
