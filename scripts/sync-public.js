'use strict';

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const webDir = path.join(rootDir, 'web');
const distDir = path.join(rootDir, 'web', 'dist');
const publicDir = path.join(rootDir, 'public');

function readEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return { values: {}, loaded: false };
  const values = fs.readFileSync(filePath, 'utf8').split(/\r?\n/).reduce((acc, line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return acc;
    const match = /^(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/.exec(trimmed);
    if (!match) return acc;
    const value = match[2].trim().replace(/^['"]|['"]$/g, '').trim();
    acc[match[1]] = value;
    return acc;
  }, {});
  return { values, loaded: true };
}

function readEnvFiles(filePaths) {
  const loadedFiles = [];
  const values = {};
  for (const filePath of filePaths) {
    const env = readEnvFile(filePath);
    if (!env.loaded) continue;
    loadedFiles.push(filePath);
    Object.assign(values, env.values);
  }
  return { values, loadedFiles };
}

// 仅构建期使用、运行时不引用的中间产物，不发布到生产静态目录。
// 注意：static-loader-data-manifest-*.json 会被运行时 fetch（data router loader），必须保留，不在此列。
const EXCLUDED_TOP_LEVEL = new Set(['.vite']);

function copyDir(src, dest, isRoot = false) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    if (isRoot && EXCLUDED_TOP_LEVEL.has(entry.name)) continue;
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
  if (!value) return false;
  const normalized = value.startsWith('pub-') ? value : `pub-${value}`;
  fs.writeFileSync(
    path.join(publicDir, 'ads.txt'),
    `google.com, ${normalized}, DIRECT, f08c47fec0942fa0\n`,
    'utf8'
  );
  return true;
}

if (!fs.existsSync(path.join(distDir, 'index.html'))) {
  throw new Error('web/dist/index.html not found. Run npm run build:web first.');
}

fs.rmSync(publicDir, { recursive: true, force: true });
copyDir(distDir, publicDir, true);

const { values: envValues, loadedFiles } = readEnvFiles([
  path.join(rootDir, '.env'),
  path.join(rootDir, '.env.local'),
  path.join(rootDir, 'server', '.env'),
  path.join(rootDir, 'server', '.env.local'),
  path.join(webDir, '.env'),
  path.join(webDir, '.env.local'),
]);

const siteUrl = normalizeSiteUrl(process.env.VITE_SITE_URL || envValues.VITE_SITE_URL || envValues.SITE_URL);
absolutizeSitemap(publicDir, siteUrl);
updateRobots(publicDir, siteUrl);
const publisherId =
  process.env.ADSENSE_PUBLISHER_ID ||
  process.env.VITE_ADSENSE_PUBLISHER_ID ||
  envValues.ADSENSE_PUBLISHER_ID ||
  envValues.VITE_ADSENSE_PUBLISHER_ID;
const wroteAdsTxt = writeAdsTxt(publicDir, publisherId);

console.log(`Synced ${distDir} -> ${publicDir}`);
console.log(`Loaded env files: ${loadedFiles.length ? loadedFiles.join(', ') : 'none'}`);
console.log(wroteAdsTxt ? `Wrote ${path.join(publicDir, 'ads.txt')}` : 'Skipped ads.txt: ADSENSE_PUBLISHER_ID or VITE_ADSENSE_PUBLISHER_ID is empty');
