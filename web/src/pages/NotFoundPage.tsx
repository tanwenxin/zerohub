import { Link } from 'react-router-dom';
import { usePreferences } from '../usePreferences';

export function NotFoundPage() {
  const { t } = usePreferences();

  return (
    <section className="not-found">
      <p className="eyebrow">{t('notFound.eyebrow')}</p>
      <h1>{t('notFound.title')}</h1>
      <p>{t('notFound.body')}</p>
      <div className="hero-actions">
        <Link className="btn-primary" to="/">
          {t('nav.home')}
        </Link>
        <Link className="btn-secondary" to="/image">
          {t('nav.image')}
        </Link>
        <Link className="btn-secondary" to="/video">
          {t('nav.video')}
        </Link>
      </div>
    </section>
  );
}
