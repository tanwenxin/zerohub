import type { TranslationKey } from '../i18n';

export const DEFAULT_GENERATION_SIZE = '1024x768';

export const GENERATION_SIZE_OPTIONS: {
  value: string;
  label: string;
  descKey: TranslationKey;
}[] = [
  { value: '1024x768', label: '1024×768', descKey: 'size.generalLandscape' },
  { value: '1024x1024', label: '1024×1024', descKey: 'size.squareImage' },
  { value: '1792x1024', label: '1792×1024', descKey: 'size.wideLandscape' },
  { value: '1024x1792', label: '1024×1792', descKey: 'size.mobilePortrait' },
  { value: '1536x1024', label: '1536×1024', descKey: 'size.photoLandscape' },
  { value: '1024x1536', label: '1024×1536', descKey: 'size.photoPortrait' },
  { value: '2560x1440', label: '2560×1440', descKey: 'size.2k' },
];

const GENERATION_SIZE_VALUES = new Set(GENERATION_SIZE_OPTIONS.map((item) => item.value));

export function isGenerationSizeValue(value: string | null): value is string {
  return Boolean(value && GENERATION_SIZE_VALUES.has(value));
}
