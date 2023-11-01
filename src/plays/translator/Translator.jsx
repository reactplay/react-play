import React, { useState, useEffect } from 'react';
import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import languageData from './langs'; // Update the path as needed

function Translator(props) {
  const [inputValue, setInputValue] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('en'); // Default to English
  const [targetLanguage, setTargetLanguage] = useState('id'); // Default to Indonesian
  const [error, setError] = useState(null);

  const translateText = async (e) => {
    e.preventDefault();
    const url = 'https://text-translator2.p.rapidapi.com/translate';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '8f85fc424amsh533f95edb1d7c01p1d743ajsndc348a523195',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
      },
      body: new URLSearchParams({
        source_language: sourceLanguage,
        target_language: targetLanguage,
        text: inputValue
      })
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const { status } = result;
      setTranslatedText(result.data.translatedText);
      setError(null); // Clear any previous error
    } catch (error) {
      setError('Some error occurred');
      console.error(error);
    }
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          <div className="translator-container">
            <div className="to-be-translated">
              <div className="language-selectors">
                <label>select Language:</label>
                <select value={sourceLanguage} onChange={(e) => setSourceLanguage(e.target.value)}>
                  {languageData.languages.map((language) => (
                    <option key={language.code} value={language.code}>
                      {language.name}
                    </option>
                  ))}
                </select>
              </div>

              <input
                className="translator-input"
                placeholder="Enter text to translate"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
            <div className="translate-button">
              <button onClick={translateText}>Translate</button>
            </div>
            <div className="translated-lang">
              <label>Select Language:</label>
              <select value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)}>
                {languageData.languages.map((language) => (
                  <option key={language.code} value={language.code}>
                    {language.name}
                  </option>
                ))}
              </select>
              {error && <p className="error-message">{error}</p>}
              <div className="translated-text">{translatedText}</div>
              <p className="result-text">Translated Text</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Translator;
