/**
 * src/sections/LetterSection/LetterSection.jsx
 *
 * Pixel OS-window styled personal letter with CTA button.
 * All letter content now comes from props (sourced from shawn.js letter object).
 *
 * Props:
 *   letterData — the `letter` export from shawn.js:
 *     { windowTitle, city, greeting, paragraphs[], signOff, ctaLabel, ctaButtonText }
 *   navigateTo — route to navigate to on CTA click (default: "/shawn")
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./LetterSection.css";

/* ── Animation variants ──────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

function getLetterDate() {
  return new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function LetterSection({
  letterData = {},
  navigateTo = "/shawn",
}) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    windowTitle = "✉  A letter for you  ✉",
    city = "",
    greeting = "Hey there.",
    paragraphs = [],
    signOff = "— Shawn",
    ctaLabel = "◈  ready to meet me?  ◈",
    ctaButtonText = "View My Full Profile",
  } = letterData;

  const handleViewProfile = () => {
    setLoading(true);
    setTimeout(() => navigate(navigateTo), 380);
  };

  return (
    <div className="letter-wrap">
      <motion.div
        className="letter-paper"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* ── Title bar ── */}
        <div className="letter-bar">
          <div className="letter-bar-dots">
            <div className="letter-bar-dot" style={{ background: "#e05050" }} />
            <div className="letter-bar-dot" style={{ background: "#f0c060" }} />
            <div className="letter-bar-dot" style={{ background: "#88c070" }} />
          </div>
          <span className="letter-bar-title">{windowTitle}</span>
          <div className="letter-bar-grip" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>

        {/* ── Body ── */}
        <motion.div
          className="letter-body"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={rowVariants} className="letter-date">
            {getLetterDate()}
            {city ? ` · ${city}` : ""}
          </motion.div>

          <motion.div variants={rowVariants} className="letter-greeting">
            {greeting}
          </motion.div>

          <motion.div variants={rowVariants} className="letter-text">
            {paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </motion.div>

          <motion.div variants={rowVariants} className="letter-sign">
            {signOff}
          </motion.div>

          <motion.div variants={rowVariants} className="letter-divider" />

          <motion.div variants={rowVariants} className="letter-cta">
            <span className="letter-cta-label">{ctaLabel}</span>
            <button
              type="button"
              className={`letter-cta-btn${loading ? " is-loading" : ""}`}
              onClick={handleViewProfile}
              disabled={loading}
            >
              <span aria-hidden="true">▶</span>
              {loading ? "Loading..." : ctaButtonText}
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
