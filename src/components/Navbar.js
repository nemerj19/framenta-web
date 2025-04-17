import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <h2 className="logo">
          <Link to="/" className="logo-link">
            <span className="logo-f">F</span>
            <span className="logo-rest">ramenta</span>
          </Link>
        </h2>
        <button className="menu-button" onClick={() => setIsOpen(true)}>
          ☰
        </button>
      </nav>

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

      {/* Optional backdrop */}
      {isOpen && <div className="backdrop" onClick={() => setIsOpen(false)} />}
    </>
  );
}

export default Navbar;
