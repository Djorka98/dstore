import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { ProductCarousel } from '../components/Carousel/ProductCarousel';
import { motion } from 'framer-motion';
import { FloatingButtonContainer, FloatingButton } from '../AppStyles';
import { useTranslation } from 'react-i18next';
import '../i18n';

import { 
  HeaderFixed, 
  ProductContainer,
  ImageContainer,
  InfoContainer,
  ImageProduct
} from './PageStyles';

const OPTIONS = { align: 'start' };

export const GamingLaptop = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t, i18n } = useTranslation();

  const fetchSlidesAndProducts = async (lng) => {
    try {
      const slidesUrl = lng === 'en' 
        ? 'https://run.mocky.io/v3/7d5404de-30aa-4092-9a97-9ccf581c3a5e' 
        : 'https://run.mocky.io/v3/5635a7b1-34a5-4cb5-b73a-432924df19f9';
  
      const [responseSlides] = await Promise.all([
        axios.get(slidesUrl)
      ]);
  
      if (Array.isArray(responseSlides.data)) {
        const validSlides = responseSlides.data.filter(slide => slide.title && slide.description && slide.imageUrl);
        setSlides(validSlides);
      } else {
        setError('Unexpected slides data format.');
      }
  
      setLoading(false);
    } catch (error) {
      setError('Error fetching data, please try again later.');
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchSlidesAndProducts(i18n.language);
  }, [i18n.language]);

  const Loading = () => <motion.div 
                          className="spinner" 
                          style={{padding: '0 2rem'}}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 1, delay: 0.5 }}
                          viewport={{ once: true }}
                        >Loading...</motion.div>;
  
  const ErrorMessage = ({ message }) => <motion.div 
                                          className="error" 
                                          style={{padding: '0 2rem'}}
                                          initial={{ opacity: 0 }}
                                          whileInView={{ opacity: 1 }}
                                          transition={{ duration: 1, delay: 0.5 }}
                                          viewport={{ once: true }}
                                        >{message}</motion.div>;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <FloatingButtonContainer>
        <FloatingButton onClick={() => changeLanguage('es')}>ES</FloatingButton>
        <FloatingButton onClick={() => changeLanguage('en')}>EN</FloatingButton>
      </FloatingButtonContainer>
      <Header/>
      <HeaderFixed/>
      <ProductContainer>
        <ImageContainer>
          <ImageProduct 
            src='./images/laptop_gamer.png' 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}  
          />
        </ImageContainer>
        <InfoContainer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>{t('laptopGamerTitle')}</h2>
          <span>{t('laptopGamerSpan')}</span>
          <p>{t('laptopGamerDesc')}</p>
          <button>{t('productButton')}</button>
          <legend>{t('productLegend')}</legend>
        </InfoContainer>
      </ProductContainer>

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        style={{textAlign: 'center', marginTop: '2.5rem'}}
      >
        {t('productsTitle')}
      </motion.h2>

      {loading ? (
        <Loading 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      ) : error ? (
        <ErrorMessage 
          message={error}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      ) : (
        <ProductCarousel 
          slides={slides} options={OPTIONS} 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      )}
      <Footer />
    </>
  );
};
