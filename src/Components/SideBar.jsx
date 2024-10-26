import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faProjectDiagram,
  faEnvelope,
  faBriefcase,
  faLaptopCode,
  faImage, // Icon for Latest Activities
  faBars, // Icon for the menu button
} from "@fortawesome/free-solid-svg-icons";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const NavSideBar = () => {
  const [activeId, setActiveId] = useState("");
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useIntersectionObserver(setActiveId);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      {/* Menu button in the top left corner */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-3 text-white bg-transparent rounded-full"
        style={{ border: "2px solid white" }}
      >
        <FontAwesomeIcon icon={faBars} size="2x" /> {/* Increase icon size */}
      </button>

      {/* Sidebar */}
      {isSidebarVisible && (
        <nav className="fixed top-1/2 right-4 transform -translate-y-1/2 z-40">
          <ul className="flex flex-col space-y-4 bg-white/10 p-4 rounded-xl">
            <li>
              <a
                href="#hero"
                className={`text-neutral-300 hover:text-purple-400 ${
                  activeId === "hero" ? "text-purple-400" : ""
                }`}
              >
                <FontAwesomeIcon icon={faHome} size="1x" />
              </a>
            </li>
            <li>
              <a
                href="#latest-activities"
                className={`text-neutral-300 hover:text-purple-400 ${
                  activeId === "latest-activities" ? "text-purple-400" : ""
                }`}
              >
                <FontAwesomeIcon icon={faImage} size="1x" /> {/* New icon */}
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`text-neutral-300 hover:text-purple-400 ${
                  activeId === "about" ? "text-purple-400" : ""
                }`}
              >
                <FontAwesomeIcon icon={faUser} size="1x" />
              </a>
            </li>
            <li>
              <a
                href="#techno"
                className={`text-neutral-300 hover:text-purple-400 ${
                  activeId === "techno" ? "text-purple-400" : ""
                }`}
              >
                <FontAwesomeIcon icon={faLaptopCode} size="1x" />
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={`text-neutral-300 hover:text-purple-400 ${
                  activeId === "experience" ? "text-purple-400" : ""
                }`}
              >
                <FontAwesomeIcon icon={faProjectDiagram} size="1x" />
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`text-neutral-300 hover:text-purple-400 ${
                  activeId === "projects" ? "text-purple-400" : ""
                }`}
              >
                <FontAwesomeIcon icon={faBriefcase} size="1x" />
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`text-neutral-300 hover:text-purple-400 ${
                  activeId === "contact" ? "text-purple-400" : ""
                }`}
              >
                <FontAwesomeIcon icon={faEnvelope} size="1x" />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavSideBar;
