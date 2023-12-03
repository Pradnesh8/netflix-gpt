import React, { useRef } from 'react'
import lang from '../utils/langConstants'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import openai from '../utils/openai'
import { addRecommendedMovies, toggleGptResultsLoading } from '../utils/gptSlice'

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config?.language)
    const searchStr = useRef(null);
    const dispatch = useDispatch();
    const searchMoviesTMDB = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        return json.results;
    }
    const handleSearchRecommendations = async () => {
        dispatch(toggleGptResultsLoading());
        const query = "Act as an Movie recommendation system, recommend a movie based on query : " + searchStr.current.value + ". Suggest only 5 movies. Response must be a comma separated string like example ahead. Example- Ghayal, Gadar, Spiderman, Batman, IronMan"
        const recommendations = await openai.chat.completions.create({
            messages: [{ role: 'user', content: query }],
            model: 'gpt-3.5-turbo',
        });
        console.log(recommendations);
        const moviesRecommended = recommendations?.choices?.[0].message.content;
        const moviesArray = moviesRecommended.split(",");
        const promisesArray = moviesArray.map(movie => searchMoviesTMDB(movie));
        const allMovies = await Promise.all(promisesArray);
        dispatch(addRecommendedMovies({ movieNames: moviesArray, movieResults: allMovies }))
        dispatch(toggleGptResultsLoading());
    }
    return (
        <>
            {/* <img className='opacity-80 -z-10 absolute' src={BG_URL} alt='bg-cover' /> */}
            <div className='pt-[8%] flex justify-center bg-gradient-to-r from-black'>
                <form onSubmit={(e) => e.preventDefault()} className='w-1/2 bg-black grid grid-cols-12 p-2 rounded-md'>
                    <input ref={searchStr} className='col-span-9 px-4 py-2 mr-2 rounded-md' placeholder={lang[langKey].gptSearchPlaceholder} type="text" name="search" id="search" />
                    <button onClick={handleSearchRecommendations} className='col-span-3 px-4 py-2 bg-red-700 rounded-md text-white'>{lang[langKey].search}</button>
                </form>
            </div>
        </>
    )
}

export default GptSearchBar