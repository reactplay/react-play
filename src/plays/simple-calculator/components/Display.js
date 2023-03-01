import React from 'react';
import '../styles/Display.css';

const Display = ({ input, setInput, answer }) => {
  const onChangeTagInput = (event) => {
    const change = /^[!%(-+\x2D-9^glox\xF7\u221A]+$/;

    if (event.target.value === '' || change.test(event.target.value)) {
      setInput(event.target.value);
    }
  };

  return (
    <>
      <div className="suri-calc-display">
        {answer === '' ? (
          <>
            <input
              autoComplete="off"
              className="suri-calc-input"
              maxLength={12}
              name="input"
              placeholder="0"
              style={{ padding: '29px' }}
              type="text"
              value={input}
              // disabled
              onChange={onChangeTagInput}
            />
          </>
        ) : (
          <>
            <input
              disabled
              className="suri-calc-value"
              maxLength={12}
              name="input"
              placeholder="0"
              type="text"
              value={input}
            />
            <input disabled className="suri-calc-input" name="value" type="text" value={answer} />
          </>
        )}
      </div>
    </>
  );
};

export default Display;
