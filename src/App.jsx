import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import ServicePage from "./Pages/ServicesPage/ServicePage";

import CaseStudy from "./Pages/CaseStudy";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactNavbar from "./Pages/ContactNavbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicePage />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
        <Route path="/CaseStudy" element={<CaseStudy />} />
        {/* <Route path="/portfolio " element={<AboutUs/>} /> */}
        <Route path="/contact" element={<ContactNavbar />} />
       <Route path="/portfolio" element={<AboutUs></AboutUs>} />
      </Routes>
    </>
  );
}

export default App;
