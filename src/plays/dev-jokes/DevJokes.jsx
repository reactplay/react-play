import PlayHeader from "common/playlists/PlayHeader";
import "./devJokes.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
function DevJokes(props) {
  const [joke, setjoke] = useState([]);
  const [spinner, setspinner] = useState(false);
  const fetch = () => {
    setspinner(true);
    axios
      .get("https://backend-omega-seven.vercel.app/api/getjoke")
      .then((response) => {
        setjoke(response.data);
        setspinner(false);
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
            {spinner ? (
              <Spinner />
            ) : (
              <div>
                {joke.map((value) => {
                  return (
                    <div key={value}>
                      <h1>{value.question}</h1>
                      <p>{value.punchline}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <button onClick={fetch} className="dev-jokes-btn">
            Next joke
          </button>
        </div>
      </div>
    </>
  );
}

export default DevJokes;
