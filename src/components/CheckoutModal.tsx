import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import './CheckoutModal.css';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <>
      <div className="checkout-overlay" onClick={onClose} />
      <div className="checkout-modal">
        <div className="checkout-content">
          <div className="checkout-icon">✅</div>
          <h2 className="checkout-title">{t('checkout.title')}</h2>
          <p className="checkout-message">{t('checkout.message')}</p>
          <button className="checkout-close-button" onClick={onClose}>
            {t('checkout.close')}
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckoutModal;

