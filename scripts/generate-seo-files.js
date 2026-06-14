'use strict';

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const webDir = path.join(rootDir, 'web');
const webPublicDir = path.join(rootDir, 'web', 'public');

function readEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};
  return fs.readFileSync(filePath, 'utf8').split(/\r?\n/).reduce((acc, line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return acc;
    const match = /^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/.exec(trimmed);
    if (!match) return acc;
    const value = match[2].trim().replace(/^['"]|['"]$/g, '');
    acc[match[1]] = value;
    return acc;
  }, {});
}

const webEnv = {
  ...readEnvFile(path.join(webDir, '.env')),
  ...readEnvFile(path.join(webDir, '.env.local')),
};

const siteUrl = (process.env.VITE_SITE_URL || webEnv.VITE_SITE_URL || 'https://agnes-image-studio.xyz')
  .replace(/\/+$/, '');

const routes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/image', changefreq: 'weekly', priority: '0.9' },
  { path: '/video', changefreq: 'weekly', priority: '0.9' },
  { path: '/ai-image-generator', changefreq: 'weekly', priority: '0.86' },
  { path: '/ai-video-generator', changefreq: 'weekly', priority: '0.86' },
  { path: '/text-to-image', changefreq: 'weekly', priority: '0.82' },
  { path: '/image-to-image', changefreq: 'weekly', priority: '0.82' },
  { path: '/image-to-video', changefreq: 'weekly', priority: '0.82' },
  { path: '/multi-image-composition', changefreq: 'weekly', priority: '0.80' },
  { path: '/keyframe-animation', changefreq: 'weekly', priority: '0.78' },
  { path: '/prompt-optimizer', changefreq: 'monthly', priority: '0.74' },
  { path: '/image-to-prompt', changefreq: 'monthly', priority: '0.72' },
  { path: '/guides', changefreq: 'monthly', priority: '0.7' },
  { path: '/guides/prompt', changefreq: 'monthly', priority: '0.68' },
  { path: '/guides/commercial-use', changefreq: 'monthly', priority: '0.66' },
  { path: '/guides/safety', changefreq: 'monthly', priority: '0.66' },
  { path: '/about', changefreq: 'monthly', priority: '0.55' },
  { path: '/privacy', changefreq: 'monthly', priority: '0.5' },
  { path: '/terms', changefreq: 'monthly', priority: '0.5' },
  { path: '/contact', changefreq: 'monthly', priority: '0.5' },
];

function absoluteUrl(routePath) {
  return `${siteUrl}${routePath === '/' ? '/' : routePath}`;
}

function xmlEscape(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => `  <url>
    <loc>${xmlEscape(absoluteUrl(route.path))}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`)
  .join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${absoluteUrl('/sitemap.xml')}
`;

fs.mkdirSync(webPublicDir, { recursive: true });
fs.writeFileSync(path.join(webPublicDir, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(webPublicDir, 'robots.txt'), robots);

console.log(`Generated sitemap.xml and robots.txt for ${siteUrl}`);
