import Caret from './Caret';
import cn from 'classnames';
import React from 'react';

type PropType = {
  userInput: string;
  className?: string;
  words: string;
};

const UserTyping = ({ userInput, className, words }: PropType) => {
  const typedCharacters = userInput.split('');

  return (
    <React.Fragment>
      <div className={className}>
        {typedCharacters.map((char, index) => (
          <Character actual={char} expected={words[index]} key={`${char}_${index}`} />
        ))}
        <Caret />
      </div>
    </React.Fragment>
  );
};

const Character = ({ actual, expected }: { actual: string; expected: string }) => {
  const isCorrect = actual === expected;
  const isWhitespace = expected === ' ';

  return (
    <span
      className={cn({
        'text-red-500': !isCorrect && !isWhitespace,
        'text-primary-400': isCorrect && !isWhitespace,
        'bg-red-500/50': !isCorrect && isWhitespace
      })}
    >
      {expected}
    </span>
  );
};

export default UserTyping;
