import { useState } from "react";
import PlayHeader from "common/playlists/PlayHeader";
import "./states.css";

function States(props) {
  // Your Code Start below.
  const [name, setName] = useState("");
  const [display, setDisplay] = useState(false);
  const [duration, setDuration] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!name && !duration) {
      return
    }
    setDisplay(true);
    setTimeout(() => {
      setDisplay(false);
      setName("");
      setDuration(0);
    }, duration * 1000);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="states">
            <h1>States - Details about Component</h1>
            <p>
              State is an inbuilt object of React which stores data/information
              about the component. State of the component can change over time.
              Change in state of the component causes re-rendering of the
              component. This change of State is Asynchronous.
            </p>
            <div className="play-area-container">
              <div className="play-area">
                <p>Enter a Name and Duration in Seconds for which you want to
                display a Message.</p>
                <input
                  className="input nameInput"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter a Name"
                  onChange={handleNameChange}
                  value={name}
                />
                <input
                  className="input durationInput"
                  type="text"
                  name="duration"
                  id="duration"
                  placeholder="Enter duration in seconds"
                  onChange={handleDurationChange}
                  value={duration}
                />
                <button
                  className="submit-button"
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                >
                  Submit
                </button>
              </div>
              
              <div className="play-area-result">
                {!display ? (
                  <p >Enter Details of the Message</p>
                ) : (
                  <h3 >Welcome to State Play, {name} </h3>
                )}
              </div>
            </div>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default States;
