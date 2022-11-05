import "./App.css";
import Navbar from "./Component/Navbar";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Git from "./Component/Git";
export default function App() {
  return (
    <div style={{ background: "#E7F2F8" }} className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Git />
      <Contact />
    </div>
  );
}
