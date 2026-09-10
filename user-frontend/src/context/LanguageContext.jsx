import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS } from '../data/translations';
const LanguageContext = createContext();
export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('schemesaathi_lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('schemesaathi_lang', lang);
  }, [lang]);

  const changeLanguage = (newLang) => {
    if (['en', 'hi', 'kn'].includes(newLang)) {
      setLang(newLang);
    }
  };
  const t = (key) => {
    if (TRANSLATIONS[key] && TRANSLATIONS[key][lang]) {
      return TRANSLATIONS[key][lang];
    }
    return TRANSLATIONS[key]?.en || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);