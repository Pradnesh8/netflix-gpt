import React from 'react'
import { useSelector } from 'react-redux';
import useMovieVideo from '../hooks/useMovieVideo';

const VideoTrailer = ({ movieId }) => {
    const trailerVideo = useSelector(store => store.movies?.movieTrailer)
    useMovieVideo(movieId);
    return (
        <div className='w-full overflow-y-hidden'>
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