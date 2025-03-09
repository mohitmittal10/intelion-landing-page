
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './IntroVideo.css';

const IntroVideo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleOpenVideo = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseVideo = () => {
    setIsOpen(false);
    setIsPlaying(false);
    document.body.style.overflow = 'auto';
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleCloseVideo();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <>
      <motion.button
        className="intro-video-button"
        onClick={handleOpenVideo}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <i className="fas fa-play-circle"></i> Watch Tech Stack Intro
      </motion.button>

      {isOpen && (
        <div className="video-modal-overlay">
          <motion.div 
            className="video-modal"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <div className="video-container">
              <video 
                ref={videoRef}
                src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-his-computer-screen-1728-large.mp4"
                onClick={togglePlay}
                poster="https://images.pexels.com/photos/3183150/pexels-fauxels-3183150.jpeg"
              ></video>
              <div className="video-controls">
                <button className="play-pause-btn" onClick={togglePlay}>
                  <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                </button>
                <div className="video-info">
                  <h3>Intelion Tech Stack</h3>
                  <p>React, Framer Motion, Font Awesome & Modern CSS</p>
                </div>
              </div>
              <button className="close-video-btn" onClick={handleCloseVideo}>
                <i className="fas fa-times"></i>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default IntroVideo;
