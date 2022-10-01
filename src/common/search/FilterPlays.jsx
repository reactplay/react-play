import { Modal } from "common";
import { useContext, useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "./search-context";
import "./search.css";

import { RiFilterFill } from "react-icons/ri";
import useFetchFilterData from "./hooks/usePlayFilter";
import { FormControl, MenuItem, Select } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    menuPaper: {
        maxHeight: "250px !important",
    },
});

const FilterPlaysModalBody = ({ filterQuery, setFilterQuery, onClearAppliedFilters }) => {
    const [loading, error, data] = useFetchFilterData();
    const { tags, levels, creators } = data;

    const classes = useStyles();

    const languages = ["js", "ts"];

    if (error) {
        return <p>{error?.message ?? "Something Went Wrong"}</p>;
    }

    const defaultOption = {
        value: " ",
        label: "All",
    };

  const creatorOptions = [
    defaultOption,
    ...(creators?.map((creator) => ({
      value: creator.user.id,
      label: creator.user.avatarUrl ? (
        <div className='flex gap-x-2 items-center'>
          <img
            alt={creator.user.displayName}
            className='rounded'
            src={creator.user.avatarUrl}
            width='32px'
          />
          {creator.user.displayName}
        </div>
      ) : (
        creator.user.displayName
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

  const renderCreator = (value) => {
    const selectedCreator = creatorOptions.find((option) => option.value === value);
    return selectedCreator ? selectedCreator.label : "All";
  };

  return (
    <>
      <div className='form-group'>
        {loading && "Loading Data"}
        {/* Clear All filters button */}
        <div className="modal-clear-filter">
          <span onClick={ onClearAppliedFilters } 
            className="clear-all-filter-btn">Clear All</span>
        </div>
        <label>Level</label>
        <FormControl fullWidth>
          <Select
            value={filterQuery.level_id || " "}
            onChange={(event) => {
              const { value } = event.target;
              setFilterQuery({
                ...filterQuery,
                level_id: defaultOption.value === value ? "" : value,
              });
            }}
            MenuProps={{ classes: { paper: classes.menuPaper } }}
          >
            {levelOptions.map((option) => (
              <MenuItem value={option.value} key={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className='form-group'>
        <label>Tags</label>
        <FormControl fullWidth>
          <Select
            value={filterQuery.tags[0] || " "}
            onChange={(event) => {
              const { value } = event.target;
              setFilterQuery({
                ...filterQuery,
                tags: value !== defaultOption.value ? [value] : [],
              });
            }}
            MenuProps={{ classes: { paper: classes.menuPaper } }}
          >
            {tagOptions.map((option) => (
              <MenuItem value={option.value} key={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className='form-group'>
        <label>Creator</label>
        <FormControl fullWidth>
          <Select
            value={filterQuery.owner_user_id || " "}
            onChange={(event) => {
              const { value } = event.target;
              setFilterQuery({
                ...filterQuery,
                owner_user_id: defaultOption.value === value ? "" : value,
              });
            }}
            renderValue={renderCreator}
            MenuProps={{ classes: { paper: classes.menuPaper } }}
          >
            {creatorOptions.map((option) => (
              <MenuItem value={option.value} key={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className='form-group'>
        <label>Language</label>
        <FormControl fullWidth>
          <Select
            value={filterQuery.language || " "}
            onChange={(event) => {
              const { value } = event.target;
              setFilterQuery({
                ...filterQuery,
                language: defaultOption.value === value ? "" : value,
              });
            }}
            MenuProps={{ classes: { paper: classes.menuPaper } }}
          >
            {languageOptions.map((option) => (
              <MenuItem value={option.value} key={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </>
  );
};

const getAppliedFilter = (filterObject) => {
  //for single filter to check whether filter has been applied
  const noOfLevelsApplied =
    filterObject?.level_id !== undefined && filterObject.level_id.trim() !== "" ? 1 : 0;
  const noOfcreatorsApplied =
    filterObject.owner_user_id !== undefined && filterObject.owner_user_id.trim() !== "" ? 1 : 0;
  const noOfLanguageApplied =
    filterObject.language !== undefined && filterObject.language.trim() !== "" ? 1 : 0;
  const noOfTagsApplied = filterObject?.tags?.length ? filterObject.tags.length : 0;
  let totalTags = noOfLevelsApplied + noOfcreatorsApplied + noOfLanguageApplied + noOfTagsApplied;

  return totalTags;
};

const filterObject = {
  level_id: "",
  tags: [],
  owner_user_id: "",
  language: "",
};

const FilterPlays = ({ reset }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { filterQuery, setFilterQuery } = useContext(SearchContext);
  const [showModal, setShowModal] = useState(false);
  const [modifiedFilterQuery, setModifiedFilterQuery] = useState({ ...filterObject });
  const [noOfAppliedFilter, setnoOfAppliedFilter] = useState(0);

  const [isFilterApplied, setIsFilterApplied] = useState(false);

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
    // if Apply button on Filter Modal is clicked then set true
    setIsFilterApplied(true);

    setFilterQuery(modifiedFilterQuery);
    setnoOfAppliedFilter(getAppliedFilter(modifiedFilterQuery));
    navigate("/plays", { replace: true, state: { search: true, filter: false } });
    showModal && setShowModal(false);
  };

  const filterModalCloseBtnHandler = () => {
    setShowModal(false);
    const {level_id, tags, owner_user_id, language} = modifiedFilterQuery;
    const isFilterEmpty= level_id !== "" || tags.length !== 0 || owner_user_id !== "" || language !== "";
    // if user closes modal instead of clicking on Apply after clear All filters
    if(!isFilterApplied && !isFilterEmpty) {
      setModifiedFilterQuery({...filterQuery});
      setnoOfAppliedFilter(getAppliedFilter(filterQuery));
    }
  }

  return (
    <div className='search-filter'>
      <Modal
        title='Filter Plays By'
        onClose={filterModalCloseBtnHandler}
        onSubmit={handleFilter}
        show={showModal}
        cname='filter'
        children={
          <FilterPlaysModalBody
            filterQuery={modifiedFilterQuery}
            setFilterQuery={setModifiedFilterQuery}
            onClearAppliedFilters={() => {
              setModifiedFilterQuery({...filterObject});
              setnoOfAppliedFilter(0);
            }}
          />
        }
      />

      <button onClick={() => {
        setShowModal(true);
        setIsFilterApplied(false);
        }} 
        className='btn-filter' title='Filter Plays'>
        {noOfAppliedFilter === 0 ? null : <div className='badge'>{noOfAppliedFilter}</div>}

        <RiFilterFill className='icon' size='28px' color='var(--color-neutral-30)' />
      </button>
    </div>
  );
};

export default FilterPlays;
