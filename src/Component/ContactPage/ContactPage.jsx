import React from "react";
import "./ContactPage.css";
import { FaPhone } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { IoLocationSharp } from "react-icons/io5";

function ContactPage() {
  return (
    <>
      <div>
        <div className="Contact_heading">
          <h5 className="Contact"> Contact</h5>
          <p className="contact_para">
            We’re always happy to give up some time to talk digital. Whether
            it’s an idea, project brief or question,
          </p>
          <p className="contact_para">
            we invite you to start a conversation today.
          </p>
        </div>

        <div className="form_flexContainer">
          <div className="input_section">
            <h6>
              Just drop your query or requirement, we will get back to you
              shortly.
            </h6>
            <form>
              <input className="name_email" type="text" placeholder="Name" />
              <input className="name_email" type="email" placeholder="Email" />
              <span className="col">
                <input
                  className="col_sec"
                  type="text"
                  placeholder="Phone Number"
                />
                <input
                  className="col_sec"
                  type="text"
                  placeholder="Website Development"
                />
              </span>
              <textarea className="message" placeholder="Message"></textarea>
              <div className="btn_form">
                <button className="btn_message">Send Your Message</button>
              </div>
            </form>
          </div>

          <div className="contact_info">
            <div className="contact_us">
              <h6 className="contact_information">Contact Information</h6>
              <span className="contact_icon">
                <FaPhone />
              </span>
              <h5 className="mobile">Mobile</h5>
              <p className="mobile_no">+91 8447966431</p>

              <span className="email_icon">
                <TfiEmail />
              </span>
              <h5 className="email_h6">Email:</h5>
              <p className="gmail">abc@gmail.com</p>

              <span className="address_icon">
                <IoLocationSharp />
              </span>
              <h5 className="Address">Address:</h5>
              <p className="address_para">
                Office-605-606, 6th floor, DLF Star Tower,
              </p>
              <p className="address_paraone">Sector 30, Gurugram-122001</p>

              <span className="address_icon">
                <IoLocationSharp />
              </span>
              <h5 className="Address">UK Address:</h5>
              <p className="address_para">
                21, Verve Apartments, 5 Mercury Gardens
              </p>
              <p className="address_paraone">Romford, London RM1 3FB</p>
            </div>
          </div>
        </div>

        <div className="embed-map-canvas">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?q=Lrp&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            allowFullScreen
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
