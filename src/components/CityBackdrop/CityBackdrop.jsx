/**
 * CityBackdrop
 * A fixed pixel cityscape that lives *behind* the entire Profile page.
 * Scroll progress 0 → 1 drives the sky from deep midnight → pre-dawn → sunrise gold.
 * Buildings are static SVG silhouettes; windows light up progressively.
 * Stars fade as dawn breaks.
 */

import { useEffect, useRef, useState } from "react";
import "./CityBackdrop.css";

/* ── Sky gradient stops [scrollProgress, topColor, midColor, horizonColor] ── */
const SKY_STOPS = [
  [0.0, "#0d1f2d", "#0d1f2d", "#0d1f2d"],
  [0.18, "#0d1f2d", "#111e32", "#162438"],
  [0.36, "#0c1a30", "#141e3a", "#1c1a38"],
  [0.52, "#121028", "#1e1430", "#2e1835"],
  [0.67, "#1e0e1e", "#3a1828", "#641e28"],
  [0.8, "#2a0e10", "#801e18", "#d44020"],
  [0.9, "#38100a", "#b03010", "#e86828"],
  [1.0, "#481408", "#c83a10", "#f09040"],
];

function lerpHex(h1, h2, t) {
  const p = (h) => [
    parseInt(h.slice(1, 3), 16),
    parseInt(h.slice(3, 5), 16),
    parseInt(h.slice(5, 7), 16),
  ];
  const [r1, g1, b1] = p(h1);
  const [r2, g2, b2] = p(h2);
  return `rgb(${Math.round(r1 + (r2 - r1) * t)},${Math.round(g1 + (g2 - g1) * t)},${Math.round(b1 + (b2 - b1) * t)})`;
}

function getSky(progress) {
  for (let i = 1; i < SKY_STOPS.length; i++) {
    const [p0, top0, bot0, hor0] = SKY_STOPS[i - 1];
    const [p1, top1, bot1, hor1] = SKY_STOPS[i];
    if (progress <= p1) {
      const t = (progress - p0) / (p1 - p0);
      return {
        top: lerpHex(top0, top1, t),
        bottom: lerpHex(bot0, bot1, t),
        horizon: lerpHex(hor0, hor1, t),
      };
    }
  }
  return { top: "#481408", bottom: "#c83a10", horizon: "#f09040" };
}

/* ── Window definitions [xPct, yPct, lightsAtProgress] ── */
const WINDOWS = [
  // Back-row buildings
  [5.5, 44, 0.48],
  [8.2, 38, 0.65],
  [11, 50, 0.4],
  [14, 42, 0.72],
  [17, 36, 0.55],
  [20, 48, 0.44],
  [23, 40, 0.68],
  [26, 33, 0.8],
  [29, 46, 0.52],
  [32, 38, 0.6],
  [35, 44, 0.74],
  [38, 30, 0.85],
  [41, 42, 0.5],
  [44, 36, 0.64],
  [47, 48, 0.42],
  [50, 40, 0.7],
  [53, 33, 0.58],
  [56, 46, 0.46],
  [59, 38, 0.76],
  [62, 44, 0.55],
  [65, 36, 0.67],
  [68, 48, 0.44],
  [71, 40, 0.72],
  [74, 33, 0.6],
  [77, 46, 0.5],
  [80, 42, 0.78],
  [83, 36, 0.62],
  [86, 48, 0.48],
  [89, 40, 0.66],
  [92, 33, 0.82],
  // Front-row buildings (lower y = closer to skyline)
  [7, 60, 0.56],
  [15, 56, 0.7],
  [24, 62, 0.45],
  [33, 58, 0.66],
  [42, 64, 0.52],
  [51, 58, 0.74],
  [60, 62, 0.48],
  [69, 56, 0.68],
  [78, 60, 0.58],
  [87, 58, 0.76],
];

/* ── Stars ── */
const STARS = Array.from({ length: 55 }, (_, i) => ({
  x: (i * 41.3 + 13) % 100,
  y: (i * 23.7 + 5) % 55,
  size: i % 4 === 0 ? 2 : 1,
  speed: 1.6 + (i % 5) * 0.4,
  delay: (i * 0.18) % 3,
}));

