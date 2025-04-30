import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          Framenta
        </Link>

        {isMobile ? (
          <button className="menu-button" onClick={() => setIsOpen(true)}>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </button>
        ) : (
          <div className="desktop-links">
            <Link to="/">Home</Link>
            <Link to="/who-we-are">Who We Are</Link>
            <Link to="/what-we-do">What We Do</Link>
            <Link to="/our-work">Our Work</Link>
            <Link to="/contact-us">Contact Us</Link>
          </div>
        )}
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
