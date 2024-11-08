import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { FaLightbulb } from 'react-icons/fa';
import UI from '../../ui';

const images = ['/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg'];
const backgroundImage = images[Math.floor(Math.random() * images.length)];

function Hero() {
  return (
    <section
      className="min-h-[90vh] flex items-center justify-center px-4 py-20 bg-dark relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="max-w-[65ch] mx-auto text-center relative z-10"
      >
        <div className="flex justify-center mb-6">
          <FaLightbulb className="w-12 h-12 text-primary animate-pulse" />
        </div>

        <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.1] mb-8 text-balance gradient-text">
          Unlock Consumer Insights with Social Listening and AI
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-[clamp(1.25rem,2vw,1.5rem)] text-gray-300 mb-12 font-light max-w-[50ch] mx-auto text-balance">
            Experience the full power of our AI analytics with a personalized demo. See how InsightPulseAI can transform your data into actionable insights.
          </p>
          <div className="flex gap-6 justify-center">
            <Button href="#demo">Request Demo</Button>
            <Button href="https://www.linkedin.com/company/insightpulseai" variant="outline">
              Learn More
            </Button>
          </div>
          <p className="mt-10 text-gray-400 font-medium">Ready to transform your business?</p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
