import { Suspense, lazy, useEffect, useMemo, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { getHealth, type Health } from './api/client';
import { initializeBackgroundNotifications } from './utils/notify';
import { usePreferences } from './usePreferences';
import { useTaskQueue } from './useTaskQueue';
import { SiteFooter } from './components/SiteFooter';
import type { TranslationKey } from './i18n';
import { getSeoLandingRouteByPath } from './seoLandingRoutes';

type RouteKey = 'home' | 'image' | 'video' | 'guides' | 'about' | 'privacy' | 'terms' | 'contact' | 'notFound';

const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://agnes-image-studio.xyz').replace(/\/+$/, '');
const HEALTH_BOOT_DELAY_MS = 12000;
const HEALTH_REFRESH_MS = 30000;
const NON_CRITICAL_BOOT_DELAY_MS = 6000;

const TasksDrawer = lazy(() =>
  import('./components/TasksDrawer').then((module) => ({ default: module.TasksDrawer }))
);
const CookieConsentBanner = lazy(() =>
  import('./components/CookieConsentBanner').then((module) => ({ default: module.CookieConsentBanner }))
);
const AdsenseScript = lazy(() =>
  import('./components/AdsenseScript').then((module) => ({ default: module.AdsenseScript }))
);

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
  const isSeoLandingRoute = Boolean(getSeoLandingRouteByPath(location.pathname));
  const [health, setHealth] = useState<Health | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [nonCriticalReady, setNonCriticalReady] = useState(false);

  const meta = useMemo(() => {
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
      robots: route === 'notFound' && !isSeoLandingRoute ? 'noindex,follow' : 'index,follow',
    };
  }, [isSeoLandingRoute, route, t]);

  const canonicalPath = normalizePath(location.pathname);
  const canonicalUrl = `${SITE_URL}${canonicalPath === '/' ? '/' : canonicalPath}`;
  const structuredData = useMemo(() => {
    if (isSeoLandingRoute) return null;
    return {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: t('app.brand'),
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Web',
      url: canonicalUrl,
      description: meta.description,
    };
  }, [canonicalUrl, isSeoLandingRoute, meta.description, t]);

  useEffect(() => {
    const load = () => getHealth().then(setHealth).catch(() => setHealth(null));
    const bootId = window.setTimeout(load, HEALTH_BOOT_DELAY_MS);
    // 状态灯不是首屏关键内容，延后并降低刷新频率，避免 /api/health 进入 LCP 关键链。
    const intervalId = window.setInterval(load, HEALTH_REFRESH_MS);
    return () => {
      window.clearTimeout(bootId);
      window.clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const run = () => {
      setNonCriticalReady(true);
      void initializeBackgroundNotifications();
    };
    let cleanupScheduled: (() => void) | null = null;
    const schedule = () => {
      if ('requestIdleCallback' in window) {
        const idleId = window.requestIdleCallback(run, { timeout: 2500 });
        cleanupScheduled = () => window.cancelIdleCallback(idleId);
        return;
      }
      const timerId = globalThis.setTimeout(run, 1200);
      cleanupScheduled = () => globalThis.clearTimeout(timerId);
    };
    const bootId = window.setTimeout(schedule, NON_CRITICAL_BOOT_DELAY_MS);
    return () => {
      window.clearTimeout(bootId);
      cleanupScheduled?.();
    };
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
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={t('app.brand')} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        {structuredData ? <script type="application/ld+json">{JSON.stringify(structuredData)}</script> : null}
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

      <Suspense fallback={null}>
        {drawerOpen ? <TasksDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} /> : null}
        {nonCriticalReady ? (
          <>
            <CookieConsentBanner />
            <AdsenseScript />
          </>
        ) : null}
      </Suspense>
    </div>
  );
}
