import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { GamingLaptop } from './pages/GamingLaptop';
import { GamingTablet } from './pages/GamingTablet';
import { GamingPhone } from './pages/GamingPhone';
import { SmartWatch } from './pages/SmartWatch';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { ProductSection } from './components/ProductSection/ProductSection';
import { Footer } from './components/Footer/Footer';
import { ProductCarousel } from './components/Carousel/ProductCarousel';
import { Values } from './components/Values/Values';
import { GlobalStyle, TitleProductSection, TitleProductCarousel, FloatingButtonContainer, FloatingButton } from './AppStyles';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './i18n';

const OPTIONS = { align: 'start' };

function AppContent() {
  const [slides, setSlides] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t, i18n } = useTranslation();

  const location = useLocation();

  const fetchSlidesAndProducts = async (lng) => {
    try {
      const slidesUrl = lng === 'en'
        ? process.env.REACT_APP_SLIDES_URL_EN
        : process.env.REACT_APP_SLIDES_URL_ES;
    
      const productsUrl = lng === 'en'
        ? process.env.REACT_APP_PRODUCTS_URL_EN
        : process.env.REACT_APP_PRODUCTS_URL_ES;
  
      const [responseSlides, responseProducts] = await Promise.all([
        axios.get(slidesUrl),
        axios.get(productsUrl)
      ]);
  
      if (Array.isArray(responseSlides.data)) {
        const validSlides = responseSlides.data.filter(slide => slide.title && slide.description && slide.imageUrl);
        setSlides(validSlides);
      } else {
        setError('Unexpected slides data format.');
      }
  
      if (Array.isArray(responseProducts.data)) {
        const validProducts = responseProducts.data.filter(product => product.title && product.description && product.imageUrl);
        setProducts(validProducts);
      } else {
        setError('Unexpected products data format.');
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

  const isLaptopPage = location.pathname === "/gaming_laptop";

  return (
    <>
      <GlobalStyle />
      {!isLaptopPage && <Header />}
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/gaming_laptop" element={<GamingLaptop />} />
        <Route path="/gaming_tablet" element={<GamingTablet />} />
        <Route path="/gaming_phone" element={<GamingPhone />} />
        <Route path="/smart_watch" element={<SmartWatch />} />
      </Routes>
      
      {!isLaptopPage && (
        <>
          <FloatingButtonContainer>
            <FloatingButton onClick={() => changeLanguage('es')}>ES</FloatingButton>
            <FloatingButton onClick={() => changeLanguage('en')}>EN</FloatingButton>
          </FloatingButtonContainer>

          <Hero />

          <TitleProductCarousel
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {t('productCarouselTitle')}
          </TitleProductCarousel>

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

          <TitleProductSection
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {t('upcomingProductsTitle')}
          </TitleProductSection>

          {products.length > 0 ? (
            products.map((product, index) => (
              <ProductSection
                key={index}
                title={product.title}
                description={product.description}
                imageUrl={product.imageUrl}
              />
            ))
          ) : (
            <ErrorMessage message={error} />
          )}

          <Values />
          <Footer />
        </>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;