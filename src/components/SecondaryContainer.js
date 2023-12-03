import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
    const movies = useSelector(store => store?.movies)
    if (!movies || !movies?.nowPlayingMovies || !movies?.popularMovies || !movies?.topRatedMovies || !movies?.upcomingMovies) return
    return (
        <div className='bg-black'>
            <div className='relative -mt-6 md:-mt-64 pb-6 md:pb-0 z-20'>
                <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
                <MovieList title={"Popular"} movies={movies?.popularMovies} />
                <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
                <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
            </div>
        </div>
    )
}

export default SecondaryContainer