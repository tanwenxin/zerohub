import type { RouteRecord } from 'vite-react-ssg';
import { RootLayout } from './RootLayout';
import { HomePage } from './pages/HomePage';
import { SEO_LANDING_ROUTES } from './seoLandingRoutes';

// 设计系统预览仅在开发环境注册，不进入生产构建路由。
const devRoutes: RouteRecord[] = import.meta.env.DEV
  ? [
      {
        path: 'design-system',
        lazy: async () => ({
          Component: (await import('./pages/DesignSystemPage')).DesignSystemPage,
        }),
      },
    ]
  : [];

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'image',
        lazy: async () => ({ Component: (await import('./pages/ImageGenerate')).ImageGenerate }),
      },
      {
        path: 'video',
        lazy: async () => ({ Component: (await import('./pages/VideoGenerate')).VideoGenerate }),
      },
      {
        path: 'guides',
        lazy: async () => ({ Component: (await import('./pages/GuidesPage')).GuidesPage }),
      },
      {
        path: 'guides/prompt',
        lazy: async () => {
          const { GuideArticlePage } = await import('./pages/GuideArticlePage');
          return { Component: () => <GuideArticlePage guide="prompt" /> };
        },
      },
      {
        path: 'guides/commercial-use',
        lazy: async () => {
          const { GuideArticlePage } = await import('./pages/GuideArticlePage');
          return { Component: () => <GuideArticlePage guide="commercial-use" /> };
        },
      },
      {
        path: 'guides/safety',
        lazy: async () => {
          const { GuideArticlePage } = await import('./pages/GuideArticlePage');
          return { Component: () => <GuideArticlePage guide="safety" /> };
        },
      },
      {
        path: 'about',
        lazy: async () => ({ Component: (await import('./pages/AboutPage')).AboutPage }),
      },
      {
        path: 'privacy',
        lazy: async () => ({ Component: (await import('./pages/PrivacyPage')).PrivacyPage }),
      },
      {
        path: 'terms',
        lazy: async () => ({ Component: (await import('./pages/TermsPage')).TermsPage }),
      },
      {
        path: 'contact',
        lazy: async () => ({ Component: (await import('./pages/ContactPage')).ContactPage }),
      },
      ...SEO_LANDING_ROUTES.map((page) => ({
        path: page.slug,
        lazy: async () => ({ Component: (await import('./pages/SeoLandingPage')).SeoLandingPage }),
      })),
      ...devRoutes,
      {
        path: '*',
        lazy: async () => ({ Component: (await import('./pages/NotFoundPage')).NotFoundPage }),
      },
    ],
  },
];
