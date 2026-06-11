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
        <a href="/privacy">{t('nav.privacy')}</a>
        <a href="/terms">{t('nav.terms')}</a>
        <a href="/contact">{t('nav.contact')}</a>
      </nav>
    </footer>
  );
}
