import "./App.css";
// import ParticleBackground from "./components/TsParticles/ParticleBackground";
import Navbar from "./components/Navbar/Navbar";
import Home from "./sections/Home/Home";
import Particle from "./components/TSParticles/Particles";
import About from "./sections/About/About";
import GitStats from "./sections/GitStats/GitStats";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";

function App() {
  return (
    <>
      <Particle />
      <Navbar id="nav-menu" />
      <Home id="home" />
      <About />
      <Skills />
      <GitStats />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
