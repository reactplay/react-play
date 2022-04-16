

import { useState, useEffect } from 'react';

const useContributors = (sorted) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://api.github.com/repos/atapas/react-play/contributors`);
        const responseData = await response.json();
        
        // Remove the bots
        const contributors = responseData.filter(contributor => contributor.type !== 'Bot');
        
        // Sort it by the contributions
        sorted && contributors.sort((a, b) => b.contributions - a.contributions);
        
        setData(contributors);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [sorted]);

  return { data, error, isLoading };
};

export default useContributors;