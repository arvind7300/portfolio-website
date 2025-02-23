import React from "react";
import "../styles/Hero.css";
import profilePic from "../assets/profile.jpg"; // Profile image

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        {/* Left Side - Text */}
        <div className="hero-content">
          <h1>Hi, I'm <span className="highlight">Arvind</span></h1>
          <h2 className="animated-text">Data Engineer & Automation Specialist</h2>
          <p>Building Scalable Data Pipelines & Automating Workflows 🚀</p>
          <div className="hero-buttons">
            <a href="/resume.pdf" download className="btn">Download Resume</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>

        {/* Right Side - Animated Profile Image */}
        <div className="hero-image">
        <img src={profilePic} alt="Profile" className="profile-photo" />

        </div>
      </div>
    </section>
  );
};

export default Hero;
