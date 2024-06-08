import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import ServicePage from "./Pages/ServicesPage/ServicePage";
import ContactPage from "./Component/ContactPage/ContactPage";

import CaseStudy from "./Pages/CaseStudy";
import AboutUs from "./Pages/AboutUs/AboutUs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/CaseStudy" element={<CaseStudy />} />
        <Route path="/portfolio " element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
