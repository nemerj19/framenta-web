import React from "react";
import "./Footer.css"; // optional CSS

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Framenta. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
