import { Link } from 'react-router-dom';
import { usePreferences } from '../usePreferences';

interface SiteFooterProps {
  wide?: boolean;
}

export function SiteFooter({ wide = false }: SiteFooterProps) {
  const { t } = usePreferences();

  return (
    <footer className={`site-footer ${wide ? 'wide' : ''}`}>
      <div className="site-footer-brand">
        <strong>{t('app.brand')}</strong>
        <span>{t('footer.disclosure')}</span>
      </div>
      <nav className="site-footer-links" aria-label={t('footer.legalNav')}>
        <Link to="/privacy">{t('nav.privacy')}</Link>
        <Link to="/terms">{t('nav.terms')}</Link>
        <Link to="/contact">{t('nav.contact')}</Link>
      </nav>
    </footer>
  );
}
