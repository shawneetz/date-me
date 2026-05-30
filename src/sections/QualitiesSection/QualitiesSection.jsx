/**
 * src/sections/QualitiesSection.jsx
 *
 * TRANSIT LINE STATUS BOARD
 * Each quality is a "line" currently operational on the City Personality Transit.
 *
 * Features:
 * - CRT amber monochrome aesthetic (consistent with project's retro theme)
 * - Per-line LED bullet with unique color
 * - Activity meter (health-bar style pips)
 * - Status badge (OPERATIONAL / OVERCLOCKED / STABLE / ACTIVE / etc.)
 * - Hover/click → "Station Log" panel with diary-like timestamps
 * - Periodic LED flicker animation
 * - Scrolling ticker strip
 * - Live clock in topbar
 * - Scanlines, chromatic aberration, analog noise
 *
 * Data source: profile.qualities[] from shawn.js
 * Each quality: { id, iconKey, title, preview, body }
 */

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./QualitiesSection.css";

/* ── Per-line color palette (LED bullet colors) ─────────────────── */
const LINE_COLORS = [
  "#60C8D0", // cyan
  "#ffe066", // bright yellow-amber
  "#8dff8d", // signal green
  "#F06E6E", // soft red
  "#8B8FF0", // violet
  "#ffb347", // orange-amber
];

/* ── Status config per quality ──────────────────────────────────── */
// Maps quality id → { status, meter (0–10), logs[] }
// These are hand-tuned to feel authentic for each trait.
const QUALITY_CONFIG = {
  spontaneous: {
    status: "ACTIVE",
    badgeClass: "active",
    meter: 8,
    flicker: true,
    logs: [
      {
        ts: "01:47 AM",
        text: "Decided to start building this website instead of sleeping.",
      },
      {
        ts: "11:23 PM",
        text: "Went for a midnight walk. No reason. Just felt like it.",
      },
    ],
  },
  listener: {
    status: "OPERATIONAL",
    badgeClass: "operational",
    meter: 10,
    flicker: false,
    logs: [
      {
        ts: "02:14 AM",
        text: "Stayed up helping a friend debug for 4 hours. Never checked the time.",
      },
      {
        ts: "09:40 PM",
        text: "Didn't say a word for 20 minutes. Just listened. That was enough.",
      },
    ],
  },
  direct: {
    status: "STABLE",
    badgeClass: "stable",
    meter: 9,
    flicker: false,
    logs: [
      {
        ts: "03:55 PM",
        text: "Said the uncomfortable thing. The conversation went better because of it.",
      },
      {
        ts: "10:12 PM",
        text: "Drafted the message three times. Sent the honest one.",
      },
    ],
  },
};

/* ── Fallback config for any extra qualities added later ─────────── */
const FALLBACK_CONFIGS = [
  {
    status: "OPERATIONAL",
    badgeClass: "operational",
    meter: 9,
    flicker: false,
  },
  { status: "ACTIVE", badgeClass: "active", meter: 7, flicker: true },
  { status: "STABLE", badgeClass: "stable", meter: 8, flicker: false },
];

function getConfig(item, index) {
  return (
    QUALITY_CONFIG[item.id] ?? FALLBACK_CONFIGS[index % FALLBACK_CONFIGS.length]
  );
}

