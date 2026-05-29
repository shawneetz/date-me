import { motion } from "framer-motion";
import "./HeroSection.css";

/* ── Pixel cityscape SVG — bottom footer of the card ─────────────── */
function CityscapeSVG() {
  return (
    <svg
      viewBox="0 0 680 36"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Sky gradient */}
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1520" />
          <stop offset="100%" stopColor="#162d3c" />
        </linearGradient>
      </defs>
      <rect width="680" height="36" fill="url(#skyGrad)" />

      {/* Buildings — back layer (darker) */}
      <g fill="#0d1f2d" stroke="#1e4e5a" strokeWidth="0.5">
        <rect x="0" y="18" width="28" height="18" />
        <rect x="4" y="10" width="8" height="8" />
        <rect x="32" y="22" width="20" height="14" />
        <rect x="56" y="14" width="14" height="22" />
        <rect x="60" y="8" width="6" height="6" />
        <rect x="74" y="20" width="24" height="16" />
        <rect x="102" y="16" width="18" height="20" />
        <rect x="106" y="10" width="6" height="6" />
        <rect x="124" y="22" width="16" height="14" />
        <rect x="144" y="12" width="22" height="24" />
        <rect x="148" y="6" width="8" height="6" />
        <rect x="170" y="18" width="20" height="18" />
        <rect x="194" y="14" width="26" height="22" />
        <rect x="200" y="8" width="6" height="6" />
        <rect x="224" y="20" width="18" height="16" />
        <rect x="246" y="10" width="20" height="26" />
        <rect x="270" y="18" width="22" height="18" />
        <rect x="296" y="14" width="16" height="22" />
        <rect x="316" y="20" width="24" height="16" />
        <rect x="344" y="8" width="18" height="28" />
        <rect x="348" y="4" width="6" height="4" />
        <rect x="366" y="16" width="20" height="20" />
        <rect x="390" y="20" width="16" height="16" />
        <rect x="410" y="12" width="24" height="24" />
        <rect x="414" y="6" width="8" height="6" />
        <rect x="438" y="18" width="18" height="18" />
        <rect x="460" y="14" width="22" height="22" />
        <rect x="486" y="20" width="16" height="16" />
        <rect x="506" y="10" width="20" height="26" />
        <rect x="510" y="4" width="6" height="6" />
        <rect x="530" y="18" width="24" height="18" />
        <rect x="558" y="14" width="18" height="22" />
        <rect x="580" y="20" width="22" height="16" />
        <rect x="606" y="10" width="16" height="26" />
        <rect x="626" y="18" width="20" height="18" />
        <rect x="650" y="14" width="18" height="22" />
        <rect x="654" y="8" width="6" height="6" />
        <rect x="672" y="20" width="8" height="16" />
      </g>

      {/* Buildings — front layer (slightly brighter) */}
      <g fill="#0a1520" stroke="#1e5f6e" strokeWidth="0.5">
        <rect x="0" y="24" width="18" height="12" />
        <rect x="22" y="20" width="14" height="16" />
        <rect x="40" y="26" width="12" height="10" />
        <rect x="56" y="22" width="16" height="14" />
        <rect x="76" y="24" width="20" height="12" />
        <rect x="100" y="20" width="14" height="16" />
        <rect x="118" y="26" width="18" height="10" />
        <rect x="140" y="22" width="16" height="14" />
        <rect x="160" y="24" width="22" height="12" />
        <rect x="186" y="20" width="16" height="16" />
        <rect x="206" y="26" width="20" height="10" />
        <rect x="230" y="22" width="14" height="14" />
        <rect x="248" y="24" width="18" height="12" />
        <rect x="270" y="20" width="16" height="16" />
        <rect x="290" y="26" width="22" height="10" />
        <rect x="316" y="22" width="18" height="14" />
        <rect x="338" y="24" width="16" height="12" />
        <rect x="358" y="20" width="20" height="16" />
        <rect x="382" y="26" width="14" height="10" />
        <rect x="400" y="22" width="20" height="14" />
        <rect x="424" y="24" width="16" height="12" />
        <rect x="444" y="20" width="18" height="16" />
        <rect x="466" y="26" width="22" height="10" />
        <rect x="492" y="22" width="16" height="14" />
        <rect x="512" y="24" width="20" height="12" />
        <rect x="536" y="20" width="14" height="16" />
        <rect x="554" y="26" width="18" height="10" />
        <rect x="576" y="22" width="22" height="14" />
        <rect x="602" y="24" width="16" height="12" />
        <rect x="622" y="20" width="20" height="16" />
        <rect x="646" y="26" width="14" height="10" />
        <rect x="664" y="22" width="16" height="14" />
      </g>

      {/* Window lights — tiny glowing pixels */}
      <g fill="#f0c060" opacity="0.55">
        <rect x="8" y="26" width="2" height="2" />
        <rect x="12" y="20" width="2" height="2" />
        <rect x="36" y="24" width="2" height="2" />
        <rect x="64" y="16" width="2" height="2" />
        <rect x="80" y="22" width="2" height="2" />
        <rect x="108" y="18" width="2" height="2" />
        <rect x="128" y="26" width="2" height="2" />
        <rect x="150" y="14" width="2" height="2" />
        <rect x="178" y="22" width="2" height="2" />
        <rect x="202" y="12" width="2" height="2" />
        <rect x="234" y="24" width="2" height="2" />
        <rect x="252" y="16" width="2" height="2" />
        <rect x="276" y="22" width="2" height="2" />
        <rect x="322" y="24" width="2" height="2" />
        <rect x="350" y="8" width="2" height="2" />
        <rect x="372" y="20" width="2" height="2" />
        <rect x="416" y="14" width="2" height="2" />
        <rect x="446" y="22" width="2" height="2" />
        <rect x="514" y="18" width="2" height="2" />
        <rect x="536" y="24" width="2" height="2" />
        <rect x="562" y="18" width="2" height="2" />
        <rect x="608" y="16" width="2" height="2" />
        <rect x="630" y="22" width="2" height="2" />
        <rect x="656" y="12" width="2" height="2" />
      </g>
      <g fill="#60c8d0" opacity="0.35">
        <rect x="6" y="30" width="2" height="2" />
        <rect x="44" y="28" width="2" height="2" />
        <rect x="102" y="24" width="2" height="2" />
        <rect x="166" y="26" width="2" height="2" />
        <rect x="212" y="28" width="2" height="2" />
        <rect x="294" y="28" width="2" height="2" />
        <rect x="364" y="24" width="2" height="2" />
        <rect x="406" y="26" width="2" height="2" />
        <rect x="470" y="28" width="2" height="2" />
        <rect x="580" y="24" width="2" height="2" />
        <rect x="626" y="26" width="2" height="2" />
        <rect x="668" y="24" width="2" height="2" />
      </g>

      {/* Ground line */}
      <line
        x1="0"
        y1="35.5"
        x2="680"
        y2="35.5"
        stroke="#1e5f6e"
        strokeWidth="0.5"
        opacity="0.6"
      />
    </svg>
  );
}

