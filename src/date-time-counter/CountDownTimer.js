import "./datetime.css";
import DateTimeDisplay from "./DateTimeDisplay";
import useCountDown from "./hooks/useCountDown";

const CountDownTimer = ({ targetDate }) => {
  
  const [days, hours, minutes, seconds] = useCountDown(targetDate);

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
          isDanger={days <= 3}
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
          isDanger={false}
        />
      </a>
    </div>
  );
};

export default CountDownTimer;
