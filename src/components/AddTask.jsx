import React from 'react';
import { Button } from './ui';
import { PlusIcon } from '@heroicons/react/24/outline';

const AddTask = ({ onOpenModal }) => {
  return (
    <Button
      onClick={onOpenModal}
      variant="primary"
      size="md"
      icon={<PlusIcon className="w-4 h-4" />}
    >
      Add Task
    </Button>
  );
};

export default AddTask;
