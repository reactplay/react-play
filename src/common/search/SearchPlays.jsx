import { useCallback, useEffect, useState } from 'react';
import { useSearchContext } from './search-context';
import './search.css';

const SearchPlays = ({ reset, query, onChange }) => {
  const { setSearchTerm } = useSearchContext();
  const [searchText, setSearchText] = useState('');

  const resetSearchField = useCallback(() => {
    setSearchTerm('');
    setSearchText('');
  }, [setSearchTerm]);

  useEffect(() => {
    if (location.pathname !== '/plays') {
      resetSearchField();
    }
    if (reset.search) {
      resetSearchField();
    }
    const text = query && query.text ? query.text.split('+').join(' ') : '';

    setSearchText(decodeURIComponent(text));
  }, [query]);

  const handleSearch = (event) => {
    event.preventDefault();
    if (event.key === 'Enter') {
      query = query || {};
      query.text = event.target.value;
      if (onChange) {
        onChange(query);
      }
    }
  };

  return (
    <input
      className="search-input-text"
      data-testid="plays-search-box-input-field"
      placeholder="Search for play(s)..."
      type="text"
      value={searchText}
      // ref={inputRef}
      onChange={(e) => setSearchText(e.target.value)}
      onKeyUp={handleSearch}
    />
  );
};

export default SearchPlays;
