import { useEffect, useState } from 'react';
import { readCookieConsent } from '../utils/cookieConsent';

const ADSENSE_SCRIPT_ID = 'agnes-adsense-script';
const adsenseClient = import.meta.env.VITE_ADSENSE_CLIENT as string | undefined;

export function AdsenseScript() {
  const [allowed, setAllowed] = useState(() => readCookieConsent() === 'accepted');

  useEffect(() => {
    const onStorage = () => setAllowed(readCookieConsent() === 'accepted');
    window.addEventListener('storage', onStorage);
    window.addEventListener('agnes:cookie-settings', onStorage);
    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('agnes:cookie-settings', onStorage);
    };
  }, []);

  useEffect(() => {
    if (!allowed || !adsenseClient || document.getElementById(ADSENSE_SCRIPT_ID)) return;

    const script = document.createElement('script');
    script.id = ADSENSE_SCRIPT_ID;
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(adsenseClient)}`;
    document.head.appendChild(script);
  }, [allowed]);

  return null;
}
