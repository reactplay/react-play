import React from 'react';
import './index.css';

export default function Card({ index, author, quote }) {
  return (
    <div className="card-container-main" key={index}>
      <div
        className={`motivate-me-question__tag ${
          index % 2 === 0 ? 'motivate-me-even_div' : 'motivate-me-odd_div'
        }`}
      />
      <p className="motivate-me-quote">{quote}</p>
      <div className="motivate-me-author-name">{author}</div>
    </div>
  );
}
