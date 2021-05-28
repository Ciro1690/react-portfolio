import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Intro from "./components/Intro";
import About from "./components/About";

const App = () => {
    return (
      <div className="App">
        <Navbar />
        <Intro/>
        <Projects/>
        <Skills/>
        <About/>
        <Contact/>
        <div className="text-left mb-1 text-light">&copy; Ciro Griffiths 2020</div>
      </div>
    );
}

export default App;