import { usePreferences } from '../usePreferences';

export function HomePage() {
  const { t } = usePreferences();

  const features = [
    {
      title: t('home.feature.image.title'),
      body: t('home.feature.image.body'),
      href: '/image',
      cta: t('home.cta.image'),
    },
    {
      title: t('home.feature.video.title'),
      body: t('home.feature.video.body'),
      href: '/video',
      cta: t('home.cta.video'),
    },
    {
      title: t('home.feature.workflow.title'),
      body: t('home.feature.workflow.body'),
      href: '/privacy',
      cta: t('home.cta.privacy'),
    },
  ];

  const steps = [
    t('home.step.prompt'),
    t('home.step.media'),
    t('home.step.settings'),
    t('home.step.result'),
  ];

  return (
    <div className="landing-page">
      <section className="hero">
        <p className="eyebrow">{t('home.eyebrow')}</p>
        <h1>{t('home.title')}</h1>
        <p className="hero-copy">{t('home.subtitle')}</p>
        <div className="hero-actions">
          <a className="btn-primary" href="/image">
            {t('home.cta.image')}
          </a>
          <a className="btn-secondary" href="/video">
            {t('home.cta.video')}
          </a>
        </div>
      </section>

      <section className="landing-grid" aria-label={t('home.featuresLabel')}>
        {features.map((feature) => (
          <article className="feature-card" key={feature.title}>
            <h2>{feature.title}</h2>
            <p>{feature.body}</p>
            <a href={feature.href}>{feature.cta}</a>
          </article>
        ))}
      </section>

      <section className="panel landing-section">
        <h2>{t('home.workflow.title')}</h2>
        <ol className="step-list">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="compliance-note">
        <h2>{t('compliance.title')}</h2>
        <p>{t('compliance.aiDisclosure')}</p>
        <p>{t('compliance.rights')}</p>
        <p>{t('compliance.noGuarantee')}</p>
      </section>
    </div>
  );
}
