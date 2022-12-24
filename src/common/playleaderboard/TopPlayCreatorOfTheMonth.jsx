import { format } from "date-fns";

const TopPlayCreatorOfTheMonth = ({ topPlayCreatorOfTheMonth }) => {
  return (
    <div className="m-4 text-center lg:flex flex-col gap-4 items-center">
      <div className="heading">
        Top play creator of the month - {format(new Date(), "LLLL yyyy")}
      </div>
      <div className="flex flex-col items-center m-1">
        <div>
          <img
            className="rounded-full border-solid h-48 lg:h-80"
            src={topPlayCreatorOfTheMonth.avatarUrl}
            alt="profile pic"
            title={topPlayCreatorOfTheMonth.displayName}
          />
        </div>
        <div className="flex flex-col m-8 items-center">
          <div className="text">
            {topPlayCreatorOfTheMonth.displayName}
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div className="font-medium text-sm">
              Number of play(s) created:
            </div>
            <div className="font-medium text-sm">
              {topPlayCreatorOfTheMonth.count}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPlayCreatorOfTheMonth;