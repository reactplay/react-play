import PlayHeader from "common/playlists/PlayHeader";
import "./ExpandingCards.css";
import {useState} from "react";
import data from "./Expanding-Card-Images";

function ExpandingCards(props) {
  // Your Code Start below.

  const [activeCard, setActiveCard] = useState(0);

  const toggle = (i) => {
    setActiveCard(i);
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="play-container">
            <h1> Expanding Cards</h1>
            <p>Click on image to expand</p>
            <div className="card-container">
              {data.map((item, i) => {
                return (
                  <div
                    key={i}
                    className={
                      i === activeCard
                        ? "Expanding-card active"
                        : "Expanding-card"
                    }
                    onClick={() => toggle(i)}
                  >
                    <div className="info">{item.title}</div>
                    <img
                      src={item.url}
                      className="Expanding-card-imgage"
                      alt="Nature pics"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default ExpandingCards;
