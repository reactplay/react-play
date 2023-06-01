import PlayHeader from 'common/playlists/PlayHeader';
import { useState } from 'react';
import CustomDropdown from './components/CustomDropdown';
import data from './data/countries.json';
import './styles.css';

function transformDataToAppropriateFormat() {
  return data.map((country) => {
    return {
      ...country,
      value: country.name.toLowerCase(),
      label: country.name
    };
  });
}

// WARNING: Do not change the entry componenet name
function CustomDropdownComponent(props) {
  const [isMulti, setIsMulti] = useState(false);
  const [isSearchable, setIsSearchable] = useState(false);
  const [value, setValue] = useState(null);

  return (
    <div className="play-details">
      <PlayHeader play={props} />
      <div className="play-details-body custom-dd-component">
        <div className="container">
          <div className="feature-area">
            <label htmlFor="searchable">
              isSearchable
              <input
                checked={isSearchable}
                id="searchable"
                name="searchable"
                type="checkbox"
                onChange={() => setIsSearchable(!isSearchable)}
              />
            </label>
            <label htmlFor="multi">
              isMulti
              <input
                checked={isMulti}
                id="multi"
                name="multi"
                type="checkbox"
                onChange={() => setIsMulti(!isMulti)}
              />
            </label>
          </div>
          <CustomDropdown
            isMulti={isMulti}
            isSearchable={isSearchable}
            options={transformDataToAppropriateFormat()}
            placeholder="Select Country.."
            onChange={(v) => {
              setValue(v);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CustomDropdownComponent;
