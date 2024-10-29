import React from 'react';
import {
  ProductSectionContainer,
  TextContent,
  ProductImage
} from './ProductSectionStyle';

export const ProductSection = ({ title, description, imageUrl }) => {
  return (
    <ProductSectionContainer>
      <TextContent
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>{title}</h2>
        <p>{description}</p>
      </TextContent>

      <ProductImage
        src={imageUrl}
        alt={title}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
    </ProductSectionContainer>
  );
};
