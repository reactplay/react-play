import React from "react"
import { useSelector, useDispatch} from "react-redux"
import { showModel,setScore, setQuestionNo, isClicked } from "../../redux/questions/questions-action";
import { selectScore } from "../../redux/movie/movieSelector";
import './score.styles.css';

export const ScoreModel = () => {
    var score = useSelector(selectScore);
    const dispatch = useDispatch();
    return(
        <div className="score-container">
            <div className="score-section">
                <button className="score-close" onClick={() => dispatch(showModel())}>x</button>
                <h1>🎉Your score is {score}</h1>
                <button className="play-button"
                    onClick={() => {
                        dispatch(showModel());
                        dispatch(setScore());
                        dispatch(isClicked());
                        dispatch(setQuestionNo());
                        }}>Play again</button>
                </div>
        </div>
    )
}