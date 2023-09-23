import './datetime.css';
import DateTimeDisplay from './DateTimeDisplay';
import useCountDown from './hooks/useCountDown';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <a
        className="countdown-link"
        href="https://tapasadhikary.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <DateTimeDisplay isDanger={days <= 3} type="Days" value={days} />
        <p>:</p>
        <DateTimeDisplay isDanger={false} type="Hours" value={hours} />
        <p>:</p>
        <DateTimeDisplay isDanger={false} type="Mins" value={minutes} />
        <p>:</p>
        <DateTimeDisplay isDanger={false} type="Seconds" value={seconds} />
      </a>
    </div>
  );
};

const CountDownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountDown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />;
  }
};

export default CountDownTimer;
