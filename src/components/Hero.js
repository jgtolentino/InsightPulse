import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  const handleButtonClick = () => {
    // Example action: navigate to a demo request page or open a modal
    console.log('Request Demo button clicked');
    // You can replace this with actual navigation or modal logic
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-dark relative text-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Unlock Consumer Insights with AI
        </h1>
        <p className="text-lg text-gray-300 mb-6 max-w-xl mx-auto">
          Transform your data into actionable insights with InsightPulseAI’s advanced analytics and social listening tools.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-6 py-3 bg-primary text-white rounded-lg"
          onClick={handleButtonClick}
        >
          Request Demo
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Hero; 