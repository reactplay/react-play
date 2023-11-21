import { useState } from 'react';
import PlayHeader from 'common/playlists/PlayHeader';
import Button from './components/Button';
import Sounds from './components/Sounds';
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import './styles.css';

// WARNING: Do not change the entry componenet name
function Reactinstants(props) {
  // Your Code Start below.
  const [value, setValue] = useState(50);

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div>
            <div className="volume-container">
              <span className="volume-text">Volume:</span>
              <div className="volume">
                <RangeSlider
                  value={value}
                  onChange={(changeEvent) => setValue(changeEvent.target.value)}
                />
              </div>
            </div>
            <div className="soundboard-container">
              {Object.values(Sounds).map((element, index) => {
                return <Button button={element} key={index} volume={value} />;
              })}
            </div>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default Reactinstants;
