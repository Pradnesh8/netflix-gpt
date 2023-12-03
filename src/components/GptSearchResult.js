import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import spinner from "../assets/loader.gif"

const GptSearchResult = () => {
    const { recommendedMovies, recommendedMoviesData, resultsLoading, errorFound } = useSelector(store => store.gpt)
    if (!recommendedMovies && !resultsLoading) return <div className='pt-8 h-screen bg-gradient-to-r from-black to-slate-700'></div>;
    if (resultsLoading) return (<div className='pt-8 h-screen bg-gradient-to-r from-black to-slate-700 flex justify-center'>
        <div className='text-white font-bold'><img src={spinner} alt="loading" /></div>
    </div>);
    if (errorFound) {
        return (
            <div className='pt-0 h-screen md:pt-8 pb-6 md:pb-0 bg-gradient-to-r from-black to-slate-700'>
                {
                    errorFound?.errorCode === 500 ?
                        <div className='text-white underline decoration-red-900 text-center font-semibold text-lg'>
                            Server is facing problems, Please try again after sometime.
                        </div> :
                        <div className='text-white text-center font-semibold text-lg'>
                            {errorFound.errorMessage}
                        </div>
                }

            </div>
        )
    }
    return (
        <div className='pt-0 min-h-screen md:pt-8 pb-6 md:pb-0 bg-gradient-to-r from-black to-slate-700'>
            {
                recommendedMovies?.map((movieName, index) => <MovieList key={movieName} title={movieName} movies={recommendedMoviesData[index]} />)
            }
        </div>
    )
}

export default GptSearchResult