import React from "react";

export default function Footer() {
  return (
    <div>
      <hr />
      <>
        {/* Footer */}
        <footer className="text-center text-lg-start bg-body-tertiary text-muted">
          {/* Section: Social media */}
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-twitter" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-google" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-instagram" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-linkedin" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-github" />
              </a>
            </div>
            {/* Right */}
          </section>
          {/* Section: Social media */}
          {/* Section: Links  */}
          <section className="">
            <div className="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3 text-bold " />
                    Company name
                  </h6>
                  <p>qclick Services</p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Technology</h6>
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
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Quick Link</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      About Us
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Crareer
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
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i className="fas fa-home me-3" />
                    B-4 Ground floor Sector 63 Noida Uttar Pradesh
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3" />
                    customercare@qclick.in
                  </p>
                  <p>
                    <i className="fas fa-phone me-3" />
                    +91 9811175188
                  </p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links  */}
          {/* Copyright */}
          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2021 Copyright:
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
              qClick services.com
            </a>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </>
    </div>
  );
}
