import React, { useState, useEffect, useRef } from 'react';
import { FaVolumeUp, FaStop } from 'react-icons/fa';
import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';

function TextToSpeech(props) {
  const [inputText, setInputText] = useState('');
  const [convertedText, setConvertedText] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const utteranceRef = useRef(null);

  const stopSpeech = () => {
    if (window.speechSynthesis.speaking || window.speechSynthesis.paused) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const handleSpeak = () => {
    if (isSpeaking) {
      stopSpeech();

      return;
    }
    if (!convertedText.trim()) return;

    const utterance = new SpeechSynthesisUtterance(convertedText);
    utterance.lang = 'en-US';
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.onend = () => setIsSpeaking(false);

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const handleConvert = () => {
    stopSpeech();
    setConvertedText(inputText.trim());
  };

  useEffect(() => {
    const handleBeforeUnload = () => stopSpeech();
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      stopSpeech();
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          <div className="tts-wrapper">
            {/* Left side */}
            <div className="tts-input-box">
              <textarea
                className="tts-textarea"
                placeholder="Type something here..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <div className="tts-sliders">
                <div>
                  <label>Rate: {rate.toFixed(1)}</label>
                  <input
                    max="2"
                    min="0.5"
                    step="0.1"
                    type="range"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                  />
                </div>
                <div>
                  <label>Pitch: {pitch.toFixed(1)}</label>
                  <input
                    max="2"
                    min="0"
                    step="0.1"
                    type="range"
                    value={pitch}
                    onChange={(e) => setPitch(Number(e.target.value))}
                  />
                </div>
              </div>
              <button className="tts-convert-btn" onClick={handleConvert}>
                Convert
              </button>
            </div>

            {/* Right side */}
            <div className="tts-output-box">
              {convertedText ? (
                <>
                  <p className="tts-output-text">{convertedText}</p>
                  <button className="tts-speaker-btn" onClick={handleSpeak}>
                    {isSpeaking ? <FaStop size={28} /> : <FaVolumeUp size={28} />}
                  </button>
                </>
              ) : (
                <p className="tts-placeholder">Converted text will appear here...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextToSpeech;
