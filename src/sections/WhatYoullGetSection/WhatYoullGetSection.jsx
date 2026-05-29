import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import "./WhatYoullGetSection.css";

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function ManifestItem({ item, index, isInView }) {
  const [barLoaded, setBarLoaded] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const delay = index * 120 + 400;
    const id = setTimeout(() => setBarLoaded(true), delay);
    return () => clearTimeout(id);
  }, [isInView, index]);

  return (
    <motion.div
      className="manifest-item"
      variants={rowVariants}
      style={{
        borderLeftColor: item.color,
        background: hexToRgba(item.color, 0.06),
      }}
    >
      <span
        className="manifest-icon"
        style={{ color: item.color }}
        aria-hidden="true"
      >
        {item.icon}
      </span>
      <div className="manifest-text">{item.text}</div>
      <div className="manifest-bar-track">
        <div
          className={`manifest-bar-fill ${barLoaded ? "loaded" : ""}`}
          style={{ background: item.color }}
        />
      </div>
    </motion.div>
  );
}

export default function WhatYoullGetSection({ items }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <motion.section
      id="what-youll-get"
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="section"
    >
      <div className="section-label">What you&apos;ll get</div>

      <div className="manifest-header">
        <span className="manifest-dot" aria-hidden="true" />
        MANIFEST LOADED
      </div>

      <motion.div
        className="manifest-list"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {items.map((item, i) => (
          <ManifestItem
            key={item.id || i}
            item={item}
            index={i}
            isInView={isInView}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}
