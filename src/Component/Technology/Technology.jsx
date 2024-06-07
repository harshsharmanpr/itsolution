import React from "react";
import "./Technology.css";
import {
  database,
  backend,
  technologys,
  eccommerce,
  Appdev,
} from "../../assets/assets";

export default function Technology() {
  return (
    <div className="container">
      <div className="main-div">
        <div className="sub-div">
          <h3>Frontend</h3>
          {/* <p>AngularJS</p>
          <p>React Native</p>
          <p>ReactJS</p>
          <p>NextJs</p>
          <p>HTML5</p>  */}
          <div className="grid-container">
            {technologys.map((item, index) => {
              return (
                <div className="grid-item" key={index}>
                  <div>
                    {" "}
                    <img src={item.img} alt={item.tittle} />
                    <p>{item.tittle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="sub-div">
          <h3>Backend</h3>
          {/* <p>Node.js</p>
          <p>Laravel</p>
          <p>PHP</p>
          <p>.NET</p> */}
          <div className="grid-container">
            {backend.map((item, index) => {
              return (
                <div className="grid-item" key={index}>
                  <div>
                    {" "}
                    <img src={item.img} alt={item.tittle} />
                    <p>{item.tittle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="sub-div">
          <h3>Database & Servers</h3>
          {/* <p>MongoDB</p>
          <p>Postgresql</p>
          <p>MySQL</p>
          <p>SQL Server</p>
          <p>Linux Server</p> */}
          <div className="grid-container">
            {database.map((item, index) => {
              return (
                <div className="grid-item" key={index}>
                  <div>
                    {" "}
                    <img src={item.img} alt={item.tittle} />
                    <p>{item.tittle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="main-div">
        {/* <div className="sub-div">
          <h3>UI/UX Design</h3>
          {/* <p>Adobe XD</p>
          <p>Figma</p> */}
        {/* </div>
        <div className="sub-div">
          <h3>Project Management</h3>
          <p>Jira Software</p>
          <p>Zoho</p>
        </div>  */}
        <div className="sub-div">
          <h3>Mobile App</h3>

          {/* <p>Kotlin</p> */}

          {Appdev.map((item, index) => {
            return (
              <div className="grid-item" key={index}>
                <div>
                  {" "}
                  <img src={item.img} alt={item.tittle} />
                  <p>{item.tittle}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="sub-div">
          <h3>Ecommerce and CMS</h3>
          {eccommerce.map((item, index) => {
            return (
              <div className="grid-item" key={index}>
                <div>
                  {" "}
                  <img src={item.img} alt={item.tittle} />
                  <p>{item.tittle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
