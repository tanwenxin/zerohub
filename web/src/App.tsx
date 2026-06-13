import { useEffect, useMemo, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { getHealth, type Health } from './api/client';
import { initializeBackgroundNotifications } from './utils/notify';
import { usePreferences } from './usePreferences';
import { useTaskQueue } from './useTaskQueue';
import { TasksDrawer } from './components/TasksDrawer';
import { SiteFooter } from './components/SiteFooter';
import { CookieConsentBanner } from './components/CookieConsentBanner';
import { AdsenseScript } from './components/AdsenseScript';
import type { TranslationKey } from './i18n';
import { getSeoLandingPageByPath } from './seoLandingPages';

type RouteKey = 'home' | 'image' | 'video' | 'guides' | 'about' | 'privacy' | 'terms' | 'contact' | 'notFound';

const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://agnes-image-studio.xyz').replace(/\/+$/, '');

const NAV_ITEMS: { path: string; labelKey: TranslationKey; route: RouteKey }[] = [
  { path: '/', labelKey: 'nav.home', route: 'home' },
  { path: '/image', labelKey: 'nav.image', route: 'image' },
  { path: '/video', labelKey: 'nav.video', route: 'video' },
];

function normalizePath(pathname: string): string {
  return pathname.replace(/\/+$/, '') || '/';
}

function routeFromPath(pathname: string): RouteKey {
  switch (normalizePath(pathname)) {
    case '/':
      return 'home';
    case '/image':
      return 'image';
    case '/video':
      return 'video';
    case '/guides':
    case '/guides/prompt':
    case '/guides/commercial-use':
    case '/guides/safety':
      return 'guides';
    case '/about':
      return 'about';
    case '/privacy':
      return 'privacy';
    case '/terms':
      return 'terms';
    case '/contact':
      return 'contact';
    default:
      return 'notFound';
  }
}

export default function App() {
  const { language, setLanguage, t } = usePreferences();
  const { activeCount, maxActive } = useTaskQueue();
  const location = useLocation();
  const route = routeFromPath(location.pathname);
  const seoLandingPage = getSeoLandingPageByPath(location.pathname);
  const [health, setHealth] = useState<Health | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const meta = useMemo(() => {
    if (seoLandingPage) {
      const content = seoLandingPage.content[language];
      return {
        title: content.title,
        description: content.description,
        keywords: seoLandingPage.keywords.join(', '),
        robots: 'index,follow',
      };
    }

    const byRoute: Record<RouteKey, { titleKey: TranslationKey; descriptionKey: TranslationKey }> = {
      home: { titleKey: 'meta.home.title', descriptionKey: 'meta.home.description' },
      image: { titleKey: 'meta.image.title', descriptionKey: 'meta.image.description' },
      video: { titleKey: 'meta.video.title', descriptionKey: 'meta.video.description' },
      guides: { titleKey: 'meta.guides.title', descriptionKey: 'meta.guides.description' },
      about: { titleKey: 'meta.about.title', descriptionKey: 'meta.about.description' },
      privacy: { titleKey: 'meta.privacy.title', descriptionKey: 'meta.privacy.description' },
      terms: { titleKey: 'meta.terms.title', descriptionKey: 'meta.terms.description' },
      contact: { titleKey: 'meta.contact.title', descriptionKey: 'meta.contact.description' },
      notFound: { titleKey: 'meta.notFound.title', descriptionKey: 'meta.notFound.description' },
    };
    const selected = byRoute[route];
    return {
      title: t(selected.titleKey),
      description: t(selected.descriptionKey),
      keywords: '',
      robots: route === 'notFound' ? 'noindex,follow' : 'index,follow',
    };
  }, [language, route, seoLandingPage, t]);

  const canonicalPath = seoLandingPage ? seoLandingPage.path : normalizePath(location.pathname);
  const canonicalUrl = `${SITE_URL}${canonicalPath === '/' ? '/' : canonicalPath}`;
  const structuredData = useMemo(() => {
    if (seoLandingPage) {
      const content = seoLandingPage.content[language];
      return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: content.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      };
    }

    return {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: t('app.brand'),
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Web',
      url: canonicalUrl,
      description: meta.description,
    };
  }, [canonicalUrl, language, meta.description, seoLandingPage, t]);

  useEffect(() => {
    const load = () => getHealth().then(setHealth).catch(() => setHealth(null));
    load();
    // 周期刷新，反映队列运行状态变化
    const id = window.setInterval(load, 5000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    void initializeBackgroundNotifications();
  }, []);

  const apiReady = Boolean(health?.apiKeyConfigured);
  const healthLabel = health
    ? apiReady
      ? t('health.ready')
      : t('health.noApiKey')
    : t('health.backendOffline');

  return (
    <div className="app app-shell">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {meta.keywords ? <meta name="keywords" content={meta.keywords} /> : null}
        <meta name="robots" content={meta.robots} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content={seoLandingPage ? 'article' : 'website'} />
        <meta property="og:site_name" content={t('app.brand')} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Head>
      <header className="topbar">
        <div className="ui-container topbar-inner">
          <Link className="brand" to="/" aria-label={t('app.brand')}>
            <span className="brand-mark" aria-hidden="true" />
            <span className="brand-lockup">
              <span className="brand-name">Agnes</span>
              <span className="brand-tagline">Frame Studio</span>
            </span>
          </Link>

          <nav className="nav" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) => (isActive ? 'is-active' : '')}
              >
                {t(item.labelKey)}
              </NavLink>
            ))}
          </nav>

          <div className="utility">
            <button
              type="button"
              className="nav-action"
              onClick={() => setDrawerOpen(true)}
              aria-label={t('tasks.viewButton', { count: activeCount, max: maxActive })}
              title={t('tasks.viewButton', { count: activeCount, max: maxActive })}
            >
              {activeCount}/{maxActive}
            </button>
            <button
              type="button"
              className="nav-action"
              onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
              title={t('language.label')}
              aria-label={t('language.label')}
            >
              {language === 'zh' ? '中' : 'EN'}
            </button>
            <span
              className={`status-dot ${apiReady ? 'ok' : 'warn'}`}
              title={healthLabel}
              aria-label={healthLabel}
            />
          </div>
        </div>
      </header>

      <div className="marquee" aria-hidden="true">
        <span>AGNES FRAME STUDIO · CALIBRATE · DEVELOP · REUSE · </span>
        <span>AGNES FRAME STUDIO · CALIBRATE · DEVELOP · REUSE · </span>
        <span>AGNES FRAME STUDIO · CALIBRATE · DEVELOP · REUSE · </span>
      </div>

      <main>
        <Outlet />
      </main>

      <SiteFooter wide={route === 'image' || route === 'video'} />

      <TasksDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <CookieConsentBanner />
      <AdsenseScript />
    </div>
  );
}
