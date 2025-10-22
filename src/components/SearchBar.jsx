import React from 'react';
import { Input } from './ui';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <Input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search tasks..."
      variant="default"
      size="md"
      icon={<MagnifyingGlassIcon className="w-5 h-5" />}
    />
  );
};

export default SearchBar;
