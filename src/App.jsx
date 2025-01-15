import "./App.css";
import Aboutme from "./Components/Aboutme";
import Project from "./Components/Project";
import Navbar from "./Components/NavBar";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <section id="aboutme">
          <Aboutme />
        </section>
        <section id="skill">
          <Skills />
        </section>
        <section id="projects">
          <Project />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
