import { Language } from '@/types';
import ptTranslations from './locales/pt.json';
import enTranslations from './locales/en.json';
import esTranslations from './locales/es.json';

export const translations: Record<Language, typeof ptTranslations> = {
  pt: ptTranslations,
  en: enTranslations,
  es: esTranslations,
};

export const formatPrice = (value: number, lang: Language): string => {
  const locale = lang === 'pt' ? 'pt-BR' : lang === 'es' ? 'es-ES' : 'en-US';
  
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'USD',
  }).format(value);
};

export const getTranslation = (lang: Language, key: string): string => {
  const keys = key.split('.');
  let value: any = translations[lang];
  
  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) {
      return key;
    }
  }
  
  return typeof value === 'string' ? value : key;
};

