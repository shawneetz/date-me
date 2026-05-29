/**
 * Converts a hex color string to an rgba() CSS value.
 * @param {string} hex - e.g. "#60C8D0"
 * @param {number} alpha - 0–1
 * @returns {string} e.g. "rgba(96, 200, 208, 0.06)"
 */
export function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
