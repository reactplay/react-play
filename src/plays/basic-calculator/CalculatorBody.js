import { ACTION } from './BasicCalculator';
import DigitButton from './DigitButton';
import OperationButton from './OperationButton';

export default function CalculatorBody({
  currentOperand,
  previousOperand,
  operation,
  dispatch,
  formatOperand
}) {
  return (
    <div className="calculator_grid_container">
      <div className="calculator_grid">
        <div className="output">
          <div className="previous_operand">
            {formatOperand(previousOperand)} {operation}
          </div>
          <div className="current_operand">{formatOperand(currentOperand)}</div>
        </div>
        <button className="span_two ac" onClick={() => dispatch({ type: ACTION.CLEAR })}>
          AC
        </button>

        <button onClick={() => dispatch({ type: ACTION.DELETE_DIGIT })}>DEL</button>
        <OperationButton dispatch={dispatch} operation="÷" />

        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />

        <OperationButton dispatch={dispatch} operation="*" />

        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />

        <OperationButton dispatch={dispatch} operation="+" />

        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />

        <OperationButton dispatch={dispatch} operation="-" />

        <DigitButton digit="." dispatch={dispatch} />
        <DigitButton digit="0" dispatch={dispatch} />

        <button className="span_two" onClick={() => dispatch({ type: ACTION.EVALUATE })}>
          =
        </button>
      </div>
    </div>
  );
}
