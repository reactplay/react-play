import { useState } from 'react';
import { ICalculatorValue, valueTypes } from './CalaculatorByTeaInterface';

const useCalcalulatorByTeaHook = () => {
  const [calculationExpression, setCalculationExpression] = useState<string>('');
  const [calculationHistory, setCalculationHistory] = useState<string[]>([]);

  function handleButtonClick(value: ICalculatorValue) {
    switch (value.type) {
      case 'NUMBER':
      case 'OPERATOR':
        onNumberButtonClick(value.data);

        break;

      case 'ACTION':
        onActionButtonClick(value.data);

        break;
    }
  }

  const onNumberButtonClick = (num: string) => {
    setCalculationExpression((prev) => {
      return prev + num;
    });
  };

  function onActionButtonClick(action: string) {
    if (action === 'AC') {
      setCalculationHistory([]);
      setCalculationExpression('');
    } else if (action === '=') {
      setCalculationExpression((prevExpression) => {
        setCalculationHistory((prevHistory) => {
          if (prevHistory) prevHistory.push(prevExpression);

          return prevHistory;
        });

        return String(eval(prevExpression.replace('%', '*100/')));
      });
    } else if (action === 'C') {
      setCalculationExpression((prev) => {
        return prev.slice(0, -1);
      });
    }
  }

  function buttonClasses(type: valueTypes) {
    switch (type) {
      case 'NUMBER':
        return;
      case 'OPERATOR':
        return 'calculatorByTea__calculator-operator-button';
      case 'ACTION':
        return 'calculatorByTea__calculator-result-button';
    }
  }

  function onInputRecived(expression: string) {
    if (expression.match(/^(?:[0-9]+[-+*/]?)*[0-9]*$/)) {
      setCalculationExpression(expression);
    }
  }

  return {
    calculationExpression,
    calculationHistory,
    onInputRecived,
    buttonClasses,
    handleButtonClick
  };
};

export default useCalcalulatorByTeaHook;
