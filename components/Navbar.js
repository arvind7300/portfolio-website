import React from "react";
import profilePic from "../assets/profile.jpg";
import "../styles/Navbar.css";  // CSS file import

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
      <img src={profilePic} alt="Profile" className="navbar-profile" />
      <span className="nav-name">Arvind</span>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
