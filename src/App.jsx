
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Services from './components/Services';
import Industries from './components/Industries';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Services />
        <Industries />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default App;
