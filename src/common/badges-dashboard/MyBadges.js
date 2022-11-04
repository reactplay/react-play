import { useState } from "react";
import BadgeCard from "./BadgeCard";
import ClaimedBadges from "./ClaimedBadges";
import NotClaimedBadges from "./NotClaimedBadges";
import OverView from "./OverView";

const MyBadges = ({
  allBadges,
  claimedBadges,
  notClaimedBadges
}) => {
  const [currentWindow, setCurrentWindow] = useState(0);
  return (
    <div className="flex flex-col">
      <div className=" self-end flex gap-5">
        <button onClick={() => setCurrentWindow(0)}>
          overview
        </button>
        <button onClick={() => setCurrentWindow(1)}>
          claimed
        </button>
        <button onClick={() => setCurrentWindow(2)}>
          yet to
        </button>
      </div>
      <div className=" flex flex-col md:flex-row ">
        {
          (currentWindow === 0) && (
            <OverView badges={allBadges} />
          )
        }{
          (currentWindow === 1) && (
            <ClaimedBadges badges={claimedBadges} />
          )
        }{
          (currentWindow === 2) && (
            <NotClaimedBadges badges={notClaimedBadges} />
          )
        }
      </div>
    </div>
  );
}
export default MyBadges;