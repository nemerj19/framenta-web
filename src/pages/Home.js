import React from "react";
import PageLayout from "../components/PageLayout";
import "../components/Home.css";
import { FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaLaptopCode,
  FaPalette,
  FaMobileAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <div className="welcome-card">
        <h1>
          Welcome to <span className="logo-f">F</span>
          <span className="logo-rest">ramenta.</span>
        </h1>

        <p>Transforming ideas into interactive web experiences.</p>

        {/* Add Icons Section */}
        <div className="tech-icons">
          <FaLaptopCode size={30} />
          <FaMobileAlt size={30} />
          <FaPalette size={30} />
        </div>
      </div>

      <section className="features-section">
        <h2>What We Offer</h2>
        <ul>
          <li>🚀 Fast, SEO-optimized websites</li>
          <li>🎨 Custom UI/UX design for a seamless user experience</li>
          <li>📱 Fully responsive mobile-friendly layouts</li>
          <li>🔍 Search Engine Optimization (SEO)</li>
          <li>⚙️ Front-end development with modern JavaScript frameworks</li>
          <li>🛠️ Maintenance and support after launch</li>
        </ul>
      </section>

      <section className="about-preview">
        <h2>About Us</h2>
        <p>
          Framenta is a web development studio focused on turning your ideas
          into beautifully interactive websites. We blend creativity and code to
          craft experiences that engage users and grow your business.
        </p>
        <p>
          Our team specializes in modern front-end technologies, building
          responsive, lightning-fast websites that not only look stunning but
          also perform seamlessly across all devices. Whether you're a startup,
          a growing business, or an established brand, we work closely with you
          to bring your vision to life with precision and passion.
        </p>
        <p>
          At Framenta, every line of code is written with care, every layout is
          pixel-perfect, and every interaction is purposeful. Your goals are our
          blueprint — let’s build something remarkable together.
        </p>
      </section>

      <section className="tech-stack">
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
        href="https://wa.me/966576404358" // Example: https://wa.me/966501234567
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

      <section className="cta-footer">
        <h2>Let’s Build Something Amazing</h2>
        <button className="cta-button" onClick={() => navigate("/contact-us")}>
          Contact Us
        </button>
      </section>
      <footer className="footer-note">
        Made with <span className="heart">♥</span> in Riyadh
      </footer>
    </PageLayout>
  );
}

export default Home;
