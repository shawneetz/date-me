import { motion } from "framer-motion";
import { getCategoryIcon } from "../getCategoryIcon";
import { countCategoryTakes } from "../../../utils/personalTakes";
import "./CategoryCard.css";

const CHANNEL_LABELS = ["CH.01", "CH.02", "CH.03", "CH.04", "CH.05", "CH.06"];

export default function CategoryCard({ category, onOpen, index }) {
  const takeCount = countCategoryTakes(category);
  const channel = CHANNEL_LABELS[index % CHANNEL_LABELS.length];

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(category)}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileTap={{ scale: 0.97 }}
      className="takes-category-card"
      aria-label={`Open ${category.title}, ${takeCount} takes`}
    >
      {/* ── Top body ── */}
      <div className="takes-category-card__top">
        {/* Channel label row */}
        <div className="takes-category-card__channel">
          <span className="takes-category-card__blink" aria-hidden="true" />
          {channel}
        </div>

        {/* Icon + title */}
        <div className="takes-category-card__icon-row">
          <div className="takes-category-card__icon" aria-hidden="true">
            {getCategoryIcon(category.iconKey)}
          </div>
          <h3 className="takes-category-card__title">{category.title}</h3>
        </div>
      </div>

      {/* ── Footer bar ── */}
      <div className="takes-category-card__footer">
        <span className="takes-category-card__count">
          {takeCount} {takeCount === 1 ? "take" : "takes"} ·{" "}
          {category.subcategories.length} topics
        </span>
        <span className="takes-category-card__arrow" aria-hidden="true">
          ▶
        </span>
      </div>
    </motion.button>
  );
}
