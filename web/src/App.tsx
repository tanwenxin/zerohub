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
    const byRoute: Record<
      RouteKey,
      { titleKey: TranslationKey; descriptionKey: TranslationKey; keywordsZh: string; keywordsEn: string }
    > = {
      home: {
        titleKey: 'meta.home.title',
        descriptionKey: 'meta.home.description',
        keywordsZh:
          'AI 图片生成, AI 视频生成, AI 绘画, AI image generator, AI video generator, 文生图, 图生图, 文生视频, 多图合成, 关键帧动画, AI prompt, 提示词库, Agnes 显影室',
        keywordsEn:
          'AI image generator, AI video generator, text-to-image, image-to-image, text-to-video, image-to-video, keyframe animation, AI prompts, free AI image, Agnes Frame Studio',
      },
      image: {
        titleKey: 'meta.image.title',
        descriptionKey: 'meta.image.description',
        keywordsZh:
          'AI 图片生成, 文生图, 图生图, 多图合成, AI 绘画, 产品主图, 广告海报, 提示词优化, 图片理解, image to image, multi image composition',
        keywordsEn:
          'AI image generator, text to image, image to image, multi image composition, product photography, poster design, prompt optimizer, image understanding',
      },
      video: {
        titleKey: 'meta.video.title',
        descriptionKey: 'meta.video.description',
        keywordsZh:
          'AI 视频生成, 文生视频, 图生视频, 多图视频, 关键帧动画, AI 短视频, 广告分镜, 社媒动态, text to video, image to video',
        keywordsEn:
          'AI video generator, text to video, image to video, multi image video, keyframe animation, short video AI, ad storyboard, social motion',
      },
      guides: {
        titleKey: 'meta.guides.title',
        descriptionKey: 'meta.guides.description',
        keywordsZh:
          'AI 提示词写法, AI 图片商业使用, 安全创作指南, prompt 指南, 生成式 AI 合规',
        keywordsEn:
          'AI prompt guide, commercial use of generative AI, AI safety guidelines, prompt writing tips',
      },
      promptTemplates: {
        titleKey: 'meta.promptTemplates.title',
        descriptionKey: 'meta.promptTemplates.description',
        keywordsZh:
          'AI 提示词库, AI prompt, 图片提示词, 人像 prompt, 产品摄影 prompt, 海报设计, 角色设计, 美食摄影, 建筑空间, 复古风格, 科幻场景',
        keywordsEn:
          'AI prompt library, image generation prompts, portrait prompts, product photography prompts, poster design, character design, food photography, architecture prompts',
      },
      about: {
        titleKey: 'meta.about.title',
        descriptionKey: 'meta.about.description',
        keywordsZh: '关于 Agnes 显影室, AI 创作工作台, 自托管图片视频生成',
        keywordsEn: 'About Agnes Frame Studio, self-hosted AI image and video workspace',
      },
      privacy: {
        titleKey: 'meta.privacy.title',
        descriptionKey: 'meta.privacy.description',
        keywordsZh: '隐私政策, Agnes 显影室, 数据处理, prompt 存储, 生成历史',
        keywordsEn: 'Privacy policy, Agnes Frame Studio, data handling, prompt storage, generation history',
      },
      terms: {
        titleKey: 'meta.terms.title',
        descriptionKey: 'meta.terms.description',
        keywordsZh: '服务条款, 使用规则, AI 输出免责, Agnes 显影室',
        keywordsEn: 'Terms of service, acceptable use, AI output disclaimer, Agnes Frame Studio',
      },
      contact: {
        titleKey: 'meta.contact.title',
        descriptionKey: 'meta.contact.description',
        keywordsZh: '联系 Agnes 显影室, 支持邮箱, 反馈与建议',
        keywordsEn: 'Contact Agnes Frame Studio, support email, feedback',
      },
      notFound: {
        titleKey: 'meta.notFound.title',
        descriptionKey: 'meta.notFound.description',
        keywordsZh: '',
        keywordsEn: '',
      },
    };
    const selected = byRoute[route];
    const keywordsList = (language === 'en' ? selected.keywordsEn : selected.keywordsZh).trim();
    return {
      title: t(selected.titleKey),
      description: t(selected.descriptionKey),
      keywords: keywordsList,
      robots: route === 'notFound' && !isSeoLandingRoute ? 'noindex,follow' : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
    };
  }, [isSeoLandingRoute, language, route, t]);

  const canonicalPath = normalizePath(location.pathname);
  const canonicalUrl = `${SITE_URL}${canonicalPath === '/' ? '/' : canonicalPath}`;
  const structuredData = useMemo(() => {
    if (isSeoLandingRoute) return null;
    return {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: t('app.brand'),
      alternateName: language === 'en' ? 'Agnes Frame Studio' : 'Agnes 显影室',
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Web',
      url: canonicalUrl,
      description: meta.description,
      keywords: meta.keywords,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      inLanguage: language === 'en' ? 'en' : 'zh-CN',
    };
  }, [canonicalUrl, isSeoLandingRoute, language, meta.description, meta.keywords, t]);

  const organizationData = useMemo(() => {
    if (isSeoLandingRoute) return null;
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: t('app.brand'),
      alternateName: language === 'en' ? 'Agnes Frame Studio' : 'Agnes 显影室',
      url: SITE_URL,
      sameAs: [SITE_URL],
    };
  }, [isSeoLandingRoute, language, t]);

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
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={t('app.brand')} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content={language === 'en' ? 'en_US' : 'zh_CN'} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="zh-CN" href={`${SITE_URL}${canonicalPath === '/' ? '/' : canonicalPath}`} />
        <link rel="alternate" hrefLang="en" href={`${SITE_URL}${canonicalPath === '/' ? '/' : canonicalPath}`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${canonicalPath === '/' ? '/' : canonicalPath}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        {structuredData ? <script type="application/ld+json">{JSON.stringify(structuredData)}</script> : null}
        {organizationData ? <script type="application/ld+json">{JSON.stringify(organizationData)}</script> : null}
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
