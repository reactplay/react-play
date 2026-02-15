import React, { useState } from 'react';
import './CharacterCounter.css';

const CharacterCounter = () => {
  const [text, setText] = useState('');

  const charCount = text.length;
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).filter(Boolean).length;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <div className="character-counter-wrapper">
      <div className="counter-card">
        <h2 className="counter-title">Character & Word Counter</h2>

        <textarea
          className="counter-textarea"
          placeholder="Start typing or paste your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-num">{charCount}</span>
            <span className="stat-label">Characters</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">{wordCount}</span>
            <span className="stat-label">Words</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">{readingTime} min</span>
            <span className="stat-label">Reading Time</span>
          </div>
        </div>

        <button className="reset-btn" onClick={() => setText('')}>
          Clear All
        </button>
      </div>
    </div>
  );
};

export default CharacterCounter;
