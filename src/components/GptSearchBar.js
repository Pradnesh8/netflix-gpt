import React from 'react'
import lang from '../utils/langConstants'
import { useSelector } from 'react-redux'
import { BG_URL } from '../utils/constants'

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config?.language)
    return (
        <>
            <img className='opacity-80 -z-10 absolute' src={BG_URL} alt='bg-cover' />
            <div className='pt-[8%] flex justify-center'>
                <form onSubmit={(e) => e.preventDefault()} className='w-1/2 bg-black grid grid-cols-12 p-2 rounded-md'>
                    <input className='col-span-9 px-4 py-2 mr-2 rounded-md' placeholder={lang[langKey].gptSearchPlaceholder} type="text" name="search" id="search" />
                    <button className='col-span-3 px-4 py-2 bg-red-700 rounded-md text-white'>{lang[langKey].search}</button>
                </form>
            </div>
        </>
    )
}

export default GptSearchBar