// SAGAN — Sonification of Astronomical Data
// Minimal & Accessible Astronomy Learning Platform for Blind & Visually Impaired Students

// ---------------------------------------------------------------------------
// 1. Curriculum Chapters (7 chapters)
// ---------------------------------------------------------------------------
const chapters = [
  {
    title: 'Welcome to SAGAN',
    intro: 'Astronomy is the study of objects and events beyond Earth — stars, planets, galaxies, and everything in between. Scientists use careful observations, measurements, and questions to understand a universe far too large to visit.',
    body: `<h3>What is SAGAN?</h3>
<p>SAGAN stands for <strong>Sonification of Astronomical Data</strong>. It is an open-source learning space designed under the International Blind Astronomy Olympiad to help students explore astronomy through accessible text and musical sound.</p>
<h3>What you will learn</h3>
<ul>
  <li>How light carries information from distant stars, planets, and galaxies across space.</li>
  <li>How astronomers turn measurements into data graphs called <em>light curves</em>.</li>
  <li>How <em>data sonification</em> translates physical measurements into pitch and rhythm.</li>
  <li>How to recognize exoplanets, pulsars, and supernovae through sound.</li>
  <li>How to evaluate scientific evidence and test hypotheses.</li>
</ul>
<div class="callout">
  <strong>Sound in space:</strong> Space is a vacuum, so sound cannot travel through it. Data sonification is an accessible translation tool: we map physical scientific data into sound so we can explore patterns with our ears.
</div>
<h3>How to navigate</h3>
<p>Use the chapter buttons on the left (or above on mobile devices) to move through the lessons. Move down to the <strong>Interactive Sound Lab</strong> to test different astronomical objects, or try the <strong>Listening Quiz</strong>.</p>`
  },
  {
    title: 'What is a light curve?',
    intro: 'A light curve is a graph showing how the measured brightness of an astronomical object changes over time. It is one of the most fundamental tools in modern astrophysics.',
    body: `<h3>How to read a light curve</h3>
<ul>
  <li><strong>Time axis (horizontal):</strong> Measures elapsed time, from fractions of a second for spinning pulsars to months or years for distant planets.</li>
  <li><strong>Brightness axis (vertical):</strong> Measures the detected light (flux). Higher numbers indicate brighter light; lower numbers indicate dimmer light.</li>
  <li><strong>Patterns:</strong> A temporary drop, a repeating cycle, or a sudden burst reveals the physical activity of the object.</li>
</ul>
<h3>What causes a brightness dip?</h3>
<p>When an exoplanet passes directly between its host star and an observing telescope, it temporarily blocks a fraction of the starlight. This creates a distinct U-shaped dip known as a <strong>transit</strong>.</p>
<div class="callout">
  <strong>Try it in the Sound Lab:</strong> Select the <em>Exoplanet Transit</em> model below. As brightness dips, notice how the musical pitch lowers, then returns to baseline once the planet finishes crossing.
</div>`
  },
  {
    title: 'Patterns, noise, and evidence',
    intro: 'Real astronomical observations are never completely smooth. Scientific instruments, atmospheric changes, and cosmic radiation introduce noise that astronomers must analyze carefully.',
    body: `<h3>Questions astronomers ask</h3>
<ul>
  <li>Does the pattern repeat with a consistent, clockwork period?</li>
  <li>Could the signal be an instrumental artifact or telescope vibration?</li>
  <li>How large is the measurement uncertainty compared to the signal depth?</li>
  <li>Can independent telescopes verify the observation?</li>
</ul>
<h3>Signal vs. Noise</h3>
<p>In data sonification, random noise sounds like a subtle background flutter, whereas a genuine astronomical event has an organized structure: a steady rhythm or a smooth melodic change.</p>
<div class="callout">
  <strong>Scientific verification:</strong> Observing a pattern is only the first step. Astronomers rule out instrument errors and competing explanations before confirming any discovery.
</div>`
  },
  {
    title: 'Stars, planets, and exoplanets',
    intro: 'Our Sun is one of hundreds of billions of stars in our galaxy. Astronomers have discovered thousands of other worlds — exoplanets — orbiting distant stars.',
    body: `<h3>How we discover exoplanets</h3>
<ul>
  <li><strong>Transit Photometry:</strong> Measuring the small decrease in starlight as an orbiting world crosses the stellar disk.</li>
  <li><strong>Radial Velocity:</strong> Detecting the gravitational pull of a planet that causes its star to wobble slightly toward and away from Earth.</li>
  <li><strong>Direct Imaging:</strong> Using optical coronagraphs to block direct starlight and capture the faint reflection from a planet.</li>
  <li><strong>Gravitational Microlensing:</strong> Using the gravity of a star and planet to bend and focus light from a more distant background star.</li>
</ul>
<div class="callout">
  <strong>Scale fact:</strong> An Earth-sized planet passing in front of a Sun-like star blocks only about 0.01 percent of the star's light.
</div>`
  },
  {
    title: 'Listen to the data',
    intro: 'Data sonification translates information into sound. By mapping variables like brightness to pitch, students can perceive complex data non-visually.',
    body: `<h3>Why use sound in astronomy?</h3>
<p>Human hearing is exquisitely sensitive to changes in pitch, rhythm, and harmony. Sonification provides:</p>
<ul>
  <li><strong>Accessible science:</strong> Blind and low-vision learners and scientists can analyze astronomical time-series independently.</li>
  <li><strong>Pattern recognition:</strong> Subtle cycles and repeating pulses can often be heard faster than they can be visually inspected on a 2D plot.</li>
  <li><strong>Harmonic intuition:</strong> Pitch mapping turns abstract numeric data into memorable melodic contours.</li>
</ul>
<div class="callout">
  <strong>Tuning options:</strong> In the Sound Lab below, you can choose between <em>Harmonious Scale</em> (which snaps brightness to musical notes) and <em>Continuous Pitch</em> (which tracks direct physical frequency).
</div>`
  },
  {
    title: 'Build and contribute',
    intro: 'SAGAN is an open-source educational platform welcoming contributions from educators, students, astronomers, and software developers.',
    body: `<h3>Ways to contribute</h3>
<ul>
  <li><strong>Add astronomical models:</strong> Model observations from missions like Kepler, TESS, or JWST using our dataset format.</li>
  <li><strong>Author new lessons:</strong> Write clear, accessible curriculum modules using <code>curriculum/LESSON_TEMPLATE.md</code>.</li>
  <li><strong>Accessibility testing:</strong> Test navigation with screen readers (NVDA, VoiceOver, JAWS) and submit feedback.</li>
  <li><strong>Audio synthesis:</strong> Implement new accessible synthesis engines and sound mappings in Web Audio.</li>
</ul>
<div class="callout">
  Refer to <a href="CONTRIBUTING.md">CONTRIBUTING.md</a> and <a href="DEVELOPMENT.md">DEVELOPMENT.md</a> to learn how to submit improvements.
</div>`
  },
  {
    title: 'Coming soon — your chapter here',
    intro: 'This chapter is reserved for community contributions. Educators and students are invited to propose and write the next lesson.',
    body: `<h3>Upcoming Curriculum Modules</h3>
<ul>
  <li>Stellar Evolution: White dwarfs, neutron stars, and black holes.</li>
  <li>Gravitational Waves: Listening to the chirp of merging black holes.</li>
  <li>Telescope Instrumentation: How space detectors capture photons.</li>
  <li>Cosmology and the expanding universe.</li>
</ul>
<div class="callout">
  Have an idea for a lesson? Open an issue on our GitHub repository to discuss your proposal.
</div>`
  }
];

