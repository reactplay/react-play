import { Modal } from "common";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "./search-context";
import "./search.css";

import { RiFilterFill } from "react-icons/ri";
import Select from "react-select";
import useBackListener from "common/routing/hooks/useBackListener";
import useFetchFilterData from "./hooks/usePlayFilter";

const FilterPlaysModalBody = ({ filterQuery, setFilterQuery }) => {
  const [loading, error, data] = useFetchFilterData();
  const { tags, levels, creators } = data;

  const languages = ["js", "ts"];

  if (error) {
    return <p>{error?.message ?? "Something Went Wrong"}</p>;
  }

  const defaultOption = {
    value: "",
    label: "All",
  };

  const creatorOptions = [
    defaultOption,
    ...(creators?.map((creator) => ({
      value: creator.user.id,
      label: (
        <div className="flex gap-x-2 items-center">
          <img className="rounded" src={creator.user.avatarUrl} width="32px" />
          {creator.user.displayName}
        </div>
      ),
    })) || []),
  ];

  const levelOptions = [
    defaultOption,
    ...(levels?.map((level) => ({
      label: level.level.name,
      value: level.level.id,
    })) || []),
  ];

  const tagOptions = [
    defaultOption,
    ...(tags?.map((tag) => ({
      label: tag.tag,
      value: tag.id,
    })) || []),
  ];

  const languageOptions = [
    defaultOption,
    ...languages?.map((language) => ({
      label: language === "ts" ? "TypeScript" : "JavaScript",
      value: language,
    })),
  ];

  return (
    <>
      <div className="form-group">
        {loading && "Loading Data"}
        <label>Level</label>
        <Select
          onChange={(option) =>
            setFilterQuery({ ...filterQuery, level_id: option.value })
          }
          value={levelOptions.find(
            (option) => option.value === filterQuery.level_id
          )}
          options={levelOptions}
        />
      </div>
      <div className="form-group">
        <label>Tags</label>
        <Select
          onChange={(option) =>
            setFilterQuery({
              ...filterQuery,
              tags: option.value !== "" ? [option.value] : [],
            })
          }
          value={
            tagOptions.find((option) => option.value === filterQuery.tags[0]) ??
            defaultOption
          }
          options={tagOptions}
        />
      </div>
      <div className="form-group">
        <label>Creator</label>
        <Select
          onChange={(option) => {
            setFilterQuery({
              ...filterQuery,
              owner_user_id: option.value,
            });
          }}
          value={creatorOptions.find(
            (option) => option.value === filterQuery.owner_user_id
          )}
          options={creatorOptions}
        />
      </div>
      <div className="form-group">
        <label>Language</label>
        <Select
          onChange={(option) =>
            setFilterQuery({ ...filterQuery, language: option.value })
          }
          value={languageOptions.find(
            (option) => option.value === filterQuery.language
          )}
          options={languageOptions}
        />
      </div>
    </>
  );
};

const getAppliedFilter = (filterObject) => {
  //for single filter to check whether filter has been applied
  const noOfLevelsApplied =
    filterObject?.level_id !== undefined && filterObject.level_id.trim() !== ""
      ? 1
      : 0;
  const noOfcreatorsApplied =
    filterObject.owner_user_id !== undefined &&
    filterObject.owner_user_id.trim() !== ""
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
    level_id: "",
    tags: [],
    owner_user_id: "",
    language: "",
  });
  const [noOfAppliedFilter, setnoOfAppliedFilter] = useState(0);

  useBackListener(({ action }) => {
    if (action === "POP") {
      console.log("POP");
      setModifiedFilterQuery({
        level_id: "",
        tags: [],
        owner_user_id: "",
        language: "",
      });
      setFilterQuery({
        level_id: "",
        tags: [],
        owner_user_id: "",
        language: "",
      });
      setnoOfAppliedFilter(0);
    }
    if (action === "PUSH") {
      console.log("PUSH");
      setModifiedFilterQuery({
        level_id: "",
        tags: [],
        owner_user_id: "",
        language: "",
      });
      setFilterQuery({
        level_id: "",
        tags: [],
        owner_user_id: "",
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
