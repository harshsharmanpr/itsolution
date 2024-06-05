import React from "react";
import { CallBook } from "../../assets/assets";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import "./BookCall.css";

export default function BookCall() {
  return (
    <div className="main-container">
      <div className="call-cards-container">
        {CallBook.map((item, index) => {
          return (
            <div className="card5" key={index}>
              <div className="card-content">
                <h2>{item.tittle}</h2>
                <p>{item.paragrap}</p>
                <div className="contact-info">
                  <div className="contact-item">
                    <MdEmail />
                    <div className="card1">
                      <h6>{item.emailTitle}</h6>
                      <h6>{item.email}</h6>
                    </div>
                  </div>
                  <div className="contact-item">
                    <IoCallSharp />
                    <div className="card2">
                      <h6>{item.phoneTilte}</h6>
                      <h6>{item.phone}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="form-container">
        <form>
          <div>
            <h3>Talk With Our Expert</h3>
          </div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="email">Phone:</label>
          <input type="phone" id="phone" name="phone" />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
