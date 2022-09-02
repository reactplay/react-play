import { useEffect, useState } from "react";
import { submit } from "common/services/request";
import { FetchPlaysSimple } from "common/services/request/query/fetch-plays";

const useFeaturedPlays = () => {
  const [viewsData, setViewsData] = useState([]);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchTrendingPlays(start, end, headers) {
    return await fetch(
      `https://analytics.reactplay.io/api/website/1/metrics?start_at=${start}&end_at=${end}&type=url`,
      { headers }
    );
  }

  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${process.env.UMAMI_BEARER_TOKEN}`,
    };
    const weeklyStartTime = 1661365800000;
    const weeklyEndTime = 1661797800000;

    (async () => {
      try {
        setLoading(true);
        const viewsRes = await fetchTrendingPlays(
          weeklyStartTime,
          weeklyEndTime,
          headers
        );
        const dataRes = await submit(FetchPlaysSimple());
        setViewsData(viewsRes);
        setData(dataRes);
      } catch (err) {
        setError(err?.[0]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return [loading, error, data, viewsData];
};

export default useFeaturedPlays;
