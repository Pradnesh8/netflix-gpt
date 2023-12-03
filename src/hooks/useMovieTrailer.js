import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addError, addVideoTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const videoTrailer = useSelector(store => store.movies?.videoTrailer)
    const errorFound = useSelector(store => store.movies?.errorFound)
    const getVideoTrailer = async () => {
        try {
            const res = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS);
            const data = await res.json();
            const allData = data.results
            const filteredData = allData?.filter(video => video.type === "Trailer");
            const trailer = filteredData?.length ? filteredData[0] : allData[0];
            dispatch(addVideoTrailer(trailer));
            errorFound && dispatch(addError(null))
        } catch (err) {
            dispatch(addError(err.message));
        }
    }
    useEffect(() => {
        !videoTrailer && getVideoTrailer();
    }, [])
}
export default useMovieTrailer;