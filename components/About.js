import React from "react";
import "../styles/About.css"; // ✅ Ensure CSS is imported

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2>About Me</h2>
      <p className="about-content">
      I am an enthusiastic <span className="about-highlight"> Data Engineer & Automation Specialist </span> with a passion for building scalable data pipelines and optimizing workflows. With a strong foundation in Python, SQL, and Google Cloud Platform (GCP), I specialize in data ingestion, transformation, and automation. My experience includes developing ETL pipelines that extract data from diverse sources like APis, websites, and structured files, ensuring seamless data processing and integration. Currently pursuing my <span className="about-highlight"> Master's in Computer Applications (MCA) </span>, I am constantly refining my skills in BigQuery, web scraping, and cloud technologies to drive data driven solutions. My portfolio includes impactful projects like Travel with Banjara, Hostel Management System, and Car Service Platform, each reflecting my ability to merge technical expertise with user-centric design. I thrive on problem-solving and innovation, always eager to explore new technologies that enhance efficiency and create meaningful digital experiences.
      </p>
    </section>
  );
};

export default About;
