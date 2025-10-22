import React, { useState, useEffect } from 'react';
import { XMarkIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { Input, Select, Textarea, Button } from './ui';
import { TASK_CATEGORIES } from '../constants';
import { validateTask, sanitizeTask } from '../utils/validationUtils';

const TaskModal = ({ isOpen, onClose, onSave, task = null }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: 'general',
    dueDate: '',
    description: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title || '',
        category: task.category || 'general',
        dueDate: task.dueDate ? new Date(task.dueDate).toISOString().slice(0, 16) : '',
        description: task.description || ''
      });
    } else {
      setFormData({
        title: '',
        category: 'general',
        dueDate: '',
        description: ''
      });
    }
    setError(''); // Clear error when modal opens
  }, [task, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate the task data
    const taskData = {
      ...formData,
      dueDate: formData.dueDate ? new Date(formData.dueDate).toISOString() : null
    };
    
    const validation = validateTask(taskData);
    
    if (validation.isValid) {
      const sanitizedTask = sanitizeTask(taskData);
      onSave(sanitizedTask);
      onClose();
    } else {
      setError(validation.errors.title || 'Please fix the errors above');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Clear any existing error
    setError('');
    
    // Validate due date - must be at least 5 minutes from now
    if (name === 'dueDate' && value) {
      const selectedDate = new Date(value);
      const now = new Date();
      const minDate = new Date(now.getTime() + 5 * 60 * 1000); // 5 minutes from now
      
      if (selectedDate < minDate) {
        setError('Due date must be at least 5 minutes from now');
        return;
      }
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-xl sm:rounded-2xl shadow-2xl bg-bg-card dark:bg-dark-bg-card border border-border-primary dark:border-dark-border-primary max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-border-primary dark:border-dark-border-primary">
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-bold text-text-primary dark:text-dark-text-primary">
              {task ? '✏️ Edit Task' : '✨ Add New Task'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg transition-colors hover:bg-bg-secondary dark:hover:bg-dark-bg-secondary text-text-tertiary dark:text-dark-text-tertiary hover:text-text-primary dark:hover:text-dark-text-primary"
            >
              <XMarkIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-3 sm:space-y-4">
          {/* Error Message */}
          {error && (
            <div className="p-3 rounded-xl border-2 bg-status-error/10 dark:bg-dark-status-error/20 border-status-error dark:border-dark-status-error text-status-error dark:text-dark-status-error">
              <div className="flex items-center gap-2">
                <ExclamationTriangleIcon className="w-5 h-5" />
                <span className="font-semibold">{error}</span>
              </div>
            </div>
          )}
          {/* Task Title */}
          <Input
            label="Task Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="What needs to be done?"
            required
            variant="default"
            size="lg"
          />

          {/* Category */}
          <Select
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            options={TASK_CATEGORIES}
            variant="default"
            size="lg"
          />

          {/* Due Date */}
          <Input
            label="Due Date"
            type="datetime-local"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            min={new Date(Date.now() + 5 * 60 * 1000).toISOString().slice(0, 16)}
            variant="default"
            size="lg"
          />

          {/* Description */}
          <Textarea
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Add more details..."
            rows={3}
            variant="default"
            size="lg"
          />

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="button"
              onClick={onClose}
              variant="secondary"
              size="md"
              className="flex-1 order-2 sm:order-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="md"
              className="flex-1 order-1 sm:order-2"
            >
              {task ? 'Update Task' : 'Add Task'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
