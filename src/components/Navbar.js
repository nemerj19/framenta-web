import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          <div>
            <span className="logo-rest">Framenta</span>
          </div>
        </Link>

        <div className="desktop-links">
          <Link to="/">Home</Link>
          <Link to="/who-we-are">Who We Are</Link>
          <Link to="/what-we-do">What We Do</Link>
          <Link to="/our-work">Our Work</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </nav>

      {/* Sidebar for mobile */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-button" onClick={() => setIsOpen(false)}>
          ✕
        </button>
        <Link to="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="/who-we-are" onClick={() => setIsOpen(false)}>
          Who We Are
        </Link>
        <Link to="/what-we-do" onClick={() => setIsOpen(false)}>
          What We Do
        </Link>
        <Link to="/our-work" onClick={() => setIsOpen(false)}>
          Our Work
        </Link>
        <Link to="/contact-us" onClick={() => setIsOpen(false)}>
          Contact Us
        </Link>
      </div>

      {isOpen && <div className="backdrop" onClick={() => setIsOpen(false)} />}
    </>
  );
}

export default Navbar;