// ---------------------------------------------------------------------------
// 2. Celestial Datasets Registry (Clean & No Emojis)
// ---------------------------------------------------------------------------
const CELESTIAL_DATASETS = {
  exoplanet: {
    id: 'exoplanet',
    name: 'Exoplanet Transit (Kepler Model)',
    category: 'Exoplanets',
    title: 'Exoplanet Transit Light Curve',
    desc: 'The brightness is mostly steady, drops smoothly into a U-shaped dip near the middle as a planet crosses the star, and then returns to baseline.',
    timeLabel: 'Time (Hours)',
    fluxLabel: 'Relative Starlight',
    provenance: 'Model representing a planet transiting a solar-type star.',
    funFact: 'Astronomers have discovered thousands of exoplanets by measuring these subtle brightness dips.',
    curve: [0.80, 0.81, 0.80, 0.82, 0.79, 0.80, 0.79, 0.81, 0.80, 0.79, 0.62, 0.43, 0.36, 0.44, 0.63, 0.79, 0.80, 0.81, 0.79, 0.80, 0.82, 0.80, 0.79, 0.81, 0.80]
  },
  pulsar: {
    id: 'pulsar',
    name: 'Pulsar Lighthouse (Spinning Neutron Star)',
    category: 'Neutron Stars',
    title: 'Pulsar Periodic Radio Beams',
    desc: 'A steady quiet baseline broken by sharp, rhythmic high-energy pulses that recur with clockwork precision.',
    timeLabel: 'Time (Milliseconds)',
    fluxLabel: 'Radio Pulse Intensity',
    provenance: 'Model based on the Crab Pulsar, spinning thirty times per second.',
    funFact: 'Pulsars rotate so reliably that their pulses can serve as natural cosmic clocks.',
    curve: [0.15, 0.95, 0.15, 0.15, 0.95, 0.15, 0.15, 0.95, 0.15, 0.15, 0.95, 0.15, 0.15, 0.95, 0.15, 0.15, 0.95, 0.15, 0.15, 0.95, 0.15, 0.15, 0.95, 0.15, 0.15]
  },
  cepheid: {
    id: 'cepheid',
    name: 'Cepheid Variable (Pulsating Star)',
    category: 'Variable Stars',
    title: 'Pulsating Cepheid Variable Star',
    desc: 'A smooth, periodic rising and falling wave of starlight as the giant star physically swells and contracts.',
    timeLabel: 'Time (Days)',
    fluxLabel: 'Pulsating Brightness',
    provenance: 'Model based on Delta Cephei pulsating dynamics.',
    funFact: 'The pulsation period of a Cepheid directly reveals its true luminosity, allowing astronomers to calculate galaxy distances.',
    curve: [0.40, 0.50, 0.65, 0.82, 0.95, 0.88, 0.75, 0.62, 0.52, 0.45, 0.40, 0.50, 0.65, 0.82, 0.95, 0.88, 0.75, 0.62, 0.52, 0.45, 0.40, 0.50, 0.65, 0.82, 0.95]
  },
  supernova: {
    id: 'supernova',
    name: 'Supernova Flare (Exploding Star)',
    category: 'Stellar Explosions',
    title: 'Type Ia Supernova Light Curve',
    desc: 'A quiet, faint baseline followed by a sudden, brilliant flash of starlight that peaks rapidly and fades slowly over many months.',
    timeLabel: 'Time (Weeks)',
    fluxLabel: 'Explosion Brightness',
    provenance: 'Model representing radioactive nickel decay in a thermonuclear supernova.',
    funFact: 'A single supernova can briefly shine brighter than an entire galaxy of billions of stars.',
    curve: [0.10, 0.12, 0.10, 0.11, 0.98, 0.92, 0.85, 0.78, 0.72, 0.66, 0.60, 0.55, 0.50, 0.46, 0.42, 0.38, 0.35, 0.32, 0.30, 0.28, 0.26, 0.24, 0.22, 0.20, 0.18]
  },
  binary: {
    id: 'binary',
    name: 'Eclipsing Binary Stars (Two Orbiting Stars)',
    category: 'Multiple Stars',
    title: 'Eclipsing Binary Star Light Curve',
    desc: 'Two alternating brightness dips: a deeper primary eclipse when the bright star is hidden, and a shallower secondary eclipse when the dimmer companion is covered.',
    timeLabel: 'Time (Days)',
    fluxLabel: 'Combined Brightness',
    provenance: 'Model based on eclipsing binary dynamics like Algol.',
    funFact: 'Over half of all visible stars are part of multiple star systems.',
    curve: [0.85, 0.85, 0.84, 0.50, 0.35, 0.50, 0.85, 0.85, 0.84, 0.85, 0.70, 0.60, 0.70, 0.85, 0.85, 0.84, 0.50, 0.35, 0.50, 0.85, 0.85, 0.84, 0.70, 0.60, 0.70]
  }
};

