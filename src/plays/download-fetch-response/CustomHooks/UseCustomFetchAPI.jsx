import { useEffect, useState } from "react";

export const UseCustomFetchAPI = (endPoint) => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setFetching(true);
    setError(false);
    let cancel = false;
    (async () => {
      try {
        if (!["", undefined, null].includes(endPoint.trim())) {
          const response = await window.fetch(endPoint, {
            signal: controller.signal,
          });
          const json = await response.json();
          if (cancel === false) {
            setData(json);
          }
        }
      } catch (e) {
        if (e.name !== "AbortError") setError(true);
      } finally {
        setFetching(false);
      }
    })();
    return () => {
      controller.abort();
      cancel = true;
    };
  }, [endPoint]);

  return { data, error, fetching };
};
