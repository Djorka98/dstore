import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProductSectionContainer = styled.section`
  display: flex;
  align-items: center;
  padding: 50px;
  gap: 20px;
  height: 300px;
  box-shadow: 3px 3px 15px;
  margin: 2rem 1rem;
  border-radius: 1rem;
`;

export const TextContent = styled(motion.div)`
  flex: 1;
`;

export const ProductImage = styled(motion.img)`
  max-width: 50%;
  height: auto;
  width: 300px;
  object-fit: contain;
`;