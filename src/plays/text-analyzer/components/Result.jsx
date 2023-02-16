import React, { useContext } from 'react';
import TextContext from '../context/playContext';
import '../styles.css';
import Entities from './results/Entities';
import Paraphaser from './results/Paraphaser';
import Sentiments from './results/Sentiments';
import TextImage from './results/TextImage';

const Result = () => {
  const { TextfromImage, resultEntities, resultSentiments, resultparaphraser } =
    useContext(TextContext);
  return (

    <>
      {resultEntities || TextfromImage || resultSentiments || resultparaphraser ? (
        <>
          <div className='result-cont'>
            {resultEntities && <Entities resultEntities={resultEntities} />}
            {resultparaphraser && <Paraphaser resultparaphraser={resultparaphraser} />}
            {resultSentiments && <Sentiments resultSentiments={resultSentiments} />}
            {TextfromImage && <TextImage TextfromImage={TextfromImage} />}
          </div>
        </>
      ) : (
        <>
          <div></div>
        </>
      )}
    </>
  );
};

export default Result;
