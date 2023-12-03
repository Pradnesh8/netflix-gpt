import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addError, addPopularMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(store => store.movies?.popularMovies)
    const errorFound = useSelector(store => store.movies?.errorFound)
    const getPopularMovies = async () => {
        try {
            const res = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
            const data = await res.json();
            dispatch(addPopularMovies(data.results));
            errorFound && dispatch(addError(null))
        } catch (err) {
            dispatch(addError(err.message));
        }
    }
    useEffect(() => {
        !popularMovies && getPopularMovies()
    }, [])
}
export default usePopularMovies;