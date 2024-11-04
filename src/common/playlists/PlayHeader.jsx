import React, { useState } from 'react';
import PlayHeaderInfo from './PlayHeaderInfo';
import PlayHeaderActions from './PlayHeaderActions';
import { FaAngleUp } from 'react-icons/fa6';
import { FaAngleDown } from 'react-icons/fa6';

export const CollapseContext = React.createContext();

const PlayHeader = ({ play }) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <>
      <div className="play-details-header">
        <CollapseContext.Provider value={collapse}>
          <PlayHeaderInfo play={play} />
        </CollapseContext.Provider>
        <div className="header-rightcol">
          <div className="header-actions">
            <button
              className="collapse-btn px-3 py-2 rounded-md flex flex-row justify-center items-center text-white"
              onClick={() => {
                setCollapse((prev) => !prev);
              }}
            >
              {collapse ? <FaAngleUp className="mr-2" /> : <FaAngleDown className="mr-2" />}
              Collapse
            </button>
            <PlayHeaderActions play={play} />
          </div>
          {collapse && <small className="header-desc">{play.description}</small>}
        </div>
      </div>
    </>
  );
};

export default React.memo(PlayHeader);
