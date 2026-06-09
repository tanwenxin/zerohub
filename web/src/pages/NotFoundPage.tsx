import { usePreferences } from '../usePreferences';

export function NotFoundPage() {
  const { t } = usePreferences();

  return (
    <section className="not-found">
      <p className="eyebrow">{t('notFound.eyebrow')}</p>
      <h1>{t('notFound.title')}</h1>
      <p>{t('notFound.body')}</p>
      <div className="hero-actions">
        <a className="btn-primary" href="/">
          {t('nav.home')}
        </a>
        <a className="btn-secondary" href="/image">
          {t('nav.image')}
        </a>
        <a className="btn-secondary" href="/video">
          {t('nav.video')}
        </a>
      </div>
    </section>
  );
}
