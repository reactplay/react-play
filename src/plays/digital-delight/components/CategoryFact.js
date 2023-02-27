import React, { useState } from 'react';
import axios from 'axios';
import Math from '../components/images/math.png';
import Year from '../components/images/year.png';
import Date from '../components/images/date.png';
import './Categoryfact.css';

function CategoryFact() {
  const [fact, setFact] = useState('Click on buttons below to get facts by category');
  const [selectedVoice, setSelectedVoice] = useState('Zira');
  const [showSelecter, setShowSelecter] = useState(false);
  const speechHandler = (msg) => {
    // This for loop helps to give the selected voice
    for (let i = 0; i < window.speechSynthesis.getVoices().length; i++) {
      if (window.speechSynthesis.getVoices()[i].name === selectedVoice) {
        msg.voice = window.speechSynthesis.getVoices()[i];
      }
    }
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(msg);
  };

  const getFact = async (type) => {
    try {
      const response = await axios.get(`http://numbersapi.com/random/${type}`);
      setFact(response.data);
      speechHandler(new SpeechSynthesisUtterance(response.data));
      setShowSelecter(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleVoiceChange = (event) => {
    setSelectedVoice(event.target.value);
  };

  return (
    <>
      <div className="digits-delight-voice-selection-container" style={{ marginBottom: '-25px' }}>
        <select
          className={`digits-voice-select ${showSelecter ? 'opacity-1' : 'opacity-0'}`}
          placeholder="Select the voices"
          value={selectedVoice}
          onChange={handleVoiceChange}
        >
          {window.speechSynthesis.getVoices().map((voice) => (
            <option key={voice.name} value={voice.name}>
              {voice.name}
            </option>
          ))}
        </select>
      </div>

      <div className="digits-category-facts">
        {fact && <p className="get-digits-facts">{fact}</p>}
      </div>
      <div>
        <ul className="thumb">
          <li>
            <button
              className="randomButton tooltip math"
              tooltip-text="Random Math Facts"
              onClick={() => getFact('math')}
            >
              <img src={Math} />
            </button>
          </li>
          <li>
            <button
              className="randomButton tooltip date"
              tooltip-text="Facts By Date"
              onClick={() => getFact('date')}
            >
              <img src={Date} />
            </button>
          </li>
          <li>
            <button
              className="randomButton tooltip year"
              tooltip-text="Facts By Year"
              onClick={() => getFact('year')}
            >
              <img src={Year} />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default CategoryFact;
