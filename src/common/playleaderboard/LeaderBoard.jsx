import { topPlayCreatorOfTheMonth, topPlayCreators } from "./leaderboardData";
import TopPlayCreatorOfTheMonth from "./TopPlayCreatorOfTheMonth";
import TopPlayCreators from "./TopPlayCreators";

const LeaderBoard = () => {
  return (
    <main className="app-body">
      <div className=" overflow-auto p-4 lg:flex flex-row justify-around ">
        <TopPlayCreatorOfTheMonth topPlayCreatorOfTheMonth={topPlayCreatorOfTheMonth} />
        <div className="flex flex-col m-4 items-center">
          <div className="text-2xl font-semibold">Top play creators of all time</div>
          <div>
           <TopPlayCreators topPlayCreators={topPlayCreators} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default LeaderBoard;
