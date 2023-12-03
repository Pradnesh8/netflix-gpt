import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        recommendedMovies: null,
        recommendedMoviesData: null,
        resultsLoading: false,
        errorFound: null
    },
    reducers: {
        toggleShowGpt: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addRecommendedMovies: (state, action) => {
            state.recommendedMovies = action.payload.movieNames;
            state.recommendedMoviesData = action.payload.movieResults;
        },
        toggleGptResultsLoading: (state) => {
            state.resultsLoading = !state.resultsLoading;
        },
        resetResults: (state) => {
            state.recommendedMovies = null;
            state.recommendedMoviesData = null;
            state.resultsLoading = false;
        },
        addError: (state, action) => {
            if (!action.payload) {
                state.errorFound = null
            } else {
                state.errorFound = {
                    errorCode: action.payload.errorCode,
                    errorMessage: action.payload.errorMessage
                };
            }
        }
    }
})

export const { addError, toggleShowGpt, addRecommendedMovies, toggleGptResultsLoading, resetResults } = gptSlice.actions;
export default gptSlice.reducer