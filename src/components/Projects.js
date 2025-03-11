import React from "react";
import "../styles/Projects.css";

// Import Project Images (Make sure images are in the assets folder)
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";

const projects = [
  {
    title: "Travel with Banjara",
    image: project1,
    description: "A travel agency website with itinerary planning & booking.",
    github: "https://github.com/yourusername/travel-with-banjara",
    live: "https://yourliveurl.com/travel-with-banjara",
  },
  {
    title: "Eleven:11 Cafe and Stay",
    image: project2,
    description: "A modern website for a café & stay facility.",
    github: "https://github.com/yourusername/eleven11-cafe",
    live: "https://yourliveurl.com/eleven11-cafe",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description: "A responsive portfolio to showcase my skills & projects.",
    github: "https://github.com/arvind7300/portfolio-website",
    live: "https://portfolio-website-lv5b.vercel.app/",
  },
  {
    title: "Hostel Management System",
    image: project4,
    description: "A system to manage hostel administration efficiently.",
    github: "https://github.com/yourusername/hostel-management",
    live: "https://yourliveurl.com/hostel-management",
  },
  {
    title: "Car Service Frontend",
    image: project5,
    description: "A frontend for a car service booking system.",
    github: "https://github.com/yourusername/car-service",
    live: "https://yourliveurl.com/car-service",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

