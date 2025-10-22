
export const filterTasks = (tasks, filter) => {
  switch (filter) {
    case 'active':
      return tasks.filter(task => !task.completed);
    case 'completed':
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const sortTasks = (tasks, sortOrder) => {
  const sortedTasks = [...tasks];
  
  switch (sortOrder) {
    case 'desc':
      return sortedTasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    case 'asc':
      return sortedTasks.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    case 'completed_desc':
      return sortedTasks.sort((a, b) => {
        if (a.completed && !b.completed) return -1;
        if (!a.completed && b.completed) return 1;
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
    case 'completed_asc':
      return sortedTasks.sort((a, b) => {
        if (a.completed && !b.completed) return 1;
        if (!a.completed && b.completed) return -1;
        return new Date(a.createdAt) - new Date(b.createdAt);
      });
    case 'title_asc':
      return sortedTasks.sort((a, b) => a.title.localeCompare(b.title));
    case 'title_desc':
      return sortedTasks.sort((a, b) => b.title.localeCompare(a.title));
    default:
      return sortedTasks;
  }
};

export const searchTasks = (tasks, searchQuery) => {
  if (!searchQuery.trim()) return tasks;
  
  const query = searchQuery.toLowerCase();
  return tasks.filter(task => 
    task.title.toLowerCase().includes(query) ||
    task.category?.toLowerCase().includes(query)
  );
};

export const getTaskStats = (tasks) => {
  const total = tasks.length;
  const active = tasks.filter(task => !task.completed).length;
  const completed = tasks.filter(task => task.completed).length;
  
  return { total, active, completed };
};