/* ── Live clock ─────────────────────────────────────────────────── */
function useClock() {
  const [time, setTime] = useState(() => {
    const d = new Date();
    return [d.getHours(), d.getMinutes(), d.getSeconds()]
      .map((n) => String(n).padStart(2, "0"))
      .join(":");
  });
  useEffect(() => {
    const id = setInterval(() => {
      const d = new Date();
      setTime(
        [d.getHours(), d.getMinutes(), d.getSeconds()]
          .map((n) => String(n).padStart(2, "0"))
          .join(":"),
      );
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

/* ── Activity meter pips ────────────────────────────────────────── */
function MeterPips({ value, statusClass }) {
  const TOTAL = 10;
  return (
    <div className="transit-line-meter" aria-hidden="true">
      {Array.from({ length: TOTAL }, (_, i) => (
        <span
          key={i}
          className={`transit-meter-pip${i < value ? " lit" : ""}`}
        />
      ))}
    </div>
  );
}

/* ── Station Log panel ──────────────────────────────────────────── */
function StationLog({ item, config }) {
  if (!config.logs?.length) {
    return (
      <div className="transit-log-inner">
        <div className="transit-log-header">
          <span className="transit-log-cursor" aria-hidden="true" />
          STATION LOG — {item.title.toUpperCase()}
        </div>
        <p className="transit-log-text">{item.body}</p>
      </div>
    );
  }

  return (
    <div className="transit-log-inner">
      <div className="transit-log-header">
        <span className="transit-log-cursor" aria-hidden="true" />
        STATION LOG — {item.title.toUpperCase()}
      </div>
      {config.logs.map((entry, i) => (
        <div key={i} className="transit-log-entry">
          <span className="transit-log-ts">[{entry.ts}]</span>
          <p className="transit-log-text">{entry.text}</p>
        </div>
      ))}
    </div>
  );
}

/* ── Ticker content (doubled for seamless loop) ─────────────────── */
const TICKER_SEGMENTS = [
  "ALL LINES OPERATING NORMALLY",
  "◈",
  "NEXT DEPARTURE: WHENEVER YOU'RE READY",
  "◈",
  "SIGNAL STRENGTH: EXCELLENT",
  "◈",
  "CITY PERSONALITY TRANSIT — LIVE STATUS",
  "◈",
  "MIND THE GAP",
  "◈",
  "SERVICE ADVISORY: CHAOS LINE MAY RUN EARLY OR LATE",
  "◈",
];

function TickerContent() {
  const doubled = [...TICKER_SEGMENTS, ...TICKER_SEGMENTS];
  return (
    <div className="transit-ticker-inner" aria-hidden="true">
      {doubled.map((seg, i) => (
        <span key={i} className={seg === "◈" ? "sep" : ""}>
          {seg}
        </span>
      ))}
    </div>
  );
}

/* ── Main component ─────────────────────────────────────────────── */
export default function QualitiesSection({ items }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.08 });
  const clock = useClock();
  const [activeId, setActiveId] = useState(null);

  const handleLineClick = useCallback((id) => {
    setActiveId((prev) => (prev === id ? null : id));
  }, []);

  const activeItem = items.find((it) => it.id === activeId);
  const activeConfig = activeItem
    ? getConfig(
        activeItem,
        items.findIndex((it) => it.id === activeId),
      )
    : null;

  return (
    <motion.section
      id="qualities"
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="section"
    >
      {/* Section label — matches all other sections */}
      <div className="section-label">Qualities</div>

      {/* ╔══════════════════════════════════════╗
          ║    CITY PERSONALITY TRANSIT BOARD    ║
          ╚══════════════════════════════════════╝ */}
      <div
        className="transit-board"
        role="region"
        aria-label="City Personality Transit — line status board"
      >
        {/* Scanlines & noise overlays */}
        <div className="transit-scanlines" aria-hidden="true" />
        <div className="transit-noise" aria-hidden="true" />

        {/* Corner bolts */}
        <span className="transit-bolt transit-bolt--tl" aria-hidden="true" />
        <span className="transit-bolt transit-bolt--tr" aria-hidden="true" />
        <span className="transit-bolt transit-bolt--bl" aria-hidden="true" />
        <span className="transit-bolt transit-bolt--br" aria-hidden="true" />

        {/* ── Topbar ── */}
        <div className="transit-topbar">
          <span className="transit-topbar-title">
            ◈ CITY PERSONALITY TRANSIT
          </span>
          <div className="transit-topbar-right">
            <span
              className="transit-clock"
              aria-live="polite"
              aria-label="Current time"
            >
              {clock}
            </span>
            <div className="transit-status-pill">
              <span className="transit-status-dot" aria-hidden="true" />
              SYSTEM ONLINE
            </div>
          </div>
        </div>

        {/* ── Column headers ── */}
        <div className="transit-col-headers" aria-hidden="true">
          <span className="transit-col-hdr">LINE</span>
          <span className="transit-col-hdr">DESIGNATION</span>
          <span className="transit-col-hdr transit-col-hdr--status">
            ACTIVITY
          </span>
          <span className="transit-col-hdr transit-col-hdr--right">STATUS</span>
        </div>

        {/* ── Line rows ── */}
        <div className="transit-lines" role="list" aria-label="Transit lines">
          {items.map((item, index) => {
            const config = getConfig(item, index);
            const color = LINE_COLORS[index % LINE_COLORS.length];
            const isActive = activeId === item.id;
            const lineCode = `L-${String(index + 1).padStart(2, "0")}`;

            return (
              <motion.div
                key={item.id}
                role="listitem"
                className={`transit-line status-${config.badgeClass}${isActive ? " is-active" : ""}`}
                initial={{ opacity: 0, x: -8 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.1 + index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => handleLineClick(item.id)}
                tabIndex={0}
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") &&
                  handleLineClick(item.id)
                }
                aria-pressed={isActive}
                aria-label={`${item.title} line — ${config.status}. ${isActive ? "Station log open" : "Click to read station log"}`}
              >
                {/* Line code */}
                <div className="transit-line-code">
                  <span>{lineCode}</span>
                </div>

                {/* Line name + LED bullet */}
                <div className="transit-line-name">
                  <span
                    className={`transit-line-bullet${config.flicker ? " flicker" : ""}`}
                    style={{ color, background: color }}
                    aria-hidden="true"
                  />
                  <span className="transit-line-label">
                    {item.title.toUpperCase()} LINE
                  </span>
                </div>

                {/* Activity meter */}
                <MeterPips
                  value={config.meter}
                  statusClass={config.badgeClass}
                />

                {/* Status badge */}
                <div className="transit-line-status">
                  <span className={`transit-status-badge ${config.badgeClass}`}>
                    {config.status}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Station Log panel ── */}
        <div
          className="transit-log"
          aria-live="polite"
          aria-label="Station log"
        >
          <AnimatePresence mode="wait">
            {activeItem ? (
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <StationLog item={activeItem} config={activeConfig} />
              </motion.div>
            ) : (
              <motion.div
                key="hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="transit-log-hint" aria-hidden="true">
                  ▸ SELECT A LINE TO READ STATION LOGS
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Ticker strip ── */}
        <div className="transit-ticker" aria-hidden="true">
          <TickerContent />
        </div>

        {/* ── Footer ── */}
        <div className="transit-footer" aria-hidden="true">
          <span className="transit-footer-left">◂ LIVE FEED ▸</span>
          <div className="transit-footer-dots">
            {items.map((item, i) => (
              <span
                key={item.id}
                className={`transit-footer-pip${activeId === item.id ? " active" : ""}`}
              />
            ))}
          </div>
          <span className="transit-footer-right">
            {items.length} LINES ACTIVE
          </span>
        </div>
      </div>
    </motion.section>
  );
}
