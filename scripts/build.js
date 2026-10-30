// scripts/build.js — production build for SAGAN
// Copies all files needed to serve the site from dist/.
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const out = path.join(root, 'dist');

// Remove old dist and recreate
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

// Core application files
for (const file of ['index.html', 'styles.css', 'app.js']) {
  fs.copyFileSync(path.join(root, 'src', file), path.join(out, file));
  console.log(`  copied src/${file} → dist/${file}`);
}

// Root documentation files (linked from footer and developer docs)
for (const doc of ['README.md', 'CONTRIBUTING.md', 'DEVELOPMENT.md', 'CHANGELOG.md']) {
  const src = path.join(root, doc);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(out, doc));
    console.log(`  copied ${doc} → dist/${doc}`);
  } else {
    console.warn(`  WARNING: ${doc} not found at project root.`);
  }
}

// Curriculum directory (linked from nav "Lesson map")
const curriculumSrc = path.join(root, 'curriculum');
const curriculumOut = path.join(out, 'curriculum');
if (fs.existsSync(curriculumSrc)) {
  fs.mkdirSync(curriculumOut, { recursive: true });
  for (const entry of fs.readdirSync(curriculumSrc)) {
    const srcFile = path.join(curriculumSrc, entry);
    const stat = fs.statSync(srcFile);
    if (stat.isFile()) {
      fs.copyFileSync(srcFile, path.join(curriculumOut, entry));
      console.log(`  copied curriculum/${entry} → dist/curriculum/${entry}`);
    }
  }
} else {
  console.warn('  WARNING: curriculum/ directory not found — nav "Lesson map" link will be broken.');
}

console.log(`\nProduction site built successfully → ${out}`);
