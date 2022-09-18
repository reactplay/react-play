import React, { useRef, useState } from "react";
import { faker } from "@faker-js/faker";

import Word from "./Word";
import Timer from "./Timer";

const TypingTest = () => {
  const [userInput, setUserInput] = useState("");
  const typingText = useRef(faker.random.words(5).toLowerCase().split(" "));

  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [correctedWords, setCorrectedWords] = useState([]);
  const [isTestFinish, setIsTestFinish] = useState(false);

  const processUserInput = (value) => {
    if (value?.endsWith(" ")) {
      // If user has finished the word
      setActiveWordIndex((prevIndex) => prevIndex + 1);
      setUserInput("");

      // correct words
      setCorrectedWords((prevData) => {
        let word = value?.trim();
        let newCorrectedWords = [...prevData];
        newCorrectedWords[activeWordIndex] =
          word === typingText.current[activeWordIndex];
        return newCorrectedWords;
      });
    } else {
      setUserInput(value);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h3 className="text-3xl tracking-wide font-semibold text-violet-600">
        Typing Speed Test ⌨️🚀
      </h3>

      <div className="my-8">
        <Timer />
      </div>
      <div className=" max-w-4xl">
        <p className="text-xl tracking-wide leading-9">
          {typingText?.current?.length ? (
            typingText?.current?.map((word, index) => (
              <Word
                text={word}
                isActive={index === activeWordIndex}
                correct={correctedWords[index]}
              />
            ))
          ) : (
            <p>Loading please wait...</p>
          )}
        </p>
      </div>

      <input
        type="text"
        value={userInput}
        onChange={(event) => processUserInput(event.target.value)}
        disabled={isTestFinish}
      />
    </div>
  );
};

export default TypingTest;
