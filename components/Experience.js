import React from "react";
import "../styles/Experience.css";

// Import Experience Image (Make sure it's in the assets folder)
import experienceImage from "../assets/experience.jpg";

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h2>Work Experience</h2>
      <div className="experience-container">
        <div className="experience-card">
          <img src={experienceImage} alt="Honasa Consumer Ltd." className="experience-image" />
          <div className="experience-content">
            <h3>Data Engineer Intern</h3>
            <p className="duration">Feb 2024 – Oct 2024</p>
            <p>
              Developed and maintained data pipelines using Python on GCP, automating ETL processes
              to extract, transform, and load (ETL) data from various sources including emails, APIs, websites,
              and files (Excel & CSV), contributing to overall efficiency of data handling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
