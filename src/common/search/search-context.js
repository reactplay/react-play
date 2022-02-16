
import React from 'react';

export const SearchContext = React.createContext({
  searchTerm: '',
  filterQuery: {
    level: '',
    tags: [],
    creator: ''
  }, 
  setSearchTerm: () => {},
  setFilterQuery: () => {}
});