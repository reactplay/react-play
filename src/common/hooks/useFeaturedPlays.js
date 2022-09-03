import { useEffect, useState } from "react";
import { submit } from "common/services/request";
import { FetchPlaysSimple } from "common/services/request/query/fetch-plays";

const useFeaturedPlays = () => {
  const [viewsData, setViewsData] = useState([]);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [slugs, setSlug] = useState([]);

  async function fetchTrendingPlays(start, end, headers) {
    return await fetch(
      `https://analytics.reactplay.io/api/website/1/metrics?start_at=${start}&end_at=${end}&type=url`,
      { headers }
    );
  }

  useEffect(() => {
    function slugFromViewsData(slug) {
      return setSlug((oldVal) => [...oldVal, slug.split("/")[3]]);
    }

    const headers = {
      Authorization: `Bearer ${process.env.UMAMI_BEARER_TOKEN}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    const weeklyStartTime = 1661365800000;
    const weeklyEndTime = 1661797800000;

    const unwantedPaths = [
      "/",
      "/plays",
      "/ideas",
      "/plays/",
      "/?ref=madewithreactjs.com",
      "/tech-stacks",
      "/?error=invalid-request&errorDescription=%22redirectTo%22%20does%20not%20match%20any%20of%20the%20allowed%20types",
      "/ideas/",
      "/plays/create",
      "/plays/98415e0a-68d2-4930-a7ff-3559200740fe",
      "/plays/editplay",
    ];

    (async () => {
      try {
        setLoading(true);
        const viewsRes = await fetchTrendingPlays(
          weeklyStartTime,
          weeklyEndTime,
          headers
        );
        setViewsData((current) =>
          current.filter((d) => {
            return unwantedPaths.includes(d.x) === false;
          })
        );
        viewsData.slice(0, 4).map((v) => {
          return slugFromViewsData(v.x);
        });
        const dataRes = await submit(FetchPlaysSimple());
        setViewsData(viewsRes);
        setData(dataRes);
      } catch (err) {
        setError(err?.[0]);
      } finally {
        setLoading(false);
      }
    })();
  }, [viewsData, slugs]);

  return [loading, error, data, slugs];
};

export default useFeaturedPlays;
