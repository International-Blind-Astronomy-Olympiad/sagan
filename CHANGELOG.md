# Changelog

All notable changes to SAGAN are documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).  
This project uses [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added
- Seventh chapter ("Coming soon — your chapter here") as a contributor placeholder with guidance for writing new lessons.
- Open Graph and Twitter card meta tags to `index.html` for social sharing.
- `.github/` directory with issue templates for bug reports, lesson contributions, and accessibility reports, plus a pull request template.
- `curriculum/LESSON_TEMPLATE.md` — structured template for writing new chapters with learning goals, vocabulary, body text, accessible chart descriptions, knowledge checks, data provenance, and an accessibility checklist.
- `CHANGELOG.md` (this file).

### Fixed
- **Bug 2 — progress `max` attribute:** `renderChapter()` now sets `progress.max = chapters.length` dynamically, so adding or removing chapters keeps the progress bar correct.
- **Bug 3 — CSS selector mismatch:** CSS rule changed from `.lesson-body { max-width: 760px }` (class selector) to `#lesson-body { max-width: 760px }` (ID selector) to match the HTML element `id="lesson-body"`.
- **Bug 4 — Nav "Lesson map" link broken in production:** Link changed from `../curriculum/README.md` (relative to `src/`) to `curriculum/README.md` (relative to `dist/`); `build.js` now copies the entire `curriculum/` directory to `dist/curriculum/`.
- **Bug 5 — Footer links broken in production:** Links changed from `../README.md` and `../CONTRIBUTING.md` to `README.md` and `CONTRIBUTING.md`; `build.js` now copies those files to `dist/`.
- **Bug 6 — Closed AudioContext not reset:** `playAudio()` now checks `audioContext.state === 'closed'` and resets `audioContext` to `null` before attempting to create a new one, preventing an error after a `pagehide` event.

### Changed
- `scripts/build.js` extended to copy `README.md`, `CONTRIBUTING.md`, and the `curriculum/` directory to `dist/` alongside the core application files.
- `scripts/check.js` expanded with additional checks: dynamic `progress.max` update, footer link correctness, curriculum link correctness, chapter count consistency between `app.js` and the HTML `progress` `max` attribute, `AudioContext` closed-state guard, high-contrast `aria-pressed` attribute, and Open Graph meta tag presence.
- `scripts/serve.js` reformatted for readability; added `.md` MIME type entry so Markdown files served from `dist/` return `text/plain`.
- `CONTRIBUTING.md` expanded with prerequisites, local setup instructions, project structure, testing instructions, lesson authoring guide, data provenance requirements, and an accessibility checklist.
- `CODE_OF_CONDUCT.md` expanded to a full Contributor Covenant 2.1 document.
- Chapter 1 ("Welcome to SAGAN") given richer body content explaining what SAGAN is, what learners will study, and how to use the platform.
- Chapter 2 ("What is a light curve?") expanded with more detail on what a dip can mean and why astronomers use light curves.
- Chapters 3–6 have additional explanatory paragraphs.

---

## [0.1.0] — 2024

### Added
- Initial educational prototype with six chapter-based lessons.
- Synthetic light curve illustration with SVG rendering.
- Web Audio sonification demo mapping synthetic brightness values to pitch.
- Chapter navigation with previous/next controls, chapter list sidebar, and progress bar.
- Accessibility features: skip link, keyboard navigation, visible focus, high-contrast mode, text-size controls, `role="status"` for audio feedback, and `aria-live` region.
- Responsive layout with no external runtime dependencies.
- `scripts/build.js` — static production build to `dist/`.
- `scripts/check.js` — automated quality checks.
- `scripts/serve.js` — local preview server for `dist/`.
- `curriculum/README.md` — 57-lesson proposed curriculum map across 10 learning paths.
- `CONTRIBUTING.md` — initial contribution guide.
- `CODE_OF_CONDUCT.md` — initial code of conduct.
- `LICENSE` — Mozilla Public License 2.0.
