import { useEffect, useMemo, useState } from 'react';
import type { MouseEvent } from 'react';
import './App.css';
import { ImageGenerate } from './pages/ImageGenerate';
import { VideoGenerate } from './pages/VideoGenerate';
import { HomePage } from './pages/HomePage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { getHealth, type Health } from './api/client';
import { ensurePermission, getPermission } from './utils/notify';
import { usePreferences } from './usePreferences';
import { useTaskQueue } from './useTaskQueue';
import { TasksDrawer } from './components/TasksDrawer';
import { SiteFooter } from './components/SiteFooter';
import { LANGUAGES, THEMES } from './theme';
import type { TranslationKey } from './i18n';
import { useDocumentMeta } from './hooks/useDocumentMeta';

type RouteKey = 'home' | 'image' | 'video' | 'privacy' | 'terms' | 'contact' | 'notFound';

const NAV_ITEMS: { path: string; labelKey: TranslationKey; route: RouteKey }[] = [
  { path: '/', labelKey: 'nav.home', route: 'home' },
  { path: '/image', labelKey: 'nav.image', route: 'image' },
  { path: '/video', labelKey: 'nav.video', route: 'video' },
];

function normalizePath(pathname: string): string {
  const path = pathname.replace(/\/+$/, '') || '/';
  return path;
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
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));
  const [health, setHealth] = useState<Health | null>(null);
  const [perm, setPerm] = useState<NotificationPermission | 'unsupported'>(getPermission());
  const [controlsOpen, setControlsOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const route = routeFromPath(path);

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

  useDocumentMeta(meta);

  useEffect(() => {
    const load = () => getHealth().then(setHealth).catch(() => setHealth(null));
    load();
    // 周期刷新，反映队列运行状态变化
    const id = window.setInterval(load, 5000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const onPopState = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  function navigate(nextPath: string) {
    const normalized = normalizePath(nextPath);
    if (normalized !== path) {
      window.history.pushState(null, '', normalized);
      setPath(normalized);
    }
    setControlsOpen(false);
  }

  function onRouteClick(e: MouseEvent<HTMLAnchorElement>, nextPath: string) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    navigate(nextPath);
  }

  async function onEnableNotify() {
    const p = await ensurePermission();
    setPerm(p);
  }

  const notifyLabel =
    perm === 'granted'
      ? t('notify.enabled')
      : perm === 'denied'
      ? t('notify.denied')
      : perm === 'unsupported'
      ? t('notify.unsupported')
      : t('notify.enable');

  const page =
    route === 'home' ? (
      <HomePage />
    ) : route === 'image' ? (
      <ImageGenerate />
    ) : route === 'video' ? (
      <VideoGenerate />
    ) : route === 'privacy' ? (
      <PrivacyPage />
    ) : route === 'terms' ? (
      <TermsPage />
    ) : route === 'contact' ? (
      <ContactPage />
    ) : (
      <NotFoundPage />
    );

  return (
    <div className="app">
      <header className="topbar">
        <div className="topbar-main">
          <a className="brand" href="/" onClick={(e) => onRouteClick(e, '/')}>
            <span className="logo">✦</span>
            {t('app.brand')}
          </a>
          <div className="topbar-nav-row">
            <nav className="tabs" aria-label="Primary">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  className={`tab ${route === item.route ? 'active' : ''}`}
                  onClick={(e) => onRouteClick(e, item.path)}
                >
                  {t(item.labelKey)}
                </a>
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
            <span>{t('theme.label')}</span>
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
          <label className="pref-control">
            <span>{t('language.label')}</span>
            <select
              name="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value as typeof language)}
              aria-label={t('language.label')}
            >
              {LANGUAGES.map((item) => (
                <option key={item} value={item}>
                  {t(`language.${item}` as TranslationKey)}
                </option>
              ))}
            </select>
          </label>
          <button
            className={`notify-btn ${perm === 'granted' ? 'on' : ''}`}
            onClick={onEnableNotify}
            disabled={perm === 'unsupported' || perm === 'denied'}
            title={t('notify.title')}
            aria-label={t('notify.title')}
          >
            🔔 {notifyLabel}
          </button>
          <div className="health">
            {health ? (
              <>
                <span className={`dot ${health.apiKeyConfigured ? 'ok' : 'warn'}`} />
                {health.apiKeyConfigured ? t('health.connected') : t('health.noApiKey')}
                <span className="queue-info">
                  {t('health.queue', {
                    running: health.queue.running,
                    max: health.queue.maxConcurrency,
                  })}
                </span>
              </>
            ) : (
              <>
                <span className="dot warn" />
                {t('health.backendOffline')}
              </>
            )}
          </div>
        </div>
      </header>

      <main>{page}</main>

      <SiteFooter />

      <TasksDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
}
