import { format } from 'date-fns';

const TopPlayCreatorOfTheMonth = ({ topPlayCreatorOfTheMonth }) => {
  return (
    <div className="m-4 text-center flex lg:flex flex-col gap-4 items-center">
      <div className="flex flex-col lg:w-[600px] md:w-[600px]">
        <div className="leaderboard-heading">Top play creator of the month</div>
        <div className="leaderboard-heading">{format(new Date(), 'LLLL yyyy')}</div>
      </div>
      <div className="flex flex-col items-center m-1">
        <div>
          <img
            alt="profile pic"
            className="rounded-full border-solid h-48 lg:h-80 shadow-xl border-cyan-400 border-4"
            src={topPlayCreatorOfTheMonth.avatarUrl}
            title={topPlayCreatorOfTheMonth.displayName}
          />
        </div>
        <div className="flex flex-col m-8 items-center">
          <div className="leaderboard-text">{topPlayCreatorOfTheMonth.displayName}</div>
          <div className="flex flex-row gap-2 items-center">
            <div className="font-medium text-sm">Number of play(s) created:</div>
            <div className="font-medium text-sm">{topPlayCreatorOfTheMonth.count}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPlayCreatorOfTheMonth;
