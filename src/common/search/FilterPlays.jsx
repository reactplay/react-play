import { Modal } from "common";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "./search-context";
import "./search.css";

import { RiFilterFill } from "react-icons/ri";
import useBackListener from "common/routing/hooks/useBackListener";
import useFetchFilterData from "./hooks/usePlayFilter";

const FilterPlaysModalBody = ({ filterQuery, setFilterQuery }) => {
  const [loading, error, data] = useFetchFilterData();
  const {tags, levels, creators} = data;

  const languages = ["js", "ts"];

  return (
    <>
      <div className='form-group'>
        <label>Level</label>
        <select
          className='form-control'
          onChange={(event) =>
            setFilterQuery({ ...filterQuery, level: event.target.value })
          }
          value={filterQuery.level}
        >
          <option value=''>All</option>
          {levels?.map((level) => (
            <option key={level.level.name} value={level.level.id}>
              {level.level.name}
            </option>
          ))}
        </select>
      </div>
      <div className='form-group'>
        <label>Tags</label>
        <select
          className='form-control'
          onChange={(event) =>
            setFilterQuery({
              ...filterQuery,
              tags: event.target.value !== "" ? [event.target.value] : [],
            })
          }
          value={filterQuery.tags[0]}
        >
          <option value=''>All</option>
          {tags?.map((tag) => (
            <option key={tag.tag} value={tag.id}>
              {tag.tag}
            </option>
          ))}
        </select>
      </div>
      <div className='form-group'>
        <label>Creator</label>
        <select
          className='form-control'
          onChange={(event) =>
            setFilterQuery({ ...filterQuery, creator: event.target.value })
          }
          value={filterQuery.creator}
        >
          <option value=''>All</option>
          {creators?.map((creator) => (
            <option key={creator.user.displayName} value={creator.user.id}>
              {creator.user.displayName}
            </option>
          ))}
        </select>
      </div>
      <div className='form-group'>
        <label>Language</label>
        <select
          className='form-control'
          onChange={(event) =>
            setFilterQuery({ ...filterQuery, language: event.target.value })
          }
          value={filterQuery.language}
        >
          <option value=''>All</option>
          {languages.map((language) => (
            <option key={language} value={language}>
              {language === "ts" ? "TypeScript" : "JavaScript"}
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
  const noOfLanguageApplied =
    filterObject.language !== undefined && filterObject.language.trim() !== ""
      ? 1
      : 0;
  const noOfTagsApplied = filterObject?.tags?.length
    ? filterObject.tags.length
    : 0;
  let totalTags =
    noOfLevelsApplied +
    noOfcreatorsApplied +
    noOfLanguageApplied +
    noOfTagsApplied;

  return totalTags;
};

const FilterPlays = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setFilterQuery, filterQuery } = useContext(SearchContext);
  const [showModal, setShowModal] = useState(false);
  const [modifiedFilterQuery, setModifiedFilterQuery] = useState({
    level: "",
    tags: [],
    creator: "",
    language: "",
  });
  const [noOfAppliedFilter, setnoOfAppliedFilter] = useState(0);

  useBackListener(({ action }) => {
    if (action === "POP") {
      console.log("POP");
      setModifiedFilterQuery({
        level: "",
        tags: [],
        creator: "",
        language: "",
      });
      setFilterQuery({
        level: "",
        tags: [],
        creator: "",
        language: "",
      });
      setnoOfAppliedFilter(0);
    }
    if (action === "PUSH") {
      console.log("PUSH");
      setModifiedFilterQuery({
        level: "",
        tags: [],
        creator: "",
        language: "",
      });
      setFilterQuery({
        level: "",
        tags: [],
        creator: "",
        language: "",
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
    <div className='search-filter'>
      <Modal
        title='Filter Plays By'
        onClose={() => setShowModal(false)}
        onSubmit={handleFilter}
        show={showModal}
        cname='filter'
        children={
          <FilterPlaysModalBody
            filterQuery={modifiedFilterQuery}
            setFilterQuery={setModifiedFilterQuery}
          />
        }
      />

      <button
        onClick={() => setShowModal(true)}
        className='btn-filter'
        title='Filter Plays'
      >
        {noOfAppliedFilter === 0 ? null : (
          <div className='badge'>{noOfAppliedFilter}</div>
        )}

        <RiFilterFill
          className='icon'
          size='28px'
          color='var(--color-neutral-30'
        />
      </button>
    </div>
  );
};

export default FilterPlays;
