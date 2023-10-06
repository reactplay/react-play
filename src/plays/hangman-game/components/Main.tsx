import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Drawing from './Drawing';
import words from './wordList.json';
import Keyboard from './Keyboard';
import Word from './Word';

const tryAgainIcon = (
  <svg
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 16 16"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      d="M12.75 8a4.5 4.5 0 0 1-8.61 1.834l-1.391.565A6.001 a6.001 0 0 0 14.25 8A6 6 0 0 0 3.5 4.334V2.5H2v4l.75.75h3.5v-1.5H4.352A4.5 4.5 0 0 1 12.75 8z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

function getRandomWord(arr: { [key: string]: string }[]) {
  const obj = arr[Math.floor(Math.random() * arr.length)];
  const word = Object.values(obj)[0] as string;

  return { question: Object.keys(obj)[0], word };
}

export default function App() {
  const [wordToGuess, setWordToGuess] = useState<string>('');
  const [hintToGuess, setHintToGuess] = useState<string>('');
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter((letter) => !wordToGuess.includes(letter));

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.split('').every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = (letter: string) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    }
  };

  const restartGame = () => {
    const { word, question } = getRandomWord(words);
    setHintToGuess(question);
    setWordToGuess(word);
    setGuessedLetters([]);
  };

  useEffect(() => {
    restartGame();
    // eslint-disable-next-line
  }, []);

  return (
    <BigContainer>
      <Container>
        <Title>Hangman</Title>

        {!(isWinner || isLoser) ? (
          <Drawing numberOfGuesses={incorrectLetters.length} />
        ) : (
          <EndGame isWinner={isWinner}>
            {isWinner && 'You are a winner!'}
            {isLoser && 'Nice try...'}
          </EndGame>
        )}
        {!(isWinner || isLoser) && (
          <p
            style={{
              marginBottom: '-20px',
              fontSize: '20px'
            }}
          >
            <span style={{ fontWeight: 'bold' }}>Question: {hintToGuess} </span>
          </p>
        )}
        <Word guessedLetters={guessedLetters} reveal={isLoser} wordToGuess={wordToGuess} />

        {(isWinner || isLoser) && (
          <TryAgainButton onClick={restartGame}>{tryAgainIcon}</TryAgainButton>
        )}

        <Keyboard
          addGuessedLetter={addGuessedLetter}
          correctLetters={guessedLetters.filter((letter) => wordToGuess.includes(letter))}
          disabled={isWinner || isLoser}
          incorrectLetters={incorrectLetters}
        />
      </Container>
    </BigContainer>
  );
}

const BigContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const Container = styled.div`
  margin: 0 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  min-height: 100vh;
  max-width: 800px;
  font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
    Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  position: relative;
  padding-bottom: 10px;
  @media (min-width: 768px) {
    margin: 0 auto;
  }
`;

const Title = styled.h1`
  padding: 15px;
`;

interface Key {
  isWinner: boolean;
}

const EndGame = styled.button<Key>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
  color: ${({ isWinner }) => (isWinner ? 'green' : 'red')};

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const TryAgainButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem;
  border: 3px solid black;
  border-radius: 1rem;
  font-size: 2.5rem;
  background: none;
  color: black;
  cursor: pointer;

  &:hover,
  &:focus {
    background: #16a085;
  }

  @media (min-width: 768px) {
    font-size: 2.3rem;
  }
`;
