'use strict';

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'web', 'dist');
const publicDir = path.join(rootDir, 'public');

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(from, to);
    } else if (entry.isFile()) {
      fs.copyFileSync(from, to);
    }
  }
}

function normalizeSiteUrl(value) {
  if (!value) return '';
  return String(value).trim().replace(/\/+$/, '');
}

function absolutizeSitemap(publicDir, siteUrl) {
  if (!siteUrl) return;
  const file = path.join(publicDir, 'sitemap.xml');
  if (!fs.existsSync(file)) return;
  const raw = fs.readFileSync(file, 'utf8');
  const next = raw.replace(/<loc>(\/[^<]*)<\/loc>/g, (_, route) => `<loc>${siteUrl}${route}</loc>`);
  fs.writeFileSync(file, next, 'utf8');
}

function updateRobots(publicDir, siteUrl) {
  const file = path.join(publicDir, 'robots.txt');
  if (!fs.existsSync(file) || !siteUrl) return;
  const raw = fs.readFileSync(file, 'utf8');
  const next = raw.replace(/^Sitemap:\s*.*$/m, `Sitemap: ${siteUrl}/sitemap.xml`);
  fs.writeFileSync(file, next, 'utf8');
}

function writeAdsTxt(publicDir, publisherId) {
  const value = String(publisherId || '').trim();
  if (!value) return;
  const normalized = value.startsWith('pub-') ? value : `pub-${value}`;
  fs.writeFileSync(
    path.join(publicDir, 'ads.txt'),
    `google.com, ${normalized}, DIRECT, f08c47fec0942fa0\n`,
    'utf8'
  );
}

if (!fs.existsSync(path.join(distDir, 'index.html'))) {
  throw new Error('web/dist/index.html not found. Run npm run build:web first.');
}

fs.rmSync(publicDir, { recursive: true, force: true });
copyDir(distDir, publicDir);

const siteUrl = normalizeSiteUrl(process.env.SITE_URL || process.env.VITE_SITE_URL);
absolutizeSitemap(publicDir, siteUrl);
updateRobots(publicDir, siteUrl);
writeAdsTxt(publicDir, process.env.ADSENSE_PUBLISHER_ID || process.env.VITE_ADSENSE_PUBLISHER_ID);

console.log(`Synced ${distDir} -> ${publicDir}`);
