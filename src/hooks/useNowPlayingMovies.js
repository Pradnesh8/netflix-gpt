import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addError, addNowPlayingMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMovies)
    const errorFound = useSelector(store => store.movies?.errorFound)
    const getNowPlayingMovies = async () => {
        try {
            const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
            const data = await res.json();
            dispatch(addNowPlayingMovies(data.results));
            errorFound && dispatch(addError(null))
        } catch (err) {
            dispatch(addError(err.message));
        }
    }
    useEffect(() => {
        !nowPlayingMovies && getNowPlayingMovies()
    }, [])
}
export default useNowPlayingMovies;