import { useState } from "react";

import { Tweet } from "react-twitter-widgets";
import Spinner from "../../spinner/spinner";

import "./tweets.css";

// array of tweet IDs to show on the home page
const tweetIdArray = [
  "1544376341172068352",
  "1530197614771458049",
  "1529884210269671424",
  "1522165831005728769",
  "1521784126717710336",
  "1518200201302974464",
  "1541802575775035392",
  "1515598358748237830",
  "1528938773710782464",
  "1532349503709122561",
];

export default function SectionTweets() {
  const [isTweetsLoading, setIsTweetsLoading] = useState(true);
  const [twitterErrors, setTwitterErrors] = useState([]);

  const tweetLoadHandler = () => {
    if (isTweetsLoading) setIsTweetsLoading(false);
  };

  const handleRenderError = (id) => {
    return () => {
      if (isTweetsLoading) {
        setIsTweetsLoading(false);
      }

      setTwitterErrors((errors) => errors.concat(id));

      return (
        <div key={id} className="error-message-twitter">
          Unable to load tweet
        </div>
      );
    };
  };

  return (
    <section className="home-tweets">
      <h3 className="title-primary">
        What Our{" "}
        <strong>
          <span>Community</span>
        </strong>{" "}
        Says!
      </h3>

      {isTweetsLoading && <Spinner />}

      <div className={isTweetsLoading ? "tweets-container" : "tweets-container active"} data-testid="tweet-container">
        {twitterErrors.length < tweetIdArray.length ? (
          tweetIdArray.map((id) => (
            <Tweet
              key={id}
              tweetId={id}
              onLoad={tweetLoadHandler}
              options={{
                width: "410",
                conversation: "none",
                cards: "hidden",
                align: "center",
              }}
              renderError={handleRenderError(id)}
            />
          ))
        ) : (
          <div className="error-message-twitter">There was an error loading the tweets</div>
        )}
      </div>
    </section>
  );
}
