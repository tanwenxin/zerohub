import type { PromptTemplate } from '../data/promptTemplates.generated';

type ImageFormat = 'avif' | 'webp';
type OptimizedImageVariants = Partial<Record<ImageFormat, Record<string, string | null | undefined>>>;
type PromptTemplateWithOptimized = PromptTemplate & {
  imageOptimized?: OptimizedImageVariants;
};

export interface PromptTemplateImageSources {
  fallbackSrc: string | null;
  fallbackSrcSet: string | undefined;
  avifSrcSet: string | undefined;
  webpSrcSet: string | undefined;
  sizes: string;
}

const DEFAULT_LIST_SIZES =
  '(max-width: 720px) calc(100vw - 32px), (max-width: 1100px) calc((100vw - 80px) / 2), 360px';
const DEFAULT_DETAIL_SIZES =
  '(max-width: 760px) calc(100vw - 32px), (max-width: 1200px) 360px, 420px';

function srcSetFor(template: PromptTemplate, format: ImageFormat): string | undefined {
  const variants = (template as PromptTemplateWithOptimized).imageOptimized?.[format];
  if (!variants) return undefined;
  const entries = Object.entries(variants)
    .map(([width, src]) => ({ width: Number.parseInt(width, 10), src }))
    .filter((entry): entry is { width: number; src: string } => (
      Number.isFinite(entry.width) && entry.width > 0 && typeof entry.src === 'string' && entry.src.length > 0
    ))
    .sort((a, b) => a.width - b.width);
  if (!entries.length) return undefined;
  return entries.map((entry) => `${entry.src} ${entry.width}w`).join(', ');
}

function smallestOptimizedSrc(template: PromptTemplate): string | null {
  const optimized = (template as PromptTemplateWithOptimized).imageOptimized;
  const webp = optimized?.webp;
  const avif = optimized?.avif;
  const variants = webp || avif;
  if (!variants) return null;
  const entries = Object.entries(variants)
    .map(([width, src]) => ({ width: Number.parseInt(width, 10), src }))
    .filter((entry): entry is { width: number; src: string } => (
      Number.isFinite(entry.width) && entry.width > 0 && typeof entry.src === 'string' && entry.src.length > 0
    ))
    .sort((a, b) => a.width - b.width);
  return entries[0]?.src || null;
}

export function promptTemplateImageSources(
  template: PromptTemplate,
  mode: 'list' | 'detail' = 'list'
): PromptTemplateImageSources {
  const webpSrcSet = srcSetFor(template, 'webp');
  const avifSrcSet = srcSetFor(template, 'avif');
  const fallbackSrc = smallestOptimizedSrc(template) || template.imageUrl || null;
  return {
    fallbackSrc,
    fallbackSrcSet: webpSrcSet,
    avifSrcSet,
    webpSrcSet,
    sizes: mode === 'detail' ? DEFAULT_DETAIL_SIZES : DEFAULT_LIST_SIZES,
  };
}
