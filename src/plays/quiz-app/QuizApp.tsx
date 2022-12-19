import React, { useEffect, useState } from 'react';
import PlayHeader from 'common/playlists/PlayHeader';

import { CgEditFlipH } from 'react-icons/cg';
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';
import useLocalStorage from 'common/hooks/useLocalStorage';
import { Status, QuestionProps } from './types';

const questionsArray = [
  {
    qNo: 1,
    title: 'JavaScript ',
    question: 'Which type of JavaScript language is ___',
    answers: ['Object-Oriented', 'Object-Based', 'Assembly-language', 'High-level'],
    answer: 2,
    qStatus: 0
  },
  {
    qNo: 2,
    title: 'JavaScript ',
    question: 'In JavaScript, what is a block of statement?',
    answers: [
      'Conditional block',
      'block that combines a number of statements into a single compound statement',
      'both conditional block and a single statement',
      'block that contains a single statement'
    ],
    answer: 2,
    qStatus: 0
  },
  {
    qNo: 3,
    title: 'JavaScript',
    question: 'When interpreter encounters an empty statements, what it will do:',
    answers: [
      'Shows a warning',
      'Prompts to complete the statement',
      'Throws an error',
      'Ignores the statements'
    ],
    answer: 4,
    qStatus: 0
  },
  {
    qNo: 4,
    title: 'JavaScript',
    question: 'The "function" and " var" are known as:',
    answers: ['Keywords', 'Data types', 'Declaration statements', 'Prototypes'],
    answer: 3,
    qStatus: 0
  },
  {
    qNo: 5,
    title: 'JavaScript ',
    question:
      'Which of the following variables takes precedence over the others if the names are the same?',
    answers: ['Global variable', 'The local element', 'The two of the above', 'None of the above'],
    answer: 2,
    qStatus: 0
  },
  {
    qNo: 6,
    title: 'JavaScript',
    question: 'Which one of the following is the correct way for calling the JavaScript code?',
    answers: ['Preprocessor', 'Triggering Event', 'RMI', 'Function/Method'],
    answer: 4,
    qStatus: 0
  },
  {
    qNo: 7,
    title: 'JavaScript ',
    question: 'Which of the following type of a variable is volatile?',
    answers: ['Mutable variable', 'Dynamic variable', 'Volatile variable', 'Immutable variable'],
    answer: 1,
    qStatus: 0
  },
  {
    qNo: 8,
    title: 'JavaScript',
    question: 'Which of the following option is used as hexadecimal literal beginning?',
    answers: ['00', '0x', '0X', 'Both 0x and 0X'],
    answer: 4,
    qStatus: 0
  },
  {
    qNo: 9,
    title: 'JavaScript ',
    question:
      'When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints______.',
    answers: [
      'Prints an exception error',
      'Prints an overflow error',
      'Displays "Infinity"',
      'Prints the value as such'
    ],
    answer: 3,
    qStatus: 0
  },
  {
    qNo: 10,
    title: 'JavaScript',
    question: 'Which one of the following also known as Conditional Expression:',
    answers: [
      'Alternative to if-else',
      'Switch statement',
      'If-then-else statement',
      'immediate if'
    ],
    answer: 4,
    qStatus: 0
  }
];

