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
const css = fs.readFileSync(cssFile, 'utf8');
const styleTag = `<style data-critical-css>${css}</style>`;
const stylesheetPattern = new RegExp(
  `\\s*<link\\s+rel="stylesheet"[^>]+href="${cssHref.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*>`,
  'g'
);

let updated = 0;
for (const htmlFile of walk(distDir)) {
  const html = fs.readFileSync(htmlFile, 'utf8');
  if (!html.includes(cssHref) || html.includes('data-critical-css')) continue;
  const next = html.replace(stylesheetPattern, `\n    ${styleTag}`);
  if (next !== html) {
    fs.writeFileSync(htmlFile, next);
    updated += 1;
  }
}

console.log(`Inlined ${path.basename(cssFile)} into ${updated} HTML files.`);
