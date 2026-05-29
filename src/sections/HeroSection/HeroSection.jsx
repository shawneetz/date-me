import { motion } from "framer-motion";
import HeroPhoto from "../../components/HeroPhoto";
import "./HeroSection.css";

export default function HeroSection({ profile }) {
  const { mbti, sign, tag, funFact, photoCaption } = profile;

  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="hero"
    >
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
      >
        <div className="hero-photo-frame">
          <HeroPhoto profile={profile} />
        </div>
        <div className="hero-pills">
          <div className="hero-pill">{mbti.toUpperCase()}</div>
          <div className="hero-pill">{sign.toUpperCase()}</div>
          <div className="hero-pill">{tag.toUpperCase()}</div>
        </div>
      </motion.div>

      <div className="hero-divider" aria-hidden="true" />

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.25, duration: 0.6 }}
      >
        <p className="hero-eyebrow">◈ &nbsp;SHAWNSCAPES&nbsp; ◈</p>
        <h1 className="hero-name">
          <span className="hero-name-line1">Hi there,</span>
          <span className="hero-name-line2">I'm Shawn!</span>
        </h1>
        <div className="hero-rule" aria-hidden="true" />
        <p className="hero-caption">{photoCaption}</p>
        {funFact && (
          <div className="hero-funfact">
            <span className="hero-funfact-label">FUN FACT</span>
            <p>{funFact}</p>
          </div>
        )}
      </motion.div>
    </motion.section>
  );
}