function QuizApp(props: any) {
  const [question, setQuestion] = useState<number>(0);
  const [isWin, setIsWin] = useState<boolean | null>(null);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [status, setStatus] = useState<Status[]>([]);
  const [selectedAns, setSelectedAns] = useState<number | null>(null);
  const [key, setKey] = useState<number>(0);

  const [questions, setQuestions] = useLocalStorage('questions', questionsArray);

  useEffect(() => {
    setQuestions(questions);
  }, [key]);

  const nextQuestion = () => {
    const currentQuestion = question;
    currentQuestion < 9 ? setQuestion(currentQuestion + 1) : setQuestion(0);
    setIsWin(null);
    setIsFlipped(false);
    setSelectedAns(null);
  };

  const selectedQuestion = (question: number) => {
    setQuestion(question - 1);
    setIsWin(null);
    setIsFlipped(false);
    setKey(Math.random());
    setSelectedAns(null);
  };

  const handleAnswer = (qNo: number, ans: number) => {
    const question = questions.filter((q: QuestionProps) => q.qNo === qNo)[0];
    setKey(Math.random());
    setSelectedAns(ans);
    if (question.answer === ans + 1) {
      setIsWin(true);
      const questionsClone = questions;
      questionsClone[qNo - 1].qStatus = 1;
      setQuestions(questionsClone);
      setStatus([...status, { qNo: qNo, status: 1 }]);
    } else {
      setIsWin(false);
      setStatus([...status, { qNo: qNo, status: 0 }]);
    }
  };

  const showAnswer = () => {
    isWin !== null && setIsFlipped(!isFlipped);
  };

  const handleClear = () => {
    const questionsClone = questions;
    const clearedQuestions = questionsClone.map((question: { qStatus: number }) =>
      question.qStatus === 1 ? { ...question, qStatus: 0 } : question
    );
    setQuestions(clearedQuestions);
    setQuestion(0);
  };

  return (
    <div className="play-details">
      <PlayHeader play={props} />
      <div className="max-w-[1080px] w-[100%] mx-auto px-5 sm:px-8 md:px-1 lg:px-0 py-10 flex items-center min-h-[calc(100vh-182px)] flex-col md:flex-row">
        <div className="w-full md:w-[30%] md:mr-2 flex flex-col justify-center">
          {questions.map((q: QuestionProps) => (
            <div className="flex" key={q.qNo}>
              <AiOutlineCheck
                color="#021C1E"
                size={20}
                style={{ visibility: q.qStatus === 1 ? 'visible' : 'hidden' }}
              />
              <button
                className={`text-left ml-2 hover:text-blue-500
              ${q.qNo === question + 1 ? 'text-blue-500' : ''}`}
                onClick={() => selectedQuestion(q.qNo)}
              >
                {q.qNo} {`${q.question.split(' ', 4).join(' ')}...`}
              </button>
            </div>
          ))}
          <button
            className="text-white mb-10 md:mb-0 mt-5 py-2 px-10 rounded-lg bg-[#021C1E]"
            onClick={() => handleClear()}
          >
            Start Again
          </button>
        </div>
        <div className="w-full md:w-[70%] mx-auto max-w-[700px] min-h-[350px] bg-[#6FB98F] flex flex-col py-5 px-8 sm:px-10 md:px-20 rounded-md">
          <div className="text-[#021C1E] flex-1 flex flex-col justify-center">
            <div className="pb-2">Question: {questions[question].qNo}</div>
            <div className="pb-2">{questions[question].question}</div>
            <div className="flex flex-col">
              {questions[question].answers.map((answer: string, index: number) => (
                <button
                  className={`text-left py-2 border-b-2 ${
                    questions[question].qStatus === 1
                      ? 'opacity-50 cursor-auto'
                      : 'hover:text-blue-700'
                  } ${
                    isWin === false && index + 1 === questions[question].answer && isFlipped
                      ? ' border-red-600'
                      : index + 1 === questions[question].answer &&
                        questions[question].qStatus === 1
                      ? 'border-[#021C1E]'
                      : 'border-b-0'
                  } ${selectedAns === index ? 'text-blue-700' : ''}`}
                  disabled={questions[question].qStatus === 1 ? true : false}
                  key={index}
                  onClick={() => handleAnswer(questions[question].qNo, index)}
                >
                  {`${index + 1}) ${answer}`}
                </button>
              ))}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex">
              <button onClick={() => showAnswer()}>
                <CgEditFlipH size={40} />
              </button>
              {isWin === false ? (
                <AiOutlineClose color="red" size={40} />
              ) : isWin === true ? (
                <AiOutlineCheck color="#021C1E" size={40} />
              ) : (
                ''
              )}
            </div>
            <button
              className="text-[#2C7873] py-2 px-10 rounded-lg bg-[#021C1E] w-32 self-end"
              onClick={() => nextQuestion()}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizApp;
