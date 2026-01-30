import "../styles/Experience.css";
import { experienceData } from "../data/ExperienceData";

const Experience = () => {
  return (
    <section className="experience-page">
      {/* HEADER */}
      <div className="experience-hero">
        <h1>
          My <span>Experience</span>
        </h1>
        <p>
          A journey through my professional career, showcasing the roles and
          projects that have shaped my expertise in web development
        </p>
      </div>

      {/* TIMELINE */}
      <div className="timeline">
        {experienceData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-content">
              {/* HEADER */}
              <div className="exp-header">
                <h3>{item.company}</h3>

                {item.badge && (
                  <span className="badge">{item.badge}</span>
                )}

                {item.logo && (
                  <img
                    src={item.logo}
                    alt={item.company}
                    className="company-logo"
                  />
                )}
              </div>

              <h4>{item.role}</h4>

              <p className="exp-meta">
                📅 {item.duration} <br />
                📍 {item.location}
              </p>

              <p className="exp-desc">{item.description}</p>

              <div className="tech">
                {item.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
