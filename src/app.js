// SAGAN — Sonification of Astronomical Data
// Educational Platform & Interactive Celestial Sound Lab

// ---------------------------------------------------------------------------
// 1. Curriculum Chapters (7 chapters)
// ---------------------------------------------------------------------------
const chapters = [
  {
    title: 'Welcome to SAGAN',
    intro: 'Astronomy is the study of objects and events beyond Earth — stars, planets, galaxies, and everything in between. Scientists use careful observations, measurements, and questions to understand a universe far too large to visit.',
    body: `<h3>What is SAGAN?</h3>
<p>SAGAN stands for <strong>Sonification of Astronomical Data</strong>. It is an open-source learning space that helps you explore how astronomers study the cosmos — through reading <em>and</em> through musical sound.</p>
<h3>What you will learn</h3>
<ul>
  <li>How light carries information from distant stars, planets, and galaxies across space.</li>
  <li>How astronomers turn observations into data graphs called <em>light curves</em>.</li>
  <li>How <em>sonification</em> translates brightness into musical pitch and rhythm.</li>
  <li>How to recognize exoplanets, pulsars, and supernovae by their unique cosmic melodies.</li>
  <li>How to ask thoughtful scientific questions and evaluate evidence.</li>
</ul>
<div class="callout">
  <strong>Sound in space:</strong> Space is a near vacuum, so sound waves cannot travel through it. Sonification is a human-designed translation tool: we map real scientific data (such as light intensity) into audio so we can explore patterns with our ears!
</div>
<h3>How to explore</h3>
<p>Use the chapter buttons to move through the lessons. Scroll down to the <strong>Interactive Sound Lab</strong> to test different celestial objects and instruments, or try the <strong>Cosmic Ear Quiz</strong>!</p>`
  },
  {
    title: 'What is a light curve?',
    intro: 'A light curve is a graph showing how the measured brightness of an astronomical object changes over time. It is one of the most powerful tools in modern astrophysics.',
    body: `<h3>How to read a light curve</h3>
<ul>
  <li><strong>Horizontal axis (x):</strong> Time — this can range from milliseconds for a pulsar to days, months, or years for orbiting planets or exploding stars.</li>
  <li><strong>Vertical axis (y):</strong> Measured brightness (or <em>flux</em>). Higher up means brighter; lower down means dimmer.</li>
  <li><strong>Patterns:</strong> A temporary dip, a rhythmic pulse, or a sharp flare tells us a physical story about what is happening millions of miles away.</li>
</ul>
<h3>What causes a dip?</h3>
<p>When an exoplanet passes directly between its host star and our telescope, it blocks a tiny percentage of the star's light. In a light curve, this creates a distinctive, U-shaped dip known as a <strong>transit</strong>.</p>
<div class="callout">
  <strong>Try it in the Sound Lab:</strong> Select the <em>Exoplanet Transit</em> dataset below. As the brightness dips, notice how the musical pitch descends smoothly, then rises back to baseline when the planet moves past!
</div>`
  },
  {
    title: 'Patterns, noise, and evidence',
    intro: 'Real astronomical observations are never perfectly smooth lines. Instruments, cosmic rays, and detector noise all leave signatures that scientists must disentangle.',
    body: `<h3>Questions astronomers ask</h3>
<ul>
  <li>Does the pattern repeat with a consistent clockwork period?</li>
  <li>Could the signal be an instrumental glitch or satellite interference?</li>
  <li>How large is the measurement uncertainty compared to the signal depth?</li>
  <li>Can we confirm the event using multiple observatories at different wavelengths?</li>
</ul>
<h3>Noise vs. Signal</h3>
<p>In data sonification, random noise sounds like a subtle background hiss or flutter, while a true astronomical signal has a coherent musical structure: a recurring rhythm or a deliberate melodic contour.</p>
<div class="callout">
  <strong>Science is about verification:</strong> Finding an interesting pattern is only the beginning. True discovery requires ruling out every alternative explanation before claiming a detection.
</div>`
  },
  {
    title: 'Stars, planets, and exoplanets',
    intro: 'Our Sun is one of hundreds of billions of stars in the Milky Way. Over the past three decades, astronomers have discovered thousands of other worlds — exoplanets — orbiting distant stars.',
    body: `<h3>How we discover exoplanets</h3>
<ul>
  <li><strong>Transit Photometry:</strong> Measuring the tiny periodic dip in starlight when a world crosses its star (used by NASA\'s Kepler and TESS missions).</li>
  <li><strong>Radial Velocity:</strong> Detecting the gravitational wobble of a star as an orbiting planet tugs it back and forth, shifting its light spectrum.</li>
  <li><strong>Direct Imaging:</strong> Blocking the blinding glare of the host star with a coronagraph to photograph young, hot giant planets directly.</li>
  <li><strong>Gravitational Microlensing:</strong> Using the gravity of a star and planet to bend and magnify light from a more distant background star.</li>
</ul>
<div class="callout">
  <strong>Did you know?</strong> An Earth-sized planet passing in front of a Sun-like star blocks only about 0.01% (one part in 10,000) of the star's light! Telescopes must be exquisitely precise to measure this.
</div>`
  },
  {
    title: 'Listen to the data',
    intro: 'Data sonification translates information into sound. By choosing musical mappings like pitch, rhythm, and timbre, we can perceive complex time-series data with our ears.',
    body: `<h3>Why use music for science?</h3>
<p>Human ears are remarkably sensitive to pitch shifts, timing variations, and harmonic changes. Sonification offers:
<ul>
  <li><strong>Accessible science:</strong> Blind and low-vision learners and researchers can inspect astronomical data independently without relying on eyesight.</li>
  <li><strong>Multisensory insight:</strong> Hearing and seeing data simultaneously reinforces memory and helps identify subtle periodicities that eyes might overlook.</li>
  <li><strong>Musical joy:</strong> Translating real celestial phenomena into musical scales bridges art, mathematics, and physics for students of all ages.</li>
</ul>
<div class="callout">
  <strong>Try Musical Tuning:</strong> In the Sound Lab below, switch between <em>Harmonious Pentatonic Melody</em> (which snaps data to musical notes) and <em>Continuous Pitch</em> (which plays exact physical frequencies).
</div>`
  },
  {
    title: 'Build and contribute',
    intro: 'SAGAN is an open-source educational platform built by and for a global community of educators, students, astronomers, and software developers.',
    body: `<h3>Ways you can contribute</h3>
<ul>
  <li><strong>Add a new dataset:</strong> Model a real astronomical event (e.g. James Webb or Hubble observations) following our data guidelines.</li>
  <li><strong>Write a new lesson:</strong> Author a chapter using our structured <code>curriculum/LESSON_TEMPLATE.md</code>.</li>
  <li><strong>Improve accessibility:</strong> Test with screen readers (NVDA, VoiceOver, JAWS) and enhance keyboard navigation.</li>
  <li><strong>Create new audio synthesis modes:</strong> Add new instrument timbres or scale systems in the Web Audio engine.</li>
  <li><strong>Translate:</strong> Help translate lessons into Spanish, French, Hindi, Japanese, and other languages.</li>
</ul>
<div class="callout">
  Check out <a href="CONTRIBUTING.md">CONTRIBUTING.md</a> and <a href="DEVELOPMENT.md">DEVELOPMENT.md</a> to learn how our codebase works and submit your first pull request!
</div>`
  },
  {
    title: 'Coming soon — your chapter here',
    intro: 'This chapter space is reserved for our community. We invite educators, scientists, and student coders to write the next chapter of SAGAN!',
    body: `<h3>Upcoming Curriculum Topics</h3>
<p>Our roadmap includes 10 planned learning tracks, including:</p>
<ul>
  <li>The Life and Death of Stars (White dwarfs, neutron stars, and black holes).</li>
  <li>Gravitational Waves: Hearing the cosmic chirp of colliding black holes!</li>
  <li>Telescopes &amp; Detectors: How space observatories collect photons.</li>
  <li>Cosmology &amp; The Expanding Universe.</li>
</ul>
<div class="callout">
  Ready to share your passion for space and music? Open an issue on GitHub to propose your lesson idea!
</div>`
  }
];

