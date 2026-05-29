/**
 * SubcategoryPanel
 * Purpose: Render a single "X vs Y" comparison within the modal,
 *          with the question as a label and a sincere personal answer below it.
 */
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
      <div className="takes-subcategory__question">
        <span className="takes-subcategory__bullet" aria-hidden="true">
          ▸
        </span>
        <h4 className="takes-subcategory__title">{subcategory.title}</h4>
      </div>
      <p className="takes-subcategory__answer">{subcategory.answer}</p>
    </motion.article>
  );
}
