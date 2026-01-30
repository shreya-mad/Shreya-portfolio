import "../styles/Hero.css";
import ProfilePic from "../assets/profile.jpeg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <h4>Hello, I'm</h4>
        <h1>
          Shreya <br /> Madeshiya
        </h1>
        <h2>Full-Stack Developer</h2>
        <p>
          Specializing in scalable web applications and modern technologies.
          Passionate about creating innovative solutions that make a difference.
        </p>

     <div className="hero-info">
  {/* LOCATION */}
  <div className="info-box">
    <FaMapMarkerAlt className="location-icon" />

    <div className="info-text">
      <a
        href="https://www.google.com/maps/search/?api=1&query=Kadubesanhalli,+Bangalore"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Bangalore, India</span>
      </a>
    </div>
  </div>

  {/* STATUS */}
  <div className="info-box status">
    <span className="blinking-dot"></span>
    <span>Available</span>
  </div>
</div>

<div className="hero-buttons">
  <Link to="/projects" className="btn primary">
    View My Work →
  </Link>

  <Link to="/contact" className="btn secondary">
    Get In Touch
  </Link>
</div>
      </div>

      <div className="hero-right">
        <div className="profile-ring">
          <img src={ProfilePic} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
