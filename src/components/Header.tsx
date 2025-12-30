import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Language } from '@/types';
import './Header.css';

interface HeaderProps {
  onCartClick: () => void;
  onBackClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick, onBackClick }) => {
  const { getTotalItems } = useCart();
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [showLangMenu, setShowLangMenu] = useState(false);

  const languages: { code: Language; label: string }[] = [
    { code: 'pt', label: t('lang.pt') },
    { code: 'en', label: t('lang.en') },
    { code: 'es', label: t('lang.es') },
  ];

  // Fechar menu ao clicar fora
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.language-selector')) {
        setShowLangMenu(false);
      }
    };

    if (showLangMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showLangMenu]);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setShowLangMenu(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          {onBackClick && (
            <button className="back-button" onClick={onBackClick} aria-label="Voltar">
              ← {t('header.back')}
            </button>
          )}
          {onBackClick ? (
            <button className="header-title-button" onClick={onBackClick} aria-label="Voltar para início">
              <h1 className="header-title">{t('header.title')}</h1>
            </button>
          ) : (
            <h1 className="header-title">{t('header.title')}</h1>
          )}
        </div>
        
        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === 'light' ? 'Modo escuro' : 'Modo claro'}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          
          <div className="language-selector">
            <button
              className="lang-button"
              onClick={() => setShowLangMenu(!showLangMenu)}
              aria-label="Select language"
            >
              {language.toUpperCase()}
            </button>
            {showLangMenu && (
              <div className="lang-menu">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`lang-option ${language === lang.code ? 'active' : ''}`}
                    onClick={() => handleLanguageChange(lang.code)}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <button className="cart-button" onClick={onCartClick}>
            <span className="cart-icon">🛒</span>
            <span className="cart-text">{t('header.cart')}</span>
            {getTotalItems() > 0 && (
              <span className="cart-badge">{getTotalItems()}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

