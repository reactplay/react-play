import { QuestionTypes } from "./question-types";

export const increaseQuestionNo = () =>({
    type:QuestionTypes.INCREASE_QUESTION_NO
})

export const addScore = (answer) => ({
    type:QuestionTypes.ADD_SCORE,
    payload : answer
})

export const showModel = () => ({
    type: QuestionTypes.SHOW_MODEL
})

export const setScore = () => ({
    type:QuestionTypes.SET_SCORE
})

export const setQuestionNo = () => ({
    type:QuestionTypes.SET_QUESTION_NO
})

export const displayQuestionComponent = (linkUrl) =>({
    type: QuestionTypes.DISPLAY_QUESTION_COMPONENT,
    payload: linkUrl
})

export const isClicked = () => ({
    type:QuestionTypes.IS_CLICKED
})