import "../styles/story.css";

const Story = () => {
  return (
    <section className="story-section" id="story">
      <h2>
        My <span>Story</span>
      </h2>

      <p className="story-subtitle">
        Get to know more about my journey, passion, and what drives me as a
        developer
      </p>

      <div className="story-content">
        <p>
          I am a passionate Full Stack Developer with hands-on expertise in the
          MERN stack, dedicated to building scalable, user-centric, and
          high-performance applications. My journey in development began with a
          curiosity to understand how things work behind the scenes—evolving
          into a strong foundation in backend systems, database optimization,
          and dynamic front-end interfaces.
        </p>

        <p>
          Over time , I have worked on diverse projects ranging from capstone Project (which includes
          interest based search, complete Note Module using CRUD , live new using third party API), 
          job posting and searching web application, quiz creation plateform , analytics
          dashboards , various role based module of software for Institute mamangement system
          and AI-Powered RAG-CHATBOT ensuring every product I build is robust , secure, and
          efficient.
        </p>

        <p>
          With experience in modern frameworks, database design, and cloud
          integrations, I thrive on solving complex challenges and turning
          ideas into impactful digital solutions. For me, full-stack
          development is not just about connecting front-end and back-end—it's
          about creating technology that adds real value and scales with
          growth.
        </p>
      </div>
    </section>
  );
};

export default Story;
