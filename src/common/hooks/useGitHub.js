import { useState, useEffect } from 'react';

/**
 * Fetches the github api to get info about the user
 * @param {string} github github username
 * @returns { data, error, isLoading }
 */

const useGitHub = (github) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://api.github.com/users/${github}`);
        const responseData = await response.json();
        setData(responseData);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [github]);

  return { data, error, isLoading };
};

export default useGitHub;
