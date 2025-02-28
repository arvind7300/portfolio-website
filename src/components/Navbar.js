import React from "react";
import profilePic from "../assets/profile.jpg";
import "../styles/Navbar.css";
import { Link } from "react-scroll"; // ✅ React Scroll Import

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={profilePic} alt="Profile" className="navbar-profile" />
        <span className="nav-name">Arvind</span>
      </div>
      <ul className="nav-links">
        {/* ✅ Smooth Scroll Fix */}
        <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
