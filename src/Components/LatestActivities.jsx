import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LatestActivities = ({ activities }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % activities.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, [activities.length]);

  // Open to display full-size image
  const handleImageClick = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  // Set the current index based on circle-click
  const handleCircleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative mt-20 border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Latest Activities
      </motion.h2>

      <div className="overflow-hidden relative mx-auto max-w-6xl h-[32rem]">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 ${
              index === currentIndex ? "block" : "hidden"
            } w-full h-full`}
          >
            <img
              src={activity.image}
              alt={activity.title}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => handleImageClick(activity.image)}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
              <h3 className="text-lg font-semibold">{activity.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Indicator circles */}
      <div className="flex justify-center space-x-2 mt-4">
        {activities.map((_, index) => (
          <div
            key={index}
            onClick={() => handleCircleClick(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-purple-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Modal for full-size image */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={handleCloseModal}
          >
            ✖
          </button>
          <img
            src={modalImage}
            alt="Full size"
            className="max-w-full max-h-full"
          />
        </div>
      )}
    </div>
  );
};

export default LatestActivities;
