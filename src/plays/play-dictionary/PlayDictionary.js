import PlayHeader from 'common/playlists/PlayHeader';
import { useState, useRef, useEffect } from 'react';
import './PlayDictionary.css';
import { BiSearch } from 'react-icons/bi';
import { BsFillPlayFill } from 'react-icons/bs';
import * as C from './ThemeConstant.js';

// WARNING: Do not change the entry componenet name
function PlayDictionary(props) {
  // Your Code Start below.
  const audioControlRef = useRef(null);
  const [searchInput, setSearchInput] = useState('');
  const [isWordFound, setIsWordFound] = useState(false);
  const [foundMeaning, setFoundMeaning] = useState({});
  const [notFoundReponse, setNotFoundResponse] = useState({});
  const [audioSource, setAudioSource] = useState('');

  const getAudioSource = (data) => {
    setAudioSource('');
    data.forEach((item) => {
      if (item.audio) {
        setAudioSource(item.audio);
        audioControlRef?.current?.load();
      }
    });
  };

  const getWordMeaning = async () => {
    if (searchInput) {
      let response, json;
      try {
        response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`);
        json = await response.json();
        setIsWordFound(true);
        setFoundMeaning(json[0]);
        getAudioSource(json[0].phonetics);
      } catch (e) {
        setIsWordFound(false);
        setNotFoundResponse(json);
      }
    }
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="main-container">
          {/* ---- Input part of the play --------- */}
          <div className="container-input">
            <input
              className="input-dictionary"
              placeholder="Enter Word to search Meaning"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="search-icon-btn" onClick={getWordMeaning}>
              <BiSearch className="search-icon" color={C.purple} size="24px" />
            </button>
          </div>
          {/* ------------------------------- OUTPUT PART --------------------------------- */}
          <div className="container-output">
            {isWordFound ? (
              <div className="meaning-found">
                <div className="word-details">
                  <div className="word-display">
                    <p>{foundMeaning.word}</p>
                    <span style={{ color: C.purple }}>{foundMeaning.phonetic}</span>
                  </div>
                  {audioSource && (
                    <div className="pronunciation">
                      <audio controls ref={audioControlRef} style={{ display: 'none' }}>
                        <source src={audioSource} type="audio/mpeg" />
                      </audio>
                      <button onClick={() => audioControlRef?.current.play()}>
                        <BsFillPlayFill color="white" size="30px" />
                      </button>
                    </div>
                  )}
                </div>
                <div className="meanings-display">
                  {foundMeaning.meanings.map(
                    ({ partOfSpeech, definitions, antonyms, synonyms }, index) => (
                      <Meaning
                        antonyms={antonyms}
                        definitions={definitions}
                        key={index}
                        partOfSpeech={partOfSpeech}
                        synonyms={synonyms}
                      />
                    )
                  )}
                </div>
              </div>
            ) : (
              <div className="meaning-not-found">
                <p>{notFoundReponse.message && notFoundReponse.message}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const Meaning = ({ partOfSpeech, definitions, synonyms, antonyms }) => {
  return (
    <div className="meaning">
      <div className="partOfSpeech">
        <span>{partOfSpeech}</span>
      </div>
      <span style={{ fontSize: '20px' }}>Meaning</span>
      <div className="definitions">
        <ul>
          {definitions?.map((definition, index) => (
            <li key={index}>
              <span>{definition.definition}</span>
            </li>
          ))}
        </ul>
      </div>
      {synonyms.length > 0 && (
        <div className="synonyms">
          <span>Synonyms:</span>
          <span style={{ color: C.purple, fontSize: '18px', fontWeight: '600' }}>
            {synonyms[0]}
          </span>
        </div>
      )}
      {antonyms.length > 0 && (
        <div className="antonyms">
          <span>Antonyms:</span>
          <span style={{ color: C.purple, fontSize: '18px', fontWeight: '600' }}>
            {antonyms[0]}
          </span>
        </div>
      )}
    </div>
  );
};

export default PlayDictionary;
