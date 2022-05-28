import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Socials from "./components/Socials";

function App() {
  return (
    <main>
   
    <Navbar />
    <About />
    <Projects />
    <Skills />
    <Contact />
    <Socials />
  </main>
  );
}

export default App;
