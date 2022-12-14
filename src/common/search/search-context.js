import React, { useContext } from 'react';

const SearchContext = React.createContext({
  searchTerm: '',
  showShareModal: false,
  filterQuery: {
    level_id: [],
    tags: [],
    owner_user_id: [],
    language: []
  }
});

export const SearchContextProvider = ({ value, children }) => {
  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

export const useSearchContext = () => useContext(SearchContext);
