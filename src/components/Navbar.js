import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          <div>
            <span className="logo-rest">framenta</span>
          </div>
        </Link>

        <div className="desktop-links">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/who-we-are" onClick={closeMenu}>
            About Us
          </Link>
          <Link to="/what-we-do" onClick={closeMenu}>
            Our Services
          </Link>
          <Link to="/our-work" onClick={closeMenu}>
            Our Work
          </Link>
          <Link to="/contact-us" onClick={closeMenu}>
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="hamburger-icon" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      {/* Sidebar for mobile */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/who-we-are" onClick={closeMenu}>
          About Us
        </Link>
        <Link to="/what-we-do" onClick={closeMenu}>
          Our Services
        </Link>
        <Link to="/our-work" onClick={closeMenu}>
          Our Work
        </Link>
        <Link to="/contact-us" onClick={closeMenu}>
          Contact Us
        </Link>
      </div>

      {isOpen && <div className="backdrop" onClick={toggleMenu} />}
    </>
  );
}

export default Navbar;
