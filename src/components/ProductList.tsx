import React, { useState, useMemo } from 'react';
import { products } from '@/data/products';
import { useLanguage } from '@/contexts/LanguageContext';
import { getProductName } from '@/i18n/productNames';
import ProductCard from './ProductCard';
import CategoryFilter, { Category } from './CategoryFilter';
import './ProductList.css';

const ProductList: React.FC = () => {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Simular loading inicial e possível erro
  React.useEffect(() => {
    setIsLoading(true);
    setError(null);
    
    // Simular chamada de API
    const timer = setTimeout(() => {
      try {
        // Simular possível erro (5% de chance)
        if (Math.random() < 0.05) {
          throw new Error('Network error');
        }
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        setIsLoading(false);
      }
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Filtrar por categoria
      const matchCategory = selectedCategory === 'all' || product.category === selectedCategory;
      
      // Filtrar por busca usando o nome traduzido
      if (!searchTerm.trim()) {
        return matchCategory;
      }
      
      const translatedName = getProductName(product.id, language);
      const matchSearch = translatedName.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchCategory && matchSearch;
    });
  }, [searchTerm, selectedCategory, language]);

  if (isLoading) {
    return (
      <div className="products-container">
        <div className="loading-message">{t('products.loading')}</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="products-container">
        <div className="error-message">{t('products.error')}</div>
      </div>
    );
  }

  return (
    <div className="products-container">
      <div className="products-header">
        <h2 className="products-title">{t('products.title')}</h2>
        <input
          type="text"
          className="search-input"
          placeholder={t('products.search')}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {filteredProducts.length === 0 ? (
        <div className="empty-state">
          <p>
            {selectedCategory !== 'all' 
              ? t('products.notFoundCategory')
              : t('products.notFound')
            }
          </p>
        </div>
      ) : (
        <>
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="more-products-banner">
            <div className="more-products-content">
              <div className="more-products-icon">🚀</div>
              <h3 className="more-products-title">{t('products.moreComing')}</h3>
              <p className="more-products-text">{t('products.moreComingText')}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;

