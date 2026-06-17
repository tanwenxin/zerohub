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
const criticalCss = `:root{color-scheme:dark;--bg:#0b1020;--surface:#131b2f;--surface-warm:#182343;--fg:#f8fafc;--fg-2:#cbd5e1;--muted:#8ea0b8;--accent:#60a5fa;--accent-on:#06111f;--border:#293653;--border-soft:#1e2a43;--radius-lg:20px;--container-max:1200px;--container-gutter-desktop:36px;--topbar-h:72px}*{box-sizing:border-box}html,body,#root{width:100%;min-width:0}body{margin:0;color:var(--fg);font-family:Inter,system-ui,-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;font-size:15px;line-height:1.55;background:#0b1020;overflow-x:hidden;-webkit-font-smoothing:antialiased}.app{position:relative;min-height:100vh}.topbar{position:sticky;top:0;z-index:50;border-bottom:1px solid var(--border-soft);background:rgba(11,16,32,.88)}.topbar-inner{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:14px 0}.ui-container{width:min(100% - 72px,var(--container-max));margin-inline:auto}.brand,.nav,.utility{min-height:44px}.brand{display:inline-flex;align-items:center;gap:12px;color:var(--fg);text-decoration:none}.brand-mark{width:38px;height:38px;border:1px solid var(--border);border-radius:12px;background:var(--surface);flex-shrink:0}.nav{display:flex;align-items:center;gap:8px}.nav a,.nav-action{min-height:44px;border-radius:999px}main{position:relative;z-index:1;padding:28px var(--container-gutter-desktop)}.page{display:grid;grid-template-columns:minmax(0,1.02fr) minmax(320px,.98fr);gap:20px;max-width:var(--container-max);margin:0 auto;align-items:start}.panel{min-width:0;border:1px solid var(--border);border-radius:var(--radius-lg);background:var(--surface);padding:24px}.panel h2{margin:0 0 4px;font-size:22px}.panel h3{margin:0 0 16px;font-size:17px}.eyebrow{margin:0 0 10px;color:var(--accent);font-size:12px;font-weight:700;letter-spacing:.16em;text-transform:uppercase}.field{display:flex;flex-direction:column;gap:6px;margin-bottom:16px}.field>span{font-size:13px;color:var(--muted)}.field-row{display:flex;gap:14px;min-width:0}.field-row .field{flex:1;min-width:0}.size-control{display:flex;align-items:stretch;gap:8px;min-width:0}.size-reset{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:0 12px;border:1px solid var(--border);border-radius:8px;background:var(--surface);color:var(--muted);cursor:pointer;font-size:13px;font-weight:700;white-space:nowrap}textarea,input[type='text'],select{background:var(--surface);border:1px solid var(--border);color:var(--fg);border-radius:8px;min-height:44px;padding:10px 42px 10px 12px;font-size:16px;font-family:inherit;width:100%}select{appearance:none;background-image:url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 7.5L10 12.5L15 7.5' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 14px center;background-size:14px}.ui-segment{display:inline-flex;align-items:stretch;gap:2px;padding:4px;border:1px solid var(--border);border-radius:999px;background:var(--surface)}.ui-segment button{display:inline-flex;align-items:center;justify-content:center;min-height:36px;padding:8px 16px;border:none;border-radius:999px;background:transparent;color:var(--muted);font-size:13px;font-family:inherit;cursor:pointer;white-space:nowrap;font-weight:600}.ui-segment button.is-active{background:var(--accent);color:var(--accent-on)}.completeness{margin:0 0 18px;border:1px solid var(--border-soft);border-radius:var(--radius-lg);padding:16px;background:var(--surface);min-height:220px}.completeness-meter{display:grid;grid-template-columns:92px 1fr;gap:16px;align-items:center}.completeness-ring{width:82px;height:82px;border-radius:50%;display:grid;place-items:center;background:conic-gradient(var(--accent) 0%,var(--border-soft) 0)}.completeness-ring::before{content:attr(data-score);width:62px;height:62px;border-radius:50%;display:grid;place-items:center;background:var(--surface);color:var(--fg);font:700 15px/1 monospace}.generate-actions{position:relative;margin-top:20px}.btn-primary{display:inline-flex;align-items:center;justify-content:center;background:var(--accent);color:var(--accent-on);border:1px solid var(--accent);border-radius:8px;min-height:46px;padding:11px 20px;font-size:14px;cursor:pointer;text-decoration:none;text-align:center;font-family:inherit;font-weight:600}.btn-block{width:100%;margin-top:6px}.submit-feedback{position:absolute;left:0;right:0;top:100%;margin-top:10px;display:flex;align-items:center;gap:8px;padding:0 10px;border:1px solid transparent;border-radius:10px;color:var(--muted);font-size:13px;line-height:1.45;opacity:0;transform:translateY(-6px);pointer-events:none}.submit-feedback.show{padding:9px 10px;border-color:rgba(96,165,250,.4);background:rgba(96,165,250,.1);color:var(--fg);opacity:1;transform:translateY(0);pointer-events:auto}.submit-feedback-dot{width:9px;height:9px;border-radius:999px;background:var(--accent);box-shadow:0 0 0 5px rgba(96,165,250,.16);flex-shrink:0}.output{min-height:300px}.history-deferred-placeholder{min-height:260px;border:1px solid var(--border);border-radius:12px;background:var(--surface-warm)}@media(max-width:900px){.ui-container{width:min(100% - 48px,var(--container-max))}.page{grid-template-columns:1fr}main{padding:20px 24px}}@media(max-width:640px){.ui-container{width:min(100% - 32px,var(--container-max))}main{padding:16px}.panel{padding:16px}.nav{overflow-x:auto}}`;
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
