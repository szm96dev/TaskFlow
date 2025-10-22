import React from 'react';
import { cn } from '../../utils/cn';

const StatCard = ({ 
  title,
  value,
  subtitle,
  icon,
  trend,
  trendValue,
  variant = 'default',
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseClasses = 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-all duration-200';
  
  const variants = {
    default: 'shadow-sm',
    elevated: 'shadow-lg',
    success: 'border-green-200 dark:border-green-800 bg-green-50/30 dark:bg-green-900/10',
    warning: 'border-yellow-200 dark:border-yellow-800 bg-yellow-50/30 dark:bg-yellow-900/10',
    danger: 'border-red-200 dark:border-red-800 bg-red-50/30 dark:bg-red-900/10',
    info: 'border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-900/10'
  };
  
  const sizes = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6'
  };

  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'up':
        return 'text-green-600 dark:text-green-400';
      case 'down':
        return 'text-red-600 dark:text-red-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        );
      case 'down':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-2 mb-1.5">
          {icon && (
            <div className={cn('text-gray-600 dark:text-gray-400', iconSizes[size])}>
              {icon}
            </div>
          )}
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {title}
            </p>
            {subtitle && (
              <p className="text-xs text-gray-500 dark:text-gray-500">
                {subtitle}
              </p>
            )}
          </div>
        </div>
        
        <div className="flex items-baseline gap-1.5 mt-auto">
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {value}
          </p>
          
          {trend && trendValue && (
            <div className={cn('flex items-center gap-1 text-sm', getTrendColor(trend))}>
              {getTrendIcon(trend)}
              <span className="font-medium">
                {trendValue}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
