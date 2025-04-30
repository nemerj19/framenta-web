import React from "react";
//import PageLayout from "../components/PageLayout";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      {/* Contact Info Section */}
      <div
        style={{
          marginBottom: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <p>
          <FaPhone style={{ marginRight: "0.5rem" }} />
          +966 57 640 4358
        </p>
        <p>
          <FaEnvelope style={{ marginRight: "0.5rem" }} />
          contact@framenta.com
        </p>
        <p>
          <FaMapMarkerAlt style={{ marginRight: "0.5rem" }} />
          Riyadh, Kingdom of Saudi Arabia
        </p>
      </div>

      {/* Contact Form */}
      <form
        action="https://formspree.io/f/xblgelrb"
        method="POST"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "500px",
        }}
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactUs;
