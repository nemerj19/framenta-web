import React from "react";
import PageLayout from "../components/PageLayout";
import "../components/Home.css";
import { FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";

function Home() {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <HeroSlider />

      <section className="features-section spaced-section">
        <h2>What We Offer</h2>
        <ul>
          <li>🚀 Fast, SEO-optimized websites</li>
          <li>🎨 Custom UI/UX design for a seamless user experience</li>
          <li>📱 Fully responsive mobile-friendly layouts</li>
          <li>🔍 Search Engine Optimization (SEO)</li>
          <li>⚙️ Front-end development with modern JavaScript frameworks</li>
          <li>🛠️ Maintenance and support after launch</li>
          <div className="web-design-cards">
            <div className="design-card">
              <h3>Basic Web Design</h3>
              <ul>
                <li> Choose from prebuilt creative designs</li>
                <li> Edit chosen design</li>
                <li> Design simple logo</li>
                <li> Build site content</li>
              </ul>
              <button
                className="inquiry-button"
                onClick={() => navigate("/contact-us")}
              >
                Make an Inquiry
              </button>
            </div>

            <div className="design-card">
              <h3>Advanced Web Design</h3>
              <ul>
                <li> Custom creative design for homepage</li>
                <li> Logo design</li>
                <li> Build site content</li>
                <li> Build professional forms</li>
              </ul>
              <button
                className="inquiry-button"
                onClick={() => navigate("/contact-us")}
              >
                Make an Inquiry
              </button>
            </div>
            <div className="design-card">
              <h3>UI/UX Design</h3>
              <ul>
                <li> Research-driven interface design</li>
                <li> User journey mapping</li>
                <li> Wireframes and mockups</li>
                <li> Pixel-perfect visual design</li>
              </ul>
              <button
                className="inquiry-button"
                onClick={() => navigate("/contact-us")}
              >
                Make an Inquiry
              </button>
            </div>

            <div className="design-card">
              <h3>Domain & Hosting</h3>
              <ul>
                <li> Help register your domain</li>
                <li> Fast & secure hosting setup</li>
                <li> Free SSL certificate</li>
                <li> Website backups & support</li>
              </ul>
              <button
                className="inquiry-button"
                onClick={() => navigate("/contact-us")}
              >
                Make an Inquiry
              </button>
            </div>
            <div className="design-card seo-card">
              <h3>SEO Services</h3>
              <ul>
                <li>Comprehensive website audit</li>
                <li>On-page & off-page optimization</li>
                <li>Keyword research & analysis</li>
                <li>Google Search Console setup</li>
              </ul>
              <button onClick={() => navigate("/contact-us")}>Inquire</button>
            </div>
            <div className="design-card app-card">
              <h3>App Development</h3>
              <ul>
                <li>Cross-platform mobile apps</li>
                <li>Intuitive UI/UX design</li>
                <li>Backend integration</li>
                <li>App store deployment</li>
              </ul>
              <button onClick={() => navigate("/contact-us")}>Inquire</button>
            </div>
          </div>
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
