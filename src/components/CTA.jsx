import React from 'react';
import { motion } from 'framer-motion';

function CTA() {
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com', '_blank');
  };

  const handleContactClick = () => {
    // Example action: navigate to a contact form or open a modal
    console.log('Contact Us button clicked');
  };

  return (
    <section className="py-20 bg-primary text-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-6">Ready to transform your business?</h2>
        <p className="mb-8">Connect with us to learn how InsightPulseAI can help your business make data-driven decisions.</p>
        <div className="flex gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-white text-primary rounded-lg"
            onClick={handleLinkedInClick}
          >
            Connect on LinkedIn
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 border border-white text-white rounded-lg"
            onClick={handleContactClick}
          >
            Contact Us
          </motion.button>
        </div>
      </motion.div>
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p>📍 Pasig City, Metro Manila, Philippines</p>
          <p>📞 +63 968 269 9265</p>
          <p>✉️ jgtolentino.rn@gmail.com</p>
        </div>
        <div className="mt-6 md:mt-0">
          <h3 className="text-lg font-semibold">Customer Support</h3>
          <p>Our team is ready to assist you with any inquiries or support needs.</p>
        </div>
      </div>
    </section>
  );
}

export default CTA; 