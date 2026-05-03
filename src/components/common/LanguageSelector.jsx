import { useState } from 'react';
import { useI18n } from '../../hooks/useI18n';
import './LanguageSelector.css';

export const LanguageSelector = () => {
  const { currentLang, langData, setLanguage } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="lang-selector">
      <button
        className="lang-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="lang-flag">{langData[currentLang].flag}</span>
        <span>{langData[currentLang].name}</span>
        <svg
          className={`lang-chevron ${isOpen ? 'open' : ''}`}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <div className="lang-dropdown">
          {Object.entries(langData).map(([code, data]) => (
            <div
              key={code}
              className={`lang-option ${currentLang === code ? 'selected' : ''}`}
              onClick={() => handleSelect(code)}
            >
              <span className="lang-flag">{data.flag}</span>
              <span>{data.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
