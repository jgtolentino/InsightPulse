import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Button from './Button';

function Footer() {
  return (
    <footer className="section-padding bg-black/50">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-light mb-8 text-balance gradient-text">
            Ready to transform your feedback analysis?
          </h2>
          <p className="text-gray-300 mb-12">
            Connect with us to learn how InsightPulseAI can help your business make data-driven decisions.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Button href="https://www.linkedin.com/company/insightpulseai" className="gap-3">
              <FaLinkedin className="w-5 h-5" />
              Connect on LinkedIn
            </Button>
            <Button href="mailto:jgtolentino.rn@gmail.com" variant="outline" className="gap-3">
              <FaEnvelope className="w-5 h-5" />
              Contact Us
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-light text-primary mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Pasig City, Metro Manila, Philippines</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+639682699265" className="hover:text-primary transition-colors">
                  +63 968 269 9265
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:jgtolentino.rn@gmail.com" className="hover:text-primary transition-colors">
                  jgtolentino.rn@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-light text-primary mb-6">Customer Support</h3>
            <p className="text-gray-300">
              Our team is ready to assist you with any inquiries or support needs. Reach out via email or phone, and we'll get back to you promptly.
            </p>
          </div>
        </div>

        <div className="text-sm text-gray-400 text-center">
          <nav className="flex flex-wrap gap-8 justify-center mb-6">
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Support</a>
          </nav>
          <p>© {new Date().getFullYear()} InsightPulseAI. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;