import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/Home.css"; // for styling
import { useTranslation } from "react-i18next";

function OurWork() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t("projects.todo.title"),
      img: "/images/plan-for-tomorrow.png",
      description: t("projects.todo.description"),
      link: "https://github.com/nemerj19/plan-for-tomorrow",
    },
    {
      title: t("projects.travelBlog.title"),
      img: "/images/Travel-Blog.png",
      description: t("projects.travelBlog.description"),
      link: "https://github.com/nemerj19/blog-f-b",
    },
    {
      title: t("projects.clientWebsite.title"),
      img: "/images/Rimstar .png",
      description: t("projects.clientWebsite.description"),
      link: "https://rimstarest.com",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    cssEase: "ease-in-out",
    pauseOnHover: true,
  };

  return (
    <section className="our-work-section">
      <h2 className="section-title">{t("home.ourWorkTitle")}</h2>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="slide-card-wrapper">
            <div className="slide-card">
              <img
                src={project.img}
                alt={project.title}
                className="slide-card-image"
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="slide-card-link"
              >
                {t("projects.viewLink")}
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default OurWork;
