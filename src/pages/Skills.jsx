import "../styles/Skills.css";
import { useState } from "react";
import { skillsData } from "../data/skillsData";

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "DevOps/Cloud",
  "Tools",
  "Languages",
];

const Skills = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skillsData.filter((skill) => {
    const matchesSearch = skill.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "All" || skill.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="skills-page">
      {/* HERO */}
      <div className="skills-hero">
        <h1>
          My <span>Skills</span>
        </h1>
        <p>
          A comprehensive overview of my technical expertise and the
          technologies I work with to build modern web applications
        </p>
      </div>

      {/* CONTROLS */}
      <div className="skills-controls">
        <input
          type="text"
          placeholder="Search skills..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="skills-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={cat === activeCategory ? "active" : ""}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <p className="skills-count">
          Showing {filteredSkills.length} skills
        </p>
      </div>

      {/* GRID */}
      <div className="skills-grid">
        {filteredSkills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-header">
              <h3>{skill.name}</h3>
              <span className="level">{skill.level}</span>
            </div>

            <div className="skill-meta">
              <span>Proficiency</span>
              <span>{skill.experience}</span>
            </div>

            <div className="progress-circle">
              <svg viewBox="0 0 36 36">
                <path
                  className="bg"
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="progress"
                  strokeDasharray={`${skill.proficiency}, 100`}
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <span>{skill.proficiency}%</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
