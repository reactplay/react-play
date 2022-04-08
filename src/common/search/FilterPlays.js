import { Modal } from "common";
import { getAllCreators, getAllLevels, getAllTags } from "meta/play-meta";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "./search-context";
import "./search.css";

import { RiFilterFill } from "react-icons/ri";

const FilterPlaysModalBody = ({filterQuery, setFilterQuery}) => {
  const tags = getAllTags();
  const labels = getAllLevels();
  const creators = getAllCreators();

  return (
    <>
      <div className="form-group">
        <label>Level</label>
        <select
          className="form-control"
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
      <div className="form-group">
        <label>Tags</label>
        <select
          className="form-control"
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
      <div className="form-group">
        <label>Creator</label>
        <select
          className="form-control"
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
    </>
  );
};

const FilterPlays = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setFilterQuery, filterQuery } =
    useContext(SearchContext);
  const [showModal, setShowModal] = useState(false);
  const [modifiedFilterQuery, setModifiedFilterQuery] = useState({
    tags: [],
    labels: [],
    creators: [],
  });

  const handleFilter = (event) => {
    event.preventDefault();
    console.log('filterQuery', filterQuery);
    console.log('modifiedFilterQuery', modifiedFilterQuery);
    setFilterQuery(modifiedFilterQuery);
    if (location.pathname !== "/plays") {
      navigate("/plays", { replace: true });
    }
    showModal && setShowModal(false);
  };

  return (
    <div className="search-filter">
        <Modal
          title="Filter Plays"
          onClose={() => setShowModal(false)}
          onSubmit={handleFilter}
          show={showModal}
          cname="filter"
          children={
            <FilterPlaysModalBody
              filterQuery={modifiedFilterQuery}
              setFilterQuery={setModifiedFilterQuery}
            />
          }
        />

        <button onClick={() => setShowModal(true)} className="btn-filter" title="Filter Plays">
          {/*<div className="badge">8</div>*/}
          <RiFilterFill className="icon" size="28px" color="var(--color-neutral-30" />
        </button>
    </div>
  );
};

export default FilterPlays;
