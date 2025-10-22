import { useState, useMemo } from 'react';
import { DEFAULT_VALUES } from '../constants';
import { searchTasks, filterTasks, sortTasks } from '../utils/taskUtils';

export const useTaskFilters = (tasks) => {
  const [searchQuery, setSearchQuery] = useState(DEFAULT_VALUES.SEARCH_QUERY);
  const [filter, setFilter] = useState(DEFAULT_VALUES.FILTER);
  const [sortOrder, setSortOrder] = useState(DEFAULT_VALUES.SORT_ORDER);

  // Filter and sort tasks using utility functions
  const sortedTasks = useMemo(() => {
    const searchedTasks = searchTasks(tasks, searchQuery);
    const filteredTasks = filterTasks(searchedTasks, filter);
    return sortTasks(filteredTasks, sortOrder);
  }, [tasks, searchQuery, filter, sortOrder]);

  return {
    searchQuery,
    setSearchQuery,
    filter,
    setFilter,
    sortOrder,
    setSortOrder,
    sortedTasks
  };
};
