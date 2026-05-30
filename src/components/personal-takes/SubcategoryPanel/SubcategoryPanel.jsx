import { motion } from "framer-motion";
import "./SubcategoryPanel.css";

export default function SubcategoryPanel({ subcategory, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="takes-subcategory"
    >
      <div className="takes-subcategory__title-row">
        <span className="takes-subcategory__arrow" aria-hidden="true">
          ▸
        </span>
        <h4 className="takes-subcategory__title">{subcategory.title}</h4>
      </div>
      <div className="takes-subcategory__quotes">
        <p className="takes-subcategory__quote">{subcategory.answer}</p>
      </div>
    </motion.article>
  );
}
