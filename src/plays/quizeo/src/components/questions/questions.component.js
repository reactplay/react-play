import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScoreModel } from "../../pages/score-page/score.component";
import { addScore,showModel } from "../../redux/questions/questions-action";
import { increaseQuestionNo } from "../../redux/questions/questions-action";
import { selectQuestionNo, selectHiddenState } from "../../redux/movie/movieSelector";

import './questions.styles.css';

const Questions = (collection) => {
    const counter = useSelector(selectQuestionNo);
    const hidden  = useSelector(selectHiddenState);
    const dispatch = useDispatch();
    let obj;
    return ( 
        <div className="question-container">
            {Object.keys(collection).map((item,i) => (
                <div className={`${hidden ? '' : 'question-background'} question-model`}>
                {/* movie title */}
                    <p className="category-title"><span className="title">
                        {collection[item].title}</span>
                    </p>
                    <div className="questions-section">
                    {/* question */}
                        <p className="question-title">
                            {counter + 1}.{collection[item].questions[counter].question}
                        </p>
                        
                        {/* options */}
                        <div className="options-section">
                            {Object.keys(collection[item].questions[counter].options).map((option, i) =>(
                                <button className="option-button"
                                value={collection[item].questions[counter].options[option]}
                                // eslint-disable-next-line no-undef
                                onClick={(e) => {
                                    obj = {
                                            answer :e.target.value, 
                                            correct : collection[item].questions[counter].answer
                                        }
                                    }}
                                >
                                {collection[item].questions[counter].options[option]}
                                </button>
                            ))}
                            <br></br>
                            {counter === collection[item].questions.length-1 ?  
                            <button className="submit-answer" onClick= {() => {dispatch(addScore(obj));dispatch(showModel())}} >submit</button> :
                            <button type="button" className="submit-answer" onClick={() => {dispatch(addScore(obj)); dispatch(increaseQuestionNo())}}>Next</button>}
                        </div>
                    </div>
                </div>
            ))}
            {hidden ? null: <ScoreModel questionNo = {counter}/>}
        </div>
    );
}


export default Questions;