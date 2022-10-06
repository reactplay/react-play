import { Modal } from "common";
import { useContext, useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "./search-context";
import "./search.css";

import { RiFilterFill } from "react-icons/ri";
import useFetchFilterData from "./hooks/usePlayFilter";
import MultipleSelectCheckmarks from "common/components/MultiSelect";

const FilterPlaysModalBody = ({ filterQuery, setFilterQuery }) => {
  const [loading, error, data] = useFetchFilterData();
  const { tags, levels, creators } = data;

  const languages = ["js", "ts"];

  if (error) {
    return <p>{error?.message ?? "Something Went Wrong"}</p>;
  }

  const defaultOption = {
    value: " ",
    label: "All",
  };

  creators?.sort((a, b) => (a.user.displayName < b.user.displayName ? -1 : 1));
  const creatorOptions = [
    defaultOption,
    ...(creators?.map((creator) => ({
      value: creator.user.id,
      label: creator.user.avatarUrl ? (
        <div className="flex gap-x-2 items-center">
          <img
            alt={creator.user.displayName}
            className="rounded"
            src={creator.user.avatarUrl}
            width="32px"
          />
          {creator.user.displayName}
        </div>
      ) : (
        creator.user.displayName
      ),
    })) || []),
  ];

  const levelOptions = [
    ...(levels?.map((level) => ({
      label: level.level.name,
      value: level.level.id,
    })) || []),
  ];
  levelOptions.sort((a, b) => (a.label < b.label ? -1 : 1));

  const tagOptions = [
    ...(tags?.map((tag) => ({
      label: tag.tag,
      value: tag.id,
    })) || []),
  ];
  tagOptions.sort((a, b) => (a.label < b.label ? -1 : 1));

  const languageOptions = [
    ...languages?.map((language) => ({
      label: language === "ts" ? "TypeScript" : "JavaScript",
      value: language,
    })),
  ];
  languageOptions.sort((a, b) => (a.label < b.label ? -1 : 1));

  return (
    <>
      <div className="form-group">{loading && "Loading Data"}</div>
      <div className="form-group">
        <MultipleSelectCheckmarks
          filterQuery={filterQuery}
          setFilterQuery={setFilterQuery}
          options={[defaultOption, ...levelOptions]}
          filterKey="level_id"
          label="Level"
        />
      </div>
      <div className="form-group">
        <MultipleSelectCheckmarks
          filterQuery={filterQuery}
          setFilterQuery={setFilterQuery}
          options={[defaultOption, ...tagOptions]}
          filterKey="tags"
          label="Tags"
        />
      </div>
      <div className="form-group">
        <MultipleSelectCheckmarks
          filterQuery={filterQuery}
          setFilterQuery={setFilterQuery}
          options={creatorOptions}
          filterKey="owner_user_id"
          label="Creator"
        />
      </div>
      <div className="form-group">
        <MultipleSelectCheckmarks
          filterQuery={filterQuery}
          setFilterQuery={setFilterQuery}
          options={[defaultOption, ...languageOptions]}
          filterKey="language"
          label="Language"
        />
      </div>
    </>
  );
};

const getAppliedFilter = (filterObject) => {
  return (
    filterObject.level_id.length +
    filterObject.owner_user_id.length +
    filterObject.tags.length +
    filterObject.language.length
  );
};

const filterObject = {
  level_id: [],
  tags: [],
  owner_user_id: [],
  language: [],
};

const FilterPlays = ({ reset }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setFilterQuery } = useContext(SearchContext);
  const [showModal, setShowModal] = useState(false);
  const [modifiedFilterQuery, setModifiedFilterQuery] = useState({
    ...filterObject,
  });
  const [noOfAppliedFilter, setnoOfAppliedFilter] = useState(0);

  const resetFilter = useCallback(() => {
    const filterObj = { ...filterObject };
    setModifiedFilterQuery(filterObj);
    setFilterQuery(filterObj);
    setnoOfAppliedFilter(0);
  }, [setFilterQuery]);

  useEffect(() => {
    if (location.pathname !== "/plays") {
      resetFilter();
    }
    if (reset.filter) {
      resetFilter();
    }
  }, [location.pathname, resetFilter, reset.filter]);

  const handleFilter = (event) => {
    event.preventDefault();
    setFilterQuery(modifiedFilterQuery);
    setnoOfAppliedFilter(getAppliedFilter(modifiedFilterQuery));
    navigate("/plays", {
      replace: true,
      state: { search: true, filter: false },
    });
    showModal && setShowModal(false);
  };

  return (
    <div className="search-filter">
      <Modal
        title="Filter Plays By"
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
        {noOfAppliedFilter === 0 ? null : (
          <div className="badge">{noOfAppliedFilter}</div>
        )}

        <RiFilterFill
          className="icon"
          size="28px"
          color="var(--color-neutral-30)"
        />
      </button>
    </div>
  );
};

export default FilterPlays;
