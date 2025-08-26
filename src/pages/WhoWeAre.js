import React from "react";
import "./About.css";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section className="about-section">
      <h2 className="about-title">{t("about.title")}</h2>

      <div className="about-card">
        <div className="about-image">
          <img src="/images/team.jpg" alt={t("about.imageAlt")} />
        </div>

        <div className="about-text">
          <p>{t("about.paragraph1")}</p>
          <br />
          <p>{t("about.paragraph2")}</p>
          <br />
          <p>{t("about.paragraph3")}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
