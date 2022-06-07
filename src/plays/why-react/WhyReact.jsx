import PlayHeader from "common/playlists/PlayHeader";
import { useState } from "react";
import { getPlayById } from "meta/play-meta-util";
import "./why-react.css";

const WhyReact = ({ id }) => {
  // The following code is to fetch the current play from the URL
  const play = getPlayById(id);
  const [reasons] = useState([
    "React is Declarative",
    "It is fast",
    "JSX is simple",
    "It is Component-based",
    "It is easy to learn",
    "It is fun to use",
    "Write Once, Use Everywhere",
  ]);

  return (
    <>
      <div className="play-details">
        <PlayHeader play={play} />
        <div className="play-details-body">
          <div className="why-react">
            <p className="paragraph">
              React is a JavaScript library for building user interfaces. It is
              maintained by <b>Facebook</b> and a community of individual
              developers and companies.
            </p>

            <ul className="list">
              <h2 className="heading">Why React?</h2>
              {reasons.map((reason, index) => {
                return <li key={index}>{reason}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyReact;
