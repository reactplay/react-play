import PlayHeader from 'common/playlists/PlayHeader';

import React, { useState } from 'react';
import './styles.scss';
import MultiSelect from './components/MultiSelect';

function MultiselectComponent(props: any) {
  // Your Code Start below.
  const [defaultOptions, setDefaultOptions] = useState([
    'Monster Hunter',
    'Uncharted',
    'God of War',
    'Last of Us',
    'The Witcher 3',
    'Pokemon'
  ]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(['Monster Hunter']);

  const handleSelect = (options: string[]) => {
    setSelectedOptions(options);
  };

  const addNewOption = (option: string) => {
    setDefaultOptions((prev) => [...prev, option]);
    setSelectedOptions((prev) => [...prev, option]);
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body multi-select-container">
          {/* Your Code Starts Here */}
          <MultiSelect
            addNewOption={addNewOption}
            defaultOptions={defaultOptions}
            label="Select Your Favorite Game:"
            placeholder="Search Games.."
            selectedOptions={selectedOptions}
            onChange={handleSelect}
          />
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default MultiselectComponent;
