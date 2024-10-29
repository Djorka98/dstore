import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  text-align: center;
  background-color: #eee;
`;

export const HeroTitle = styled(motion.h1)`
  font-size: 24px;
  margin-top: 120px;
  margin-bottom: 0;
  color: #333;
`;

export const HeroDesc = styled(motion.h2)`
  font-size: 48px;
  margin-top: 0;
`;

export const HeroImage = styled(motion.img)`
  max-width: 100%;
  height: auto;
  width: 800px;
`;

export const HeroButton = styled(motion.button)`
  padding: 16px 26px;
  font-size: 20px;
  color: #fff;
  background-color: #0077ED;
  border: none;
  border-radius: 30px;
  margin: 3rem 0 1.5rem;
  cursor: pointer;

  &:hover {
    background-color: #006EDB;
  }
`;

export const HeroSpan = styled(motion.span)`
  font-size: 24px;
  color: #333;
  font-weight: 700;
  margin-bottom: 4rem;
`;