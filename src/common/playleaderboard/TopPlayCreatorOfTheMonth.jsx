import { format } from "date-fns";

const TopPlayCreatorOfTheMonth = ({ topPlayCreatorOfTheMonth }) => {
  return (
    <div className="m-4 text-center lg:flex flex-col gap-4 items-center">
      <div className="text-3xl font-semibold">
        Top play creator of the month - {format(new Date(), "LLLL yyyy")}
      </div>
      <div className="flex flex-col items-center m-1">
        <div>
          <img
            className="rounded-full border-solid h-48 lg:h-80"
            src={topPlayCreatorOfTheMonth[0].avatarUrl}
            alt="profile pic"
            title={topPlayCreatorOfTheMonth[0].displayName}
          />
        </div>
        <div className="flex flex-col m-8 items-center">
          <div className="flex flex-row gap-2">
            <div className="font-medium text-lg">Name:</div>
            <div className="font-semibold text-lg">{topPlayCreatorOfTheMonth[0].displayName}</div>
          </div>
          <div className="flex flex-row gap-2">
            <div className="font-medium text-lg">Number of play(s) created:</div>
            <div>
              {topPlayCreatorOfTheMonth[0].plays_aggregate.aggregate.count}
            </div>
          </div>
          {/* <p className="font-semibold text-lg">
            {" "}
            Name: {topPlayCreatorOfTheMonth[0].displayName}
          </p>
          <p className="font-semibold text-lg">
            Number of play created:{" "}
            {topPlayCreatorOfTheMonth[0].plays_aggregate.aggregate.count}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default TopPlayCreatorOfTheMonth;
