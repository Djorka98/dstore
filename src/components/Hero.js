// src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <motion.img 
        src="/images/macbook.jpg" 
        alt="MacBook"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-image"
      />
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="hero-title"
      >
        MacBook Pro
      </motion.h1>
    </section>
  );
};

export default Hero;
