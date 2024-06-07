import React from "react";
import ServiceCards from "../../Component/Navbar/ServiceCards/SeviceCards";
import "./ServicePage.css";
import Navbar from "../../Component/Navbar/Navbar";

const ServicePage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <h1>Custom software development we offer</h1>
        <p>
          Tailored Solutions, infinite Possibilities, crafting Your Digital
          Future.
        </p>
        <ServiceCards></ServiceCards>
        <h1>Our Process for Custom Software Development</h1>
        <p>
          At Gomilestone, each Coperate Website is custom designed and
          developmed to meet the goals and needs of your bussiness.
        </p>
      </div>
    </>
  );
};

export default ServicePage;
