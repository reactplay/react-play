import { useEffect, useState } from 'react';

/**
 *
 * @param {string} url api url
 * @param {object} options object
 * @returns { data, loading, error }
 */

const useFetch = (url, options) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url, options]);

  return { data, loading, error };
};

export default useFetch;
