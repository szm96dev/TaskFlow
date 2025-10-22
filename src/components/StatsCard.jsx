import React from 'react';
import { StatCard } from './ui';
import { getTaskStats } from '../utils/taskUtils';
import { 
  ClipboardDocumentListIcon, 
  ClockIcon, 
  CheckCircleIcon 
} from '@heroicons/react/24/outline';

const StatsCard = ({ tasks }) => {
  const { total, active, completed } = getTaskStats(tasks);

  const statsConfig = [
    {
      title: "Total Tasks",
      value: total,
      icon: <ClipboardDocumentListIcon className="w-8 h-8" />,
      variant: "default"
    },
    {
      title: "Active Tasks", 
      value: active,
      icon: <ClockIcon className="w-8 h-8" />,
      variant: "warning"
    },
    {
      title: "Completed Tasks",
      value: completed,
      icon: <CheckCircleIcon className="w-8 h-8" />,
      variant: "success"
    }
  ];

  return (
    <div className="flex flex-col sm:flex-row lg:flex-row gap-2 sm:gap-3 lg:gap-4">
      {statsConfig.map((stat, index) => (
        <div key={index} className="flex-1">
          <StatCard
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            variant={stat.variant}
            size="md"
          />
        </div>
      ))}
    </div>
  );
};

export default StatsCard;
