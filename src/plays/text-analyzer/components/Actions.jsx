import React, { useContext } from 'react';
import CustomButton from './CustomButton';
import '../styles.css';
import { getEntities, getSentiments, getSpellcheck } from '../requests/ApiRequests';
import TextContext from '../context/playContext';

const Actions = () => {
  const { value } = useContext(TextContext);
  return (
    <div>
      <button className="button-58" onClick={() => getSentiments(value)}>
        {' '}
        Sentiment{' '}
      </button>
      <button className="button-58" onClick={() => getEntities(value)}>
        Entities
      </button>
      <button className="button-58" onClick={() => getSpellcheck(value)}>
        Spell check
      </button>
    </div>
  );
};

export default Actions;
