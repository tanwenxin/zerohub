import type { RouteRecord } from 'vite-react-ssg';
import { RootLayout } from './RootLayout';
import { HomePage } from './pages/HomePage';
import { ImageGenerate } from './pages/ImageGenerate';
import { VideoGenerate } from './pages/VideoGenerate';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { GuidesPage } from './pages/GuidesPage';
import { GuideArticlePage } from './pages/GuideArticlePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { DesignSystemPage } from './pages/DesignSystemPage';
import { SeoLandingPage } from './pages/SeoLandingPage';
import { SEO_LANDING_PAGES } from './seoLandingPages';

// 设计系统预览仅在开发环境注册，不进入生产构建路由。
const devRoutes: RouteRecord[] = import.meta.env.DEV
  ? [{ path: 'design-system', element: <DesignSystemPage /> }]
  : [];

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'image', element: <ImageGenerate /> },
      { path: 'video', element: <VideoGenerate /> },
      { path: 'guides', element: <GuidesPage /> },
      { path: 'guides/prompt', element: <GuideArticlePage guide="prompt" /> },
      { path: 'guides/commercial-use', element: <GuideArticlePage guide="commercial-use" /> },
      { path: 'guides/safety', element: <GuideArticlePage guide="safety" /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'privacy', element: <PrivacyPage /> },
      { path: 'terms', element: <TermsPage /> },
      { path: 'contact', element: <ContactPage /> },
      ...SEO_LANDING_PAGES.map((page) => ({
        path: page.slug,
        element: <SeoLandingPage />,
      })),
      ...devRoutes,
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];
