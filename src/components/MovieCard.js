import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ movie }) => {
    if (!movie?.poster_path) return null;
    return (
        <div className='w-40 cursor-pointer'>
            <img src={IMG_CDN_URL + movie?.poster_path} alt={movie?.original_title} />
        </div>
    )
}

export default MovieCard