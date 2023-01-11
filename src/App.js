import "./App.css";
// import ParticleBackground from "./components/TsParticles/ParticleBackground";
import Navbar from "./components/Navbar/Navbar";
import Home from "./sections/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar id="nav-menu" />
      <Home id="home" />
    </div>
  );
}

export default App;