// ---------------------------------------------------------------------------
// 3. Application State & Helpers
// ---------------------------------------------------------------------------
const $ = (id) => document.getElementById(id);

let current = 0;
let fontScale = 1;
let audioContext = null;
let activeOscillators = [];
let currentDatasetKey = 'exoplanet';
let isPlaying = false;
let playheadTimer = null;
let mysteryTarget = 'exoplanet';

const PENTATONIC_SCALE = [
  261.63, // C4
  293.66, // D4
  329.63, // E4
  392.00, // G4
  440.00, // A4
  523.25, // C5
  587.33, // D5
  659.25, // E5
  783.99  // G5
];

function getActiveDataset() {
  return CELESTIAL_DATASETS[currentDatasetKey] || CELESTIAL_DATASETS.exoplanet;
}

// ---------------------------------------------------------------------------
// 4. Interactive SVG Graph & Accessible Point Navigation
// ---------------------------------------------------------------------------
function drawCurve() {
  const data = getActiveDataset();
  const curve = data.curve;
  const x0 = 60, x1 = 610, y0 = 35, y1 = 225;

  const points = curve
    .map((v, i) => `${(x0 + (x1 - x0) * i / (curve.length - 1)).toFixed(1)},${(y1 - (y1 - y0) * v).toFixed(1)}`)
    .join(' ');

  $('curve-line').setAttribute('d', 'M' + points.replaceAll(' ', ' L'));

  // Update SVG accessibility labels
  $('curve-title').textContent = data.title;
  $('curve-desc').textContent = data.desc;
  $('chart-description').textContent = data.desc;
  $('current-chart-title').textContent = data.title;
  $('axis-time-label').textContent = data.timeLabel;
  $('axis-flux-label').textContent = data.fluxLabel;
  $('chart-provenance-note').textContent = data.provenance;

  // Render interactive point targets
  const pointsContainer = $('curve-points');
  pointsContainer.innerHTML = '';

  curve.forEach((v, i) => {
    const cx = (x0 + (x1 - x0) * i / (curve.length - 1)).toFixed(1);
    const cy = (y1 - (y1 - y0) * v).toFixed(1);

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', cx);
    circle.setAttribute('cy', cy);
    circle.setAttribute('r', '4');
    circle.setAttribute('class', 'curve-point');
    circle.setAttribute('tabindex', '0');
    circle.setAttribute('role', 'button');
    circle.setAttribute('aria-label', `Point ${i + 1} of ${curve.length}: Brightness ${(v * 100).toFixed(0)} percent`);

    const showPointInfo = () => {
      $('point-details').innerHTML = `<strong>Point ${i + 1} of ${curve.length}:</strong> Brightness ${(v * 100).toFixed(0)} percent &bull; Frequency ${getNoteFrequency(v).toFixed(0)} Hz.`;
    };

    circle.addEventListener('mouseenter', showPointInfo);
    circle.addEventListener('focus', showPointInfo);
    circle.addEventListener('click', () => {
      playSingleNote(v);
      showPointInfo();
    });
    circle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        playSingleNote(v);
        showPointInfo();
      }
    });

    pointsContainer.appendChild(circle);
  });
}

