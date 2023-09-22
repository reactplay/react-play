import React from 'react';
import { useEffect, useState } from 'react';

import WordleTile from './WordleTile';
import { TileRow, TileColor } from '../types';

export default function WordleRow(props: { tileRow: TileRow; wordleWord: string }) {
  const { tileRow, wordleWord } = props;
  const [isCorrect, setCorrect] = useState(false);

  useEffect(() => {
    if (tileRow.row.join('') === wordleWord) {
      setTimeout(() => setCorrect(true), 2 * 1000);
    }

    return () => setCorrect(false);
  }, [tileRow.guessed]);

  return (
    <div className="wordle-row w-full flex items-center justify-evenly flex-1 [column-gap:0.625rem] p-1 to-slate-200">
      {tileRow.guessed
        ? tileRow.row.map((letter, index) => {
            if (wordleWord.includes(letter) && wordleWord.slice(index, index + 1) === letter) {
              return (
                <WordleTile
                  roll
                  correct={isCorrect}
                  index={index}
                  key={crypto.randomUUID()}
                  style={TileColor.CORRECT}
                  tile={letter}
                />
              );
            } else if (
              wordleWord.includes(letter) &&
              wordleWord.slice(index, index + 1) !== letter
            ) {
              return (
                <WordleTile
                  roll
                  correct={isCorrect}
                  index={index}
                  key={crypto.randomUUID()}
                  style={TileColor.MISPLACED}
                  tile={letter}
                />
              );
            } else {
              return (
                <WordleTile
                  roll
                  correct={isCorrect}
                  index={index}
                  key={crypto.randomUUID()}
                  style={TileColor.WRONG}
                  tile={letter}
                />
              );
            }
          })
        : tileRow.row.map((letter, index) => {
            return (
              <WordleTile
                correct={isCorrect}
                index={index}
                key={crypto.randomUUID()}
                roll={false}
                style={TileColor.MISPLACED}
                tile={letter}
              />
            );
          })}
    </div>
  );
}
