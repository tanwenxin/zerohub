import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import type { PromptTemplate } from '../data/promptTemplates.generated';
import { categoryName } from '../data/promptTemplateLabels';
import { promptTemplateImageSources } from '../utils/promptTemplateImages';
import { usePreferences } from '../usePreferences';
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

function useVisibleImage() {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) return undefined;
    const node = ref.current;
    if (!node) return undefined;
    if (!('IntersectionObserver' in window)) {
      const timer = globalThis.setTimeout(() => setVisible(true), 0);
      return () => globalThis.clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.01 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  return [ref, visible] as const;
}

export function PromptTemplateCard({ template }: PromptTemplateCardProps) {
  const { language } = usePreferences();
  const en = language === 'en';
  const detailPath = `/prompt-templates/${template.categorySlug}/${template.slug}`;
  const imageSources = promptTemplateImageSources(template, 'list');
  const [mediaRef, shouldLoadImage] = useVisibleImage();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card className="prompt-template-card" as="article">
      <Link ref={mediaRef} className="prompt-template-card-media" to={detailPath} aria-label={template.title}>
        {imageSources.fallbackSrc && shouldLoadImage ? (
          <picture>
            {imageSources.avifSrcSet ? (
              <source type="image/avif" srcSet={imageSources.avifSrcSet} sizes={imageSources.sizes} />
            ) : null}
            {imageSources.webpSrcSet ? (
              <source type="image/webp" srcSet={imageSources.webpSrcSet} sizes={imageSources.sizes} />
            ) : null}
            <img
              src={imageSources.fallbackSrc}
              srcSet={imageSources.fallbackSrcSet}
              sizes={imageSources.sizes}
              width={640}
              height={480}
              alt={template.title}
              className={imageLoaded ? 'is-loaded' : ''}
              loading="lazy"
              decoding="async"
              onLoad={() => setImageLoaded(true)}
            />
          </picture>
        ) : imageSources.fallbackSrc ? (
          <span className="prompt-template-image-placeholder is-loading">{fallbackLabel(template.title)}</span>
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
