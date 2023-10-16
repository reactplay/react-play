import React from 'react';
import { Border, LetterComponent, WordContainer } from '../styled-components';

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
