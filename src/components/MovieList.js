import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    console.log(movies);
    return (
        <div className='pl-6 md:pl-12 pb-0 md:pb-6'>
            <h1 className='font-semibold text-lg md:text-2xl pt-6 pb-2 text-white'>{title}</h1>
            <div className='flex overflow-x-auto no-scrollbar'>
                <div className='flex gap-4'>
                    {
                        movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList