import { useEffect, useMemo, useState } from 'react';
import { usePreferences } from '../usePreferences';
import {
  COOKIE_SETTINGS_EVENT,
  readCookieConsent,
} from '../utils/cookieConsent';

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

const adsenseClient = (import.meta.env.VITE_ADSENSE_CLIENT as string | undefined)?.trim();
const historyAdSlot = (import.meta.env.VITE_ADSENSE_HISTORY_SLOT as string | undefined)?.trim();
const mockAdsEnabled = import.meta.env.VITE_ADSENSE_MOCK === '1';

interface HistoryAdSlotProps {
  category: 'image' | 'video';
}

export function HistoryAdSlot({ category }: HistoryAdSlotProps) {
  const { t } = usePreferences();
  const [allowed, setAllowed] = useState(() => readCookieConsent() === 'accepted');
  const enabled = Boolean(adsenseClient && historyAdSlot && allowed);
  const key = useMemo(() => `${category}-${historyAdSlot || 'mock'}`, [category]);

  useEffect(() => {
    const sync = () => setAllowed(readCookieConsent() === 'accepted');
    window.addEventListener('storage', sync);
    window.addEventListener(COOKIE_SETTINGS_EVENT, sync);
    return () => {
      window.removeEventListener('storage', sync);
      window.removeEventListener(COOKIE_SETTINGS_EVENT, sync);
    };
  }, []);

  useEffect(() => {
    if (!enabled || mockAdsEnabled) return;
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({});
  }, [enabled, key]);

  if (mockAdsEnabled) {
    return (
      <section className="history-ad-slot history-ad-slot-mock" aria-label={t('ads.historyLabel')}>
        <span className="history-ad-label">{t('ads.sponsored')}</span>
        <div className="history-ad-mock-card">
          <div className="history-ad-mock-copy">
            <span className="history-ad-mock-kicker">{t('ads.mockKicker')}</span>
            <strong>{t(category === 'image' ? 'ads.mockImageTitle' : 'ads.mockVideoTitle')}</strong>
            <p>{t('ads.mockBody')}</p>
          </div>
          <span className="history-ad-mock-cta">{t('ads.mockCta')}</span>
        </div>
      </section>
    );
  }

  if (!adsenseClient || !historyAdSlot) return null;

  if (!enabled) {
    return (
      <section
        className="history-ad-slot history-ad-slot-reserved"
        aria-hidden="true"
      />
    );
  }

  return (
    <section className="history-ad-slot" aria-label={t('ads.historyLabel')}>
      <span className="history-ad-label">{t('ads.sponsored')}</span>
      <ins
        key={key}
        className="adsbygoogle history-ad-unit"
        data-ad-client={adsenseClient}
        data-ad-slot={historyAdSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </section>
  );
}
