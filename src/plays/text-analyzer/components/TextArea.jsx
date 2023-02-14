import React, { useContext } from 'react';
import TextContext from '../context/playContext';

const TextArea = () => {
  const { value, setvalue  , check } = useContext(TextContext);
  const ontextchange = (e) => {
    setvalue(e.target.value);
  };

  console.log(value , check);
  return (
    <div>
      <textarea name="" id="" cols="30" rows="10" value={value} onChange={ontextchange}></textarea>
    </div>
  );
};

export default TextArea;
