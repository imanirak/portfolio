import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Socials from "./components/Socials";
import Intro from "./components/Intro";
import Nav from "./components/Nav"
function App() {
  return (
    <main>
    <Nav />
    <Intro />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Socials />
  </main>
  );
}

export default App;
