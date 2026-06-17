import { Suspense, lazy, useEffect, useMemo, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { getHealth, type Health } from './api/client';
import { initializeBackgroundNotifications } from './utils/notify';
import { usePreferences } from './usePreferences';
import { useTaskQueue } from './useTaskQueue';
import { SiteFooter } from './components/SiteFooter';
import { BackToTopButton } from './components/BackToTopButton';
import type { TranslationKey } from './i18n';
import { getSeoLandingRouteByPath } from './seoLandingRoutes';
import { prefetchRoute } from './routePrefetch';

type RouteKey = 'home' | 'image' | 'video' | 'guides' | 'promptTemplates' | 'about' | 'privacy' | 'terms' | 'contact' | 'notFound';

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
  { path: '/prompt-templates', labelKey: 'nav.promptTemplates', route: 'promptTemplates' },
  { path: '/image', labelKey: 'nav.image', route: 'image' },
  { path: '/video', labelKey: 'nav.video', route: 'video' },
];
const MARQUEE_ITEMS = Array.from({ length: 6 }, () => 'AGNES FRAME STUDIO · CALIBRATE · DEVELOP · REUSE ·');

function normalizePath(pathname: string): string {
  return pathname.replace(/\/+$/, '') || '/';
}

function routeFromPath(pathname: string): RouteKey {
  const normalized = normalizePath(pathname);
  if (normalized.startsWith('/prompt-templates')) return 'promptTemplates';
  switch (normalized) {
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
    case '/prompt-templates':
      return 'promptTemplates';
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
      promptTemplates: { titleKey: 'meta.promptTemplates.title', descriptionKey: 'meta.promptTemplates.description' },
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
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

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
      // 空闲时预取最常访问的工具页 chunk，使后续点击切换近乎瞬时。
      prefetchRoute('/image');
      prefetchRoute('/video');
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
  const showFreeBadge = route === 'home' || route === 'image' || route === 'video' || route === 'promptTemplates';

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
            {showFreeBadge ? <span className="brand-free-badge">{t('free.notice.title')}</span> : null}
          </Link>

          <nav className="nav" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) => (isActive ? 'is-active' : '')}
                onMouseEnter={() => prefetchRoute(item.path)}
                onFocus={() => prefetchRoute(item.path)}
                onTouchStart={() => prefetchRoute(item.path)}
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
              aria-hidden="true"
            />
            <span className="sr-only">{healthLabel}</span>
          </div>
        </div>
      </header>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((segment) => (
            <div className="marquee-segment" key={segment}>
              {MARQUEE_ITEMS.map((item, index) => (
                <span key={`${segment}-${index}`}>{item}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <main>
        <Outlet />
      </main>

      <SiteFooter wide={route === 'image' || route === 'video'} />
      <BackToTopButton />

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
