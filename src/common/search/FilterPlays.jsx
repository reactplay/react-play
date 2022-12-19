import { Modal } from 'common';
import { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSearchContext } from './search-context';
import './search.css';

import { RiFilterFill } from 'react-icons/ri';
import useFetchFilterData from './hooks/usePlayFilter';
import MultipleSelectCheckmarks from 'common/components/MultiSelect';

const FilterPlaysModalBody = ({ filterQuery, setFilterQuery, onClearAppliedFilters }) => {
  const [loading, error, data] = useFetchFilterData();
  const { tags, levels, creators } = data;

  const languages = ['js', 'ts'];

  if (error) {
    return <p>{error?.message ?? 'Something Went Wrong'}</p>;
  }

  const defaultOption = {
    value: ' ',
    label: 'All'
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
      )
    })) || [])
  ];

  const levelOptions = [
    ...(levels?.map((level) => ({
      label: level.level.name,
      value: level.level.id
    })) || [])
  ];
  levelOptions.sort((a, b) => (a.label < b.label ? -1 : 1));

  const tagOptions = [
    ...(tags?.map((tag) => ({
      label: tag.tag,
      value: tag.id
    })) || [])
  ];
  tagOptions.sort((a, b) => (a.label < b.label ? -1 : 1));

  const languageOptions = [
    ...(languages?.map((language) => ({
      label: language === 'ts' ? 'TypeScript' : 'JavaScript',
      value: language
    })) || [])
  ];
  languageOptions.sort((a, b) => (a.label < b.label ? -1 : 1));

  return (
    <>
      <div className="form-group">
        {loading && 'Loading Data'}
        {/* Clear All filters button */}
        <div className="modal-clear-filter">
          <span className="clear-all-filter-btn" onClick={onClearAppliedFilters}>
            Clear All
          </span>
        </div>
        <MultipleSelectCheckmarks
          filterKey="level_id"
          filterQuery={filterQuery}
          label="Level"
          options={[defaultOption, ...levelOptions]}
          setFilterQuery={setFilterQuery}
        />
      </div>
      <div className="form-group">
        <MultipleSelectCheckmarks
          filterKey="tags"
          filterQuery={filterQuery}
          label="Tags"
          options={[defaultOption, ...tagOptions]}
          setFilterQuery={setFilterQuery}
        />
      </div>
      <div className="form-group">
        <MultipleSelectCheckmarks
          filterKey="owner_user_id"
          filterQuery={filterQuery}
          label="Creator"
          options={creatorOptions}
          setFilterQuery={setFilterQuery}
        />
      </div>
      <div className="form-group">
        <MultipleSelectCheckmarks
          filterKey="language"
          filterQuery={filterQuery}
          label="Language"
          options={[defaultOption, ...languageOptions]}
          setFilterQuery={setFilterQuery}
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
  language: []
};

const FilterPlays = ({ reset }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { filterQuery, setFilterQuery } = useSearchContext();
  const [showModal, setShowModal] = useState(false);
  const [modifiedFilterQuery, setModifiedFilterQuery] = useState({
    ...filterObject
  });
  const [noOfAppliedFilter, setnoOfAppliedFilter] = useState(0);

  const [isFilterApplied, setIsFilterApplied] = useState(false);

  const resetFilter = useCallback(() => {
    const filterObj = { ...filterObject };
    setModifiedFilterQuery(filterObj);
    setFilterQuery(filterObj);
    setnoOfAppliedFilter(0);
  }, [setFilterQuery]);

  useEffect(() => {
    if (location.pathname !== '/plays') {
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
    navigate('/plays', {
      replace: true,
      state: { search: true, filter: false }
    });
    showModal && setShowModal(false);
  };

  const filterModalCloseBtnHandler = () => {
    setShowModal(false);
    const { level_id, tags, owner_user_id, language } = modifiedFilterQuery;
    const isFilterEmpty =
      level_id.length !== 0 ||
      tags.length !== 0 ||
      owner_user_id.length !== 0 ||
      language.length !== 0;
    // if user closes modal instead of clicking on Apply after clear All filters
    if (!isFilterApplied && !isFilterEmpty) {
      setModifiedFilterQuery({ ...filterQuery });
      setnoOfAppliedFilter(getAppliedFilter(filterQuery));
    }
  };

  return (
    <div className="search-filter">
      <Modal
        cname="filter"
        show={showModal}
        title="Filter Plays By"
        onClose={filterModalCloseBtnHandler}
        onSubmit={handleFilter}
      >
        <FilterPlaysModalBody
          filterQuery={modifiedFilterQuery}
          setFilterQuery={setModifiedFilterQuery}
          onClearAppliedFilters={() => {
            setModifiedFilterQuery({ ...filterObject });
            setnoOfAppliedFilter(0);
          }}
        />
      </Modal>

      <button
        className="btn-filter"
        title="Filter Plays"
        onClick={() => {
          setShowModal(true);
          setIsFilterApplied(false);
        }}
      >
        {noOfAppliedFilter === 0 ? null : <div className="badge">{noOfAppliedFilter}</div>}

        <RiFilterFill className="icon" color="var(--color-neutral-30)" size="28px" />
      </button>
    </div>
  );
};

export default FilterPlays;
