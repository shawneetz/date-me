/**
 * LetterSection
 * Purpose: Pixel OS-window styled personal letter with CTA button to /shawn profile.
 *
 * Pipeline:
 * Render pixel title-bar → letter body (date, greeting, paragraphs, sign-off)
 * → divider → CTA button → navigate to /shawn
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

/* ── Today's date formatted in the site style ─────────────────────── */
function getLetterDate() {
  return new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function LetterSection() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleViewProfile = () => {
    setLoading(true);
    // Brief delay so the loading state registers visually before nav
    setTimeout(() => {
      navigate("/shawn");
    }, 380);
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
          <span className="letter-bar-title">✉&nbsp;&nbsp;Personal Letter&nbsp;&nbsp;✉</span>
          <div className="letter-bar-grip" aria-hidden="true">
            <span /><span /><span />
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
            {getLetterDate()} · Quezon City, PH
          </motion.div>

          <motion.div variants={rowVariants} className="letter-greeting">
            Hey there, stranger. 👾
          </motion.div>

          <motion.div variants={rowVariants} className="letter-text">
            <p>
              I know this is a little unusual — getting a letter from someone
              you barely know. But I figured the usual approach (swiping left or
              right on a blurry photo) wasn't really giving either of us a fair
              shot.
            </p>
            <p>
              So instead, I made something. A proper introduction. The kind
              where you actually get to know who I am — the hobbies, the
              opinions, the midnight cooking habits, and yes, the deal-breakers
              too.
            </p>
            <p>
              I'm Shawn. CS student, occasional tinkerer, person who will
              absolutely cook for you without needing a reason. I think the best
              connections start with honesty, so I put mine out there.
            </p>
            <p>
              If you're curious, the full picture is one click away. No
              pressure — just take a look.
            </p>
          </motion.div>

          <motion.div variants={rowVariants} className="letter-sign">
            — Shawn&nbsp;
            <span className="letter-sign-sub">/ S.A.P.</span>
          </motion.div>

          <motion.div variants={rowVariants} className="letter-divider" />

          <motion.div variants={rowVariants} className="letter-cta">
            <span className="letter-cta-label">
              ◈&nbsp;&nbsp;ready to meet me?&nbsp;&nbsp;◈
            </span>
            <button
              type="button"
              className={`letter-cta-btn${loading ? " is-loading" : ""}`}
              onClick={handleViewProfile}
              disabled={loading}
            >
              <span aria-hidden="true">▶</span>
              {loading ? "Loading..." : "View My Full Profile"}
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
