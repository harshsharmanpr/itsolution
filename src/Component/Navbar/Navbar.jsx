import React, { useState } from "react";
// import { a } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a to="/" className="navbar-logo">
          qclick Services
        </a>
        <div className="menu-icon" onClick={handleToggle}>
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={isOpen ? "navbar-menu active" : "navbar-menu"}>
          <li>
            <a to="/" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a to="/about" onClick={() => setIsOpen(false)}>
              About Us
            </a>
          </li>
          <li>
            <a to="/services" onClick={() => setIsOpen(false)}>
              Services
            </a>
          </li>
          <li>
            <a to="/portfolio" onClick={() => setIsOpen(false)}>
              Portfolio
            </a>
          </li>
          <li>
            <a to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
