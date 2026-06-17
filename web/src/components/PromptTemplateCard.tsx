import { Link } from 'react-router-dom';
import type { PromptTemplate } from '../data/promptTemplates.generated';
import { categoryName } from '../data/promptTemplateLabels';
import { promptTemplateImageSources } from '../utils/promptTemplateImages';
import { usePreferences } from '../usePreferences';
import { LazyImage } from './LazyMedia';
import { Badge, ButtonLink, Card } from './ui';

interface PromptTemplateCardProps {
  template: PromptTemplate;
}

function fallbackLabel(title: string): string {
  return title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 6);
}

export function PromptTemplateCard({ template }: PromptTemplateCardProps) {
  const { language } = usePreferences();
  const en = language === 'en';
  const detailPath = `/prompt-templates/${template.categorySlug}/${template.slug}`;
  const imageSources = promptTemplateImageSources(template, 'list');
  const pictureSources = [
    imageSources.avifSrcSet ? { type: 'image/avif', srcSet: imageSources.avifSrcSet } : null,
    imageSources.webpSrcSet ? { type: 'image/webp', srcSet: imageSources.webpSrcSet } : null,
  ].filter((source): source is { type: string; srcSet: string } => Boolean(source));
  const placeholder = <span className="prompt-template-image-placeholder is-loading">{fallbackLabel(template.title)}</span>;

  return (
    <Card className="prompt-template-card" as="article">
      <Link className="prompt-template-card-media" to={detailPath} aria-label={template.title}>
        {imageSources.fallbackSrc ? (
          <LazyImage
            src={imageSources.fallbackSrc}
            srcSet={imageSources.fallbackSrcSet}
            sources={pictureSources}
            sizes={imageSources.sizes}
            width={640}
            height={480}
            alt={template.title}
            aspectRatio="4 / 3"
            className="prompt-template-card-lazy"
            placeholder={placeholder}
          />
        ) : (
          <span className="prompt-template-image-placeholder">{fallbackLabel(template.title)}</span>
        )}
      </Link>
      <div className="prompt-template-card-body">
        <div className="prompt-template-card-meta">
          <Badge>{categoryName(template.categorySlug, template.category, language)}</Badge>
          <span>{template.imageStatus === 'done' ? (en ? 'IMAGE READY' : '图片已生成') : (en ? 'PROMPT ONLY' : '仅提示词')}</span>
        </div>
        <h2>
          <Link to={detailPath}>{template.title}</Link>
        </h2>
        <p>{template.prompt}</p>
        <div className="prompt-template-card-actions">
          <ButtonLink to={detailPath} size="sm" variant="ghost">
            {en ? 'View details' : '查看详情'}
          </ButtonLink>
        </div>
      </div>
    </Card>
  );
}
