import React, { useState, useEffect, useRef } from 'react';
import { FaVolumeUp, FaStop } from 'react-icons/fa';
import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';

// WARNING: Do not change the entry component name
function TextToSpeech(props) {
  const [inputText, setInputText] = useState('');
  const [convertedText, setConvertedText] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
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
    utterance.rate = 1;
    utterance.pitch = 1;

    utterance.onend = () => setIsSpeaking(false);

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const handleConvert = () => {
    stopSpeech();
    setConvertedText(inputText.trim());
  };

  // stop on unmount / tab close
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
          {/* Your Code Starts Here */}
          <div className="tts-wrapper">
            {/* Left side: textarea + button */}
            <div className="tts-input-box">
              <textarea
                className="tts-textarea"
                placeholder="Type something here..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <button className="tts-convert-btn" onClick={handleConvert}>
                Convert
              </button>
            </div>

            {/* Right side: converted text + speaker */}
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
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default TextToSpeech;
