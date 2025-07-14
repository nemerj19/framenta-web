// Home.js
import React from "react";
import "../components/Home.css";
import desktopEn from "../assets/images/frontt.png";
import desktopAr from "../assets/images/arabic.png";
import { FaGithub, FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { useTranslation } from "react-i18next";
import WhoWeAre from "./WhoWeAre";
import WhatWeDo from "./WhatWeDO";
import OurWork from "./OurWork";
import ContactUs from "./ContactUs";

function Home() {
  const { t, i18n } = useTranslation();
  const selectedImage = i18n.language === "ar" ? desktopAr : desktopEn;

  return (
    <>
      <section id="hero">
        <div className="hero-image-wrapper">
          <img src={selectedImage} alt="Framenta" className="hero-image" />
        </div>
      </section>

      <section id="services">
        <WhatWeDo />
      </section>

      <section className="device-preview-section center-content">
        <h2 data-aos="fade-up">Website Preview</h2>

        {/* Desktop Preview */}
        <div className="device-card" data-aos="zoom-in" data-aos-delay="200">
          <img
            src={require("../assets/images/desktop-preview.png")}
            alt="Desktop View"
            className="desktop-img"
          />
          <p>Desktop View</p>
        </div>

        {/* Mobile Preview */}
        <div className="device-card" data-aos="zoom-in" data-aos-delay="200">
          <div className="samsung-frame">
            <img
              src={require("../assets/images/mobile-preview.png")}
              alt="Mobile View"
              className="samsung-img"
            />
          </div>
          <p>Mobile (Samsung S22) View</p>
        </div>
      </section>

      <section id="about">
        <WhoWeAre />
      </section>

      <section id="projects">
        <OurWork />
      </section>

      <section
        className="centered-section center-content"
        style={{ marginTop: "4rem" }} // or paddingTop
      >
        <h2>{t("home.technologiesTitle")}</h2>
        <div className="tech-icons">
          <FaHtml5 title="HTML5" />
          <FaCss3Alt title="CSS3" />
          <FaJs title="JavaScript" />
          <FaReact title="React" />
          <SiTailwindcss title="Tailwind CSS" />
          <FaGithub title="GitHub" />
        </div>
      </section>

      <section id="contact">
        <ContactUs />
      </section>

      <a
        href="https://wa.me/966576404358"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
          alt="WhatsApp"
          className="whatsapp-icon"
        />
      </a>
    </>
  );
}

export default Home;
