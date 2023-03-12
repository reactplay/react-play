import React from 'react';
import { CSSProperties } from 'react';

export default function WordleTile(props: {
  correct: boolean;
  index: number;
  roll: boolean;
  style: string;
  tile: string;
}) {
  const { correct, index, roll, style, tile } = props;
  const inlineStyle = { '--index': `${index}s`, '--color': style } as CSSProperties;

  return (
    <div
      className={
        'wordle-tile h-full relative text-4xl font-medium font-wordle ' +
        'flex items-center justify-center flex-1 ' +
        (correct ? 'jump bg-correct border-correct ' : '') +
        (roll ? 'roll-tile ' : '') +
        (tile ? 'filled ' : '')
      }
      style={inlineStyle}
    >
      {tile}
    </div>
  );
}