function updatePlayhead(x, active) {
  const playhead = $('playhead');
  if (!playhead) return;
  if (active) {
    playhead.setAttribute('x1', x);
    playhead.setAttribute('x2', x);
    playhead.classList.add('active');
  } else {
    playhead.classList.remove('active');
  }
}

// ---------------------------------------------------------------------------
// 5. Curriculum Navigation
// ---------------------------------------------------------------------------
function renderChapter() {
  const c = chapters[current];
  $('progress').max = chapters.length;
  $('lesson-kicker').textContent = `CHAPTER ${String(current + 1).padStart(2, '0')}`;
  $('lesson-title').textContent = c.title;
  $('lesson-intro').textContent = c.intro;
  $('lesson-body').innerHTML = c.body;
  $('progress').value = current + 1;
  $('progress-text').textContent = `${current + 1} of ${chapters.length}`;
  $('previous').disabled = current === 0;
  $('next').textContent = current === chapters.length - 1 ? 'Back to first chapter' : 'Next chapter';

  document.querySelectorAll('#chapter-list button').forEach((b, i) => {
    if (i === current) b.setAttribute('aria-current', 'step');
    else b.removeAttribute('aria-current');
  });
}

function buildChapterList() {
  const list = $('chapter-list');
  list.innerHTML = '';
  chapters.forEach((c, i) => {
    const li = document.createElement('li');
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = `${String(i + 1).padStart(2, '0')} ${c.title}`;
    b.addEventListener('click', () => {
      current = i;
      renderChapter();
      $('lesson').focus({ preventScroll: true });
      $('lesson').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    li.append(b);
    list.append(li);
  });
}

// ---------------------------------------------------------------------------
// 6. Web Audio Synthesis Engine
// ---------------------------------------------------------------------------
function getNoteFrequency(v) {
  const tuning = $('tuning-select') ? $('tuning-select').value : 'pentatonic';
  if (tuning === 'pentatonic') {
    const index = Math.min(
      PENTATONIC_SCALE.length - 1,
      Math.max(0, Math.round(v * (PENTATONIC_SCALE.length - 1)))
    );
    return PENTATONIC_SCALE[index];
  }
  return 220 + v * 440;
}

function getInstrumentWaveform() {
  const inst = $('instrument-select') ? $('instrument-select').value : 'chime';
  if (inst === 'organ') return 'triangle';
  return 'sine';
}

function stopAudio() {
  isPlaying = false;
  activeOscillators.forEach(o => {
    try {
      o.stop();
    } catch (e) {
      if (e.name !== 'InvalidStateError') throw e;
    }
  });
  activeOscillators = [];
  updatePlayhead(60, false);
  if (playheadTimer) {
    clearInterval(playheadTimer);
    playheadTimer = null;
  }
  document.querySelectorAll('.curve-point').forEach(p => p.classList.remove('active-note'));
  if ($('audio-status')) $('audio-status').textContent = 'Playback stopped.';
}

async function ensureAudioContext() {
  if (audioContext && audioContext.state === 'closed') {
    audioContext = null;
  }
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return null;
  audioContext = audioContext || new Ctx();
  if (audioContext.state === 'suspended') {
    await audioContext.resume();
  }
  return audioContext;
}

async function playSingleNote(v) {
  const ctx = await ensureAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = getInstrumentWaveform();
  osc.frequency.value = getNoteFrequency(v);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.15, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.36);
}

async function playAudio() {
  stopAudio();
  const ctx = await ensureAudioContext();
  if (!ctx) {
    $('audio-status').textContent = 'Web Audio is not supported in this browser. Visual descriptions are available above.';
    return;
  }

  isPlaying = true;
  const data = getActiveDataset();
  const curve = data.curve;
  const speed = Number($('speed').value);
  const now = ctx.currentTime;
  const stepDuration = 0.18 / speed;
  const inst = $('instrument-select') ? $('instrument-select').value : 'chime';

  const x0 = 60, x1 = 610;
  const pointElements = document.querySelectorAll('.curve-point');

  curve.forEach((v, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = getInstrumentWaveform();
    osc.frequency.value = getNoteFrequency(v);

    const start = now + i * stepDuration;
    const noteEnd = start + (inst === 'chime' ? 0.16 / speed : 0.22 / speed);

    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.14, start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, noteEnd);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(start);
    osc.stop(noteEnd + 0.01);
    activeOscillators.push(osc);
  });

  const startTime = Date.now();
  const totalDurationMs = (curve.length * stepDuration) * 1000;

  playheadTimer = setInterval(() => {
    if (!isPlaying) {
      clearInterval(playheadTimer);
      return;
    }
    const elapsed = Date.now() - startTime;
    const progress = Math.min(1, elapsed / totalDurationMs);
    const currentX = x0 + (x1 - x0) * progress;
    updatePlayhead(currentX.toFixed(1), true);

    const currentIndex = Math.min(curve.length - 1, Math.floor(progress * curve.length));
    pointElements.forEach((p, idx) => {
      if (idx === currentIndex) p.classList.add('active-note');
      else p.classList.remove('active-note');
    });

    if (progress >= 1) {
      clearInterval(playheadTimer);
      playheadTimer = null;
      updatePlayhead(60, false);
      pointElements.forEach(p => p.classList.remove('active-note'));
    }
  }, 30);

  $('audio-status').textContent = `Playing ${data.name}. Higher brightness produces higher musical pitch.`;

  setTimeout(() => {
    if (activeOscillators.length && isPlaying) {
      $('audio-status').textContent = 'Playback finished.';
      activeOscillators = [];
      updatePlayhead(60, false);
    }
  }, totalDurationMs + 400);
}

