import { useState, useEffect } from 'react';
import { STORAGE_KEYS } from '../constants';
import { getFromStorage, saveToStorage } from '../utils/storageUtils';

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = getFromStorage(STORAGE_KEYS.TASKS, []);
    setTasks(savedTasks);
    setHasLoaded(true);
  }, []);

  // Save tasks to localStorage whenever tasks change (but not on initial load)
  useEffect(() => {
    if (hasLoaded) {
      saveToStorage(STORAGE_KEYS.TASKS, tasks);
    }
  }, [tasks, hasLoaded]);

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { 
        ...task, 
        completed: !task.completed,
        completedAt: !task.completed ? new Date().toISOString() : null
      } : task
    ));
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Set due date for task
  const setDueDate = (id, dueDate) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, dueDate } : task
    ));
  };

  // Set category for task
  const setCategory = (id, category) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, category } : task
    ));
  };

  // Add new task
  const addTask = (taskData) => {
    const newTask = {
      id: Date.now(),
      ...taskData,
      completed: false,
      createdAt: new Date().toISOString()
    };
    setTasks([newTask, ...tasks]);
  };

  // Update existing task
  const updateTask = (taskId, taskData) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, ...taskData }
        : task
    ));
  };

  return {
    tasks,
    toggleTask,
    deleteTask,
    setDueDate,
    setCategory,
    addTask,
    updateTask
  };
};
