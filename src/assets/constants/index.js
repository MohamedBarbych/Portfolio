// Importing project images from the correct relative path
import project01 from "../projects/project-01.png";
import project1 from "../projects/project-1.png";
import project2 from "../projects/project-2.png";
import project3 from "../projects/project-3.png";
import project4 from "../projects/project-4.png";
import project5 from "../projects/project-5.png";
import project6 from "../projects/project-6.png";
import project7 from "../projects/project-7.png";

// Importing activity images from the correct relative path
import activity1 from "../Activities/Hackathon1.jpg";
import activity11 from "../Activities/Hackathon4.jpg";
import activity2 from "../Activities/Hackathon2.jpg";
import activity3 from "../Activities/Hackathon3.jpg";
import activity31 from "../Activities/Hackathon3-1.jpg";
import activity22 from "../Activities/Hackathon22.jpg";
import activity4 from "../Activities/plage1.jpg";
import activity5 from "../Activities/plage3.jpg";
import activity6 from "../Activities/plage8.png";
import activity8 from "../Activities/Hackathon8.jpg";
import activity7 from "../Activities/integration_1.jpg";
import activity9 from "../Activities/integration_2.jpg";
import activity10 from "../Activities/conference222.jpg";

import cert1 from "/certifications/cert1.png";
import cert2 from "/certifications/cert2.png";
import cert3 from "/certifications/cert3.png";
import cert4 from "/certifications/cert4.png";
import cert5 from "/certifications/cert5.png";

export const HERO_CONTENT = `I am a Moroccan Software and AI Engineering student at FST Tangier with a passion for Unity game development and full stack web development. My academic journey and projects have provided me with a strong foundation in AI and machine learning. I aim to leverage my skills to create innovative solutions and immersive gaming experiences, contributing to advancements in technology and the gaming industry.`;

export const ABOUT_TEXT = `As a student of Software and AI Engineering at FST Tangier, I have developed a passion for creating innovative solutions and enhancing user experiences. My education has provided a solid foundation in software engineering and intelligent systems while allowing me to cultivate a diverse skill set that blends technical expertise with essential soft skills. Through hands-on projects, I have improved my problem-solving abilities, creativity, and communication. I am dedicated to driving innovation in technology and entertainment, and I enjoy participating in volunteer activities and extracurriculars that enrich my experiences and foster community.`;

export const EXPERIENCES = [
  {
    year: "July 2024",
    role: "Intern - Game Development",
    company: "DINOMITE STUDIOS",
    description: `As an intern, I contributed to the development of 'Playa-Amigos,' an educational game focused on ocean conservation for children. I collaborated with a team to design gameplay mechanics and interactive content, participated in brainstorming sessions, and assisted in playtesting to enhance user experience. This role allowed me to apply my Unity and programming skills while working on a meaningful project promoting sustainability.`,
    technologies: ["Unity Game Engine", "C#", "Adobe", "Firebase"],
  },
  {
    year: "July 2024",
    role: "First Prize at 'Sustainable Coast' Hackathon",
    company: "ONCF and PDMA.",
    description: `We developed 'Playa-Amigos,' a video game aimed at educating children about ocean conservation. This project won first place at the 'Le littoral durable' hackathon, standing out among 20 teams and 50 students from northern Morocco. We will present 'Playa-Amigos' at the United Nations Conference on the Environment in Nice, France, in June 2025.`,
    technologies: ["Unity Game Engine", "C#", "Adobe", "Firebase"],
  },
  {
    year: "2023 - Present",
    role: "Software and AI Engineer Student",
    company: "FST Tangier, Morocco",
    description: `I am pursuing a degree in Software and AI Engineering, where I am gaining a solid foundation in software development, intelligent systems, and machine learning. My studies equip me with the skills to innovate and contribute to technological advancements.`,
    technologies: [
      "Web & Mobile Development",
      "AI Engineering",
      "DBA",
      "Systems Security",
    ],
  },
  {
    year: "2020 - 2023",
    role: "DEUST Student",
    company: "FST Tangier, Morocco",
    description: `I studied the fundamentals of mathematics, physics, and computer science, acquiring essential analytical and problem-solving skills. This program provided a strong foundation for my future endeavors in software engineering and AI.`,
    technologies: ["Math", "Physics", "Computer Science", "Statistic"],
  },
];

