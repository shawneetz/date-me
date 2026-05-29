export const TAKE_CHAR_LIMIT = 140;

/**
 * Count "takes" in a category.
 * In the new format each subcategory IS one take (one answer),
 * so the count equals the number of subcategories.
 */
export function countCategoryTakes(category) {
  return category.subcategories.length;
}

export function clampTake(text) {
  if (!text || text.length <= TAKE_CHAR_LIMIT) return text ?? "";
  return `${text.slice(0, TAKE_CHAR_LIMIT - 1)}…`;
}
