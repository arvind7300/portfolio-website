import React from "react";
import "../styles/Skills.css";
import { FaPython, FaDatabase, FaCloud, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiMysql, SiPostgresql, SiGooglecloud, SiApacheairflow, SiOpenai } from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "GCP", icon: <SiGooglecloud /> },
  { name: "ETL Pipelines", icon: <SiApacheairflow /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "ChatGPT", icon: <SiOpenai /> },  /* 🔥 ChatGPT Added */
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
