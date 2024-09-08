// src/App.js

import React from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Techno from "./Components/Techno";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import ParticlesComponent from "./ParticlesComponent";
import NavSideBar from "./Components/SideBar";
import ChatbotScript from "./Components/ChatbotScript";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 relative">
      <ParticlesComponent />
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>

      <div className="container mx-auto px-8 relative">
        <NavBar />
        <NavSideBar />
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="techno">
          <Techno />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>

      <ChatbotScript />
    </div>
  );
};

export default App;
