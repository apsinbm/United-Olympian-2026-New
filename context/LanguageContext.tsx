import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Translations } from '../i18n';
import { translations } from '../i18n';

type LanguageCode = 'EN' | 'FR' | 'ES' | 'PT' | 'RU' | 'AR' | 'CN';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    const saved = localStorage.getItem('language') as LanguageCode;
    return saved || 'EN';
  });

  const isRTL = language === 'AR';

  useEffect(() => {
    localStorage.setItem('language', language);
    // Update document direction for RTL languages
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language.toLowerCase();
  }, [language, isRTL]);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
  };

  // Translation function with dot notation support
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations[language] || translations.EN;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        // Fallback to English
        value = translations.EN;
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = (value as Record<string, unknown>)[fallbackKey];
          } else {
            return key; // Return key if not found
          }
        }
        break;
      }
    }

    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const useTranslation = () => {
  const { t, language, isRTL } = useLanguage();
  return { t, language, isRTL };
};
