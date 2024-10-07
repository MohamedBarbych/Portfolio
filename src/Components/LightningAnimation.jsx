import { motion } from "framer-motion";
import React from "react";

const LightningAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1, 0], // Lightning flashes in and out
        transition: {
          duration: 0.1, // Faster flash to feel like lightning
          repeat: Infinity, // Infinite flashes
          repeatDelay: 3, // Random delays between strikes
        },
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        background: "transparent",
        pointerEvents: "none", // So it doesn't interfere with clicks
        zIndex: -1, // Behind everything
      }}
    >
      {/* Stylized Lightning Bolt */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{
          scaleX: [0, 1, 0], // Grows in width and disappears
          transition: {
            duration: 0.2, // Quick burst for lightning
            ease: "easeInOut", // Smooth grow/shrink
            repeat: Infinity,
            repeatDelay: 5, // Delay between strikes
          },
        }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "4px", // Thin lightning bolt
          height: "50vh", // Length of the bolt
          background:
            "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))", // Fades out at the bottom
          transform: "rotate(30deg) translateX(-50%)", // Bolt slanted and centered
          boxShadow: "0 0 20px 5px rgba(255, 255, 255, 0.8)", // Glowing effect around the bolt
        }}
      />
    </motion.div>
  );
};

export default LightningAnimation;
