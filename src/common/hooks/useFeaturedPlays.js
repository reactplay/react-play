import { useEffect, useState } from "react";
import { submit } from "common/services/request";
import { FetchPlaysSimple } from "common/services/request/query/fetch-plays";

const useFeaturedPlays = () => {
  const [viewsData, setViewsData] = useState([]);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [slugs, setSlug] = useState([]);
  const [trendingPlays, setTrendingPlays] = useState([]);

  async function fetchTrendingPlays(start, end, headers) {
    return await fetch(
      `/api/website/1/metrics?start_at=${start}&end_at=${end}&type=url`,
      { headers }
    );
  }

  useEffect(() => {
    function slugFromViewsData(slug) {
      return setSlug((oldVal) => [...oldVal, slug.split("/")[3]]);
    }

    const headers = {
      Authorization: `Bearer ${process.env.REACT_APP_UMAMI_BEARER_TOKEN}`,
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
        console.log(viewsRes);
        setViewsData(viewsRes);

        setViewsData((current) =>
          current.filter((d) => {
            return unwantedPaths.includes(d.x) === false;
          })
        );
        viewsData.slice(0, 4).map((v) => {
          return slugFromViewsData(v.x);
        });
        console.log(slugs);
        const dataRes = await submit(FetchPlaysSimple());
        setData(dataRes);
        setData((current) =>
          current.filter((d) => {
            return viewsData.filter((v) => {
              return v.x === d.slug;
            });
          })
        );
        setTrendingPlays(data);
        console.log(trendingPlays);
      } catch (err) {
        setError(err?.[0]);
      } finally {
        setLoading(false);
      }
    })();
  }, [viewsData, slugs, data]);

  return [loading, error, slugs, viewsData, data, trendingPlays];
};

export default useFeaturedPlays;
