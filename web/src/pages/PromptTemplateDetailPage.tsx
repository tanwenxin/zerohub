import { useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { translatePrompt } from '../api/client';
import { Badge, Button, ButtonLink, Card, Container, Eyebrow, Section } from '../components/ui';
import {
  getPromptTemplateByPath,
  getPromptTemplateCategory,
  getPromptTemplatesByCategory,
} from '../data/promptTemplates.generated';
import { categoryName, rawCategoryName } from '../data/promptTemplateLabels';
import { saveImageDraft } from '../utils/draftStorage';
import { DEFAULT_IMAGE_SIZE } from '../utils/sizePreference';
import { useTaskQueue } from '../useTaskQueue';
import { usePreferences } from '../usePreferences';
import './PromptTemplatesPage.css';

const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://agnes-image-studio.xyz').replace(/\/+$/, '');

function compactText(value: string, max = 158): string {
  const text = value.replace(/\s+/g, ' ').trim();
  return text.length > max ? `${text.slice(0, max - 1)}…` : text;
}

function detectPromptLanguage(value: string): 'zh' | 'en' {
  const cjkCount = (value.match(/[\u3400-\u9fff]/g) || []).length;
  const latinCount = (value.match(/[A-Za-z]/g) || []).length;
  if (cjkCount >= 8) return 'zh';
  if (cjkCount > 0 && cjkCount / Math.max(1, cjkCount + latinCount) >= 0.2) return 'zh';
  return 'en';
}

export function PromptTemplateDetailPage() {
  const { language } = usePreferences();
  const en = language === 'en';
  const { categorySlug, templateSlug } = useParams();
  const template = categorySlug && templateSlug ? getPromptTemplateByPath(categorySlug, templateSlug) : undefined;
  const category = categorySlug ? getPromptTemplateCategory(categorySlug) : undefined;
  const [copied, setCopied] = useState(false);
  const [translatedPrompt, setTranslatedPrompt] = useState('');
  const [translatedCopied, setTranslatedCopied] = useState(false);
  const [translating, setTranslating] = useState(false);
  const [translationError, setTranslationError] = useState('');
  const [templateSubmitState, setTemplateSubmitState] = useState<'idle' | 'accepted' | 'blocked'>('idle');
  const { submit, canSubmit: queueHasRoom, submitLocked } = useTaskQueue();

  const related = useMemo(() => {
    if (!template) return [];
    return getPromptTemplatesByCategory(template.categorySlug)
      .filter((item) => item.id !== template.id)
      .slice(0, 6);
  }, [template]);

  if (!template || !category) return <Navigate to="/404" replace />;
  const currentTemplate = template;

  const canonicalPath = `/prompt-templates/${currentTemplate.categorySlug}/${currentTemplate.slug}`;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const title = `${currentTemplate.title} - AI Prompt | Agnes`;
  const description = compactText(currentTemplate.prompt);
  const targetLanguage = detectPromptLanguage(currentTemplate.prompt) === 'zh' ? 'en' : 'zh';
  const translateLabel = targetLanguage === 'zh' ? (en ? 'Translate to Chinese' : '翻译成中文') : (en ? 'Translate to English' : '翻译成英文');
  const localizedCategoryName = categoryName(currentTemplate.categorySlug, currentTemplate.category, language);
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: currentTemplate.title,
    description,
    url: canonicalUrl,
    genre: localizedCategoryName,
    text: currentTemplate.prompt,
    image: currentTemplate.imageUrl || undefined,
  };
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Prompts',
        item: `${SITE_URL}/prompt-templates`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: localizedCategoryName,
        item: `${SITE_URL}/prompt-templates/${category.slug}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: currentTemplate.title,
        item: canonicalUrl,
      },
    ],
  };

  async function copyPrompt() {
    if (typeof navigator === 'undefined' || !navigator.clipboard) return;
    await navigator.clipboard.writeText(currentTemplate.prompt);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  }

  async function copyTranslatedPrompt() {
    if (typeof navigator === 'undefined' || !navigator.clipboard || !translatedPrompt) return;
    await navigator.clipboard.writeText(translatedPrompt);
    setTranslatedCopied(true);
    window.setTimeout(() => setTranslatedCopied(false), 1200);
  }

  async function onTranslatePrompt() {
    setTranslating(true);
    setTranslationError('');
    try {
      const result = await translatePrompt(currentTemplate.prompt, targetLanguage);
      setTranslatedPrompt(result.prompt);
    } catch (err) {
      setTranslationError(err instanceof Error ? err.message : en ? 'Translation failed, please retry later' : '翻译失败，请稍后再试');
    } finally {
      setTranslating(false);
    }
  }

  function useTemplate() {
    saveImageDraft({
      mode: 'text2img',
      prompt: currentTemplate.prompt,
      size: DEFAULT_IMAGE_SIZE,
      responseFormat: 'url',
      urls: [],
    });
  }

  function generateFromTemplate() {
    if (!queueHasRoom || submitLocked) {
      setTemplateSubmitState('blocked');
      window.setTimeout(() => setTemplateSubmitState('idle'), 1400);
      return;
    }
    const accepted = submit(
      {
        type: 'text2img',
        prompt: currentTemplate.prompt,
        size: DEFAULT_IMAGE_SIZE,
        responseFormat: 'url',
        source: 'prompt-template',
        templateId: currentTemplate.id,
        templateSlug: currentTemplate.slug,
        templateCategorySlug: currentTemplate.categorySlug,
      },
      {
        onTaskAccepted: () => {
          setTemplateSubmitState('accepted');
          window.setTimeout(() => setTemplateSubmitState('idle'), 1400);
        },
      }
    );
    if (!accepted) {
      setTemplateSubmitState('blocked');
      window.setTimeout(() => setTemplateSubmitState('idle'), 1400);
    }
  }

  return (
    <article className="prompt-template-detail">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content={
            en
              ? `${currentTemplate.title}, ${localizedCategoryName}, AI prompt, image generation prompt`
              : `${currentTemplate.title}, ${localizedCategoryName}, AI prompt, AI 图片提示词`
          }
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        {currentTemplate.imageUrl ? <meta property="og:image" content={currentTemplate.imageUrl} /> : null}
        <meta name="twitter:card" content={currentTemplate.imageUrl ? 'summary_large_image' : 'summary'} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>
      </Head>

      <Section>
        <Container className="prompt-template-detail-hero">
          <div className="prompt-template-detail-copy">
            <Eyebrow>Prompt</Eyebrow>
            <div className="prompt-template-breadcrumb">
              <Link to="/prompt-templates">{en ? 'Prompt Library' : '提示词库'}</Link>
              <span>/</span>
              <Link to={`/prompt-templates/${category.slug}`}>{localizedCategoryName}</Link>
            </div>
            <h1>{currentTemplate.title}</h1>
            <p className="ui-lead">{description}</p>
            <div className="prompt-template-detail-actions">
              <Button variant="primary" onClick={copyPrompt}>
                {copied ? (en ? 'Copied' : '已复制') : en ? 'Copy prompt' : '复制 Prompt'}
              </Button>
              <ButtonLink to="/image" variant="ghost" onClick={useTemplate}>
                {en ? 'Use in image generator' : '用此提示词生成图片'}
              </ButtonLink>
              <Button variant="ghost" onClick={generateFromTemplate} disabled={submitLocked}>
                {templateSubmitState === 'accepted'
                  ? en ? 'Task added' : '已加入任务'
                  : templateSubmitState === 'blocked'
                    ? en ? 'Queue is full' : '任务队列已满'
                    : en ? 'Generate directly' : '直接生成图片'}
              </Button>
            </div>
          </div>
          <Card className="prompt-template-detail-media" as="figure">
            {currentTemplate.imageUrl ? (
              <img src={currentTemplate.imageUrl} alt={currentTemplate.title} decoding="async" fetchPriority="high" />
            ) : (
              <span>{en ? 'IMAGE PENDING' : '图片待生成'}</span>
            )}
          </Card>
        </Container>
      </Section>

      <Section>
        <Container className="prompt-template-detail-grid">
          <Card className="prompt-template-prompt-block">
            <div className="prompt-template-card-meta">
              <Badge>{localizedCategoryName}</Badge>
              <span>{rawCategoryName(currentTemplate.rawCategory, language)}</span>
            </div>
            <div className="prompt-template-prompt-heading">
              <h2>{en ? 'Full prompt' : '完整提示词'}</h2>
              <Button size="sm" variant="ghost" onClick={onTranslatePrompt} disabled={translating}>
                {translating ? (en ? 'Translating…' : '翻译中…') : translateLabel}
              </Button>
            </div>
            <p>{currentTemplate.prompt}</p>
            {translationError ? <p className="prompt-template-translation-error">{translationError}</p> : null}
            {translatedPrompt ? (
              <div className="prompt-template-translation">
                <div className="prompt-template-prompt-heading">
                  <h2>{targetLanguage === 'zh' ? (en ? 'Chinese translation' : '中文翻译') : (en ? 'English translation' : '英文翻译')}</h2>
                  <Button size="sm" variant="ghost" onClick={copyTranslatedPrompt}>
                    {translatedCopied ? (en ? 'Copied' : '已复制') : en ? 'Copy translation' : '复制翻译'}
                  </Button>
                </div>
                <p>{translatedPrompt}</p>
              </div>
            ) : null}
          </Card>
          <Card className="prompt-template-maintenance-block" as="aside">
            <h2>{en ? 'Prompt info' : '提示词信息'}</h2>
            <dl>
              <div>
                <dt>{en ? 'Category' : '分类'}</dt>
                <dd>{localizedCategoryName}</dd>
              </div>
              <div>
                <dt>{en ? 'Image status' : '图片状态'}</dt>
                <dd>{currentTemplate.imageStatus === 'done' ? (en ? 'Ready' : '已生成') : (en ? 'Pending' : '待生成')}</dd>
              </div>
              <div>
                <dt>{en ? 'Source line' : '来源行号'}</dt>
                <dd>{currentTemplate.sourceLine || (en ? 'Unknown' : '未知')}</dd>
              </div>
            </dl>
          </Card>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="prompt-template-results-head">
            <h2>{en ? 'Related prompts' : '同类提示词'}</h2>
            <Link to={`/prompt-templates/${category.slug}`}>{en ? 'View all' : '查看全部'}</Link>
          </div>
          <div className="prompt-template-related-grid">
            {related.map((item) => (
              <Link key={item.id} to={`/prompt-templates/${item.categorySlug}/${item.slug}`}>
                {item.title}
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </article>
  );
}
