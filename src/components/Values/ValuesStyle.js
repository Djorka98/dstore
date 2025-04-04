import styled from 'styled-components';

export const ValuesSection = styled.div`
  padding: 1rem 1rem 2rem;
`;

export const ValueGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(6, 1fr);

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ValueContainer = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 3px 3px 15px;
  width: 100%;
`;

export const Description = styled.p`
  font-weight: 700;
  font-size: 22px;
  margin: 0.75rem 0;
`;
