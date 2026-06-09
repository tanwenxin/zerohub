import { usePreferences } from '../usePreferences';

export function ContactPage() {
  const { t } = usePreferences();

  return (
    <article className="legal-page">
      <p className="eyebrow">{t('contact.eyebrow')}</p>
      <h1>{t('contact.title')}</h1>
      <p className="legal-lead">{t('contact.lead')}</p>

      <section className="contact-card">
        <h2>{t('contact.brand.title')}</h2>
        <p>{t('app.brand')}</p>
      </section>

      <section className="contact-card">
        <h2>{t('contact.email.title')}</h2>
        <p>
          <a href="mailto:support@agnes-image-studio.example">support@agnes-image-studio.example</a>
        </p>
        <p className="hint">{t('contact.email.note')}</p>
      </section>
    </article>
  );
}
