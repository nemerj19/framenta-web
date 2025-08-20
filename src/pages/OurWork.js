import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/Home.css"; // Make sure animations are in your CSS

function OurWork() {
  const projects = [
    {
      title: "To-Do App",
      img: "/images/plan-for-tomorrow.png",
      description:
        "A minimal productivity app to manage daily tasks efficiently.",
      link: "https://github.com/nemerj19/plan-for-tomorrow",
    },
    {
      title: "Travel Blog",
      img: "/images/Travel-Blog.png",
      description: "Shows real-time users sharing blogs about traveling.",
      link: "https://github.com/nemerj19/blog-f-b",
    },
    {
      title: "Client's Website",
      img: "/images/Rimstar .png",
      description:
        "A personal client's Website to showcase web design and development work.",
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
      <h2 className="section-title">Our Work</h2>
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
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default OurWork;
