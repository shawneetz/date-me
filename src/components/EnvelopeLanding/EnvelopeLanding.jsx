/**
 * EnvelopeLanding
 * Purpose: Full-page animated envelope that opens to reveal the letter stage.
 *
 * Stages:
 * 1. "envelope"  — pixel-art envelope with wax seal, hover lifts flap
 * 2. "opening"   — click triggers shake + flap open + letter preview rising
 * 3. "letter"    — LetterSection fades in with the personal letter + CTA
 */

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LetterSection from "../../sections/LetterSection";
import "./EnvelopeLanding.css";

/* ── Pixel-heart cell layout (7 cols × 5 rows) ────────────────────── */
const HEART = [
  [0, 1, 1, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 0, 0],
];

function PixelHeart() {
  return (
    <div className="env-pixel-heart" aria-hidden="true">
      {HEART.map((row, r) =>
        row.map((cell, c) => (
          <div key={`${r}-${c}`} className={cell ? "ph" : "pn"} />
        ))
      )}
    </div>
  );
}

/* ── Random star field ────────────────────────────────────────────── */
function StarField() {
  const stars = useRef(
    Array.from({ length: 65 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${(1.5 + Math.random() * 2.5).toFixed(2)}s`,
      delay: `${(Math.random() * 3).toFixed(2)}s`,
      opacity: (0.25 + Math.random() * 0.75).toFixed(2),
    }))
  );

  return (
    <div className="env-stars" aria-hidden="true">
      {stars.current.map((s) => (
        <div
          key={s.id}
          className="env-star"
          style={{
            left: s.left,
            top: s.top,
            "--star-duration": s.duration,
            "--star-delay": s.delay,
            "--star-opacity": s.opacity,
          }}
        />
      ))}
    </div>
  );
}

/* ── Main component ───────────────────────────────────────────────── */
export default function EnvelopeLanding() {
  const [stage, setStage] = useState("envelope"); // "envelope" | "opening" | "letter"
  const wrapRef = useRef(null);

  const handleOpen = () => {
    if (stage !== "envelope") return;

    setStage("opening");

    // After shake + flap animation, transition to letter
    setTimeout(() => {
      setStage("letter");
    }, 750);
  };

  return (
    <div className="env-page">
      <div className="env-scanlines" aria-hidden="true" />
      <StarField />

      <div className="env-scene">
        <AnimatePresence mode="wait">

          {/* ── Stage: Envelope ─────────────────────────────────── */}
          {(stage === "envelope" || stage === "opening") && (
            <motion.div
              key="envelope-stage"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}
            >
              <p className="env-pre-label">◈&nbsp;&nbsp;A message arrived for you&nbsp;&nbsp;◈</p>

              {/* Envelope */}
              <div
                ref={wrapRef}
                className={`env-wrap${stage === "opening" ? " is-opening is-open" : ""}`}
                onClick={handleOpen}
                role="button"
                tabIndex={0}
                aria-label="Open envelope"
                onKeyDown={(e) => e.key === "Enter" && handleOpen()}
              >
                <div className="env-outer">
                  <div className="env-body">
                    <div className="env-vfold" />
                  </div>
                  <div className="env-flap" />
                  <div className="env-seal" aria-hidden="true">
                    <PixelHeart />
                  </div>

                  {/* Rising letter preview — only during opening */}
                  {stage === "opening" && (
                    <div className="env-letter-preview" aria-hidden="true" />
                  )}
                </div>

                {stage === "envelope" && (
                  <p className="env-hover-hint" aria-hidden="true">
                    click to open ▼
                  </p>
                )}
              </div>
            </motion.div>
          )}

          {/* ── Stage: Letter ───────────────────────────────────── */}
          {stage === "letter" && (
            <motion.div
              key="letter-stage"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              style={{ width: "100%" }}
            >
              <LetterSection />
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
