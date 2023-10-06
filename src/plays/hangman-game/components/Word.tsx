import React from 'react';
import styled from 'styled-components';

interface WordProps {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
}

export default function Word({ guessedLetters, wordToGuess, reveal = false }: WordProps) {
  return (
    <WordContainer>
      {wordToGuess.split('').map((letter, id) => (
        <Border key={id}>
          <LetterComponent guessedLetters={guessedLetters} letter={letter} reveal={reveal}>
            {letter}
          </LetterComponent>
        </Border>
      ))}
    </WordContainer>
  );
}

const WordContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  gap: 1rem;
  max-width: 100vw;
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family: monospace;
  overflow-x: auto !important;

  @media (min-width: 768px) {
    font-size: 5rem;
  }
`;

const Border = styled.span`
  border-bottom: 0.5rem solid black;
`;

interface LetterProps {
  guessedLetters: string[];
  letter: string;
  reveal?: boolean;
}

const LetterComponent = styled.span<LetterProps>`
  visibility: ${({ guessedLetters, letter, reveal }) =>
    guessedLetters.includes(letter) || reveal ? 'visible' : 'hidden'};
  color: ${({ guessedLetters, letter, reveal }) =>
    !guessedLetters.includes(letter) && reveal ? '#d30000' : 'black'};
`;
