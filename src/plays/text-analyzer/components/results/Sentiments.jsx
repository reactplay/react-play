import React from 'react';

const Sentiments = ({ resultSentiments }) => {
  return <>{resultSentiments.sentiment.toUpperCase()}</>;
};

export default Sentiments;
