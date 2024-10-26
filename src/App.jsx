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
import LanguageSwitcher from "./Components/LanguageSwitcher";
import Certification from "./Components/Certification";

import { LATEST_ACTIVITIES } from "./assets/constants/index";

const App = () => {
    useEffect(() => {
        // Dynamically load Google Translate script
        const script = document.createElement("script");
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);

        // Define the Google Translate function
        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement({
                pageLanguage: 'en', // Default language of your site
                includedLanguages: 'en,fr,ar', // Languages to include
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            });
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
                <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-black to-[#6300e4]"></div>
            </div>

            <div className="container mx-auto px-8 relative">
                <NavBar />
                {/* Position LanguageSwitcher in the top right corner */}
                <div className="absolute top-4 right-4 z-20">
                    <LanguageSwitcher />
                </div>
                <NavSideBar />
                
                <section id="hero">
                    <Hero />
                </section>

                <section id="latest-activities">
                    <LatestActivities activities={LATEST_ACTIVITIES} />
                </section>
                
                <section id="about">
                    <About />
                </section>
                
                <section id="techno">
                    <Techno />
                </section>
                
                {/* <section id="certifications">
                    <Certification />
                </section> */}
                
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
