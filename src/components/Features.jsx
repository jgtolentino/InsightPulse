import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaRobot, FaChartBar, FaUpload, FaChartPie, FaUsers } from 'react-icons/fa';

const features = [
  {
    icon: FaChartLine,
    title: 'Real-Time Analytics',
    description: 'Track sentiment and engagement across platforms instantly'
  },
  {
    icon: FaRobot,
    title: 'AI-Powered Insights',
    description: 'Deep learning algorithms analyze feedback patterns'
  },
  {
    icon: FaChartBar,
    title: 'Monte Carlo Simulation',
    description: 'Advanced statistical modeling for accurate predictions'
  },
  {
    icon: FaUpload,
    title: 'Easy Data Upload',
    description: 'Simple interface for CSV and Excel file processing'
  },
  {
    icon: FaChartPie,
    title: 'Visual Results',
    description: 'Clear visualizations of analysis outcomes'
  },
  {
    icon: FaUsers,
    title: 'Team Collaboration',
    description: 'Share insights across your organization'
  }
];

function Features() {
  return (
    <section className="section-padding bg-black/30" id="features">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-light text-center mb-16 gradient-text"
        >
          Powerful Features for Deep Insights
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
            >
              <feature.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-light text-primary mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;