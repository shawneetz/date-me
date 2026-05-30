/**
 * QuoteSection — Graffiti Alley
 *
 * Quotes appear as city artifacts left on a concrete wall:
 *   1. Spray paint — big emotional statement (VT323, gold)
 *   2. Torn poster — taped paper, handwritten italic feel (Space Mono, dark paper)
 *   3. Sticker — glossy LED-style bubble (VT323, cyan)
 *   4. CRT glitch projection — ironic/rational (VT323, green, chromatic aberration)
 *   5. Handwritten note — lined paper taped to wall (Space Mono, cream paper)
 *
 * Each "author" font + treatment subconsciously signals a personality layer.
 * The `quote` prop from shawn.js populates slot 1 (spray paint).
 * Slots 2–5 are hardcoded city artifacts — fragments the alley already had.
 *
 * Props: quote { text, author }
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./QuoteSection.css";

/* ── Entrance animation variants ─────────────────────────────────── */
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

/* ── Fragment: Spray Paint ───────────────────────────────────────── */
function SprayFragment({ quote }) {
  return (
    <motion.div className="gf gf--spray" {...fadeUp(0.1)}>
      <p className="gf-spray-text">{quote.text}</p>
      <span className="gf-spray-author">▸ {quote.author.toUpperCase()}</span>
    </motion.div>
  );
}

/* ── Fragment: Torn Poster ───────────────────────────────────────── */
function PosterFragment() {
  return (
    <motion.div className="gf gf--poster" {...fadeUp(0.2)}>
      <div className="gf-poster-inner">
        <div className="gf-poster-header">◈ MESSAGE FOUND IN ALLEY ◈</div>
        <p className="gf-poster-text">
          The best people are the ones who stay up too late talking about things
          that don't have clean answers. Those conversations don't solve
          anything — they just remind you that someone else is also losing sleep
          over the same questions.
        </p>
        <span className="gf-poster-sig">— emotional thoughts, 02:14 AM</span>
      </div>
    </motion.div>
  );
}

/* ── Fragment: Sticker ───────────────────────────────────────────── */
function StickerFragment() {
  return (
    <motion.div className="gf gf--sticker" {...fadeUp(0.28)}>
      <div className="gf-sticker-inner">
        <div className="gf-sticker-text">
          "being perceived
          <br />
          is terrifying.
          <br />
          do it anyway."
        </div>
        <div className="gf-sticker-meta">LED // ironic thoughts // ver 1.0</div>
      </div>
    </motion.div>
  );
}

/* ── Fragment: CRT Glitch Projection ─────────────────────────────── */
function CRTFragment() {
  return (
    <motion.div className="gf gf--crt" {...fadeUp(0.35)}>
      <div className="gf-crt-frame">
        <div className="gf-crt-label">
          <span className="gf-crt-dot" aria-hidden="true" />
          SYS_BROADCAST · RATIONAL.LOG
        </div>
        <div className="gf-crt-text">
          "Statistically improbable things
          <br />
          happen all the time.
          <br />
          That's what 'improbable' means."
        </div>
        <div className="gf-crt-author">
          › rational thoughts // pixel font // SYS_NOTE
        </div>
      </div>
    </motion.div>
  );
}

/* ── Fragment: Handwritten Note ──────────────────────────────────── */
function NoteFragment() {
  return (
    <motion.div className="gf gf--note" {...fadeUp(0.42)}>
      <div className="gf-note-tape" aria-hidden="true" />
      <div className="gf-note-inner">
        <p className="gf-note-text">
          Cooking for someone without a reason is the most honest thing you can
          do. No occasion, no performance — just: I thought about what you'd
          like and I made it.
        </p>
        <span className="gf-note-sig">
          — emotional thoughts, found on fridge
        </span>
      </div>
    </motion.div>
  );
}

/* ── Main component ──────────────────────────────────────────────── */
export default function QuoteSection({ quote }) {
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

      {/* ╔═══════════════════════════════════╗
          ║        GRAFFITI ALLEY WALL        ║
          ╚═══════════════════════════════════╝ */}
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
          <SprayFragment quote={quote} />

          <div className="graffiti-crack" aria-hidden="true" />

          <PosterFragment />

          <StickerFragment />

          <div className="graffiti-crack" aria-hidden="true" />

          <CRTFragment />

          <NoteFragment />
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
