
import React from 'react';
import './Services.css';
import { motion } from 'framer-motion';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      icon: 'fa-network-wired',
      title: 'Managed Services',
      description: 'Free up your internal resources to focus on the business by letting us handle day to day support services, management, and monitoring of your IT.'
    },
    {
      id: 2,
      icon: 'fa-users-gear',
      title: 'IT Consulting & Advisory',
      description: 'The right technology, implemented properly, appropriately managed and monitored, can lead to significant gains in growth.'
    },
    {
      id: 3,
      icon: 'fa-shield-halved',
      title: 'Cyber Security',
      description: 'Our experts can identify vulnerabilities, assess risks, and implement robust security measures to safeguard your systems and data.'
    },
    {
      id: 4,
      icon: 'fa-code',
      title: 'Web Development',
      description: 'Our web development services can help you establish an impactful online presence and reach your target audience effectively.'
    },
    {
      id: 5,
      icon: 'fa-mobile-screen',
      title: 'Mobile Development',
      description: 'We can help you create a customized mobile app that aligns with your brand and goals, with expertise in various mobile platforms.'
    },
    {
      id: 6,
      icon: 'fa-cloud',
      title: 'Cloud Services',
      description: 'With our expertise in cloud technologies, we can help you find the right cloud solutions that meet your business needs and goals.'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title services-title"
        >
          Solutions
        </motion.h2>
        
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={service.id} 
              className="service-card"
            >
              <div className="service-icon">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href={`#service-${service.id}`} className="learn-more">Learn more</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
