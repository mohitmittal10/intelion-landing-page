
import React from 'react';
import './Features.css';
import { motion } from 'framer-motion';

const Features = () => {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="features-header">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="feature-subtitle"
          >
            WHAT WE DO
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="feature-title"
          >
            Simplifying IT<br />for a complex world.
          </motion.h2>
        </div>

        <div className="pattern-background">
          <div className="dot-pattern"></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
