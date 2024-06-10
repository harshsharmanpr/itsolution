// src/Navbar.js
import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar fixed-top">
      <div className="brand-title">
        <img src={assets.logo} style={{width:"100px", height:"auto"}}></img>
      </div>
      <Link to="#" className="toggle-button" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </Link>
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/casestudy">Case Study</Link>
          </li>

          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
