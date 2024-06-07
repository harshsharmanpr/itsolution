import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import ServicePage from "./Pages/ServicesPage/ServicePage";

import CaseStudy from "./Pages/CaseStudy";
import ContactNavbar from "./Pages/ContactNavbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact" element={<ContactNavbar />} />
        <Route path="/casestudy" element={<CaseStudy />} />
      </Routes>
    </>
  );
}

export default App;
