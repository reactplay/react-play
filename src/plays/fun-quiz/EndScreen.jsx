// vendors
import { Fragment, useState } from "react";

//css
import "./FrontScreen.scss";

const EndScreen = ({ quizSummary, redirectHome }) => {
  const { correctAnswers, cheatedAnswers, wrongAnswers, result } = quizSummary;
  const [currentQuestion, setCurrentQuestion] = useState({});

  const ShowCurrentQuestionDetails = ({ currentQuestion }) => {
    if (!Object.keys(currentQuestion).length) return false;
    return (
      <div
        className={`display-question ${
          currentQuestion.correct ? "correct" : "incorrect"
        }`}
      >
        <div className='question-number'>Question: {currentQuestion?.qNo}</div>
        <li
          dangerouslySetInnerHTML={{
            __html: `${currentQuestion?.question}`,
          }}
        />
        <span
          dangerouslySetInnerHTML={{
            __html: `<br/><b>Ans</b>: ${currentQuestion?.correct_answer}<br/>`,
          }}
        />
        <span
          dangerouslySetInnerHTML={{
            __html: `<b>Your Answer</b>: ${currentQuestion?.your_answer}`,
          }}
        />
      </div>
    );
  };

  return (
    <Fragment>
      <div className='fun-quiz-main'>
        <div className='main-child'>
          <h1>Quiz Summary</h1>
          {!cheatedAnswers ? (
            <h2 className='congrats'>Congratulations!</h2>
          ) : (
            <h2 className='cheated'>You Cheated!</h2>
          )}
          <div className='quiz-summary'>
            <div>
              <h4>
                <span>{correctAnswers}</span>
                <span>Correct Answers</span>
              </h4>
              {!!cheatedAnswers && (
                <h4 className='cheated'>({cheatedAnswers} cheated)</h4>
              )}
            </div>
            <div>
              <span>{wrongAnswers}</span>
              <span>Wrong Answers</span>
            </div>
          </div>
          <div className='front-footer'>
            <button onClick={redirectHome}>Home</button>
          </div>
          <div className='circle-area'>
            {result.map((item, index) => {
              return (
                <div
                  key={`${item.question + index}`}
                  className={
                    item.correct ? "circle-correct" : "circle-incorrect"
                  }
                  onClick={() =>
                    setCurrentQuestion({ ...item, qNo: index + 1 })
                  }
                >
                  {index + 1}
                </div>
              );
            })}
          </div>
          <ShowCurrentQuestionDetails currentQuestion={currentQuestion} />
        </div>
      </div>
    </Fragment>
  );
};

export default EndScreen;
