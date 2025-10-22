import React, { useState, memo, useCallback } from 'react';
import { 
  CheckIcon, 
  PencilIcon, 
  TrashIcon,
  ChevronDownIcon,
  CalendarDaysIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import { Badge, ActionButton, Card } from './ui';
import { TASK_CATEGORIES, CATEGORY_COLORS, CATEGORY_ICONS } from '../constants';
import { isOverdue, formatDateShort } from '../utils/dateUtils';

const TaskItem = memo(({ task, onToggleTask, onEditTask, onDeleteTask, onSetDueDate, onSetCategory }) => {
  const [showDetails, setShowDetails] = useState(false);

  const taskIsOverdue = isOverdue(task.dueDate, task.completed);

  const handleToggle = useCallback(() => {
    onToggleTask(task.id);
  }, [onToggleTask, task.id]);

  const handleEdit = useCallback(() => {
    onEditTask(task);
  }, [onEditTask, task]);

  const handleDelete = useCallback(() => {
    onDeleteTask(task.id);
  }, [onDeleteTask, task.id]);

  const handleToggleDetails = useCallback(() => {
    setShowDetails(prev => !prev);
  }, []);

  const handleDueDateChange = useCallback((e) => {
    onSetDueDate(task.id, e.target.value ? new Date(e.target.value).toISOString() : null);
  }, [onSetDueDate, task.id]);

  const handleCategoryChange = useCallback((e) => {
    onSetCategory(task.id, e.target.value);
  }, [onSetCategory, task.id]);


  const getCategoryEmoji = (category) => {
    return CATEGORY_ICONS[category] || CATEGORY_ICONS.general;
  };

  const getCategoryColor = (category) => {
    return CATEGORY_COLORS[category] || CATEGORY_COLORS.general;
  };

  return (
    <Card 
      variant={task.completed ? 'success' : taskIsOverdue ? 'danger' : 'default'}
      size="lg"
      className={`mb-4 hover:shadow-lg transition-all duration-200 ${
        task.completed 
          ? 'border-green-200 dark:border-green-800 bg-green-50/30 dark:bg-green-900/10' 
          : taskIsOverdue 
            ? 'border-red-200 dark:border-red-800 bg-red-50/30 dark:bg-red-900/10'
            : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
      }`}
    >
        <div className="flex items-start gap-0.5 sm:gap-1">
        {/* Checkbox */}
        <button
          onClick={handleToggle}
          className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg border-2 flex items-center justify-center transition-all duration-200 hover:scale-110 ${
            task.completed 
              ? 'bg-green-500 border-green-500 text-white shadow-lg shadow-green-500/25' 
              : 'border-gray-300 hover:border-green-400 hover:bg-green-50 dark:border-gray-600 dark:hover:border-green-500'
          }`}
          aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {task.completed && <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5" />}
        </button>

        {/* Task Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-0.5 sm:gap-1">
            <div className="flex-1 min-w-0">
              <h3 className={`text-base sm:text-lg font-semibold leading-tight ${
                task.completed 
                  ? 'line-through text-gray-500 dark:text-gray-400' 
                  : 'text-gray-900 dark:text-white'
              }`}>
                {task.title}
              </h3>
              
              {/* Task Meta Info */}
              <div className="flex flex-wrap items-center gap-0.5 sm:gap-1 mt-1 sm:mt-1.5">
                {/* Category Badge */}
                {task.category && (
                  <Badge 
                    variant="default" 
                    size="sm" 
                    className={`flex items-center gap-1.5 ${getCategoryColor(task.category)}`}
                    icon={<span className="flex items-center justify-center text-sm leading-none">{getCategoryEmoji(task.category)}</span>}
                  >
                    <span className="capitalize">{task.category}</span>
                  </Badge>
                )}
                
                {/* Due Date */}
                {task.dueDate && (
                        <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${
                          taskIsOverdue 
                            ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                            : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                        }`}>
                          <span className="flex items-center justify-center leading-none">
                            {taskIsOverdue ? <ExclamationTriangleIcon className="w-4 h-4" /> : <CalendarDaysIcon className="w-4 h-4" />}
                          </span>
                    <span>
                      {formatDateShort(task.dueDate)}
                      {taskIsOverdue && ' (Overdue)'}
                    </span>
                  </div>
                )}
                
                {/* Status Badge */}
                <Badge 
                  variant={task.completed ? 'success' : 'warning'}
                  size="sm" 
                  className="flex items-center gap-1.5"
                    icon={<div className={`w-2 h-2 rounded-full flex-shrink-0 ${task.completed ? 'bg-green-500' : 'bg-orange-500'}`}></div>}
                >
                  {task.completed ? 'Completed' : 'Active'}
                </Badge>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <ActionButton
                onClick={handleEdit}
                variant="primary"
                size="sm"
                icon={<PencilIcon className="w-4 h-4 sm:w-5 sm:h-5" />}
                tooltip="Edit task"
              />
              <ActionButton
                onClick={handleToggleDetails}
                variant="default"
                size="sm"
                icon={<ChevronDownIcon className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 ${showDetails ? 'rotate-180' : ''}`} />}
                tooltip={showDetails ? 'Hide details' : 'Show details'}
              />
              <ActionButton
                onClick={handleDelete}
                variant="danger"
                size="sm"
                icon={<TrashIcon className="w-4 h-4 sm:w-5 sm:h-5" />}
                tooltip="Delete task"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Task Details */}
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        showDetails ? 'max-h-96 opacity-100 mt-3 pt-3' : 'max-h-0 opacity-0 mt-0 pt-0'
      }`}>
        <div className="border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row gap-3 pt-3">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Due Date
              </label>
              <input
                type="datetime-local"
                value={task.dueDate ? new Date(task.dueDate).toISOString().slice(0, 16) : ''}
                onChange={handleDueDateChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Due date"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Category
              </label>
              <select
                value={task.category}
                onChange={handleCategoryChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Category"
              >
                {TASK_CATEGORIES.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            Created: {new Date(task.createdAt).toLocaleDateString()}
          </div>
        </div>
      </div>
    </Card>
  );
});

TaskItem.displayName = 'TaskItem';

export default TaskItem;