import { usePreferences } from '../usePreferences';

export function TermsPage() {
  const { t } = usePreferences();

  return (
    <article className="legal-page">
      <p className="eyebrow">{t('terms.eyebrow')}</p>
      <h1>{t('terms.title')}</h1>
      <p className="legal-lead">{t('terms.lead')}</p>

      <section>
        <h2>{t('terms.service.title')}</h2>
        <p>{t('terms.service.body')}</p>
      </section>

      <section>
        <h2>{t('terms.user.title')}</h2>
        <p>{t('terms.user.body')}</p>
      </section>

      <section>
        <h2>{t('terms.prohibited.title')}</h2>
        <p>{t('terms.prohibited.body')}</p>
      </section>

      <section>
        <h2>{t('terms.output.title')}</h2>
        <p>{t('terms.output.body')}</p>
      </section>
    </article>
  );
}
