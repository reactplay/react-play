import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import React, { useState } from 'react';
// import './App.css';
import Slider from './Slider';
import SidebarItem from './SidebarItem';
// WARNING: Do not change the entry componenet name

const DEFAULT_OPTIONS = [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  }
];

function Photoshopapp(props) {
  // Your Code Start below.
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const selectedOption = useMemo(()=>options[selectedOptionIndex],[options,selectedOptionIndex]);

  function handleSliderChange({ target }) {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option;

        return { ...option, value: target.value };
      });
    });
  }

  const imageStyle = useMemo(()=>{
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });

    return { filter: filters.join(' ') };
  },[options])

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="container">
            <div className="main-image" style={getImageStyle()} />
            <div className="sidebar">
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
            <Slider
              handleChange={handleSliderChange}
              max={selectedOption.range.max}
              min={selectedOption.range.min}
              value={selectedOption.value}
            />
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default Photoshopapp;
