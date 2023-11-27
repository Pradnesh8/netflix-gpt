import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='absolute pt-60 pl-24 text-white bg-gradient-to-r from-black w-full aspect-video'>
            <h1 className='text-4xl font-bold mb-2'>{title}</h1>
            <p className='w-1/3 text-lg font-light'>{overview}</p>
            <div className='mt-4'>
                <button className='px-8 py-3 cursor-pointer mr-4 bg-white hover:bg-opacity-75 rounded-md text-black text-lg font-semibold'>▶︎ Play</button>
                <button className='px-8 py-3 cursor-pointer mr-4 bg-gray-400 bg-opacity-75 hover:bg-opacity-50 rounded-md text-white font-semibold text-lg'>More info</button>
            </div>
        </div>
    )
}

export default VideoTitle