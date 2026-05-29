/**
 * TakesModal
 * Purpose: Portal modal with broadcast-terminal UI matching the channel design.
 *
 * Structure:
 * ┌─────────────────────────────────────┐
 * │ ● REC ·         CH.02 ·             │  ← status bar
 * │   LIVE          RELATIONSHIPS       │
 * ├──────────────────────────────────── │
 * │ [icon]  ON                    [X]   │  ← header (teal bg)
 * │         RELATIONSHIPS               │
 * ├─────────────────────────────────────│
 * │  ▶ COMMUNICATION                    │  ← body (scrollable)
 * │  │ answer sentence one…             │
 * │  │ answer sentence two…             │
 * └─────────────────────────────────────┘
 */

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useTakesModal } from "../../../hooks/useTakesModal";
import { getCategoryIcon } from "../getCategoryIcon";
import SubcategoryPanel from "../SubcategoryPanel";
import { countCategoryTakes } from "../../../utils/personalTakes";
import "./TakesModal.css";

/* ── Per-category accent palette ────────────────────────────────────── */
const CATEGORY_ACCENTS = {
  learning: { hex: "#60c8d0", rgb: "96, 200, 208" },
  relationships: { hex: "#e05050", rgb: "224, 80, 80" },
  lifestyle: { hex: "#88c070", rgb: "136, 192, 112" },
  entertainment: { hex: "#8b8ff0", rgb: "139, 143, 240" },
  food: { hex: "#f0c060", rgb: "240, 192, 96" },
  random: { hex: "#d4835a", rgb: "212, 131, 90" },
};

/* Channel numbers matching category order */
const CATEGORY_CHANNELS = {
  learning: "CH.01",
  relationships: "CH.02",
  lifestyle: "CH.03",
  entertainment: "CH.04",
  food: "CH.05",
  random: "CH.06",
};

function getAccent(category) {
  if (!category) return CATEGORY_ACCENTS.learning;
  return CATEGORY_ACCENTS[category.iconKey] ?? CATEGORY_ACCENTS.learning;
}

function getChannel(category) {
  if (!category) return "CH.01";
  return CATEGORY_CHANNELS[category.iconKey] ?? "CH.01";
}

export default function TakesModal({ category, isOpen, onClose }) {
  const { titleId, closeRef } = useTakesModal(isOpen, onClose);
  const panelRef = useRef(null);

  /* Focus trap */
  useEffect(() => {
    if (!isOpen) return;
    const focusable = panelRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];

    const trap = (e) => {
      if (e.key !== "Tab" || !focusable?.length) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    const panel = panelRef.current;
    panel?.addEventListener("keydown", trap);
    return () => panel?.removeEventListener("keydown", trap);
  }, [isOpen]);

  const accent = getAccent(category);
  const channel = getChannel(category);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && category && (
        <div className="takes-modal-root">
          {/* Backdrop */}
          <motion.button
            type="button"
            className="takes-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
            aria-label="Close modal"
          />

          {/* Panel */}
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="takes-modal-panel"
            style={{
              "--modal-accent": accent.hex,
              "--modal-accent-rgb": accent.rgb,
            }}
            initial={{ opacity: 0, scale: 0.94, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
          >
            {/* ── Status bar ── */}
            <div className="takes-modal-status">
              <div className="takes-modal-status__col">
                <span className="takes-modal-status__row takes-modal-status__row--rec">
                  <span className="takes-modal-rec-dot" aria-hidden="true" />
                  REC ·
                </span>
                <span className="takes-modal-status__row">LIVE</span>
              </div>
              <div className="takes-modal-status__col takes-modal-status__col--right">
                <span className="takes-modal-status__row takes-modal-status__row--channel">
                  {channel} ·
                </span>
                <span className="takes-modal-status__row takes-modal-status__row--category">
                  {category.title.toUpperCase().replace(/^ON\s+/i, "")}
                </span>
              </div>
            </div>

            {/* ── Header ── */}
            <header className="takes-modal-header">
              <motion.div
                className="takes-modal-header__icon"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
                aria-hidden="true"
              >
                {getCategoryIcon(category.iconKey)}
              </motion.div>

              <div className="takes-modal-header__text">
                <p className="takes-modal-header__pre">ON</p>
                <h2 id={titleId} className="takes-modal-header__title">
                  {category.title.replace(/^On\s+/i, "")}
                </h2>
              </div>

              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="takes-modal-close"
                aria-label="Close"
              >
                X
              </button>
            </header>

            {/* ── Body ── */}
            <div className="takes-modal-body">
              {category.subcategories.map((sub, i) => (
                <SubcategoryPanel key={sub.id} subcategory={sub} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
