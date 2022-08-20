import PlayHeader from "common/playlists/PlayHeader";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

// WARNING: Do not change the entry componenet name
function StarRating(props) {
  // Your Code Start below.

  const [rating, setRating] = useState(null);
  const [hoverFill, setHoverFill] = useState(null);

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}

          <div className="star-wrapper">
            <div className="star">
              {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;

                return (
                  <button
                    key={index}
                    onMouseEnter={() => setHoverFill(ratingValue)}
                    onMouseLeave={() => setHoverFill(null)}
                    onClick={() => setRating(ratingValue)}
                  >
                    <FaStar
                      size={100}
                      style={{
                        color:
                          ratingValue <= (hoverFill || rating)
                            ? "#ffe101"
                            : "#ccc",
                      }}
                      onChange={() => setRating(ratingValue)}
                      value={ratingValue}
                    />
                  </button>
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

export default StarRating;
