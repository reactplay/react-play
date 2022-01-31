import { useState } from "react";
import CountDownTimer from "./CountDownTimer";

const CdTimerComp = () => {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  const [targetDate, setTargetDate] = useState(
    new Date(dateTimeAfterThreeDays)
  );

  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.value) {
      setTargetDate(new Date(event.target.value));
    } else {
      setTargetDate(new Date(dateTimeAfterThreeDays));
    }
  };

  return (
    <div className="countdown-container">
      <h2>Countdown Timer</h2>
      <form>
        <label htmlFor="countdown-date-time">Select a Date and Time:</label>
        <input
          type="datetime-local"
          id="countdown-date-time"
          name="countdown-date-time"
          onChange={handleChange}
        />
      </form>
      <CountDownTimer targetDate={targetDate} />
    </div>
  );
};

export default CdTimerComp;
