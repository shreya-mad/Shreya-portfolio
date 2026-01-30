import "../styles/Projects.css";
import { useState } from "react";
import { projectsData } from "../data/ProjectsData";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || project.category === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <section className="projects-page">
      {/* HEADER */}
      <div className="projects-hero">
        <h1>
          My <span>Projects</span>
        </h1>
        <p>
          A showcase of my work in web development, featuring modern
          technologies and innovative solutions
        </p>

        <div className="projects-controls">
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All Technologies</option>
            <option value="Full Stack">Full Stack</option>
            <option value="Backend">Backend</option>
            <option value="Frontend">Frontend</option>
            <option value="Admin Panel">Admin Panel</option>
          </select>
        </div>
      </div>

      {/* PROJECT GRID */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>
              <span className="role">{project.role}</span>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

              <div className="project-actions">
                <a href={project.code} target="_blank" rel="noreferrer">
                  <FaGithub /> Code
                </a>
                <a href={project.live} target="_blank" rel="noreferrer" className="live">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
