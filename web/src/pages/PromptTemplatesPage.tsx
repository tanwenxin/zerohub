import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import { Link, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import {
  getPromptOptimizerOptions,
  listPromptTemplates,
  optimizePromptForModel,
  type PromptOptimizerOptions,
  type PromptOptimizerProvider,
  type PromptTemplatePagination as Pagination,
} from '../api/client';
import { PromptTemplateCard } from '../components/PromptTemplateCard';
import { PromptTemplatePagination } from '../components/PromptTemplatePagination';
import { Badge, Button, Card, Container, Eyebrow, Input, Section, SegmentedControl } from '../components/ui';
import {
  PROMPT_TEMPLATE_CATEGORIES,
  PROMPT_TEMPLATES,
  getPromptTemplateCategory,
  type PromptTemplate,
  type PromptTemplateCategory,
} from '../data/promptTemplates.generated';
import { categoryDescription, categoryName } from '../data/promptTemplateLabels';
import { usePreferences } from '../usePreferences';
import {
  addPromptOptimizerHistory,
  clearPromptOptimizerHistory,
  readPromptOptimizerHistory,
  removePromptOptimizerHistory,
  type PromptOptimizerHistoryItem,
} from '../utils/promptOptimizerHistory';
import './PromptTemplatesPage.css';

const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://agnes-image-studio.xyz').replace(/\/+$/, '');
const DEFAULT_PAGE_SIZE = 24;

type PromptPageTab = 'optimizer' | 'library';

interface ListingState {
  items: PromptTemplate[];
  pagination: Pagination;
  categories: PromptTemplateCategory[];
}

function readPositiveInt(value: string | null, fallback: number): number {
  const n = Number.parseInt(value || '', 10);
  return Number.isFinite(n) && n > 0 ? n : fallback;
}

function compactText(value: string, max = 160): string {
  const text = value.replace(/\s+/g, ' ').trim();
  return text.length > max ? `${text.slice(0, max - 1)}…` : text;
}

function filterTemplates(categorySlug: string | undefined, q: string): PromptTemplate[] {
  const query = q.trim().toLowerCase();
  return PROMPT_TEMPLATES.filter((template) => {
    if (categorySlug && template.categorySlug !== categorySlug) return false;
    if (!query) return true;
    return [template.title, template.prompt, template.category, template.rawCategory]
      .join('\n')
      .toLowerCase()
      .includes(query);
  });
}

function staticList(categorySlug: string | undefined, page: number, pageSize: number, q: string): ListingState {
  const filtered = filterTemplates(categorySlug, q);
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const currentPage = Math.min(totalPages, Math.max(1, page));
  const start = (currentPage - 1) * pageSize;
  return {
    items: filtered.slice(start, start + pageSize),
    pagination: {
      page: currentPage,
      pageSize,
      total,
      totalPages,
      hasPrev: currentPage > 1,
      hasNext: currentPage < totalPages,
    },
    categories: PROMPT_TEMPLATE_CATEGORIES,
  };
}

const FALLBACK_OPTIMIZER_OPTIONS: PromptOptimizerOptions = {
  defaultProvider: 'generic',
  providers: [
    {
      id: 'generic',
      label: '通用模板',
      description: '集合各模型共性优点的标准化提示词模板',
      defaultVersion: 'universal',
      versions: [
        {
          value: 'universal',
          label: '通用优化',
          sourceUrl: 'internal://prompt-optimizer/universal',
          sourceCheckedAt: '2026-06-21',
          sourceStatus: 'internal',
        },
      ],
    },
    {
      id: 'jimeng',
      label: '即梦',
      description: '面向即梦图像生成的中文视觉提示词优化',
      defaultVersion: '4.5',
      versions: [
        {
          value: '4.0',
          label: '即梦 4.0',
          sourceUrl: 'https://bytedance.larkoffice.com/wiki/SWalw66Flihm1pkudaQcvWuBn3d',
          sourceCheckedAt: '2026-06-21',
          sourceStatus: 'pending_auth',
        },
        {
          value: '4.1',
          label: '即梦 4.1',
          sourceUrl: 'https://bytedance.larkoffice.com/wiki/XRUCwBQyiiO2akk36E4cFsU4nGd',
          sourceCheckedAt: '2026-06-21',
          sourceStatus: 'pending_auth',
        },
        {
          value: '4.5',
          label: '即梦 4.5',
          sourceUrl: 'https://bytedance.larkoffice.com/wiki/GTA7wTKRDi1SxKk4joMcftz5nfe',
          sourceCheckedAt: '2026-06-21',
          sourceStatus: 'pending_auth',
        },
      ],
    },
  ],
};

function providerById(options: PromptOptimizerOptions, providerId: string): PromptOptimizerProvider {
  return options.providers.find((provider) => provider.id === providerId) || options.providers[0];
}

function localizedProviderLabel(provider: PromptOptimizerProvider, en: boolean): string {
  if (!en) return provider.label;
  if (provider.id === 'jimeng') return 'Jimeng';
  if (provider.id === 'generic') return 'Universal template';
  return provider.label;
}

function localizedVersionLabel(providerId: string, value: string, label: string, en: boolean): string {
  if (!en) return label;
  if (providerId === 'generic' && value === 'universal') return 'Universal optimization';
  if (providerId === 'openai' && value === 'gpt-general') return 'GPT general';
  if (providerId === 'jimeng') return label.replace('即梦', 'Jimeng');
  return label;
}

function formatHistoryTime(value: number, en: boolean): string {
  if (!value) return '';
  return new Intl.DateTimeFormat(en ? 'en-US' : 'zh-CN', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(value);
}

function compactHistoryText(value: string, max = 96): string {
  const text = value.replace(/\s+/g, ' ').trim();
  return text.length > max ? `${text.slice(0, max - 1)}…` : text;
}

function PromptOptimizerPanel() {
  const { language } = usePreferences();
  const en = language === 'en';
  const fallbackProvider = providerById(FALLBACK_OPTIMIZER_OPTIONS, FALLBACK_OPTIMIZER_OPTIONS.defaultProvider);
  const [options, setOptions] = useState<PromptOptimizerOptions>(FALLBACK_OPTIMIZER_OPTIONS);
  const [providerId, setProviderId] = useState(FALLBACK_OPTIMIZER_OPTIONS.defaultProvider);
  const [version, setVersion] = useState(fallbackProvider.defaultVersion || fallbackProvider.versions[0]?.value || '');
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');
  const [history, setHistory] = useState<PromptOptimizerHistoryItem[]>([]);
  const [activeHistoryId, setActiveHistoryId] = useState('');

  const currentProvider = providerById(options, providerId);
  const currentVersion = currentProvider.versions.find((item) => item.value === version) || currentProvider.versions[0];
  const activeHistory = history.find((item) => item.id === activeHistoryId) || history[0] || null;

  useEffect(() => {
    let cancelled = false;
    getPromptOptimizerOptions()
      .then((remoteOptions) => {
        if (cancelled || !remoteOptions.providers.length) return;
        const defaultProvider = providerById(remoteOptions, remoteOptions.defaultProvider);
        setOptions(remoteOptions);
        setProviderId(defaultProvider.id);
        setVersion(defaultProvider.defaultVersion || defaultProvider.versions[0]?.value || '');
      })
      .catch(() => {
        // 后端暂不可用时保留本地兜底选项，避免 SSG 或静态预览报错。
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setHistory(readPromptOptimizerHistory()), 0);
    return () => window.clearTimeout(timer);
  }, []);

  function changeProvider(nextProviderId: string) {
    const nextProvider = providerById(options, nextProviderId);
    setProviderId(nextProvider.id);
    setVersion(nextProvider.defaultVersion || nextProvider.versions[0]?.value || '');
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const prompt = input.trim();
    if (!prompt || loading) {
      setError(en ? 'Enter a prompt to optimize' : '请输入需要优化的提示词');
      return;
    }
    setLoading(true);
    setError('');
    setCopied(false);
    try {
      const response = await optimizePromptForModel({
        prompt,
        provider: currentProvider.id,
        version: currentVersion.value,
      });
      const nextResult = response.prompt.trim();
      setResult(nextResult);
      const item = addPromptOptimizerHistory({
        sourcePrompt: prompt,
        optimizedPrompt: nextResult,
        providerId: currentProvider.id,
        providerLabel: currentProvider.label,
        version: currentVersion.value,
        versionLabel: currentVersion.label,
      });
      setHistory(readPromptOptimizerHistory());
      setActiveHistoryId(item.id);
    } catch (err) {
      setError(err instanceof Error ? err.message : en ? 'Prompt optimization failed. Try again later.' : '提示词优化失败，请稍后重试');
    } finally {
      setLoading(false);
    }
  }

  async function copyResult() {
    if (!result.trim()) return;
    try {
      await navigator.clipboard.writeText(result.trim());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setError(en ? 'Copy failed. Select the result manually.' : '复制失败，请手动选择结果文本');
    }
  }

  async function copyText(text: string) {
    if (!text.trim()) return;
    try {
      await navigator.clipboard.writeText(text.trim());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setError(en ? 'Copy failed. Select the text manually.' : '复制失败，请手动选择文本');
    }
  }

  function applyHistory(item: PromptOptimizerHistoryItem) {
    setInput(item.sourcePrompt);
    setResult(item.optimizedPrompt);
    setProviderId(item.providerId);
    setVersion(item.version);
    setActiveHistoryId(item.id);
    setError('');
  }

  function deleteHistory(id: string) {
    removePromptOptimizerHistory(id);
    const next = readPromptOptimizerHistory();
    setHistory(next);
    setActiveHistoryId((current) => (current === id ? next[0]?.id || '' : current));
  }

  function clearHistory() {
    clearPromptOptimizerHistory();
    setHistory([]);
    setActiveHistoryId('');
  }

  return (
    <Section>
      <Container>
        <Card className="prompt-optimizer-panel">
          <div className="prompt-optimizer-head">
            <div>
              <Eyebrow>Prompt Optimizer</Eyebrow>
              <h2>{en ? 'Prompt Optimizer' : '提示词优化器'}</h2>
              <p>
                {en
                  ? 'Enter a raw prompt, choose a target model and version, then generate a prompt better suited to that model.'
                  : '输入原始提示词，选择目标模型类型与版本，生成更适合对应模型的提示词。'}
              </p>
            </div>
            <Badge>{localizedVersionLabel(currentProvider.id, currentVersion.value, currentVersion.label, en)}</Badge>
          </div>

          <form className="prompt-optimizer-form" onSubmit={submit}>
            <label className="prompt-optimizer-field prompt-optimizer-input">
              <span>{en ? 'Raw prompt' : '原始提示词'}</span>
              <textarea
                value={input}
                rows={7}
                placeholder={
                  en
                    ? 'Example: rainy street, a girl in a red trench coat, cinematic mood'
                    : '例如：雨后街头，一个穿红色风衣的女孩，电影感'
                }
                onChange={(event) => setInput(event.target.value)}
              />
            </label>

            <div className="prompt-optimizer-controls">
              <label className="prompt-optimizer-field">
                <span>{en ? 'Model type' : '模型类型'}</span>
                <select value={currentProvider.id} onChange={(event) => changeProvider(event.target.value)}>
                  {options.providers.map((provider) => (
                    <option key={provider.id} value={provider.id}>
                      {localizedProviderLabel(provider, en)}
                    </option>
                  ))}
                </select>
              </label>
              <label className="prompt-optimizer-field">
                <span>{en ? 'Model version' : '模型版本'}</span>
                <select value={currentVersion.value} onChange={(event) => setVersion(event.target.value)}>
                  {currentProvider.versions.map((item) => (
                    <option key={item.value} value={item.value}>
                      {localizedVersionLabel(currentProvider.id, item.value, item.label, en)}
                    </option>
                  ))}
                </select>
              </label>
              <Button type="submit" variant="primary" disabled={loading}>
                {loading ? (en ? 'Optimizing…' : '优化中…') : en ? 'Optimize prompt' : '优化提示词'}
              </Button>
            </div>
          </form>

          <div className="prompt-optimizer-result" aria-live="polite">
            <div className="prompt-optimizer-result-head">
              <span>{en ? 'Optimized result' : '优化结果'}</span>
              <Button type="button" size="sm" variant="ghost" disabled={!result.trim()} onClick={() => void copyResult()}>
                {copied ? (en ? 'Copied' : '已复制') : en ? 'Copy' : '复制'}
              </Button>
            </div>
            {result ? (
              <p>{result}</p>
            ) : (
              <p className="prompt-optimizer-empty">{en ? 'The optimized prompt will appear here.' : '优化后的提示词会显示在这里。'}</p>
            )}
            {error ? <p className="prompt-optimizer-error">{error}</p> : null}
          </div>

          <div className="prompt-optimizer-history">
            <div className="prompt-optimizer-history-head">
              <div>
                <h3>{en ? 'Local history' : '本地历史'}</h3>
                <p>
                  {en
                    ? 'Compare previous optimizations and restore useful prompts.'
                    : '记录此前优化过的提示词，方便对比配置、回填和删除。'}
                </p>
              </div>
              <Button type="button" size="sm" variant="ghost" disabled={!history.length} onClick={clearHistory}>
                {en ? 'Clear' : '清空'}
              </Button>
            </div>

            {history.length ? (
              <div className="prompt-optimizer-history-grid">
                <div className="prompt-optimizer-history-list" aria-label={en ? 'Prompt optimization history' : '提示词优化历史'}>
                  {history.map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      className={item.id === activeHistory?.id ? 'is-active' : ''}
                      onClick={() => setActiveHistoryId(item.id)}
                    >
                      <span>{compactHistoryText(item.sourcePrompt)}</span>
                      <small>
                        {localizedProviderLabel({ id: item.providerId, label: item.providerLabel, description: '', defaultVersion: '', versions: [] }, en)}
                        {' · '}
                        {localizedVersionLabel(item.providerId, item.version, item.versionLabel, en)}
                        {' · '}
                        {formatHistoryTime(item.createdAt, en)}
                      </small>
                    </button>
                  ))}
                </div>

                {activeHistory && (
                  <div className="prompt-optimizer-history-detail">
                    <div className="prompt-optimizer-history-meta">
                      <Badge>
                        {localizedProviderLabel({ id: activeHistory.providerId, label: activeHistory.providerLabel, description: '', defaultVersion: '', versions: [] }, en)}
                        {' · '}
                        {localizedVersionLabel(activeHistory.providerId, activeHistory.version, activeHistory.versionLabel, en)}
                      </Badge>
                      <span>{formatHistoryTime(activeHistory.createdAt, en)}</span>
                    </div>
                    <div className="prompt-optimizer-compare">
                      <section>
                        <h4>{en ? 'Original' : '原始提示词'}</h4>
                        <p>{activeHistory.sourcePrompt}</p>
                      </section>
                      <section>
                        <h4>{en ? 'Optimized' : '优化结果'}</h4>
                        <p>{activeHistory.optimizedPrompt}</p>
                      </section>
                    </div>
                    <div className="prompt-optimizer-history-actions">
                      <Button type="button" size="sm" onClick={() => applyHistory(activeHistory)}>
                        {en ? 'Restore' : '回填'}
                      </Button>
                      <Button type="button" size="sm" variant="ghost" onClick={() => void copyText(activeHistory.optimizedPrompt)}>
                        {copied ? (en ? 'Copied' : '已复制') : en ? 'Copy result' : '复制结果'}
                      </Button>
                      <Button type="button" size="sm" variant="danger" onClick={() => deleteHistory(activeHistory.id)}>
                        {en ? 'Delete' : '删除'}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <p className="prompt-optimizer-history-empty">
                {en ? 'No local prompt optimization history yet.' : '暂无本地优化历史。'}
              </p>
            )}
          </div>
        </Card>
      </Container>
    </Section>
  );
}

function PromptTemplatesListing({ categorySlug }: { categorySlug?: string }) {
  const { language } = usePreferences();
  const en = language === 'en';
  const location = useLocation();
  const navigate = useNavigate();
  const params = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const page = readPositiveInt(params.get('page'), 1);
  const pageSize = readPositiveInt(params.get('pageSize'), DEFAULT_PAGE_SIZE);
  const query = params.get('q') || '';
  const category = categorySlug ? getPromptTemplateCategory(categorySlug) : undefined;
  const currentCategoryName = category ? categoryName(category.slug, category.name, language) : '';
  const currentCategoryDescription = category
    ? categoryDescription(category.slug, category.description, language)
    : '';
  const [searchValue, setSearchValue] = useState(query);
  const [state, setState] = useState<ListingState>(() => staticList(categorySlug, page, pageSize, query));
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<PromptPageTab>(categorySlug ? 'library' : 'optimizer');
  const resultsRef = useRef<HTMLDivElement | null>(null);
  const shouldScrollToResultsRef = useRef(false);

  const showLibrary = categorySlug || activeTab === 'library';

  useEffect(() => {
    let cancelled = false;
    listPromptTemplates({ page, pageSize, category: categorySlug, q: query })
      .then((result) => {
        if (cancelled) return;
        setError(null);
        setState({
          items: result.items,
          pagination: result.pagination,
          categories: result.categories,
        });
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : en ? 'Failed to load prompts' : '提示词加载失败');
        setState(staticList(categorySlug, page, pageSize, query));
      });
    return () => {
      cancelled = true;
    };
  }, [categorySlug, en, page, pageSize, query]);

  function updateQuery(patch: Record<string, string | number | null>) {
    const next = new URLSearchParams(location.search);
    for (const [key, value] of Object.entries(patch)) {
      if (value === null || value === '') next.delete(key);
      else next.set(key, String(value));
    }
    const search = next.toString();
    navigate({ pathname: location.pathname, search: search ? `?${search}` : '' });
  }

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    updateQuery({ q: searchValue.trim() || null, page: 1 });
  }

  function changePage(nextPage: number) {
    if (nextPage === page) return;
    shouldScrollToResultsRef.current = true;
    updateQuery({ page: nextPage });
  }

  useEffect(() => {
    if (!shouldScrollToResultsRef.current || state.pagination.page !== page) return;
    shouldScrollToResultsRef.current = false;
    window.requestAnimationFrame(() => {
      resultsRef.current?.scrollIntoView({ block: 'start', behavior: 'smooth' });
    });
  }, [page, state.pagination.page, state.items.length]);

  const CATEGORY_KEYWORDS: Record<string, { zh: string; en: string }> = {
    'portrait-fashion': {
      zh: '人像 prompt, 时尚摄影, 情侣写真, 旅行人像, 人像 AI, 时尚大片',
      en: 'portrait prompts, fashion photography, couple photos, travel portrait, AI portrait',
    },
    'poster-illustration': {
      zh: '海报设计, 插画风格, 视觉叙事, 创意构图, AI 海报 prompt',
      en: 'poster design, illustration style, visual storytelling, creative composition',
    },
    'character-anime': {
      zh: '角色设计, 动漫风格, 游戏人物, 拟人化角色, AI 角色设定',
      en: 'character design, anime style, game character, stylized persona',
    },
    'city-architecture': {
      zh: '城市景观, 建筑空间, 室内设计, 建筑摄影, 空间氛围',
      en: 'cityscape, architecture, interior design, architectural photography, spatial mood',
    },
    'product-ecommerce': {
      zh: '产品摄影, 电商主图, 商业广告, 营销视觉, 商品图 AI',
      en: 'product photography, ecommerce hero image, commercial ads, marketing visuals',
    },
    'ui-social-media': {
      zh: 'UI 画面, 社交媒体封面, 内容模板, 数字界面, 社媒配图',
      en: 'UI screens, social media cover, content templates, digital interface',
    },
    'infographic-icons': {
      zh: '信息图, 图标, 流程图, 规则说明, 结构化视觉',
      en: 'infographics, icons, flowcharts, structured visuals',
    },
    'sports-action': {
      zh: '体育运动, 动作瞬间, 赛事视觉, 动态场景, 运动摄影',
      en: 'sports, action photography, event visuals, dynamic scenes',
    },
    'brand-logo': {
      zh: '品牌识别, 标志视觉, 字体图形, 商业形象, AI logo',
      en: 'brand identity, logo visuals, typography, commercial identity',
    },
    'food-beverage': {
      zh: '美食摄影, 饮品广告, 餐饮场景, 食物质感, 美食 AI',
      en: 'food photography, beverage ads, dining scene, food texture',
    },
    'nature-landscape': {
      zh: '自然风景, 户外环境, 季节氛围, 旅行景观, 风景摄影',
      en: 'nature landscape, outdoor, seasonal mood, travel scenery',
    },
    'retro-nostalgia': {
      zh: '复古风格, 怀旧质感, 年代摄影, 旧物场景, vintage AI',
      en: 'retro style, nostalgic texture, period photography, vintage',
    },
    'fantasy-scifi': {
      zh: '幻想世界, 科幻场景, 未来视觉, 超现实概念, 赛博朋克',
      en: 'fantasy world, sci-fi scene, futuristic visuals, surreal, cyberpunk',
    },
    'miniature-3d': {
      zh: '微缩景观, 3D 装置, 模型摄影, 创意立体视觉, tilt shift',
      en: 'miniature scene, 3D installation, model photography, tilt shift',
    },
    other: {
      zh: '通用 AI prompt, 创意灵感, 杂项图像生成',
      en: 'general AI prompts, creative inspiration, miscellaneous image generation',
    },
  };

  const categoryKeywords = category ? CATEGORY_KEYWORDS[category.slug] : undefined;
  const baseKeywords = en
    ? 'AI prompt library, image generation prompts, text-to-image prompts, AI image prompts, free prompt collection, Agnes Frame Studio'
    : 'AI 提示词库, AI prompt, 图片提示词, AI 图片生成, 文生图 prompt, 提示词示例, Agnes 显影室';
  const keywordsText = categoryKeywords
    ? en
      ? `${currentCategoryName} prompts, ${categoryKeywords.en}, ${baseKeywords}`
      : `${currentCategoryName}提示词, ${categoryKeywords.zh}, ${baseKeywords}`
    : baseKeywords;

  const title = category
    ? en
      ? `${currentCategoryName} Prompts - AI Image Prompt Examples | Agnes`
      : `${currentCategoryName}提示词 - AI 图片 Prompt 示例 | Agnes`
    : en
      ? 'AI Prompt Library - Image Generation Prompt Examples | Agnes Frame Studio'
      : 'AI 提示词库 - 图片生成 Prompt 示例 | Agnes 显影室';
  const description = category
    ? en
      ? `${currentCategoryDescription} ${category.count} prompts are available for copying, paginated browsing, and image generation reuse.`
      : `${currentCategoryDescription}当前收录 ${category.count} 条提示词，支持复制、分页浏览和图片生成复用。`
    : en
      ? `Agnes Prompt Library includes ${PROMPT_TEMPLATES.length} AI image prompts across ${PROMPT_TEMPLATE_CATEGORIES.length} categories, with pagination, category filtering, and reuse.`
      : `Agnes 提示词库收录 ${PROMPT_TEMPLATES.length} 条 AI 图片生成 Prompt，覆盖 ${PROMPT_TEMPLATE_CATEGORIES.length} 个分类，支持分页浏览、分类筛选和复制复用。`;
  const canonicalPath = category ? `/prompt-templates/${category.slug}` : '/prompt-templates';
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category ? (en ? `${currentCategoryName} Prompts` : `${currentCategoryName}提示词`) : (en ? 'AI Prompt Library' : 'AI 提示词库'),
    description: compactText(description, 160),
    url: canonicalUrl,
    keywords: keywordsText,
    numberOfItems: state.pagination.total,
    inLanguage: en ? 'en' : 'zh-CN',
  };
  const breadcrumbData = category
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: en ? 'Prompt Library' : '提示词库',
            item: `${SITE_URL}/prompt-templates`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: currentCategoryName,
            item: canonicalUrl,
          },
        ],
      }
    : null;

  return (
    <div className="prompt-templates-page">
      <Head>
        <title>{title}</title>
        <meta name="description" content={compactText(description, 158)} />
        <meta name="keywords" content={keywordsText} />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={en ? 'Agnes Frame Studio' : 'Agnes 显影室'} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={compactText(description, 158)} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content={en ? 'en_US' : 'zh_CN'} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={compactText(description, 158)} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        {breadcrumbData ? <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script> : null}
      </Head>

      {!categorySlug && (
        <Section>
          <Container className="prompt-feature-switch">
            <div>
              <Eyebrow>{en ? 'Prompt tools' : '提示词工具'}</Eyebrow>
              <h1>{en ? 'Prompt workspace' : '提示词工作台'}</h1>
            </div>
            <SegmentedControl<PromptPageTab>
              value={activeTab}
              onChange={setActiveTab}
              ariaLabel={en ? 'Prompt page sections' : '提示词页面功能切换'}
              options={[
                { value: 'optimizer', label: en ? 'Prompt Optimizer' : '提示词优化器' },
                { value: 'library', label: en ? 'AI Prompt Library' : 'AI 提示词库' },
              ]}
            />
          </Container>
        </Section>
      )}

      {!categorySlug && activeTab === 'optimizer' ? <PromptOptimizerPanel /> : null}

      {showLibrary && (
        <>
          <Section>
            <Container className="prompt-template-hero">
              <div>
                <Eyebrow>{en ? 'AI Prompt Library' : 'AI 提示词库'}</Eyebrow>
                <h1>
                  {category
                    ? en
                      ? `${currentCategoryName} Prompts`
                      : `${currentCategoryName}提示词`
                    : en
                      ? 'AI Prompt Library'
                      : 'AI 提示词库'}
                </h1>
                <p className="ui-lead">{description}</p>
              </div>
              <Card className="prompt-template-stat" as="aside">
                <strong>{state.pagination.total}</strong>
                <span>{category ? (en ? 'Current category' : '当前分类提示词') : (en ? 'Reusable prompts' : '可复用提示词')}</span>
              </Card>
            </Container>
          </Section>

          <Section>
            <Container className="prompt-template-toolbar">
              <div className="prompt-library-heading">
                <Eyebrow>{en ? 'Browse prompts' : '浏览提示词'}</Eyebrow>
                <h2>
                  {category
                    ? en
                      ? `${currentCategoryName} Prompts`
                      : `${currentCategoryName}提示词`
                    : en
                      ? 'Reusable prompt templates'
                      : '可复用提示词模板'}
                </h2>
              </div>
              <form className="prompt-template-search" onSubmit={submitSearch}>
                <Input
                  value={searchValue}
                  placeholder={en ? 'Search title, category, or prompt…' : '搜索标题、分类或提示词内容…'}
                  aria-label={en ? 'Search prompts' : '搜索提示词'}
                  onChange={(event) => setSearchValue(event.target.value)}
                />
                <Button type="submit" variant="primary">
                  {en ? 'Search' : '搜索'}
                </Button>
              </form>
              <div className="prompt-template-categories" aria-label={en ? 'Prompt categories' : '提示词分类'}>
                <Link className={!categorySlug ? 'is-active' : ''} to="/prompt-templates">
                  {en ? 'All' : '全部'}
                </Link>
                {state.categories.map((item) => (
                  <Link
                    key={item.slug}
                    className={item.slug === categorySlug ? 'is-active' : ''}
                    to={`/prompt-templates/${item.slug}`}
                  >
                    {categoryName(item.slug, item.name, language)}
                  </Link>
                ))}
              </div>
            </Container>
          </Section>

          <Section>
            <Container>
              <div ref={resultsRef} className="prompt-template-results-head">
            <div>
              <Badge>{en ? `${state.pagination.total} total` : `共 ${state.pagination.total} 条`}</Badge>
              {error ? <span className="prompt-template-error">{error}</span> : null}
            </div>
            <span>
              {en ? `Page ${state.pagination.page} / ${state.pagination.totalPages}` : `第 ${state.pagination.page} / ${state.pagination.totalPages} 页`}
            </span>
          </div>
          {state.items.length ? (
            <div className="prompt-template-grid">
              {state.items.map((template) => (
                <PromptTemplateCard key={template.id} template={template} />
              ))}
            </div>
          ) : (
            <Card className="prompt-template-empty">
              <h2>{en ? 'No matching prompts' : '没有匹配的提示词'}</h2>
              <p>{en ? 'Try another category or fewer search terms.' : '请尝试切换分类，或减少搜索关键词。'}</p>
            </Card>
          )}
          <PromptTemplatePagination
            pagination={state.pagination}
            onPageChange={changePage}
          />
            </Container>
          </Section>
        </>
      )}
    </div>
  );
}

export function PromptTemplatesPage() {
  return <PromptTemplatesListing />;
}

export function PromptTemplateCategoryPage() {
  const { categorySlug } = useParams();
  if (!categorySlug || !getPromptTemplateCategory(categorySlug)) {
    return <Navigate to="/404" replace />;
  }
  return <PromptTemplatesListing categorySlug={categorySlug} />;
}
