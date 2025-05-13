import React from "react";
import "../components/Home.css";
import { FaGithub, FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const serviceCards = [
    {
      title: t("services.basic.title"),
      features: [
        t("services.basic.feature1"),
        t("services.basic.feature2"),
        t("services.basic.feature3"),
        t("services.basic.feature4"),
      ],
    },
    {
      title: t("services.advanced.title"),
      features: [
        t("services.advanced.feature1"),
        t("services.advanced.feature2"),
        t("services.advanced.feature3"),
        t("services.advanced.feature4"),
      ],
    },
    {
      title: t("services.uiux.title"),
      features: [
        t("services.uiux.feature1"),
        t("services.uiux.feature2"),
        t("services.uiux.feature3"),
        t("services.uiux.feature4"),
      ],
    },
    {
      title: t("services.domain.title"),
      features: [
        t("services.domain.feature1"),
        t("services.domain.feature2"),
        t("services.domain.feature3"),
        t("services.domain.feature4"),
      ],
    },
    {
      title: t("services.seo.title"),
      features: [
        t("services.seo.feature1"),
        t("services.seo.feature2"),
        t("services.seo.feature3"),
        t("services.seo.feature4"),
      ],
    },
    {
      title: t("services.app.title"),
      features: [
        t("services.app.feature1"),
        t("services.app.feature2"),
        t("services.app.feature3"),
        t("services.app.feature4"),
      ],
    },
  ];

  return (
    <>
      <div className="hero-image-wrapper">
        <img
          src="/images/frontt.png"
          alt="Framenta - Creative Web Design"
          className="hero-image"
        />
      </div>

      <section className="features-section spaced-section offer-section center-content">
        <div className="home-offer">
          <h2>{t("home.servicesTitle")}</h2>
        </div>

        <div className="web-design-cards">
          {serviceCards.map((card, idx) => (
            <div key={idx} className="design-card">
              <h3>{card.title}</h3>
              <ul>
                {card.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button
                className="inquiry-button"
                onClick={() => navigate("/contact-us")}
              >
                {t("home.inquireButton")}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="about-preview center-content">
        <h2>{t("home.aboutTitle")}</h2>
        <p>{t("home.aboutPara1")}</p>
        <p>{t("home.aboutPara2")}</p>
        <p>{t("home.aboutPara3")}</p>
      </section>

      <section className="centered-section center-content">
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

      <section className="our-work-card-section">
        <h2>{t("home.ourWorkTitle")}</h2>
        <div className="our-work-card">
          <h3>{t("home.projectsTitle")}</h3>
          <p>{t("home.projectsDescription")}</p>
          <button onClick={() => navigate("/our-work")}>
            {t("home.viewProjectsButton")}
          </button>
        </div>
      </section>

      <section className="home-contact-form center-content">
        <h2 style={{ marginBottom: "1rem" }}>{t("home.contactTitle")}</h2>
        <form
          action="https://formspree.io/f/xblgelrb"
          method="POST"
          className="contact-form"
        >
          <input
            type="text"
            name="name"
            placeholder={t("form.name")}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t("form.email")}
            required
          />
          <input
            type="phone"
            name="phone"
            placeholder={t("form.phone")}
            required
          />
          <textarea
            name="message"
            placeholder={t("form.message")}
            rows="5"
            required
          />
          <button type="submit">{t("form.send")}</button>
        </form>
      </section>

      <footer className="footer-note center-content">
        {t("home.footerText")}
        <div style={{ marginTop: "1rem", fontWeight: "bold" }}></div>
      </footer>
    </>
  );
}

export default Home;
