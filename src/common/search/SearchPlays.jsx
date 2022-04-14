
import { useContext } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from './search-context';
import './search.css';
import { BiSearch } from "react-icons/bi";

const SearchPlays = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {setSearchTerm} = useContext(SearchContext);
  
  const handleSearch = (event) => {
    event.preventDefault();
    if(event.key === 'Enter') {
      setSearchTerm(event.target.value);
      if(location.pathname !== '/plays') {
        navigate('/plays', { replace: true});
      }
    }
  }
 
  return (
    <>
    <div className="search-input">
      <BiSearch className="search-input-icon" size="24px" />
      <input
        className="search-input-text"
        type="text"
        placeholder="Search for a play..."
        onKeyUp={ handleSearch }
      />
    </div>
    </>
  );
};

export default SearchPlays;
