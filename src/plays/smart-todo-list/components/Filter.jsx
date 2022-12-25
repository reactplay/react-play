import React from 'react';
import { useGlobalContext } from '../context/appContext';

const Filter = () => {
  const { setFilteredText } = useGlobalContext();

  const onFilterChange = (e) => {
    setFilteredText(e.target.value);
  };

  return (
    <div className="wa_filter">
      <label htmlFor="wa_filter">Filter: </label>
      <select id="wa_filter" name="filter" onChange={onFilterChange}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncomplete</option>
      </select>
    </div>
  );
};

export default Filter;
