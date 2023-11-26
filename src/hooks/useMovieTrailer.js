import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addVideoTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const getVideoTrailer = async () => {
        const res = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS);
        const data = await res.json();
        // console.log(data)
        const allData = data.results
        const filteredData = allData?.filter(video => video.type === "Trailer");
        const trailer = filteredData?.length ? filteredData[0] : allData[0];
        console.log(trailer);
        dispatch(addVideoTrailer(trailer));
    }
    useEffect(() => {
        getVideoTrailer();
    }, [])
}
export default useMovieTrailer;