import { motion } from "framer-motion";

const LightningAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1, 0], // Flash effect: show and then disappear
        transition: {
          duration: 0.3, // Quick flash
          repeat: Infinity, // Repeat infinitely or set a count
          repeatDelay: 5, // Delay between flashes
        },
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        background: "radial-gradient(white, transparent)",
        pointerEvents: "none", // So it doesn't interfere with clicks
        zIndex: -1, // Behind everything
      }}
    />
  );
};

export default LightningAnimation;
