import React, { useState } from 'react';
import './TextFact.css';

const TextFact = () => {
  const [number, setNumber] = useState('');
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleClick = () => {
    if (/^[0-9]+$/.test(number)) {
      setLoading(true);
      fetch(`http://numbersapi.com/${number}`)
        .then((response) => response.text())
        .then((data) => {
          setFact(data);
          setError('');
        })
        .catch((error) => {
          setError(`Error: ${error.message}`);
          setFact('');
        })
        .finally(() => setLoading(false));
    } else {
      setError('Please enter a valid number');
      setFact('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div className="App">
      <input
        required
        autoComplete="off"
        className="digits-question"
        name="name"
        placeholder="Enter Any Number"
        type="text"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button className="digits-button" disabled={loading} onClick={handleClick}>
        {loading ? 'Loading...' : 'Get Fact'}
      </button>

      {fact !== '' && <p className="digits-number-fact">{fact}</p>}
      {error !== '' && <p className="digits-number-fact">{error}</p>}
    </div>
  );
};

export default TextFact;
