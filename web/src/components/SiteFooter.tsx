import { usePreferences } from '../usePreferences';

export function SiteFooter() {
  const { t } = usePreferences();

  return (
    <footer className="site-footer">
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
