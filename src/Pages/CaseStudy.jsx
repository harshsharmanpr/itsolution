import React from "react";
import CaseStudyPage from "../Component/CaseStudy/CaseStudyPage";
import CaseStudyPage1 from "../Component/CaseStudy/CaseStudyPage1";

import SoftwareHomePage from "../Component/SoftwareHomePage/SoftwareHomePage";
import BookCall from "../Component/bookCall/BokkCall";
import Footer from "../Component/footer/Footer";
import Navbar from "../Component/Navbar/Navbar";

export default function CaseStudy() {
  return (
    <div>
      <Navbar />
      <SoftwareHomePage />
      <CaseStudyPage />
      <CaseStudyPage1 />
      <BookCall />
      <Footer />
    </div>
  );
}
