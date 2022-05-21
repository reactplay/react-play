import { useEffect, useState, useCallback } from "react";

import "./QuizScreen.scss";

// assets
import confuseIcon from "./confuse.gif";

const answerState = {
  answer: "",
  cheat: false,
  cheated: false,
};

function QuizScreen({ category, getQuizSummary }) {
  const [quizData, setQuizData] = useState({ loading: false, data: [], error: false });
  const [answer, setAnswer] = useState({ ...answerState });
  const [result, setResult] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [timer, setTimer] = useState(30);

  const formatCategoryText = category === "all" ? "" : `&category=${category}`;
  const currentQuestion = quizData?.data?.[questionNumber];

  useEffect(() => {
    (async () => {
      try {
        setQuizData({ ...quizData, loading: true });
        const response = await fetch(
          `https://opentdb.com/api.php?amount=20${formatCategoryText}&type=multiple`
        );
        const { results } = await response.json();
        // if there is no data coming from api but status 200 is returned then we want to end up in catch block
        if (!results.length) throw new Error(); 
        const createOptions = results.map((result) => {
          const { incorrect_answers, correct_answer } = result;
          const options = [...incorrect_answers];
          options?.splice(
            Math.floor(Math.random() * (options.length + 1)),
            0,
            correct_answer
          );
          return { ...result, options };
        });
        return setQuizData({ data: createOptions, loading: false, error: false });
      } catch (err) {
        setQuizData({ ...quizData, loading: false, error: true });
      }
    })();
  }, []);

  // select and deselect the answer
  const handleAnswerClick = (val) => (e) => {
    setAnswer(
      !!answer.answer && answer.answer === val
        ? answerState
        : { ...answer, answer: val }
    );
  };

  // handling the confirm button click
  const handleConfirm = useCallback(
    (skipped = false) => {
      const updateResult = () => {
        const manageSkippedAnswer = !skipped ? answer.answer : "";
        setResult((pre) => [
          ...pre,
          {
            question: currentQuestion.question,
            correct: currentQuestion.correct_answer === manageSkippedAnswer,
            your_answer: manageSkippedAnswer,
            correct_answer: currentQuestion.correct_answer,
            cheated: answer.cheated,
          },
        ]);
      };

      if (questionNumber === 19) {
        updateResult();
        return getQuizSummary([
          ...result,
          {
            question: currentQuestion.question,
            correct: currentQuestion.correct_answer === answer.answer,
            your_answer: answer.answer,
            correct_answer: currentQuestion.correct_answer,
            cheated: answer.cheated,
          },
        ]);
      }
      updateResult();
      setAnswer(answerState);
      setTimer(30);
      setQuestionNumber(questionNumber + 1);
    },
    [answer, questionNumber, currentQuestion, result, getQuizSummary]
  );

  useEffect(() => {
    if (timer !== -1 && !!quizData.data.length) {
      const setTiming = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(setTiming);
    } else if (!!quizData.data.length) {
      setAnswer('')
      handleConfirm(true);
    }
  }, [timer, handleConfirm, quizData.data]);

  const cheatHandler = (e) => {
    setAnswer({
      cheat: true,
      cheated: true,
      answer: currentQuestion.correct_answer,
    });
    const showCheat = setTimeout(() => {
      setAnswer({ ...answerState, cheated: true });
      clearTimeout(showCheat);
    }, 500);
  };

  const itemClassDisplayController = (option) => {
    if (answer.cheat && answer.answer === option)
      return "option-button blinking-options";
    if (answer.answer === option && !answer.cheat)
      return "option-button active-option";
    return "option-button";
  };

  // if there is an no data we display this message.
  if (quizData?.error) {
    return (<div>We Apologize! Something Error Occured!</div>)
  }

  return (
    <div className='fun-quiz-screen'>
      {quizData.loading && (
        <div className='loading-overlay'>
          <img src={confuseIcon} alt='loading' />
        </div>
      )}
      {!quizData.loading && (
        <div className='section'>
          <div className={`timer ${timer <= 5 && "caution"}`}>{timer}</div>
          <div className='question-info'>Question: {questionNumber + 1}</div>
          <div className='question'>
            <h1
              dangerouslySetInnerHTML={{ __html: currentQuestion?.question }}
            />
          </div>
          <div className='options'>
            {currentQuestion?.options?.map((option, index) => {
              return (
                <div key={index} className='single-opt'>
                  <div
                    onClick={handleAnswerClick(option)}
                    className={itemClassDisplayController(option)}
                    dangerouslySetInnerHTML={{ __html: option }}
                  />
                </div>
              );
            })}
          </div>
          <div className='footer'>
            <button className='link' onClick={() => handleConfirm(true)}>
              Skip
            </button>
            {answer.answer && !answer.cheat && (
              <button onClick={() => handleConfirm()} className='confirm-button'>
                {questionNumber === 19 ? "Submit" : "Confirm"}
              </button>
            )}
            {!answer.answer && (
              <button onClick={cheatHandler} className='cheat-button'>
                I want to Cheat
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizScreen;
