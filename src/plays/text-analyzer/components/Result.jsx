import React, { useContext } from 'react';
import TextContext from '../context/playContext';
import '../styles.css';

const Result = () => {
  const { result, TextfromImage } = useContext(TextContext);
  return (
    <div className="result-cont">
      {result || TextfromImage ? (
        <>
          <div>{/* {result} */}</div>
        </>
      ) : (
        <>
          <div></div>
        </>
      )}
    </div>
  );
};

export default Result;
