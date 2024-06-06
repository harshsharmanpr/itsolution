import React from "react";
import "./OurServices.css";

const OurServicesHome = () => {
  return (
    <div className="haddingh1">
      <h1>Our Services</h1>
      <div className="container">
        <div className="services">
          <ul>
            <li>Custom Software Development</li>
            <hr />
            <li>Mobile App Development</li>
            <hr />
            <li>Website Design & Development</li>
            <hr />
            <li>UI/UX Design</li>
            <hr />
            <li>Ecommerce Development</li>
            <hr />
            <li>Cloud & DevOps Solutions</li>
            <hr />
            <li>Remote Resource Outsourcing</li>
            <hr />
          </ul>
        </div>
        <div className="projects">
          <p>
            <h1> Custom Software Development</h1>
          </p>
          <p>
            Leverage our expertise in crafting custom applications that address
            specific business challenges, streamline processes, and enhance
            overall efficiency. From concept to deployment, we ensure that the
            software is designed to scale with your business.
          </p>
          <h2>Recent Projects we worked on:</h2>
          <ul>
            <li>
              <strong>Major Engineering Company:</strong> Developed Knowledge
              Management System with Mobile Application & Data Analytics.
            </li>
            <li>
              <strong>Resins Manufacturer & Exporter:</strong> Developed a
              custom CRM mapping all their custom processes with Data Reporting.
            </li>
            <li>
              <strong>US Based Infrastructure Development Company:</strong>{" "}
              Developed User Portal with internal CRM digitizing multi-level
              internal processes.
            </li>
            <li>
              <strong>Caribbean Insurance Company:</strong> Developed A
              Reporting System for loyalty management and agent commission
              management with detailed analytics and reporting.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurServicesHome;
