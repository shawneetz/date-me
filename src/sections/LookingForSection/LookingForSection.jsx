import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import "./LookingForSection.css";

function useTypewriter(text, enabled, speed = 38) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    setDisplayed("");
    setDone(false);
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(id);
  }, [text, enabled, speed]);

  return { displayed, done };
}

export default function LookingForSection({ lookingFor }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { displayed, done } = useTypewriter(lookingFor.headline, isInView);

  return (
    <motion.section
      id="looking"
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="section"
    >
      <div className="section-label">Looking for</div>

      <div className="crt-frame">
        {/* Status bar */}
        <div className="broadcast-bar">
          <span className="broadcast-rec">
            <span className="rec-dot" />
            REC&nbsp;&nbsp;SIGNAL CLEAR
          </span>
          <span className="broadcast-signal">CH.01</span>
        </div>

        {/* Body */}
        <div className="crt-body">
          <h3 className="crt-headline">
            {displayed}
            {!done && <span className="cursor">|</span>}
          </h3>
          <p className={`crt-body-text ${done ? "visible" : ""}`}>
            {lookingFor.body}
          </p>
        </div>
      </div>
    </motion.section>
  );
}
