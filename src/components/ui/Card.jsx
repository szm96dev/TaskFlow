import React from 'react';
import { cn } from '../../utils/cn';

const Card = ({ 
  children,
  variant = 'default',
  size = 'md',
  className = '',
  hover = false,
  ...props 
}) => {
  const baseClasses = 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg transition-all duration-200';
  
  const variants = {
    default: 'shadow-sm',
    elevated: 'shadow-lg',
    outlined: 'border-2',
    flat: 'shadow-none border-0'
  };
  
  const sizes = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8'
  };
  
  const hoverClasses = hover ? 'hover:shadow-lg hover:scale-105 cursor-pointer' : '';

  return (
    <div
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        hoverClasses,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Card sub-components
const CardHeader = ({ children, className = '', ...props }) => (
  <div className={cn('flex items-center justify-between mb-4', className)} {...props}>
    {children}
  </div>
);

const CardTitle = ({ children, className = '', ...props }) => (
  <h3 className={cn('text-lg font-semibold text-gray-900 dark:text-white', className)} {...props}>
    {children}
  </h3>
);

const CardDescription = ({ children, className = '', ...props }) => (
  <p className={cn('text-sm text-gray-600 dark:text-gray-400', className)} {...props}>
    {children}
  </p>
);

const CardContent = ({ children, className = '', ...props }) => (
  <div className={cn('', className)} {...props}>
    {children}
  </div>
);

const CardFooter = ({ children, className = '', ...props }) => (
  <div className={cn('flex items-center justify-between pt-4 mt-4 border-t border-gray-200 dark:border-gray-700', className)} {...props}>
    {children}
  </div>
);

// Attach sub-components to Card
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
