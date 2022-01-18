import { useEffect, useState } from "react";
import "./datetime.css";
import DateTimeDisplay from "./DateTimeDisplay";

const CountDownTimer = ({ targetDate }) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return (
    <div className="countdown-container">
      <a
        href="https://tapasadhikary.com"
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
      >
        <DateTimeDisplay
          value={days}
          type={"Days"}
          isDanger={days <= 1}
        />
        <p>:</p>
        <DateTimeDisplay
          value={hours}
          type={"Hours"}
          isDanger={false}
        />
        <p>:</p>
        <DateTimeDisplay
          value={minutes}
          type={"Mins"}
          isDanger={false}
        />
        <p>:</p>
        <DateTimeDisplay
          value={seconds}
          type={"Seconds"}
          isDanger={true}
        />
      </a>
    </div>
  );
};

export default CountDownTimer;
