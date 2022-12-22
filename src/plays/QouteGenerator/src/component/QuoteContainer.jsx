import React, { useState, useEffect } from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function QuoteContainer() {
  const [quote, setQoute] = useState("");
  const [author, setAuthor] = useState("");
  const [isActive, setIsActive] = useState(false);

  const url = "http://api.quotable.io/random";

  let getQuote = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setQoute(data.content);
        setAuthor(data.author);
      });
    speechSynthesis.cancel();
  };

  let copyQuote = () => {
    navigator.clipboard.writeText(quote);
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 5000);
  };

  let speakQuote = () => {
    let speech = new SpeechSynthesisUtterance();
    speech.text = `${quote} by ${author}`;
    speechSynthesis.speak(speech);
  };

  let linkedQuote = () => {
    let linkedInUrl = "http://linkdin.com";
    window.open(linkedInUrl, "_blank");
  };
  useEffect(() => {
    getQuote();
  }, []);
  return (
    <div>
      <div
        className="bg-white px-2 py-2 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-md w-85'
      "
        style={{ width: "26rem", maxheight: "21rem" }}
      >
        <h1 className="text-center text-3xl font-normal">Ouotes of the day</h1>
        <FormatQuoteIcon className="text-2xl mt-6 ml-2" />
        <p className="mt-4 text-2xl ml-4">{quote}</p>
        <FormatQuoteIcon className="text-5xl float-right mt-1" />
        <p className="float-right mt-14 font-normal italic relative">
          {author}
        </p>
        <button
          onClick={getQuote}
          className="bg-blue-600 text-white flex justify-center items-center cursor-pointer relative top-3 h-12 w-80 rounded-md"
        >
          New Quotes
        </button>
        <div className="flex justify-center items-center">
          <div
            onClick={speakQuote}
            className="flex cursor-pointer hover:bg-orange-600 hover:text-white  justify-center items-center mr-1 rounded-full border border-black h-12 w-12 float-left mt-9 transition-all transition-dration:.3s"
          >
            <VolumeUpIcon />
          </div>
          <div
            onClick={copyQuote}
            className="flex justify-center hover:bg-green-600 hover:text-white  items-center  mr-1 rounded-full border border-black h-12 w-12 float-left mt-9 transition-all transition-dration:.3s"
          >
            <ContentCopyIcon />
            <span
              style={{ display: isActive ? "block" : "none" }}
              className="absolute text-xs italic"
            >
              Copy
            </span>
          </div>
          <div
            onClick={linkedQuote}
            className="flex justify-center hover:bg-blue-600 hover:text-white   items-center  mr-1 rounded-full border border-black h-12 w-12 float-left mt-9 transition-all transition-dration:.3s"
          >
            <LinkedInIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteContainer;
