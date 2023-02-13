import React, { useState } from 'react';
import { useResultContext } from '../context/ResultContext';
import './InputCard.css';

const InputCard = () => {
  const { getUser } = useResultContext();
  const [username, setUsername] = useState('');

  const handleClick = () => {
    getUser(username);

    setUsername('');
  };

  return (
    <div className="flex justify-center input-card">
      <input
        id="username"
        placeholder="Enter User Name"
        title="user-name"
        type="search"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="text-black search-btn" onClick={handleClick}>
        <span className="text-black">Find</span>
        <div id="clip">
          <div className="corner" id="leftTop" />
          <div className="corner" id="rightBottom" />
          <div className="corner" id="rightTop" />
          <div className="corner" id="leftBottom" />
        </div>
        <span className="arrow" id="rightArrow" />
        <span className="arrow" id="leftArrow" />
      </button>
    </div>
  );
};

export default InputCard;
