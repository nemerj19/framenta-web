import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaShoppingCart,
  FaTachometerAlt,
  FaTools,
} from "react-icons/fa";
import "./WhatWeDo.css";

function WhatWeDo() {
  return (
    <div className="whatwedo-container">
      <h2 className="whatwedo-title">What We Do</h2>

      <div className="services-grid">
        <div className="service-card">
          <FaLaptopCode size={40} color="#00dfc4" />
          <h3 className="service-title">Custom Website Development</h3>
          <p>
            We create tailored websites that are beautiful, functional, and easy
            to manage.
          </p>
        </div>

        <div className="service-card">
          <FaMobileAlt size={40} color="#00dfc4" />
          <h3 className="service-title">Responsive Design</h3>
          <p>
            Our websites adapt seamlessly to any screen size, ensuring a great
            experience on all devices.
          </p>
        </div>

        <div className="service-card">
          <FaShoppingCart size={40} color="#00dfc4" />
          <h3 className="service-title">E-commerce Integration</h3>
          <p>
            We help businesses set up powerful online stores with seamless
            payment and product management.
          </p>
        </div>

        <div className="service-card">
          <FaTachometerAlt size={40} color="#00dfc4" />
          <h3 className="service-title">Performance Optimization</h3>
          <p>
            Speed is key. We optimize websites to ensure fast load times and
            smooth navigation.
          </p>
        </div>

        <div className="service-card">
          <FaTools size={40} color="#00dfc4" />
          <h3 className="service-title">Maintenance & Support</h3>
          <p>
            Our job doesn't end after launch. We offer ongoing support to keep
            your site running smoothly.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
