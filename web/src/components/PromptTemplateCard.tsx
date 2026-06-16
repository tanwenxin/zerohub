import { Link } from 'react-router-dom';
import type { PromptTemplate } from '../data/promptTemplates.generated';
import { categoryName } from '../data/promptTemplateLabels';
import { usePreferences } from '../usePreferences';
import { Badge, ButtonLink, Card } from './ui';

interface PromptTemplateCardProps {
  template: PromptTemplate;
  priority?: boolean;
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

export function PromptTemplateCard({ template, priority = false }: PromptTemplateCardProps) {
  const { language } = usePreferences();
  const en = language === 'en';
  const detailPath = `/prompt-templates/${template.categorySlug}/${template.slug}`;
  return (
    <Card className="prompt-template-card" as="article">
      <Link className="prompt-template-card-media" to={detailPath} aria-label={template.title}>
        {template.imageUrl ? (
          <img
            src={template.imageUrl}
            alt={template.title}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={priority ? 'high' : 'auto'}
          />
        ) : (
          <span>{fallbackLabel(template.title)}</span>
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
