import { useEffect, useMemo, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { getHealth, type Health } from './api/client';
import { initializeBackgroundNotifications } from './utils/notify';
import { usePreferences } from './usePreferences';
import { useTaskQueue } from './useTaskQueue';
import { TasksDrawer } from './components/TasksDrawer';
import { SiteFooter } from './components/SiteFooter';
import { THEMES } from './theme';
import type { TranslationKey } from './i18n';

type RouteKey = 'home' | 'image' | 'video' | 'privacy' | 'terms' | 'contact' | 'notFound';

const NAV_ITEMS: { path: string; labelKey: TranslationKey; route: RouteKey }[] = [
  { path: '/', labelKey: 'nav.home', route: 'home' },
  { path: '/image', labelKey: 'nav.image', route: 'image' },
  { path: '/video', labelKey: 'nav.video', route: 'video' },
];

const THEME_ICON: Record<(typeof THEMES)[number], string> = {
  auto: '◐',
  default: '✦',
  light: '☀',
  dark: '☾',
};

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
  const { language, setLanguage, theme, setTheme, t } = usePreferences();
  const { activeCount, maxActive } = useTaskQueue();
  const location = useLocation();
  const route = routeFromPath(location.pathname);
  const [health, setHealth] = useState<Health | null>(null);
  const [controlsOpen, setControlsOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const meta = useMemo(() => {
    const byRoute: Record<RouteKey, { titleKey: TranslationKey; descriptionKey: TranslationKey }> = {
      home: { titleKey: 'meta.home.title', descriptionKey: 'meta.home.description' },
      image: { titleKey: 'meta.image.title', descriptionKey: 'meta.image.description' },
      video: { titleKey: 'meta.video.title', descriptionKey: 'meta.video.description' },
      privacy: { titleKey: 'meta.privacy.title', descriptionKey: 'meta.privacy.description' },
      terms: { titleKey: 'meta.terms.title', descriptionKey: 'meta.terms.description' },
      contact: { titleKey: 'meta.contact.title', descriptionKey: 'meta.contact.description' },
      notFound: { titleKey: 'meta.notFound.title', descriptionKey: 'meta.notFound.description' },
    };
    const selected = byRoute[route];
    return {
      title: t(selected.titleKey),
      description: t(selected.descriptionKey),
    };
  }, [route, t]);

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

  const healthLabel = health
    ? health.apiKeyConfigured
      ? 'API'
      : t('health.noApiKey')
    : t('health.backendOffline');

  return (
    <div className="app">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <header className="topbar">
        <div className="topbar-main">
          <Link className="brand" to="/" onClick={() => setControlsOpen(false)}>
            <span className="logo">✦</span>
            {t('app.brand')}
          </Link>
          <div className="topbar-nav-row">
            <nav className="tabs" aria-label="Primary">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) => `tab ${isActive ? 'active' : ''}`}
                  onClick={() => setControlsOpen(false)}
                >
                  {t(item.labelKey)}
                </NavLink>
              ))}
            </nav>
            <button
              className="tasks-btn"
              aria-label={t('tasks.viewButton', { count: activeCount, max: maxActive })}
              title={t('tasks.viewButton', { count: activeCount, max: maxActive })}
              onClick={() => {
                setDrawerOpen(true);
                setControlsOpen(false);
              }}
            >
              <span className="tasks-icon" aria-hidden="true">
                📋
              </span>
              <span className="tasks-full">{t('tasks.viewButton', { count: activeCount, max: maxActive })}</span>
              <span className="tasks-compact">
                {activeCount}/{maxActive}
              </span>
            </button>
            <button
              type="button"
              className={`controls-menu-btn ${controlsOpen ? 'open' : ''}`}
              aria-label={controlsOpen ? t('controls.close') : t('controls.menu')}
              aria-expanded={controlsOpen}
              aria-controls="mobile-controls-panel"
              onClick={() => setControlsOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <div id="mobile-controls-panel" className={`topbar-controls ${controlsOpen ? 'open' : ''}`}>
          <div className="controls-panel-title">{t('controls.title')}</div>
          <label className="pref-control">
            <span className="pref-icon" aria-hidden="true">
              {THEME_ICON[theme]}
            </span>
            <select
              name="theme"
              value={theme}
              onChange={(e) => setTheme(e.target.value as typeof theme)}
              aria-label={t('theme.label')}
            >
              {THEMES.map((item) => (
                <option key={item} value={item}>
                  {t(`theme.${item}` as TranslationKey)}
                </option>
              ))}
            </select>
          </label>
          <button
            type="button"
            className="pref-control pref-button"
            onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
            title={t('language.label')}
            aria-label={t('language.label')}
          >
            <span className="pref-icon" aria-hidden="true">
              {language === 'zh' ? '中' : 'EN'}
            </span>
          </button>
          <div className="health" title={healthLabel} aria-label={healthLabel}>
            <span className={`dot ${health?.apiKeyConfigured ? 'ok' : 'warn'}`} />
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <SiteFooter wide={route === 'image' || route === 'video'} />

      <TasksDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
}
