import React from "react";
import CaseStudyPage from "../Component/CaseStudy/CaseStudyPage";
import CaseStudyPage1 from "../Component/CaseStudy/CaseStudyPage1";

import SoftwareHomePage from "../Component/SoftwareHomePage/SoftwareHomePage";
import BookCall from "../Component/bookCall/BokkCall";
import Footer from "../Component/footer/Footer";
import Navbar from "../Component/Navbar/Navbar";
import CaseStudy2 from "../Component/CaseStudy/CaseStudy2";
import CaseStudy3 from "../Component/CaseStudy/CaseStudy3";



export default function CaseStudy() {
  return (
    <div>
      <Navbar />
      <SoftwareHomePage />
      <CaseStudyPage />
      <CaseStudyPage1 />
      <CaseStudy2/>
      <CaseStudy3/>
   
      <BookCall />
      <Footer />
    </div>
  );
}
