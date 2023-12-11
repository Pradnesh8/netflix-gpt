import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        videoTrailer: null,
        movieTrailer: null,
        errorFound: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        // For Background of landing page
        addVideoTrailer: (state, action) => {
            state.videoTrailer = action.payload;
        },
        addMovieTrailer: (state, action) => {
            state.movieTrailer = action.payload;
        },
        addError: (state, action) => {
            state.errorFound = action.payload;
        }
    }
})

export const { addError, addMovieTrailer, addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addVideoTrailer } = moviesSlice.actions;
export default moviesSlice.reducer;