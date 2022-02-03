
import { useContext } from 'react';
import { SearchContext } from './search-context';
import './search.css';

const SearchPlays = () => {
  
  const {searchTerm, setSearchTerm} = useContext(SearchContext);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <input
      className="search-text"
      type="text"
      placeholder="Search for a play..."
      onChange={handleChange}
    />
  );
};

export default SearchPlays;
