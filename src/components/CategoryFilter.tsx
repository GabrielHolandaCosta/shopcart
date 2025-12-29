import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import './CategoryFilter.css';

export type Category = 'all' | 'electronics' | 'games' | 'clothes';

interface CategoryFilterProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const { t } = useLanguage();

  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: t('categories.all') },
    { key: 'electronics', label: t('categories.electronics') },
    { key: 'games', label: t('categories.games') },
    { key: 'clothes', label: t('categories.clothes') },
  ];

  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category.key}
          className={`category-button ${selectedCategory === category.key ? 'active' : ''}`}
          onClick={() => onCategoryChange(category.key)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;

