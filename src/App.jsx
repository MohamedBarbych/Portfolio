import React, { useEffect } from "react";
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
import LatestActivities from "./Components/LatestActivities";

import { LATEST_ACTIVITIES } from "./assets/constants/index";

const App = () => {
  useEffect(() => {
    // Dynamically load Google Translate script
    const script = document.createElement("script");
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Create the Google Translate function
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en', // Default language of your site
        includedLanguages: 'en,fr,ar', // Languages to include
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
      }, 'google_translate_element');
    };

    // Cleanup script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 relative">
      <ParticlesComponent />

      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>

      {/* Google Translate Widget */}
      <div id="google_translate_element" className="absolute top-4 left-16 z-20"></div> {/* Adjusted position */}

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
        <section id="latest-activities">
          <LatestActivities activities={LATEST_ACTIVITIES} />
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
