let ctx: AudioContext | null = null;

const getCtx = (): AudioContext => {
  if (!ctx) {
    ctx = new AudioContext();
  }
  return ctx;
};

const ramp = (
  gain: GainNode,
  ac: AudioContext,
  startVal: number,
  endVal: number,
  startTime: number,
  endTime: number,
) => {
  gain.gain.setValueAtTime(startVal, startTime);
  gain.gain.linearRampToValueAtTime(endVal, endTime);
};

export const playPlaceSound = (): void => {
  const ac = getCtx();
  const osc = ac.createOscillator();
  const gain = ac.createGain();

  osc.connect(gain);
  gain.connect(ac.destination);

  osc.type = "sine";
  osc.frequency.setValueAtTime(520, ac.currentTime);
  osc.frequency.linearRampToValueAtTime(620, ac.currentTime + 0.06);

  ramp(gain, ac, 0.18, 0, ac.currentTime, ac.currentTime + 0.12);

  osc.start(ac.currentTime);
  osc.stop(ac.currentTime + 0.12);
};

export const playOccupiedSound = (): void => {
  const ac = getCtx();
  const osc = ac.createOscillator();
  const gain = ac.createGain();

  osc.connect(gain);
  gain.connect(ac.destination);

  osc.type = "square";
  osc.frequency.setValueAtTime(160, ac.currentTime);
  osc.frequency.linearRampToValueAtTime(100, ac.currentTime + 0.15);

  ramp(gain, ac, 0.12, 0, ac.currentTime, ac.currentTime + 0.18);

  osc.start(ac.currentTime);
  osc.stop(ac.currentTime + 0.18);
};

export const playWinSound = (): void => {
  const ac = getCtx();
  const notes = [523.25, 659.25, 783.99, 1046.5];
  const duration = 0.12;
  const gap = 0.13;

  notes.forEach((freq, i) => {
    const osc = ac.createOscillator();
    const gain = ac.createGain();

    osc.connect(gain);
    gain.connect(ac.destination);

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, ac.currentTime);

    const start = ac.currentTime + i * gap;
    const end = start + duration;

    ramp(gain, ac, 0.22, 0, start, end);

    osc.start(start);
    osc.stop(end);
  });
};

export const playDrawSound = (): void => {
  const ac = getCtx();
  const notes = [440, 370, 320];
  const duration = 0.14;
  const gap = 0.15;

  notes.forEach((freq, i) => {
    const osc = ac.createOscillator();
    const gain = ac.createGain();

    osc.connect(gain);
    gain.connect(ac.destination);

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, ac.currentTime);

    const start = ac.currentTime + i * gap;
    const end = start + duration;

    ramp(gain, ac, 0.18, 0, start, end);

    osc.start(start);
    osc.stop(end);
  });
};
