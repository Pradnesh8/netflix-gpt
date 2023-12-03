import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import spinner from "../assets/loader.gif"

const GptSearchResult = () => {
    const { recommendedMovies, recommendedMoviesData, resultsLoading } = useSelector(store => store.gpt)
    if (!recommendedMovies && !resultsLoading) return <div className='pt-8 h-screen bg-gradient-to-r from-black'></div>;
    if (resultsLoading) return (<div className='pt-8 h-screen bg-gradient-to-r from-black flex justify-center'>
        <div className='text-white font-bold'><img src={spinner} alt="loading" /></div>
    </div>);
    return (
        <div className='pt-8 bg-gradient-to-r from-black'>
            {
                recommendedMovies?.map((movieName, index) => <MovieList title={movieName} movies={recommendedMoviesData[index]} />)
            }
        </div>
    )
}

export default GptSearchResult