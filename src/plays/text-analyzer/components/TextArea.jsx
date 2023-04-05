import React, { useContext } from 'react';
import TextContext from '../context/playContext';
import '../styles/styles.css';

const TextArea = () => {
  const { value, setvalue } = useContext(TextContext);
  const ontextchange = (e) => {
    setvalue(e.target.value);
  };

  return (
    <div>
      <textarea cols="55" id="" name="" rows="25" value={value} onChange={ontextchange} />
    </div>
  );
};

export default TextArea;
