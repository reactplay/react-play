import { getPlayById } from "meta/play-meta-util";
import "./AnalogClock.css";

import PlayHeader from "common/playlists/PlayHeader";
import { useState } from "react";
import { useEffect } from "react";

function AnalogClock(props) {
  // Do not remove the below lines.
  // The following code is to fetch the current play from the URL
  const { id } = props;
  const play = getPlayById(id);

  // Your Code Start below.
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const hour = date.getHours() * 30 + 180; // 360/12 = 30 each hour it rotates 30deg +180 (initial design at 0 deg was upside down so to fix it i rotate 180deg..// see the design at 0deg for more clarification)
  const minute = date.getMinutes() * 6 + 180; // 360/60 = 6 each minutes it rotate 6deg + 180(same as above to ...see at 0 deg)
  const second = date.getSeconds() * 6 + 180; //// 360/60 = 6 each minutes it rotate 6deg + 180(look at 0 deg for more clarification)

  return (
    <>
      <div className="play-details">
        <PlayHeader play={play} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <h1 className="clock-play-heading">Analog Clock</h1>
          <div className="analong-clock-container">
            <div className="clock">
              <div
                className="hour-hand"
                style={{
                  transform: "rotate(" + hour + "deg)",
                }}
              ></div>
              <div
                className="minute-hand"
                style={{
                  transform: "rotate(" + minute + "deg)",
                }}
              ></div>
              <div
                className="second-hand"
                style={{
                  transform: "rotate(" + second + "deg)",
                }}
              ></div>
              <div className="brand"></div>
            </div>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default AnalogClock;