export default function HeroSection({ profile }) {
  const { mbti, sign, tag, funFact, photoCaption, photoUrl, name } = profile;

  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="hero"
    >
      <div className="hero-card">
        {/* ── Top bar ── */}
        <div className="hero-topbar">
          <div className="hero-topbar-dots">
            <span
              className="hero-topbar-dot"
              style={{ background: "#e05050" }}
            />
            <span
              className="hero-topbar-dot"
              style={{ background: "#f0c060" }}
            />
            <span
              className="hero-topbar-dot"
              style={{ background: "#88c070" }}
            />
          </div>
          <span className="hero-topbar-title">◈ &nbsp;SHAWNSCAPES&nbsp; ◈</span>
          <div className="hero-topbar-signal">
            <span className="hero-topbar-sigdot" aria-hidden="true" />
            ONLINE
          </div>
        </div>

        {/* ── Left column: portrait + stats ── */}
        <motion.div
          className="hero-portrait-col"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* PLAYER 1 badge */}
          <div className="hero-player-badge" aria-hidden="true">
            PLAYER 1
          </div>

          {/* Photo slot */}
          <div className="hero-photo-slot">
            {photoUrl ? (
              <img src={photoUrl} alt={name} />
            ) : (
              <div className="hero-photo-placeholder">[ PHOTO ]</div>
            )}
            {/* Pixel corner brackets */}
            <span className="hero-corner hero-corner--tl" aria-hidden="true" />
            <span className="hero-corner hero-corner--tr" aria-hidden="true" />
            <span className="hero-corner hero-corner--bl" aria-hidden="true" />
            <span className="hero-corner hero-corner--br" aria-hidden="true" />
          </div>

          {/* Stat block */}
          <div className="hero-stat-block">
            <div className="hero-stat-row">
              <span className="hero-stat-key">TYPE</span>
              <span className="hero-stat-val">{mbti.toUpperCase()}</span>
            </div>
            <div className="hero-stat-row">
              <span className="hero-stat-key">SIGN</span>
              <span className="hero-stat-val">{sign.toUpperCase()}</span>
            </div>
            <div className="hero-stat-row">
              <span className="hero-stat-key">CLASS</span>
              <span className="hero-stat-val">{tag.toUpperCase()}</span>
            </div>
          </div>
        </motion.div>

        {/* ── Right column: info ── */}
        <motion.div
          className="hero-info-col"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="hero-eyebrow">
            <span aria-hidden="true">▸</span> PROFILE LOADED
          </p>

          <h1 className="hero-name">
            <span className="hero-name-line1">Hi there,</span>
            <span className="hero-name-line2">I'm Shawn!</span>
          </h1>

          <div className="hero-terminal-rule">
            <span aria-hidden="true">$</span> BIO.TXT
          </div>

          {photoCaption && (
            <p className="hero-terminal-line">
              <span className="hero-prompt" aria-hidden="true">
                ›
              </span>
              {photoCaption}
            </p>
          )}

          {funFact && (
            <div className="hero-sysnote">
              <span className="hero-sysnote-label">SYS NOTE</span>
              <p>{funFact}</p>
            </div>
          )}
        </motion.div>

        {/* ── Pixel cityscape footer ── */}
        <div className="hero-cityscape">
          <CityscapeSVG />
        </div>
      </div>
    </motion.section>
  );
}
