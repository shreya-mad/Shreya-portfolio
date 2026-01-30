import "../styles/stats.css";
import { projectsData } from "../data/projectsData";
import { skillsData } from "../data/skillsData";
import { useEffect, useState } from "react";

/* ================= HELPER: MONTH DIFFERENCE (INCLUSIVE) ================= */
const inclusiveMonthDiff = (start, end) => {
  return (
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1
  );
};

/* ================= EXPERIENCE CALCULATION ================= */
const calculateExperience = () => {
  // Internship: July 2023 → Dec 2023
  const internshipStart = new Date(2023, 6); // July
  const internshipEnd = new Date(2023, 11);  // December

  // Full-time: March 2024 → now
  const fullTimeStart = new Date(2024, 2);   // March
  const now = new Date();

  const internshipMonths = inclusiveMonthDiff(
    internshipStart,
    internshipEnd
  );

  const fullTimeMonths = inclusiveMonthDiff(
    fullTimeStart,
    now
  );

  const totalMonths = internshipMonths + fullTimeMonths;

  // Convert to years and round to nearest 0.5
  const years = totalMonths / 12;
  return Math.round(years * 2) / 2;
};

/* ================= COUNT-UP HOOK ================= */
const useCountUp = (target, duration = 1100) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Number(start.toFixed(1)));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
};

/* ================= STATS COMPONENT ================= */
const Stats = () => {
  const projectsCount = projectsData.length;
  const skillsCount = skillsData.length;
  const experienceYears = calculateExperience();

  const animatedProjects = useCountUp(projectsCount);
  const animatedSkills = useCountUp(skillsCount);
  const animatedExperience = useCountUp(experienceYears);

  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stat-item">
          <h2>{animatedProjects}</h2>
          <p>Featured Projects</p>
        </div>

        <div className="stat-item">
          <h2>{animatedExperience}+</h2>
          <p>Years Experience</p>
        </div>

        <div className="stat-item">
          <h2>{animatedSkills}</h2>
          <p>Technologies</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
