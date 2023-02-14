import { useState } from 'react';
import TextContext from './playContext';

const TextState = ({ children }) => {
  const [value, setvalue] = useState();

  return <TextContext.Provider value={{ value, setvalue }}>{children}</TextContext.Provider>;
};

export { TextState };
