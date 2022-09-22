import { useEffect, useState, useRef } from "react";
import { VscRefresh } from "react-icons/vsc";

// Project local imports
import { generateWords } from "../utils";
import Stats from "./Stats";
import Timer from "./Timer";
import Word from "./Word";
import ResultModal from "./ResultModal";

const Main = () => {
  const userInputRef = useRef(null);
  const [words, setWords] = useState("");
  const [userInput, setUserInput] = useState("");
  const [timer, setTimer] = useState(60);
  const [status, setStatus] = useState("waiting");
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [typedWordsArray, setTypedWordsArray] = useState([]);
  const [incorrectWords, setIncorrectWords] = useState(0);
  const [correctWords, setCorrectWords] = useState(0);
  const [correctCharLength, setCorrectCharLength] = useState(0);
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);

  const refreshState = () => {
    setWords(generateWords());
    setUserInput("");
    setStatus("waiting");
    setIsTimerStart(false);
    setTimer(60);
    setActiveWordIndex(0);
    setCorrectWords(0);
    setIncorrectWords(0);
    setCorrectCharLength(0);
    setTypedWordsArray([]);
    userInputRef.current.focus();
  };

  const handleModalClose = () => {
    refreshState();
    setIsResultModalOpen(false);
  };

  const checkIsWordMatch = (value) => {
    // If it ends with space it meanse user has finished the word
    setActiveWordIndex((index) => index + 1);
    setUserInput("");

    // To check each character and word
    let wordToCompare = words[activeWordIndex];
    let isWordMatch = wordToCompare === value.trim();

    setTypedWordsArray([...typedWordsArray, isWordMatch]);
    if (isWordMatch) {
      setCorrectWords(correctWords + 1);
      setCorrectCharLength((charLen) => charLen + value.trim().length);
    } else {
      setIncorrectWords(incorrectWords + 1);
    }
  };

  // Hanlde user input
  const processUserInput = (value) => {
    if (!isTimerStart) {
      setIsTimerStart(true);
      setStatus("started");
    }

    if (activeWordIndex === words.length) return;

    if (value.endsWith(" ")) {
      checkIsWordMatch(value);

      // Check if length of activeWordIndex  === words then end the test
      if (activeWordIndex === words.length - 1) {
        setStatus("finished");
        setTimer(60);
        setIsResultModalOpen(true);
      }
    } else {
      setUserInput(value);
    }
  };

  useEffect(() => {
    if (timer === 0) {
      setStatus("finished");
      setIsResultModalOpen(true);
      return;
    }

    // To start countdown
    let timerTimout = setTimeout(() => {
      if (status === "started") {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => clearTimeout(timerTimout);
  }, [timer, status]);

  useEffect(() => {
    // Setting typing text
    setWords(generateWords());

    // Setting focus on input
    userInputRef.current.focus();
  }, []);

  return (
    <>
      <div className=" max-w-3xl text-center my-8 mx-auto flex flex-col justify-center">
        <h2 className="text-[1.6rem] md:text-4xl  text-violet-600 font-bold">
          Typing Speed Test ⌨️🚀
        </h2>
        <p className="text-base my-2 md:text-lg md:my-3 text-gray-600  ">
          Test your typing skills
        </p>

        {/* Statistics & Timer */}
        <div className="flex flex-col justify-around items-center my-5 sm:flex-row md:my-6 md:mt-8 ">
          <Timer timer={timer} />
          <Stats
            wpm={correctWords}
            cpm={correctCharLength}
            accuracy={Math.round(
              (correctWords / (correctWords + incorrectWords)) * 100
            )}
          />
        </div>

        <div className="max-w-3xl my-6 mx-auto leading-9 text-justify md:leading-10 tracking-wide">
          {words.length ? (
            words.map((word, index) => (
              <Word
                key={index}
                text={word}
                isActive={index === activeWordIndex}
                correct={typedWordsArray[index]}
              />
            ))
          ) : (
            <p>Text loading please wait ...</p>
          )}
        </div>

        <div className="flex items-center justify-center mt-8 space-x-7">
          <input
            type="text"
            ref={userInputRef}
            disabled={status === "finished"}
            className="rounded-md border !border-violet-400 !p-3 w-[300px] outline-1 outline-violet-600"
            placeholder="Start typing..."
            value={status !== "finished" ? userInput : "Test Completed"}
            onChange={(e) => processUserInput(e.target.value)}
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

      <ResultModal
        open={isResultModalOpen}
        handleModalClose={handleModalClose}
        wpm={correctWords}
        cpm={correctCharLength}
        accuracy={Math.round(
          (correctWords / (correctWords + incorrectWords)) * 100
        )}
      />
    </>
  );
};

export default Main;
