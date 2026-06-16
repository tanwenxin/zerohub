import './HomePage.css';
import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import { getPublicGenerationStats, type PublicGenerationStats } from '../api/client';
import { Badge, ButtonLink, Card, Container, Eyebrow, Grid, Section } from '../components/ui';
import { usePreferences } from '../usePreferences';

const HOME_STATS_DAYS = 7;

function numberText(value: number): string {
  return new Intl.NumberFormat().format(value);
}

function percent(value: number): string {
  if (!Number.isFinite(value)) return '0%';
  return `${Math.round(value * 100)}%`;
}

function categoryTotal(stats: PublicGenerationStats | null, category: 'image' | 'video'): number {
  return stats?.byCategory.find((item) => item.key === category)?.total || 0;
}

function HomeStatsConsole({ stats, loading }: { stats: PublicGenerationStats | null; loading: boolean }) {
  const { t } = usePreferences();
  const maxDaily = useMemo(() => {
    if (!stats?.daily.length) return 1;
    return Math.max(1, ...stats.daily.map((item) => item.total));
  }, [stats]);

  return (
    <aside className="console stats-console" aria-label={t('home.stats.aria')}>
      <span className="route-label">{t('home.stats.route')}</span>
      <div className="stats-console-head">
        <Eyebrow>{t('home.stats.eyebrow')}</Eyebrow>
        <strong>{loading && !stats ? '...' : numberText(stats?.summary.total || 0)}</strong>
        <p>{t('home.stats.subtitle')}</p>
      </div>
      <div className="home-trend" aria-label={t('home.stats.trend')}>
        {(stats?.daily || []).map((item) => (
          <span className="home-trend-day" key={item.date} title={`${item.date}: ${item.total}`}>
            <i style={{ height: item.total ? `${Math.max(8, (item.total / maxDaily) * 100)}%` : '3px' }} />
            <small>{item.date.slice(5)}</small>
          </span>
        ))}
      </div>
      <div className="telemetry stats-telemetry">
        <div className="metric">
          <span>{t('stats.successRate')}</span>
          <strong>{percent(stats?.summary.successRate || 0)}</strong>
        </div>
        <div className="metric">
          <span>{t('stats.image')}</span>
          <strong>{numberText(categoryTotal(stats, 'image'))}</strong>
        </div>
        <div className="metric">
          <span>{t('stats.video')}</span>
          <strong>{numberText(categoryTotal(stats, 'video'))}</strong>
        </div>
      </div>
    </aside>
  );
}

function HomeWorkflowBlock() {
  const { t } = usePreferences();

  return (
    <div className="home-workflow-block">
      <div className="mission-feed" aria-label={t('home.feed.label')}>
        <div className="feed-row">
          <code>STEP 01</code>
          <strong>{t('home.feed.step1')}</strong>
          <Badge tone="ok">{t('home.feed.step1Tag')}</Badge>
        </div>
        <div className="feed-row">
          <code>STEP 02</code>
          <strong>{t('home.feed.step2')}</strong>
          <Badge>{t('home.feed.step2Tag')}</Badge>
        </div>
        <div className="feed-row">
          <code>STEP 03</code>
          <strong>{t('home.feed.step3')}</strong>
          <Badge tone="warn">{t('home.feed.step3Tag')}</Badge>
        </div>
      </div>

      <div className="directive-strip" aria-label={t('home.directive.label')}>
        <div className="directive-card">
          <strong>{t('home.directive.card1.title')}</strong>
          <span>{t('home.directive.card1.body')}</span>
        </div>
        <div className="directive-card">
          <strong>{t('home.directive.card2.title')}</strong>
          <span>{t('home.directive.card2.body')}</span>
        </div>
        <div className="directive-card">
          <strong>{t('home.directive.card3.title')}</strong>
          <span>{t('home.directive.card3.body')}</span>
        </div>
      </div>
    </div>
  );
}

