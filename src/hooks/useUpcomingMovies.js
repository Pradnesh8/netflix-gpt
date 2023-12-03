import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addError, addUpcomingMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovies = useSelector(store => store.movies?.upcomingMovies)
    const errorFound = useSelector(store => store.movies?.errorFound)
    const getUpcomingMovies = async () => {
        try {
            const res = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
            const data = await res.json();
            dispatch(addUpcomingMovies(data.results));
            errorFound && dispatch(addError(null))
        } catch (err) {
            dispatch(addError(err.message));
        }
    }
    useEffect(() => {
        !upcomingMovies && getUpcomingMovies()
    }, [])
}
export default useUpcomingMovies;