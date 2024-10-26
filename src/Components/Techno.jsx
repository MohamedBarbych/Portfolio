import { RiReactjsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiSymfony,
  SiLaravel,
  SiAngular,
  SiTailwindcss,
  SiNodedotjs,
  SiSpringboot,
  SiFlask,
  SiPython,
  SiDocker, 
  SiJenkins,
  SiC,
  SiCplusplus, 

} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import UnityLogo from "../assets/unity.png";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Techno = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* Unity Logo */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={UnityLogo} alt="Unity Logo" className="w-16 h-16" />
        </motion.div>

        {/* React */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400 " />
        </motion.div>

        {/* Docker */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiDocker className="text-7xl text-blue-500" />
        </motion.div>

        {/* Jenkins */}
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJenkins className="text-7xl text-red-500" />
        </motion.div>

        {/* Symfony */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiSymfony className="text-7xl" />
        </motion.div>

        {/* Laravel */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiLaravel className="text-7xl text-red-600" />
        </motion.div>

        {/* Angular */}
        <motion.div
          variants={iconVariants(7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiAngular className="text-7xl text-red-500 " />
        </motion.div>

        {/* MongoDB */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500 " />
        </motion.div>

        {/* Tailwind CSS */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTailwindcss className="text-7xl text-cyan-600 " />
        </motion.div>

        {/* Node.js */}
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiNodedotjs className="text-7xl text-green-500 " />
        </motion.div>

        {/* PostgreSQL */}
        <motion.div
          variants={iconVariants(7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoPostgresql className="text-7xl text-sky-700 " />
        </motion.div>

        {/* Spring Boot */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiSpringboot className="text-7xl text-green-600" />
        </motion.div>

        {/* Python */}
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPython className="text-7xl text-yellow-400" />
        </motion.div>

        {/* Flask */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiFlask className="text-7xl text-gray-600" />
        </motion.div>

         
        {/* C */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiC className="text-7xl text-blue-600" />
        </motion.div>

        {/* C++ */}
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiCplusplus className="text-7xl text-blue-600" />
        </motion.div>

      


      </motion.div>
    </div>
  );
};

export default Techno;
