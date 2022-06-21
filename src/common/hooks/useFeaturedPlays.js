// THIS HOOK GETS THE FEATURED PLAY FROM THE BACKEND AND RETURNS IT

import { useEffect, useState } from "react";
import { submit } from "common/services/request";
import { FetchPlaysFilter } from "common/services/request/query/fetch-plays-filter";

const useFeaturedPlays = () => {
  const { getAllFeaturedPlays } = FetchPlaysFilter;
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await submit(getAllFeaturedPlays());
        setData(res);
      } catch (err) {
        setError(err?.[0]);
      } finally {
        setLoading(false);
      }
    })();
  }, [getAllFeaturedPlays]);

  return [loading, error, data];
};

export default useFeaturedPlays;
