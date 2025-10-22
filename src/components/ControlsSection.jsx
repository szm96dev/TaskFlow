import React from 'react';
import AddTask from './AddTask.jsx';
import SearchBar from './SearchBar.jsx';
import FilterButtons from './FilterDropdown.jsx';
import SortDropdown from './SortDropdown.jsx';

const ControlsSection = ({ 
  searchQuery, 
  setSearchQuery, 
  filter, 
  setFilter, 
  sortOrder, 
  setSortOrder, 
  onOpenModal 
}) => {
  return (
    <div className="space-y-3 sm:space-y-4 lg:space-y-5">
      {/* Add Task */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 lg:gap-4">
        <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white text-center sm:text-left">Add Task</h2>
        <div className="flex justify-center sm:justify-end">
          <AddTask onOpenModal={onOpenModal} />
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col lg:flex-row gap-2 sm:gap-3 lg:gap-4">
        <div className="flex-1 lg:flex-[2]">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:flex-[1]">
          <div className="flex-1">
            <FilterButtons filter={filter} setFilter={setFilter} />
          </div>
          <div className="flex-1">
            <SortDropdown sortOrder={sortOrder} setSortOrder={setSortOrder} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlsSection;
