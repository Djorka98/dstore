import React, { useState, useEffect, useCallback } from 'react';
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

const REACT_APP_SLIDES_URL_EN = [
  {
    "products": [
      {
        "title": "Wireless Earphones",
        "description": "High-quality wireless earphones with noise cancellation and long battery life.",
        "imageUrl": "/images/earphones.png"
      },
      {
        "title": "Gaming Headset",
        "description": "Immersive gaming headset with surround sound and noise-isolating microphone.",
        "imageUrl": "/images/headphones.png"
      },
      {
        "title": "Gaming Monitor",
        "description": "High-refresh-rate gaming monitor with ultra-low latency for competitive gaming.",
        "imageUrl": "/images/monitor.png"
      },
      {
        "title": "Gaming Phone",
        "description": "High-performance gaming phone with an ultra-smooth display and liquid cooling system.",
        "imageUrl": "/images/phone_gamer.png"
      },
      {
        "title": "Gaming Tablet",
        "description": "High-performance gaming tablet with an ultra-responsive touch display and long battery life.",
        "imageUrl": "/images/tablet_gamer.png"
      },
      {
        "title": "Smartwatch",
        "description": "Feature-packed smartwatch with fitness tracking, notifications, and a sleek design.",
        "imageUrl": "/images/smartwatch.png"
      }
    ]
  }
];

const REACT_APP_PRODUCTS_URL_EN = [
  {
    "products": [
      {
        "title": "Gaming PC",
        "description": "Powerful gaming PC with RGB lighting and high-performance hardware for the ultimate gaming experience.",
        "imageUrl": "/images/pc_gamer.png"
      },
      {
        "title": "Smart TV",
        "description": "4K UHD Smart TV with HDR and seamless streaming capabilities.",
        "imageUrl": "/images/smarttv.png"
      }
    ]
  }
];

const REACT_APP_SLIDES_URL_ES = [
  {
    "products": [
      {
        "title": "Auriculares inalámbricos",
        "description": "Auriculares inalámbricos de alta calidad con cancelación de ruido y larga duración de batería.",
        "imageUrl": "/images/earphones.png"
      },
      {
        "title": "Auriculares para gaming",
        "description": "Auriculares envolventes para gaming con sonido surround y micrófono con aislamiento de ruido.",
        "imageUrl": "/images/headphones.png"
      },
      {
        "title": "Monitor para gaming",
        "description": "Monitor de gaming con alta tasa de refresco y baja latencia para un rendimiento competitivo.",
        "imageUrl": "/images/monitor.png"
      },
      {
        "title": "Teléfono para gaming",
        "description": "Teléfono de alto rendimiento para gaming con pantalla ultra fluida y sistema de refrigeración líquida.",
        "imageUrl": "/images/phone_gamer.png"
      },
      {
        "title": "Tablet para gaming",
        "description": "Tablet de alto rendimiento para gaming con pantalla táctil ultra responsiva y gran duración de batería.",
        "imageUrl": "/images/tablet_gamer.png"
      },
      {
        "title": "Smartwatch",
        "description": "Smartwatch con múltiples funciones, seguimiento de actividad física, notificaciones y diseño elegante.",
        "imageUrl": "/images/smartwatch.png"
      }
    ]
  }
];

const REACT_APP_PRODUCTS_URL_ES = [
  {
    "products": [
      {
        "title": "PC Gamer",
        "description": "Potente PC gamer con iluminación RGB y hardware de alto rendimiento para una experiencia de juego definitiva.",
        "imageUrl": "/images/pc_gamer.png"
      },
      {
        "title": "Smart TV",
        "description": "Smart TV 4K UHD con HDR y capacidades de streaming sin interrupciones.",
        "imageUrl": "/images/smarttv.png"
      }
    ]
  }
];

function AppContent() {
  const [slides, setSlides] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t, i18n } = useTranslation();

  const fetchSlidesAndProducts = useCallback((lng) => {
    try {
      const slidesData = lng === 'en' ? REACT_APP_SLIDES_URL_EN : REACT_APP_SLIDES_URL_ES;
      const productsData = lng === 'en' ? REACT_APP_PRODUCTS_URL_EN : REACT_APP_PRODUCTS_URL_ES;
  
      if (slidesData.length && Array.isArray(slidesData[0].products)) {
        const validSlides = slidesData[0].products.filter(
          (product) => product.title && product.description && product.imageUrl
        );
        setSlides(validSlides);
      } else {
        setError('Unexpected slides data format.');
      }
  
      if (productsData.length && Array.isArray(productsData[0].products)) {
        const validProducts = productsData[0].products.filter(
          (product) => product.title && product.description && product.imageUrl
        );
        setProducts(validProducts);
      } else {
        setError('Unexpected products data format.');
      }
  
      setLoading(false);
    } catch (error) {
      console.error('Error loading data:', error);
      setError('Error loading data, please try again later.');
      setLoading(false);
    }
  }, [
    setSlides,
    setProducts,
    setError,
    setLoading
  ]);
  
  useEffect(() => {
    fetchSlidesAndProducts(i18n.language);
  }, [i18n.language, fetchSlidesAndProducts]);   

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