import React from 'react';
import { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { formatPrice } from '@/i18n';
import { getProductName } from '@/i18n/productNames';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { language, t } = useLanguage();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const translatedName = getProductName(product.id, language);

  return (
    <div className="product-card">
      <div className="product-info">
        <h3 className="product-name">{translatedName}</h3>
        <p className="product-price">{formatPrice(product.price, language)}</p>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          {t('products.addToCart')}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

