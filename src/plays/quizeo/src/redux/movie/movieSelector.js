import { createSelector } from "reselect";
import memoize from 'lodash.memoize';

const selectMovie = (state) => state.movie;

export const selectQuestionIndex = createSelector(
    [selectMovie],
    movie => movie.questionIndex
)

export const selectQuestionNo = createSelector(
    [selectMovie],
    movie => movie.questionNo
)

export const selectHiddenState = createSelector(
    [selectMovie],
    movie => movie.hidden
)

export const selectScore = createSelector(
    [selectMovie],
    movie => movie.score
)

export const selectClickedAction = createSelector(
    [selectMovie],
    movie => movie.setClicked
)

export const selectMovieData = createSelector(
    [selectMovie],
    movie => movie.collection
)

export const selectMovieDataSection = memoize(collectionUrlParam => createSelector(
    [selectMovieData],
    collection => collection[collectionUrlParam]
))
