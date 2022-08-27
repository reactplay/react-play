import PlayHeader from "common/playlists/PlayHeader";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

// WARNING: Do not change the entry componenet name
function StarRating(props) {
  // Your Code Start below.

  const [rating, setRating] = useState(null);
  const [hoverFill, setHoverFill] = useState(null);

  const getReviewLabel = (rating) => {
    switch (rating) {
      case 1:
        return `Very bad ${String.fromCodePoint("0x1F922")}`;
      case 2:
        return `Bad ${String.fromCodePoint("0x1F97A")}`;
      case 3:
        return `Okay ${String.fromCodePoint("0x1F60C")}`;
      case 4:
        return `Good ${String.fromCodePoint("0x1F60A")}`;
      case 5:
        return `Excellent ${String.fromCodePoint("0x1F929")}`;

      default:
        return "";
    }
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}

          <div className="star-wrapper">
            <h2 className="review-text">
              {rating
                ? getReviewLabel(rating)
                : hoverFill
                ? getReviewLabel(hoverFill)
                : null}
            </h2>

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
                      className="FaStar"
                      size={80}
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
