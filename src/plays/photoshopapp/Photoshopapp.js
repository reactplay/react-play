import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import React, { useState, useMemo } from 'react';
import { DEFAULT_OPTIONS } from './Constants';
import Slider from './Slider';
import SidebarItem from './SidebarItem';

// WARNING: Do not change the entry componenet name
function Photoshopapp(props) {
  // Your Code Start below.
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const selectedOption = useMemo(
    () => options[selectedOptionIndex],
    [options, selectedOptionIndex]
  );

  function handleSliderChange({ target }) {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option;

        return { ...option, value: target.value };
      });
    });
  }

  const imageStyle = useMemo(() => {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });

    return { filter: filters.join(' ') };
  }, [options]);

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="photoshopApp-container">
            <div className="photoshopApp-main-image" style={imageStyle} />
            <div className="photoshopApp-sidebar">
              {options.map((option, index) => {
                return (
                  <SidebarItem
                    active={index === selectedOptionIndex}
                    handleClick={() => setSelectedOptionIndex(index)}
                    key={index}
                    name={option.name}
                  />
                );
              })}
            </div>
            {selectedOption && (
              <Slider
                handleChange={handleSliderChange}
                max={selectedOption.range.max}
                min={selectedOption.range.min}
                value={selectedOption.value}
              />
            )}
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default Photoshopapp;
