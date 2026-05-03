import { useI18n } from '../../hooks/useI18n';
import './Footer.css';

export const Footer = () => {
  const { t } = useI18n();

  const footerLinks = {
    products: ['newArrivals', 'bestsellers', 'sale', 'giftCard'],
    help: ['shipping', 'returns', 'installation', 'faq'],
    about: ['story', 'philosophy', 'sustainability', 'careers'],
    contact: ['support', 'showroom', 'b2b', 'partnership'],
  };

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand-col">
          <div className="footer-brand">{t('brand.footer')}</div>
          <p
            className="footer-desc"
            dangerouslySetInnerHTML={{ __html: t('brand.desc') }}
          />
        </div>

        <div className="footer-column">
          <h4>{t('footer.products')}</h4>
          {footerLinks.products.map(key => (
            <a key={key} href="#">{t(`footer.${key}`)}</a>
          ))}
        </div>

        <div className="footer-column">
          <h4>{t('footer.help')}</h4>
          {footerLinks.help.map(key => (
            <a key={key} href="#">{t(`footer.${key}`)}</a>
          ))}
        </div>

        <div className="footer-column">
          <h4>{t('footer.about')}</h4>
          {footerLinks.about.map(key => (
            <a key={key} href="#">{t(`footer.${key}`)}</a>
          ))}
        </div>

        <div className="footer-column">
          <h4>{t('footer.contact')}</h4>
          {footerLinks.contact.map(key => (
            <a key={key} href="#">{t(`footer.${key}`)}</a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span>{t('footer.copyright')}</span>
        <span>{t('footer.legal')}</span>
      </div>
    </footer>
  );
};
