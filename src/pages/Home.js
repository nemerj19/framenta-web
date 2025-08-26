import React from "react";
import "../components/Home.css";
import desktopEn from "../assets/images/frontt.png";
import desktopAr from "../assets/images/arabic.png";
import { FaGithub, FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import WhoWeAre from "./WhoWeAre";
import WhatWeDo from "./WhatWeDO";
import OurWork from "./OurWork";
import ContactUs from "./ContactUs";

function Home() {
  const { t, i18n } = useTranslation();
  const selectedImage = i18n.language === "ar" ? desktopAr : desktopEn;

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <>
      {/* Hero Intro */}
      <motion.section
        className="hero-intro"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h1 className="hero-heading">{t("home.welcome")}</h1>
      </motion.section>

      {/* Hero Image */}
      <section id="hero">
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.img
            src={selectedImage}
            alt="Framenta"
            className="hero-image"
            animate={{ y: [0, -10, 0, 10, 0], rotate: [0, -1, 0, 1, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* About Us */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <WhoWeAre />
      </motion.section>

      {/* Services */}
      <motion.section
        id="services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <WhatWeDo />
      </motion.section>

      {/* Device Preview */}
      <motion.section
        className="device-preview-section center-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h2>{t("home.projectsTitle")}</h2>

        <motion.div
          className="device-card"
          whileHover={{ scale: 1.05, y: -10 }}
        >
          <img
            src={require("../assets/images/desktop-preview.png")}
            alt={t("home.desktopView")}
            className="desktop-img"
          />
          <p>{t("home.desktopView")}</p>
        </motion.div>

        <motion.div
          className="device-card"
          whileHover={{ scale: 1.05, y: -10 }}
        >
          <div className="samsung-frame">
            <img
              src={require("../assets/images/mobile-preview.png")}
              alt={t("home.mobileView")}
              className="samsung-img"
            />
          </div>
          <p>{t("home.mobileView")}</p>
        </motion.div>
      </motion.section>

      {/* Projects */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <OurWork />
      </motion.section>

      {/* Technologies */}
      <motion.section
        className="centered-section center-content"
        style={{ marginTop: "4rem" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInScale}
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
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <ContactUs />
      </motion.section>
    </>
  );
}

export default Home;