// ---------------------------------------------------------------------------
// 7. Listening Challenge (Clean & Accessible)
// ---------------------------------------------------------------------------
const CHALLENGE_TARGETS = ['exoplanet', 'pulsar', 'supernova'];

function setupCosmicEarChallenge() {
  const mysteryBtn = $('play-mystery');
  const feedback = $('quiz-feedback');
  if (!mysteryBtn || !feedback) return;

  mysteryBtn.addEventListener('click', async () => {
    mysteryTarget = CHALLENGE_TARGETS[Math.floor(Math.random() * CHALLENGE_TARGETS.length)];
    const savedDataset = currentDatasetKey;
    currentDatasetKey = mysteryTarget;

    feedback.textContent = 'Playing mystery sound. Select the astronomical object you think matches this pattern.';
    await playAudio();

    currentDatasetKey = savedDataset;
  });

  document.querySelectorAll('.guess-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const guess = btn.getAttribute('data-guess');
      const targetObj = CELESTIAL_DATASETS[mysteryTarget];

      if (guess === mysteryTarget) {
        feedback.innerHTML = `<strong>Correct detection.</strong> That was the <strong>${targetObj.name}</strong>.<br><span class="small-note">Note: ${targetObj.funFact}</span>`;
      } else {
        feedback.innerHTML = `<strong>Not quite.</strong> Notice the sound pattern: ${targetObj.desc} Press "Play mystery sound" to listen again.`;
      }
    });
  });
}

