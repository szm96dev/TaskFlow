import { STORAGE_KEYS, DEFAULT_VALUES } from '../constants/storage';

export const getFromStorage = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : (defaultValue !== null ? defaultValue : DEFAULT_VALUES[key]);
  } catch (error) {
    console.error(`Error reading from localStorage for key ${key}:`, error);
    return defaultValue !== null ? defaultValue : DEFAULT_VALUES[key];
  }
};

export const saveToStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error saving to localStorage for key ${key}:`, error);
  }
};

export const removeFromStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing from localStorage for key ${key}:`, error);
  }
};

export const clearAllStorage = () => {
  try {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
};
