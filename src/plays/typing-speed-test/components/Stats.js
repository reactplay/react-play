import React, { useState } from "react";
import Timer from "./Timer";

const Stats = ({ timer, onTimerCompleted, correctedWords }) => {
  const [elaspedTime, setElaspedTime] = useState(60);

  const timeRemaining = (elaspedTime) => {
    console.log("elaspedTime", elaspedTime);
    setElaspedTime(elaspedTime);
  };

  console.log("correctedWords", correctedWords);

  return (
    <div>
      <Timer
        timer={timer}
        onTimerCompleted={onTimerCompleted}
        timeRemaining={timeRemaining}
      />
      <p>Speed:{((correctedWords / elaspedTime) * 100).toFixed(2)} WPM</p>
    </div>
  );
};

export default Stats;
