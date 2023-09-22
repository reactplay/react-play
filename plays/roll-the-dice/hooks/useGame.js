import { useContext } from 'react';
import { diceContext } from '../context/diceContext';

// Custom hooks for get all the context states and actions
export const useGame = () => {
  return useContext(diceContext);
};
