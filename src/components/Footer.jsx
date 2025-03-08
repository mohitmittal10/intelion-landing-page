
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="/">
              <span>Intelion</span>
            </a>
            <p>Simplifying IT for a complex world.</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-link-group">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-link-group">
              <h4>Services</h4>
              <ul>
                <li><a href="#managed-services">Managed Services</a></li>
                <li><a href="#consulting">IT Consulting</a></li>
                <li><a href="#security">Cyber Security</a></li>
                <li><a href="#development">Development</a></li>
              </ul>
            </div>
            
            <div className="footer-link-group">
              <h4>Legal</h4>
              <ul>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#cookies">Cookie Policy</a></li>
                <li><a href="#gdpr">GDPR Compliance</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-social">
            <h4>Connect With Us</h4>
            <div className="social-icons">
              <a href="#facebook" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#linkedin" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#twitter" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#instagram" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Intelion. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
