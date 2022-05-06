import { createSelector } from "reselect";
import memoize from 'lodash.memoize';

const selectMovie = (state) => state.movie;

export const selectMovieData = createSelector(
    [selectMovie],
    movie => movie.collection
)

export const selectMovieDataSection = memoize(collectionUrlParam => createSelector(
    [selectMovieData],
    collection => collection[collectionUrlParam]
))
