import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import './WelcomeBanner.css';

const WelcomeBanner: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="welcome-banner">
      <div className="banner-content">
        <h2 className="banner-title">{t('banner.welcome')}</h2>
        <p className="banner-subtitle">{t('banner.subtitle')}</p>
      </div>
    </div>
  );
};

export default WelcomeBanner;

