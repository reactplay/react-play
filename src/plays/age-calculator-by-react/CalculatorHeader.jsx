import CalculatorHeader from './CalculatorHeader';

import AgeInput from './AgeInput';

import AgeOutput from './AgeOutput';

import useAgeCalculator from './useAgeCalculator';

const Calculator = () => {
  const { message, day, daysInMonth, year, change, reset, onSubmit } = useAgeCalculator();

  return (
    <div className="container">
      <CalculatorHeader onReset={reset} />
      <AgeInput onChange={change} onSubmit={onSubmit} />
      <AgeOutput day={day} month={daysInMonth} year={year} />
      <p id="message">{message}</p>
    </div>
  );
};

export default Calculator;
