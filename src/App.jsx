import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import GitStats from "./components/GitStats/GitStats";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Particle from "./components/TSParticles/Particles";

function App() {
  return (
    <div className="App">
      <Particle />
      <Navbar />
      <Home />
      <About />
      <GitStats />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
