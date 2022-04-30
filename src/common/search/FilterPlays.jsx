import { Modal } from "common";
import { getAllCreators, getAllLevels, getAllTags } from "meta/play-meta-util";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "./search-context";
import "./search.css";

import { RiFilterFill } from "react-icons/ri";
import useBackListener from "common/routing/hooks/useBackListener";

const FilterPlaysModalBody = ({ filterQuery, setFilterQuery }) => {
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
            setFilterQuery({ ...filterQuery, tags: event.target.value !== "" ? [event.target.value] : [] })
          }
          value={filterQuery.tags[0]}
        >
          <option value="">All</option>
          {tags.map((tag) => (
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

const getAppliedFilter = (filterObject) => {
  //for single filter to check whether filter has been applied
  const noOfLevelsApplied =
    filterObject?.level !== undefined && filterObject.level.trim() !== ""
      ? 1
      : 0;
  const noOfcreatorsApplied =
    filterObject.creator !== undefined && filterObject.creator.trim() !== ""
      ? 1
      : 0;
  let totalTags = noOfLevelsApplied +
    noOfcreatorsApplied;

  //if the appiled filter is an array form. Useful for handling multi filter

  if (filterObject?.tags || filterObject?.labels || filterObject?.creators) {
    totalTags +=
      filterObject?.tags?.length ? filterObject.tags.length : 0 +
        filterObject?.labels?.length ? filterObject.labels.length : 0 +
          filterObject?.creators?.length ? filterObject.creators.length : 0;
  }

  return totalTags;
};

const FilterPlays = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setFilterQuery, filterQuery } = useContext(SearchContext);
  const [showModal, setShowModal] = useState(false);
  const [modifiedFilterQuery, setModifiedFilterQuery] = useState({
    tags: [],
    labels: [],
    creators: [],
  });
  const [noOfAppliedFilter, setnoOfAppliedFilter] = useState(0);

  useBackListener(({ action }) => {
    if (action === "POP") {
      console.log("POP");
      setModifiedFilterQuery({
        level: "",
        tags: [],
        creator: "",
        labels: [],
        creators: [],
      });
      setFilterQuery({
        level: "",
        tags: [],
        creator: "",
        labels: [],
        creators: [],
      });
      setnoOfAppliedFilter(0);
    }
    if (action === "PUSH") {
      console.log("PUSH");
      setModifiedFilterQuery({
        level: "",
        tags: [],
        creator: "",
      });
      setFilterQuery({
        level: "",
        tags: [],
        creator: "",
      });
    }
    setnoOfAppliedFilter(0);
  });
  const handleFilter = (event) => {
    event.preventDefault();
    console.log("filterQuery", filterQuery);
    console.log("modifiedFilterQuery", modifiedFilterQuery);
    setFilterQuery(modifiedFilterQuery);
    setnoOfAppliedFilter(getAppliedFilter(modifiedFilterQuery));
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

      <button
        onClick={() => setShowModal(true)}
        className="btn-filter"
        title="Filter Plays"
      >
        <div className="badge">{noOfAppliedFilter}</div>
        <RiFilterFill
          className="icon"
          size="28px"
          color="var(--color-neutral-30"
        />
      </button>
    </div>
  );
};

export default FilterPlays;
