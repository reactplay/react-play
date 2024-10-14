import React, { useState, useEffect } from 'react';
import { useTypingTest } from '../context/TypingTestContext';
import Statistics from './Statistics';
import ResultModal from './ResultModal';
import { generateText } from '../utils';

const TypingTest = () => {
  const { wpm, setWPM, cpm, setCPM, accuracy, setAccuracy, maxWPM, setMaxWPM, setModalStats } =
    useTypingTest();

  const [text, setText] = useState(generateText());
  const [, setUserInput] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [correctChars, setCorrectChars] = useState(0);
  const [incorrectChars, setIncorrectChars] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [isTestOver, setIsTestOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);
  const [characterStatus, setCharacterStatus] = useState(Array(text.length).fill(null));
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isTestOver || currentCharIndex >= text.length) return;

      if (!startTime) {
        setStartTime(Date.now());
        startTimer();
      }

      const keyPressed = e.key.toLowerCase();
      if (keyPressed === text[currentCharIndex]) {
        setCorrectChars((prev) => prev + 1);
        setCharacterStatus((prev) => {
          const newStatus = [...prev];
          newStatus[currentCharIndex] = 'correct';

          return newStatus;
        });
      } else {
        setIncorrectChars((prev) => prev + 1);
        setCharacterStatus((prev) => {
          const newStatus = [...prev];
          newStatus[currentCharIndex] = 'incorrect';

          return newStatus;
        });
      }

      setUserInput((prev) => prev + keyPressed);
      setCurrentCharIndex((prev) => prev + 1);

      const currentWPM = calculateWPM();
      const currentCPM = calculateCPM();
      const currentAccuracy = calculateAccuracy();
      setWPM(currentWPM);
      setCPM(currentCPM);
      setAccuracy(currentAccuracy);

      if (currentWPM > maxWPM) {
        setMaxWPM(currentWPM);
      }

      if (currentCharIndex + 1 === text.length) {
        endTest();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [
    currentCharIndex,
    correctChars,
    incorrectChars,
    isTestOver,
    startTime,
    text,
    maxWPM,
    setWPM,
    setCPM,
    setAccuracy,
    setMaxWPM
  ]);

  const startTimer = () => {
    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerInterval);
          endTest();

          return 0;
        }

        return prevTime - 1;
      });
    }, 1000);
  };

  const endTest = () => {
    setIsTestOver(true);

    const finalWPM = calculateWPM();
    const finalCPM = calculateCPM();
    const finalAccuracy = calculateAccuracy();

    setModalStats({
      wpm: finalWPM,
      cpm: finalCPM,
      accuracy: finalAccuracy,
      maxWpm: Math.max(maxWPM, finalWPM)
    });

    setOpenModal(true);
  };

  const calculateWPM = () => {
    if (!startTime) return 0;
    const timeElapsed = (Date.now() - startTime) / 60000;

    return timeElapsed > 0 ? correctChars / 5 / timeElapsed : 0;
  };

  const calculateCPM = () => {
    if (!startTime) return 0;
    const timeElapsed = (Date.now() - startTime) / 60000;

    return timeElapsed > 0 ? (correctChars + incorrectChars) / timeElapsed : 0;
  };

  const calculateAccuracy = () => {
    return (correctChars / (correctChars + incorrectChars)) * 100 || 0;
  };

  const renderText = () => {
    return text.split('').map((char, index) => {
      let className = '';
      if (characterStatus[index] === 'correct') {
        className = 'text-green-500';
      } else if (characterStatus[index] === 'incorrect') {
        className = 'text-red-500';
      }

      return (
        <span className={className} key={index}>
          {char}
        </span>
      );
    });
  };

  const resetTest = () => {
    setOpenModal(false);
    setUserInput('');
    setCurrentCharIndex(0);
    setCorrectChars(0);
    setIncorrectChars(0);
    setStartTime(null);
    setIsTestOver(false);
    setTimeLeft(120);
    setText(generateText());
    setCharacterStatus(Array(text.length).fill(null));
    setMaxWPM(0);
    setWPM(0);
    setCPM(0);
    setAccuracy(0);
  };

  return (
    <div className="typing-test lg:w-3/5 w-full mx-auto">
      <h3
        className="uppercase tracking-widest mt-12 md:mt-20 text-center"
        style={{ color: '1px solid var(--color-neutral-90-rgb)' }}
      >
        Typing Speed Test
      </h3>
      <div className="space-y-4 md:space-y-6 lg:space-y-8 md:mt-4">
        <h1 className="text-3xl md:text-[50px] lg:text-[60px] font-bold text-[#7c3aed] text-center">
          Test your typing skills
        </h1>
        {!isTestOver && <Statistics accuracy={accuracy} cpm={cpm} timeLeft={timeLeft} wpm={wpm} />}
        <div className="text-display flex-wrap  text-start p-4 bg-white md:h-40 shadow-md rounded-sm text-2xl">
          {renderText()}
        </div>
        <ResultModal
          handleModalClose={resetTest}
          open={openModal}
          results={{
            wpm,
            cpm,
            accuracy,
            maxWPM
          }}
        />
      </div>
    </div>
  );
};

export default TypingTest;
