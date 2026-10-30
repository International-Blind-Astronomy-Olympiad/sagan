# SAGAN Developer & Architecture Guide

Welcome to the **SAGAN** (Sonification of Astronomical Data) contributor documentation! This guide explains the technical architecture, design principles, and step-by-step workflows for extending the platform.

---

## 🌌 Project Philosophy

SAGAN is built on three core pillars:

1. **Accessibility First:** Astronomy is traditionally heavily visual. SAGAN makes time-series astronomy understandable through sound, clear plain-language descriptions, keyboard-only controls, high-contrast themes, and full screen-reader support.
2. **Musical & Engaging for Kids:** We map physical data (flux, periodicity, dips, flares) to harmonious musical parameters (pitch, rhythm, timbre, and pentatonic quantization), turning astronomical events into celestial melodies.
3. **Zero Runtime Dependencies:** The entire platform runs in modern browsers with pure vanilla HTML, modern CSS, and the Web Audio API. Anyone can clone, test, build, and run locally in seconds with just Node.js 18+.

---

## 🏗️ Directory Structure

```text
sagan/
├── .github/
│   ├── ISSUE_TEMPLATE/        # Bug reports, lesson proposals, a11y audits
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── workflows/ci.yml       # GitHub Actions CI for Node 18, 20, 22
├── curriculum/
│   ├── README.md              # 10 learning paths & proposed lesson map
│   └── LESSON_TEMPLATE.md     # Standardized format for lesson contributions
├── scripts/
│   ├── build.js               # Clean production build into dist/
│   ├── check.js               # Automated quality checks & tests
│   └── serve.js               # Zero-dependency local preview server
├── src/
│   ├── index.html             # Semantic markup, SVG light curve, Sound Lab
│   ├── styles.css             # Fluid responsive layout, high contrast, reduced-motion
│   └── app.js                 # Curriculum renderer, Web Audio engine, interactive lab
├── CHANGELOG.md               # Version history
├── CODE_OF_CONDUCT.md         # Contributor Covenant 2.1
├── CONTRIBUTING.md            # Community contribution guide
├── DEVELOPMENT.md             # This architecture & technical reference
├── LICENSE                    # MPL-2.0 open-source license
├── package.json               # Scripts & metadata
└── README.md                  # Project overview & quickstart
```

---

## 🔊 Sound Engine Architecture

SAGAN's audio engine uses the browser's native **Web Audio API** (`AudioContext`). It translates astronomical time-series data into musical sound without any external audio libraries.

### 1. Data Normalization
A dataset is an array of numerical values normalized between `0.0` (minimum observed relative brightness) and `1.0` (maximum observed relative brightness):
$$\text{Relative Brightness } v \in [0.0, 1.0]$$

### 2. Frequency Mapping (Continuous vs. Quantized Scale)
* **Continuous Scientific Pitch:**
  $$f(v) = 220 + (v \times 440) \text{ Hz}$$
  - A baseline of 0.8 flux produces $\approx 572\text{ Hz}$ ($D_5$).
  - A transit dip down to 0.36 flux drops the pitch down to $\approx 378\text{ Hz}$ ($F\#_4$).
* **Harmonic Pentatonic Scale (Musical Mode):**
  When Pentatonic Mode is active, continuous frequencies are snapped to the nearest note of a musical scale (e.g. C Major Pentatonic: C4, D4, E4, G4, A4, C5, D5, E5). This makes astronomical patterns sound like musical compositions!

### 3. Musical Envelopes & Timbres
The engine shapes notes using `GainNode` exponential volume ramps:
- **Celestial Chimes / Bell:** Fast attack (25ms), gentle exponential decay.
- **Cosmic Synth:** Smooth sine tone with sustained body.
- **Warm Space Organ:** Triangle waveform with subtle rich harmonics.

---

## 🪐 How to Add a New Celestial Dataset

To add a new cosmic object to the Sound Lab (e.g. a Pulsar, Exoplanet Transit, or Supernova):

1. Open `src/app.js`.
2. Locate the `CELESTIAL_DATASETS` object.
3. Add your dataset entry:

```javascript
myNewObject: {
  id: 'myNewObject',
  name: 'Crab Pulsar Rhythmic Pulse',
  category: 'Neutron Stars',
  description: 'A spinning neutron star acting like a cosmic lighthouse.',
  points: [0.2, 0.2, 0.95, 0.2, 0.2, 0.95, 0.2, 0.2, 0.95, ...],
  timeLabel: 'Milliseconds →',
  fluxLabel: 'Radio Pulse Intensity',
  soundCharacter: 'Rhythmic percussive beat',
  funFactForKids: 'The Crab Pulsar spins about 30 times every single second!',
  provenance: 'Illustrative model based on standard radio telescope pulse profiles.'
}
```

4. Run `npm test` and `npm run build` to verify.

---

## 📚 How to Add a New Curriculum Chapter

1. Read `curriculum/LESSON_TEMPLATE.md` for guidelines.
2. In `src/app.js`, append your chapter to the `chapters` array:

```javascript
{
  title: 'Your Chapter Title',
  intro: 'A clear, kid-friendly introductory paragraph.',
  body: `<h3>Section Title</h3>
<p>Explaining astronomical concepts with accessible analogies.</p>
<div class="callout">
  <strong>Fun Activity:</strong> Try tapping out the rhythm of a pulsar!
</div>`
}
```

3. Note: The automated test suite (`scripts/check.js`) verifies that HTML `<progress max="N">` matches the number of chapters in `app.js`. If you add a chapter, update the initial `max="N"` in `src/index.html` to match.
4. Run:
   ```bash
   npm test
   npm run build
   ```

---

## 🧪 Testing & Validation

Run the test suite anytime with:
```bash
npm test
```

This verifies:
- Semantic HTML and accessibility landmarks (`aria-live`, `role="status"`, skip links).
- AudioContext lifecycle handling (safeguards against closed/suspended contexts).
- Relative path integrity across `src/` and `dist/`.
- Zero external CDN or script dependencies.
- Chapter count and progress bar alignment.
- Reduced-motion and high-contrast CSS support.

---

## 🚀 Building and Previewing

```bash
# Build the production static site in dist/
npm run build

# Start the zero-dependency local preview server
npm start
```
Open `http://localhost:4173` in your browser.
