import PlayHeader from "common/playlists/PlayHeader";
import "./devJokes.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

interface Jokes {
  punchline: string;
  question: string;
}

function DevJokes(props: any) {
  const [jokes, setJokes] = useState<Jokes[]>([]);
  const [spinner, setspinner] = useState<boolean>(false);
  const fetch = () => {
    setspinner(true);
    axios
      .get("https://backend-omega-seven.vercel.app/api/getjoke")
      .then((response) => {
        setJokes(response.data);
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
                {jokes.map((value, index) => {
                  return (
                    <div key={index}>
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
