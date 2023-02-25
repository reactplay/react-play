import PlayHeader from 'common/playlists/PlayHeader';
import { useState } from 'react';
import './PlayDictionary.css';
import { BiSearch } from 'react-icons/bi';
import * as C from './ThemeConstant.js';

// WARNING: Do not change the entry componenet name
function PlayDictionary(props) {
  // Your Code Start below.
  const [searchInput, setSearchInput] = useState('');
  const [isWordFound, setIsWordFound] = useState(false);
  const [foundMeaning, setFoundMeaning] = useState({});
  const [notFoundReponse, setNotFoundResponse] = useState({});

  const getWordMeaning = async () => {
    if (searchInput) {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`
      );
      const json = await response.json();

      if (response.status === 404) {
        setIsWordFound(false);
        setNotFoundResponse(json);
      } else if (response.status === 200) {
        setIsWordFound(true);
        setFoundMeaning(json[0]);
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
                <div className="word-display">
                  <p>{foundMeaning.word}</p>
                  <span style={{ color: C.purple }}>{foundMeaning.phonetic}</span>
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
