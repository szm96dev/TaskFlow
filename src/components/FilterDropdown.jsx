import React from 'react';
import { Select } from './ui';
import { FILTER_OPTIONS } from '../constants';

const FilterButtons = ({ filter, setFilter }) => {
  return (
    <Select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      variant="default"
      size="md"
      options={FILTER_OPTIONS}
      placeholder="Filter tasks..."
    />
  );
};

export default FilterButtons;
