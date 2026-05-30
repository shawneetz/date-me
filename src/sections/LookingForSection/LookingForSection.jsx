import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import "./LookingForSection.css";

/* ── Frequency data ────────────────────────────────────────────
   Each station = one trait, expressed as a broadcast signal.
   "note" appears as a secondary callout beneath the message.
──────────────────────────────────────────────────────────────── */
const FREQUENCIES = [
  {
    freq: "87.3",
    label: "SILENCE FM",
    message: "people who know silence isn't awkward",
    note: "comfortable coexistence",
    signal: 8,
  },
  {
    freq: "91.2",
    label: "ODD FM",
    message: "someone who sends strange songs at 2am with no explanation",
    note: "no context needed",
    signal: 7,
  },
  {
    freq: "95.8",
    label: "DEPTH FM",
    message: "emotionally curious and openly weird — in the best way",
    note: "surface-level conversation optional",
    signal: 10,
  },
  {
    freq: "98.6",
    label: "CHAOS FM",
    message: "soft-spoken with a very chaotic inner life",
    note: "controlled entropy",
    signal: 6,
  },
  {
    freq: "101.4",
    label: "ROAM FM",
    message: "someone who romanticizes convenience stores at midnight",
    note: "night market energy",
    signal: 9,
  },
  {
    freq: "104.9",
    label: "SLOW FM",
    message: "patient enough to let things grow at their own pace",
    note: "no rushing required",
    signal: 9,
  },
];

const MIN_FREQ = 87.0;
const MAX_FREQ = 107.9;
const SNAP_RANGE = 0.9;

function freqToPercent(f) {
  return ((parseFloat(f) - MIN_FREQ) / (MAX_FREQ - MIN_FREQ)) * 100;
}

function percentToFreq(p) {
  return (MIN_FREQ + (p / 100) * (MAX_FREQ - MIN_FREQ)).toFixed(1);
}

