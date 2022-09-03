import { useState, useEffect } from "react";

/**
 * Retrieves the contributors name in react play repo on github
 * @param {boolean} sorted mandatory
 * @returns [data, error, loading]
 */

const useContributors = (sorted) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.github.com/repos/reactplay/react-play/contributors?page=1&per_page=1000`
        );
        const responseData = await response.json();

        console.log(responseData)

        // Remove the bots
        const contributors = responseData.filter(
          (contributor) => contributor.type !== "Bot"
        );

        // Sort it by the contributions
        sorted &&
          contributors.sort((a, b) => b.contributions - a.contributions);

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
