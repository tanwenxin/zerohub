import { usePreferences } from '../usePreferences';

export function PrivacyPage() {
  const { t } = usePreferences();

  return (
    <article className="legal-page">
      <p className="eyebrow">{t('privacy.eyebrow')}</p>
      <h1>{t('privacy.title')}</h1>
      <p className="legal-lead">{t('privacy.lead')}</p>

      <section>
        <h2>{t('privacy.collect.title')}</h2>
        <p>{t('privacy.collect.body')}</p>
      </section>

      <section>
        <h2>{t('privacy.use.title')}</h2>
        <p>{t('privacy.use.body')}</p>
      </section>

      <section>
        <h2>{t('privacy.thirdParty.title')}</h2>
        <p>{t('privacy.thirdParty.body')}</p>
      </section>

      <section>
        <h2>{t('privacy.control.title')}</h2>
        <p>{t('privacy.control.body')}</p>
      </section>
    </article>
  );
}
