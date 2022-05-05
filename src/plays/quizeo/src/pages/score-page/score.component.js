import React from "react"
import { useSelector, useDispatch} from "react-redux"
import { showModel,setScore, setQuestionNo } from "../../redux/questions/questions-action";
import { useNavigate } from "react-router-dom";
import './score.styles.css';

export const ScoreModel = () => {
    var score = useSelector((state) => state.movie.score)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return(
        <div className="score-container">
            <div className="score-section">
                <button className="score-close" onClick={() => dispatch(showModel())}>x</button>
                <h1>🎉Your score is {score}</h1>
                <button className="play-button"
                    onClick={() => {
                        dispatch(showModel());
                        navigate('/plays/quizeo')
                        dispatch(setScore());
                        dispatch(setQuestionNo());
                        }}>Play again</button>
                </div>
        </div>
    )
}