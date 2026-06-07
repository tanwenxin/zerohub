import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { translate, type Language } from './i18n';
import {
  PREFERENCE_STORAGE_KEYS,
  normalizeLanguage,
  normalizeTheme,
  resolveTheme,
  themeColor,
  type ThemeId,
} from './theme';
import { PreferencesContext, type PreferencesContextValue } from './preferencesContext';

function readStoredTheme(): ThemeId {
  try {
    return normalizeTheme(localStorage.getItem(PREFERENCE_STORAGE_KEYS.theme));
  } catch {
    return 'default';
  }
}

function readStoredLanguage(): Language {
  try {
    return normalizeLanguage(localStorage.getItem(PREFERENCE_STORAGE_KEYS.language));
  } catch {
    return 'zh';
  }
}

function upsertThemeColor(color: string): void {
  let meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = 'theme-color';
    document.head.appendChild(meta);
  }
  meta.content = color;
}

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeId>(() => readStoredTheme());
  const [language, setLanguage] = useState<Language>(() => readStoredLanguage());
  const [prefersDark, setPrefersDark] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (event: MediaQueryListEvent) => setPrefersDark(event.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const resolvedTheme = resolveTheme(theme, prefersDark);
    document.documentElement.dataset.theme = resolvedTheme;
    document.documentElement.dataset.themePreference = theme;
    document.documentElement.style.colorScheme = resolvedTheme === 'light' ? 'light' : 'dark';
    upsertThemeColor(themeColor(resolvedTheme));
    try {
      localStorage.setItem(PREFERENCE_STORAGE_KEYS.theme, theme);
    } catch {
      /* ignore storage failures */
    }
  }, [prefersDark, theme]);

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    try {
      localStorage.setItem(PREFERENCE_STORAGE_KEYS.language, language);
    } catch {
      /* ignore storage failures */
    }
  }, [language]);

  const value = useMemo<PreferencesContextValue>(
    () => ({
      language,
      setLanguage,
      theme,
      setTheme,
      t: (key, params) => translate(language, key, params),
    }),
    [language, theme]
  );

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}
