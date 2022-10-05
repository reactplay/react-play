import React, { useState } from "react";
import PlayHeader from "common/playlists/PlayHeader";
import Card from "./Card";
import Quotes from "./Quotes";
import "./inspirational-quotes.css";

export default function InspirationalQuotes(props: any) {
  const [quote, setQuote] = useState(Quotes[2]);

  const handleClick = () => {
    let randomNumber = Math.floor(Math.random() * Quotes.length);
    setQuote(Quotes[randomNumber]);
  };
  return (
    <div className="custom-container play-details">
      <PlayHeader play={props} />
      <div className="card__container">
        <Card quote={quote.quote} author={quote.author} onClick={handleClick} />
      </div>
    </div>
  );
}
