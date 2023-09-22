import { useState } from 'react';

const Counter = (props) => {
  const [times, setTimes] = useState(0);

  function increase() {
    setTimes((prev) => {
      if (prev === props.times) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  }

  function reset() {
    setTimes(0);
  }

  return (
    <div className="counter">
      <button className="counter_btn" title="Click to increment" onClick={increase}>
        {times}
      </button>
      <button className="reset_btn" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
