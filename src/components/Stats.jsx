
import React from 'react';
import './Stats.css';
import { motion } from 'framer-motion';

const Stats = () => {
  const statsData = [
    { id: 1, number: '08', suffix: 'Years', description: 'Proven Track Record' },
    { id: 2, number: '98', suffix: '%', description: 'Customer Satisfaction' },
    { id: 3, number: '470', suffix: '+', description: 'Projects We Have Completed' },
    { id: 4, number: '3', suffix: 'Mins', description: 'Average Answer Time' },
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-header">
          <div className="stats-review">
            <span>REVIEWED ON</span>
            <h3>Clutch</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <span>2K+ REVIEWS</span>
          </div>
        </div>
      
        <div className="stats-container">
          {statsData.map((stat, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={stat.id} 
              className="stat-item"
            >
              <div className="stat-number">
                <span className="number">{stat.number}</span>
                <span className="suffix">{stat.suffix}</span>
              </div>
              <p className="stat-description">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
