
import { useContext } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from './search-context';
import './search.css';

const FilterPlays = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {setFilterQuery, setSearchTerm} = useContext(SearchContext);

  const handleFilter = (event) => {
    event.preventDefault();
    setSearchTerm('');
    setFilterQuery({level: '', tags: [], creator: 'green-roots'});
    if(location.pathname !== '/plays') {
      navigate('/plays', { replace: true});
    }
  }


  return (
    <div className="filter-plays">
      <button onClick={ handleFilter }>F</button>
    </div>
  );
};

export default FilterPlays;