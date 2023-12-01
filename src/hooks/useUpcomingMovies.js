import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getUpcomingMovies = async () => {
        const res = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
        const data = await res.json();
        dispatch(addUpcomingMovies(data.results));
    }
    useEffect(() => {
        getUpcomingMovies()
    }, [])
}
export default useUpcomingMovies;