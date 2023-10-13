import styled from 'styled-components';

/** *************************************
 *       Main's Styled Components
 ***************************************/
export const BigContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const Container = styled.div`
  margin: 0 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  min-height: 100vh;
  max-width: 800px;
  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    Fira Sans,
    Droid Sans,
    Helvetica Neue,
    sans-serif;
  position: relative;
  padding-bottom: 10px;
  @media (min-width: 768px) {
    margin: 0 auto;
  }
`;

export const P = styled.p`
  margin-bottom: -20px;
  font-size: 20px;
`;

export const Span = styled.span`
  font-weight: bold;
`;

export const Title = styled.h1`
  padding: 15px;
`;

interface Key {
  isWinner: boolean;
}

export const EndGame = styled.button<Key>`
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

export const TryAgainButton = styled.button`
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

/** *************************************
 *       Keyboard's Styled Components
 ***************************************/
export const KeyContainer = styled.div`
  align-self: stretch;
`;

export const KeyboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  gap: 0.5rem;
  width: 100%;
`;

export interface KeyProps {
  active: boolean;
  inActive: boolean;
}

export const Key = styled.button<KeyProps>`
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

/** *************************************
 *       Drawing's Styled Components
 ***************************************/
export const Head = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 10px solid black;
  position: absolute;
  top: 40px;
  right: -20px;

  @media (min-width: 768px) {
    top: 50px;
  }
`;

export const Body = styled.div`
  width: 10px;
  height: 80px;
  background: black;
  position: absolute;
  top: 90px;
  right: 0;

  @media (min-width: 768px) {
    height: 100px;
    top: 90px;
  }
`;

export const RightArm = styled.div`
  width: 70px;
  height: 10px;
  background: black;
  position: absolute;
  top: 110px;
  right: -70px;
  transform: rotate(-30deg);
  transform-origin: left bottom;

  @media (min-width: 768px) {
    width: 100px;
    top: 130px;
    right: -100px;
  }
`;

export const LeftArm = styled.div`
  width: 70px;
  height: 10px;
  background: black;
  position: absolute;
  top: 110px;
  right: 10px;
  transform: rotate(30deg);
  transform-origin: right bottom;

  @media (min-width: 768px) {
    width: 100px;
    top: 130px;
  }
`;

export const RightLeg = styled.div`
  width: 80px;
  height: 10px;
  background: black;
  position: absolute;
  top: 160px;
  right: -70px;
  transform: rotate(60deg);
  transform-origin: left bottom;

  @media (min-width: 768px) {
    width: 100px;
    top: 180px;
    right: -90px;
  }
`;

export const LeftLeg = styled.div`
  width: 80px;
  height: 10px;
  background: black;
  position: absolute;
  top: 160px;
  right: 0;
  transform: rotate(-60deg);
  transform-origin: right bottom;

  @media (min-width: 768px) {
    width: 100px;
    top: 180px;
  }
`;

export const Element1 = styled.div`
  height: 10px;
  width: 120px;
  background: black;

  @media (min-width: 768px) {
    height: 10px;
    width: 200px;
  }
`;

export const Element2 = styled.div`
  margin-left: 60px;
  height: 300px;
  width: 10px;
  background: black;

  @media (min-width: 768px) {
    margin-left: 100px;
    height: 320px;
    width: 10px;
  }
`;

export const Element3 = styled.div`
  margin-left: 60px;
  height: 10px;
  width: 150px;
  background: black;

  @media (min-width: 768px) {
    margin-left: 100px;
    height: 10px;
    width: 200px;
  }
`;

export const Element4 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 40px;
  width: 10px;
  background: black;

  @media (min-width: 768px) {
    height: 50px;
  }
`;

/** *************************************
 *       Word's Styled Components
 ***************************************/
export const WordContainer = styled.div`
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

export const Border = styled.span`
  border-bottom: 0.5rem solid black;
`;

interface LetterProps {
  guessedLetters: string[];
  letter: string;
  reveal?: boolean;
}

export const LetterComponent = styled.span<LetterProps>`
  visibility: ${({ guessedLetters, letter, reveal }) =>
    guessedLetters.includes(letter) || reveal ? 'visible' : 'hidden'};
  color: ${({ guessedLetters, letter, reveal }) =>
    !guessedLetters.includes(letter) && reveal ? '#d30000' : 'black'};
`;
