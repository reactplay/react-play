import React, { useEffect, useState } from "react";

import { VscRefresh } from "react-icons/vsc";

import Stats from "./Stats";
import Timer from "./Timer";
import { generateWords } from "../utils";

const Main = () => {
  const [words, setWords] = useState("");
  const [userInput, setUserInput] = useState("");
  const [timer, setTimer] = useState(10);
  const [status, setStatus] = useState("waiting");
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [correctWords, setCorrectWords] = useState(0);
  const [incorrectWords, setIncorrectWords] = useState(0);

  const refreshState = () => {
    setWords(generateWords());
    setUserInput("");
    setStatus("waiting");
    setIsTimerStart(false);
    setTimer(60);
    setActiveWordIndex(0);
    setCorrectWords(0);
    setIncorrectWords(0);
  };

  // To check each character and word
  const checkWordMatch = () => {
    let wordToCompare = words[activeWordIndex];
    let isWordMatch = wordToCompare === userInput.trim();

    isWordMatch
      ? setCorrectWords(correctWords + 1)
      : setIncorrectWords(incorrectWords + 1);
  };

  const handleUserInputKeyDown = ({ keyCode }) => {
    if (!isTimerStart) setIsTimerStart(true);

    // Start the game
    setStatus("started");

    // Check if character entered by user is " " (space) then only call the checkWordMatch() to check the word correct or not
    if (keyCode === 32) {
      checkWordMatch();
      setUserInput("");
      setActiveWordIndex(activeWordIndex + 1);
    }
  };

  useEffect(() => {
    if (timer === 0) {
      setStatus("finished");
      return;
    }

    setTimeout(() => {
      if (status === "started") {
        setTimer(timer - 1);
      }
    }, 1000);
  }, [timer, status]);

  useEffect(() => {
    // Set typing text
    setWords(generateWords());
  }, []);

  return (
    <div className=" max-w-3xl text-center my-4 mx-auto flex flex-col justify-center">
      <h2 className="text-3xl text-violet-600 font-bold">
        Typing Speed Test ⌨️🚀
      </h2>
      <p className="text-lg text-gray-600 my-3 ">Test your typing skills</p>

      {/* Statistics & Timer */}
      <div className="flex my-6 justify-around items-center">
        <Timer timer={timer} />
        <Stats
          wordsPerMinute={correctWords}
          accuracy={Math.round(
            (correctWords / (correctWords + incorrectWords)) * 100
          )}
        />
      </div>

      <div className="max-w-3xl my-4 mx-auto text-justify leading-9 tracking-wide">
        {words?.length ? (
          words?.map((word, index) => (
            <span key={index} className="text-lg">
              {word?.split("")?.map((char, i) => (
                <span key={i}>{char}</span>
              ))}{" "}
            </span>
          ))
        ) : (
          <p>Loading please wait ...</p>
        )}
      </div>

      <div className="flex items-center justify-center mt-10 space-x-7">
        <input
          type="text"
          disabled={status === "finished"}
          className="rounded-md border !border-violet-400 !p-3 w-[300px] outline-1 outline-violet-600"
          placeholder="Start typing..."
          value={status !== "finished" ? userInput : "Test Completed"}
          onKeyDown={handleUserInputKeyDown}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <div
          title="Refresh"
          className="border bg-violet-600 p-3 rounded-md cursor-pointer"
          onClick={refreshState}
        >
          <VscRefresh fontSize={22} color="white" />
        </div>
      </div>
    </div>
  );
};

export default Main;
