import { useEffect, useState } from 'react';
import './App.css';
import { ImageGenerate } from './pages/ImageGenerate';
import { VideoGenerate } from './pages/VideoGenerate';
import { getHealth, type Health } from './api/client';
import { ensurePermission, getPermission } from './utils/notify';
import { usePreferences } from './usePreferences';
import { useTaskQueue } from './useTaskQueue';
import { TasksDrawer } from './components/TasksDrawer';
import { LANGUAGES, THEMES } from './theme';
import type { TranslationKey } from './i18n';

type Tab = 'image' | 'video';

const TABS: { key: Tab; labelKey: TranslationKey }[] = [
  { key: 'image', labelKey: 'nav.image' },
  { key: 'video', labelKey: 'nav.video' },
];

export default function App() {
  const { language, setLanguage, theme, setTheme, t } = usePreferences();
  const { activeCount, maxActive } = useTaskQueue();
  const [tab, setTab] = useState<Tab>('image');
  const [health, setHealth] = useState<Health | null>(null);
  const [perm, setPerm] = useState<NotificationPermission | 'unsupported'>(getPermission());
  const [controlsOpen, setControlsOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const load = () => getHealth().then(setHealth).catch(() => setHealth(null));
    load();
    // 周期刷新，反映队列运行状态变化
    const id = window.setInterval(load, 5000);
    return () => window.clearInterval(id);
  }, []);

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

  return (
    <div className="app">
      <header className="topbar">
        <div className="topbar-main">
          <div className="brand">
            <span className="logo">✦</span>
            {t('app.brand')}
          </div>
          <div className="topbar-nav-row">
            <nav className="tabs" aria-label="Primary">
              {TABS.map((tabItem) => (
                <button
                  key={tabItem.key}
                  className={`tab ${tab === tabItem.key ? 'active' : ''}`}
                  onClick={() => {
                    setTab(tabItem.key);
                    setControlsOpen(false);
                  }}
                >
                  {t(tabItem.labelKey)}
                </button>
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

      <main>
        {tab === 'image' && <ImageGenerate />}
        {tab === 'video' && <VideoGenerate />}
      </main>

      <TasksDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
}
