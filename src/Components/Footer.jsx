import "../styles/Footer.css";
import { Link } from "react-router-dom";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* LEFT */}
        <div className="footer-about">
          <div className="footer-logo">SM</div>
          <p>
            Full-Stack Developer passionate about creating innovative solutions
            and building amazing user experiences with modern technologies.
          </p>

        <div className="social-icons">
  <a
    href="https://github.com/shreya-mad"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>
<a
  href="https://www.geeksforgeeks.org/profile/smadeshiya12345"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="GeeksforGeeks"
>
  <SiGeeksforgeeks />
</a>

  <a
    href="https://www.linkedin.com/in/shreya-madeshiya-5064091b0/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn />
  </a>

  <a
    href="https://www.instagram.com/smadeshiya768"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>

  <a
    href="mailto:smadeshiya12345@gmail.com"
    aria-label="Email"
  >
    <FaEnvelope />
  </a>

  <a
    href="https://www.youtube.com/@world_paws"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
  >
    <FaYoutube />
  </a>
</div>
        </div>

        {/* CENTER */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
<Link to="/projects">Projects</Link>
<Link to="/experience">Experience</Link>
<Link to="/skills">Skills</Link>
<Link to="/contact">Contact</Link>

        </div>

        {/* RIGHT */}
        <div className="footer-services">
          <h4>Services</h4>
          <p>Web Development</p>
          <p>Frontend Development</p>
          <p>Backend Development</p>
          <p>API Development</p>
        </div>
      </div>

      {/* CTA */}
      <div className="footer-cta">
        <h4>Get In Touch</h4>
        <p>Ready to start your project?</p>
        <Link to="/contact" className="cta-btn">Contact Me</Link>
        
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 Shreya Madeshiya. All rights reserved.</p>
        <div className="footer-policy">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
