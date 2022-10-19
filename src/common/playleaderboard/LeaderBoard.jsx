import { useState, useEffect } from "react";
import { submit } from "../services/request";
import { FetchPlayCountByUser } from "common/services/request/query/fetch-leaderboard-data";
import { topPlayCreatorOfTheMonth, topPlayCreators } from "./leaderboardData";
import TopPlayCreatorOfTheMonth from "./TopPlayCreatorOfTheMonth";
import TopPlayCreators from "./TopPlayCreators";
import _ from "lodash";

const LeaderBoard = () => {
  const [top10Contributors, updateTop10Contributors] = useState([]);
  const { getAllPlaysByUser } = FetchPlayCountByUser;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const formatData = (data) => {
    const formattedData = [];
    const finalData = [];
    data.map((d) => {
      formattedData.push({
        created_at: d.created_at,
        displayName: d.user.displayName,
        avatarUrl: d.user.avatarUrl,
      });
    });
    const groupByUser = _.groupBy(formattedData, "displayName");
    Object.values(groupByUser).map((v) =>
      finalData.push({ displayName: v[0].displayName, avatarUrl: v.map(t => t.avatarUrl)[0], count: v.length })
    );
    return finalData.sort((a,b) => b.count - a.count).slice(0,10);
  };

  useEffect(() => {
    async function fetchData() {
      const data = await submit(getAllPlaysByUser());
      updateTop10Contributors(formatData(data))
    }
    fetchData();
  }, [formatData, getAllPlaysByUser]);

  console.log("final", top10Contributors);
  return (
    <main className="app-body">
      <div className=" overflow-auto p-4 lg:flex flex-row justify-around ">
        <TopPlayCreatorOfTheMonth
          topPlayCreatorOfTheMonth={topPlayCreatorOfTheMonth}
        />
        <div className="flex flex-col m-4 items-center">
          <div className="text-3xl font-semibold">
            Top play creators of all time
          </div>
          <div>
            <TopPlayCreators topPlayCreators={top10Contributors} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default LeaderBoard;
