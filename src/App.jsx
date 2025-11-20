import Home from './Component/Home';
import Left from './Component/Left';
import Navbar from './Component/Navbar';
import './App.css';
import TwoPage from './Component/TwoPage';
import Project from './Component/Project';

export default function App() {
  return (
    <>
      <Navbar />

      <div className="layout">
        {/* First Page - Hero Section */}
        <div className="hero-section" id="home">
          <Left />
          <Home />
        </div>

        {/* Second Page - About Section */}
        <div id="about">
          <TwoPage />
        </div>
        <div id="Projects">
     <section id="projects" style={{ paddingTop: "80px" }}>
          <Project />
      </section>

        </div>
      </div>
    </>
  );
}