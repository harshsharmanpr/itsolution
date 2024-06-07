import React from "react";

import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebookF,
//   faTwitter,
//   faGoogle,
//   faInstagram,
//   faLinkedin,
//   faGithub,
// } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faEnvelope,
  faPhone,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer className="footer text-center text-muted">
        {/* <section className="social-media p-4 border-bottom">
          <div className="social-text">
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
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="" className="me-4 text-reset">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div> */}
        {/* </section> */}

        <section className="links-section mt-9">
          <div className="container">
            <div className="row">
              <div className="col">
                <h6 className="fw-bold mb-4">Technology</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Node js
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    React js
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Flutter
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Shopify
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Wordpress
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Php
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    .NET
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Laravel
                  </a>
                </p>
              </div>
              <div className="col">
                <h6 className="fw-bold mb-4">QUESK</h6>
                <p>
                  <a href="#!" className="text-reset">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Career
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Privacy Policy
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>
              <div className="col">
                <h6 className="fw-bold mb-4">Contact</h6>
                <p>
                  <FontAwesomeIcon icon={faHome} className="me-3" /> B-4 Ground
                  floor Sector 63 Noida Uttar Pradesh
                </p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} className="me-3" />{" "}
                  customercare@qclick.in
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone} className="me-3" /> +91
                  9811175188
                </p>
                <p>
                  <FontAwesomeIcon icon={faPrint} className="me-3" /> +91
                  9811175188
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="copyright p-4">
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            qClick services.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
