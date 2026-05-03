import { Button } from '../common/Button';
import { useI18n } from '../../hooks/useI18n';
import './Hero.css';

export const Hero = () => {
  const { t } = useI18n();

  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-image"></div>
      <div className="hero-content">
        <span className="hero-label">{t('hero.label')}</span>
        <h1 className="hero-title">{t('hero.title')}</h1>
        <p className="hero-subtitle">{t('hero.subtitle')}</p>
        <div className="hero-actions">
          <Button variant="primary">{t('btn.browse')}</Button>
          <Button variant="secondary">{t('btn.learnMore')}</Button>
        </div>
      </div>
    </section>
  );
};
