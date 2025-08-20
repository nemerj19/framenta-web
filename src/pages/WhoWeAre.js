import React from "react";
import "./About.css"; // We'll style it here

function About() {
  return (
    <section className="about-section">
      <h2 className="about-title">About Us</h2>

      <div className="about-card">
        <div className="about-image">
          <img src="/images/team.jpg" alt="Our Team" />
        </div>

        <div className="about-text">
          <p>
            At Framenta, a web design company based in Riyadh, under Reem Al
            Njoom Group, Nemer — a full-stack developer specializing in
            front-end development — leads a passionate team of web developers
            focused on delivering high-quality, custom websites.
            <br />
            <br />
            We are dedicated to crafting digital solutions that not only look
            amazing but also drive business success through enhanced user
            experience, performance, and scalability.
            <br />
            <br />
            Our approach blends creativity with cutting-edge technologies to
            ensure that every website we build is responsive, SEO-friendly, and
            tailored to meet our clients’ unique goals.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
