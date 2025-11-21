import Brain from './Component/Brain';
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


        {/*First Page*/}

        <div className="hero-section" id="home">
          <Left />
          <Brain />
        </div>


        {/*Second Page*/}

        <div id="about">
          <TwoPage />
        </div>

        {/*Project section*/}
        <div id="Projects">
          <section id="projects" style={{ paddingTop: "80px" }}>
            <Project />
          </section>

        </div>
      </div>
    </>
  );
}