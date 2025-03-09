
import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title"
          >
            We manage your IT, <br />so you can manage <br />your business.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-description"
          >
            Take charge of your business continuity with innovative IT solutions
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-buttons"
          >
            <a href="#consultation" className="consultation-button">Schedule a Free Consultation</a>
            <a href="#services" className="services-button">Services</a>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-image"
        >
          <img src="\assets\a.jpg" alt="IT Team" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
