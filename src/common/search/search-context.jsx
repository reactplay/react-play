import React, { useContext } from 'react';

const SearchContext = React.createContext({
  query: ''
});

export const SearchContextProvider = ({ value, children }) => {
  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

export const useSearchContext = () => useContext(SearchContext);
