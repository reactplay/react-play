import PlayHeader from "common/playlists/PlayHeader";
import "./quoteGenerator.css";
import { useEffect, useState } from "react";

const fetchQuote = () => {
  const response = fetch("https://api.quotable.io/random");
  return response;
};

function QuoteGenerator(props) {

  // Your Code Start below.
  const [quoteArray, setQuoteArray] = useState([]);
  const [current, setCurrent] = useState(0);

  const updateState = (newState, stateUpdator) => {
    return new Promise((resolve) => {
      return stateUpdator(newState, resolve());
    });
  };

  const previousQuote = async () => {
    await updateState(current - 1, setCurrent);
    return;
  };

  const nextQuote = async () => {
    if (current < quoteArray.length - 1) {
      await updateState(current + 1, setCurrent);
      return;
    }

    const response = await (await fetchQuote()).json();
    await updateState(
      [...quoteArray, [response.content, response.author]],
      setQuoteArray
    );
    await updateState(current + 1, setCurrent);
    return;
  };

  useEffect(() => {
    const fetcher = async () => {
      const response = await (await fetchQuote()).json();
      await updateState(
        [...quoteArray, [response.content, response.author]],
        setQuoteArray
      );
    };
    fetcher();
  }, []);

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body rand-quote-gen">
          {/* Your Code Starts Here */}
          <div>
            <h1>Quote Generator - Get Motivated Randomly.</h1>
          </div>
          <div className="play-area">
            <div className="prev-btn">
              <button
                className="change-btn"
                disabled={current === 0}
                onClick={previousQuote}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </div>
            <div className="quote-area">
              <div className="quote">
                {quoteArray.length > 0 && <p>{quoteArray[current][0]}</p>}
              </div>
              <div className="page-author">
                {quoteArray.length > 0 && 
                <span className="page">
                  <p>
                    {current + 1}/{quoteArray.length}
                  </p>
                </span>}
                <span className="quote-author">
                  {quoteArray.length > 0 && (
                    <p className="author">- {quoteArray[current][1]}</p>
                  )}
                </span>
              </div>
            </div>
            <div className="next-btn">
              <button
                className="change-btn"
                onClick={nextQuote}
                labels="next-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default QuoteGenerator;
