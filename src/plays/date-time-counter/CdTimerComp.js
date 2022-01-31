import { useState } from "react";
import CountDownTimer from "./CountDownTimer";

const CdTimerComp = () => {
  const dateTimeAfterThreeDays = new Date().getTime() + 259200000;
  const [targetDate, setTargetDate] = useState(
    new Date(dateTimeAfterThreeDays)
  );

 
  const handleChange = (event) => {
    event.preventDefault();
    setTargetDate(new Date(event.target.value));
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
