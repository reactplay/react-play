import React, { useState } from 'react';
import PlayHeader from 'common/playlists/PlayHeader';

function SimpleCharacterCounter(props) {
  // Your Code Starts Here
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;

  // Your Code Ends Here

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-container">
          {/* Your Render Starts Here */}
          <div className="counter-wrapper" style={{ textAlign: 'center', marginTop: '20px' }}>
            <textarea
              cols="50"
              placeholder="Type or paste your text here..."
              rows="10"
              style={{
                width: '80%',
                padding: '10px',
                fontSize: '16px',
                borderRadius: '8px',
                border: '2px solid #ccc'
              }}
              value={text}
              onChange={handleChange}
            />
            <div style={{ marginTop: '20px', fontSize: '1.2rem' }}>
              <span style={{ marginRight: '20px' }}>
                <strong>Characters:</strong> {charCount}
              </span>
              <span>
                <strong>Words:</strong> {wordCount}
              </span>
            </div>
            <button
              style={{
                marginTop: '15px',
                padding: '8px 16px',
                backgroundColor: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
              onClick={() => setText('')}
            >
              Clear Text
            </button>
          </div>
          {/* My Render Ends Here */}
        </div>
      </div>
    </>
  );
}

export default SimpleCharacterCounter;
