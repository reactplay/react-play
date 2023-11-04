import Button from './Button';
import Timer from './Timer';

const SchulteTable = ({ nextNumber, setNextNumber, data, setStart, start, setResult }) => {
  const handleClick = (value) => {
    if (value === nextNumber) {
      setNextNumber((p) => p + 1);
    }
  };

  return (
    <section>
      <div className="flex">
        <h1>
          Time:{' '}
          <Timer nextNumber={nextNumber} setResult={setResult} setStart={setStart} start={start} />
        </h1>
        <h1>Next: {nextNumber}</h1>
      </div>
      <div className="center col">
        <div className="table">
          {data.map((value, i) => (
            <Button handleClick={handleClick} key={i} value={value} />
          ))}
        </div>
        <p className="hints">Hints: Click on box which contains the "Next" number!</p>
      </div>
    </section>
  );
};

export default SchulteTable;
