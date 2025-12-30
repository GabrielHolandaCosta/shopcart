import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Language } from '@/types';
import './LandingPage.css';

interface LandingPageProps {
  onEnterShop: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnterShop }) => {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [showLangMenu, setShowLangMenu] = useState(false);

  const languages: { code: Language; label: string }[] = [
    { code: 'pt', label: t('lang.pt') },
    { code: 'en', label: t('lang.en') },
    { code: 'es', label: t('lang.es') },
  ];

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.landing-language-selector')) {
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
    <div className="landing-page">
      <div className="landing-header">
        <div className="landing-header-content">
          <h1 className="landing-logo">{t('header.title')}</h1>
          <div className="landing-header-actions">
            <button
              className="landing-theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={theme === 'light' ? 'Modo escuro' : 'Modo claro'}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <div className="landing-language-selector">
              <button
                className="landing-lang-button"
                onClick={() => setShowLangMenu(!showLangMenu)}
                aria-label="Select language"
              >
                {language.toUpperCase()}
              </button>
              {showLangMenu && (
                <div className="landing-lang-menu">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`landing-lang-option ${language === lang.code ? 'active' : ''}`}
                      onClick={() => handleLanguageChange(lang.code)}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="landing-content">
        <div className="landing-hero">
          <h1 className="landing-title">{t('landing.title')}</h1>
          <p className="landing-subtitle">{t('landing.subtitle')}</p>
          <p className="landing-description">{t('landing.description')}</p>
          <button className="landing-button" onClick={onEnterShop}>
            <span>{t('landing.button')}</span>
            <span className="button-arrow">→</span>
          </button>
        </div>
        <div className="landing-features">
          <div className="feature-card" style={{ animationDelay: '0.1s' }}>
            <div className="feature-icon">🛒</div>
            <h3>{t('landing.feature1.title')}</h3>
            <p>{t('landing.feature1.description')}</p>
          </div>
          <div className="feature-card" style={{ animationDelay: '0.2s' }}>
            <div className="feature-icon">💰</div>
            <h3>{t('landing.feature2.title')}</h3>
            <p>{t('landing.feature2.description')}</p>
          </div>
          <div className="feature-card" style={{ animationDelay: '0.3s' }}>
            <div className="feature-icon">🚀</div>
            <h3>{t('landing.feature3.title')}</h3>
            <p>{t('landing.feature3.description')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

