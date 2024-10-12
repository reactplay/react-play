import { useEffect, useState } from 'react';

// Custom hook to fetch currency information
const useCurrencyInfo = (currency) => {
  // State to hold currency data
  const [data, setData] = useState({});

  // Fetch currency data when currency changes
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((response) => {
        // If not successful, throw an error
        if (!response.ok) {
          throw new Error('Failed to fetch currency data');
        }

        // Parse response JSON
        return response.json();
      })
      .then(({ [currency]: currencyData }) => setData(currencyData))
      .catch((error) => {
        console.error('Error fetching currency data:', error);
      });
  }, [currency]); // Dependency array with currency

  // Return currency data
  return data;
};

export default useCurrencyInfo;
