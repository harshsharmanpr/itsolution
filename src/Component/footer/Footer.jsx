import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEnvelope,
  faPhone,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
// import {
//   faFacebookF,
//   faTwitter,
//   faGoogle,
//   faInstagram,
//   faLinkedin,
//   faGithub,
// } from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <footer className=" colors page-footer font-small blue pt-4">
    {/* <section className="copyright footer-copyright text-center py-3 ">
      <div className="text-center text-white">
        <span>qClick Services</span>
      </div>
      <div className="social-icons">
        <a href="" className="me-4 text-reset">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="" className="me-4 text-reset">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="" className="me-4 text-reset">
          <FontAwesomeIcon icon={faGoogle} />
        </a>
        <a href="" className="me-4 text-reset">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="" className="me-4 text-reset">
          {" "}
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="" className="me-4 text-reset">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </section> */}
    <div className="container-fluid text-center text-md-left">
      <div className=" text-color row mt-6">
        {/* <hr className="clearfix w-100 d-md-none pb-0"/> */}

        <div className=" h5-hedding col-md-4 mb-md-0 mb-4">
          <h5 className="mr-6">Technology</h5>
          <ul className="">
            <li>
              <a href="#!">Node js</a>
            </li>
            <li>
              <a href="#">React js</a>
            </li>
            <li>
              <a href="#">Flutter</a>
            </li>
            <li>
              <a href="#">Shopify</a>
            </li>
            <li>
              <a href="#">Wordpress</a>
            </li>
            <li>
              <a href="#">Php</a>
            </li>
            <li>
              <a href="#">.NET</a>
            </li>
            <li>
              <a href="#">Laravel</a>
            </li>
          </ul>
        </div>
        <div className="h5hedding col-md-4 mb-5 md-5">
          <h5 className=" ">Quesk</h5>
          <ul className="">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </div>
        <div className=" h5hedding1 col-md-2 mb-md-0 mb-3 ">
          <h5 className=" ">Contact</h5>
          <ul className="">
            <li>
              <FontAwesomeIcon icon={faHome} className="me-3" /> B-4 Ground
              floor Sector 63 Noida Uttar Pradesh
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="me-3" />{" "}
              customercare@qclick.in
            </li>
            <li>
              <FontAwesomeIcon icon={faPrint} className="me-3" /> +91 9811175188
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} /> +91 9811175188
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="mt-3 mb-2">
      <h1 className="text-center text-white"> qClick services </h1>
    </div>

    <div className=" copyright footer-copyright text-center py-3 ">
      <p> © 2024 Copyright: All rights reserved</p>
    </div>
  </footer>
);

export default Footer;
