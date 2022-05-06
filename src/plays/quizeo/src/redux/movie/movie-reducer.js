import movie_data from "../../data/movie.data";
import { QuestionTypes } from "../questions/question-types";
import { calculateScore } from "../questions/question.utils";
const INITIAL_STATE = {
    collection:movie_data,
    hidden: true,
    questionNo : 0,
    score:0
}

const movieReducer = (state = INITIAL_STATE,action) =>{
    switch(action.type){
        case QuestionTypes.ADD_SCORE:
            return{
                ...state,
                score: calculateScore(state.score, action.payload)
            }
        case QuestionTypes.SHOW_MODEL:
            return{
                ...state,
                hidden : !state.hidden
            }
        case QuestionTypes.SET_SCORE:
            return{
                ...state,
                score: 0
            }
        case QuestionTypes.INCREASE_QUESTION_NO:
            return{
                ...state,
                questionNo : state.questionNo + 1
            }
        case QuestionTypes.SET_QUESTION_NO:
            return{
                ...state,
                questionNo: 0
            }
        default:
            return {...state}
    }
}

export default movieReducer;
