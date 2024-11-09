import React from 'react';
import { motion } from 'framer-motion';

function ValueProposition() {
  return (
    <section className="py-20 bg-gray-900 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl text-white font-bold mb-6">Why Choose InsightPulseAI</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Experience the full power of our AI analytics and see how we can transform your business insights.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {[
          {
            title: "Real-Time Insights",
            description: "Get actionable insights from live data to stay ahead of the competition."
          },
          {
            title: "Customizable Analytics",
            description: "Tailor analytics to your specific business needs for targeted insights."
          },
          {
            title: "Seamless Integration",
            description: "Easily integrate with your existing tools and data sources."
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl text-primary mb-4">{item.title}</h3>
            <p className="text-gray-400">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ValueProposition; 