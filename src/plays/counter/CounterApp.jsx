import PlayHeader from "common/playlists/PlayHeader";
import { useState } from 'react';
import Counter from "./Counter";
import "./counter.css";

function CounterApp(props) {
  
  const [input, setInput] = useState("");
  const [times, setTimes] = useState(33);
  function register() {
    let no_times = Number(input);
    console.log(no_times);
    setTimes(no_times);
    setInput("");
  }
  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          <div className="counter-container">
            <h1>Counter</h1>
            <p>A simple counter</p>
            <p className="counter-desc">
              Specify the limit and click the circle below to increment the
              value until the limit has been reached. After that it will reset
              to zero.
            </p>
            <div className="input_field">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="no_of_times"
                type="text"
              />
              <button onClick={register}>Submit</button>
            </div>
            <Counter times={times} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CounterApp;
