'use strict';

const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'web', 'dist');
const assetsDir = path.join(distDir, 'assets');

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, out);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      out.push(fullPath);
    }
  }
  return out;
}

function findAppCss() {
  if (!fs.existsSync(assetsDir)) return null;
  return fs
    .readdirSync(assetsDir)
    .filter((name) => /^app-.+\.css$/.test(name))
    .map((name) => path.join(assetsDir, name))
    .sort((a, b) => fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs)[0] || null;
}

const cssFile = findAppCss();
if (!cssFile) {
  console.warn('No app CSS asset found; skipped CSS inlining.');
  process.exit(0);
}

const cssHref = `/assets/${path.basename(cssFile)}`;
const criticalCss = `:root{color-scheme:dark;--bg:#0b1020;--surface:#131b2f;--surface-warm:#182343;--fg:#f8fafc;--fg-2:#cbd5e1;--muted:#8ea0b8;--accent:#60a5fa;--accent-on:#06111f;--border:#293653;--border-soft:#1e2a43;--radius-lg:20px;--container-max:1200px;--container-gutter-desktop:36px;--topbar-h:72px}*{box-sizing:border-box}html,body,#root{width:100%;min-width:0}body{margin:0;color:var(--fg);font-family:Inter,system-ui,-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;font-size:15px;line-height:1.55;background:#0b1020;overflow-x:hidden;-webkit-font-smoothing:antialiased}.app{position:relative;min-height:100vh}.topbar{position:sticky;top:0;z-index:50;border-bottom:1px solid var(--border-soft);background:rgba(11,16,32,.88)}.topbar-inner{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:14px 0}.ui-container{width:min(100% - 72px,var(--container-max));margin-inline:auto}.brand,.nav,.utility{min-height:44px}.brand{display:inline-flex;align-items:center;gap:12px;color:var(--fg);text-decoration:none}.brand-mark{width:38px;height:38px;border:1px solid var(--border);border-radius:12px;background:var(--surface);flex-shrink:0}.nav{display:flex;align-items:center;gap:8px}.nav a,.nav-action{min-height:44px;border-radius:999px}.marquee{min-height:34px;overflow:hidden;border-bottom:1px solid var(--border-soft)}main{position:relative;z-index:1;padding:28px var(--container-gutter-desktop)}.page{display:grid;grid-template-columns:minmax(0,1.02fr) minmax(320px,.98fr);gap:20px;max-width:var(--container-max);margin:0 auto;align-items:start}.panel{min-width:0;border:1px solid var(--border);border-radius:var(--radius-lg);background:var(--surface);padding:24px}.panel h2{margin:0 0 4px;font-size:22px}.panel h3{margin:0 0 16px;font-size:17px}.eyebrow{margin:0 0 10px;color:var(--accent);font-size:12px;font-weight:700;letter-spacing:.16em;text-transform:uppercase}.output{min-height:300px}.history-deferred-placeholder{min-height:260px;border:1px solid var(--border);border-radius:12px;background:var(--surface-warm)}@media(max-width:900px){.ui-container{width:min(100% - 48px,var(--container-max))}.page{grid-template-columns:1fr}main{padding:20px 24px}}@media(max-width:640px){.ui-container{width:min(100% - 32px,var(--container-max))}main{padding:16px}.panel{padding:16px}.nav{overflow-x:auto}}`;
const styleTag = `<style data-critical-css>${criticalCss}</style>`;
const stylesheetTag = [
  `<link rel="preload" as="style" href="${cssHref}">`,
  `<link rel="stylesheet" href="${cssHref}" media="print" onload="this.media='all'">`,
  `<noscript><link rel="stylesheet" href="${cssHref}"></noscript>`,
].join('');
const stylesheetPattern = new RegExp(
  `\\s*<link\\s+rel="stylesheet"[^>]+href="${cssHref.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*>`,
  'g'
);

let updated = 0;
for (const htmlFile of walk(distDir)) {
  const html = fs.readFileSync(htmlFile, 'utf8');
  if (!html.includes(cssHref) || html.includes('data-critical-css')) continue;
  const next = html.replace(stylesheetPattern, `\n    ${styleTag}\n    ${stylesheetTag}`);
  if (next !== html) {
    fs.writeFileSync(htmlFile, next);
    updated += 1;
  }
}

console.log(`Inlined critical CSS and deferred ${path.basename(cssFile)} in ${updated} HTML files.`);
