import { useEffect, useState, useRef } from "react";
import { VscRefresh } from "react-icons/vsc";

// Project local imports
import { generateText } from "../utils";
import Stats from "./Stats";
import Timer from "./Timer";
import Word from "./Word";
import ResultModal from "./ResultModal";

const TypingTest = () => {
  const userInputRef = useRef(null);
  const [text, setText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [timer, setTimer] = useState(60);
  const [status, setStatus] = useState("waiting");
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [wordObj, setWordObj] = useState({
    activeWordIndex: 0,
    correctWords: 0,
    incorrectWords: 0,
    correctChars: 0,
    typedWordsArray: [],
  });
  const [stats, setStats] = useState({
    wpm: 0,
    cpm: 0,
    accuracy: 0,
  });

  const refreshState = () => {
    setText(generateText());
    setUserInput("");
    setStatus("waiting");
    setIsTimerStart(false);
    setTimer(60);
    userInputRef.current.focus();
    setWordObj({
      activeWordIndex: 0,
      correctWords: 0,
      incorrectWords: 0,
      correctChars: 0,
      typedWordsArray: [],
    });
    setStats({
      wpm: 0,
      cpm: 0,
      accuracy: 0,
    });
  };

  const handleModalClose = () => {
    refreshState();
    setIsResultModalOpen(false);
  };

  const checkIsWordMatch = (value) => {
    // If it ends with space it means user has finished the word
    setUserInput("");

    // To check each character and word
    const wordToCompare = text[wordObj.activeWordIndex];
    const isWordMatch = wordToCompare === value.trim();

    setWordObj((prevObj) => ({
      ...prevObj,
      activeWordIndex: prevObj.activeWordIndex + 1,
      typedWordsArray: [...prevObj.typedWordsArray, isWordMatch],
    }));

    if (isWordMatch) {
      setWordObj((prevObj) => ({
        ...prevObj,
        correctWords: prevObj.correctWords + 1,
        correctChars: prevObj.correctChars + value.trim().length,
      }));
    } else {
      setWordObj((prevObj) => ({
        ...prevObj,
        incorrectWords: prevObj.incorrectWords + 1,
      }));
    }
  };

  // Hanlde user input
  const handleUserInput = (e) => {
    const { value } = e.target;
    if (!isTimerStart) {
      setIsTimerStart(true);
      setStatus("started");
    }

    if (wordObj.activeWordIndex === text.length) return;

    if (value.endsWith(" ")) {
      checkIsWordMatch(value);

      // Check if length of activeWordIndex  === text - 1 then end the test
      if (wordObj.activeWordIndex === text.length - 1) {
        setStatus("finished");
        setTimer(60);
        setIsResultModalOpen(true);
      }
    } else {
      setUserInput(value);
    }
  };

  useEffect(() => {
    // Set stats object
    setStats({
      wpm: wordObj.correctWords,
      cpm: wordObj.correctChars,
      accuracy: Math.round(
        (wordObj.correctWords /
          (wordObj.correctWords + wordObj.incorrectWords)) *
          100
      ),
    });
  }, [wordObj]);

  useEffect(() => {
    if (timer === 0) {
      setStatus("finished");
      setIsResultModalOpen(true);
    }

    // To start countdown
    const timerTimout = setTimeout(() => {
      if (status === "started") {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => clearTimeout(timerTimout);
  }, [timer, status]);

  useEffect(() => {
    // Setting typing text
    setText(generateText());

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
          <Stats stats={stats} />
        </div>

        <div className="max-w-3xl my-6 mx-auto leading-9 text-justify md:leading-10 tracking-wide">
          {text.length ? (
            text.map((word, index) => (
              <Word
                key={index}
                text={word}
                isActive={index === wordObj.activeWordIndex}
                correct={wordObj.typedWordsArray[index]}
              />
            ))
          ) : (
            <p>Text loading please wait ...</p>
          )}
        </div>

        <div className="flex items-center justify-center mt-8 space-x-7">
          <textarea
            type="text"
            ref={userInputRef}
            disabled={status === "finished"}
            className="rounded-md border !border-violet-400 !p-3 w-[320px] outline-1 outline-violet-600"
            placeholder="Start typing..."
            value={status !== "finished" ? userInput : "Test Completed"}
            onChange={handleUserInput}
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

      {isResultModalOpen && (
        <ResultModal
          open={isResultModalOpen}
          handleModalClose={handleModalClose}
          stats={stats}
        />
      )}
    </>
  );
};

export default TypingTest;
