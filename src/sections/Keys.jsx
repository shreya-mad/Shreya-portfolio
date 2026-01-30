import "../styles/key-highlights.css";

const KeyHighlights = () => {
  return (
    <section className="highlights-section">
      <h2>
        Key <span>Highlights</span>
      </h2>

      <p className="highlights-subtitle">
        Some of my key achievements and milestones in my development journey
      </p>

      <div className="highlights-grid">
        <div className="highlight-card">
          <div className="highlight-icon">→</div>
          <h3>Full-Stack Expertise</h3>
          <p>
            Proficient in MERN stack with hands-on experience in building
            scalable applications
          </p>
        </div>

        <div className="highlight-card">
          <div className="highlight-icon">→</div>
          <h3>Problem Solver</h3>
          <p>
            Passionate about solving complex challenges and turning ideas into
            digital solutions
          </p>
        </div>

        <div className="highlight-card">
          <div className="highlight-icon">→</div>
          <h3>Team Collaboration</h3>
          <p>
            Experience in collaborating with teams to deliver seamless user
            experiences
          </p>
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;
