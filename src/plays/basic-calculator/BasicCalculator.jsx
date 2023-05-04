import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import { useReducer } from 'react';
import CalculatorBody from './CalculatorBody';

export const ACTION = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTION.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false
        };
      }
      if (payload.digit === '0' && state.currentOperand === '0') return state;
      if (payload.digit === '.' && state.currentOperand.includes('.')) return state;

      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${payload.digit}`
      };

    case ACTION.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }
      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation
        };
      }
      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null
        };
      }

      // return{
      //   ...state, currentOperand: `${state.currentOperand || ""}${payload.operation}`
      // }
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null
      };

    case ACTION.CLEAR:
      return {};

    case ACTION.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null
        };
      }
      if (state.currentOperand == null) return state;
      if (state.currentOperand.length === 1) {
        return {
          ...state,
          currentOperand: null
        };
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1)
      };

    case ACTION.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state;
      }

      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state)
      };
  }
}

function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return '';
  let computation = '';
  switch (operation) {
    case '+':
      computation = prev + current;

      break;
    case '-':
      computation = prev - current;

      break;
    case '*':
      computation = prev * current;

      break;
    case '÷':
      computation = prev / current;

      break;
  }

  return computation.toString();
}

const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
  maximumFractionDigits: 0
});

function formatOperand(operand) {
  if (operand == null) return;
  const [integer, decimal] = operand.split('.');
  if (decimal == null) return INTEGER_FORMATTER.format(integer);

  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
}

// WARNING: Do not change the entry componenet name
function BasicCalculator(props) {
  // Your Code Start below.
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {});

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <CalculatorBody
            currentOperand={currentOperand}
            dispatch={dispatch}
            formatOperand={formatOperand}
            operation={operation}
            previousOperand={previousOperand}
          />
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default BasicCalculator;
