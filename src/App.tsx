import React, { useState } from 'react';
import { CartProvider } from './contexts/CartContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import WelcomeBanner from './components/WelcomeBanner';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <CartProvider>
          <div className="app">
            <Header onCartClick={() => setIsCartOpen(true)} />
            <main className="main-content">
              <WelcomeBanner />
              <ProductList />
            </main>
            <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
          </div>
        </CartProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;

