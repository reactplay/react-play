import { useEffect, useState } from "react";
import { submit } from "common/services/request";
import { FetchPlaysSimple } from "common/services/request/query/fetch-plays";

const useFeaturedPlays = () => {
  const [viewsData, setViewsData] = useState([
    {
      x: "/",
      y: 197,
    },
    {
      x: "/plays",
      y: 192,
    },
    {
      x: "/ideas",
      y: 30,
    },
    {
      x: "/plays/yung-coder/code-editor",
      y: 25,
    },
    {
      x: "/plays/",
      y: 21,
    },
    {
      x: "/plays/deepak8717/countries-statics",
      y: 17,
    },
    {
      x: "/plays/atapas/date-time-counter",
      y: 12,
    },
    {
      x: "/plays/deepak8717/registration-form",
      y: 11,
    },
    {
      x: "/plays/angryman18/memory-game",
      y: 10,
    },
    {
      x: "/plays/deepak8717/expanding-cards",
      y: 10,
    },
    {
      x: "/plays/koustov/why-typescript",
      y: 9,
    },
    {
      x: "/?ref=madewithreactjs.com",
      y: 7,
    },
    {
      x: "/plays/yung-coder/dev-jokes",
      y: 7,
    },
    {
      x: "/plays/deepak8717/analog-clock",
      y: 7,
    },
    {
      x: "/plays/ammaaraslam/react-gradients",
      y: 6,
    },
    {
      x: "/plays/deepak8717/flip-card-effect",
      y: 6,
    },
    {
      x: "/plays/deepak8717/dynamic-routes",
      y: 6,
    },
    {
      x: "/tech-stacks",
      y: 6,
    },
    {
      x: "/plays/abhishek-90/quote-generator",
      y: 5,
    },
    {
      x: "/plays/tejinder-sharma/tic-tac-toe-game",
      y: 5,
    },
    {
      x: "/plays/atapas/social-card",
      y: 5,
    },
    {
      x: "/plays/angryman18/password-generator",
      y: 5,
    },
    {
      x: "/plays/editplay",
      y: 5,
    },
    {
      x: "/plays/deepak8717/dynamic-routes/lunch",
      y: 4,
    },
    {
      x: "/plays/angryman18/simple-live-chat",
      y: 4,
    },
    {
      x: "/plays/shivam-katare/navbar",
      y: 4,
    },
    {
      x: "/plays/nirban256/react-todo-app",
      y: 4,
    },
    {
      x: "/plays/deepak8717/dynamic-routes/dinner",
      y: 4,
    },
    {
      x: "/plays/harshsinghatz/image-carousel",
      y: 4,
    },
    {
      x: "/plays/eoeboh/markdown-editor",
      y: 3,
    },
    {
      x: "/plays/atapas/movies",
      y: 3,
    },
    {
      x: "/plays/frankiefab100/star-rating",
      y: 3,
    },
    {
      x: "/plays/atapas/why-react",
      y: 3,
    },
    {
      x: "/plays/yung-coder/code-editor/",
      y: 3,
    },
    {
      x: "/plays/green-roots/org-tree",
      y: 3,
    },
    {
      x: "/plays/tejasshekar/github-user-search",
      y: 3,
    },
    {
      x: "/plays/nirban256/git-hub-profile-search",
      y: 3,
    },
    {
      x: "/plays/deepak8717/registration-form/",
      y: 2,
    },
    {
      x: "/plays/murtuzaalisurti/qr-code-generator",
      y: 2,
    },
    {
      x: "/plays/vasantisuthar/quizeo",
      y: 2,
    },
    {
      x: "/plays/vincentbcp/calendar",
      y: 2,
    },
    {
      x: "/?error=invalid-request&errorDescription=%22redirectTo%22%20does%20not%20match%20any%20of%20the%20allowed%20types",
      y: 2,
    },
    {
      x: "/plays/abhishek-90/states",
      y: 2,
    },
    {
      x: "/plays/shivam-katare/keeper",
      y: 2,
    },
    {
      x: "/plays/deepak8717/countries-statics/",
      y: 2,
    },
    {
      x: "/plays/deepak8717/dynamic-routes/breakfast",
      y: 2,
    },
    {
      x: "/plays/deepak8717/context-with-real-usecases",
      y: 2,
    },
    {
      x: "/plays/create",
      y: 1,
    },
    {
      x: "/plays/98415e0a-68d2-4930-a7ff-3559200740fe",
      y: 1,
    },
    {
      x: "/plays/angryman18/password-generator/",
      y: 1,
    },
    {
      x: "/plays/murtuzaalisurti/counter",
      y: 1,
    },
    {
      x: "/plays/angryman18/fun-quiz",
      y: 1,
    },
    {
      x: "/plays/yung-coder/code-editor/?refreshToken=41dc350d-d87f-4917-9586-e7f8feb8ff7f",
      y: 1,
    },
    {
      x: "/plays/shivam-katare/navbar/",
      y: 1,
    },
    {
      x: "/ideas/",
      y: 1,
    },
    {
      x: "/plays/eoeboh/markdown-editor/",
      y: 1,
    },
  ]);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [slugs, setSlug] = useState([]);
  const [trendingPlays, setTrendingPlays] = useState([]);

  async function fetchTrendingPlays(start, end, headers) {
    return await fetch(
      `${process.env.REACT_APP_UMAMI_METRICS_URL}?start_at=${start}&end_at=${end}&type=url`,
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

  return [loading, error, trendingPlays];
};

export default useFeaturedPlays;
