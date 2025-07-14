// App.js
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
