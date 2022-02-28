import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return [loading, data];
};

export { useFetch };
