import React from 'react'
import { useSelector } from 'react-redux';
import useMovieVideo from '../hooks/useMovieVideo';
import { IMG_CDN_URL } from '../utils/constants';

const VideoTrailer = ({ movieId, movie_poster }) => {
    const trailerVideo = useSelector(store => store.movies?.movieTrailer)
    useMovieVideo(movieId);
    if (!trailerVideo) return <div className='flex justify-center'><img src={IMG_CDN_URL + movie_poster} alt={movieId} className='h-[40vh] md:h-[80vh]' /></div>
    return (

        <div className='w-full overflow-y-hidden' >
            <iframe
                className='w-full aspect-video'
                src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&loop=1&mute=0&showinfo=0&controls=0&showsearch=0&modestbranding=1"}
                title="YouTube video player"
                allow='autoplay'
            >
            </iframe>
        </div>

    )
}

export default VideoTrailer