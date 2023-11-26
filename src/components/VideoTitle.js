import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='pt-60 pl-40'>
            <h1 className='text-4xl font-bold mb-2'>{title}</h1>
            <p className='w-1/3 text-lg font-light'>{overview}</p>
            <div className='mt-4'>
                <button className='px-10 py-3 cursor-pointer mr-4 bg-black rounded-md text-white text-lg'>▶︎ Play</button>
                <button className='px-10 py-3 cursor-pointer mr-4 bg-black rounded-md text-white text-lg'>ℹ️ More info</button>
            </div>
        </div>
    )
}

export default VideoTitle