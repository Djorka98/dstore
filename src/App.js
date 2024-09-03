// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProductSection 
        title="iPhone 14"
        description="El futuro es más brillante que nunca."
        imageUrl="/images/iphone.jpg"
      />
      <ProductSection 
        title="Apple Watch"
        description="Tu compañero más saludable."
        imageUrl="/images/watch.jpg"
      />
      <ProductSection 
        title="Apple Watch"
        description="Tu compañero más saludable."
        imageUrl="/images/watch.jpg"
      />
      <ProductSection 
        title="Apple Watch"
        description="Tu compañero más saludable."
        imageUrl="/images/watch.jpg"
      />
      <ProductSection 
        title="Apple Watch"
        description="Tu compañero más saludable."
        imageUrl="/images/watch.jpg"
      />
      <Footer />
    </div>
  );
}

export default App;
