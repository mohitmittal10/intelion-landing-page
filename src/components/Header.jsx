
import React, { useState } from 'react';
import './Header.css';
import Logo from '../assets/logo.jsx';

const Header = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <a href="/" onClick={closeMenu}>
            <Logo />
            <span>Intelion</span>
          </a>
        </div>
        
        <div className={`mobile-menu-button ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#services" onClick={closeMenu}>Services</a></li>
            <li><a href="#industries" onClick={closeMenu}>Industries</a></li>
            <li><a href="#research" onClick={closeMenu}>Market Research</a></li>
            <li><a href="#company" onClick={closeMenu}>Company</a></li>
            <li><a href="#brands" onClick={closeMenu}>Brands</a></li>
          </ul>
        </nav>
        
        <div className="header-right">
          <div className="client-support">
            <span>Client Support</span>
            <a href="tel:0612-2500971">0612-2500971</a>
          </div>
          <a href="#contact" className="contact-button">Contact Us</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
