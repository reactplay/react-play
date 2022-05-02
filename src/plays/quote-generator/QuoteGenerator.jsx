import { getPlayById } from "meta/play-meta-util";
import PlayHeader from "common/playlists/PlayHeader";
import "./quoteGenerator.css";
import { useEffect, useState } from "react";

const fetchQuote = async () => {
  const response = await (await fetch('https://api.quotable.io/random')).json();
  return response;
}

function QuoteGenerator(props) {
  // Do not remove the below lines.
  // The following code is to fetch the current play from the URL
  const { id } = props;
  const play = getPlayById(id);

  // Your Code Start below.
  const [quoteArray, setQuoteArray] = useState(null)
  
  useEffect(()=>{
    const fetcher = async () => {
      const response = await fetchQuote()
      console.log(response)
      setQuoteArray(response)
      console.log("Array\n",quoteArray)
    }
    fetcher()
  },[])

  return (
    <>
      <div className="play-details">
        <PlayHeader play={play} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div>
            <h1>Quote Generator - Get Motivated Randomly.</h1>
            <p>
              Random Quote Generator for you to get motivated, inspired and also
              learn the applications of various hooks in React.
            </p>
          </div>
          <div className="play-area">
            <div className="quote-area">
              <div className="quote">
                <p>
                  {/* {(quoteArray[quoteArray.length-1]).content} */}
                </p>
              </div>
            </div>
            <div className="button-area">
              <div className="prev-btn">
                <button className="change-btn">
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
              <div className="quote-generate">
                <button className="quote-generate-btn">Generate</button>
              </div>
              <div className="next-btn">
                <button className="change-btn">
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
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default QuoteGenerator;
