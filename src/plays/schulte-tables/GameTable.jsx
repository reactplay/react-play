import { useEffect, useState } from 'react';
import shuffle from './utils/shuffleArray';
import SchulteTable from './components/SchulteTable';
import timeFormatter from './utils/timeFormatter';

const GameTable = () => {
  const [data, setData] = useState(shuffle());
  const [start, setStart] = useState(false);
  const [nextNumber, setNextNumber] = useState(1);
  const [result, setResult] = useState(null);

  const restart = () => {
    setResult(null);
    setNextNumber(1);
    setStart(true);
  };

  useEffect(() => {
    const shuffledData = shuffle();
    setData(shuffledData);
  }, [nextNumber]);

  return (
    <main>
      <h1 className="game-title mb-3">Schulte Table</h1>
      {start && !result ? (
        <SchulteTable
          data={data}
          nextNumber={nextNumber}
          setNextNumber={setNextNumber}
          setResult={setResult}
          setStart={setStart}
          start={start}
        />
      ) : (
        <section className="center col">
          {!result && (
            <>
              <button className="start-btn" onClick={() => setStart(true)}>
                start
              </button>
              <p className="description">
                Schulte tables are tables with randomly arranged characters, usually numbers used to
                check and develop the speed of their visual search in a specific order. These tables
                were originally developed by the German psychotherapist Walter Schulte as a
                psychodiagnostic test for studying the properties of attention.
              </p>
            </>
          )}
        </section>
      )}
      {result && (
        <section className="result-section">
          <h1>Completed in {timeFormatter(result)}</h1>
          <br />
          <button className="start-btn" onClick={restart}>
            Restart
          </button>
          <p className="description">
            Schulte tables are tables with randomly arranged characters, usually numbers used to
            check and develop the speed of their visual search in a specific order. These tables
            were originally developed by the German psychotherapist Walter Schulte as a
            psychodiagnostic test for studying the properties of attention.
          </p>
        </section>
      )}
    </main>
  );
};

export default GameTable;
