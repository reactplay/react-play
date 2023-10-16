import { useEffect } from 'react';
import React from 'react';
import { KEYS } from '../constants/constants';
import { Key, KeyboardGrid, KeyContainer } from '../styled-components';

interface KeyboardProps {
  correctLetters: string[];
  incorrectLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
}

export default function Keyboard({
  correctLetters,
  incorrectLetters,
  addGuessedLetter,
  disabled = false
}: KeyboardProps) {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (
        !disabled &&
        KEYS.includes(key) &&
        !correctLetters.includes(key) &&
        !incorrectLetters.includes(key)
      ) {
        addGuessedLetter(key);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [correctLetters, incorrectLetters, addGuessedLetter, disabled]);

  return (
    <KeyContainer>
      <KeyboardGrid>
        {KEYS.map((key) => {
          const active = correctLetters.includes(key);
          const inActive = incorrectLetters.includes(key);

          return (
            <Key
              active={active}
              disabled={active || inActive || disabled}
              inActive={inActive}
              key={key}
              onClick={() => addGuessedLetter(key)}
            >
              {key}
            </Key>
          );
        })}
      </KeyboardGrid>
    </KeyContainer>
  );
}