// ---------------------------------------------------------------------------
// 8. Event Listeners & Initialization
// ---------------------------------------------------------------------------
buildChapterList();
renderChapter();
drawCurve();
setupCosmicEarChallenge();

$('previous').addEventListener('click', () => {
  if (current > 0) {
    current--;
    renderChapter();
  }
});

$('next').addEventListener('click', () => {
  current = current === chapters.length - 1 ? 0 : current + 1;
  renderChapter();
});

$('text-smaller').addEventListener('click', () => {
  fontScale = Math.max(0.85, fontScale - 0.1);
  document.documentElement.style.fontSize = `${16 * fontScale}px`;
});

$('text-larger').addEventListener('click', () => {
  fontScale = Math.min(1.5, fontScale + 0.1);
  document.documentElement.style.fontSize = `${16 * fontScale}px`;
});

$('contrast-toggle').addEventListener('click', () => {
  const enabled = document.body.classList.toggle('high-contrast');
  $('contrast-toggle').setAttribute('aria-pressed', String(enabled));
});

$('speed').addEventListener('input', () => {
  $('speed-label').textContent = `${$('speed').value}x`;
});

$('dataset-select').addEventListener('change', (e) => {
  stopAudio();
  currentDatasetKey = e.target.value;
  drawCurve();
  const ds = getActiveDataset();
  $('point-details').innerHTML = `Loaded <strong>${ds.name}</strong>. Press Play sonification to listen or Tab through points.`;
});

$('instrument-select').addEventListener('change', () => {
  if (isPlaying) playAudio();
});

$('tuning-select').addEventListener('change', () => {
  if (isPlaying) playAudio();
});

$('play-sound').addEventListener('click', playAudio);
$('stop-sound').addEventListener('click', stopAudio);
window.addEventListener('pagehide', stopAudio);