// ---------------------------------------------------------------------------
// 2. Celestial Datasets Registry (Extensible for Open Source Contributors)
// ---------------------------------------------------------------------------
const CELESTIAL_DATASETS = {
  exoplanet: {
    id: 'exoplanet',
    name: '🪐 Exoplanet Transit (Kepler-style)',
    category: 'Exoplanets',
    title: 'Exoplanet Transit Light Curve',
    desc: 'The brightness is mostly steady, drops smoothly into a U-shaped dip near the middle as a planet crosses the star, and then returns to baseline.',
    timeLabel: 'Time (Hours) →',
    fluxLabel: 'Relative Starlight',
    provenance: 'Synthetic model representing a hot Jupiter transiting a solar-type star.',
    funFact: 'Over 5,000 exoplanets have been discovered by measuring these tiny starlight dips!',
    // 25 normalized data points (0.0 to 1.0)
    curve: [0.80, 0.81, 0.80, 0.82, 0.79, 0.80, 0.79, 0.81, 0.80, 0.79, 0.62, 0.43, 0.36, 0.44, 0.63, 0.79, 0.80, 0.81, 0.79, 0.80, 0.82, 0.80, 0.79, 0.81, 0.80]
  },
  pulsar: {
    id: 'pulsar',
    name: '⏳ Pulsar Lighthouse (Spinning Neutron Star)',
    category: 'Neutron Stars',
    title: 'Pulsar Periodic Radio Beams',
    desc: 'A steady quiet baseline broken by sharp, rhythmic high-energy pulses that recur with clockwork precision.',
    timeLabel: 'Time (Milliseconds) →',
    fluxLabel: 'Radio Pulse Intensity',
    provenance: 'Model based on the Crab Pulsar, a neutron star spinning 30 times every second.',
    funFact: 'When pulsars were first discovered in 1967, astronomers temporarily nicknamed the signal LGM-1 for "Little Green Men" because it was so rhythmic!',
    curve: [0.15, 0.95, 0.15, 0.15, 0.95, 0.15, 0.15, 0.95, 0.15, 0.15, 0.95, 0.15, 0.15, 0.95, 0.15, 0.15, 0.95, 0.15, 0.15, 0.95, 0.15, 0.15, 0.95, 0.15, 0.15]
  },
  cepheid: {
    id: 'cepheid',
    name: '✨ Cepheid Variable (Cosmic Heartbeat)',
    category: 'Variable Stars',
    title: 'Pulsating Cepheid Variable Star',
    desc: 'A smooth, periodic rising and falling wave of starlight as the giant star physically swells and contracts.',
    timeLabel: 'Time (Days) →',
    fluxLabel: 'Pulsating Brightness',
    provenance: 'Model inspired by Delta Cephei, the prototype pulsating star discovered in 1784.',
    funFact: 'Cepheid variables act as cosmic yardsticks: the rhythm of their pulsation reveals their true brightness, allowing astronomers to calculate distances to other galaxies!',
    curve: [0.40, 0.50, 0.65, 0.82, 0.95, 0.88, 0.75, 0.62, 0.52, 0.45, 0.40, 0.50, 0.65, 0.82, 0.95, 0.88, 0.75, 0.62, 0.52, 0.45, 0.40, 0.50, 0.65, 0.82, 0.95]
  },
  supernova: {
    id: 'supernova',
    name: '💥 Supernova Flare (Exploding Star)',
    category: 'Stellar Explosions',
    title: 'Type Ia Supernova Light Curve',
    desc: 'A quiet, faint baseline followed by a sudden, brilliant flash of starlight that peaks rapidly and fades slowly over many months.',
    timeLabel: 'Time (Weeks) →',
    fluxLabel: 'Explosion Brightness',
    provenance: 'Model representing the radioactive nickel decay curve of an exploding white dwarf.',
    funFact: 'A single supernova can briefly outshine all of the hundreds of billions of stars in its host galaxy combined!',
    curve: [0.10, 0.12, 0.10, 0.11, 0.98, 0.92, 0.85, 0.78, 0.72, 0.66, 0.60, 0.55, 0.50, 0.46, 0.42, 0.38, 0.35, 0.32, 0.30, 0.28, 0.26, 0.24, 0.22, 0.20, 0.18]
  },
  binary: {
    id: 'binary',
    name: '🎶 Eclipsing Binary Stars (Cosmic Waltz)',
    category: 'Multiple Stars',
    title: 'Eclipsing Binary Star Light Curve',
    desc: 'Two alternating brightness dips: a deeper primary eclipse when the bright star is hidden, and a shallower secondary eclipse when the dimmer companion is covered.',
    timeLabel: 'Time (Days) →',
    fluxLabel: 'Combined Brightness',
    provenance: 'Model inspired by the star Algol (the Demon Star) in the constellation Perseus.',
    funFact: 'More than half of the stars you see in the night sky actually have one or more partner stars dancing with them in space!',
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

// C Major Pentatonic frequencies across 2 octaves for musical quantization mode
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
// 4. Interactive SVG Graph & Playhead
// ---------------------------------------------------------------------------
function drawCurve() {
  const data = getActiveDataset();
  const curve = data.curve;
  const x0 = 60, x1 = 610, y0 = 35, y1 = 225;

  const points = curve
    .map((v, i) => `${(x0 + (x1 - x0) * i / (curve.length - 1)).toFixed(1)},${(y1 - (y1 - y0) * v).toFixed(1)}`)
    .join(' ');

  $('curve-line').setAttribute('d', 'M' + points.replaceAll(' ', ' L'));

  // Update SVG descriptions for accessibility
  $('curve-title').textContent = data.title;
  $('curve-desc').textContent = data.desc;
  $('chart-description').textContent = data.desc;
  $('current-chart-title').textContent = data.title;
  $('axis-time-label').textContent = data.timeLabel;
  $('axis-flux-label').textContent = data.fluxLabel;
  $('chart-provenance-note').textContent = data.provenance;

  // Build interactive point circles
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
    circle.setAttribute('aria-label', `Point ${i + 1} of ${curve.length}: Brightness ${(v * 100).toFixed(0)}%`);

    const showPointInfo = () => {
      $('point-details').innerHTML = `<strong>Point ${i + 1}/${curve.length}:</strong> Relative Brightness ${(v * 100).toFixed(0)}% &bull; Frequency ${getNoteFrequency(v).toFixed(0)} Hz &bull; <em>Click to hear note</em>`;
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
  $('next').textContent = current === chapters.length - 1 ? 'Back to first chapter ↺' : 'Next chapter →';

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
    b.textContent = `${String(i + 1).padStart(2, '0')}  ${c.title}`;
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
// 6. Web Audio Musical Engine
// ---------------------------------------------------------------------------
function getNoteFrequency(v) {
  const tuning = $('tuning-select') ? $('tuning-select').value : 'pentatonic';
  if (tuning === 'pentatonic') {
    // Quantize continuous flux (0.0 to 1.0) into the closest pentatonic note
    const index = Math.min(
      PENTATONIC_SCALE.length - 1,
      Math.max(0, Math.round(v * (PENTATONIC_SCALE.length - 1)))
    );
    return PENTATONIC_SCALE[index];
  }
  // Continuous scientific frequency mapping: 220 Hz (A3) to 660 Hz (E5)
  return 220 + v * 440;
}

function getInstrumentWaveform() {
  const inst = $('instrument-select') ? $('instrument-select').value : 'chime';
  if (inst === 'organ') return 'triangle';
  if (inst === 'synth') return 'sine';
  return 'sine'; // 'chime' uses sine with fast decay envelope
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
  // Remove active highlight from points
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
    $('audio-status').textContent = 'This browser does not support Web Audio. Visual explanations are available above.';
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

  // Animated visual playhead synchronization
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

  $('audio-status').textContent = `Playing ${data.name}. Higher brightness maps to a higher musical pitch.`;

  setTimeout(() => {
    if (activeOscillators.length && isPlaying) {
      $('audio-status').textContent = 'Playback complete. Select another celestial object or listen again!';
      activeOscillators = [];
      updatePlayhead(60, false);
    }
  }, totalDurationMs + 400);
}

// ---------------------------------------------------------------------------
// 7. Kids Cosmic Ear Challenge Mini-Game
// ---------------------------------------------------------------------------
const CHALLENGE_TARGETS = ['exoplanet', 'pulsar', 'supernova'];

function setupCosmicEarChallenge() {
  const mysteryBtn = $('play-mystery');
  const feedback = $('quiz-feedback');
  if (!mysteryBtn || !feedback) return;

  mysteryBtn.addEventListener('click', async () => {
    // Pick a random target
    mysteryTarget = CHALLENGE_TARGETS[Math.floor(Math.random() * CHALLENGE_TARGETS.length)];
    const savedDataset = currentDatasetKey;
    currentDatasetKey = mysteryTarget;

    feedback.textContent = '🎧 Listening to mystery sound... Which cosmic object matches this pattern?';
    await playAudio();

    // Restore dataset view
    currentDatasetKey = savedDataset;
  });

  document.querySelectorAll('.guess-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const guess = btn.getAttribute('data-guess');
      const targetObj = CELESTIAL_DATASETS[mysteryTarget];

      if (guess === mysteryTarget) {
        feedback.innerHTML = `🎉 <strong>Stellar Job! You found it!</strong> That was the <strong>${targetObj.name}</strong>.<br><span class="fun-fact">⭐ <em>Cosmic Fact:</em> ${targetObj.funFact}</span>`;
      } else {
        feedback.innerHTML = `🔭 <strong>Nice try!</strong> That wasn't quite it. Listen closely: ${targetObj.desc} Try pressing "Play Mystery Cosmic Sound" again!`;
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

// Chapter navigation buttons
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

// Accessibility Display Controls
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

// Sound Lab Controls
$('speed').addEventListener('input', () => {
  $('speed-label').textContent = `${$('speed').value}×`;
});

$('dataset-select').addEventListener('change', (e) => {
  stopAudio();
  currentDatasetKey = e.target.value;
  drawCurve();
  const ds = getActiveDataset();
  $('point-details').innerHTML = `Loaded <strong>${ds.name}</strong>. Press Play to listen or click any point.`;
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
