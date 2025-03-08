
import React from 'react';
import './Industries.css';
import { motion } from 'framer-motion';

const Industries = () => {
  const industriesData = [
    { id: 1, name: 'Industry & Manufacturing', icon: 'fa-industry' },
    { id: 2, name: 'Transportation & Logistics', icon: 'fa-truck-fast' },
    { id: 3, name: 'Healthcare', icon: 'fa-hospital' },
    { id: 4, name: 'Banks & Insurance', icon: 'fa-building-columns' },
    { id: 5, name: 'Consulting Providers', icon: 'fa-handshake' },
    { id: 6, name: 'Non-Profit', icon: 'fa-hand-holding-heart' },
  ];

  return (
    <section id="industries" className="industries-section">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title industries-title"
        >
          Solving IT challenges in every<br />industry, every day.
        </motion.h2>
        
        <div className="industries-grid">
          {industriesData.map((industry, index) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={industry.id} 
              className="industry-card"
            >
              <div className="industry-icon">
                <i className={`fas ${industry.icon}`}></i>
              </div>
              <span className="industry-name">{industry.name}</span>
            </motion.div>
          ))}
        </div>
        
        <div className="view-all-industries">
          <a href="#all-industries">
            View All Industries
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Industries;
