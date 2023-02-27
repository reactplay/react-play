import React, { useState } from 'react';
import axios from 'axios';
import './Random.css';

function Random() {
  const [isFactsLoading, setIsFactsLoading] = useState(false);
  const [facts, setFacts] = useState([
    'Discover fascinating number facts with just one click!',
    'Enter any number and uncover fun and educational facts about it.',
    'Keep scrolling to find even more intriguing number trivia to amaze your friends with!'
  ]);

  async function fetchData() {
    setIsFactsLoading(true);
    const fetchedFacts = [];
    for (let i = 0; i < 3; i++) {
      const response = await axios.get(`http://numbersapi.com/random/trivia`);
      fetchedFacts.push(response.data);
    }
    setFacts(fetchedFacts);
    setIsFactsLoading(false);
  }

  function handleGetFactClick() {
    fetchData();
  }

  // function handleGetFactClick() {
  //   fetchData();
  // }
  return (
    <div className="number-facts">
      <div className="digits-fact-container">
        {isFactsLoading ? (
          <div className="digits-loading">Loading...</div>
        ) : (
          facts.map((fact, index) => (
            <p className="fact" key={index}>
              • {fact}
            </p>
          ))
        )}
      </div>
      <button className="digits-random-facts-btn" onClick={handleGetFactClick}>
        Random Facts
      </button>
    </div>
  );
}

export default Random;
