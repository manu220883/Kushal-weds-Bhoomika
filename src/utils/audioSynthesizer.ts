/**
 * Web Audio Synthesizer for Traditional South Indian Nadaswaram & Tanpura Drone
 * Synthesizes authentic Indian wedding auspicious raaga tones (Raga Mohanam / Kalyani)
 */

class NadaswaramAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private timerId: number | null = null;
  private tanpuraNodes: { osc: OscillatorNode; gain: GainNode }[] = [];
  private masterGain: GainNode | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Authentic Raga Mohanam auspicious notes in Hz (Scale: E4 root / Katakattai ~ 329.63Hz)
  private readonly notes = [
    { freq: 329.63, duration: 0.6 }, // Sa
    { freq: 370.00, duration: 0.5 }, // Ri
    { freq: 415.30, duration: 0.8 }, // Ga
    { freq: 493.88, duration: 0.7 }, // Pa
    { freq: 554.37, duration: 0.8 }, // Dha
    { freq: 659.25, duration: 1.2 }, // Sa' (higher)
    { freq: 554.37, duration: 0.6 }, // Dha
    { freq: 493.88, duration: 0.7 }, // Pa
    { freq: 415.30, duration: 0.8 }, // Ga
    { freq: 370.00, duration: 0.6 }, // Ri
    { freq: 329.63, duration: 1.5 }, // Sa (holding auspicious note)
    // Variation 2
    { freq: 415.30, duration: 0.5 }, // Ga
    { freq: 493.88, duration: 0.5 }, // Pa
    { freq: 554.37, duration: 0.6 }, // Dha
    { freq: 659.25, duration: 0.9 }, // Sa'
    { freq: 740.00, duration: 0.7 }, // Ri'
    { freq: 659.25, duration: 1.2 }, // Sa'
    { freq: 554.37, duration: 0.6 }, // Dha
    { freq: 493.88, duration: 0.8 }, // Pa
    { freq: 415.30, duration: 0.7 }, // Ga
    { freq: 370.00, duration: 0.6 }, // Ri
    { freq: 329.63, duration: 2.0 }, // Sacred conclusion
  ];

  private startTanpuraDrone() {
    if (!this.ctx || !this.masterGain) return;
    this.stopTanpuraDrone();

    // Fundamental Sa (164.81 Hz), Pa (246.94 Hz), Higher Sa (329.63 Hz)
    const droneFreqs = [164.81, 246.94, 329.63];

    droneFreqs.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = idx === 0 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Gentle tremolo / pulsing swell
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.2 + idx * 0.1, this.ctx.currentTime);
      lfoGain.gain.setValueAtTime(0.03, this.ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(gain.gain);
      lfo.start();

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start();

      this.tanpuraNodes.push({ osc, gain });
    });
  }

  private stopTanpuraDrone() {
    this.tanpuraNodes.forEach(({ osc, gain }) => {
      try {
        gain.gain.exponentialRampToValueAtTime(0.0001, (this.ctx?.currentTime || 0) + 0.5);
        setTimeout(() => osc.stop(), 500);
      } catch {
        // Safe disposal
      }
    });
    this.tanpuraNodes = [];
  }

  private playNadaswaramNote(freq: number, duration: number) {
    if (!this.ctx || !this.masterGain) return;

    // Nadaswaram reed sound: dual oscillators (sawtooth + slightly detuned square with bandpass filter)
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const noteGain = this.ctx.createGain();

    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(freq, this.ctx.currentTime);

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq * 1.002, this.ctx.currentTime); // Slight natural chorus/gamaka

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(freq * 1.8, this.ctx.currentTime);
    filter.Q.setValueAtTime(2.5, this.ctx.currentTime);

    // Natural reed attack and vibrato
    const now = this.ctx.currentTime;
    noteGain.gain.setValueAtTime(0.001, now);
    noteGain.gain.linearRampToValueAtTime(0.25, now + 0.08); // gentle attack
    noteGain.gain.exponentialRampToValueAtTime(0.18, now + duration * 0.7);
    noteGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration);
    osc2.stop(now + duration);
  }

  public play() {
    this.initContext();
    if (this.isPlaying) return;
    this.isPlaying = true;

    this.startTanpuraDrone();

    let noteIdx = 0;
    const scheduleNextNote = () => {
      if (!this.isPlaying) return;
      const current = this.notes[noteIdx];
      this.playNadaswaramNote(current.freq, current.duration);

      const delayMs = current.duration * 950;
      noteIdx = (noteIdx + 1) % this.notes.length;
      this.timerId = window.setTimeout(scheduleNextNote, delayMs);
    };

    scheduleNextNote();
  }

  public stop() {
    this.isPlaying = false;
    if (this.timerId !== null) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    this.stopTanpuraDrone();
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const weddingAudio = new NadaswaramAudioEngine();
