import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import { Link, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { listPromptTemplates, type PromptTemplatePagination as Pagination } from '../api/client';
import { PromptTemplateCard } from '../components/PromptTemplateCard';
import { PromptTemplatePagination } from '../components/PromptTemplatePagination';
import { Badge, Button, Card, Container, Eyebrow, Input, Section } from '../components/ui';
import {
  PROMPT_TEMPLATE_CATEGORIES,
  PROMPT_TEMPLATES,
  getPromptTemplateCategory,
  type PromptTemplate,
  type PromptTemplateCategory,
} from '../data/promptTemplates.generated';
import { categoryDescription, categoryName } from '../data/promptTemplateLabels';
import { usePreferences } from '../usePreferences';
import './PromptTemplatesPage.css';

const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://agnes-image-studio.xyz').replace(/\/+$/, '');
const DEFAULT_PAGE_SIZE = 24;

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
  const resultsRef = useRef<HTMLDivElement | null>(null);
  const shouldScrollToResultsRef = useRef(false);

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

      <Section>
        <Container className="prompt-template-hero">
          <div>
            <Eyebrow>{en ? 'Prompt Library' : '提示词库'}</Eyebrow>
            <h1>{category ? (en ? `${currentCategoryName} Prompts` : `${currentCategoryName}提示词`) : (en ? 'AI Prompt Library' : 'AI 提示词库')}</h1>
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
