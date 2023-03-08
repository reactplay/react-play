import { useState, useEffect } from 'react';
import FilterPlays from './FilterPlays';
import SearchPlays from './SearchPlays';
import { useLocation, useNavigate } from 'react-router-dom';
import { ParseQuery } from './search-helper';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

export const SearchBox = ({ reset }) => {
  const [query, setQuery] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const p_query = ParseQuery(location.search);
    setQuery(p_query);
  }, [location.pathname, location.search]);

  const onChange = (query) => {
    setQuery(query);
    const query_str = new URLSearchParams(query).toString();
    navigate(`/plays?${query_str}`);
  };

  const onClearFilter = () => {
    setQuery(undefined);
    navigate(`/plays`);
  };

  return (
    <div className="filter">
      <div
        className="flex flex-1 search-input items-center filter-area px-4"
        data-testid="plays-search-box-container"
      >
        <BiSearch className="mr-2" data-testid="plays-search-box-icon" size="24px" />
        <SearchPlays query={query} reset={reset} onChange={(q) => onChange(q)} />
        {query && Object.keys(query).length > 0 ? (
          <button
            className="btn-filter"
            title="Clear Filter"
            onClick={() => {
              onClearFilter();
            }}
          >
            <AiOutlineClose data-testid="plays-search-box-icon" size="24px" />
          </button>
        ) : null}
        <FilterPlays query={query} reset={reset} onChange={(q) => onChange(q)} />
      </div>
    </div>
  );
};
