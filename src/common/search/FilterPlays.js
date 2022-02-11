
import { Modal } from 'common';
import { useContext, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from './search-context';
import './search.css';

const FilterPlays = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {setFilterQuery, setSearchTerm, filterQuery } = useContext(SearchContext);
  const [showModal, setShowModal] = useState(false);

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
      <Modal
        title="Filter Plays"
        onClose={ () => setShowModal(false) }
        onSubmit={ handleFilter }
        show={ showModal }
        children={
          <div className="filter-plays-modal">
            <div className="filter-plays-modal-row">
              <label>Level</label>
              <select
                className="filter-plays-modal-select"
                onChange={ (event) => setFilterQuery({...filterQuery, level: event.target.value}) }
                value={ filterQuery.level }
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
            <div className="filter-plays-modal-row">
              <label>Tags</label>
              <select
                className="filter-plays-modal-select"
                onChange={ (event) => setFilterQuery({...filterQuery, tags: [event.target.value]}) }
                value={ filterQuery.tags[0] }
              >
                <option value="">None</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="javascript">JavaScript</option>
                <option value="react">React</option>
              </select>
            </div>
          </div>}
        />
    
      <button onClick={ () => setShowModal(true) }>F</button>
    </div>
  );
};

export default FilterPlays;