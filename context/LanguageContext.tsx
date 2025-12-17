import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Translations } from '../i18n';
import { translations } from '../i18n';

type LanguageCode = 'EN' | 'FR' | 'ES' | 'PT' | 'RU' | 'AR' | 'CN';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string) => string;
  tRaw: (key: string) => unknown;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

// Map URL lang param to LanguageCode
const langParamMap: Record<string, LanguageCode> = {
  en: 'EN',
  fr: 'FR',
  es: 'ES',
  pt: 'PT',
  ru: 'RU',
  ar: 'AR',
  cn: 'CN',
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    // Priority: URL param > localStorage > default
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const langParam = urlParams.get('lang')?.toLowerCase();
      if (langParam && langParamMap[langParam]) {
        return langParamMap[langParam];
      }
    }
    const saved = localStorage.getItem('language') as LanguageCode;
    return saved || 'EN';
  });

  const isRTL = language === 'AR';

  // Page titles for each language
  const pageTitles: Record<LanguageCode, string> = {
    EN: 'Olympians United 2026 | Pernilla Wiberg, Olumide Oyedeji & Thomas Tang for WOA',
    FR: 'Olympiens Unis 2026 | Pernilla Wiberg, Olumide Oyedeji & Thomas Tang pour la WOA',
    ES: 'Olímpicos Unidos 2026 | Pernilla Wiberg, Olumide Oyedeji & Thomas Tang para la WOA',
    PT: 'Olimpianos Unidos 2026 | Pernilla Wiberg, Olumide Oyedeji & Thomas Tang para a WOA',
    RU: 'Олимпийцы Объединённые 2026 | Pernilla Wiberg, Olumide Oyedeji & Thomas Tang для WOA',
    AR: 'الأولمبيون المتحدون 2026 | Pernilla Wiberg, Olumide Oyedeji & Thomas Tang لـ WOA',
    CN: '奥林匹克联盟 2026 | Pernilla Wiberg, Olumide Oyedeji & Thomas Tang for WOA',
  };

  useEffect(() => {
    localStorage.setItem('language', language);
    // Update document direction for RTL languages
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language.toLowerCase();
    // Update page title for current language
    document.title = pageTitles[language] || pageTitles.EN;
  }, [language, isRTL]);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
  };

  // Raw translation function that returns any type (including arrays)
  const tRaw = (key: string): unknown => {
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
            return undefined; // Return undefined if not found
          }
        }
        break;
      }
    }

    return value;
  };

  // String-only translation function with dot notation support
  const t = (key: string): string => {
    const value = tRaw(key);
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tRaw, isRTL }}>
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
  const { t, tRaw, language, isRTL } = useLanguage();
  return { t, tRaw, language, isRTL };
};
