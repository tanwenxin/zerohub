import { Link, Navigate, useLocation } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { Badge, ButtonLink, Card, Container, Eyebrow, Grid, Section } from '../components/ui';
import { getSeoLandingPageByPath, SEO_LANDING_PAGES } from '../seoLandingPages';
import { usePreferences } from '../usePreferences';

const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://agnes-image-studio.xyz').replace(/\/+$/, '');

export function SeoLandingPage() {
  const { language } = usePreferences();
  const location = useLocation();
  const page = getSeoLandingPageByPath(location.pathname);

  if (!page) return <Navigate to="/404" replace />;

  const content = page.content[language];
  const relatedPages = SEO_LANDING_PAGES.filter(
    (item) => item.path !== page.path && item.toolPath === page.toolPath
  ).slice(0, 3);
  const canonicalUrl = `${SITE_URL}${page.path}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="seo-page">
      <Head>
        <title>{content.title}</title>
        <meta name="description" content={content.description} />
        <meta name="keywords" content={page.keywords.join(', ')} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={content.title} />
        <meta property="og:description" content={content.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={content.title} />
        <meta name="twitter:description" content={content.description} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Head>
      <Section>
        <Container className="seo-hero">
          <div>
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <h1>{content.h1}</h1>
            <p className="ui-lead">{content.lead}</p>
            <div className="seo-actions">
              <ButtonLink to={page.toolPath} variant="primary">
                {content.primaryCta}
              </ButtonLink>
              <ButtonLink to={page.toolPath === '/image' ? '/video' : '/image'} variant="ghost">
                {content.secondaryCta}
              </ButtonLink>
            </div>
          </div>

          <Card className="seo-keywords" as="aside">
            <span>{language === 'zh' ? '搜索覆盖' : 'Search coverage'}</span>
            <div>
              {page.keywords.map((keyword) => (
                <Badge key={keyword}>{keyword}</Badge>
              ))}
            </div>
          </Card>
        </Container>
      </Section>

      <Section>
        <Container>
          <Grid cols={3}>
            {content.sections.map((section) => (
              <Card key={section.title} variant="tile" as="article">
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container className="seo-split">
          <Card as="section">
            <Eyebrow>{language === 'zh' ? '适用场景' : 'Use cases'}</Eyebrow>
            <ul className="seo-list">
              {content.useCases.map((useCase) => (
                <li key={useCase}>{useCase}</li>
              ))}
            </ul>
          </Card>

          <Card as="section">
            <Eyebrow>{language === 'zh' ? '常见问题' : 'FAQ'}</Eyebrow>
            <div className="seo-faq">
              {content.faqs.map((faq) => (
                <article key={faq.question}>
                  <h2>{faq.question}</h2>
                  <p>{faq.answer}</p>
                </article>
              ))}
            </div>
          </Card>
        </Container>
      </Section>

      <Section>
        <Container>
          <Card className="seo-related" as="section">
            <Eyebrow>{language === 'zh' ? '相关长尾入口' : 'Related long-tail pages'}</Eyebrow>
            <div>
              {relatedPages.map((item) => (
                <Link key={item.path} to={item.path}>
                  {item.content[language].h1}
                </Link>
              ))}
            </div>
          </Card>
        </Container>
      </Section>
    </div>
  );
}
