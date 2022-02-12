import { Modal } from "common";
import { getAllCreators, getAllLevels, getAllTags } from "meta/play-meta";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "./search-context";
import "./search.css";

const FilterPlaysModalBody = ({ filterQuery, setFilterQuery }) => {
  const tags = getAllTags();
  const labels = getAllLevels();
  const creators = getAllCreators();

  return (
    <div className="filter-plays-modal">
      <div className="filter-plays-modal-row">
        <label>Level</label>
        <select
          className="filter-plays-modal-select"
          onChange={(event) =>
            setFilterQuery({ ...filterQuery, level: event.target.value })
          }
          value={filterQuery.level}
        >
          <option value="">All</option>
          {labels.map((label) => (
            <option key={label} value={label}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-plays-modal-row">
        <label>Tags</label>
        <select
          className="filter-plays-modal-select"
          onChange={(event) =>
            setFilterQuery({ ...filterQuery, tags: [event.target.value] })
          }
          value={filterQuery.tags[0]}
        >
          <option value="">All</option> 
         {tags.map(tag => (
           <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-plays-modal-row">
        <label>Creator</label>
        <select
          className="filter-plays-modal-select"
          onChange={(event) =>
            setFilterQuery({ ...filterQuery, creator: event.target.value })
          }
          value={filterQuery.creator}
        >
          <option value="">All</option>
          {creators.map((creator) => (
            <option key={creator} value={creator}>
              {creator}
            </option>
          ))}
        </select>
      </div>      
    </div>
  );
};

const FilterPlays = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setFilterQuery, setSearchTerm, filterQuery } =
    useContext(SearchContext);
  const [showModal, setShowModal] = useState(false);

  const handleFilter = (event) => {
    event.preventDefault();
    setSearchTerm("");
    console.log(filterQuery);
    setFilterQuery(filterQuery);
    if (location.pathname !== "/plays") {
      navigate("/plays", { replace: true });
    }
  };

  return (
    <div className="filter-plays">
      <Modal
        title="Filter Plays"
        onClose={() => setShowModal(false)}
        onSubmit={handleFilter}
        show={showModal}
        cname="filter-plays"
        children={
          <FilterPlaysModalBody
            filterQuery={filterQuery}
            setFilterQuery={setFilterQuery}
          />
        }
      />

      <button onClick={() => setShowModal(true)}>F</button>
    </div>
  );
};

export default FilterPlays;
