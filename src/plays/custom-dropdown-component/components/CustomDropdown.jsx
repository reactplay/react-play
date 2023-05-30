/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import ArrowIcon from './ArrowIcon';
import CloseIcon from './CloseIcon';
import './CustomDropdown.css';

const CustomDropdown = ({ placeholder, options, isMulti, isSearchable, onChange }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(isMulti ? [] : null);

  const [searchValue, setSearchValue] = useState('');
  const searchRef = useRef();
  const inputRef = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    window.addEventListener('click', handler);

    return () => {
      window.removeEventListener('click', handler);
    };
  }, []);

  useEffect(() => {
    if (isMulti) {
      setSelectedValue([]);
    } else {
      setSelectedValue(null);
    }
  }, [isMulti]);

  useEffect(() => {
    setSearchValue('');
    if (showMenu && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showMenu]);

  // show selected item label or list of selected item label
  const getDisplay = () => {
    if (!selectedValue || selectedValue.length == 0) {
      return placeholder;
    }

    if (isMulti && selectedValue.length) {
      return (
        <div className="dropdown-tags">
          {selectedValue.map((option) => (
            <div className="dropdown-tag-item" key={option.value}>
              {option.label}
              <span className="dropdown-tag-close" onClick={(e) => onTagRemove(e, option)}>
                <CloseIcon />
              </span>
              <button className="btn-accessibility" />
            </div>
          ))}
        </div>
      );
    }

    return selectedValue.label;
  };

  // remove an option from selected value
  const removeOption = (option) => {
    return selectedValue.filter((item) => item.value !== option.value);
  };

  // remove tag when multi select is on
  const onTagRemove = (e, option) => {
    e.stopPropagation();
    const newValue = removeOption(option);

    setSelectedValue(newValue);
    onChange(newValue);
  };

  // show/hide dropdown menu
  const handleInputClick = () => {
    setShowMenu(!showMenu);
  };

  // select an item from dropdown menu
  const onItemSelect = (option) => {
    let newValue;

    if (isMulti) {
      if (selectedValue.findIndex((o) => o.value === option.value) !== -1) {
        newValue = removeOption(option);
      } else {
        newValue = [...selectedValue, option];
      }
    } else {
      newValue = option;
    }

    setSelectedValue(newValue);
    onChange(newValue);
  };

  // see if current option is already selected
  const isSelected = (option) => {
    if (isMulti) {
      return selectedValue.filter((o) => o.value === option.value).length > 0;
    }
    if (!selectedValue) {
      return false;
    }

    return selectedValue.value === option.value;
  };

  // set search input value
  const onSearch = (e) => {
    setSearchValue(e.target.value);
  };

  // get options based on searchValue or all the options
  const getOptions = () => {
    if (!searchValue) {
      return options;
    }

    return options.filter(
      (option) => option.label.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
    );
  };

  return (
    <div className="dropdown-container">
      <div
        className="dropdown-input"
        ref={inputRef}
        role="combobox"
        tabindex="0"
        onClick={handleInputClick}
      >
        <div className="dropdown-selected-value">{getDisplay()}</div>
        <div className="dropdown-tools">
          <div
            className={`dropdown-tool `}
            style={showMenu ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0deg)' }}
          >
            <ArrowIcon />
          </div>
        </div>
        <button className="btn-accessibility" />
      </div>

      {showMenu && (
        <div className="dropdown-menu">
          {isSearchable && (
            <div className="search-box">
              <input ref={searchRef} value={searchValue} onChange={onSearch} />
            </div>
          )}
          <div className="dropdown-menu-list">
            {getOptions().map((option) => (
              <div
                className={`dropdown-item ${isSelected(option) && 'selected'}`}
                key={option.value}
                onClick={() => onItemSelect(option)}
              >
                {option.label}
                <button className="btn-accessibility" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
