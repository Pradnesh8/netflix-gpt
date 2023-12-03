import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        recommendedMovies: null,
        recommendedMoviesData: null,
        resultsLoading: false
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
        }
    }
})

export const { toggleShowGpt, addRecommendedMovies, toggleGptResultsLoading, resetResults } = gptSlice.actions;
export default gptSlice.reducer