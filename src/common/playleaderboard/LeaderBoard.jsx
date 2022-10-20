import { useState, useEffect } from "react";
import { submit } from "../services/request";
import { FetchPlayCountByUser } from "common/services/request/query/fetch-leaderboard-data";
import TopPlayCreatorOfTheMonth from "./TopPlayCreatorOfTheMonth";
import TopPlayCreators from "./TopPlayCreators";
import _ from "lodash";
import { format, lastDayOfMonth } from "date-fns";

const LeaderBoard = () => {
  const [top10Contributors, updateTop10Contributors] = useState([]);
  const [topContributorOfTheMonth, updateTopContributorOfTheMonth] = useState(
    []
  );
  const { getAllPlaysByUser, getAllPlaysByUserByMonth } = FetchPlayCountByUser;

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
      finalData.push({
        displayName: v[0].displayName,
        avatarUrl: v.map((t) => t.avatarUrl)[0],
        count: v.length,
      })
    );
    return finalData.sort((a, b) => b.count - a.count);
  };

  useEffect(() => {
    async function fetchTopContributors() {
      const data = await submit(getAllPlaysByUser());
      updateTop10Contributors(formatData(data).slice(0, 10));
    };
    async function fetchTopContributorOfTheMonth() {
      const firstDateOfMonth = format(new Date(), "yyyy-MM-01");
      const lastDateOfMonth = format(lastDayOfMonth(new Date()), "yyyy-MM-dd");
      const data = await submit(
        getAllPlaysByUserByMonth(firstDateOfMonth, lastDateOfMonth)
      );
      updateTopContributorOfTheMonth(formatData(data)[0]);
    };
    
    fetchTopContributors();
    fetchTopContributorOfTheMonth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="app-body">
      <div className=" overflow-auto lg:flex flex-row justify-around ">
        <TopPlayCreatorOfTheMonth
          topPlayCreatorOfTheMonth={topContributorOfTheMonth}
        />
        <div className="flex flex-col m-4 items-center">
          <div className="heading">Top play creators of all time</div>
          <div>
            <TopPlayCreators topPlayCreators={top10Contributors} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default LeaderBoard;
