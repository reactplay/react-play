import React, { useState } from 'react';
import axios from 'axios';
import MathImage from '../components/images/math.png';
import YearImage from '../components/images/year.png';
import DateImage from '../components/images/date.png';
import { CategoryFacts } from './DigitsDelightsConstant';
import './Categoryfact.css';

function CategoryFact() {
  const [fact, setFact] = useState(CategoryFacts);
  const [error, setError] = useState('');
  const [selectedVoice, setSelectedVoice] = useState('Zira');
  const [showSelecter, setShowSelecter] = useState(false);
  const speechHandler = (msg) => {
    let voices = [];
    window.speechSynthesis.onvoiceschanged = () => {
      voices = window.speechSynthesis.getVoices();
    };
    // This for loop helps to give the selected voice
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedVoice) {
        msg.voice = voices[i];
      }
    }
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(msg);
  };

  const getFact = async (type) => {
    const options = {
      method: 'GET',
      url: `https://numbersapi.p.rapidapi.com/random/${type}`,
      params: { fragment: 'true', json: 'true' },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_DIGITSDELIGHT_APIKEY,
        'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
      }
    };
    try {
      const { data } = await axios.request(options);
      setFact(data.number + ' is ' + data.text);
      speechHandler(new SpeechSynthesisUtterance(data.number + ' is ' + data.text));
      setShowSelecter(true);
    } catch (error) {
      setError('Error fetching fact. Please try again later.');
    }
  };

  const handleVoiceChange = ({ target }) => setSelectedVoice(target.value);

  return (
    <div>
      <div className="digits-delight-voice-selection-container" style={{ marginTop: '2px' }}>
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
              <img src={MathImage} />
            </button>
          </li>
          <li>
            <button
              className="randomButton tooltip date"
              tooltip-text="Facts By Date"
              onClick={() => getFact('date')}
            >
              <img src={DateImage} />
            </button>
          </li>
          <li>
            <button
              className="randomButton tooltip year"
              tooltip-text="Facts By Year"
              onClick={() => getFact('year')}
            >
              <img src={YearImage} />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CategoryFact;
