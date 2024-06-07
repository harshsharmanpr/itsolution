import React from "react";
import ContactPage from "../Component/ContactPage/ContactPage";
import Navbar from "../Component/Navbar/Navbar";
import BookCall from "../Component/bookCall/BokkCall";
import Footer from "../Component/footer/Footer";

export default function ContactNavbar() {
  return (
    <div>
      <Navbar />

      <ContactPage />
      <BookCall />
      <Footer />
    </div>
  );
}
