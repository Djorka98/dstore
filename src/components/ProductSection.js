// src/components/ProductSection.js
import React from 'react';
import { motion } from 'framer-motion';
import './ProductSection.css';

const ProductSection = ({ title, description, imageUrl }) => {
  return (
    <section className="product-section">
      <motion.div
        className="text-content"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>{title}</h2>
        <p>{description}</p>
      </motion.div>
      <motion.img
        src={imageUrl}
        alt={title}
        className="product-image"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
    </section>
  );
};

export default ProductSection;
