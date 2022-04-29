import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScoreModel } from "../../pages/score-page/score.component";
import { addScore,showModel } from "../../redux/questions/questions-action";
import { increaseQuestionNo } from "../../redux/questions/questions-action";

const Questions = (collection) => {
   
    const counter = useSelector((state) => state.movie.questionNo);
    const hidden  = useSelector((state) => state.movie.hidden);
    const dispatch = useDispatch();
    let obj;
    return ( 
        <div className="flex flex-col justify-center items-center mx-9 text-center">
            {Object.keys(collection).map((item,i) => (
                <div className={`${hidden ? '' : 'opacity-50 ...'} w-3/4`}>
                {/* movie title */}
                    <p className="text-center text-4xl before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-500 relative inline-block"><span className="relative text-white">
                        {collection[item].title}</span>
                    </p>
                    <div className="bg-sky-100 mt-8 rounded-xl shadow-lg shadow-cyan-600/50...">
                    {/* question */}
                        <p className="text-2xl text-indigo-900 py-12 px-3 font-semibold">
                            {counter + 1}.{collection[item].questions[counter].question}
                        </p>
                        
                        {/* options */}
                        <div className="text-center mx-4">
                            {Object.keys(collection[item].questions[counter].options).map((option, i) =>(
                                <button className="text-white cursor-pointer m-4 py-3 w-52 text-center font-medium uppercase text-lg rounded-full  bg-blue-500 shadow-lg shadow-cyan-500/50 ... hover:bg-blue-600  active:bg-white-700 focus:outline-none focus:ring focus:ring-blue-300 ..."
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
                            <button className="m-7 bg-green-500 w-36 rounded-lg font-medium p-2" onClick= {() => {dispatch(addScore(obj));dispatch(showModel())}} >submit</button> :
                            <button type="button" className="m-7 bg-green-500 w-36 rounded-lg font-medium p-2" onClick={() => {dispatch(addScore(obj)); dispatch(increaseQuestionNo())}}>Next</button>}
                        </div>
                    </div>
                </div>
            ))}
            {hidden ? null: <ScoreModel questionNo = {counter}/>}
        </div>
    );
}


export default Questions;