import { Link } from 'react-router-dom';
import { useI18n } from '../../hooks/useI18n';
import { LanguageSelector } from './LanguageSelector';
import './Navigation.css';

export const Navigation = () => {
  const { t } = useI18n();

  const navLinks = [
    { key: 'storage', href: '#storage' },
    { key: 'sleep', href: '#sleep' },
    { key: 'dining', href: '#dining' },
    { key: 'work', href: '#work' },
    { key: 'living', href: '#living' },
  ];

  return (
    <nav className="nav">
      <div className="nav-logo">{t('brand.logo')}</div>

      <div className="nav-links">
        {navLinks.map(link => (
          <Link key={link.key} className="nav-link" to={link.href}>
            {t(`nav.${link.key}`)}
          </Link>
        ))}
      </div>

      <div className="nav-actions">
        <LanguageSelector />

        <button className="nav-icon" aria-label="Search">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
        </button>

        <button className="nav-icon" aria-label="Favorites">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>

        <button className="nav-icon nav-cart" aria-label="Cart">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
        </button>
      </div>
    </nav>
  );
};
