// Importing project images from the correct relative path
import project1 from "../projects/project-1.png";
import project2 from "../projects/project-2.png";
import project3 from "../projects/project-3.png";
import project4 from "../projects/project-4.png";
import project5 from "../projects/project-5.png";
import project6 from "../projects/project-6.png";
import project7 from "../projects/project-7.png";

// Importing activity images from the correct relative path
import activity1 from "../activities/Hackathon1.jpg";
import activity2 from "../activities/Hackathon2.jpg";
import activity3 from "../activities/Hackathon3.jpg";
import activity4 from "../activities/plage1.jpg";
import activity5 from "../activities/plage3.jpg";
import activity6 from "../activities/plage8.png";

export const HERO_CONTENT = `I am a Moroccan Software and AI Engineering student at FST Tangier with a passion for Unity game development and full stack web development. My academic journey and projects have provided me with a strong foundation in AI and machine learning. I aim to leverage my skills to create innovative solutions and immersive gaming experiences, contributing to advancements in technology and the gaming industry.`;

export const ABOUT_TEXT = `As a student of Software and AI Engineering at FST Tangier, I have developed a passion for Unity game development and the principles of artificial intelligence. My educational background has provided me with a solid foundation in software engineering, intelligent systems, and machine learning. I have successfully created a 2D game in Unity, utilizing graph theory to enhance gameplay. I am committed to leveraging my skills to innovate and create immersive gaming experiences, contributing to the future of technology and entertainment.`;

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
    technologies: ["HTML", "CSS", "PHP", "Symfony", "MySQL"],
  },
  {
    title: "MAD DOCTOR Game",
    image: project3,
    description:
      "Created a 2D game called Mad Doctor using Unity, where the player progresses through multiple levels. The game is based on graph theory and data structures and algorithms (DSA) to provide challenging and engaging gameplay.",
    technologies: ["HTML", "CSS", "PHP", "Symfony", "MySQL"],
  },
  {
    title: "Hospital Management Website",
    image: project4,
    description:
      "Developed a comprehensive hospital management system using HTML, CSS, PHP, and UML. The project streamlines administrative tasks, patient management, and medical records, enhancing overall efficiency and user experience.",
    technologies: ["HTML", "CSS", "PHP", "Symfony", "MySQL"],
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
    technologies: ["HTML", "CSS", "PHP", "React", "MySQL"],
  },
  {
    title: "Portfolio Website",
    image: project7,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
];

export const CONTACT = {
  address: "Tangier, Morocco ",
  phoneNo: "+2126-10-62-62-26 ",
  email: "mohamedbarbych1@gmail.com",
};

export const LATEST_ACTIVITIES = [
  {
    title: "First Prize at 'Sustainable Coast' Hackathon for Playa-Amigos",
    image: activity1,
  },
  {
    title: "First Prize at 'Sustainable Coast' Hackathon for Playa-Amigos",
    image: activity2,
  },
  {
    title: "First Prize at 'Sustainable Coast' Hackathon for Playa-Amigos",
    image: activity3,
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
];
