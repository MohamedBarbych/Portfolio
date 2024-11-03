import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Certification = ({ certifications }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [certifications.length]);

  const handleImageClick = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

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
        Certifications
      </motion.h2>

      <div className="overflow-hidden relative mx-auto max-w-4xl h-[28rem]">
        {certifications.map((cert, index) => (
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
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-contain cursor-pointer"
              onClick={() => handleImageClick(cert.image)}
            />
            
            {/* ---------Description_Band -----*/}
            <div
              className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 flex justify-between items-center"
              style={{ width: "100%", height: "fit-content" }}
            >
              <h3 className="text-lg font-semibold">{cert.title}</h3>
              <a
                href={cert.link} 
                target="_blank"  
                rel="noopener noreferrer"
                className="text-sm ml-4 font-semibold transition duration-200 ease-in-out text-purple-400 hover:text-purple-500 transform hover:scale-105"
                style={{
                  fontFamily: "'Roboto', sans-serif", 
                  padding: "0.25rem 0.5rem",         
                  backgroundColor: "rgba(255, 255, 255, 0.1)", 
                  borderRadius: "4px",
                  textDecoration: "none",             
                }}
              >
                View Certificate
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/*--------------- Indicator circles moved to the bottom of the slider --------------*/}
      <div className="flex justify-center space-x-2 mt-4">
        {certifications.map((_, index) => (
          <div
            key={index}
            onClick={() => handleCircleClick(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-purple-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/*--------------- Modal for full-size image ----------*/}
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

export default Certification;
