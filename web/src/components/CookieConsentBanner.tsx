import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePreferences } from '../usePreferences';
import {
  COOKIE_SETTINGS_EVENT,
  readCookieConsent,
  saveCookieConsent,
  type CookieConsentValue,
} from '../utils/cookieConsent';

export function CookieConsentBanner() {
  const { t } = usePreferences();
  const [visible, setVisible] = useState(() => readCookieConsent() === null);

  useEffect(() => {
    const onOpenSettings = () => setVisible(true);
    window.addEventListener(COOKIE_SETTINGS_EVENT, onOpenSettings);
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, onOpenSettings);
  }, []);

  function choose(value: CookieConsentValue) {
    saveCookieConsent(value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <section className="cookie-consent" aria-label={t('cookie.title')}>
      <div>
        <strong>{t('cookie.title')}</strong>
        <p>
          {t('cookie.body')}{' '}
          <Link to="/privacy">{t('nav.privacy')}</Link>
        </p>
      </div>
      <div className="cookie-consent-actions">
        <button type="button" className="btn-secondary" onClick={() => choose('rejected')}>
          {t('cookie.reject')}
        </button>
        <button type="button" className="btn-primary" onClick={() => choose('accepted')}>
          {t('cookie.accept')}
        </button>
      </div>
    </section>
  );
}
