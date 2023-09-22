import React from 'react';

const Sentiments = ({ resultSentiments }) => {
  return <div style={{ margin: '25px 25px' }}>{resultSentiments.sentiment.toUpperCase()}</div>;
};

export default Sentiments;
