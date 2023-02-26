import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import { useReducer } from "react";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";

export const ACTION = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate"
}
function reducer(state, { type, payload }) {
  switch (type) {
    case ACTION.ADD_DIGIT:
      if(state.overwrite){ // this will help not to manupulate the result, rather new digit will be printed if typed
        return{
          ...state,
          currentOperand: payload.digit,
          overwrite: false
        }
      }
      if (payload.digit === "0" && state.currentOperand === "0") return state;
      if (payload.digit === "." && state.currentOperand.includes(".")) return state;

      return {
        ...state, currentOperand: `${state.currentOperand || ""}${payload.digit}`
      }

    case ACTION.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }
      if(state.currentOperand == null){
        return {
          ...state,
          operation: payload.operation
        }
      }
      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        }
      }
      // return{
      //   ...state, currentOperand: `${state.currentOperand || ""}${payload.operation}`
      // }
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null
      }

    case ACTION.CLEAR: return {};
    
    case ACTION.DELETE_DIGIT:
      if(state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null
        }
      }
      if(state.currentOperand == null) return state;
      if(state.currentOperand.length === 1){
        return{
          ...state,
          currentOperand: null
        }
      }
      return{
        ...state,
        currentOperand: state.currentOperand.slice(0,-1)
      }

    case ACTION.EVALUATE :
      if(state.operation == null || state.currentOperand == null || state.previousOperand == null){
        return state;
      }
      return {
        ...state,
        overwrite: true, 
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state)
      }
  }
}

function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return "";
  let computation = "";
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-" :
      computation = prev - current;
      break;
    case "*" :
      computation = prev * current;
      break;
    case "÷" :
      computation = prev / current;
      break;
  }
  return computation.toString();
}

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us",{
  maximumFractionDigits: 0,
})

function formatOperand(operand){ 
  if(operand == null) return;
  const[integer,decimal] = operand.split(".");
  if(decimal == null) return INTEGER_FORMATTER.format(integer);
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
}

// WARNING: Do not change the entry componenet name
function BasicCalculator(props) {

  // Your Code Start below.
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {})

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
        {/* Your Code Starts Here */}
        <div className="outer_container">
        <div className="calculator_grid">
      <div className="output">
        <div className="previous_operand">{formatOperand(previousOperand)} {operation}</div>
        <div className="current_operand">{formatOperand(currentOperand)}</div>
      </div>
      <button className="span_two ac" onClick={() => dispatch({ type: ACTION.CLEAR })}>AC</button>

      <button  onClick={() => dispatch({ type: ACTION.DELETE_DIGIT })}>DEL</button>
      <OperationButton operation="÷" dispatch={dispatch} />

      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />

      <OperationButton operation="*" dispatch={dispatch} />

      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />

      <OperationButton operation="+" dispatch={dispatch} />

      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />

      <OperationButton operation="-" dispatch={dispatch} />

      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />

      <button className="span_two" onClick={() => dispatch({ type: ACTION.EVALUATE })}>=</button>
    </div>
    </div>
        {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default BasicCalculator;