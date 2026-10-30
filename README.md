# SAGAN — Sonification of Astronomical Data

![License: MPL-2.0](https://img.shields.io/badge/license-MPL--2.0-blue.svg)
![Node.js: ≥18](https://img.shields.io/badge/node-%3E%3D18-green.svg)
![Status: Early prototype](https://img.shields.io/badge/status-early%20prototype-orange.svg)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)

**SAGAN is an open-source educational platform in development** that helps learners of different ages explore astronomy through clear chapters, accessible explanations, interactive data, and sound. It is intended to support blind and low-vision students alongside sighted learners.

> **Status:** Early prototype. The light curve in the demo is illustrative and synthetic. This repository does not currently contain a trained GAN model, a live astronomy-data pipeline, or verified scientific detections.

---

## Learning paths

The curriculum is organized from foundational concepts to data and research practice across 10 paths:

1. **Start here:** astronomy, observations, units, and the scientific method.
2. **Light and spectra:** electromagnetic radiation, wavelength, color, spectra, and telescopes.
3. **The Sun and stars:** stellar properties, stellar evolution, variable stars, and stellar explosions.
4. **Reading light curves:** time-series basics, brightness/flux, noise, periodicity, transits, and uncertainty.
5. **Solar System:** planets, moons, asteroids, comets, rings, atmospheres, and orbital motion.
6. **Exoplanets:** transit photometry, radial velocity, direct imaging, microlensing, atmospheres, and habitability limits.
7. **Deep space:** nebulae, star clusters, galaxies, black holes, neutron stars, supernovae, gravitational waves, and cosmology.
8. **Astronomy data science:** tabular data, FITS images, preprocessing, statistics, visualization, machine learning, and reproducibility.
9. **Sonification studio:** mapping data to pitch, rhythm, timbre, loudness, and spatial audio; listening critically; documenting mappings.
10. **Accessible science lab:** screen-reader-first descriptions, keyboard navigation, accessible assessments, ethics, and student projects.

The full lesson map (57 planned lessons) is in [`curriculum/README.md`](curriculum/README.md). Topics are a planned curriculum, not a claim that every lesson or dataset is already implemented.

---

## Run locally

Requires **Node.js 18 or newer**. No third-party packages are needed.

```bash
# Clone
git clone https://github.com/sagan-edu/sagan.git
cd sagan

# Run quality checks
npm test

# Build static production site → dist/
npm run build

# Preview at http://localhost:4173
npm start
```

---

## Architecture

SAGAN is intentionally simple — no framework, no bundler, no runtime dependencies.

```
src/
├── app.js        Vanilla JS: chapter data, navigation, SVG curve, Web Audio API
├── index.html    Single HTML page (semantic, accessible structure)
└── styles.css    CSS custom properties, responsive grid, high-contrast mode

scripts/
├── build.js      Copies src/ + docs → dist/ (Node.js, no dependencies)
├── check.js      Automated checks: structure, links, accessibility, chapter count
└── serve.js      Local HTTP server for dist/ (Node.js built-ins only)
```

The `chapters` array in `app.js` drives the entire curriculum. Each element has a `title`, `intro` (plain text), and `body` (HTML string). To add a chapter, append an object to the array — the UI, progress bar, and navigation update automatically.

---

## Current prototype features

- Chapter-based reading interface with previous/next controls and progress bar.
- Synthetic illustrative light curve with a written, non-visual explanation.
- Web Audio demonstration that maps sample brightness values to tones.
- Text-size controls, high-contrast mode, keyboard-operable controls, visible focus, and semantic page structure.
- Responsive layout with no external runtime dependency.

---

## Roadmap

- [ ] Connect cited, appropriately licensed astronomical datasets (e.g. mission light curves and spectra).
- [ ] Add detailed lesson content, age-level variants, glossary, and formative quizzes.
- [ ] Add accessible controls for sonification speed, pitch range, pause/resume, and data window.
- [ ] Add data import for CSV and astronomy formats where practical, including FITS support through a reviewed library.
- [ ] Validate with screen readers, keyboard-only users, and blind/low-vision learners.
- [ ] Add scientific review, dataset provenance, tests, translations, and contributor lesson templates.
- [ ] Develop and validate the proposed SAGAN machine-learning model separately from the educational interface.

---

## Contributing

Contributions are welcome from students, educators, astronomers, accessibility specialists, designers, and developers worldwide. See [`CONTRIBUTING.md`](CONTRIBUTING.md) to get started. Useful contributions include lesson writing, plain-language explanations, dataset provenance, screen-reader testing, translations, and sonification experiments.

Please distinguish synthetic examples from real observations and include sources for scientific claims.

Issue templates are available for [bug reports](.github/ISSUE_TEMPLATE/bug_report.md), [lesson contributions](.github/ISSUE_TEMPLATE/lesson_contribution.md), and [accessibility reports](.github/ISSUE_TEMPLATE/accessibility_report.md).

---

## Project provenance and naming

This release is a clean, lightweight educational prototype informed by the goal of accessible data sonification. The uploaded project included code and assets from the upstream TwoTone project; its original license file is retained in this package for provenance. Before combining or redistributing upstream source code, preserve all applicable notices and review the upstream license obligations. SAGAN is an independent educational project direction and is not represented as an official release by the original TwoTone authors or by any astronomy organization.

---

## License

See [`LICENSE`](LICENSE). Review license compatibility and notices before adding or restoring third-party code or assets.
