// vendors
import { Fragment, useState } from "react";

//css
import "./FrontScreen.scss";

const EndScreen = ({ quizSummary, redirectHome }) => {
  const { correctAnswers, cheatedAnswers, wrongAnswers, result } = quizSummary;
  const [currentQuestion, setCurrentQuestion] = useState({});

  const ShowCurrentQuestionDetails = ({currentQuestion}) => {
    if (!Object.keys(currentQuestion).length) return false;
    return (
      <div className={`display-question ${currentQuestion.correct ? 'correct' : 'incorrect'}`}>
        <div className="question-number">Question: {currentQuestion?.qNo}</div>
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
          {!cheatedAnswers ? <h2 className='congrats'>Congratulations!</h2> : <h2 className='cheated'>You Cheated!</h2>}
          <div className='quiz-summary'>
            <h4>
              Correct Answer(s): {correctAnswers}
              {!!cheatedAnswers && (
                <span className='cheated'>({cheatedAnswers} cheated)</span>
              )}
            </h4>
            <h4>Wrong Answer(s): {wrongAnswers}</h4>
          </div>
          <div className='front-footer'>
            <button onClick={redirectHome}>Home</button>
          </div>
          <div className='circle-area'>
            {result.map((item, index) => {
              return (
                <div
                key={`${item.question+index}`}
                  className={
                    item.correct ? "circle-correct" : "circle-incorrect"
                  }
                  onClick={() => setCurrentQuestion({...item, qNo: index+1})}
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
