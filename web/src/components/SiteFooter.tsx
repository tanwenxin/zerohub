import { Link } from 'react-router-dom';
import { usePreferences } from '../usePreferences';
import { openCookieSettings } from '../utils/cookieConsent';
import { SEO_LANDING_ROUTES } from '../seoLandingRoutes';

interface SiteFooterProps {
  wide?: boolean;
}

export function SiteFooter({ wide = false }: SiteFooterProps) {
  const { language, t } = usePreferences();
  const featuredSeoPages = SEO_LANDING_ROUTES.slice(0, 6);

  return (
    <footer className={`site-footer ${wide ? 'wide' : ''}`}>
      <div className="site-footer-brand">
        <strong>{t('app.brand')}</strong>
        <span>{t('footer.disclosure')}</span>
      </div>
      <nav className="site-footer-links" aria-label={t('footer.legalNav')}>
        <Link to="/guides">{t('nav.guides')}</Link>
        <Link to="/about">{t('nav.about')}</Link>
        <Link to="/privacy">{t('nav.privacy')}</Link>
        <Link to="/terms">{t('nav.terms')}</Link>
        <Link to="/contact">{t('nav.contact')}</Link>
        <button type="button" onClick={openCookieSettings}>{t('nav.cookies')}</button>
      </nav>
      <nav className="site-footer-seo" aria-label={language === 'zh' ? '生成工具入口' : 'Generation tool pages'}>
        {featuredSeoPages.map((page) => (
          <Link key={page.path} to={page.path}>
            {page.label[language]}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
