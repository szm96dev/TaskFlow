import React from 'react';
import { ClipboardDocumentListIcon, PlusIcon } from '@heroicons/react/24/outline';
import TaskItem from './TaskItem.jsx';

const TaskList = ({ tasks, onToggleTask, onEditTask, onDeleteTask, onSetDueDate, onSetCategory }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12 sm:py-16 lg:py-20 text-text-tertiary dark:text-dark-text-tertiary">
        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full mb-6 sm:mb-8 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 dark:from-dark-brand-primary/20 dark:to-dark-brand-secondary/20">
          <ClipboardDocumentListIcon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-text-primary dark:text-dark-text-primary">No tasks yet</h3>
        <p className="text-base sm:text-lg mb-6 sm:mb-8 text-text-secondary dark:text-dark-text-secondary px-4">Start your productivity journey by adding your first task!</p>
        <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl bg-gradient-to-r from-brand-primary to-brand-secondary dark:from-dark-brand-primary dark:to-dark-brand-secondary text-text-inverse dark:text-dark-text-inverse">
          <PlusIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-semibold text-sm sm:text-base">Add your first task</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 mb-4 sm:mb-5">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-text-primary dark:text-dark-text-primary text-center sm:text-left">
          Your Tasks ({tasks.length})
        </h2>
        <div className="flex justify-center sm:justify-end">
          <div className="px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 dark:from-dark-brand-primary/20 dark:to-dark-brand-secondary/20 text-brand-primary dark:text-dark-brand-primary">
            <span className="font-semibold text-sm sm:text-base">
              {tasks.filter(t => !t.completed).length} active
            </span>
          </div>
        </div>
      </div>
      
      <div className="max-h-64 sm:max-h-80 lg:max-h-96 xl:max-h-[32rem] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-gray-100 dark:scrollbar-track-gray-800">
        <div className="flex flex-col gap-0 sm:gap-0.5 lg:gap-1 pr-1 sm:pr-2">
          {tasks.map((task, index) => (
            <div
              key={task.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <TaskItem
                task={task}
                onToggleTask={onToggleTask}
                onEditTask={onEditTask}
                onDeleteTask={onDeleteTask}
                onSetDueDate={onSetDueDate}
                onSetCategory={onSetCategory}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
