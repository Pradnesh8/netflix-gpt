import React, { useRef } from 'react'
import lang from '../utils/langConstants'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import openai from '../utils/openai'
import { addError, addRecommendedMovies, toggleGptResultsLoading } from '../utils/gptSlice'

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config?.language)
    const searchStr = useRef(null);
    const errorFound = useSelector(store => store.gpt.errorFound);
    const dispatch = useDispatch();
    const searchMoviesTMDB = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        return json.results;
    }
    const handleSearchRecommendations = async () => {
        dispatch(toggleGptResultsLoading());
        try {
            const query = "Act as an Movie recommendation system, recommend a movie based on query : " + searchStr.current.value + ". Suggest only 5 movies. Response must be a comma separated string like example ahead. Example- Ghayal, Gadar, Spiderman, Batman, IronMan"
            const recommendations = await openai.chat.completions.create({
                messages: [{ role: 'user', content: query }],
                model: 'gpt-3.5-turbo',
            });
            const moviesRecommended = recommendations?.choices?.[0].message.content;
            const moviesArray = moviesRecommended.split(",");
            if (moviesArray.length !== 5) {
                dispatch(addError({ errorMessage: moviesRecommended, errorCode: 400 }));
            }
            const promisesArray = moviesArray.map(movie => searchMoviesTMDB(movie));
            const allMovies = await Promise.all(promisesArray);
            dispatch(addRecommendedMovies({ movieNames: moviesArray, movieResults: allMovies }))
            errorFound && dispatch(addError(null));
        } catch (error) {
            dispatch(addError({ errorMessage: error.message, errorCode: 500 }));
        } finally {
            dispatch(toggleGptResultsLoading());
        }
    }
    return (
        <>
            {/* <img className='opacity-80 -z-10 absolute' src={BG_URL} alt='bg-cover' /> */}
            <div className='pt-[34%] md:pt-[8%] flex justify-center bg-gradient-to-r from-black to-slate-700'>
                <form onSubmit={(e) => e.preventDefault()} className='w-full mx-2 md:mx-0 md:w-1/2 bg-black grid grid-cols-12 p-2 rounded-md'>
                    <input ref={searchStr} className='col-span-9 px-4 py-2 mr-2 rounded-md' placeholder={lang[langKey].gptSearchPlaceholder} type="text" name="search" id="search" />
                    <button onClick={handleSearchRecommendations} className='col-span-3 px-4 py-2 bg-red-700 rounded-md text-white'>{lang[langKey].search}</button>
                </form>
            </div>
        </>
    )
}

export default GptSearchBar