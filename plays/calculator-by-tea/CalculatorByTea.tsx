import React from 'react';
import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import { calculatorValues } from './CalculatorByTeaButtons';
import useCalcalulatorByTeaHook from './useCalcalulatorByTeaHook';

function CalculatorByTea(props: any) {
  const {
    calculationExpression,
    calculationHistory,
    onInputRecived,
    buttonClasses,
    handleButtonClick
  } = useCalcalulatorByTeaHook();

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="calculatorByTea__calculator">
            <div className="calculatorByTea__calculator-body">
              <div className="calculatorByTea__calculator-display-block">
                {calculationHistory.map((expression) => {
                  return <p className="calculatorByTea__calculator-history-text">{expression}</p>;
                })}
                <input
                  className="calculatorByTea__calculator-input-box"
                  type="text"
                  value={calculationExpression}
                  onChange={(e) => {
                    onInputRecived(e.target.value);
                  }}
                />
              </div>
              <div className="calculatorByTea__calculator-input-block">
                <div className="calculatorByTea__calculator-value-block">
                  {calculatorValues.map((value) => {
                    return (
                      <button
                        className={`calculatorByTea__calculator-button ${buttonClasses(
                          value.type
                        )}`}
                        key={value.data}
                        onClick={() => {
                          handleButtonClick(value);
                        }}
                      >
                        {value.data}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Your Code Ends Here */}
      </div>
    </>
  );
}

export default CalculatorByTea;
