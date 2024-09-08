// src/Components/LatestActivities.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LatestActivities = ({ activities }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % activities.length);
    }, 1000); // Change every 1 second
    return () => clearInterval(interval);
  }, [activities.length]);

  // Move to the next or previous image
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + activities.length) % activities.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % activities.length);
  };

  return (
    <div className="relative mt-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Latest Activities
      </motion.h2>

      <div className="overflow-hidden relative w-full h-64">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 ${
              index === currentIndex ? "block" : "hidden"
            }`}
          >
            <img
              src={require(`../assets/${activity.image}`).default}
              alt={activity.title}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
              <h3>{activity.title}</h3>
            </div>
          </motion.div>
        ))}

        {/* Left arrow */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 text-white"
          onClick={handlePrev}
        >
          ←
        </button>

        {/* Right arrow */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 text-white"
          onClick={handleNext}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default LatestActivities;
