import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import BokkCall from "../bookCall/BokkCall";
import SoftwareHomePage from "../SoftwareHomePage/SoftwareHomePage";
import Experince from "../Experience/Experince";
import OurServicesHome from "../OurServicesHome/OurServicesHome";
import Technology from "../Technology/Technology";
// import CaseStudy from "../CaseStudy/CaseStudyPage";

export default function Home() {
  return (
    <div>
      <Navbar />
      <SoftwareHomePage></SoftwareHomePage>
      <OurServicesHome />
      <Experince></Experince>
      {/* <CaseStudy /> */}
      <Technology />
      <BokkCall />
      <Footer />
    </div>
  );
}
