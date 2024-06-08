import React from "react";
import Footer from "../../Component/footer/Footer";
import ServiceCards from "../../Component/Navbar/ServiceCards/SeviceCards";
import "./ServicePage.css";
import Navbar from "../../Component/Navbar/Navbar";
import Portfolio from "../../Component/portfolio/Portfolio";
import Appdevelopment from "../../Component/AppDevlopment/Appdevelopment";
import CloudDevelopment from "../../Component/CloudDevelopment/CloudDevelopment";

const ServicePage = () => {
  return (
    <>
      <Navbar />
      <div style={{marginTop:"150px"}}>
        <h1>Custom software development we offer</h1>
        <p>
          Tailored Solutions, infinite Possibilities, crafting Your Digital
          Future.
        </p>
        <ServiceCards></ServiceCards>
        {/* <h1>Our Process for Custom Software Development</h1>
        <p>
          At Gomilestone, each Coperate Website is custom designed and
          developmed to meet the goals and needs of your bussiness.
        </p> */}
      </div>

    <Portfolio/>
    <Appdevelopment/>
    <CloudDevelopment/>
      <Footer />
    </>
  );
};

export default ServicePage;
