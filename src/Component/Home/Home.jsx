import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import BokkCall from "../bookCall/BokkCall";
import SoftwareHomePage from "../SoftwareHomePage/SoftwareHomePage";

export default function Home() {
  return (
    <div>
      <Navbar />
      <SoftwareHomePage></SoftwareHomePage>
      <BokkCall />
      <Footer />
    </div>
  );
}
