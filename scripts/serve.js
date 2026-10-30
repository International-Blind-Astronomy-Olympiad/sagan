// scripts/serve.js — local dev server for SAGAN dist/
// Run after "npm run build" with: npm start
const http = require('node:http');
const fs   = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..', 'dist');
if (!fs.existsSync(root)) {
  console.error('dist/ not found. Run "npm run build" first.');
  process.exit(1);
}

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.js':   'text/javascript; charset=utf-8',
  '.md':   'text/plain; charset=utf-8',
};

http.createServer((req, res) => {
  let pathname = decodeURIComponent((req.url || '/').split('?')[0]);
  if (pathname === '/') pathname = '/index.html';
  const target = path.resolve(root, '.' + pathname);
  // Security: prevent path traversal outside dist/
  if (!target.startsWith(root)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }
  fs.readFile(target, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    res.writeHead(200, {
      'Content-Type': types[path.extname(target)] || 'application/octet-stream',
      'X-Content-Type-Options': 'nosniff',
    });
    res.end(data);
  });
}).listen(4173, () => console.log('SAGAN preview: http://localhost:4173'));
