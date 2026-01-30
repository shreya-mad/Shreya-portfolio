import { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "../styles/Navbar.css";
import { FaDownload } from "react-icons/fa";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      {/* LEFT */}
      <div className="nav-left">
        <span className="logo">SM</span>
      </div>

      {/* CENTER (DESKTOP LINKS) */}
   <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
  <li>
    <NavLink to="/" end onClick={() => setMenuOpen(false)}>
      Home
    </NavLink>
  </li>

  <li>
    <NavLink to="/projects" onClick={() => setMenuOpen(false)}>
      Projects
    </NavLink>
  </li>

  <li>
    <NavLink to="/experience" onClick={() => setMenuOpen(false)}>
      Experience
    </NavLink>
  </li>

  <li>
    <NavLink to="/skills" onClick={() => setMenuOpen(false)}>
      Skills
    </NavLink>
  </li>

  <li>
    <NavLink to="/certifications" onClick={() => setMenuOpen(false)}>
      Certifications
    </NavLink>
  </li>

  <li>
    <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
      Contact
    </NavLink>
  </li>

  <li>
    <a
      href="/Shreya_Madeshiya_Resume.pdf"
      download
      onClick={() => setMenuOpen(false)}
      className="download-cv"
      title="Download Resume"
    >
      <FaDownload />
    </a>
  </li>
</ul>


      {/* RIGHT */}
      <div className="nav-right">
        {/* <ThemeToggle /> */}

        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
