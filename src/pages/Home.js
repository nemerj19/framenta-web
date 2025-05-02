import React from "react";
import "../components/Home.css";
import { FaGithub, FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

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
          <h2>Our Services</h2>
        </div>

        <div className="web-design-cards">
          {/* Service Cards */}
          {[
            {
              title: "Basic Web Design",
              features: [
                "Choose from prebuilt creative designs",
                "Edit chosen design",
                "Design simple logo",
                "Build site content",
              ],
            },
            {
              title: "Advanced Web Design",
              features: [
                "Custom creative design for homepage",
                "Logo design",
                "Build site content",
                "Build professional forms",
              ],
            },
            {
              title: "UI/UX Design",
              features: [
                "Research-driven interface design",
                "User journey mapping",
                "Wireframes and mockups",
                "Pixel-perfect visual design",
              ],
            },
            {
              title: "Domain & Hosting",
              features: [
                "Help register your domain",
                "Fast & secure hosting setup",
                "Free SSL certificate",
                "Website backups & support",
              ],
            },
            {
              title: "SEO Services",
              features: [
                "Comprehensive website audit",
                "On-page & off-page optimization",
                "Keyword research & analysis",
                "Google Search Console setup",
              ],
            },
            {
              title: "App Development",
              features: [
                "Cross-platform mobile apps",
                "Intuitive UI/UX design",
                "Backend integration",
                "App store deployment",
              ],
            },
          ].map((card, idx) => (
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
                Inquire
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="about-preview center-content">
        <h2>About Us</h2>
        <p>
          Framenta is a web development studio focused on turning your ideas
          into beautifully interactive websites.
        </p>
        <p>
          Our team specializes in modern front-end technologies, building
          responsive, lightning-fast websites that not only look stunning but
          also perform seamlessly across all devices.
        </p>
        <p>
          At Framenta, every line of code is written with care, every layout is
          pixel-perfect, and every interaction is purposeful.
        </p>
      </section>

      <section className="centered-section center-content">
        <h2>Technologies We Use</h2>
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
        <h2>Our Work</h2>
        <div className="our-work-card">
          <h3>Check Out Our Projects</h3>
          <p>
            We take pride in delivering modern, responsive, and user-friendly
            websites. Explore our featured work to see the creativity and
            functionality we bring to life.
          </p>
          <button onClick={() => navigate("/our-work")}>View Projects</button>
        </div>
      </section>

      <section className="home-contact-form center-content">
        <h2 style={{ marginBottom: "1rem" }}>
          Need a Website, Contact Us Today !
        </h2>
        <form
          action="https://formspree.io/f/xblgelrb"
          method="POST"
          className="contact-form"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="phone" name="phone" placeholder="Your Phone" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer className="footer-note center-content">
        Made with <span className="heart">♥</span> in Riyadh
        <div style={{ marginTop: "1rem", fontWeight: "bold" }}></div>
      </footer>
    </>
  );
}

export default Home;
