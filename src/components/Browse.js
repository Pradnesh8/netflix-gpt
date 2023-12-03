import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptPage from './GptPage';
import { useSelector } from 'react-redux';


const Browse = () => {
    const movieError = useSelector(store => store.movies?.errorFound);
    const showGptPage = useSelector(store => store.gpt?.showGptSearch)
    if (movieError) {
        alert("Server is facing issue, Please try again after sometime.")
    }
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    return (
        <div>
            <Header />
            {
                showGptPage ?
                    <GptPage /> :
                    <>
                        <MainContainer />
                        <SecondaryContainer />
                    </>
            }
        </div>
    )
}

export default Browse