import React from 'react';
import { motion } from 'framer-motion';

function SocialProof() {
  return (
    <section className="section-padding">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <p className="text-sm text-gray-400 mb-6 tracking-widest uppercase">Trusted by industry leaders</p>
        <div className="text-[clamp(2rem,4vw,3rem)] font-light tracking-wide text-primary">SCREENFLIX</div>
      </motion.div>
    </section>
  );
}

export default SocialProof;