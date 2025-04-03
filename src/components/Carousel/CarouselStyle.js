import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Embla = styled(motion.section)`
  max-width: 100%;
  margin: auto;
  padding: 2.5rem 3rem;
  --slide-height: 19rem;
  --slide-spacing: 1rem;
  --slide-size: 100%;
  --slide-spacing-sm: 1.6rem;
  --slide-size-sm: 50%;
  --slide-spacing-lg: 2rem;
  --slide-size-lg: calc(100% / 3);
`;

export const EmblaViewport = styled.div`
  overflow: hidden;
`;

export const EmblaContainer = styled.div`
  backface-visibility: hidden;
  display: flex;
  touch-action: pan-y pinch-zoom;
  margin-left: calc(var(--slide-spacing) * -1);
  margin: 2rem 0;

  @media (min-width: 750px) {
    margin-left: calc(var(--slide-spacing-sm) * -1);
  }

  @media (min-width: 1200px) {
    margin-left: calc(var(--slide-spacing-lg) * -1);
  }
`;

export const EmblaSlide = styled.div`
  min-width: 0;
  flex: 0 0 var(--slide-size);
  padding-left: var(--slide-spacing);

  @media (min-width: 750px) {
    flex: 0 0 var(--slide-size-sm);
    padding-left: var(--slide-spacing-sm);
  }

  @media (min-width: 1200px) {
    flex: 0 0 var(--slide-size-lg);
    padding-left: var(--slide-spacing-lg);
  }
`;

export const EmblaSlideContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 100%;

  h3, p {
    width: 100%;
    padding: 0 2rem;
    margin: 0.5rem 0;
  }

  p {
    padding-bottom: 1rem;
  }
`;

export const EmblaSlideImage = styled.img`
  height: 300px;
  border-radius: 10px;
  max-width: 100%;
  padding: 1rem;
  margin-bottom: 10px;
`;

export const EmblaControls = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
  gap: 1.2rem;
  margin-top: 1.8rem;
`;

export const EmblaButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.6rem;
  align-items: center;
`;

export const EmblaButton = styled.button`
  -webkit-tap-highlight-color: #ccc;
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  touch-action: manipulation;
  display: inline-flex;
  text-decoration: none;
  cursor: pointer;
  border: 0;
  padding: 0;
  margin: 0;
  width: 3.6rem;
  height: 3.6rem;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 50%;
  background-color: #d8d8d8;

  &:not(:disabled) {
    color: #0077ed;
  }

  &:disabled {
    color: #969696;
  }
`;

export const EmblaButtonSvg = styled.svg`
  width: 50%;
  height: 50%;
  stroke-width: 2px;
`;