import { usePreferences } from '../usePreferences';

const contactEmail = (import.meta.env.VITE_CONTACT_EMAIL as string | undefined)?.trim() || 'hi@aigeniv.xyz';
const serviceOwner = (import.meta.env.VITE_SERVICE_OWNER as string | undefined)?.trim();

export function ContactPage() {
  const { t } = usePreferences();

  return (
    <article className="legal-page">
      <p className="eyebrow">{t('contact.eyebrow')}</p>
      <h1>{t('contact.title')}</h1>
      <p className="legal-lead">{t('contact.lead')}</p>

      <section className="contact-card">
        <h2>{t('contact.brand.title')}</h2>
        <p>{serviceOwner || t('contact.owner.missing')}</p>
      </section>

      <section className="contact-card">
        <h2>{t('contact.email.title')}</h2>
        {contactEmail ? (
          <p>
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </p>
        ) : (
          <p>{t('contact.email.missing')}</p>
        )}
        {!contactEmail && <p className="hint">{t('contact.email.note')}</p>}
      </section>
    </article>
  );
}
