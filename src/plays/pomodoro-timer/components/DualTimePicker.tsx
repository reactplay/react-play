import React from 'react';

interface Props {
  minutes: number;
  seconds: number;
  onChange: (minutes: number, seconds: number) => void;
}

const DualTimePicker: React.FC<Props> = ({ minutes, seconds, onChange }) => {
  const wrap = (value: number, max: number) => {
    if (value < 0) return max;
    if (value > max) return 0;

    return value;
  };

  const changeMinutes = (delta: number) => {
    const newMinutes = wrap(minutes + delta, 59);
    onChange(newMinutes, seconds);
  };

  const changeSeconds = (delta: number) => {
    const newSeconds = wrap(seconds + delta, 59);
    onChange(minutes, newSeconds);
  };

  const Wheel = ({ value, onChangeFn }: { value: number; onChangeFn: (delta: number) => void }) => {
    const prev = wrap(value - 1, 59);
    const next = wrap(value + 1, 59);

    return (
      <div className="wheel">
        <div className="wheel-item faded" onClick={() => onChangeFn(-1)}>
          {String(prev).padStart(2, '0')}
        </div>

        <div className="wheel-item active">{String(value).padStart(2, '0')}</div>

        <div className="wheel-item faded" onClick={() => onChangeFn(1)}>
          {String(next).padStart(2, '0')}
        </div>
      </div>
    );
  };

  return (
    <div className="dual-picker">
      <Wheel value={minutes} onChangeFn={changeMinutes} />

      <div className="separator">:</div>

      <Wheel value={seconds} onChangeFn={changeSeconds} />
    </div>
  );
};

export default DualTimePicker;
