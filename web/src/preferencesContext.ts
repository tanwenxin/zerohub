import { createContext } from 'react';
import type { Language, TranslationKey } from './i18n';
import type { ThemeId } from './theme';

export interface PreferencesContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
  t: (key: TranslationKey, params?: Record<string, string | number>) => string;
}

export const PreferencesContext = createContext<PreferencesContextValue | null>(null);

