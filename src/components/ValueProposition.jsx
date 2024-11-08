import React from 'react';
import { motion } from 'framer-motion';

function ValueProposition() {
  return (
    <section className="section-padding bg-black/50">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-[65ch] mx-auto text-center"
      >
        <h2 className="text-[clamp(1.5rem,3vw,2rem)] text-gray-300 leading-relaxed font-light text-balance">
          Trusted by leading companies to unlock <span className="text-primary">actionable insights</span> from customer feedback and measure business impact.
        </h2>
        <div className="mt-12 flex flex-col gap-6">
          <div className="flex items-center justify-center gap-4">
            <span className="text-4xl font-light text-primary">98%</span>
            <p className="text-gray-300 text-left">Accuracy in sentiment analysis</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <span className="text-4xl font-light text-primary">2.5x</span>
            <p className="text-gray-300 text-left">Faster insights generation</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default ValueProposition;