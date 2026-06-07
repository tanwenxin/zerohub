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

if (!fs.existsSync(path.join(distDir, 'index.html'))) {
  throw new Error('web/dist/index.html not found. Run npm run build:web first.');
}

fs.rmSync(publicDir, { recursive: true, force: true });
copyDir(distDir, publicDir);

console.log(`Synced ${distDir} -> ${publicDir}`);
