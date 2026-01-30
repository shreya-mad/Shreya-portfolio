import Hero from "../sections/Hero";
import Story from "../sections/Story";
import Stats from "../sections/Stats";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import Skills from "../pages/Skills";
import Keys from "../sections/Keys";
import Certifications from "./Certifications";

const Home = () => {
  return (
    <>
      <Hero />
      <Story />
      <Stats />
      <Keys />
      <Projects />
      <Experience />
      <Skills />
      <Certifications />
    </>
  );
};

export default Home;
