import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from '@/data/translations';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: Record<string, string>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState('ro');
  const t = translations[language] || translations.ro;
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
