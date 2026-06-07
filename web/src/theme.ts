import type { Language } from './i18n';

export type ThemeId = 'auto' | 'default' | 'light' | 'dark';
export type ResolvedThemeId = Exclude<ThemeId, 'auto'>;

export const THEMES: ThemeId[] = ['auto', 'default', 'light', 'dark'];
export const LANGUAGES: Language[] = ['zh', 'en'];

export const PREFERENCE_STORAGE_KEYS = {
  theme: 'agnes:theme',
  language: 'agnes:language',
} as const;

export function normalizeTheme(value: unknown): ThemeId {
  return THEMES.includes(value as ThemeId) ? (value as ThemeId) : 'default';
}

export function normalizeLanguage(value: unknown): Language {
  return LANGUAGES.includes(value as Language) ? (value as Language) : 'zh';
}

export function resolveTheme(theme: ThemeId, prefersDark: boolean): ResolvedThemeId {
  if (theme === 'auto') return prefersDark ? 'dark' : 'light';
  return theme;
}

export function themeColor(theme: ResolvedThemeId): string {
  if (theme === 'light') return '#f8fafc';
  if (theme === 'dark') return '#070a12';
  return '#0f1115';
}
