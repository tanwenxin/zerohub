// 路由级预取：在用户 hover / focus 主导航或空闲时，提前加载目标路由的 chunk，
// 消除"点击后才下载 chunk"导致的切换白屏延迟。
//
// 说明：
// - 这里的 import 路径必须与 routes.tsx 中的 lazy import 完全一致，
//   Vite 才会复用同一个 chunk（命中已预取的缓存），不会重复打包。
// - 每个路由只预取一次，重复触发直接复用同一个 Promise。

type Importer = () => Promise<unknown>;

const ROUTE_IMPORTERS: Record<string, Importer> = {
  '/image': () => import('./pages/ImageGenerate'),
  '/video': () => import('./pages/VideoGenerate'),
  '/guides': () => import('./pages/GuidesPage'),
  '/about': () => import('./pages/AboutPage'),
  '/privacy': () => import('./pages/PrivacyPage'),
  '/terms': () => import('./pages/TermsPage'),
  '/contact': () => import('./pages/ContactPage'),
};

const prefetched = new Map<string, Promise<unknown>>();

function normalize(path: string): string {
  return path.replace(/\/+$/, '') || '/';
}

/** 预取指定路由的 chunk（幂等）。未知路由静默忽略。 */
export function prefetchRoute(path: string): void {
  const key = normalize(path);
  if (prefetched.has(key)) return;
  const importer = ROUTE_IMPORTERS[key];
  if (!importer) return;
  // 吞掉错误：预取失败不应影响后续真实导航（真实导航时会重新触发并正常报错）。
  const promise = importer().catch(() => undefined);
  prefetched.set(key, promise);
}
