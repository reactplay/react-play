import React from 'react';
import { CSSProperties, useRef, MutableRefObject, useEffect } from 'react';
import { seconds } from '../utils';

export default function WordleTile(props: {
  correct: boolean;
  guessed: boolean;
  index: number;
  roll: boolean;
  style: string;
  tile: string;
}) {
  const { correct, guessed, index, roll, style, tile } = props;
  const inlineStyle = { '--index': `${index}s`, '--color': style } as CSSProperties;

  const tileRef = useRef() as MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    if (guessed)
      setTimeout(() => {
        tileRef.current.style.backgroundColor = style;
        tileRef.current.classList.remove('roll-tile');
        tileRef.current.classList.add('guessed');
      }, seconds(2));
    else tileRef.current.style.backgroundColor = '';
  });

  return (
    <div
      className={
        'wordle-tile h-full relative text-4xl font-medium font-wordle ' +
        'flex items-center justify-center flex-1 ' +
        (correct ? 'jump bg-correct border-correct ' : '') +
        (roll ? 'roll-tile ' : '') +
        (tile ? 'filled ' : '')
      }
      ref={tileRef}
      style={inlineStyle}
    >
      {tile}
    </div>
  );
}
