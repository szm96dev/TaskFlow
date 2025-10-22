/**
 * Utility function to merge Tailwind CSS class names
 * @param {...string} classes - Class names to merge
 * @returns {string} - Merged class names
 */
export const cn = (...classes) => {
  return classes
    .filter(Boolean)
    .join(' ')
    .trim();
};
