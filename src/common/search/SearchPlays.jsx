import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSearchContext } from './search-context';
import './search.css';
import { BiSearch } from 'react-icons/bi';

const SearchPlays = ({ reset, query, onChange }) => {
  const location = useLocation();
  const navigate = useNavigate();
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
    setSearchText(query.text);
  }, [location.pathname, reset.search, resetSearchField]);

  const handleSearch = (event) => {
    event.preventDefault();
    if (event.key === 'Enter') {
      query = query ||  {}
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
