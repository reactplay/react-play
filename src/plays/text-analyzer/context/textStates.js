import { useState } from 'react';
import TextContext from './playContext';

const TextState = ({ children }) => {
  const [value, setvalue] = useState();
  const [check, setcheck] = useState(false)

  return <TextContext.Provider value={{ value, setvalue  , check}}>{children}</TextContext.Provider>;
};

export { TextState };
