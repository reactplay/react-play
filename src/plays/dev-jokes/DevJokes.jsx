import PlayHeader from "common/playlists/PlayHeader";
import "./devJokes.css";
import axios from "axios";
import { useEffect, useState } from "react";

function DevJokes(props) {
  // Your Code Start below.
  const [joke, setjoke] = useState([]);
  const fetch = () => {
    axios
      .get("https://backend-omega-seven.vercel.app/api/getjoke")
      .then((response) => {
        setjoke(response.data);
        console.log(response.data);
      });
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="maincontanier">
          <div className="jokecontanier">
            {joke.map((value) => {
              return (
                <div className="cont2">
                  <h1>{value.question}</h1>
                  <p>{value.punchline}</p>
                </div>
              );
            })}
          </div>
          <button onClick={fetch} className="btn">Next joke</button>
        </div>
      </div>
    </>
  );
}

export default DevJokes;
