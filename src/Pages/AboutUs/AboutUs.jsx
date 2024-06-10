import React from "react";
import Footer from "../../Component/footer/Footer";
// import ServiceCards from "../../Component/Navbar/ServiceCards/SeviceCards";
import "./About.css";
import Navbar from "../../Component/Navbar/Navbar";
import Portfolio from "../../Component/portfolio/Portfolio";
// import Appdevelopment from "../../Component/AppDevlopment/Appdevelopment";
// import CloudDevelopment from "../../Component/CloudDevelopment/CloudDevelopment";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div style={{marginTop:"150px"}}>
      </div>

    <Portfolio/>
    {/* <Appdevelopment/>
    <CloudDevelopment/> */}
      <Footer />
    </>
  );
};

export default AboutUs;
