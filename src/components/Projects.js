import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Project Name 1",
      image: "/path-to-image1.jpg",
      category: "WEBSITE",
      link: "#"
    },
    {
      title: "Project Name 2",
      image: "/path-to-image2.jpg",
      category: "TECHNICAL NOTES",
      link: "#"
    },
    {
      title: "Project Name 3",
      image: "/path-to-image3.jpg",
      category: "COMMUNITY",
      link: "#"
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects-container">
      <h1>PROJECTS</h1>
      <p className="projects-subtitle">
        tracking my learning and growth through notes, tutorials, and writing
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <a href={project.link} key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <span className="project-category">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects; 