import React from 'react';
import { Select } from './ui';
import { SORT_OPTIONS } from '../constants';

const SortDropdown = ({ sortOrder, setSortOrder }) => {
  return (
    <Select
      value={sortOrder}
      onChange={(e) => setSortOrder(e.target.value)}
      variant="default"
      size="md"
      options={SORT_OPTIONS}
      placeholder="Sort tasks..."
    />
  );
};

export default SortDropdown;
