import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ movie }) => {
    return (
        <div className='w-40 cursor-pointer hover:scale-105 transition-transform '>
            <img src={IMG_CDN_URL + movie?.poster_path} alt={movie?.original_title} />
        </div>
    )
}

export default MovieCard