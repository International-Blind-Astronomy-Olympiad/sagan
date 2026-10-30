// scripts/check.js — automated quality checks for SAGAN
// Run with: npm test (or node scripts/check.js)
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'src/index.html'), 'utf8');
const js   = fs.readFileSync(path.join(root, 'src/app.js'), 'utf8');
const css  = fs.readFileSync(path.join(root, 'src/styles.css'), 'utf8');

// ---------------------------------------------------------------------------
// Helper: count chapters declared in app.js by counting top-level { objects
// inside the chapters array literal.  We find the array bounds and count
// occurrences of "title:" as a reliable proxy for chapter count.
// ---------------------------------------------------------------------------
function countChapters(source) {
  const match = source.match(/const chapters\s*=\s*\[[\s\S]*?\];/);
  if (!match) return null;
  const block = match[0];
  // Count "title:" occurrences — one per chapter object.
  return (block.match(/\btitle\s*:/g) || []).length;
}

// ---------------------------------------------------------------------------
// Helper: extract the progress max attribute value from the HTML source.
// ---------------------------------------------------------------------------
function progressMaxFromHtml(source) {
  const m = source.match(/<progress[^>]+max="(\d+)"/);
  return m ? Number(m[1]) : null;
}

const chapterCount = countChapters(js);
const progressMax  = progressMaxFromHtml(html);

const checks = [
  // ── Structural checks ──────────────────────────────────────────────────
  ['HTML has a <title> starting with "SAGAN"',
    /\<title\>SAGAN/.test(html)],

  ['Skip link and main landmark exist',
    /class="skip-link"/.test(html) && /<main id="home">/.test(html)],

  ['Chart has text alternative (title + desc + chart-description)',
    /id="curve-desc"/.test(html) && /chart-description/.test(html)],

  ['Audio controls exist (play + stop)',
    /id="play-sound"/.test(html) && /id="stop-sound"/.test(html)],

  ['Chapter navigation renders (buildChapterList + renderChapter functions)',
    /function buildChapterList/.test(js) && /function renderChapter/.test(js)],

  ['progress.max is updated dynamically in renderChapter()',
    /\$\(['"]progress['"]\)\.max\s*=/.test(js)],

  // ── CSS checks ─────────────────────────────────────────────────────────
  ['Reduced-motion support exists in CSS',
    /prefers-reduced-motion/.test(css)],

  ['lesson-body uses ID selector #lesson-body (not class .lesson-body)',
    /#lesson-body\s*\{/.test(css) && !(/\.lesson-body\s*\{/.test(css))],

  // ── Link correctness checks ────────────────────────────────────────────
  ['Footer links do not use "../" prefix (broken in dist/)',
    !/(href="\.\.\/README\.md"|href="\.\.\/CONTRIBUTING\.md")/.test(html)],

  ['Nav "Lesson map" link does not use "../curriculum" prefix (broken in dist/)',
    !/(href="\.\.\/curriculum)/.test(html)],

  ['Footer README link is relative to dist root',
    /href="README\.md"/.test(html)],

  ['Footer CONTRIBUTING link is relative to dist root',
    /href="CONTRIBUTING\.md"/.test(html)],

  ['Nav "Lesson map" points to curriculum/README.md',
    /href="curriculum\/README\.md"/.test(html)],

  // ── Dependency checks ──────────────────────────────────────────────────
  ['No external JS/CDN script dependencies',
    !/<script[^>]+src="https?:/.test(html)],

  ['No external CSS/CDN link dependencies',
    !/<link[^>]+href="https?:/.test(html)],

  // ── Audio context bug-fix check ────────────────────────────────────────
  ['playAudio() guards against a closed AudioContext',
    /audioContext\.state\s*===\s*['"]closed['"]/.test(js)],

  // ── Chapter count consistency check ───────────────────────────────────
  ['Chapter count in app.js can be parsed',
    chapterCount !== null && chapterCount > 0],

  ['progress max attribute in HTML matches chapter count in app.js',
    chapterCount !== null && progressMax !== null && progressMax === chapterCount],

  // ── Accessibility checks ───────────────────────────────────────────────
  ['audio-status uses role="status" and aria-live="polite"',
    /id="audio-status"[^>]*role="status"/.test(html) || /aria-live="polite"[^>]*id="audio-status"/.test(html) ||
    /id="audio-status"[\s\S]{0,100}aria-live="polite"/.test(html)],

  ['High-contrast toggle has aria-pressed attribute',
    /id="contrast-toggle"[^>]*aria-pressed/.test(html)],

  ['Open Graph meta tags present',
    /property="og:title"/.test(html) && /property="og:description"/.test(html)],
];

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------
let failed = false;
const maxLen = Math.max(...checks.map(([name]) => name.length));

console.log('\nSAGAN quality checks\n' + '─'.repeat(maxLen + 8));
for (const [name, ok] of checks) {
  const label = ok ? '\x1b[32mPASS\x1b[0m' : '\x1b[31mFAIL\x1b[0m';
  console.log(`${label}  ${name}`);
  if (!ok) failed = true;
}

console.log('─'.repeat(maxLen + 8));
if (failed) {
  console.error('\nOne or more checks failed.\n');
  process.exit(1);
} else {
  console.log(`\nAll ${checks.length} checks passed.\n`);
}
