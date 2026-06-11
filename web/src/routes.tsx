import type { RouteRecord } from 'vite-react-ssg';
import { RootLayout } from './RootLayout';
import { HomePage } from './pages/HomePage';
import { ImageGenerate } from './pages/ImageGenerate';
import { VideoGenerate } from './pages/VideoGenerate';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'image', element: <ImageGenerate /> },
      { path: 'video', element: <VideoGenerate /> },
      { path: 'privacy', element: <PrivacyPage /> },
      { path: 'terms', element: <TermsPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];
