import React from 'react';
import ActivityBanner from 'common/activities/ActivityBanner';
import DefaultBanner from 'common/defaultBanner/DefaultBanner';

const HomeContent = () => {
  return (
    <div className="app-home-body-content">
      {process.env.REACT_APP_ACTIVITIES_ON && process.env.REACT_APP_ACTIVITIES_ON === 'true' ? (
        <ActivityBanner currentActivity={process.env.REACT_APP_ACTIVITY_ID} />
      ) : (
        <DefaultBanner />
      )}
    </div>
  );
};

export default HomeContent;
