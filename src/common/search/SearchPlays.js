
import { useContext } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from './search-context';
import './search.css';


const SearchPlays = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {setSearchTerm, setFilterQuery} = useContext(SearchContext);
  
  const handleSearch = (event) => {
    event.preventDefault();
    if(event.key === 'Enter') {
      setSearchTerm(event.target.value);
      setFilterQuery({
        level: '',
        tags: [],
        creator: ''
      });
      if(location.pathname !== '/plays') {
        navigate('/plays', { replace: true});
      }
    }
  }
 
  return (
    <input
      className="search-text"
      type="text"
      placeholder="Search for a play..."
      onKeyUp={ handleSearch }
    />
  );
};

export default SearchPlays;
