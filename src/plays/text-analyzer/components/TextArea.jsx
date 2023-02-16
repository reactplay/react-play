import React, { useContext } from 'react';
import TextContext from '../context/playContext';
import '../styles.css';

const TextArea = () => {
  const { value, setvalue} = useContext(TextContext);
  const ontextchange = (e) => {
    setvalue(e.target.value);
  };

  console.log(value);
  return (
    <div>
      <textarea name="" id="" cols="55" rows="25" value={value} onChange={ontextchange} />
    </div>
  );
};

export default TextArea;