/* ── Waveform equalizer bars ─────────────────────────────────── */
function Waveform({ active, accent = "#60C8D0" }) {
  const BARS = 32;
  // Pre-generate stable heights
  const heights = useRef(
    Array.from(
      { length: BARS },
      (_, i) => Math.abs(Math.sin(i * 0.72 + 0.3)) * 0.65 + 0.18,
    ),
  );
  return (
    <div className="radio-waveform" aria-hidden="true">
      {heights.current.map((h, i) => (
        <div
          key={i}
          className={`radio-wave-bar${active ? " active" : ""}`}
          style={{
            height: `${h * 100}%`,
            background: active ? accent : "rgba(30, 95, 110, 0.25)",
            "--wave-speed": `${0.45 + (i % 5) * 0.09}s`,
            animationDelay: `${i * 0.028}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ── Signal strength bars ────────────────────────────────────── */
function SignalBars({ strength, accent = "#60C8D0" }) {
  const TOTAL = 9;
  return (
    <div className="radio-sig-bars" aria-hidden="true">
      {Array.from({ length: TOTAL }, (_, i) => (
        <span
          key={i}
          className="radio-sig-bar"
          style={{
            height: `${28 + i * 8}%`,
            background: i < strength ? accent : "rgba(30, 95, 110, 0.14)",
            boxShadow: i < strength ? `0 0 4px ${accent}` : "none",
          }}
        />
      ))}
    </div>
  );
}

/* ── Main component ─────────────────────────────────────────── */
export default function LookingForSection({ lookingFor }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.12 });

  // tunerPct: 0–100 (position on the track)
  const [tunerPct, setTunerPct] = useState(freqToPercent(87.3));
  const [activeStation, setActiveStation] = useState(FREQUENCIES[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  // knob rotation in degrees
  const [knobAngle, setKnobAngle] = useState(-135);

  /* Snap to nearest station when close, else null */
  const resolveStation = useCallback((pct) => {
    const freq = parseFloat(percentToFreq(pct));
    const nearest = FREQUENCIES.reduce((best, s) =>
      Math.abs(parseFloat(s.freq) - freq) <
      Math.abs(parseFloat(best.freq) - freq)
        ? s
        : best,
    );
    if (Math.abs(parseFloat(nearest.freq) - freq) <= SNAP_RANGE) {
      const snappedPct = freqToPercent(nearest.freq);
      setTunerPct(snappedPct);
      setKnobAngle(-135 + (snappedPct / 100) * 270);
      setActiveStation(nearest);
    } else {
      setActiveStation(null);
      setKnobAngle(-135 + (pct / 100) * 270);
    }
  }, []);

  /* Pointer → pct conversion */
  const pctFromPointer = useCallback((clientX) => {
    if (!trackRef.current) return 0;
    const { left, width } = trackRef.current.getBoundingClientRect();
    return Math.min(100, Math.max(0, ((clientX - left) / width) * 100));
  }, []);

  /* Mouse / touch down on track */
  const handlePointerDown = useCallback(
    (e) => {
      e.preventDefault();
      setIsDragging(true);
      const cx = e.clientX ?? e.touches?.[0]?.clientX;
      const pct = pctFromPointer(cx);
      setTunerPct(pct);
      resolveStation(pct);
    },
    [pctFromPointer, resolveStation],
  );

  /* Global move / up while dragging */
  useEffect(() => {
    if (!isDragging) return;
    const move = (e) => {
      const cx = e.clientX ?? e.touches?.[0]?.clientX;
      if (cx == null) return;
      const pct = pctFromPointer(cx);
      setTunerPct(pct);
      resolveStation(pct);
    };
    const up = () => setIsDragging(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, [isDragging, pctFromPointer, resolveStation]);

  /* Keyboard nav on the track */
  const handleKeyDown = useCallback(
    (e) => {
      const step = e.shiftKey ? 2 : 0.5;
      if (e.key === "ArrowRight" || e.key === "ArrowUp") {
        e.preventDefault();
        const next = Math.min(100, tunerPct + step);
        setTunerPct(next);
        resolveStation(next);
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
        e.preventDefault();
        const prev = Math.max(0, tunerPct - step);
        setTunerPct(prev);
        resolveStation(prev);
      }
    },
    [tunerPct, resolveStation],
  );

  /* Auto-scan animation on first mount */
  useEffect(() => {
    if (!isInView) return;
    let pct = freqToPercent(87.0);
    setIsScanning(true);
    const id = setInterval(() => {
      pct += 0.55;
      if (pct >= freqToPercent(87.3)) {
        pct = freqToPercent(87.3);
        setTunerPct(pct);
        setKnobAngle(-135 + (pct / 100) * 270);
        resolveStation(pct);
        clearInterval(id);
        setIsScanning(false);
        return;
      }
      setTunerPct(pct);
      setKnobAngle(-135 + (pct / 100) * 270);
    }, 16);
    return () => clearInterval(id);
  }, [isInView, resolveStation]);

  const currentFreq = percentToFreq(tunerPct);
  const accent = "#60C8D0"; // light-cyan
  const hasSignal = !!activeStation;

  return (
    <motion.section
      id="looking"
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="section"
    >
      <div className="section-label">Looking for</div>

      {/* ╔═══════════════════════════════════════╗
          ║       NIGHT CITY RADIO CHASSIS        ║
          ╚═══════════════════════════════════════╝ */}
      <div
        className="radio-chassis"
        role="region"
        aria-label="Night City Radio tuner"
      >
        {/* Corner bolts */}
        <span className="radio-bolt radio-bolt--tl" aria-hidden="true" />
        <span className="radio-bolt radio-bolt--tr" aria-hidden="true" />
        <span className="radio-bolt radio-bolt--bl" aria-hidden="true" />
        <span className="radio-bolt radio-bolt--br" aria-hidden="true" />

        {/* ── TOPBAR ── */}
        <div className="radio-topbar">
          <div className="radio-brand">
            <span className="radio-brand-name">◈ NIGHT CITY RADIO</span>
            <span className="radio-brand-model">MODEL NCR-87 · FM STEREO</span>
          </div>
          <div className="radio-topbar-right">
            <div className="radio-power-led">
              <span
                className={`radio-power-dot${isInView ? " on" : ""}`}
                aria-hidden="true"
              />
              {hasSignal ? "RECEIVING" : isScanning ? "SCANNING" : "STANDBY"}
            </div>
            {hasSignal && <span className="radio-rec-dot" aria-hidden="true" />}
          </div>
        </div>

        {/* ── MAIN DISPLAY (LCD + Dial) ── */}
        <div className="radio-main">
          {/* LCD Screen */}
          <div className="radio-lcd">
            <div className="radio-lcd-scanlines" aria-hidden="true" />

            {/* Frequency readout */}
            <div className="radio-lcd-freq-row">
              <span className="radio-lcd-band">FM</span>
              <span
                className={`radio-lcd-freq${!hasSignal && !isScanning ? " no-signal" : ""}`}
              >
                {currentFreq}
              </span>
              <span className="radio-lcd-mhz">MHz</span>
            </div>

            {/* Station name */}
            <div
              className={`radio-lcd-station${hasSignal ? " found" : " searching"}`}
            >
              {hasSignal
                ? activeStation.label
                : isScanning
                  ? "SCANNING..."
                  : "– – – – –"}
            </div>

            {/* Equalizer waveform */}
            <Waveform active={hasSignal} accent={accent} />
          </div>

          {/* Dial column */}
          <div className="radio-dial-col">
            {/* Rotary tuning knob */}
            <div
              className="radio-knob-wrap"
              onMouseDown={handlePointerDown}
              onTouchStart={handlePointerDown}
              aria-label="Tuning knob"
              title="Drag to tune"
            >
              <div className="radio-knob">
                <div className="radio-knob-bezel" />
                <div className="radio-knob-ticks" />
                <motion.div
                  className="radio-knob-face"
                  animate={{ rotate: knobAngle }}
                  transition={{ type: "spring", stiffness: 300, damping: 28 }}
                >
                  <div className="radio-knob-indicator" />
                  <div className="radio-knob-center" />
                </motion.div>
              </div>
              <span className="radio-knob-label">TUNE</span>
            </div>

            {/* Signal bars */}
            <div className="radio-sig-wrap">
              <span className="radio-sig-label">SIG</span>
              <SignalBars
                strength={hasSignal ? activeStation.signal : 0}
                accent={accent}
              />
            </div>
          </div>
        </div>

        {/* ── TUNER STRIP ── */}
        <div className="radio-tuner-strip">
          {/* Scale labels */}
          <div className="radio-scale-labels" aria-hidden="true">
            {[88, 92, 96, 100, 104, 108].map((f) => (
              <span key={f}>{f}</span>
            ))}
          </div>

          {/* Station triangle markers */}
          <div className="radio-station-marks" aria-hidden="true">
            {FREQUENCIES.map((s) => (
              <span
                key={s.freq}
                className={`radio-station-mark${
                  activeStation?.freq === s.freq ? " active-mark" : ""
                }`}
                style={{ left: `${freqToPercent(s.freq)}%` }}
              />
            ))}
          </div>

          {/* Draggable track */}
          <div
            ref={trackRef}
            className={`radio-track${isDragging ? " dragging" : ""}`}
            role="slider"
            aria-label="FM tuner"
            aria-valuemin={MIN_FREQ}
            aria-valuemax={MAX_FREQ}
            aria-valuenow={parseFloat(currentFreq)}
            tabIndex={0}
            onMouseDown={handlePointerDown}
            onTouchStart={handlePointerDown}
            onKeyDown={handleKeyDown}
          >
            <div
              className="radio-track-fill"
              style={{ width: `${tunerPct}%` }}
            />

            {/* Animated needle */}
            <motion.div
              className="radio-needle"
              animate={{ left: `${tunerPct}%` }}
              transition={{ type: "spring", stiffness: 380, damping: 32 }}
            >
              <div className="radio-needle-head" />
              <div className="radio-needle-stem" />
            </motion.div>
          </div>
        </div>

        {/* ── READOUT AREA ── */}
        <div className="radio-readout">
          <div className="radio-readout-inner">
            <AnimatePresence mode="wait">
              {hasSignal ? (
                <motion.div
                  key={activeStation.freq}
                  className="radio-readout-found"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="radio-readout-tag">
                    <span
                      className="radio-readout-tag-dot"
                      aria-hidden="true"
                    />
                    {activeStation.freq} FM · {activeStation.label}
                  </div>
                  <p className="radio-readout-message">
                    &ldquo;{activeStation.message}&rdquo;
                  </p>
                  <span className="radio-readout-note">
                    ▸ {activeStation.note}
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  key="static"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="radio-readout-static">
                    {isScanning
                      ? "SCANNING FOR SIGNAL..."
                      : "TUNE TO FIND A STATION"}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ── PRESET BUTTONS ── */}
        <div
          className="radio-presets"
          role="group"
          aria-label="Station presets"
        >
          {FREQUENCIES.map((s) => (
            <button
              key={s.freq}
              type="button"
              className={`radio-preset${activeStation?.freq === s.freq ? " is-active" : ""}`}
              onClick={() => {
                const pct = freqToPercent(s.freq);
                setTunerPct(pct);
                setKnobAngle(-135 + (pct / 100) * 270);
                setActiveStation(s);
              }}
              aria-pressed={activeStation?.freq === s.freq}
              aria-label={`${s.freq} FM — ${s.label}`}
            >
              <div className="radio-preset-cap" aria-hidden="true" />
              <span className="radio-preset-freq">{s.freq}</span>
              <span className="radio-preset-name">{s.label}</span>
            </button>
          ))}
        </div>

        {/* ── CHASSIS FOOTER ── */}
        <div className="radio-footer" aria-hidden="true">
          <span className="radio-footer-left">◂ DRAG NEEDLE TO TUNE ▸</span>
          <div className="radio-footer-center">
            {FREQUENCIES.map((s) => (
              <span
                key={s.freq}
                className={`radio-footer-pip${
                  activeStation?.freq === s.freq ? " active" : ""
                }`}
              />
            ))}
          </div>
          <span className="radio-footer-right">
            {FREQUENCIES.length} STATIONS
          </span>
        </div>
      </div>

      {/* Closing prose from data */}
      {lookingFor?.body && (
        <motion.p
          className="radio-prose"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {lookingFor.body}
        </motion.p>
      )}
    </motion.section>
  );
}
