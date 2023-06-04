import Header from './Header';
import Input from './Input';
import Output from './Output';
import useAge from './useAge';

const Calculator = () => {
  const { message, day, month, year, change, reset, onSubmit } = useAge();

  return (
    <div className="container">
      <Header onReset={reset} />
      <Input onChange={change} onSubmit={onSubmit} />
      <Output day={day} month={month} year={year} />
      <p id="message">{message}</p>
    </div>
  );
};

export default Calculator;
