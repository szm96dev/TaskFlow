import React, { useState } from 'react';
import TaskList from './components/TaskList.jsx';
import TaskModal from './components/TaskModal.jsx';
import Header from './components/Header.jsx';
import StatsCard from './components/StatsCard.jsx';
import ControlsSection from './components/ControlsSection.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import { useTasks } from './hooks/useTasks.js';
import { useDarkMode } from './hooks/useDarkMode.js';
import { useTaskFilters } from './hooks/useTaskFilters.js';

function App() {
  // Custom hooks for state management
  const { tasks, toggleTask, deleteTask, setDueDate, setCategory, addTask, updateTask } = useTasks();
  const [darkMode, setDarkMode] = useDarkMode();
  const { searchQuery, setSearchQuery, filter, setFilter, sortOrder, setSortOrder, sortedTasks } = useTaskFilters(tasks);
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  // Handle modal save
  const handleModalSave = (taskData) => {
    if (editingTask) {
      updateTask(editingTask.id, taskData);
    } else {
      addTask(taskData);
    }
    setIsModalOpen(false);
    setEditingTask(null);
  };

  // Open modal for editing
  const openEditModal = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  // Open modal for adding
  const openAddModal = () => {
    setEditingTask(null);
    setIsModalOpen(true);
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
          {/* Header Section */}
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />

          {/* Main Content */}
          <div className="space-y-3 sm:space-y-4">
            {/* Stats Section */}
            <StatsCard tasks={tasks} />

            {/* Controls Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-3 sm:p-4 lg:p-6">
              <ControlsSection 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                filter={filter}
                setFilter={setFilter}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
                onOpenModal={openAddModal}
              />
            </div>

            {/* Task List */}
            <TaskList 
              tasks={sortedTasks} 
              onToggleTask={toggleTask}
              onEditTask={openEditModal}
              onDeleteTask={deleteTask}
              onSetDueDate={setDueDate}
              onSetCategory={setCategory}
            />
          </div>

          {/* Task Modal */}
          <TaskModal
            isOpen={isModalOpen}
            onClose={() => {
              setIsModalOpen(false);
              setEditingTask(null);
            }}
            onSave={handleModalSave}
            task={editingTask}
          />
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
