export const TASK_CATEGORIES = [
  { value: 'general', label: 'General', icon: '📄' },
  { value: 'work', label: 'Work', icon: '💼' },
  { value: 'personal', label: 'Personal', icon: '👤' },
  { value: 'shopping', label: 'Shopping', icon: '🛍️' },
  { value: 'health', label: 'Health', icon: '❤️' },
  { value: 'finance', label: 'Finance', icon: '💰' }
];

export const CATEGORY_COLORS = {
  work: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  personal: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
  shopping: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
  health: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  finance: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  general: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
};

// Derive CATEGORY_ICONS from TASK_CATEGORIES to avoid duplication
export const CATEGORY_ICONS = TASK_CATEGORIES.reduce((acc, category) => {
  acc[category.value] = category.icon;
  return acc;
}, {});
