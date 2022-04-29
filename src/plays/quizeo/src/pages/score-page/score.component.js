import React from "react"
import { useSelector, useDispatch} from "react-redux"
import { showModel,setScore, setQuestionNo } from "../../redux/questions/questions-action";
import { useNavigate } from "react-router-dom";

export const ScoreModel = () => {
    var score = useSelector((state) => state.movie.score)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return(
        <div className="flex justify-center align-items-center">
            <div className="bg-white h-64 w-96 absolute top-1/4 flex flex-col align-items-center justify-center rounded-3xl">
                <button className="text-black absolute text-3xl top-4 right-8" onClick={() => dispatch(showModel())}>x</button>
                <h1 className="text-2xl font-medium ">🎉Your score is {score}</h1>
                <button className=" bg-cyan-500 shadow-lg shadow-cyan-500/50 ... my-7 mx-20 rounded-3xl p-3"
                    onClick={() => {
                        dispatch(showModel());
                        navigate('/')
                        dispatch(setScore());
                        dispatch(setQuestionNo());
                        }}>Play again</button>
                </div>
            {console.log(score)}
        </div>
    )
}