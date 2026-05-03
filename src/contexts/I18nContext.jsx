import { createContext, useContext, useState, useEffect } from 'react';
import { translations, langData } from '../i18n/translations';

const I18nContext = createContext();

export const I18nProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('qiju-lang') || 'zh';
  });

  const t = (key) => {
    return translations[currentLang]?.[key] || key;
  };

  const setLanguage = (lang) => {
    if (!translations[lang]) return;
    setCurrentLang(lang);
    localStorage.setItem('qiju-lang', lang);

    // Update html lang attribute
    document.documentElement.lang = langData[lang].htmlLang;
    document.body.lang = langData[lang].htmlLang;
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('qiju-lang') || 'zh';
    document.documentElement.lang = langData[savedLang].htmlLang;
    document.body.lang = langData[savedLang].htmlLang;
  }, []);

  const value = {
    currentLang,
    langData,
    t,
    setLanguage,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
};
