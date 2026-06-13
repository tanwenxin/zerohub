import { Link } from 'react-router-dom';
import { usePreferences } from '../usePreferences';

export function GuidesPage() {
  const { language } = usePreferences();
  const en = language === 'en';

  return (
    <article className="legal-page">
      <p className="eyebrow">{en ? 'Guides' : '指南'}</p>
      <h1>{en ? 'AI visual generation guides' : 'AI 视觉生成指南'}</h1>
      <p className="legal-lead">
        {en
          ? 'Practical notes for writing prompts, reviewing generated media, and using outputs responsibly.'
          : '围绕提示词编写、生成结果审查和负责任使用输出内容的实用说明。'}
      </p>

      <section className="guide-list">
        <Link to="/guides/prompt">
          <strong>{en ? 'Prompt writing checklist' : '提示词编写清单'}</strong>
          <span>{en ? 'Scene, subject, style, constraints, and review intent.' : '覆盖场景、主体、风格、约束和审查目的。'}</span>
        </Link>
        <Link to="/guides/commercial-use">
          <strong>{en ? 'Commercial use review' : '商用前审查流程'}</strong>
          <span>{en ? 'Rights, likeness, trademark, and ad platform checks.' : '核验版权、肖像、商标和广告平台要求。'}</span>
        </Link>
        <Link to="/guides/safety">
          <strong>{en ? 'Safety and prohibited content' : '安全与禁止内容'}</strong>
          <span>{en ? 'How to avoid unsafe or policy-sensitive generation requests.' : '避免不安全或政策敏感生成请求。'}</span>
        </Link>
      </section>
    </article>
  );
}
