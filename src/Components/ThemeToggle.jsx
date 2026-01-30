import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
