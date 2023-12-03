import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import spinner from "../assets/loader.gif"

const GptSearchResult = () => {
    const { recommendedMovies, recommendedMoviesData, resultsLoading } = useSelector(store => store.gpt)
    if (!recommendedMovies && !resultsLoading) return <div className='pt-8 h-screen bg-gradient-to-r from-black to-slate-700'></div>;
    if (resultsLoading) return (<div className='pt-8 h-screen bg-gradient-to-r from-black to-slate-700 flex justify-center'>
        <div className='text-white font-bold'><img src={spinner} alt="loading" /></div>
    </div>);
    return (
        <div className='pt-0 md:pt-8 pb-6 md:pb-0 bg-gradient-to-r from-black to-slate-700'>
            {
                recommendedMovies?.map((movieName, index) => <MovieList title={movieName} movies={recommendedMoviesData[index]} />)
            }
        </div>
    )
}

export default GptSearchResult