import React from 'react';
import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import useEngine from './hooks/useEngine';
import { ResetButton, Result, UserTyping } from './components';
import { calculateAccuracyPercent } from './utils/helpers';
const WordsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative max-w-xl mt-3 text-3xl leading-relaxed break-all">{children}</div>
  );
};

const GeneratedWords = ({ words }: { words: string }) => {
  return <div className=" text-slate-500">{words}</div>;
};
const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="text-primary-400 font-medium">Time: {timeLeft}</h2>;
};

function Typeracer(props: any) {
  // Your Code Start below.
  const { errors, restart, state, timeLeft, totalTyped, typed, words } = useEngine();

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          <CountdownTimer timeLeft={timeLeft} />
          <WordsContainer>
            <GeneratedWords words={words} />
            <UserTyping className="absolute inset-0" userInput={typed} words={words} />
          </WordsContainer>
          <ResetButton className="mx-auto mt-10 text-slate-500" onReset={restart} />
          {state === 'finish' && (
            <Result
              accuracyPercentage={calculateAccuracyPercent(errors, totalTyped)}
              className="mt-10"
              errors={errors}
              total={totalTyped}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Typeracer;
