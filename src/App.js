import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

      if (responseSlides.data && Array.isArray(responseSlides.data.products)) {
        const validSlides = responseSlides.data.products.filter(product => product.title && product.description && product.imageUrl);
        setSlides(validSlides);
      } else {
        setError('Unexpected products data format.');
      }
  
      if (responseProducts.data && Array.isArray(responseProducts.data.products)) {
        const validProducts = responseProducts.data.products.filter(product => product.title && product.description && product.imageUrl);
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

  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <FloatingButtonContainer>
              <FloatingButton onClick={() => changeLanguage('es')}>ES</FloatingButton>
              <FloatingButton onClick={() => changeLanguage('en')}>EN</FloatingButton>
            </FloatingButtonContainer>

            <TitleProductCarousel>
              {t('productCarouselTitle')}
            </TitleProductCarousel>
            
            {loading ? (
              <Loading />
            ) : error ? (
              <ErrorMessage message={error} />
            ) : (
              <ProductCarousel slides={slides} options={OPTIONS} />
            )}

            <TitleProductSection>
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
          </>
        } />
        <Route path="/gaming_laptop" element={<GamingLaptop />} />
        <Route path="/gaming_tablet" element={<GamingTablet />} />
        <Route path="/gaming_phone" element={<GamingPhone />} />
        <Route path="/smart_watch" element={<SmartWatch />} />
      </Routes>
      <Footer />
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