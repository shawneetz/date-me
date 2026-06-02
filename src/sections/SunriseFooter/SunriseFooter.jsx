/**
 * SunriseFooter
 * The final section — dawn has broken, the night is over.
 * Palette: deep burnt amber/gold replacing night teal/cyan.
 * Contains:
 *   - Scrolling morning ticker
 *   - Social links in warm PixelWindows
 *   - COMPOSE.MSG terminal email box
 *   - Sign-off
 */
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import "./SunriseFooter.css";
import emailjs from "@emailjs/browser";

/* ── Social links — edit urls and handles in shawn.js or here ─── */
const SOCIALS = [
  {
    id: "instagram",
    title: "INSTAGRAM.EXE",
    label: "Instagram",
    handle: "@shawneetz_",
    url: "https://www.instagram.com/shawneetz_/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    title: "LINKEDIN.EXE",
    label: "LinkedIn",
    handle: "Shawn Alfred Padilla",
    url: "https://www.linkedin.com/in/shawn-alfred-padilla-34b451246/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    id: "facebook",
    title: "FACEBOOK.EXE",
    label: "Facebook",
    handle: "Shawn Alfred",
    url: "https://www.facebook.com/shawn.alfred.428543",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
];

/* ── Warm dawn accent palette ─────────────────────────────────── */
const DAWN_ACCENTS = [
  {
    bar: "#3a1e08",
    dot1: "#e05050",
    dot2: "#f0c060",
    dot3: "#88c070",
    text: "#f09040",
  },
  {
    bar: "#2e1808",
    dot1: "#e05050",
    dot2: "#f0c060",
    dot3: "#88c070",
    text: "#e8b850",
  },
  {
    bar: "#381a0c",
    dot1: "#e05050",
    dot2: "#f0c060",
    dot3: "#88c070",
    text: "#f0a840",
  },
];

/* ── Ticker ───────────────────────────────────────────────────── */
const TICKER_WORDS = [
  "GOOD MORNING",
  "◈",
  "THE CITY WOKE UP",
  "◈",
  "YOU MADE IT TO THE END",
  "◈",
  "THANKS FOR READING",
  "◈",
  "THE NIGHT WAS LONG",
  "◈",
  "BUT YOU STAYED",
  "◈",
  "THAT MEANS SOMETHING",
  "◈",
];

export default function SunriseFooter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.06 });

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sendState, setSendState] = useState("idle"); // idle | sending | sent

  const handleSend = () => {
    if (!email.trim() || !message.trim() || sendState !== "idle") return;
    setSendState("sending");

    emailjs
      .send(
        "service_6ua23i5",
        "template_zhx7rxe",
        {
          from_email: email,
          message: message,
        },
        "lZTwyefs-easJmFUL",
      )
      .then(() => {
        setSendState("sent");
        setTimeout(() => {
          setSendState("idle");
          setEmail("");
          setMessage("");
        }, 3200);
      })
      .catch(() => {
        setSendState("idle");
        alert("Failed to send. Please try again.");
      });
  };

  const doubled = [...TICKER_WORDS, ...TICKER_WORDS];

  return (
    <motion.section
      ref={ref}
      id="sunrise-footer"
      className="sunrise-footer"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      aria-label="Contact and social links"
    >
      {/* ── Dawn cityscape header strip ── */}
      <div className="sf-city-header">
        <svg
          viewBox="0 0 680 52"
          preserveAspectRatio="none"
          className="sf-city-svg"
        >
          <defs>
            <linearGradient id="dawnHdr" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2e1208" />
              <stop offset="55%" stopColor="#b03010" />
              <stop offset="100%" stopColor="#f09040" />
            </linearGradient>
          </defs>
          <rect width="680" height="52" fill="url(#dawnHdr)" />
          <ellipse
            cx="340"
            cy="52"
            rx="290"
            ry="36"
            fill="rgba(240,140,40,0.32)"
          />
          {/* Silhouette buildings */}
          <g fill="#180804" stroke="#2e1004" strokeWidth="0.5">
            <rect x="0" y="24" width="30" height="28" />
            <rect x="4" y="12" width="9" height="12" />
            <rect x="34" y="30" width="22" height="22" />
            <rect x="60" y="18" width="16" height="34" />
            <rect x="64" y="10" width="7" height="8" />{" "}
            <rect x="80" y="26" width="26" height="26" />
            <rect x="110" y="20" width="20" height="32" />
            <rect x="134" y="28" width="18" height="24" />
            <rect x="156" y="16" width="24" height="36" />
            <rect x="160" y="8" width="8" height="8" />
            <rect x="184" y="24" width="22" height="28" />
            <rect x="210" y="18" width="28" height="34" />
            <rect x="242" y="26" width="20" height="26" />
            <rect x="266" y="14" width="22" height="38" />
            <rect x="292" y="24" width="24" height="28" />
            <rect x="320" y="18" width="18" height="34" />
            <rect x="342" y="26" width="26" height="26" />
            <rect x="372" y="10" width="20" height="42" />
            <rect x="376" y="6" width="7" height="4" />{" "}
            <rect x="396" y="20" width="22" height="32" />
            <rect x="422" y="28" width="18" height="24" />
            <rect x="444" y="16" width="26" height="36" />
            <rect x="474" y="24" width="20" height="28" />
            <rect x="498" y="18" width="24" height="34" />
            <rect x="526" y="26" width="18" height="26" />
            <rect x="548" y="14" width="22" height="38" />
            <rect x="574" y="24" width="26" height="28" />
            <rect x="604" y="18" width="20" height="34" />
            <rect x="628" y="26" width="24" height="26" />
            <rect x="656" y="18" width="20" height="34" />
          </g>
          {/* Warm window lights */}
          <g fill="#f09840" opacity="0.85">
            <rect x="8" y="30" width="2" height="2" />
            <rect x="12" y="22" width="2" height="2" />
            <rect x="66" y="20" width="2" height="2" />
            <rect x="84" y="28" width="2" height="2" />
            <rect x="114" y="24" width="2" height="2" />
            <rect x="162" y="18" width="2" height="2" />
            <rect x="218" y="20" width="2" height="2" />
            <rect x="270" y="18" width="2" height="2" />
            <rect x="296" y="26" width="2" height="2" />
            <rect x="378" y="12" width="2" height="2" />
            <rect x="450" y="20" width="2" height="2" />
            <rect x="504" y="22" width="2" height="2" />
            <rect x="610" y="20" width="2" height="2" />
            <rect x="662" y="20" width="2" height="2" />
          </g>
          <line
            x1="0"
            y1="51.5"
            x2="680"
            y2="51.5"
            stroke="#c84018"
            strokeWidth="0.8"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* ── Ticker ── */}
      <div className="sf-ticker" aria-hidden="true">
        <div className="sf-ticker-inner">
          {doubled.map((seg, i) => (
            <span key={i} className={seg === "◈" ? "sf-ticker-sep" : ""}>
              {seg}
            </span>
          ))}
        </div>
      </div>

      {/* ── Body ── */}
      <div className="sf-body">
        {/* Morning heading window */}
        <motion.div
          className="sf-heading"
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="sf-heading-bar">
            <span className="sf-heading-dots">
              <span style={{ background: "#e05050" }} />
              <span style={{ background: "#f0c060" }} />
              <span style={{ background: "#88c070" }} />
            </span>
            <span className="sf-heading-title">◈ MORNING.LOG ◈</span>
            <div className="sf-heading-grip">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="sf-heading-body">
            <p className="sf-heading-text">
              You scrolled all the way here. The city walked you through the
              night — the transit board, the arcade, the radio tower, the
              vending machine, the graffiti alley. And now it&apos;s morning.
            </p>
            <p className="sf-heading-sub">
              If something made you feel something, I&apos;d love to hear from
              you.
            </p>
          </div>
        </motion.div>

        {/* Socials label */}
        <motion.div
          className="sf-socials-label"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.35 }}
        >
          <span>▸ FIND ME ON</span>
          <div className="sf-socials-rule" />
        </motion.div>

        {/* Socials grid */}
        <div className="sf-socials-grid">
          {SOCIALS.map((social, i) => {
            const accent = DAWN_ACCENTS[i % DAWN_ACCENTS.length];
            return (
              <motion.a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="sf-social-window"
                aria-label={`${social.label}: ${social.handle}`}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.42 + i * 0.07, duration: 0.4 }}
                whileHover={{ y: -3 }}
              >
                <div className="sf-sw-bar" style={{ background: accent.bar }}>
                  <div className="sf-sw-dots">
                    <span style={{ background: accent.dot1 }} />
                    <span style={{ background: accent.dot2 }} />
                    <span style={{ background: accent.dot3 }} />
                  </div>
                  <span className="sf-sw-title" style={{ color: accent.text }}>
                    {social.title}
                  </span>
                  <div className="sf-sw-grip">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div className="sf-sw-body">
                  <div className="sf-sw-icon" style={{ color: accent.text }}>
                    {social.icon}
                  </div>
                  <div className="sf-sw-info">
                    <span className="sf-sw-label">{social.label}</span>
                    <span
                      className="sf-sw-handle"
                      style={{ color: accent.text }}
                    >
                      {social.handle}
                    </span>
                    <span className="sf-sw-cta">OPEN ▶</span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* COMPOSE.MSG terminal */}
        <motion.div
          className="sf-compose"
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.62, duration: 0.5 }}
          aria-label="Send a message"
        >
          <div className="sf-compose-bar">
            <div className="sf-compose-bar-dots">
              <span style={{ background: "#e05050" }} />
              <span style={{ background: "#f0c060" }} />
              <span style={{ background: "#88c070" }} />
            </div>
            <span className="sf-compose-title">COMPOSE.MSG</span>
            <div className="sf-compose-bar-grip">
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="sf-compose-body">
            <div className="sf-compose-prompt">
              <span className="sf-prompt-marker">$</span>
              <span className="sf-prompt-text">
                NEW_MESSAGE --to=shawn@shawnscapes.city
              </span>
            </div>

            <div className="sf-compose-fields">
              <div className="sf-field">
                <label className="sf-field-label" htmlFor="sf-email">
                  FROM:
                </label>
                <input
                  id="sf-email"
                  className="sf-field-input"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={sendState !== "idle"}
                  autoComplete="off"
                />
              </div>
              <div className="sf-field sf-field--tall">
                <label className="sf-field-label" htmlFor="sf-message">
                  MSG:
                </label>
                <textarea
                  id="sf-message"
                  className="sf-field-input sf-field-textarea"
                  placeholder="say something..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={sendState !== "idle"}
                  rows={4}
                />
              </div>
            </div>

            <div className="sf-compose-footer">
              <AnimatePresence mode="wait">
                {sendState === "sent" ? (
                  <motion.div
                    key="sent"
                    className="sf-sent-msg"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <span className="sf-sent-dot" />
                    MESSAGE TRANSMITTED
                  </motion.div>
                ) : (
                  <motion.button
                    key="btn"
                    type="button"
                    className={`sf-send-btn${sendState === "sending" ? " is-sending" : ""}`}
                    onClick={handleSend}
                    disabled={
                      sendState !== "idle" || !email.trim() || !message.trim()
                    }
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="sf-send-cursor" aria-hidden="true">
                      ▶
                    </span>
                    {sendState === "idle" ? "SEND_MSG.EXE" : "TRANSMITTING..."}
                  </motion.button>
                )}
              </AnimatePresence>
              <span className="sf-compose-hint">
                {sendState === "idle"
                  ? "// cursor blinks in the quiet"
                  : sendState === "sending"
                    ? "// transmitting..."
                    : "// morning delivered"}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Sign-off */}
        <motion.div
          className="sf-signoff"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
        >
          <div className="sf-signoff-line" />
          <span className="sf-signoff-text">
            ◈ SHAWNSCAPES CITY · EST. 2026 · STILL BUILDING ◈
          </span>
          <div className="sf-signoff-line" />
        </motion.div>
      </div>
    </motion.section>
  );
}
