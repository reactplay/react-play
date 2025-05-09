import React from 'react';
import { AiFillSound } from 'react-icons/ai';

const handlePronunciation = (data) => {
  const audioUrl = data[0]['phonetics'][0]['audio'];
  const audio = new Audio(audioUrl);

  audio.play();
};

const DictionaryContainer = ({ data }) => {
  return (
    <div>
      <span className="flex items-center gap-2">
        <h1 className="font-bold text-lg text-blue-300">{data[0]['word'].toUpperCase()}</h1>
        <AiFillSound
          className="hover:cursor-pointer text-blue-300"
          onClick={() => handlePronunciation(data)}
        />
      </span>
      {data[0]['meanings'].map((item) => {
        return (
          <div className="bg-blue-200 p-3 rounded-md mt-2 mb-2" key={item}>
            <h2 className="text-gray-500 font-bold">{item['partOfSpeech']}</h2>
            {item['definitions'].map((defn, index) => {
              return (
                <div>
                  <p key={index}>: {defn['definition']}</p>
                </div>
              );
            })}
            <h2>Synonyms: </h2>
            {item['synonyms'] &&
              item['synonyms'].map((syn) => {
                return (
                  <span className="mx-2" key={syn}>
                    {syn}
                  </span>
                );
              })}
            <h2>Antonyms: </h2>
            {item['antonyms'] &&
              item['antonyms'].map((ant) => {
                return (
                  <span className="mx-2" key={ant}>
                    {ant}
                  </span>
                );
              })}
          </div>
        );
      })}
    </div>
  );
};

export default DictionaryContainer;
