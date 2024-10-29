import PlayHeader from 'common/playlists/PlayHeader';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DictionaryContainer from './DictionaryContainer';

// WARNING: Do not change the entry componenet name
function Dictionary(props) {
  const [word, setWord] = useState('');
  const [dicData, setDicData] = useState([]);

  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  // const { data, loading, error } = useFetch(DIC_API_URI);
  // setDicData(data);

  const handleClick = () => {
    axios.get(url).then((res) => setDicData(res.data));
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="flex flex-col w-full justify-center items-center mt-5 gap-4">
          <span className="w-fit">
            <label htmlFor="dic-input">Enter the word: </label>
            <input
              className="border-blue-600 rounded-md border-2 px-2 py-1"
              id="dic-input"
              type="text"
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
          </span>
          <button className="rounded-md bg-blue-500 text-white p-3" onClick={handleClick}>
            Find Definition
          </button>

          {dicData.length > 0 && <DictionaryContainer data={dicData} />}
        </div>
      </div>
    </>
  );
}

export default Dictionary;
