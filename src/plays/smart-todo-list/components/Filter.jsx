import React from 'react';
import { useGlobalContext } from '../context/appContext';

const Filter = () => {
  const { setFilteredText } = useGlobalContext();

  const onFilterChange = (e) => {
    setFilteredText(e.target.value);
  };

  return (
    <div className="wa__filter-area">
      <label htmlFor="wa__filter">Filter: </label>
      <select className="wa__filter" id="wa__filter" name="wa__filter" onChange={onFilterChange}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncomplete</option>
      </select>
    </div>
  );
};

export default Filter;
