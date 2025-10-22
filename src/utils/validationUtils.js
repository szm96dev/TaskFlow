export const validateTask = (task) => {
  const errors = {};
  
  if (!task.title || task.title.trim().length === 0) {
    errors.title = 'Task title is required';
  } else if (task.title.trim().length < 3) {
    errors.title = 'Task title must be at least 3 characters long';
  } else if (task.title.trim().length > 100) {
    errors.title = 'Task title must be less than 100 characters';
  }
  
  if (task.dueDate && new Date(task.dueDate) < new Date()) {
    errors.dueDate = 'Due date cannot be in the past';
  }
  
  if (task.category && !['general', 'work', 'personal', 'shopping', 'health', 'finance'].includes(task.category)) {
    errors.category = 'Invalid category selected';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const sanitizeTask = (task) => {
  return {
    ...task,
    title: task.title?.trim() || '',
    category: task.category || 'general',
    completed: Boolean(task.completed),
    createdAt: task.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
};
