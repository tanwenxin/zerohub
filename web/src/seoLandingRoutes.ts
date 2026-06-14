import type { Language } from './i18n';

export type SeoLandingSlug =
  | 'ai-image-generator'
  | 'text-to-image'
  | 'image-to-image'
  | 'multi-image-composition'
  | 'ai-video-generator'
  | 'image-to-video'
  | 'keyframe-animation'
  | 'prompt-optimizer'
  | 'image-to-prompt';

export interface SeoLandingRoute {
  slug: SeoLandingSlug;
  path: string;
  label: Record<Language, string>;
}

export const SEO_LANDING_ROUTES: SeoLandingRoute[] = [
  { slug: 'ai-image-generator', path: '/ai-image-generator', label: { zh: 'AI IMAGE GENERATOR', en: 'AI IMAGE GENERATOR' } },
  { slug: 'text-to-image', path: '/text-to-image', label: { zh: 'TEXT TO IMAGE', en: 'TEXT TO IMAGE' } },
  { slug: 'image-to-image', path: '/image-to-image', label: { zh: 'IMAGE TO IMAGE', en: 'IMAGE TO IMAGE' } },
  {
    slug: 'multi-image-composition',
    path: '/multi-image-composition',
    label: { zh: 'MULTI IMAGE', en: 'MULTI IMAGE' },
  },
  { slug: 'ai-video-generator', path: '/ai-video-generator', label: { zh: 'AI VIDEO GENERATOR', en: 'AI VIDEO GENERATOR' } },
  { slug: 'image-to-video', path: '/image-to-video', label: { zh: 'IMAGE TO VIDEO', en: 'IMAGE TO VIDEO' } },
  {
    slug: 'keyframe-animation',
    path: '/keyframe-animation',
    label: { zh: 'KEYFRAME ANIMATION', en: 'KEYFRAME ANIMATION' },
  },
  { slug: 'prompt-optimizer', path: '/prompt-optimizer', label: { zh: 'PROMPT OPTIMIZER', en: 'PROMPT OPTIMIZER' } },
  { slug: 'image-to-prompt', path: '/image-to-prompt', label: { zh: 'IMAGE TO PROMPT', en: 'IMAGE TO PROMPT' } },
];

export function getSeoLandingRouteByPath(pathname: string): SeoLandingRoute | undefined {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  return SEO_LANDING_ROUTES.find((page) => page.path === normalized);
}