export const PROJECTS = [
  {
    title: "Movie Recommendation System",
    image: project01,
    description:
      "A machine learning-based movie recommendation system that suggests personalized movie choices to users based on their preferences. The system features user authentication, movie ratings, and tailored recommendations using collaborative filtering and content-based algorithms.",
    technologies: ["Python", "Streamlit", "Pandas", "NumPy", "Scikit-learn"],
  },
  {
    title: "Gaming Club Website",
    image: project1,
    description:
      "A functional Gaming Club website with features like Game proposition, shopping gamers products, and gamers authentication.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    title: "PLAYA-AMIGOS Game",
    image: project2,
    description:
      "Developed Playa-Amigos, an educational game for children using Unity. The game focuses on teaching ocean conservation through interactive gameplay and engaging content.",
    technologies: ["Unity Game Engine", "C#", "Adobe", "Firebase"],
  },
  {
    title: "MAD DOCTOR Game",
    image: project3,
    description:
      "Created a 2D game called Mad Doctor using Unity, where the player progresses through multiple levels. The game is based on graph theory and data structures and algorithms (DSA) to provide challenging and engaging gameplay.",
    technologies: ["Unity Game Engine", "C#", "Adobe", "Firebase"],
  },
  {
    title: "Hospital Management Website",
    image: project4,
    description:
      "Developed a comprehensive hospital management system using HTML, CSS, PHP, and UML. The project streamlines administrative tasks, patient management, and medical records, enhancing overall efficiency and user experience.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
  },
  {
    title: "Taekwondo website",
    image: project5,
    description:
      "A Taekwondo website with features like Participants and Coaches management, Events organisation, and users authentication.",
    technologies: ["HTML", "CSS", "PHP", "Symfony", "MySQL"],
  },
  {
    title: "E-Commerce Website",
    image: project6,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "PHP", "Symfony", "MySQL"],
  },
  {
    title: "Portfolio Website",
    image: project7,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
];

export const CONTACT = {
  address: "Tangier, Morocco ",
  phoneNo: "+2126-10-62-62-26 ",
  email: "mohamedbarbych1@gmail.com",
};


export const certifications = [
  { title: "OCI Generative AI Certified Professional", image: cert1, link: "/certifications/cert1.png" },
  { title: "OCI AI Certified Foundations Associate", image: cert2, link: "/certifications/cert2.png" },
  { title: "Agile Project Management", image: cert3, link: "/certifications/cert3.png" },
  { title: "Developing Back-End Apps with Node.js and Express", image: cert4, link: "/certifications/cert4.png" },
  { title: "Data Science & Analytics", image: cert5, link: "/certifications/cert5.png" }
];

export const LATEST_ACTIVITIES = [
  {
    title: "First Prize at 'Sustainable Coast' Hackathon for Playa-Amigos",
    image: activity1,
  },
  {
    title: "First Prize at 'Sustainable Coast' Hackathon for Playa-Amigos",
    image: activity11,
  },
  {
    title: "First Prize at 'Sustainable Coast' Hackathon for Playa-Amigos",
    image: activity2,
  },
  {
    title: "First Prize at 'Sustainable Coast' Hackathon for Playa-Amigos",
    image: activity22,
  },
  {
    title: "First Prize at 'Sustainable Coast' Hackathon for Playa-Amigos",
    image: activity8,
  },
  {
    title: "First Prize at 'Sustainable Coast' Hackathon for Playa-Amigos",
    image: activity3,
  },
  {
    title: "First Prize at 'Sustainable Coast' Hackathon for Playa-Amigos",
    image: activity31,
  },
  {
    title:
      "🌆 Discovering the Future: Inspiring Innovations and Insights from the Smart City Application Event (SCA24)",
    image: activity10,
  },
  {
    title:
      "Environmental Educator: Coastal Protection Awareness through Educational Games",
    image: activity4,
  },
  {
    title:
      "Environmental Educator: Coastal Protection Awareness through Educational Games",
    image: activity5,
  },
  {
    title:
      "Environmental Educator: Coastal Protection Awareness through Educational Games",
    image: activity6,
  },
  {
    title: "First-Year Welcome: Led by Second and Third-Year Students",
    image: activity7,
  },
  {
    title: "First-Year Welcome: Led by Second and Third-Year Students",
    image: activity9,
  },
];
