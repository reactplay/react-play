import React from 'react';
import { useState, useEffect, useRef, MutableRefObject, MouseEvent } from 'react';
import PlayHeader from 'common/playlists/PlayHeader';

// Components
import ClipboardModal from './components/ClipboardModal';
import EndScreen from './components/EndScreen';
import KeyboardKey from './components/KeyboardKey';
import WordleRow from './components/WordleRow';

// Utils and Types
import { createElement, setLocalData } from './utils';
import { AllTimeStats, TileRow, WordleAction } from './types';

// Assets and style
import './styles.css';
import WORDLE_WORDS from './data/words';
import backspace from './assets/backspace.svg';
import share from './assets/share.svg';

// Get a random wordle word from data
function getRandomWordleWord() {
  const randomWordIndex = Math.floor(Math.random() * WORDLE_WORDS.length);
  const wordleWordAns = WORDLE_WORDS[randomWordIndex].toUpperCase();

  return wordleWordAns;
}

const ERR_EXP_AFTER = 2.2 * 1000;
const ALPHABETS = 'abcdefghijklmnopqrstuvwxyz';

function Wordle(props: any): JSX.Element {
  // Your Code Start below.

  const [wordleWord, setWordleWord] = useState<string>(getRandomWordleWord());
  const [tiles, setTiles] = useState(
    Array<TileRow | null>(6)
      .fill(null)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .map((_) => ({ row: ['', '', '', '', ''], guessed: false }))
  );

  const [currRow, setRow] = useState(0);
  const [currIndex, setIndex] = useState(0);

  const [letterStatus, setLetterStatus] = useState({
    wrong: Array<string>(),
    misplaced: Array<string>(),
    correct: Array<string>()
  });

  const notifSlideRef = useRef() as MutableRefObject<HTMLDivElement>;
  const wordleRef = useRef() as MutableRefObject<HTMLDivElement>;

  const [allTimeStats, setStats] = useState<AllTimeStats | null>(null);
  const [wordleCopy, setWordleCopy] = useState<Node | null>(null);

  const [gameOver, setGameOver] = useState(false);
  const removeCopy = () => setWordleCopy(null);

  function reset() {
    // Reset and start a new game!
    setWordleWord(getRandomWordleWord());
    setTiles(
      Array<TileRow | null>(6)
        .fill(null)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .map((_) => ({ row: ['', '', '', '', ''], guessed: false }))
    );

    setRow(0);
    setIndex(0);
    // Resetting letter status to remove keyboard formatting
    setLetterStatus({
      wrong: Array<string>(),
      misplaced: Array<string>(),
      correct: Array<string>()
    });
    // This method removes all children from element node
    notifSlideRef.current.replaceChildren();
    setStats(null);
    setGameOver(false);
  }

  function pushNotif(string: string) {
    const errorMsg = createElement(
      'div',
      'bg-slate-200 p-2 text-center font-semibold rounded-lg delete-after',
      string
    );
    notifSlideRef.current.insertBefore(errorMsg, notifSlideRef.current.firstChild);

    setTimeout(() => {
      notifSlideRef.current.removeChild(errorMsg);
    }, ERR_EXP_AFTER);
  }

  // Update the letter's formatting on keyboard
  function updateLetterStatus(tileRow: TileRow) {
    tileRow.row.forEach((letter, index) => {
      if (
        letterStatus.correct.includes(letter) ||
        letterStatus.misplaced.includes(letter) ||
        letterStatus.wrong.includes(letter)
      )
        return;

      if (
        wordleWord.split('').indexOf(letter) === index &&
        !letterStatus.correct.includes(letter)
      ) {
        letterStatus.correct.push(letter);
      } else if (
        wordleWord.split('').indexOf(letter) === -1 &&
        !letterStatus.wrong.includes(letter)
      ) {
        letterStatus.wrong.push(letter);
      } else if (
        wordleWord.split('').indexOf(letter) !== index &&
        !letterStatus.misplaced.includes(letter)
      ) {
        letterStatus.misplaced.push(letter);
      }
    });
    setLetterStatus(letterStatus);
  }

  function evaluateRow() {
    if (currIndex !== 5) {
      return pushNotif('Not enough words');
    }

    const tileRow = tiles[currRow];
    const currGuess = tileRow.row.join('');

    // If the word is not in global list
    if (!WORDLE_WORDS.includes(currGuess.toLowerCase())) {
      return pushNotif('Not in word list');
    }

    // If the guess is correct
    if (currGuess.toUpperCase() === wordleWord) {
      tileRow.guessed = true;
      setGameOver(true);

      setTimeout(() => {
        const answerElem = createElement(
          'div',
          'bg-slate-200 p-2 text-center font-semibold rounded-lg text-lg',
          'Well Done!'
        );
        notifSlideRef.current.insertBefore(answerElem, notifSlideRef.current.firstChild);
      }, 2.5 * 1000);

      updateLetterStatus(tileRow);
      setTimeout(() => {
        const updatedStats = setLocalData('WIN', currRow);
        setStats(updatedStats);
      }, 5 * 1000);
    } else {
      // The guess is not correct
      tileRow.guessed = true;

      if (currRow === 5) {
        // All the guesses are used and player failed to guess the correct word
        // Show the correct word in Error slide
        setGameOver(true);
        const answerElem = createElement(
          'div',
          'bg-slate-200 p-2 text-center font-semibold rounded-lg text-lg font-wordle text-black',
          wordleWord.toUpperCase()
        );
        notifSlideRef.current.insertBefore(answerElem, notifSlideRef.current.firstChild);

        setTimeout(() => {
          const updatedStats = setLocalData('LOSS', currRow);
          setStats(updatedStats);
        }, 5 * 1000);
      }
      updateLetterStatus(tileRow);
    }

    tiles[currRow] = tileRow;
    setTiles(tiles);
    setRow(currRow + 1);
    setIndex(0);
  }

  function handleGameAction(action: WordleAction) {
    if (!action || gameOver) return;

    // Check and evaluate the guess
    if (action === 'Enter') {
      evaluateRow();
    }

    // Delete a letter from row
    else if (action === 'Backspace') {
      if (currIndex === 0) return;

      const prevIndex = currIndex;
      tiles[currRow].row[prevIndex - 1] = '';

      setIndex(currIndex - 1);
      setTiles(tiles);
    }

    // It's an alphabet, insert it in the row
    else if (ALPHABETS.includes(action.toLowerCase())) {
      if (currIndex === 5) return;
      tiles[currRow].row[currIndex] = action.toUpperCase();

      setIndex(currIndex + 1);
      setTiles(tiles);
    }
  }

  // Physical keyboard event handler
  function handleKeyUpEvent(event: globalThis.KeyboardEvent) {
    handleGameAction(event.key as WordleAction);
  }

  // Virtual keyboard event handler
  function onKeyClick(event: MouseEvent<HTMLButtonElement | HTMLImageElement>) {
    if (!(event.target instanceof HTMLButtonElement) && !(event.target instanceof HTMLImageElement))
      return;
    event.target.blur();

    handleGameAction(event.target.dataset.action as WordleAction);
  }

  useEffect(() => {
    document.body.addEventListener('keyup', handleKeyUpEvent);

    return () => document.body.removeEventListener('keyup', handleKeyUpEvent);
  });

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          <div className="wordle-game-body font-wordle">
            <div className="w-full h-[80vh] flex flex-col lg:flex-row items-center justify-center relative overflow-hidden lg:space-x-8 space-y-4 lg:space-y-0">
              <div
                className="error-slide w-48 bg-transparent absolute p-3 space-y-4 z-10 top-14 font-wordle"
                ref={notifSlideRef}
              />

              <button
                className={
                  'copy-button w-12 sm:w-16 h-8 sm:h-10 bg-correct absolute top-0 sm:top-4 right-2 sm:right-6 rounded-2xl p-px ' +
                  'text-white text-sm font-medium ' +
                  'hover:bg-[#60a25a] transition active:bg-correct mt-4 outline-transparent'
                }
                data-action="Copy"
                title="Copy Current Tiles"
                onClick={() => setWordleCopy(wordleRef.current.cloneNode(true))}
              >
                <img
                  alt="Copy Current Tiles"
                  className="bg-transparent w-6 sm:w-8 h-auto m-auto"
                  src={share}
                />
              </button>

              {allTimeStats && <EndScreen allTimeStats={allTimeStats} reset={reset} />}
              {wordleCopy && (
                <ClipboardModal
                  pushNotif={pushNotif}
                  removeCopy={removeCopy}
                  wordleCopy={wordleCopy}
                />
              )}

              <div
                className="wordle w-[21rem] lg:w-[20rem] h-[24rem] flex flex-col items-center justify-evenly"
                ref={wordleRef}
              >
                <WordleRow rowNo={0} tileRow={tiles[0]} wordleWord={wordleWord} />
                <WordleRow rowNo={1} tileRow={tiles[1]} wordleWord={wordleWord} />
                <WordleRow rowNo={2} tileRow={tiles[2]} wordleWord={wordleWord} />
                <WordleRow rowNo={3} tileRow={tiles[3]} wordleWord={wordleWord} />
                <WordleRow rowNo={4} tileRow={tiles[4]} wordleWord={wordleWord} />
                <WordleRow rowNo={5} tileRow={tiles[5]} wordleWord={wordleWord} />
              </div>

              <div className="keyboard w-[22rem] lg:w-[30rem] h-44 lg:h-[13rem] flex flex-col items-center justify-evenly">
                <div className="keyboard-row w-full h-1/3 flex items-center justify-evenly">
                  {'QWERTYUIOP'.split('').map((alphabet) => (
                    <KeyboardKey
                      alphabet={alphabet}
                      key={alphabet}
                      letterStatus={letterStatus}
                      onKeyClick={onKeyClick}
                    />
                  ))}
                </div>

                <div className="keyboard-row w-full h-1/3 flex items-center justify-evenly px-3 lg:px-6">
                  {'ASDFGHJKL'.split('').map((alphabet) => (
                    <KeyboardKey
                      alphabet={alphabet}
                      key={alphabet}
                      letterStatus={letterStatus}
                      onKeyClick={onKeyClick}
                    />
                  ))}
                </div>

                <div className="keyboard-row w-full h-1/3 flex items-center justify-evenly">
                  <button
                    className="w-10 h-11 lg:w-16 lg:h-16 bg-gray text-white text-xs lg:text-sm font-semibold rounded-[4px] text-center flex items-center justify-center font-wordle"
                    data-action="Enter"
                    onMouseDown={(event) => {
                      onKeyClick(event);
                    }}
                  >
                    ENTER
                  </button>

                  {'ZXCVBNM'.split('').map((alphabet) => {
                    return (
                      <KeyboardKey
                        alphabet={alphabet}
                        key={alphabet}
                        letterStatus={letterStatus}
                        onKeyClick={onKeyClick}
                      />
                    );
                  })}

                  <button
                    className="w-10 h-11 lg:w-14 lg:h-16 bg-gray text-white text-sm font-semibold rounded-[4px] text-center flex items-center justify-center"
                    data-action="Backspace"
                    onMouseDown={(event) => {
                      onKeyClick(event);
                    }}
                  >
                    <img
                      alt="Backspace Key"
                      className="bg-transparent"
                      data-action="Backspace"
                      src={backspace}
                      onMouseDown={(event) => {
                        const target = event.target as HTMLImageElement;
                        target.parentElement.dispatchEvent(new Event('mousedown'));
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wordle;