export default function CityBackdrop() {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(null);
  const lastProgressRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        const raw = maxScroll > 0 ? scrollY / maxScroll : 0;
        const clamped = Math.min(1, Math.max(0, raw));
        if (Math.abs(clamped - lastProgressRef.current) > 0.0005) {
          lastProgressRef.current = clamped;
          setProgress(clamped);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const sky = getSky(progress);
  const starOpacity = Math.max(0, 1 - progress * 2.2);
  const sunOpacity = Math.max(0, (progress - 0.55) * 4.5);
  const sunRise = Math.max(0, (progress - 0.55) * 3.8); // 0 → 1 as sun rises
  const glowOpacity = Math.max(0, (progress - 0.42) * 2.2);

  /* Building fill shifts from solid dark to a slightly warmer silhouette */
  const bt = Math.max(0, (progress - 0.55) * 2.5);
  const backFill = `rgb(${Math.round(8 + bt * 24)},${Math.round(10 + bt * 8)},${Math.round(16 + bt * 4)})`;
  const frontFill = `rgb(${Math.round(5 + bt * 14)},${Math.round(7 + bt * 5)},${Math.round(12 + bt * 3)})`;

  return (
    <div
      className="city-backdrop"
      aria-hidden="true"
      style={{
        background: `linear-gradient(180deg, ${sky.top} 0%, ${sky.bottom} 65%, ${sky.horizon} 100%)`,
      }}
    >
      {/* Horizon glow */}
      <div className="cb-horizon-glow" style={{ opacity: glowOpacity }} />

      {/* Stars */}
      {STARS.map((s, i) => (
        <div
          key={i}
          className="cb-star"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: starOpacity * (0.4 + (i % 3) * 0.2),
            animationDuration: `${s.speed}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}

      {/* Sun */}
      <div
        className="cb-sun"
        style={{
          opacity: sunOpacity,
          bottom: `${14 + sunRise * 22}%`,
        }}
      />

      {/* Back buildings */}
      <svg
        className="cb-buildings-back"
        viewBox="0 0 680 130"
        preserveAspectRatio="none"
      >
        <g fill={backFill} stroke="rgba(20,50,68,0.4)" strokeWidth="0.5">
          <rect x="0" y="60" width="32" height="70" />
          <rect x="4" y="40" width="12" height="20" />
          <rect x="36" y="74" width="24" height="56" />
          <rect x="64" y="50" width="18" height="80" />
          <rect x="68" y="30" width="8" height="20" />
          <rect x="86" y="66" width="28" height="64" />
          <rect x="118" y="52" width="22" height="78" />
          <rect x="122" y="32" width="8" height="20" />
          <rect x="144" y="72" width="20" height="58" />
          <rect x="168" y="42" width="26" height="88" />
          <rect x="172" y="22" width="10" height="20" />
          <rect x="198" y="62" width="24" height="68" />
          <rect x="226" y="46" width="30" height="84" />
          <rect x="230" y="26" width="8" height="20" />
          <rect x="260" y="70" width="22" height="60" />
          <rect x="286" y="36" width="24" height="94" />
          <rect x="314" y="62" width="26" height="68" />
          <rect x="344" y="48" width="20" height="82" />
          <rect x="368" y="66" width="28" height="64" />
          <rect x="400" y="28" width="22" height="102" />
          <rect x="404" y="10" width="8" height="18" />
          <rect x="426" y="58" width="24" height="72" />
          <rect x="454" y="72" width="20" height="58" />
          <rect x="478" y="44" width="28" height="86" />
          <rect x="482" y="24" width="10" height="20" />
          <rect x="510" y="64" width="22" height="66" />
          <rect x="536" y="48" width="26" height="82" />
          <rect x="566" y="70" width="20" height="60" />
          <rect x="590" y="38" width="24" height="92" />
          <rect x="594" y="18" width="8" height="20" />
          <rect x="618" y="60" width="28" height="70" />
          <rect x="650" y="46" width="22" height="84" />
          <rect x="654" y="28" width="8" height="18" />
        </g>
      </svg>

      {/* Front buildings */}
      <svg
        className="cb-buildings-front"
        viewBox="0 0 680 90"
        preserveAspectRatio="none"
      >
        <g fill={frontFill} stroke="rgba(20,50,68,0.6)" strokeWidth="0.5">
          <rect x="0" y="48" width="22" height="42" />
          <rect x="26" y="40" width="18" height="50" />
          <rect x="48" y="54" width="16" height="36" />
          <rect x="68" y="44" width="20" height="46" />
          <rect x="92" y="50" width="24" height="40" />
          <rect x="120" y="42" width="18" height="48" />
          <rect x="142" y="56" width="22" height="34" />
          <rect x="168" y="46" width="20" height="44" />
          <rect x="192" y="52" width="26" height="38" />
          <rect x="222" y="42" width="20" height="48" />
          <rect x="246" y="58" width="24" height="32" />
          <rect x="274" y="48" width="22" height="42" />
          <rect x="300" y="42" width="20" height="48" />
          <rect x="324" y="54" width="26" height="36" />
          <rect x="354" y="46" width="22" height="44" />
          <rect x="380" y="52" width="20" height="38" />
          <rect x="404" y="40" width="24" height="50" />
          <rect x="432" y="56" width="18" height="34" />
          <rect x="454" y="46" width="24" height="44" />
          <rect x="482" y="52" width="20" height="38" />
          <rect x="506" y="40" width="22" height="50" />
          <rect x="532" y="54" width="26" height="36" />
          <rect x="562" y="48" width="20" height="42" />
          <rect x="586" y="42" width="24" height="48" />
          <rect x="614" y="56" width="18" height="34" />
          <rect x="636" y="46" width="26" height="44" />
          <rect x="666" y="54" width="14" height="36" />
        </g>
      </svg>

      {/* Window lights */}
      {WINDOWS.map(([x, y, threshold], i) => {
        const lit = progress >= threshold;
        const opacity = lit ? Math.min(1, (progress - threshold) * 8) : 0;
        if (opacity <= 0) return null;
        const isDawn = progress > 0.72;
        const color = isDawn
          ? `rgba(240,140,50,${opacity * 0.85})`
          : `rgba(240,196,88,${opacity})`;
        return (
          <div
            key={i}
            className="cb-window"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              opacity,
              background: color,
            }}
          />
        );
      })}

      {/* Ground strip */}
      <div className="cb-ground" />
    </div>
  );
}
