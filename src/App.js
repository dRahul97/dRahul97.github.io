import "./App.css";
// import ParticleBackground from "./components/TsParticles/ParticleBackground";
import Navbar from "./components/Navbar/Navbar";
import Home from "./sections/Home/Home";
import Particle from "./components/TSParticles/Particles";
function App() {
  return (
    <>
      <Particle />
      <Navbar id="nav-menu" />
      <Home id="home" />
    </>
  );
}

export default App;
