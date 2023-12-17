import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    if (!movies) return;
    const mainMovie = movies[0];
    const { original_title, overview, id } = mainMovie;

    return (
        <div className='pt-[20%] md:p-0'>
            <VideoTitle title={original_title} overview={overview} movie={mainMovie} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer