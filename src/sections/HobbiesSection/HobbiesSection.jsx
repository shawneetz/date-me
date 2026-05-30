import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./HobbiesSection.css";

/* ── Per-hobby accent palette ────────────────────────────────────── */
const HOBBY_ACCENTS = [
  { hex: "#F0C060", rgb: "240,192,96", label: "H_01" },
  { hex: "#60C8D0", rgb: "96,200,208", label: "H_02" },
  { hex: "#F06060", rgb: "240,96,96", label: "H_03" },
  { hex: "#60F080", rgb: "96,240,128", label: "H_04" },
  { hex: "#8B8FF0", rgb: "139,143,240", label: "H_05" },
  { hex: "#D4835A", rgb: "212,131,90", label: "H_06" },
];

/* Fake HH:MM:SS clock for the screen HUD */
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

/**
 * Compute the shortest signed circular offset.
 * e.g. 6 items, index=5, selected=0 → -1 (wrap left rather than +5)
 */
function circularOffset(index, selected, length) {
  let offset = (index - selected) % length;
  if (offset < -Math.floor(length / 2)) offset += length;
  if (offset > Math.floor(length / 2)) offset -= length;
  return offset;
}

/* ── Slot media ──────────────────────────────────────────────────── */
function SlotMedia({ imageUrl, imageAlt, accent, isSelected }) {
  return (
    <div
      className="hs-slot-media"
      style={{ "--slot-accent": accent.hex, "--slot-accent-rgb": accent.rgb }}
    >
      {imageUrl ? (
        <img src={imageUrl} alt={imageAlt} loading="lazy" />
      ) : (
        <div className="hs-slot-placeholder" aria-hidden="true" />
      )}
      <div className="hs-slot-scanlines" aria-hidden="true" />
      {isSelected && <div className="hs-slot-ring" aria-hidden="true" />}
    </div>
  );
}

