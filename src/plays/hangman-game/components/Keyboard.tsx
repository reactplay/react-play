import { useEffect } from 'react';
import React from 'react';
import styled from 'styled-components';

const KEYS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

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

const KeyContainer = styled.div`
  align-self: stretch;
`;

const KeyboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  gap: 0.5rem;
  width: 100%;
`;

interface KeyProps {
  active: boolean;
  inActive: boolean;
}

const Key = styled.button<KeyProps>`
  aspect-ratio: 1/1;
  width: 100%;
  border: 3px solid black;
  border-radius: 1rem;
  font-size: 2rem;
  font-family: monospace;
  text-transform: uppercase;
  font-weight: bold;
  background: ${({ active }) => (active ? '#16A085' : 'none')};
  color: ${({ active }) => (active ? 'white' : 'black')};
  opacity: ${({ inActive }) => (inActive ? '0.3' : '1')};
  cursor: pointer;

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background-color: #f4d03f;
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media (min-width: 768px) {
    font-size: 2.3rem;
  }
`;
