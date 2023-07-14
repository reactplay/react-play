import React from 'react';
import { MouseEvent } from 'react';
import { LetterStatus } from '../types';

export default function KeyboardKey(props: {
  alphabet: string;
  onKeyClick: (event: MouseEvent<HTMLButtonElement>) => void;
  letterStatus: LetterStatus;
}) {
  const { alphabet, onKeyClick, letterStatus } = props;
  let bgColor = 'bg-gray';

  if (letterStatus.correct.includes(alphabet)) bgColor = 'bg-correct';
  else if (letterStatus.misplaced.includes(alphabet)) bgColor = 'bg-misplaced';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  else if (letterStatus.wrong.includes(alphabet)) bgColor = 'bg-wrong';

  return (
    <div
      className={
        'w-8 h-11 lg:w-10 lg:h-16 to-white text-base font-semibold rounded-[4px] text-center items-center justify-center ' +
        bgColor
      }
    >
      <button
        className="w-full h-full font-wordle"
        data-action={alphabet}
        onMouseDown={(event) => {
          onKeyClick(event);
        }}
      >
        {alphabet}
      </button>
    </div>
  );
}
