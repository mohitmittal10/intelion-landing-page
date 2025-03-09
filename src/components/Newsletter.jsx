
import React, { useState } from 'react';
import './Newsletter.css';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && isChecked) {
      console.log('Newsletter subscription:', { email });
      setIsSubmitted(true);
      setEmail('');
      setIsChecked(false);
      
      // Reset the submission state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section id="newsletter" className="newsletter-section">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-left">
            <h2>Solutions</h2>
            <ul className="solution-links">
              <li><a href="#digital-strategy">Digital Strategy & Design</a></li>
              <li><a href="#app-dev">Application Development and Management</a></li>
              <li><a href="#cloud">Cloud & Infrastructure</a></li>
              <li><a href="#saas">Software-as-a-Service</a></li>
              <li><a href="#digital-marketing">Digital & Brand Marketing</a></li>
              <li><a href="#ai">Generative AI & Business Intelligence</a></li>
              <li><a href="#network">Network Connectivity</a></li>
              <li><a href="#erp">ERP Solutions</a></li>
            </ul>
          </div>
          
          <div className="newsletter-right">
            <div className="company-links">
              <h2>Company</h2>
              <ul className="company-list">
                <li><a href="#events">Events</a></li>
                <li><a href="#why-us">Why us</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#partners">Partners & Certifications</a></li>
                <li><a href="#reviews">Reviews & Awards</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#case-studies">Case studies</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            
            
          </div>
        </div>
        
        <div className="newsletter-form-container">
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input 
              type="email" 
              placeholder="Don't miss out updates" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            
            <div className="form-footer">
              <div className="consent-checkbox">
                <input 
                  type="checkbox" 
                  id="privacy-consent" 
                  checked={isChecked} 
                  onChange={() => setIsChecked(!isChecked)} 
                  required 
                />
                <label htmlFor="privacy-consent">
                  I agree to the Privacy Policy and give my permission to process my personal data for the purposes specified in the Privacy Policy.
                </label>
              </div>
              
              <button 
                type="submit" 
                className={`submit-btn ${isSubmitted ? 'submitted' : ''}`}
                disabled={!email || !isChecked}
              >
                {isSubmitted ? 'Sent!' : 'Send'}
                {!isSubmitted && <i className="fas fa-arrow-right"></i>}
                {isSubmitted && <i className="fas fa-check"></i>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
