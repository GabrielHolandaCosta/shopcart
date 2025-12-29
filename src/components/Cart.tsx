import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { formatPrice } from '@/i18n';
import { getProductName } from '@/i18n/productNames';
import CheckoutModal from './CheckoutModal';
import './Cart.css';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const { language, t } = useLanguage();
  const [showCheckout, setShowCheckout] = useState(false);

  if (!isOpen) return null;

  const handleQuantityChange = (productId: number, change: number) => {
    const item = cart.find((item) => item.product.id === productId);
    if (item) {
      const newQuantity = item.quantity + change;
      // Garantir que a quantidade nunca seja menor que 1
      if (newQuantity >= 1) {
        updateQuantity(productId, newQuantity);
      }
    }
  };

  const canDecrease = (productId: number): boolean => {
    const item = cart.find((item) => item.product.id === productId);
    return item ? item.quantity > 1 : false;
  };

  return (
    <>
      <div className="cart-overlay" onClick={onClose} />
      <div className="cart-sidebar">
        <div className="cart-header">
          <h2 className="cart-title">{t('cart.title')}</h2>
          <button className="cart-close" onClick={onClose} aria-label="Close cart">
            ×
          </button>
        </div>

        <div className="cart-content">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty-icon">🛒</div>
              <p className="cart-empty-title">{t('cart.empty')}</p>
              <p className="cart-empty-message">{t('cart.emptyMessage')}</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item) => (
                  <div key={item.product.id} className="cart-item">
                    <img
                      src={item.product.image}
                      alt={getProductName(item.product.id, language)}
                      className="cart-item-image"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://via.placeholder.com/80x80?text=Imagem+Indisponível';
                      }}
                    />
                    <div className="cart-item-info">
                      <h3 className="cart-item-name">{getProductName(item.product.id, language)}</h3>
                      <p className="cart-item-price">
                        {formatPrice(item.product.price, language)}
                      </p>
                      <div className="cart-item-actions">
                        <div className="quantity-controls">
                          <button
                            className="quantity-button"
                            onClick={() => handleQuantityChange(item.product.id, -1)}
                            disabled={!canDecrease(item.product.id)}
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <span className="quantity-value">{item.quantity}</span>
                          <button
                            className="quantity-button"
                            onClick={() => handleQuantityChange(item.product.id, 1)}
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="remove-button"
                          onClick={() => removeFromCart(item.product.id)}
                          aria-label="Remove item"
                        >
                          {t('cart.remove')}
                        </button>
                      </div>
                      <p className="cart-item-subtotal">
                        {t('cart.subtotal')}: {formatPrice(item.product.price * item.quantity, language)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart-footer">
                <div className="cart-total">
                  <span className="cart-total-label">{t('cart.total')}:</span>
                  <span className="cart-total-value">
                    {formatPrice(getTotalPrice(), language)}
                  </span>
                </div>
                <button
                  className="checkout-button"
                  onClick={() => setShowCheckout(true)}
                >
                  {t('cart.checkout')}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <CheckoutModal
        isOpen={showCheckout}
        onClose={() => {
          setShowCheckout(false);
          clearCart();
          onClose();
        }}
      />
    </>
  );
};

export default Cart;

