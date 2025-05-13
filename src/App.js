import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

import Home from "./pages/Home";
import WhoWeAre from "./pages/WhoWeAre";
import WhatWeDo from "./pages/WhatWeDO";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Apply direction to <html> element
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";

    // (Optional) Also set lang attribute
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
