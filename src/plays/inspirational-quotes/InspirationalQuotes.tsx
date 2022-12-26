import React, { useState } from 'react';
import PlayHeader from 'common/playlists/PlayHeader';
import Card from './Card';
import { Quotes } from './Quotes';
import './inspirational-quotes.css';
import { Quote } from './Types';

export default function InspirationalQuotes(props: any) {
  const [quote, setQuote] = useState<Quote>(Quotes[2]);

  const handleMoreClick = () => {
    const randomNumber = Math.floor(Math.random() * Quotes.length);
    setQuote(Quotes[randomNumber]);
  };

  return (
    <div className="custom-container play-details">
      <PlayHeader play={props} />
      <div className="card__container">
        <Card author={quote.author} quote={quote.quote} onClick={handleMoreClick} />
      </div>
    </div>
  );
}
