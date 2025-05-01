import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa"; // Import icons for LinkedIn and Instagram

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1e1e1e",
        color: "#fff",
        padding: "1.4rem 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // Makes sure the content is spaced evenly
        minHeight: "200px", // Ensures the footer takes up enough space
      }}
    >
      <div
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Left-aligned section */}
        <div style={{ maxWidth: "50%", marginLeft: "2rem" }}>
          {/* Address */}
          <h3 style={{ marginBottom: "0.5rem" }}>Address</h3>
          <p style={{ margin: 0 }}>Riyadh,</p>
          <p style={{ marginBottom: "1.5rem" }}>Kingdom of Saudi Arabia</p>

          {/* Email */}
          <h3 style={{ marginBottom: "0.5rem" }}>Email</h3>
          <p style={{ marginBottom: "1.5rem" }}>
            <a
              href="mailto:contact@framenta.com"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              contact@framenta.com
            </a>
          </p>

          {/* Social Media */}
          <h3 style={{ marginBottom: "1rem" }}>Social Media</h3>
          <div style={{ marginBottom: "1.5rem" }}>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", margin: "0 1rem" }}
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://www.instagram.com/framenta_"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", margin: "0 1rem" }}
            >
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright text centered at the bottom */}
      <div
        style={{
          textAlign: "center",
          marginTop: "2rem",
          marginBottom: "1rem", // Adds space at the bottom
        }}
      >
        <p>© 2025 Framenta. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
