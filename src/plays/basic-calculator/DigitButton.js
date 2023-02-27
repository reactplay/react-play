import { ACTION } from './BasicCalculator';

export default function DigitButton({ dispatch, digit }) {
  return (
    <button onClick={() => dispatch({ type: ACTION.ADD_DIGIT, payload: { digit } })}>
      {digit}
    </button>
  );
}
