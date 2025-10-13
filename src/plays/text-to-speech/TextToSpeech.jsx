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
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [convertClick, setConvertClick] = useState(0);
  const [opened, setOpened] = useState(false);

  const utteranceRef = useRef(null);

  const stopSpeech = () => {
    if (window.speechSynthesis.speaking || window.speechSynthesis.paused) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  useEffect(() => {
    setConvertedText(
      'Hello there! This feature is powered by the Web Speech API, built by Ritesh. Try generating a few audios to unlock a secret. You can play with rate, pitch, and voice settings. Enjoy experimenting!'
    );
    setInputText(
      'Hello there! This feature is powered by the Web Speech API, built by Ritesh. Try generating a few audios to unlock a secret. You can play with rate, pitch, and voice settings. Enjoy experimenting!'
    );
  }, []);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      if (!selectedVoice && availableVoices.length > 0) {
        setSelectedVoice(availableVoices[0].name);
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, [selectedVoice]);

  useEffect(() => {
    if (convertClick > 4 && !opened) {
      window.open('https://riteshjs.vercel.app/', '_blank');
      setOpened(true);
    }
  }, [convertClick, opened]);

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

    const voice = voices.find((v) => v.name === selectedVoice);
    if (voice) utterance.voice = voice;

    utterance.onend = () => setIsSpeaking(false);
    utteranceRef.current = utterance;

    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const handleConvert = () => {
    stopSpeech();
    if (!inputText.trim()) return;
    setConvertedText(inputText.trim());
    setConvertClick((prev) => prev + 1);
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

              {/* Voice Selector */}
              <div className="tts-voice-selector">
                <label>
                  Voice:{' '}
                  <select
                    value={selectedVoice || ''}
                    onChange={(e) => setSelectedVoice(e.target.value)}
                  >
                    {voices.map((voice, idx) => (
                      <option key={idx} value={voice.name}>
                        {voice.name} {voice.lang ? `(${voice.lang})` : ''}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <button className="tts-convert-btn" onClick={handleConvert}>
                Convert
              </button>
            </div>

            {/* Right side */}
            <div className="tts-output-box">
              {convertedText ? (
                <>
                  <p
                    className="tts-output-text"
                    dangerouslySetInnerHTML={{ __html: convertedText }}
                  />

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
