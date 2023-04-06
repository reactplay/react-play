import { useEffect, useState } from 'react';
import { pageinate } from '../utils/paginate';
const url = 'https://api.github.com/users?per_page=100';

/**
 *
 * @returns isLoading: boolean, data: users object
 */
export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  // Fetch the data from github api
  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(pageinate(data, 12));
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return { isLoading, data };
};