export function HomePage() {
  const { t } = usePreferences();
  const [stats, setStats] = useState<PublicGenerationStats | null>(null);
  const [statsLoading, setStatsLoading] = useState(true);

  useEffect(() => {
    const timerId = globalThis.setTimeout(() => {
      getPublicGenerationStats(HOME_STATS_DAYS)
        .then(setStats)
        .catch(() => setStats(null))
        .finally(() => setStatsLoading(false));
    }, 0);
    return () => globalThis.clearTimeout(timerId);
  }, []);

  return (
    <div className="home-page">
      {/* —— Hero / 创作控制塔 —— */}
      <Section>
        <Container className="home-hero">
          <div>
            <span className="brand-ribbon">{t('home.ribbon')}</span>
            <Eyebrow>{t('home.command.eyebrow')}</Eyebrow>
            <h1>{t('home.command.title')}</h1>
            <p className="ui-lead">{t('home.command.lead')}</p>
            <div className="home-hero-actions">
              <ButtonLink to="/image" variant="primary">
                {t('home.command.ctaImage')}
              </ButtonLink>
              <ButtonLink to="/video" variant="ghost">
                {t('home.command.ctaVideo')}
              </ButtonLink>
            </div>

            <section className="free-promise" aria-label={t('home.free.badge')}>
              <div>
                <h2>{t('home.free.title')}</h2>
                <p>{t('home.free.body')}</p>
              </div>
              <div className="free-promise-points">
                <span>{t('home.free.point1')}</span>
                <span>{t('home.free.point2')}</span>
                <span>{t('home.free.point3')}</span>
              </div>
            </section>
          </div>

          <HomeStatsConsole stats={stats} loading={statsLoading} />
        </Container>
      </Section>
      {/* —— 工作流信号 —— */}
      <Section>
        <Container className="director-grid">
          <Card as="aside" className="signal-panel" aria-label={t('home.signals.eyebrow')}>
            <div>
              <Eyebrow>{t('home.signals.eyebrow')}</Eyebrow>
              <h2>{t('home.signals.title')}</h2>
              <p>{t('home.signals.body')}</p>
            </div>
            <div className="signal-lane">
              <div className="signal-row">
                <span>Prompt</span>
                <div className="signal-bar">
                  <i style={{ '--v': '92%' } as CSSProperties} />
                </div>
                <strong>92</strong>
              </div>
              <div className="signal-row">
                <span>{t('home.surface.tile2.badge')}</span>
                <div className="signal-bar">
                  <i style={{ '--v': '88%' } as CSSProperties} />
                </div>
                <strong>88</strong>
              </div>
              <div className="signal-row">
                <span>{t('home.console.metric1')}</span>
                <div className="signal-bar">
                  <i style={{ '--v': '86%' } as CSSProperties} />
                </div>
                <strong>86</strong>
              </div>
            </div>
          </Card>
          <div className="lens-stack">
            <article className="lens-card">
              <Badge tone="ok">{t('home.lens.card1.badge')}</Badge>
              <h3>{t('home.lens.card1.title')}</h3>
              <p>{t('home.lens.card1.body')}</p>
            </article>
            <article className="lens-card">
              <Badge>{t('home.lens.card2.badge')}</Badge>
              <h3>{t('home.lens.card2.title')}</h3>
              <p>{t('home.lens.card2.body')}</p>
            </article>
            <article className="lens-card">
              <Badge tone="warn">{t('home.lens.card3.badge')}</Badge>
              <h3>{t('home.lens.card3.title')}</h3>
              <p>{t('home.lens.card3.body')}</p>
            </article>
          </div>
        </Container>
      </Section>

      {/* —— 表层地图 —— */}
      <Section className="surface-map">
        <Container>
          <Eyebrow>{t('home.surface.eyebrow')}</Eyebrow>
          <h2>{t('home.surface.title')}</h2>
          <HomeWorkflowBlock />
          <Grid cols={3}>
            <Card variant="tile" as="article">
              <Badge tone="ok">{t('home.surface.tile1.badge')}</Badge>
              <h3>{t('home.surface.tile1.title')}</h3>
              <p>{t('home.surface.tile1.body')}</p>
            </Card>
            <Card variant="tile" as="article">
              <Badge>{t('home.surface.tile2.badge')}</Badge>
              <h3>{t('home.surface.tile2.title')}</h3>
              <p>{t('home.surface.tile2.body')}</p>
            </Card>
            <Card variant="tile" as="article">
              <Badge tone="warn">{t('home.surface.tile3.badge')}</Badge>
              <h3>{t('home.surface.tile3.title')}</h3>
              <p>{t('home.surface.tile3.body')}</p>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* —— 品牌系统 —— */}
      <Section>
        <Container className="brand-system">
          <Card as="aside">
            <Eyebrow>{t('home.brand.eyebrow')}</Eyebrow>
            <h2>{t('home.brand.title')}</h2>
            <p>{t('home.brand.body')}</p>
            <div className="brand-principles" aria-label={t('home.brand.eyebrow')}>
              <div className="brand-principle">
                <strong>{t('home.brand.principle1.title')}</strong>
                <span>{t('home.brand.principle1.body')}</span>
              </div>
              <div className="brand-principle">
                <strong>{t('home.brand.principle2.title')}</strong>
                <span>{t('home.brand.principle2.body')}</span>
              </div>
              <div className="brand-principle">
                <strong>{t('home.brand.principle3.title')}</strong>
                <span>{t('home.brand.principle3.body')}</span>
              </div>
            </div>
          </Card>
          <div className="brand-orb" aria-hidden="true">
            <div className="brand-core">
              <div>
                <Eyebrow>AGNES</Eyebrow>
                <strong>A</strong>
              </div>
            </div>
            <div className="brand-caption">
              <code>Symbol · Orbit Aperture</code>
              <p>{t('home.brand.caption')}</p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
