import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import "./QuoteSection.css";

const ROOFTOP_BLOCKS = [
  { height: 18, width: 32 },
  { height: 12, width: 28 },
  { height: 24, width: 38 },
  { height: 16, width: 30 },
  { height: 20, width: 36 },
];

function useWordReveal(text, enabled, groupSize = 3, interval = 120) {
  const words = text.split(" ");
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    setVisibleCount(0);
    let count = 0;
    const id = setInterval(() => {
      count += groupSize;
      setVisibleCount(count);
      if (count >= words.length) clearInterval(id);
    }, interval);
    return () => clearInterval(id);
  }, [text, enabled, groupSize, interval]);

  return { words, visibleCount };
}

export default function QuoteSection({ quote }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.12 });
  const { words, visibleCount } = useWordReveal(quote.text, isInView);

  const star1Speed = useRef(`${(1.5 + Math.random()).toFixed(2)}s`);
  const star2Speed = useRef(`${(1.5 + Math.random()).toFixed(2)}s`);

  return (
    <motion.section
      id="quote"
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="section"
    >
      <div className="section-label">Quote</div>

      <div className="quote-wrapper">
        {/* Rooftop silhouette */}
        <div className="rooftop" aria-hidden="true">
          {ROOFTOP_BLOCKS.map((b, i) => (
            <div
              key={i}
              className="rooftop-block"
              style={{ height: b.height, width: b.width }}
            />
          ))}
        </div>

        {/* Signal label strip */}
        <div className="quote-label-strip" aria-hidden="true">
          ◈ SIGNAL QUOTE ◈
        </div>

        {/* Quote card */}
        <div className="quote-card">
          {/* Stars */}
          <div className="quote-stars" aria-hidden="true">
            <span
              className="star"
              style={{ "--twinkle-speed": star1Speed.current }}
            />
            <span
              className="star"
              style={{ "--twinkle-speed": star2Speed.current }}
            />
          </div>

          {/* Opening mark */}
          <span className="big-quote-mark" aria-hidden="true">
            &ldquo;
          </span>

          {/* Word-reveal quote */}
          <p className="quote-text">
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="quote-word"
                initial={{ opacity: 0 }}
                animate={{ opacity: i < visibleCount ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {word}
                {i < words.length - 1 ? " " : ""}
              </motion.span>
            ))}
          </p>

          {/* Attribution */}
          <cite className="quote-cite">▸ {quote.author.toUpperCase()}</cite>
        </div>
      </div>
    </motion.section>
  );
}