/* ── Main component ──────────────────────────────────────────────── */
export default function HobbiesSection({ items }) {
  const [selected, setSelected] = useState(0);
  const [spacing, setSpacing] = useState(110);
  const stageRef = useRef(null);
  const clock = useClock();

  /* Measure the stage width to compute card spacing in real px */
  const measureSpacing = useCallback(() => {
    if (!stageRef.current) return;
    setSpacing(Math.round(stageRef.current.offsetWidth * 0.54));
  }, []);

  useEffect(() => {
    measureSpacing();
    const ro = new ResizeObserver(measureSpacing);
    if (stageRef.current) ro.observe(stageRef.current);
    return () => ro.disconnect();
  }, [measureSpacing]);

  if (!items || items.length === 0) return null;

  const activeHobby = items[selected];
  const activeAccent = HOBBY_ACCENTS[selected % HOBBY_ACCENTS.length];

  const handleNext = () => setSelected((p) => (p + 1) % items.length);
  const handlePrev = () =>
    setSelected((p) => (p - 1 + items.length) % items.length);

  return (
    <motion.section
      id="hobbies"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="section hs-section"
    >
      {/* ── Section label — matches all other sections ── */}
      <div className="section-label">Hobbies</div>

      {/* ╔══════════════════════════════════╗
          ║        ARCADE CABINET            ║
          ╚══════════════════════════════════╝ */}
      <div className="hs-cabinet" role="region" aria-label="Hobbies">
        {/* Corner bolts (bottom two; top two are CSS ::before/::after) */}
        <span className="hs-cabinet-bolt-bl" aria-hidden="true" />
        <span className="hs-cabinet-bolt-br" aria-hidden="true" />

        {/* ── MARQUEE ── */}
        <div className="hs-marquee" role="heading" aria-level="3">
          <div className="hs-marquee-inner">
            <span className="hs-marquee-title">◉ INTERESTS.EXE ◉</span>
            <div className="hs-marquee-badge">
              <span className="hs-marquee-coin">COIN × 3</span>
              <span className="hs-marquee-credits">1P START</span>
            </div>
          </div>
        </div>

        <div className="hs-layout">
          {/* ══════════════════════════════════════
              SCREEN — detail view
          ══════════════════════════════════════ */}
          <div className="hs-detail-container">
            {/* HUD overlay — fake screen timestamp */}
            <div className="hs-screen-hud" aria-hidden="true">
              <div>{clock}</div>
              <div>SYS OK</div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                className="hs-detail"
                initial={{ opacity: 0, filter: "blur(6px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(6px)" }}
                transition={{ duration: 0.2 }}
                style={{
                  "--slot-accent": activeAccent.hex,
                  "--slot-accent-rgb": activeAccent.rgb,
                }}
              >
                <div className="hs-detail-body">
                  {/* Small chip label */}
                  <div className="hs-detail-tag" aria-hidden="true">
                    <span className="hs-detail-tag-dot" />
                    {activeAccent.label} · SELECTED
                  </div>

                  <h3 className="hs-detail-title">{activeHobby.title}</h3>

                  <div className="hs-detail-desc-container">
                    <p className="hs-detail-desc">{activeHobby.description}</p>
                  </div>
                </div>

                {/* Skill meter */}
                <div className="hs-detail-meter" aria-hidden="true">
                  <span className="hs-meter-label">SKILL LVL</span>
                  <div className="hs-meter-track">
                    {[...Array(12)].map((_, i) => (
                      <span
                        key={i}
                        className="hs-meter-pip"
                        style={{ opacity: i < 9 ? 1 : 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="hs-detail-scanlines" aria-hidden="true" />
          </div>

          {/* ══════════════════════════════════════
              CONTROL PANEL — carousel
          ══════════════════════════════════════ */}
          <div className="hs-carousel-wrapper">
            {/* INSERT COIN prompt */}
            <div className="hs-insert-coin" aria-hidden="true">
              ▶ SELECT CHARACTER ◀
            </div>

            <div className="hs-carousel-controls">
              {/* Joystick-style prev button */}
              <button
                className="hs-nav-btn"
                onClick={handlePrev}
                aria-label="Previous hobby"
              >
                &#9664;
              </button>

              {/* Stage */}
              <div
                className="hs-carousel-stage"
                ref={stageRef}
                role="listbox"
                aria-label="Hobbies carousel"
              >
                {/* P1 pointer */}
                <div className="hs-pointer" aria-hidden="true">
                  <span className="hs-pointer-text">P1</span>
                  <div className="hs-pointer-arrow" />
                </div>

                {items.map((hobby, index) => {
                  const accent = HOBBY_ACCENTS[index % HOBBY_ACCENTS.length];
                  const offset = circularOffset(index, selected, items.length);
                  const absOffset = Math.abs(offset);
                  const isCenter = offset === 0;

                  if (absOffset > 2) return null;

                  return (
                    <motion.button
                      key={index}
                      type="button"
                      role="option"
                      aria-selected={isCenter}
                      aria-label={hobby.title}
                      className={`hs-slot${isCenter ? " hs-slot--selected" : ""}`}
                      style={{
                        "--slot-accent": accent.hex,
                        "--slot-accent-rgb": accent.rgb,
                        zIndex: 10 - absOffset,
                      }}
                      animate={{
                        x: offset * spacing,
                        scale: isCenter
                          ? 1
                          : Math.max(0.6, 1 - absOffset * 0.18),
                        opacity: isCenter
                          ? 1
                          : Math.max(0.3, 1 - absOffset * 0.32),
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      onClick={() => setSelected(index)}
                    >
                      <SlotMedia
                        imageUrl={hobby.imageUrl}
                        imageAlt={hobby.imageAlt || hobby.title}
                        accent={accent}
                        isSelected={isCenter}
                      />
                      {/* HP-bar style name tag */}
                      <div className="hs-slot-footer">
                        <div className="hs-slot-name-bar">
                          <span className="hs-slot-channel">
                            {accent.label}
                          </span>
                          <span className="hs-slot-name">{hobby.title}</span>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Joystick-style next button */}
              <button
                className="hs-nav-btn"
                onClick={handleNext}
                aria-label="Next hobby"
              >
                &#9654;
              </button>
            </div>

            {/* Cabinet bottom coin strip */}
            <div className="hs-coin-footer" aria-hidden="true">
              <span className="hs-coin-text">© SHAWNSCAPES ARCADE</span>
              <div className="hs-coin-dots">
                {items.map((_, i) => (
                  <span
                    key={i}
                    className={`hs-coin-dot${i === selected ? " active" : ""}`}
                  />
                ))}
              </div>
              <span className="hs-coin-text">
                {selected + 1} / {items.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
