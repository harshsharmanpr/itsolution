import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import BokkCall from "../bookCall/BokkCall";

export default function Home() {
  return (
    <div>
      <Navbar />
      <BokkCall />
      <Footer />
    </div>
  );
}
