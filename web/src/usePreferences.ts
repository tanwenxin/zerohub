import { useContext } from 'react';
import { PreferencesContext, type PreferencesContextValue } from './preferencesContext';

export function usePreferences(): PreferencesContextValue {
  const value = useContext(PreferencesContext);
  if (!value) {
    throw new Error('usePreferences must be used within PreferencesProvider');
  }
  return value;
}

