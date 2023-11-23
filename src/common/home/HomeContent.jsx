import React, { useEffect } from 'react';
import useFetch from 'common/hooks/useFetch';
import { useSearchContext } from 'common/search/search-context';
import ActivityBanner from 'common/activities/ActivityBanner';
import DefaultBanner from 'common/defaultBanner/DefaultBanner';

const HomeContent = () => {
  const { data } = useFetch(`${process.env.REACT_APP_PLAY_API_URL}/react-play`);
  const { setSearchTerm, searchTerm, setFilterQuery } = useSearchContext();

  useEffect(() => {
    setSearchTerm('');
    setFilterQuery({
      level_id: '',
      tags: [],
      owner_user_id: '',
      language: ''
    });
  }, [data, setSearchTerm, searchTerm, setFilterQuery]);

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
