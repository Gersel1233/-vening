// Assembles pieces/*.html + pieces/base.css into bullion/index.html (artifact format: no
// <html>/<head>/<body>; a <title>, the font <link>s and one <style> at the top).
// __ASSET_NAME__ tokens are replaced with data URIs from assets/bullion/NAME.txt.
// Missing assets get a flat placeholder so pieces can be rendered before generation finishes.
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
const root = dirname(fileURLToPath(import.meta.url));
const read = f => existsSync(join(root, f)) ? readFileSync(join(root, f), 'utf8') : '';
const pieces = ['overture', 'hero', 'intro', 'chronicle', 'menu', 'reservation', 'menucard'];

const head = `<title>Bullion</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,200..300&family=Manrope:wght@500;700&display=swap">
<style>
${read('pieces/base.css')}
${pieces.map(p => read(`pieces/${p}.css`)).filter(Boolean).join('\n')}
</style>
`;
let html = head + pieces.map(p => read(`pieces/${p}.html`) || `<!-- missing piece: ${p} -->`).join('\n') + '\n' + read('pieces/scripts.html');

const placeholder = (w, h, label) => 'data:image/svg+xml;utf8,' + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><rect width="100%" height="100%" fill="#1a231e"/><text x="50%" y="50%" fill="#8A8981" font-family="sans-serif" font-size="28" text-anchor="middle">${label}</text></svg>`);
const dims = { hero: [1920, 823, 'hero'], heroloop: [1280, 720, 'hero'], bar: [1400, 1867, 'bar'], barloop: [640, 1138, 'bar'], sole: [1400, 1867, 'sole'], tarte: [1400, 1867, 'tarte'], room: [1920, 823, 'room'] };
const missing = [];
html = html.replace(/__ASSET_([A-Z]+)_RAW__/g, (m, n) => {
  const f = join(root, 'assets/bullion', n.toLowerCase() + '.txt');
  if (!existsSync(f)) { missing.push(n.toLowerCase()); return ''; }
  const uri = readFileSync(f, 'utf8').trim();
  return uri.slice(uri.indexOf(',') + 1);
});
html = html.replace(/__ASSET_([A-Z]+)__/g, (m, n) => {
  const name = n.toLowerCase();
  const f = join(root, 'assets/bullion', name + '.txt');
  if (existsSync(f)) return readFileSync(f, 'utf8').trim();
  missing.push(name);
  const d = dims[name];
  return d ? placeholder(...d) : '';
});
mkdirSync(join(root, 'bullion'), { recursive: true });
writeFileSync(join(root, 'bullion/index.html'), html);
const kb = Buffer.byteLength(html) / 1024;
console.log(`bullion/index.html — ${kb.toFixed(0)} KB${missing.length ? ' (placeholders: ' + [...new Set(missing)].join(', ') + ')' : ''}`);
if (kb > 15500) console.warn('WARNING: over the 16 MB artifact budget');
