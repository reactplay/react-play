import React, { useContext } from 'react';
import TextContext from '../context/playContext';
import '../styles/styles.css';
import Entities from './results/Entities';
import Paraphaser from './results/Paraphaser';
import Sentiments from './results/Sentiments';
import TextImage from './results/TextImage';
import Spinner from '../components/Spinner';

const Result = () => {
  const { TextfromImage, resultEntities, resultSentiments, resultparaphraser, loading } =
    useContext(TextContext);

  return (
    <>
      {resultEntities || TextfromImage || resultSentiments || resultparaphraser ? (
        <>
          <div className="result-cont">
            <div>
              <h1>Result</h1>
            </div>
            {loading ? (
              <div>
                <Spinner />
              </div>
            ) : (
              <div>
                {resultEntities && <Entities resultEntities={resultEntities} />}
                {resultparaphraser && <Paraphaser resultparaphraser={resultparaphraser} />}
                {resultSentiments && <Sentiments resultSentiments={resultSentiments} />}
                {TextfromImage && <TextImage TextfromImage={TextfromImage} />}
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div />
        </>
      )}
    </>
  );
};

export default Result;
