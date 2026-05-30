import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./WhatYoullGetSection.css";

/* ── Per-slot accent palette ─────────────────────────────────────── */
const SLOT_ACCENTS = [
  { hex: "#60C8D0", rgb: "96,200,208" },
  { hex: "#F0C060", rgb: "240,192,96" },
  { hex: "#88C070", rgb: "136,192,112" },
  { hex: "#E05050", rgb: "224,80,80" },
  { hex: "#8B8FF0", rgb: "139,143,240" },
  { hex: "#D4835A", rgb: "212,131,90" },
];

/**
 * WhatYoullGetSection — City Vending Machine
 *
 * A retro Japanese-style vending machine dispensing experiences.
 * Each slot press selects an item; receipt panel shows what's dispensed.
 *
 * Props: items[] — from shawn.js whatYoullGet
 *   { id, code, label, text, receipt }
 */
export default function WhatYoullGetSection({ items }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selected, setSelected] = useState(null);
  const [dispensing, setDispensing] = useState(null);

  if (!items || items.length === 0) return null;

  const handleSelect = (item, index) => {
    if (item.soldOut) return;
    setDispensing(index);
    setSelected(item);
    setTimeout(() => setDispensing(null), 400);
  };

  const activeAccent = selected
    ? SLOT_ACCENTS[
        items.findIndex((i) => i.id === selected.id) % SLOT_ACCENTS.length
      ]
    : null;

  return (
    <motion.section
      id="what-youll-get"
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="section"
    >
      <div className="section-label">What you'll get</div>

      {/* ╔════════════════════════════════╗
          ║       VENDING MACHINE          ║
          ╚════════════════════════════════╝ */}
      <div
        className="vend-machine"
        role="region"
        aria-label="Vending machine of experiences"
      >
        {/* Corner bolts */}
        <span className="vend-bolt vend-bolt--tl" aria-hidden="true" />
        <span className="vend-bolt vend-bolt--tr" aria-hidden="true" />
        <span className="vend-bolt vend-bolt--bl" aria-hidden="true" />
        <span className="vend-bolt vend-bolt--br" aria-hidden="true" />

        {/* ── Header / Marquee ── */}
        <div className="vend-header" aria-hidden="true">
          <div className="vend-header-inner">
            <span className="vend-header-title">◈ EXPERIENCE MACHINE ◈</span>
            <div className="vend-header-meta">
              <span>SELECT SLOT</span>
              <span className="vend-coin-blink">INSERT HEART ▾</span>
            </div>
          </div>
        </div>

        {/* ── Main layout ── */}
        <div className="vend-layout">
          {/* ── Slot Grid ── */}
          <div className="vend-grid-panel">
            {items.map((item, index) => {
              const accent = SLOT_ACCENTS[index % SLOT_ACCENTS.length];
              const isSelected = selected?.id === item.id;
              const isDisp = dispensing === index;

              return (
                <motion.button
                  key={item.id}
                  type="button"
                  className={`vend-slot${isSelected ? " is-selected" : ""}${item.soldOut ? " is-sold-out" : ""}${isDisp ? " is-dispensing" : ""}`}
                  style={{
                    "--slot-accent": accent.hex,
                    "--slot-accent-rgb": accent.rgb,
                  }}
                  onClick={() => handleSelect(item, index)}
                  aria-pressed={isSelected}
                  aria-label={`${item.code}: ${item.text}`}
                  disabled={item.soldOut}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.35,
                    delay: 0.08 * index,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* Code badge */}
                  <div className="vend-slot-code">
                    <span>{item.code}</span>
                    <span className="vend-slot-led" aria-hidden="true" />
                  </div>

                  {/* Text */}
                  <div className="vend-slot-text">
                    <span className="vend-slot-label">{item.label}</span>
                    <span className="vend-slot-name">{item.text}</span>
                  </div>

                  {/* Select button */}
                  <div className="vend-slot-btn" aria-hidden="true">
                    <div className="vend-slot-btn-dot" />
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* ── Receipt / Display Panel ── */}
          <div className="vend-receipt-panel">
            {/* Display screen */}
            <div
              className="vend-display"
              style={
                activeAccent
                  ? {
                      "--display-accent": activeAccent.hex,
                      "--display-accent-rgb": activeAccent.rgb,
                    }
                  : {}
              }
            >
              <div className="vend-display-scanlines" aria-hidden="true" />

              {selected ? (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selected.id}
                    initial={{ opacity: 0, filter: "blur(4px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                      position: "relative",
                      zIndex: 3,
                    }}
                  >
                    <span className="vend-display-status">SELECTED</span>
                    <span className="vend-display-code">{selected.code}</span>
                    <span className="vend-display-name">{selected.text}</span>
                    <div className="vend-display-price">
                      <div className="vend-price-heart" aria-hidden="true" />
                      <span>1 HEART</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              ) : (
                <span className="vend-display-empty">
                  SELECT
                  <br />A SLOT
                </span>
              )}
            </div>

            {/* Drop zone / receipt */}
            <div className="vend-drop-zone">
              <AnimatePresence mode="wait">
                {selected ? (
                  <motion.div
                    key={selected.id + "-receipt"}
                    className="vend-receipt"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="vend-receipt-header">★ DISPENSED ★</div>
                    <div className="vend-receipt-item">
                      {selected.receipt || selected.text}
                    </div>
                    <div className="vend-receipt-note">THANK YOU ♡</div>
                  </motion.div>
                ) : (
                  <motion.p
                    className="vend-drop-hint"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    ↑<br />
                    ITEM
                    <br />
                    DROPS
                    <br />
                    HERE
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ── Machine Footer ── */}
        <div className="vend-footer" aria-hidden="true">
          <span className="vend-footer-insert">INSERT HEART</span>
          <div className="vend-footer-slots">
            {items.map((item, i) => (
              <span
                key={item.id}
                className={`vend-footer-pip${selected?.id === item.id ? " active" : ""}`}
              />
            ))}
          </div>
          <span
            className="vend-footer-insert"
            style={{ fontSize: "0.7rem", letterSpacing: "0.14em" }}
          >
            {selected ? "DISPENSED" : "SELECT ONE"}
          </span>
        </div>
      </div>
    </motion.section>
  );
}
