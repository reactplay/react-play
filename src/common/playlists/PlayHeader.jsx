import React from 'react';
import PlayHeaderInfo from './PlayHeaderInfo';
import PlayHeaderActions from './PlayHeaderActions';

const PlayHeader = ({ play }) => {
  return (
    <>
      <div className="play-details-header">
        <PlayHeaderInfo play={play} />
        <div className="header-rightcol">
          <div className="header-actions">
            <PlayHeaderActions play={play} />
          </div>
          <small className="header-desc">{play.description}</small>
        </div>
      </div>
    </>
  );
};

export default React.memo(PlayHeader);
