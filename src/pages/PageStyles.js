import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderFixed = styled.div`
    width: 100%;
    background-color: #181818;
    padding: 36px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 100;
    box-sizing: border-box;
`;

export const ProductContainer = styled.div`
    width: 95%;
    max-width: 1200px;
    padding: 2rem;
    margin: 2rem auto;
    box-shadow: 3px 3px 15px;
    border-radius: 1rem;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    gap: 1rem;

    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

export const ImageContainer = styled.div`
    width: 100%;
    background: red;
    padding: 1rem;
    background-color: #f8f8f8;

    @media (max-width: 550px) {
        padding: 0;
    }
`;

export const ImageProduct = styled(motion.img)`
    width: 100%;
    height: 100%;
`;
    
export const InfoContainer = styled(motion.div)`
    width: 100%;
    padding: 2rem;

    h2 {
        color: #0077ED;
        margin: 0.5rem 0;
    }

    span {
        color: #9a9a9a;
        font-size: 12px;
    }

    p {
        font-size: 18px;
    }

    button {
        padding: 12px 20px;
        font-size: 20px;
        color: #fff;
        cursor: not-allowed;
        border: none;
        border-radius: 10px;
        background-color: #cbcbcb;
        margin-top: 1rem;
    }

    legend {
        font-size: 12px;
        margin-top: 0.5rem;
        color: #e00000;
    }
`;