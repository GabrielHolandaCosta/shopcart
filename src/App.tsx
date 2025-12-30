import React, { useState } from 'react';
import { CartProvider } from './contexts/CartContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import WelcomeBanner from './components/WelcomeBanner';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showShop, setShowShop] = useState(false);

  const handleEnterShop = () => {
    setShowShop(true);
  };

  const handleBackToLanding = () => {
    setShowShop(false);
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <CartProvider>
          {!showShop ? (
            <LandingPage onEnterShop={handleEnterShop} />
          ) : (
            <div className="app">
              <Header onCartClick={() => setIsCartOpen(true)} onBackClick={handleBackToLanding} />
              <main className="main-content">
                <WelcomeBanner />
                <ProductList />
              </main>
              <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            </div>
          )}
        </CartProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;

