import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaShoppingCart,
  FaTachometerAlt,
  FaTools,
  FaAppStoreIos,
} from "react-icons/fa";
import "./WhatWeDo.css";
import { useTranslation } from "react-i18next";

function WhatWeDo() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <FaLaptopCode size={40} color="#00dfc4" />,
      title: t("services.basic.title"),
      description:
        t("services.basic.feature1") +
        ", " +
        t("services.basic.feature2") +
        ", " +
        t("services.basic.feature3") +
        ", " +
        t("services.basic.feature4"),
    },
    {
      icon: <FaMobileAlt size={40} color="#00dfc4" />,
      title: t("services.advanced.title"),
      description:
        t("services.advanced.feature1") +
        ", " +
        t("services.advanced.feature2") +
        ", " +
        t("services.advanced.feature3") +
        ", " +
        t("services.advanced.feature4"),
    },
    {
      icon: <FaShoppingCart size={40} color="#00dfc4" />,
      title: t("services.seo.title"),
      description:
        t("services.seo.feature1") +
        ", " +
        t("services.seo.feature2") +
        ", " +
        t("services.seo.feature3") +
        ", " +
        t("services.seo.feature4"),
    },
    {
      icon: <FaTachometerAlt size={40} color="#00dfc4" />,
      title: t("services.domain.title"),
      description:
        t("services.domain.feature1") +
        ", " +
        t("services.domain.feature2") +
        ", " +
        t("services.domain.feature3") +
        ", " +
        t("services.domain.feature4"),
    },
    {
      icon: <FaTools size={40} color="#00dfc4" />,
      title: t("services.uiux.title"),
      description:
        t("services.uiux.feature1") +
        ", " +
        t("services.uiux.feature2") +
        ", " +
        t("services.uiux.feature3") +
        ", " +
        t("services.uiux.feature4"),
    },
    {
      icon: <FaAppStoreIos size={40} color="#00dfc4" />,
      title: t("services.app.title"),
      description:
        t("services.app.feature1") +
        ", " +
        t("services.app.feature2") +
        ", " +
        t("services.app.feature3") +
        ", " +
        t("services.app.feature4"),
    },
  ];

  return (
    <div className="whatwedo-container">
      <h2 className="whatwedo-title">{t("home.servicesTitle")}</h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            {service.icon}
            <h3 className="service-title">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatWeDo;
