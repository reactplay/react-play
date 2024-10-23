import React, { createContext, useContext, useState } from 'react';

const TypingTestContext = createContext();

export const TypingTestProvider = ({ children }) => {
  const [wpm, setWPM] = useState(0);
  const [cpm, setCPM] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [maxWPM, setMaxWPM] = useState(0);
  const [modalStats, setModalStats] = useState({ wpm: 0, cpm: 0, accuracy: 0, maxWpm: 0 });

  return (
    <TypingTestContext.Provider
      value={{
        wpm,
        setWPM,
        cpm,
        setCPM,
        accuracy,
        setAccuracy,
        maxWPM,
        setMaxWPM,
        modalStats,
        setModalStats
      }}
    >
      {children}
    </TypingTestContext.Provider>
  );
};

export const useTypingTest = () => {
  return useContext(TypingTestContext);
};
