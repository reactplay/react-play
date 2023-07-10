import { useEffect, useState } from 'react';
import { fetchPlays } from 'common/playlists/FeaturedPlaysFetcher/PlayFetcher';

/**
 * Custom hook to fetch and manage featured plays data
 * @param {string} search - Search criteria
 * @returns [loading, error, plays]
 */
const useFeaturedPlays = (search) => {
  const [loading, setLoading] = useState(false);
  const [plays, setPlays] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPlaysData = async () => {
      setLoading(true);
      try {
        const fetchedPlays = await fetchPlays(search);
        setPlays(fetchedPlays);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getPlaysData();
  }, [search]);

  return [loading, error, plays];
};

export default useFeaturedPlays;
