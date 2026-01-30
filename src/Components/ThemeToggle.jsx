import { useContext } from "react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  // const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-toggle">
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
