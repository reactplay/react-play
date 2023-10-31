import { useCallback, useEffect, useState } from 'react';
import { useSearchContext } from './search-context';
import './search.css';
import { debounce } from 'lodash';

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
    const text = query && query?.text ? query.text.split('+').join(' ') : '';

    setSearchText(decodeURIComponent(text));
  }, [query]);

  // handleSearch function that passes the event handler into lodash's debounce function to add a delay of 500s after change in searchbar value and display search results.
  const handleSearch = debounce((event) => {
    event.preventDefault();
    const { value } = event.target;
    if (value) {
      query.text = value;
    } else {
      delete query.text;
    }
    onChange(query);
  }, 500);

  const handleChange = (event) => {
    handleSearch(event);
    setSearchText(event.target.value);
  };

  return (
    <input
      className="search-input-text"
      data-testid="plays-search-box-input-field"
      placeholder="Search for play(s)..."
      type="text"
      value={searchText}
      // ref={inputRef}
      onChange={handleChange}
    />
  );
};

export default SearchPlays;
