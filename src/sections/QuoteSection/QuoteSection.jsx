/**
 * src/sections/QuoteSection/QuoteSection.jsx
 *
 * GRAFFITI ALLEY
 * The `quote` and all wall fragments now come from props (sourced from shawn.js).
 * No personal content is hardcoded in this file.
 *
 * Props:
 *   quote         — { text, author }
 *   wallFragments — array of fragment objects:
 *     { type: "poster",  header, text, signature }
 *     { type: "sticker", lines: string[], meta }
 *     { type: "crt",     label, lines: string[], author }
 *     { type: "note",    text, signature }
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./QuoteSection.css";

/* ── Entrance animation helper ───────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

/* ── Wall background rust/crack decorations ──────────────────────── */
const RUST_MARKS = [
  { top: "8%", left: "72%", text: "◈◈◈" },
  { top: "42%", left: "5%", text: "////" },
  { top: "68%", left: "88%", text: "░░" },
  { top: "85%", left: "45%", text: "·····" },
  { top: "22%", left: "3%", text: "▓" },
];

/* ── Fragment renderers ──────────────────────────────────────────── */

function SprayFragment({ quote, delay = 0.1 }) {
  return (
    <motion.div className="gf gf--spray" {...fadeUp(delay)}>
      <p className="gf-spray-text">{quote.text}</p>
      <span className="gf-spray-author">▸ {quote.author.toUpperCase()}</span>
    </motion.div>
  );
}

function PosterFragment({ fragment, delay }) {
  return (
    <motion.div className="gf gf--poster" {...fadeUp(delay)}>
      <div className="gf-poster-inner">
        <div className="gf-poster-header">{fragment.header}</div>
        <p className="gf-poster-text">{fragment.text}</p>
        <span className="gf-poster-sig">{fragment.signature}</span>
      </div>
    </motion.div>
  );
}

function StickerFragment({ fragment, delay }) {
  return (
    <motion.div className="gf gf--sticker" {...fadeUp(delay)}>
      <div className="gf-sticker-inner">
        <div className="gf-sticker-text">
          {fragment.lines.map((line, i) => (
            <span key={i}>
              {line}
              {i < fragment.lines.length - 1 && <br />}
            </span>
          ))}
        </div>
        <div className="gf-sticker-meta">{fragment.meta}</div>
      </div>
    </motion.div>
  );
}

function CRTFragment({ fragment, delay }) {
  return (
    <motion.div className="gf gf--crt" {...fadeUp(delay)}>
      <div className="gf-crt-frame">
        <div className="gf-crt-label">
          <span className="gf-crt-dot" aria-hidden="true" />
          {fragment.label}
        </div>
        <div className="gf-crt-text">
          {fragment.lines.map((line, i) => (
            <span key={i}>
              {line}
              {i < fragment.lines.length - 1 && <br />}
            </span>
          ))}
        </div>
        <div className="gf-crt-author">{fragment.author}</div>
      </div>
    </motion.div>
  );
}

function NoteFragment({ fragment, delay }) {
  return (
    <motion.div className="gf gf--note" {...fadeUp(delay)}>
      <div className="gf-note-tape" aria-hidden="true" />
      <div className="gf-note-inner">
        <p className="gf-note-text">{fragment.text}</p>
        <span className="gf-note-sig">{fragment.signature}</span>
      </div>
    </motion.div>
  );
}

/* ── Fragment router ─────────────────────────────────────────────── */
// Maps fragment.type → renderer component.
// Delays are staggered automatically based on position in the array.
const BASE_DELAY = 0.2;
const DELAY_STEP = 0.08;

function WallFragment({ fragment, index }) {
  const delay = BASE_DELAY + index * DELAY_STEP;

  switch (fragment.type) {
    case "poster":
      return <PosterFragment fragment={fragment} delay={delay} />;
    case "sticker":
      return <StickerFragment fragment={fragment} delay={delay} />;
    case "crt":
      return <CRTFragment fragment={fragment} delay={delay} />;
    case "note":
      return <NoteFragment fragment={fragment} delay={delay} />;
    default:
      return null;
  }
}

/* ── Main component ──────────────────────────────────────────────── */
// Props:
//   quote         — profile.quote { text, author }
//   wallFragments — profile.wallFragments array
export default function QuoteSection({ quote, wallFragments = [] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.08 });

  return (
    <motion.section
      id="quote"
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="section"
    >
      <div className="section-label">Quote</div>

      <div
        className="graffiti-wall"
        role="region"
        aria-label="Graffiti alley quotes"
      >
        {/* Alley label — stencil on wall */}
        <div className="graffiti-alley-label" aria-hidden="true">
          GRAFFITI ALLEY · SHAWNSCAPES · EST. 2026
        </div>

        {/* Background rust / decay marks */}
        {RUST_MARKS.map((m, i) => (
          <span
            key={i}
            className="graffiti-rust"
            aria-hidden="true"
            style={{ top: m.top, left: m.left }}
          >
            {m.text}
          </span>
        ))}

        {/* ── Wall fragments ── */}
        <div className="graffiti-content">
          {/* Spray paint is always first — it uses the main `quote` prop */}
          <SprayFragment quote={quote} delay={0.1} />

          <div className="graffiti-crack" aria-hidden="true" />

          {/* Render the remaining fragments from wallFragments data */}
          {wallFragments.map((fragment, index) => (
            <WallFragment
              key={`${fragment.type}-${index}`}
              fragment={fragment}
              index={index}
            />
          ))}
        </div>

        {/* ── Street gutter ── */}
        <div className="graffiti-gutter" aria-hidden="true">
          <span className="graffiti-gutter-text">◂ ALLEY 04 ▸</span>
          <div className="graffiti-gutter-pips">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="graffiti-gutter-pip" />
            ))}
          </div>
          <span className="graffiti-gutter-text">SHAWNSCAPES CITY</span>
        </div>
      </div>
    </motion.section>
  );
}
