export type CookieConsentValue = 'accepted' | 'rejected';

export const COOKIE_CONSENT_STORAGE_KEY = 'agnes:cookie-consent:v1';
export const COOKIE_SETTINGS_EVENT = 'agnes:cookie-settings';

export function readCookieConsent(): CookieConsentValue | null {
  if (typeof window === 'undefined') return null;
  try {
    const value = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    return value === 'accepted' || value === 'rejected' ? value : null;
  } catch {
    return null;
  }
}

export function saveCookieConsent(value: CookieConsentValue): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, value);
    window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT));
  } catch {
    /* ignore storage failures */
  }
}

export function openCookieSettings(): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT));
}
